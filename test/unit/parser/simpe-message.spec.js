let seqDsl = require('../../../src/parser/index');

test('A.m', () => {
    let rootContext = seqDsl.RootContext('A.m');
    expect(seqDsl.RootContext).not.toBeNull()
    let signatureElement = rootContext.block().stat()[0].message().func().signature()[0];
    expect(signatureElement.getText()).toBe('m')
})

test('seqDsl should parse a simple method with a method call as parameter', () => {
    let rootContext = seqDsl.RootContext('B.method(getCount(1))');
    expect(seqDsl.RootContext).not.toBeNull()
    let signatureElement = rootContext.block().stat()[0].message().func().signature()[0];
    expect(signatureElement.getText()).toBe('method(getCount(1))')
    expect(signatureElement.invocation().getText()).toBe('(getCount(1))')
})

test('seqDsl should parse a simple method with quoted method name', () => {
    let rootContext = seqDsl.RootContext('B."method. {a,b} 1"(1,2)');
    expect(seqDsl.RootContext).not.toBeNull()
    let signatureElement = rootContext.block().stat()[0].message().func().signature()[0];
    expect(signatureElement.methodName().getCode()).toBe('method. {a,b} 1')
    expect(signatureElement.invocation().getCode()).toBe('(1,2)')
})

test('Simple method: A->B.method()', () => {
    let rootContext = seqDsl.RootContext('A->B.method()');
    expect(seqDsl.RootContext).not.toBeNull()
    let func = rootContext.block().stat()[0].message().func();
    expect(func.from().getText()).toBe('A');
    let signatureElement = func.signature()[0];
    expect(signatureElement.methodName().getText()).toBe('method');
})

test('Simple method: "A".method()', () => {
    let rootContext = seqDsl.RootContext('"A".method()');
    expect(seqDsl.RootContext).not.toBeNull()
    let func = rootContext.block().stat()[0].message().func();
    expect(func.to().getCode()).toBe('A');
    let signatureElement = func.signature()[0];
    expect(signatureElement.methodName().getCode()).toBe('method');
})
