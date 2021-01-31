var antlr4  = require('antlr4/index')
var sequenceLexer = require('../generated-parser/sequenceLexer')
var sequenceParser = require('../generated-parser/sequenceParser')
var ToCollector = require('./ToCollector')
var ChildFragmentDetector = require('./ChildFragmentDetecotr')

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

function getFrom(ctx) {
  let from = ctx.from()
  if (from) {
    return from.getText();
  }
  // e.g. A.m1 {m2}, ctx = m2:func, parent = m2:message
  let parent = ctx.parentCtx
  while (parent && parent.constructor.name !== 'BraceBlockContext') {
    parent = parent.parentCtx
  }
  // from = m1
  let fromMessage = parent?.parentCtx
  while (fromMessage && fromMessage.constructor.name !== 'MessageContext') {
    fromMessage = fromMessage.parentCtx
  }
  let func = fromMessage?.func()
  if (!func) {
    return undefined;
  }
  let to = func.to()
  if (!to) {
    return getFrom(func);
  }
  return to.getText()
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
  Participants: function(ctx) {
    const toCollector = new ToCollector();
    return toCollector.getAllTos(toCollector)(ctx)
  },
  getFrom: getFrom,
  Errors: errors,
  /**
   * @return {number} how many levels of embedded fragments
   */
  Depth: function(ctx) {
    const childFragmentDetector = new ChildFragmentDetector();
    return  childFragmentDetector.depth(childFragmentDetector)(ctx)
  }
}
