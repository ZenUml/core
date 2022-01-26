const {Fixture} = require("./fixture/Fixture");

test('Divider', () => {
    let divider = Fixture.firstStatement('==A==').divider();
    expectText(divider.name()).toBe('A')
})

function expectText(context) {
    return expect(context.getText())
}
