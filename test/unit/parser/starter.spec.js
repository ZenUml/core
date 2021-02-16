let seqDsl = require('../../../src/parser/index');

describe('Starter', () => {
  test.each(
    [
      ['@Starter(A)', 'A'],
      ['@starter(A)', 'A'],
      ['@Starter("A B")', 'A B'],
    ]
  )('with ID', (code, starter) => {
    let rootContext = seqDsl.RootContext(code);
    let actualStarter = rootContext.Starter();
    expect(actualStarter).toBe(starter)
  })
});
