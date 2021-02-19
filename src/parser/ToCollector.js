import {Participants} from './Participants'

const antlr4 = require('antlr4/index');
const sequenceParserListener = require('../generated-parser/sequenceParserListener');
const sequenceParser = require('../generated-parser/sequenceParser')
const seqParser = sequenceParser.sequenceParser;
const ProgContext = seqParser.ProgContext;

let participants = undefined;
let isBlind = false;
let groupId = undefined;
const ToCollector = function () {
  sequenceParserListener.sequenceParserListener.call(this)
  return this
};

ToCollector.prototype = Object.create(sequenceParserListener.sequenceParserListener.prototype)
// Rules:
// 1. Later declaration win
// 2. Participant declaration overwrite cannot be overwritten by To or Starter
let onParticipant = function (ctx) {
  // if(!(ctx?.name())) return;
  if (isBlind) return;
  const type = ctx?.participantType()?.getTextWithoutQuotes();
  const participant = ctx?.name()?.getTextWithoutQuotes() || 'Missing `Participant`';
  const stereotype = ctx.stereotype()?.name()?.getTextWithoutQuotes();
  const width = (ctx.width && ctx.width()) && Number.parseInt(ctx.width().getText()) || undefined;
  const label = ctx.label && ctx.label()?.name()?.getTextWithoutQuotes();
  const explicit = true;

  participants.Add(participant, false, stereotype, width, groupId, label, explicit, type);
};
ToCollector.prototype.enterParticipant = onParticipant

let onTo = function (ctx) {
  if (isBlind) return;
  let participant = ctx.getTextWithoutQuotes();
  participants.Add(participant);
};


ToCollector.prototype.enterFrom = onTo
ToCollector.prototype.enterTo = onTo

ToCollector.prototype.enterSource = onTo
ToCollector.prototype.enterTarget = onTo

ToCollector.prototype.enterStarter = function(ctx) {
  let participant = ctx.getTextWithoutQuotes();
  participants.Add(participant, true)
}

ToCollector.prototype.enterCreation = function (ctx) {
  if (isBlind) return;
  const participant = ctx.Owner();
  participants.Add(participant);
}

ToCollector.prototype.enterParameters = function () {
  isBlind = true;
}

ToCollector.prototype.exitParameters = function () {
  isBlind = false;
}

ToCollector.prototype.enterGroup = function (ctx) {
  // group { A } => groupId = undefined
  // group group1 { A } => groupId = "group1"
  groupId = ctx.name()?.getTextWithoutQuotes();
}

ToCollector.prototype.exitGroup = function () {
  groupId = undefined;
}
const walker = antlr4.tree.ParseTreeWalker.DEFAULT

ToCollector.prototype.getParticipants = function (context, withStarter) {
  participants = new Participants();
  if(withStarter && context instanceof ProgContext) {
    participants.Add(context.Starter(), true)
  }
  walker.walk(this, context)
  return participants;
}

module.exports = ToCollector;
