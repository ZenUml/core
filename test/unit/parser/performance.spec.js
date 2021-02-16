let seqDsl = require('../../../src/parser/index');

// Performance base line 1.966 ~ 2.1s on My MBP.
// 2021-02-14: Improved to 1.4s.
// 2021-02-14: Improved to 1s.
// 2021-02-14: Re-baseline to 1.5s after add 'x='
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

