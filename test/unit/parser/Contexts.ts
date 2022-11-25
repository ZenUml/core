import {antlr4} from "../../../src/positioning/ParticipantListener";
const sequenceLexer = require('../../../src/generated-parser/sequenceLexer');
const sequenceParser = require('../../../src/generated-parser/sequenceParser');
class SeqErrorListener extends antlr4.error.ErrorListener {}

export function AsyncMessageContext(code: any) {
  const chars = new antlr4.InputStream(code);
  const lexer = new sequenceLexer.sequenceLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new sequenceParser.sequenceParser(tokens);
  parser.addErrorListener(new SeqErrorListener());
  return parser._syntaxErrors ? null : parser.asyncMessage();
}
