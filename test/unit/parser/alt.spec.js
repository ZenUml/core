let seqDsl = require('../../../src/parser/index');

test('Empty `if`', () => {
    let rootContext = seqDsl.RootContext('if(x) {}');
    let alt = rootContext.block().stat()[0].alt();
    expectText(alt).toBe('if(x){}')
    let ifBlock = alt.ifBlock();
    expectText(ifBlock).toBe('if(x){}')
    expectText(ifBlock.parExpr()).toBe('(x)')
    expectText(ifBlock.braceBlock()).toBe('{}')
})

test('`if` with a block', () => {
    let braceBlock = braceBlockOfIf('if(x) { doSomething() \n\r}');
    expectText(braceBlock.block().stat()[0]).toBe('doSomething()')
})

test('`if` with comments only', () => {
    let braceBlock = braceBlockOfIf('if(x) { // comment \n\r}');
    expectText(braceBlock.block().stat()[0].comment()[0].commentContent()).toBe(' comment ')
})

test('`if` with comments and a block', () => {
    let braceBlock = braceBlockOfIf('if(x) { // comment \n\r doSomething \n\r}');
    expectText(braceBlock.block().stat()[0].comment()[0].commentContent()).toBe(" comment ")
})

function braceBlockOfIf(code) {
    let rootContext = seqDsl.RootContext(code);
    return rootContext.block().stat()[0].alt().ifBlock().braceBlock();
}

function expectText(context) {
    return expect(context.getText())
}
