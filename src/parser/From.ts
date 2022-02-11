const sequenceParser = require('../generated-parser/sequenceParser')

const seqParser = sequenceParser.sequenceParser;
const CreationContext = seqParser.CreationContext;
const MessageContext = seqParser.MessageContext
const AsyncMessageContext = seqParser.AsyncMessageContext
CreationContext.prototype.From = function () {
  return this.parentCtx?.Origin();
}

MessageContext.prototype.ProvidedFrom = function() {
  return this.messageBody()?.from()?.getTextWithoutQuotes();
}
MessageContext.prototype.From = function () {
  return this.ProvidedFrom() || this.parentCtx.Origin();
}

AsyncMessageContext.prototype.From = function () {
  if (this.from()) {
    return this.from().getTextWithoutQuotes();
  }
  return this.parentCtx.Origin();
}

export {}
