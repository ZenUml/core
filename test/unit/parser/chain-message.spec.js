let seqDsl = require('../../../src/parser/index');

function getRootMethodSignature(rootContext) {
    return rootContext.block().stat()[0]
        .message().messageBody().func()
        .signature().map(s => s.getCode()).join('.');
}

test('chain method', () => {
    let rootContext = seqDsl.RootContext('B.method().toString()');
    expect(getRootMethodSignature(rootContext)).toBe('method().toString()')
})

test('chain method call as a parameter', () => {
    let rootContext = seqDsl.RootContext('B.method(getCount(1).toString())');
    expect(getRootMethodSignature(rootContext)).toBe('method(getCount(1).toString())')
})

test('chain method call as implementation', () => {
    let rootContext = seqDsl.RootContext('B.method() { getCount().toString() }');
    expect(getRootMethodSignature(rootContext)).toBe('method()')
    expect(rootContext.block().stat()[0].message().braceBlock().block().getCode())
        .toBe('getCount().toString()')
})

test('chain method call as if condition', () => {
    let rootContext = seqDsl.RootContext('if(getCount().toString().isEmpty()) { doSomething() }');

    expect(rootContext.block().stat()[0].alt().ifBlock().parExpr().getText())
        .toBe('(getCount().toString().isEmpty())')
})

test('chain method call as while condition', () => {
    let rootContext = seqDsl.RootContext('while(getCount().toString().isEmpty()) { doSomething() }');

    expect(rootContext.block().stat()[0].loop().parExpr().getText())
        .toBe('(getCount().toString().isEmpty())')
})

function expectText(context) {
    return expect(context.getText())
}
