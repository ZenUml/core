
// Owner is the `to` for a message or the name in the creation.
const sequenceParser = require('../generated-parser/sequenceParser')

const seqParser = sequenceParser.sequenceParser;
const MessageContext = seqParser.MessageContext;
const AsyncMessageContext = seqParser.AsyncMessageContext;
const CreationContext = seqParser.CreationContext;

MessageContext.prototype.SignatureText = function () {
  return this.messageBody()?.func()?.signature()?.map((s: any) => s?.getFormattedText()).join('.');
}

AsyncMessageContext.prototype.SignatureText = function () {
  return this.content()?.getFormattedText()
}

CreationContext.prototype.SignatureText = function () {
  const params = this.creationBody().parameters()
  const text = (params?.parameter()?.length > 0) ? params.getFormattedText() : 'create'
  return '«' + text + '»'
}
