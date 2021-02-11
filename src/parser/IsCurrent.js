const sequenceParser = require('../generated-parser/sequenceParser')

const seqParser = sequenceParser.sequenceParser;
const CreationContext = seqParser.CreationContext;
CreationContext.prototype.isCurrent = function (cursor) {
  if (cursor === null || cursor === undefined) return false;
  const start = this.start.start;
  const stop = this.creationBody().stop.stop + 1;

  return cursor >= start && cursor <= stop;
}


const MessageContext = seqParser.MessageContext

MessageContext.prototype.isCurrent = function (cursor) {
  if (cursor === null || cursor === undefined) return false;
  const start = this.start.start;
  const stop = this.messageBody().stop.stop + 1;

  return cursor >= start && cursor <= stop;
}
