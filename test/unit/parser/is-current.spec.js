let seqDsl = require('../../../src/parser/index');

const sequenceParser = require('../../../src/generated-parser/sequenceParser')

describe('Creation', () => {
  it('is current', () => {
    const code = 'a = new A() {B.m}';
    const rootContext = seqDsl.RootContext(code);
    const stat = rootContext.block().stat()[0];
    const seqParser = sequenceParser.sequenceParser;
    const CreationContext = seqParser.CreationContext;
    CreationContext.prototype.isCurrent = function () {
      return false;
    }
    const creation = stat.creation();
    const isCurrent = creation.isCurrent();
    console.log(creation.getText());
    expect(isCurrent).toBeFalsy();
  })
});
