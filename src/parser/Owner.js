// Owner is the `to` for a message or the name in the creation.
const sequenceParser = require('../generated-parser/sequenceParser')

const seqParser = sequenceParser.sequenceParser;
const CreationContext = seqParser.CreationContext;
CreationContext.prototype.Assignee = function () {
  return this.creationBody()?.assignment()?.assignee()?.getText();
}
/**
 * @return {string}
 */
CreationContext.prototype.Owner = function () {
  const assignee = this.Assignee() || '';
  const type = this.creationBody()?.construct()?.getText();
  if (!type) {
    return 'Missing Constructor'
  }
  return `${assignee}:${type}`;
}


const MessageContext = seqParser.MessageContext

/**
 * @return {string}
 */
MessageContext.prototype.Owner = function () {
  if (this.messageBody().func()?.to()) {
    let participant = this.messageBody().func().to().getText();
    participant = participant.replace(/^"(.*)"$/, '$1');
    return participant;
  }
  return this.parentCtx.Origin();
}
