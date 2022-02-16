// Owner is the `to` for a message or the name in the creation.
const sequenceParser = require('../generated-parser/sequenceParser')

const seqParser = sequenceParser.sequenceParser;
const CreationContext = seqParser.CreationContext;
const MessageContext = seqParser.MessageContext
const AsyncMessageContext = seqParser.AsyncMessageContext
CreationContext.prototype.Assignee = function () {
  return this.creationBody()?.assignment()?.assignee()?.getText();
}

CreationContext.prototype.Owner = function () {
  const assignee = this.Assignee();
  const type = this.creationBody()?.construct()?.getText();
  if (!type) {
    return 'Missing Constructor'
  }
  return assignee ? `${assignee}:${type}`: type;
}

MessageContext.prototype.Owner = function () {
  // Note: It may still be a self message if it has a `to` and `to === from`.
  const isImpliedSelf = !this.messageBody()?.to();
  if (isImpliedSelf) {
    return this.parentCtx.Origin();
  }
  return this.messageBody().to().getTextWithoutQuotes();
}

AsyncMessageContext.prototype.Owner = function () {
  return this.to()?.getTextWithoutQuotes() || this.parentCtx.Origin();
}
