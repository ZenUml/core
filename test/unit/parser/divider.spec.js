let seqDsl = require('../../../src/parser/index');

test('Divider', () => {
    let rootContext = seqDsl.RootContext('==A==');
    let divider = rootContext.block().stat()[0].divider();
    expectText(divider.name()).toBe('A')
})

function expectText(context) {
    return expect(context.getText())
}
