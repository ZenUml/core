let seqDsl = require('../../../src/parser/index');

test('Keyword "return" - in method block', () => {
  let rootContext = seqDsl.RootContext('A.method() { return x1 }');
  expect(seqDsl.RootContext).not.toBeNull()
  let returnedValue = rootContext.block().stat()[0].message().braceBlock().block().stat()[0].ret().expr();
  expect(returnedValue.getText()).toBe('x1')
})

test('Keyword "return" - in alt block', () => {
  let rootContext = seqDsl.RootContext('if(condition) { return y1 }');
  expect(seqDsl.RootContext).not.toBeNull()
  let returnedValue = rootContext.block().stat()[0].alt().ifBlock().braceBlock().block().stat()[0].ret().expr();
  expect(returnedValue.getText()).toBe('y1')
})

test('Keyword "return" - in alt block - if + else if + else', () => {
  let rootContext = seqDsl.RootContext('if(condition) { return y1 } else if (condition1) { return y2 } else { return y3 }');
  expect(seqDsl.RootContext).not.toBeNull()
  let returnedValueIf = rootContext.block().stat()[0]
    .alt().ifBlock().braceBlock().block().stat()[0].ret().expr();
  expect(returnedValueIf.getText()).toBe('y1')
  let returnedValueElseIf = rootContext.block().stat()[0]
    .alt().elseIfBlock()[0].braceBlock().block().stat()[0].ret().expr();
  expect(returnedValueElseIf.getText()).toBe('y2')
  let returnedValueElse = rootContext.block().stat()[0]
    .alt().elseBlock().braceBlock().block().stat()[0].ret().expr();
  expect(returnedValueElse.getText()).toBe('y3')
})

test('Keyword "return" - in loop block', () => {
  let rootContext = seqDsl.RootContext('while(condition) { return z1 }');
  expect(seqDsl.RootContext).not.toBeNull()
  let returnedValue = rootContext.block().stat()[0].loop().braceBlock().block().stat()[0].ret().expr();
  expect(returnedValue.getText()).toBe('z1')
})
