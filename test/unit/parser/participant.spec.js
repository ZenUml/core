let seqDsl = require('../../../src/parser/index');

test('A participant - A', () => {
  let rootContext = seqDsl.RootContext('A');
  let participants = rootContext.participant();
  expectText(participants[0]).toBe('A')
})

test('A participant - A B', () => {
  let rootContext = seqDsl.RootContext('A B');
  let participants = rootContext.participant();
  expectText(participants[0]).toBe('A')
  expectText(participants[1]).toBe('B')
})

test('A participant - A \nB', () => {
  let rootContext = seqDsl.RootContext('A \nB');
  let participants = rootContext.participant();
  expectText(participants[0]).toBe('A')
  expectText(participants[1]).toBe('B')
})

test('A participant - A 100', () => {
  let rootContext = seqDsl.RootContext('A 100');
  let participants = rootContext.participant();
  expectText(participants[0].name()).toBe('A')
  expectText(participants[0].width()).toBe('100')
})

function expectText(context) {
  return expect(context.getText())
}
