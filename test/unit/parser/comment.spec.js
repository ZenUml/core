// This test file covers scenarios when comments are used
let seqDsl = require('../../../src/parser/index');
test('comment only block is valid', () => {
    let rootContext = seqDsl.RootContext('A.method() { // comment \n }');
    expect(rootContext).not.toBeNull()
    expect(rootContext.block().stat().length).toBe(1)
  let message = rootContext.block().stat()[0]
    .message();
  let braceBlock = message.braceBlock();
  expect(braceBlock.getComment()).toBe(' // comment \n ')
})

test('comment after method call is valid', () => {
    let rootContext = seqDsl.RootContext('A.method() { internal() \n// comment \n }');
    expect(rootContext).not.toBeNull()
    expect(rootContext.block().stat().length).toBe(1)

  let message = rootContext.block().stat()[0]
    .message();
  let braceBlock = message.braceBlock();
  expect(braceBlock.getComment()).toBe(' \n// comment \n ')
})
