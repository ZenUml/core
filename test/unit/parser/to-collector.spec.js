let seqDsl = require('../../../src/parser/index');
let ToCollector = require('../../../src/parser/ToCollector')

function getParticipants(code) {
  let rootContext = seqDsl.RootContext(code);
  const toCollector = new ToCollector();
  return toCollector.getAllTos(toCollector)(rootContext);
}

describe('Plain participants', () => {
  test('A', () => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants('A');
    expect(Array.from(participants.keys()).length).toBe(1)
    expect(participants.get('A').width).toBeUndefined()
  })

  test('A - one line but with CRs', () => {
    // `A` will be parsed as a participant
    let participants = getParticipants('A\n\r');
    expect(Array.from(participants.keys()).length).toBe(1)
    expect(participants.get('A').width).toBeUndefined()
  })
})
describe('with width', () => {
  test('with width', () => {
    let participants = getParticipants('A 1024');
    expect(participants.get('A').width).toBe(1024)
  })
  test('A 1024 \\nA 1025 - Same participant can be added only once', () => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants('A 1024\r\nA 1025');
    expect(Array.from(participants.keys()).length).toBe(1)
    expect(participants.get('A').width).toBe(1025)
  })
})

describe('with interface', () => {
  let participants = getParticipants('<<A>> A1')
  expect(participants.get('A1').stereotype).toBe('A')
})

describe('implicit', () => {
  describe('from new', () => {
    test('from new', () => {
      let participants = getParticipants('new A()');
      expect(Array.from(participants.keys())[0]).toBe('A')
    })
    test('seqDsl should treat creation as a participant - assignment', () => {
      let participants = getParticipants('a = new A()');
      expect(Array.from(participants.keys()).length).toBe(1)
      expect(participants.get('a:A').width).toBeUndefined()
    })
    test('seqDsl should treat creation as a participant - assignment with type', () => {
      let participants = getParticipants('A a = new A()');
      expect(Array.from(participants.keys()).length).toBe(2)
      expect(participants.get('a:A').width).toBeUndefined()
    })
  })

  describe('from method call', () => {
    test('seqDsl should get all participants but ignore parameters - method call', () => {
      let participants = getParticipants('"b:B".method(x.m)');
      expect(Array.from(participants.keys()).length).toBe(1)
      expect(participants.get('b:B').width).toBeUndefined()
    })
    test('seqDsl should get all participants but ignore parameters - creation', () => {
      let participants = getParticipants('"b:B".method(new X())');
      expect(Array.from(participants.keys()).length).toBe(1)
      expect(participants.get('b:B').width).toBeUndefined()
    })

    test('seqDsl should get all participants including from', () => {
      let participants = getParticipants('A->B.m');
      expect(Array.from(participants.keys()).length).toBe(2)
    })
  })
})








