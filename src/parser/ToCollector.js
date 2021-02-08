const antlr4 = require('antlr4/index');
const sequenceParserListener = require('../generated-parser/sequenceParserListener');
(function() {
  if ( typeof Object.id == "undefined" ) {
    var id = 0;

    Object.id = function(o) {
      if (!o) return 0;
      if ( typeof o.__uniqueid == "undefined" ) {
        Object.defineProperty(o, "__uniqueid", {
          value: ++id,
          enumerable: false,
          // This could go either way, depending on your
          // interpretation of what an "id" is
          writable: false
        });
      }

      return o.__uniqueid;
    };
  }
})();
let descendantTos = undefined;
let isBlind = false;
let groupId = undefined;
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

// Rules:
// 1. Later declaration win
let onParticipant = function (ctx) {
  // if(!(ctx?.name())) return;
  if (isBlind) return;
  let participant = ctx?.name()?.getText() || 'Missing `Participant`';
  let stereotype = ctx.stereotype()?.name()?.getText();
  let width = (ctx.width && ctx.width()) && Number.parseInt(ctx.width().getText()) || undefined;
  const explicit = true;
  descendantTos.set(participant, {width, stereotype, groupId, explicit});
};
ToCollector.prototype.enterParticipant = onParticipant

ToCollector.prototype.enterFrom = onTo
ToCollector.prototype.enterTo = onTo

ToCollector.prototype.enterSource = onTo
ToCollector.prototype.enterTarget = onTo

ToCollector.prototype.enterCreation = function (ctx) {
  if (isBlind) return;
  const assignee = ctx.assignment() && ctx.assignment().assignee().getText();
  const type = ctx.construct().getText();
  const participant = assignee ? assignee + ':' + type : type;
  descendantTos.set(participant, descendantTos.get(participant) || {});
}

ToCollector.prototype.enterParameters = function () {
  isBlind = true;
}

ToCollector.prototype.exitParameters = function () {
  isBlind = false;
}

ToCollector.prototype.enterGroup = function (ctx) {
  // group { A } => groupId = 1
  // group group1 { A } => groupId = "group1"
  groupId = ctx.name()?.getText().replace(/^"|"$/g, '') || Object.id(ctx);
}

ToCollector.prototype.exitGroup = function () {
  groupId = undefined;
}
const walker = antlr4.tree.ParseTreeWalker.DEFAULT

ToCollector.prototype.getAllTos = function (me) {
  return function (context) {
    walker.walk(me, context)
    return descendantTos
  }
}

module.exports = ToCollector;
