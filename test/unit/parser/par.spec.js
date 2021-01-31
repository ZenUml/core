let seqDsl = require('../../../src/parser/index');

test('Empty `par`', () => {
    let rootContext = seqDsl.RootContext('par {}');


    let par = rootContext.block().stat()[0].par();
    expectText(par).toBe('par{}')
    let braceBlock = par.braceBlock();
    expectText(braceBlock).toBe('{}')
})

function expectText(context) {
    return expect(context.getText())
}
