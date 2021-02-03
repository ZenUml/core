let seqDsl = require('../../../src/parser/index');

// This spec shows how we get `from` from the context.
// A.m1() { B.m2() } => m1 is from `Starter`, m2 is from `A'
// We need the `from` in calculation in:
// 1. Interaction: for interactionWidth, translateX
// 2. Fragments (alt, par, loop): for boundary and offsetX
// 3. Creation: for invocationWidth
const GetInheritedFrom = seqDsl.GetInheritedFrom


describe('Get `from` from context', () => {
  test('Explicit', () => {
    let rootContext = seqDsl.RootContext('A->B.m1');
    let m1 = rootContext.block().stat()[0].message()
    expectText(m1).toBe('A->B.m1')
    expect(GetInheritedFrom(m1.func())).toBe('Starter')
  })

  test('Embedded', () => {
    let rootContext = seqDsl.RootContext('A.m1 { B.m2 }');
    let m1 = rootContext.block().stat()[0].message()
    expectText(m1).toBe('A.m1{B.m2}')
    let m2 = m1.braceBlock().block().stat()[0].message();
    expectText(m2).toBe('B.m2')
    expect(GetInheritedFrom(m2.func())).toBe('A')
  })

  test('Embedded', () => {
    let rootContext = seqDsl.RootContext('"A".m1 { B.m2 }');
    let m1 = rootContext.block().stat()[0].message()
    expectText(m1).toBe('"A".m1{B.m2}')
    let m2 = m1.braceBlock().block().stat()[0].message();
    expectText(m2).toBe('B.m2')
    expect(GetInheritedFrom(m2.func())).toBe('A')
  })

  test('Embedded Self', () => {
    let rootContext = seqDsl.RootContext('A.m1 { m2 }');
    let m1 = rootContext.block().stat()[0].message()
    expectText(m1).toBe('A.m1{m2}')
    let m2 = m1.braceBlock().block().stat()[0].message();
    expectText(m2).toBe('m2')
    expect(GetInheritedFrom(m2.func())).toBe('A')
  })

  test('Embedded creation', () => {
    let rootContext = seqDsl.RootContext('new A { m2 }');
    let creation = rootContext.block().stat()[0].creation()
    expectText(creation).toBe('newA{m2}')
    let m2 = creation.braceBlock().block().stat()[0].message();
    expectText(m2).toBe('m2')
    expect(GetInheritedFrom(m2.func())).toBe('A')
  })

  test('Embedded in if', () => {
    let rootContext = seqDsl.RootContext('A.m1 { if(x) { m2 }}');
    let m1 = rootContext.block().stat()[0].message()
    expectText(m1).toBe('A.m1{if(x){m2}}')
    let alt = m1.braceBlock().block().stat()[0].alt()
    expect(GetInheritedFrom(alt)).toBe('A')
    let m2 = alt.ifBlock().braceBlock().block().stat()[0].message();
    expectText(m2).toBe('m2')
    expect(GetInheritedFrom(m2.func())).toBe('A')
  })

  test('Embedded in Self', () => {
    let rootContext = seqDsl.RootContext('A.m1 { m2 {m3} }');
    let m1 = rootContext.block().stat()[0].message()
    expectText(m1).toBe('A.m1{m2{m3}}')
    let m2 = m1.braceBlock().block().stat()[0].message();
    expectText(m2).toBe('m2{m3}')
    let m3 = m2.braceBlock().block().stat()[0].message();
    expectText(m3).toBe('m3')

    expect(GetInheritedFrom(m3.func())).toBe('A')
  })

  test('root', () => {
    let rootContext = seqDsl.RootContext('A.m1');
    let message = rootContext.block().stat()[0].message();
    expectText(message).toBe('A.m1')
    expect(GetInheritedFrom(message.func())).toBe('Starter')
  })
  test('root', () => {
    let rootContext = seqDsl.RootContext('@Starter(X)\nA.m1');
    let message = rootContext.block().stat()[0].message();
    expectText(message).toBe('A.m1')
    expect(GetInheritedFrom(message.func())).toBe('X')
  })
})

function expectText(context) {
    return expect(context.getText())
}
