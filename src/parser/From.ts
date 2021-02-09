var sequenceParser = require('../generated-parser/sequenceParser')

function getStarterText(ctx: any) {
  return ctx.head()?.starterExp()?.starter()?.getText()
}

function getInheritedFrom(ctx: any) {
  // TODO: throw error?
  if (!ctx) return undefined;

  // we need to find the closest BraceBlockContext

  const seqParser = sequenceParser.sequenceParser
  while (ctx && !(ctx instanceof seqParser.BraceBlockContext)) {
    if (ctx.constructor === seqParser.ProgContext) {
      return getStarterText(ctx) || 'Starter';
    }
    ctx = ctx.parentCtx;
  }

  // then find the closest Message or Creation which define the 'inherited from'
  while (ctx && ctx.constructor) {
    if (ctx instanceof seqParser.ProgContext) {
      return getStarterText(ctx) || 'Starter';
    }
    if (ctx instanceof seqParser.MessageContext) {
      if (ctx.func()?.to()) {
        let participant = ctx.func().to().getText()
        participant = participant.replace(/^"(.*)"$/, '$1');
        return participant;
      }

    }
    if (ctx instanceof seqParser.CreationContext) {
      const assignee = ctx.assignment() && ctx.assignment().assignee().getText();
      const type = ctx.construct().getText();
      return assignee ? assignee + ':' + type : type;
    }
    ctx = ctx.parentCtx;
  }
  return undefined;
}
module.exports = getInheritedFrom
