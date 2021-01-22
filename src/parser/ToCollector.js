const antlr4 = require('antlr4/index');
const sequenceParserListener = require('../generated-parser/sequenceParserListener');

let descendantTos = undefined;
let isBlind = false;
const ToCollector = function () {
  descendantTos = new Map()
  sequenceParserListener.sequenceParserListener.call(this)
  return this
};

ToCollector.prototype = Object.create(sequenceParserListener.sequenceParserListener.prototype)

let onTo = function (ctx) {
  if (isBlind) return;
  let participant = ctx.getText();
  // remove leading and trailing quotes (e.g. "a:A" becomes a:A
  participant = participant.replace(/^"(.*)"$/, '$1');
  descendantTos.set(participant, descendantTos.get(participant) || {});
};

let onParticipant = function (ctx) {
  if (isBlind) return;
  let participant = ctx.name().getText();
  let interfase = ctx.interfase()?.name()?.getText();
  let width = (ctx.width && ctx.width()) && Number.parseInt(ctx.width().getText()) || undefined;
  descendantTos.set(participant, {width: width, interface: interfase});
};
ToCollector.prototype.enterParticipant = onParticipant

ToCollector.prototype.enterFrom = onTo
ToCollector.prototype.enterTo = onTo

ToCollector.prototype.enterSource = onTo
ToCollector.prototype.enterTarget = onTo

ToCollector.prototype.enterCreation = function (ctx) {
  if (isBlind) return;
  const assignee = ctx.assignment() && ctx.assignment().assignee().getText();
  const type = ctx.constructor().getText();
  const participant = assignee ? assignee + ':' + type : type;
  descendantTos.set(participant, descendantTos.get(participant) || {});
}

ToCollector.prototype.enterParameters = function () {
  isBlind = true;
}

ToCollector.prototype.exitParameters = function () {
  isBlind = false;
}
const walker = antlr4.tree.ParseTreeWalker.DEFAULT

ToCollector.prototype.getAllTos2 = function (me) {
  return function (context) {
    walker.walk(me, context)
    return descendantTos
  }
}

module.exports = ToCollector;
