let seqDsl = require('../../../../src/parser/index');

function firstStatement(code: string) {
  let rootContext = seqDsl.RootContext(code);
  return rootContext.block().stat()[0];
}

describe('Owner', () => {
  it('should get from sync message', () => {
    const stat = firstStatement('A.m');
    let message = stat.message();
    expect(message.Owner()).toBe('A');
  })

  it('should get from async message', () => {
    const stat = firstStatement('B->A:m');
    let message = stat.asyncMessage();
    expect(message.Owner()).toBe('A');
  })
})
