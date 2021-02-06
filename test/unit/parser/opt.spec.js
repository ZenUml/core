let seqDsl = require('../../../src/parser/index');

test('Empty `opt`', () => {
    let rootContext = seqDsl.RootContext('opt {}');


    let opt = rootContext.block().stat()[0].opt();
    expectText(opt).toBe('opt{}')
    let braceBlock = opt.braceBlock();
    expectText(braceBlock).toBe('{}')
})

function expectText(context) {
    return expect(context.getText())
}
