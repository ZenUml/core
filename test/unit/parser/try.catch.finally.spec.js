let seqDsl = require('../../../src/parser/index');

test('Empty `try`', () => {
    let rootContext = seqDsl.RootContext('try {}');
    let tcf = rootContext.block().stat()[0].tcf();
    expectText(tcf).toBe('try{}')
    let tryBlock = tcf.tryBlock();
    expectText(tryBlock).toBe('try{}')
    expectText(tryBlock.braceBlock()).toBe('{}')
})

test('`try` with a block', () => {
    let braceBlock = braceBlockOfTry('try { doSomething() \n\r}');
    expectText(braceBlock.block().stat()[0]).toBe('doSomething()')
})

test('`if` with comments only', () => {
    let braceBlock = braceBlockOfTry('try { // comment \n\r}');
    expect(braceBlock.getComment()).toBe(' comment \n')
})

test('`if` with comments and a block', () => {
    let braceBlock = braceBlockOfTry('try { // comment \n\r doSomething \n\r}');
    expect(braceBlock.getComment()).toBeNull()
})

describe('if - incomplete', () => {
  test('', () => {
    let rootContext = seqDsl.RootContext('try');
    expect(rootContext.block().stat()[0].tcf().getText())
      .toBe('try')
  })
})

function braceBlockOfTry(code) {
    let rootContext = seqDsl.RootContext(code);
    return rootContext.block().stat()[0].tcf().tryBlock().braceBlock();
}

function expectText(context) {
    return expect(context.getText())
}
