const {Fixture} = require("./fixture/Fixture");

test('Empty `par`', () => {
    let par = Fixture.firstStatement('par {}').par();
    expectText(par).toBe('par{}')
    let braceBlock = par.braceBlock();
    expectText(braceBlock).toBe('{}')
})

function expectText(context) {
    return expect(context.getText())
}
