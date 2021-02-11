const sequenceParser = require('../generated-parser/sequenceParser')

const seqParser = sequenceParser.sequenceParser;
const CreationContext = seqParser.CreationContext;
CreationContext.prototype.isCurrent = function (cursor) {
  const start = this.start.start;
  const stop = this.creationBody().stop.stop + 1;

  return cursor >= start && cursor <= stop;
}
