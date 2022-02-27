const sequenceParser = require('../generated-parser/sequenceParser')

const seqParser = sequenceParser.sequenceParser;
const CreationContext = seqParser.CreationContext;
const StatContext = seqParser.StatContext;
const MessageContext = seqParser.MessageContext
const AsyncMessageContext = seqParser.AsyncMessageContext
const RetContext = seqParser.RetContext

CreationContext.prototype.From = function () {
  if (this.parentCtx instanceof StatContext) {
    return this.ClosestAncestorStat().Origin()
  }
  return undefined;
}

MessageContext.prototype.ProvidedFrom = function() {
  return this.messageBody()?.from()?.getFormattedText();
}
MessageContext.prototype.From = function () {
  return this.ProvidedFrom() || this.ClosestAncestorStat().Origin();
}

AsyncMessageContext.prototype.From = function () {
  if (this.from()) {
    return this.from().getFormattedText();
  }
  return this.ClosestAncestorStat().Origin();
}

RetContext.prototype.From = function () {
  return this.ClosestAncestorStat().Origin();
}
export {}
