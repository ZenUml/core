const antlr4 = require('antlr4/index');
const sequenceLexer = require('../generated-parser/sequenceLexer');
const sequenceParser = require('../generated-parser/sequenceParser');
const ToCollector = require('./ToCollector');
const ChildFragmentDetector = require('./ChildFragmentDetecotr');
require('./TitleContext');
require('./IsCurrent');
require('./Owner');
require('./ProgContext');
require('./RetContext');
require('./StatContext');
require('./SignatureText');
require('./Messages/MessageContext');
require('./From')
require('./key/Key')
require('./utils/cloest-ancestor/ClosestAncestor')
const formatText = require("@/utils/StringUtil").formatText

const errors = [];
class SeqErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    errors.push(`${offendingSymbol} line ${line}, col ${column}: ${msg}`);
  }
}

function rootContext(code) {
  const chars = new antlr4.InputStream(code);
  const lexer = new sequenceLexer.sequenceLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new sequenceParser.sequenceParser(tokens);
  parser.addErrorListener(new SeqErrorListener());
  return parser._syntaxErrors ? null : parser.prog();
}

antlr4.ParserRuleContext.prototype.getFormattedText = function() {
  const code = this.parser.getTokenStream().getText(this.getSourceInterval());
  // remove extra quotes, spaces and new lines
  return formatText(code);
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
