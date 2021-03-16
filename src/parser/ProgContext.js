const sequenceParser = require('../generated-parser/sequenceParser');
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
