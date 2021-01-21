let seqDsl = require('../../../src/parser/index');

test('<<Person>> Bob', () => {
    let rootContext = seqDsl.RootContext('<<Person>> Bob\n');
    let participant = rootContext.participant()[0];
    expectText(participant).toBe('<<Person>>Bob')
    let interfase = participant.interfase();
    expectText(interfase).toBe('<<Person>>')
})

describe('Error recovery', () => {
  test('<<', () => {
    let rootContext = seqDsl.RootContext('<<');
    let participant = rootContext.participant()[0];
    expectText(participant).toBe('<<')
    let interfase = participant.interfase();
    expectText(interfase).toBe('<<')

  });
})


function expectText(context) {
    return expect(context.getText())
}
