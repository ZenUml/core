// Owner is the `to` for a message or the name in the creation.
const sequenceParser = require('../generated-parser/sequenceParser').default

const seqParser = sequenceParser;
const CreationContext = seqParser.CreationContext;
const MessageContext = seqParser.MessageContext
const AsyncMessageContext = seqParser.AsyncMessageContext

CreationContext.prototype.Assignee = function () {
  return this.creationBody()?.assignment()?.assignee()?.getFormattedText();
}

CreationContext.prototype.Constructor = function () {
  return this.creationBody()?.construct()?.getFormattedText();
}

CreationContext.prototype.Owner = function () {
  if (!this.Constructor()) {
    return 'Missing Constructor'
  }
  const assignee = this.Assignee();
  const type = this.Constructor();
  return assignee ? `${assignee}:${type}`: type;
}

MessageContext.prototype.To = function () {
  return this.messageBody()?.to()?.getFormattedText();
}

MessageContext.prototype.Owner = function () {
  return this.To() || getOwnerFromAncestor(this.parentCtx)
}

function getOwnerFromAncestor(ctx) {
  while (ctx) {
    if (ctx instanceof CreationContext || ctx instanceof MessageContext) {
      return ctx.Owner()
    }
    ctx = ctx.parentCtx
  }
  return undefined
}

AsyncMessageContext.prototype.To = function () {
  return this.to()?.getFormattedText();
}

AsyncMessageContext.prototype.Owner = function () {
  return this.To() || getOwnerFromAncestor(this.parentCtx)
}
