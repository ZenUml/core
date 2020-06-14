let seqDsl = require('../../../src/parser/index');
test('seqDsl should parse the to and method', () => {
    let rootContext = seqDsl.RootContext('"b:B".method()');
    let func = rootContext.block().stat()[0].message().func();
    expect(func.to().getText()).toBe('"b:B"');
    expect(func.signature()[0].getText()).toBe('method()')
})

test('seqDsl should get all participants', () => {
    let rootContext = seqDsl.RootContext('A 100\r\nB.method()\r\nnew C()');

    let participants = seqDsl.Participants(rootContext);
    expect(participants.length).toBe(3)
    expect(participants[0]).toBe('A')
    expect(participants[1]).toBe('B')
    expect(participants[2]).toBe('C')
})

test('seqDsl should parse Starter', () => {
    let rootContext = seqDsl.RootContext('@Starter(X) A a = new A()');
    let starter = rootContext.starterExp();
    expect(starter.getText()).toBe('@Starter(X)')
})

test('seqDsl should parse Description allowing @', () => {
    let rootContext = seqDsl.RootContext('// title \r\n// Comment allows @ \r\n @Starter(X) A a = new A()');
    let starter = rootContext.starterExp();
    expect(starter.starter().getText()).toBe('X')

    let comment = starter.comment()
    expect(comment[1].commentContent().getText()).toBe(' Comment allows @ ')
})

test('Description should allow multi-lines', () => {
  let rootContext = seqDsl.RootContext('//first line\r\n// 2nd line \r\n// 3rd line\r\n  @Starter(X) A a = new A()');
  let starterExp = rootContext.starterExp();
  expect(starterExp.starter().getText()).toBe('X')
  let comments = rootContext.starterExp().comment()
  expect(comments[0].commentContent().getText()).toBe('first line')
  expect(comments[1].commentContent().getText()).toBe(' 2nd line ')
})

test('Async message', () => {
  let rootContext = seqDsl.RootContext('A->B:message');
  let block = rootContext.block();
  expect(block.getText()).toBe('A->B:message')
  expect(block.stat()[0].asyncMessage().source().getText()).toBe('A')
  expect(block.stat()[0].asyncMessage().target().getText()).toBe('B')
  expect(block.stat()[0].asyncMessage().content().getText()).toBe('message')
})
