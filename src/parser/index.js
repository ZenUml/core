const antlr4 = require('antlr4/index');
const sequenceLexer = require('../generated-parser/sequenceLexer');
const sequenceParser = require('../generated-parser/sequenceParser');
const ToCollector = require('./ToCollector');
const ChildFragmentDetector = require('./ChildFragmentDetecotr');
require('./IsCurrent');
require('./Owner');
require('./RetContext');
require('./StatContext');

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

const seqParser = sequenceParser.sequenceParser;
const ProgContext = seqParser.ProgContext;

ProgContext.prototype.Starter = function () {
  const declaredStarter = this.head()?.starterExp()?.starter()?.getTextWithoutQuotes()
  let starterFromStartingMessage;
  let starterFromParticipant;
  let starterFromParticipantGroup;
  const stat = this.block()?.stat();
  if (stat && stat[0]) {
    const messageFrom = stat[0].message()?.messageBody()?.from()?.getTextWithoutQuotes()
    const asyncMessageFrom = stat[0].asyncMessage()?.from()?.getTextWithoutQuotes()
    starterFromStartingMessage = messageFrom || asyncMessageFrom
  } else {

    const children = this.head()?.children;
    if(children && children[0]) {
      const child = children[0];
      if (child instanceof sequenceParser.sequenceParser.ParticipantContext) {
        starterFromParticipant = child.name()?.getTextWithoutQuotes();
      }
      if (child instanceof sequenceParser.sequenceParser.GroupContext) {
        const participants = child.participant();
        if(participants && participants[0]) {
          starterFromParticipantGroup = participants[0].name()?.getTextWithoutQuotes();
        }
      }
    }
  }

  return declaredStarter ||
    starterFromStartingMessage ||
    starterFromParticipant ||
    starterFromParticipantGroup ||
    '_STARTER_'
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
