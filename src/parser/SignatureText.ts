
// Owner is the `to` for a message or the name in the creation.
const sequenceParser = require('../generated-parser/sequenceParser')

const seqParser = sequenceParser.sequenceParser;
const MessageContext = seqParser.MessageContext;
const AsyncMessageContext = seqParser.AsyncMessageContext;
const CreationContext = seqParser.CreationContext;

MessageContext.prototype.SignatureText = function () {
  return this.messageBody()?.func()?.signature()?.map((s: any) => s?.getTextWithoutQuotes()).join('.');
}

AsyncMessageContext.prototype.SignatureText = function () {
  return this.content()?.getTextWithoutQuotes()
}

CreationContext.prototype.SignatureText = function () {
  const params = this.creationBody().parameters()
  const text = (params?.parameter()?.length > 0) ? params.getTextWithoutQuotes() : 'create'
  return '«' + text + '»'
}
