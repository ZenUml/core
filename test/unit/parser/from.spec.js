let seqDsl = require('../../../src/parser/index');

// This spec shows how we get `from` from the context.
// A.m1() { B.m2() } => m1 is from `Starter`, m2 is from `A'
// We need the `from` in calculation in:
// 1. Interaction: for interactionWidth, translateX
// 2. Fragments (alt, par, loop): for boundary and offsetX
// 3. Creation: for invocationWidth
const getParentFrom = seqDsl.getParentFrom


describe('Get `from` from context', () => {
  test('Explicit', () => {
    let rootContext = seqDsl.RootContext('A->B.m1');
    let m1 = rootContext.block().stat()[0].message()
    expectText(m1).toBe('A->B.m1')
    expect(getParentFrom(m1.func())).toBe(undefined)
  })

  test('Embedded', () => {
    let rootContext = seqDsl.RootContext('A.m1 { B.m2 }');
    let m1 = rootContext.block().stat()[0].message()
    expectText(m1).toBe('A.m1{B.m2}')
    let m2 = m1.braceBlock().block().stat()[0].message();
    expectText(m2).toBe('B.m2')
    expect(getParentFrom(m2.func())).toBe('A')
  })

  test('Embedded Self', () => {
    let rootContext = seqDsl.RootContext('A.m1 { m2 }');
    let m1 = rootContext.block().stat()[0].message()
    expectText(m1).toBe('A.m1{m2}')
    let m2 = m1.braceBlock().block().stat()[0].message();
    expectText(m2).toBe('m2')
    expect(getParentFrom(m2.func())).toBe('A')
  })

  test('Embedded in if', () => {
    let rootContext = seqDsl.RootContext('A.m1 { if(x) { m2 }}');
    let m1 = rootContext.block().stat()[0].message()
    expectText(m1).toBe('A.m1{if(x){m2}}')
    let m2 = m1.braceBlock().block().stat()[0].alt().ifBlock().braceBlock().block().stat()[0].message();
    expectText(m2).toBe('m2')
    expect(getParentFrom(m2.func())).toBe('A')
  })

  test('Embedded in Self', () => {
    let rootContext = seqDsl.RootContext('A.m1 { m2 {m3} }');
    let m1 = rootContext.block().stat()[0].message()
    expectText(m1).toBe('A.m1{m2{m3}}')
    let m2 = m1.braceBlock().block().stat()[0].message();
    expectText(m2).toBe('m2{m3}')
    let m3 = m2.braceBlock().block().stat()[0].message();
    expectText(m3).toBe('m3')

    expect(getParentFrom(m3.func())).toBe('A')
  })

  test('root', () => {
    let rootContext = seqDsl.RootContext('A.m1');
    let message = rootContext.block().stat()[0].message();
    expectText(message).toBe('A.m1')
    expect(getParentFrom(message.func())).toBe(undefined)
  })
})

function expectText(context) {
    return expect(context.getText())
}
