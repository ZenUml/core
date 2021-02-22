let seqDsl = require('../../../src/parser/index');

describe('Async Message', () => {
  test.each(
    [
      ['A->B:m', 'A', 'B'],
      ['"A B"->"C D":m', '"A B"', '"C D"'],
    ]
  )('with ID', (code, source, target) => {
    let rootContext = seqDsl.RootContext(code);
    const asyncMessage = rootContext.block().stat()[0].asyncMessage();
    let actualSource = asyncMessage.from();
    const actualTarget = asyncMessage.target()
    expectText(actualSource).toBe(source)
    expectText(actualTarget).toBe(target)
  })

});

function expectText(context) {
    return expect(context.getText())
}
