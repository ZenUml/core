let seqDsl = require('../../../src/parser/index');

function getMessageContext(code) {
  let rootContext = seqDsl.RootContext(code);
  expect(seqDsl.RootContext).not.toBeNull()
  let message = rootContext.block().stat()[0].message();
  return message;
}
// Performance base line 1.966 ~ 2.1s on My MBP.
// 2021-02-14: Improved to 1.4s.
// 2021-02-14: Improved to 1s.
// 2021-02-14: Re-baseline to 1.5s after add 'x='
// 2021-02-16: Re-baseline to 1.618s after inlined 'name' to other rules
test('Profiling sync message', () => {
  var t0 = performance.now()
  for (let i = 0; i < 100; i++) {
    let rootContext = seqDsl.RootContext('x = B."method. {a,b} 1"(1,2)');
  }
  var t1 = performance.now()
  console.log('parsing', t1 - t0);
})

// Perf baseline 100ms
test('Profiling async message', () => {
  var t0 = performance.now()
  for (let i = 0; i < 1000; i++) {
    let rootContext = seqDsl.RootContext('A->B:m');
  }
  var t1 = performance.now()
  console.log('parsing', t1 - t0);
})

// Perf baseline: 814ms on my MBP.
// 2021-02-14: Improved to 243ms.
// 2021-02-14: Improved to 228ms (10%) by simplifying starterEpx
test('Profiling prog.head', () => {
  var t0 = performance.now()
  for (let i = 0; i < 100; i++) {
    let rootContext = seqDsl.RootContext('<<>> A group B {C} @Starter(D)');
  }
  var t1 = performance.now()
  console.log('parsing', t1 - t0);
})

// Perf re-baseline: 11461 on my MBP.
// 2021-02-14: Improved to 2499ms.
// 2021-02-14: Improved to 1454ms (~20%). Was for removing alternative rule for braceBlock.
// 2021-02-14: Improved to 1363ms (~8%) by moving (to DOT) to messageBody
// 2021-02-14: Regressed to 2400 after added alternative rules for braceBlock and invocation
test('Profiling if/else', () => {
  var t0 = performance.now()
  for (let i = 0; i < 100; i++) {
    let rootContext = seqDsl.RootContext('if(x>1){A.m} else if(y>1){B.m}else{C.m}');
  }
  var t1 = performance.now()
  console.log('parsing', t1 - t0);
})

describe('message - complete', () => {
  test('A.m', () => {
    let message = getMessageContext('A.m');
    let signatureElement = message.messageBody().func().signature()[0];
    expect(signatureElement.getText()).toBe('m')
  })
})

describe('message - Owner', () => {
  test('A.m', () => {
    let message = getMessageContext('A.m');
    expect(message.Owner()).toBe('A')
  })
})

describe('message - incomplete', () => {
  test('A.', () => {
    let message = getMessageContext('A.')
    expect(message.messageBody().func().to().getText()).toBe('A')
  })
  test('A.m(', () => {
    let message = getMessageContext('A.m(');
    let signatureElement = message.messageBody().func().signature()[0];
    expect(signatureElement.getText()).toBe('m(')
  })
})

test('seqDsl should parse a simple method with a method call as parameter', () => {
    let rootContext = seqDsl.RootContext('B.method(getCount(1))');
    expect(seqDsl.RootContext).not.toBeNull()
    let signatureElement = rootContext.block().stat()[0].message().messageBody().func().signature()[0];
    expect(signatureElement.getText()).toBe('method(getCount(1))')
    expect(signatureElement.invocation().getText()).toBe('(getCount(1))')
})

test('seqDsl should parse a simple method with quoted method name', () => {
    let rootContext = seqDsl.RootContext('B."method. {a,b} 1"(1,2)');
    expect(seqDsl.RootContext).not.toBeNull()
    let signatureElement = rootContext.block().stat()[0].message().messageBody().func().signature()[0];
    expect(signatureElement.methodName().getTextWithoutQuotes()).toBe('method. {a,b} 1')
    expect(signatureElement.invocation().getTextWithoutQuotes()).toBe('(1,2)')
})

test('Simple method: A->B.method()', () => {
    let rootContext = seqDsl.RootContext('A->B.method()');
    expect(seqDsl.RootContext).not.toBeNull()
    let messageBody = rootContext.block().stat()[0].message().messageBody();
    expect(messageBody.from().getText()).toBe('A');
    let signatureElement = messageBody.func().signature()[0];
    expect(signatureElement.methodName().getText()).toBe('method');
})

test('Simple method: "A".method()', () => {
    let rootContext = seqDsl.RootContext('"A".method()');
    expect(seqDsl.RootContext).not.toBeNull()
    let func = rootContext.block().stat()[0].message().messageBody().func();
    expect(func.to().getTextWithoutQuotes()).toBe('A');
    let signatureElement = func.signature()[0];
    expect(signatureElement.methodName().getTextWithoutQuotes()).toBe('method');
})


// This test enforce braceBlock has a single 'OBRACE' alternative rule.
test('method with incomplete brace', () => {
  let rootContext = seqDsl.RootContext('A.m{');
  expect(seqDsl.RootContext).not.toBeNull()
  expect(rootContext.block().stat().length).toBe(1)
  let func = rootContext.block().stat()[0].message().messageBody().func();
  expect(func.to().getTextWithoutQuotes()).toBe('A');
  let signatureElement = func.signature()[0];
  expect(signatureElement.methodName().getTextWithoutQuotes()).toBe('m');
})
