let seqDsl = require('../../../src/parser/index');

function getMessageContext(code) {
  let rootContext = seqDsl.RootContext(code);
  expect(seqDsl.RootContext).not.toBeNull()
  let message = rootContext.block().stat()[0].message();
  return message;
}
describe('message - complete', () => {
  test('A.m', () => {
    let message = getMessageContext('200=A.m');
    let signatureElement = message.messageBody().func().signature()[0];
    expect(signatureElement.getText()).toBe('m');
    expect(message.messageBody().assignment().assignee().getText()).toBe('200');
  })
})

describe('message - Owner', () => {
  test('A.m', () => {
    let message = getMessageContext('A.m');
    expect(message.Owner()).toBe('A')
  })
})

describe('message - incomplete', () => {
  test('A.', () => {
    let message = getMessageContext('A.')
    expect(message.messageBody().func().to().getText()).toBe('A')
  })

  // This will be parsed as to statements: `A.` and `m(`
  test('A.m(', () => {
    let message = getMessageContext('A.m(');
    let signatureElement = message.messageBody().func().signature()[0];
    expect(signatureElement).toBeUndefined()
  })
})

test('seqDsl should parse a simple method with a method call as parameter', () => {
    let rootContext = seqDsl.RootContext('B.method(getCount(1))');
    expect(seqDsl.RootContext).not.toBeNull()
    let signatureElement = rootContext.block().stat()[0].message().messageBody().func().signature()[0];
    expect(signatureElement.getText()).toBe('method(getCount(1))')
    expect(signatureElement.invocation().getText()).toBe('(getCount(1))')
})

test('seqDsl should parse a simple method with quoted method name', () => {
    let rootContext = seqDsl.RootContext('B."method. {a,b} 1"(1,2)');
    expect(seqDsl.RootContext).not.toBeNull()
    let signatureElement = rootContext.block().stat()[0].message().messageBody().func().signature()[0];
    expect(signatureElement.methodName().getTextWithoutQuotes()).toBe('method. {a,b} 1')
    expect(signatureElement.invocation().getTextWithoutQuotes()).toBe('(1,2)')
})

test('Simple method: A->B.method()', () => {
    let rootContext = seqDsl.RootContext('A->B.method()');
    expect(seqDsl.RootContext).not.toBeNull()
    let messageBody = rootContext.block().stat()[0].message().messageBody();
    expect(messageBody.from().getText()).toBe('A');
    let signatureElement = messageBody.func().signature()[0];
    expect(signatureElement.methodName().getText()).toBe('method');
})

test('Simple method: "A".method()', () => {
    let rootContext = seqDsl.RootContext('"A".method()');
    expect(seqDsl.RootContext).not.toBeNull()
    let func = rootContext.block().stat()[0].message().messageBody().func();
    expect(func.to().getTextWithoutQuotes()).toBe('A');
    let signatureElement = func.signature()[0];
    expect(signatureElement.methodName().getTextWithoutQuotes()).toBe('method');
})

