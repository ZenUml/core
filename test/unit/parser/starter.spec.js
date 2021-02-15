let seqDsl = require('../../../src/parser/index');

describe('Starter', () => {
  test.each(
    [
      ['@Starter(A)', 'A'],
      ['@Starter("A B")', '"A B"'],
    ]
  )('with ID', (code, starter) => {
    let rootContext = seqDsl.RootContext(code);
    let actualStarter = rootContext.head().starterExp().starter();
    expectText(actualStarter).toBe(starter)
  })

});

function expectText(context) {
    return expect(context.getText())
}
