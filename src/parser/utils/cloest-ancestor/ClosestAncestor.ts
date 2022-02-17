const antlr4 = require('antlr4/index');
const sequenceParser = require('../../../generated-parser/sequenceParser')

const seqParser = sequenceParser.sequenceParser;
const StatContext = seqParser.StatContext;

antlr4.ParserRuleContext.prototype.ClosestAncestorStat = function() {
  let current = this;
  while(!(current instanceof StatContext)) {
    current = current.parentCtx;
  }
  if (current instanceof StatContext) {
    return current;
  }
  return undefined;
}

export {}
