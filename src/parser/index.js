var antlr4  = require('antlr4/index')
var sequenceLexer = require('../generated-parser/sequenceLexer')
var sequenceParser = require('../generated-parser/sequenceParser')
var ToCollector = require('./ToCollector')
var ChildFragmentDetector = require('./ChildFragmentDetecotr')
var getInheritedFrom = require('./From')

const errors = [];
class SeqErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    errors.push(`${offendingSymbol} line ${line}, col ${column}: ${msg}`);
  }
}

function rootContext(code) {
  var chars = new antlr4.InputStream(code)
  var lexer = new sequenceLexer.sequenceLexer(chars)
  var tokens = new antlr4.CommonTokenStream(lexer)
  var parser = new sequenceParser.sequenceParser(tokens)
  parser.addErrorListener(new SeqErrorListener());
  return parser._syntaxErrors ? null : parser.prog();
}

antlr4.ParserRuleContext.prototype.getCode = function() {
  return this.parser.getTokenStream().getText(this.getSourceInterval()).replace(/^"(.*)"$/, '$1')
};

antlr4.ParserRuleContext.prototype.getComment = function() {
  let tokenIndex = this.start.tokenIndex;
  let channel = sequenceLexer.sequenceLexer.prototype.channelNames.indexOf('COMMENT_CHANNEL');
  if (this.constructor.name === 'BraceBlockContext') {
    tokenIndex = this.stop.tokenIndex
  }
  let hiddenTokensToLeft = this.parser
    .getTokenStream()
    .getHiddenTokensToLeft(tokenIndex, channel);
  return hiddenTokensToLeft && hiddenTokensToLeft
    .map(t => t.text.substring(2))  // skip '//'
    .join('');
};

antlr4.ParserRuleContext.prototype.returnedValue = function() {
  return this.braceBlock().block().ret().value()
}

module.exports =  {
  RootContext: rootContext,
  GroupContext: sequenceParser.sequenceParser.GroupContext,
  ParticipantContext: sequenceParser.sequenceParser.ParticipantContext,
  Participants: function(ctx) {
    const toCollector = new ToCollector();
    return toCollector.getParticipants(ctx)
  },
  GetInheritedFrom: getInheritedFrom,
  Errors: errors,
  /**
   * @return {number} how many levels of embedded fragments
   */
  Depth: function(ctx) {
    const childFragmentDetector = new ChildFragmentDetector();
    return  childFragmentDetector.depth(childFragmentDetector)(ctx)
  }
}
