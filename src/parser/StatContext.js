const sequenceParser = require('../generated-parser/sequenceParser').default;

const seqParser = sequenceParser;
const StatContext = seqParser.StatContext;
const ProgContext = seqParser.ProgContext;
const BraceBlockContext = seqParser.BraceBlockContext;

StatContext.prototype.Origin = function() {
  const block = this.parentCtx;
  const blockParent = block.parentCtx;
  if(blockParent instanceof ProgContext) {
    return blockParent.Starter();
  } else if (blockParent instanceof BraceBlockContext) {
    let ctx = blockParent.parentCtx;
    while (ctx && !(ctx instanceof StatContext)) {
      if (ctx instanceof seqParser.MessageContext) {
        return ctx.Owner();
      }
      if (ctx instanceof seqParser.CreationContext) {
        return ctx.Owner();
      }
      ctx = ctx.parentCtx;
    }
    return ctx.Origin();
  }
}
