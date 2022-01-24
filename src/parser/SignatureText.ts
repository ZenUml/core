
// Owner is the `to` for a message or the name in the creation.
const sequenceParser = require('../generated-parser/sequenceParser')

const seqParser = sequenceParser.sequenceParser;
const MessageContext = seqParser.MessageContext;

MessageContext.prototype.SignatureText = function () {
  return this.messageBody()?.func()?.signature()?.map((s: any) => s?.getTextWithoutQuotes()).join('.');
}

