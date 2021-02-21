var antlr4  = require('antlr4/index')
var sequenceLexer = require('../generated-parser/sequenceLexer')
var sequenceParser = require('../generated-parser/sequenceParser')
require('./IsCurrent')
require('./Owner')
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

const seqParser = sequenceParser.sequenceParser;
const StatContext = seqParser.StatContext;
const ProgContext = seqParser.ProgContext;
const BraceBlockContext = seqParser.BraceBlockContext;
StatContext.prototype.Origin = function() {
  const block = this.parentCtx;
  const blockParent = block.parentCtx;
  if(blockParent instanceof ProgContext) {
    return blockParent.Starter();
  } else if (blockParent instanceof BraceBlockContext) {
    let ctx = blockParent.parentCtx;
    while (ctx && !(ctx instanceof StatContext)) {
      if (ctx instanceof seqParser.MessageContext) {
        return ctx.Owner();
      }
      if (ctx instanceof seqParser.CreationContext) {
        return ctx.Owner();
      }
      ctx = ctx.parentCtx;
    }
    return ctx.Origin();
  }
}

const RetContext = seqParser.RetContext;
RetContext.prototype.getReturnTo = function() {
  const stat = this.parentCtx;
  const block = stat.parentCtx;
  const blockParent = block.parentCtx;
  if(blockParent instanceof ProgContext) {
    return blockParent.Starter();
  } else {
    let ctx = blockParent;
    while (ctx && !(ctx instanceof seqParser.MessageContext) && !(ctx instanceof seqParser.CreationContext)) {
      if(ctx instanceof ProgContext) {
        return ctx.Starter();
      }
      ctx = ctx.parentCtx;
    }
    return ctx.parentCtx.Origin();
  }
}

ProgContext.prototype.Starter = function () {
  return this.head()?.starterExp()?.starter()?.getTextWithoutQuotes() || 'Starter'
}

antlr4.ParserRuleContext.prototype.getTextWithoutQuotes = function() {
  return this.getText().replace(/^"(.*)"$/, '$1')
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
  ProgContext: sequenceParser.sequenceParser.ProgContext,
  GroupContext: sequenceParser.sequenceParser.GroupContext,
  ParticipantContext: sequenceParser.sequenceParser.ParticipantContext,
  Participants: function(ctx, withStarter) {
    const toCollector = new ToCollector();
    return toCollector.getParticipants(ctx, withStarter)
  },
  Errors: errors,
  /**
   * @return {number} how many levels of embedded fragments
   */
  Depth: function(ctx) {
    const childFragmentDetector = new ChildFragmentDetector();
    return  childFragmentDetector.depth(childFragmentDetector)(ctx)
  }
}
