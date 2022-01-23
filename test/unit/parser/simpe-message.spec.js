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
    expect(message.SignatureText()).toBe('m');
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
    expect(message.messageBody().to().getText()).toBe('A')
  })

  // This will be parsed as to statements: `A.` and `m(`, so the first statement has a null func.
  // The editor should close the () in most cases. We do not add alternative rules to allow this
  // to be parsed as one statement, because it causes other issues.
  test('A.m(', () => {
    let message = getMessageContext('A.m(');
    let signatureElement = message.messageBody().func();
    expect(signatureElement).toBeNull()
  })
})

test('seqDsl should parse a simple method with a method call as parameter', () => {
    let rootContext = seqDsl.RootContext('B.method(getCount(1))');
    expect(seqDsl.RootContext).not.toBeNull()
    let signatureText = rootContext.block().stat()[0].message().SignatureText();
    expect(signatureText).toBe('method(getCount(1))')
})

test('seqDsl should parse a simple method with quoted method name', () => {
    let rootContext = seqDsl.RootContext('B."method. {a,b} 1"(1,2)');
    expect(seqDsl.RootContext).not.toBeNull()
    let signatureElement = rootContext.block().stat()[0].message().SignatureText();
    expect(signatureElement).toBe('"method. {a,b} 1"(1,2)')
})

test('Simple method: A->B.method()', () => {
    let rootContext = seqDsl.RootContext('A->B.method()');
    expect(seqDsl.RootContext).not.toBeNull()
  const message = rootContext.block().stat()[0].message();
  let messageBody = message.messageBody();
    expect(messageBody.from().getText()).toBe('A');
    expect(message.SignatureText()).toBe('method()');
})

test('Simple method: "A".method()', () => {
    let rootContext = seqDsl.RootContext('"A".method()');
    expect(seqDsl.RootContext).not.toBeNull()
  const message = rootContext.block().stat()[0].message();
  let messageBody = message.messageBody();
    expect(messageBody.to().getTextWithoutQuotes()).toBe('A');
    expect(message.SignatureText()).toBe('method()');
})

