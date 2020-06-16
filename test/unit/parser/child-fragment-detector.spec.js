let seqDsl = require('../../../src/parser/index');

function getDepth(code) {
    let rootContext = seqDsl.RootContext(code);
    return seqDsl.Depth(rootContext);
}

test('get depth 0', () => {
    let depth = getDepth('A.method()');
    expect(depth).toBe(0)
})

test('get depth 1', () => {
    let depth = getDepth('A.method() { if (c1) { B.m() }}');
    expect(depth).toBe(1)
})

test('get depth 2', () => {
    let depth = getDepth('A.method() { if (c1) { if (c2) { B.m() }}}');
    expect(depth).toBe(2)
})

test('get depth 2 while / if', () => {
    let depth = getDepth('A.method() { while (c1) { if (c2) { B.m() }}}');
    expect(depth).toBe(2)
})

test('get depth 2 if / while', () => {
    let depth = getDepth('A.method() { if (c1) { while (c2) { B.m() }}}');
    expect(depth).toBe(2)
})
