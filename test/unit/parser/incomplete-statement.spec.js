// This test file covers scenarios when not a complete statement has been provided
let seqDsl = require('../../../src/parser/index');
// Note before it is consider as two invalid stat(s).
test('A. should be considered as starting a method statement', () => {
    let rootContext = seqDsl.RootContext('A.');
    expect(rootContext).not.toBeNull()
    expect(rootContext.block().stat().length).toBe(1)
    expect(rootContext.block().stat()[0].getText()).toBe('A.')
})
