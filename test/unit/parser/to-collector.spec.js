let seqDsl = require('../../../src/parser/index');
let ToCollector = require('../../../src/parser/ToCollector')
function getParticipants2(code) {
    let rootContext = seqDsl.RootContext(code);
    const toCollector = new ToCollector();
    return toCollector.getAllTos2(toCollector)(rootContext);
}

describe('ToCollector', () => {
  describe('should collect participant from the `participant` section', () => {
    test('A', () => {
      // `A` will be parsed as a participant which matches `participant EOF`
      let participants = getParticipants2('A');
      expect(Object.keys(participants).length).toBe(1)
      expect(participants.A.width).toBe(0)
    })

    test('A 1024', () => {
      let participants = getParticipants2('A 1024');
      expect(participants.A.width).toBe(1024)
    })
  })

  test('A 1024 \\nA 1025 - Same participant can be added only once', () => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants2('A 1024\r\nA 1025');
    expect(Object.keys(participants).length).toBe(1)
    expect(participants.A.width).toBe(1025)
  })
})


test('A - one line but with CRs', () => {
    // `A` will be parsed as a participant
    let participants = getParticipants2('A\n\r');
    expect(Object.keys(participants).length).toBe(1)
    expect(participants.A.width).toBe(0)
})

test('seqDsl should get all participants', () => {
    let participants = getParticipants2('"b:B".method()');
    expect(Object.keys(participants).length).toBe(1)
    expect(participants['b:B'].width).toBe(0)
})

test('seqDsl should treat creation as a participant - nake', () => {
    let participants = getParticipants2('new A()');
    expect(Object.keys(participants).length).toBe(1)
    expect(participants.A.width).toBe(0)
})

test('seqDsl should treat creation as a participant - assignment', () => {
    let participants = getParticipants2('a = new A()');
    expect(Object.keys(participants).length).toBe(1)
    expect(participants['a:A'].width).toBe(0)
})

test('seqDsl should treat creation as a participant - assignment with type', () => {
    let participants = getParticipants2('A a = new A()');
    expect(Object.keys(participants).length).toBe(2)
    expect(participants['a:A'].width).toBe(0)
})

test('seqDsl should get all participants but ignore parameters - method call', () => {
    let participants = getParticipants2('"b:B".method(x.m)');
    expect(Object.keys(participants).length).toBe(1)
    expect(participants['b:B'].width).toBe(0)
})

test('seqDsl should get all participants but ignore parameters - creation', () => {
    let participants = getParticipants2('"b:B".method(new X())');
    expect(Object.keys(participants).length).toBe(1)
    expect(participants['b:B'].width).toBe(0)
})

test('seqDsl should get all participants including from', () => {
    let participants = getParticipants2('A->B.m');
    expect(Object.keys(participants).length).toBe(2)
})
