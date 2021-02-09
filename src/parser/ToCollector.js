import {Participants} from './Participants'

const antlr4 = require('antlr4/index');
const sequenceParserListener = require('../generated-parser/sequenceParserListener');

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
  let participant = ctx?.name()?.getText() || 'Missing `Participant`';
  let stereotype = ctx.stereotype()?.name()?.getText();
  let width = (ctx.width && ctx.width()) && Number.parseInt(ctx.width().getText()) || undefined;
  const label = ctx.label && ctx.label()?.name()?.getText();
  const explicit = true;
  participants.Add(participant, false, stereotype, width, groupId, label?.replaceAll('"', ''), explicit);
};
ToCollector.prototype.enterParticipant = onParticipant

let onTo = function (ctx) {
  if (isBlind) return;
  let participant = ctx.getText();
  // remove leading and trailing quotes (e.g. "a:A" becomes a:A
  participant = participant.replace(/^"(.*)"$/, '$1');
  participants.Add(participant);
};


ToCollector.prototype.enterFrom = onTo
ToCollector.prototype.enterTo = onTo

ToCollector.prototype.enterSource = onTo
ToCollector.prototype.enterTarget = onTo

ToCollector.prototype.enterStarter = function(ctx) {
  let participant = ctx.getText();
  // remove leading and trailing quotes (e.g. "a:A" becomes a:A
  participant = participant.replace(/^"(.*)"$/, '$1');
  participants.Add(participant, true)
}

ToCollector.prototype.enterCreation = function (ctx) {
  if (isBlind) return;
  const assignee = ctx.assignment() && ctx.assignment().assignee().getText();
  const type = ctx.construct().getText();
  const participant = assignee ? assignee + ':' + type : type;
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
  groupId = ctx.name()?.getText().replace(/^"|"$/g, '');
}

ToCollector.prototype.exitGroup = function () {
  groupId = undefined;
}
const walker = antlr4.tree.ParseTreeWalker.DEFAULT

ToCollector.prototype.getParticipants = function (context) {
  participants = new Participants();
  walker.walk(this, context)
  return participants;
}

module.exports = ToCollector;
