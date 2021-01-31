let seqDsl = require('../../../src/parser/index');
let ToCollector = require('../../../src/parser/ToCollector')

function getParticipants(code) {
  let rootContext = seqDsl.RootContext(code);
  const toCollector = new ToCollector();
  return toCollector.getAllTos(toCollector)(rootContext);
}
test('smoke test', () => {
  const code = `
    <<A>> B 1024
    C.m
    D->E:m
    new F
  `
  let participants = getParticipants(code);
  expect(Array.from(participants.keys())).toStrictEqual(['B', 'C', 'D', 'E', 'F'])
  expect(participants.get('B')).toStrictEqual({groupId: undefined, stereotype: 'A', 'width': 1024})
})

describe('Plain participants', () => {
  test.each([
    'A', 'A\n', 'A\n\r'
  ])('get participant with width and stereotype undefined', (code) => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants(code);
    expect(participants.size).toBe(1)
    expect(participants.get('A').width).toBeUndefined()
    expect(participants.get('A').stereotype).toBeUndefined()
  })
})
describe('with width', () => {
  test.each([
    ['A 1024', 1024],
    ['A 1024 A 1025', 1024],
    ['A 1024\nA 1025', 1024]
  ])('code:%s => width:%s', (code, width) => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants(code);
    expect(participants.size).toBe(1)
    expect(participants.keys().next().value).toBe('A')
    expect(participants.values().next().value.width).toBe(width)
  })
})

describe('with interface', () => {
  test.each([
    ['<<A>> X 1024', 'A'],
    ['<<A>> X <<B>> X', 'A'], // Ignore redefining
    ['<<A>> X\n<<B>> X', 'A']
  ])('code:%s => width:%s', (code, stereotype) => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants(code);
    expect(participants.size).toBe(1)
    expect(participants.keys().next().value).toBe('X')
    expect(participants.values().next().value.stereotype).toBe(stereotype)
  })
})

describe('with group', () => {
  test.each([
    ['group { A }', 'A', 1],
    ['group group1 { A }', 'A', 'group1'],
    ['group "group 2" { A }', 'A', 'group 2'],
  ])('code:%s => participant:%s', (code, participant, groupId) => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants(code);
    expect(participants.size).toBe(1)
    expect(participants.keys().next().value).toBe(participant)
    expect(participants.values().next().value.groupId).toBe(groupId)
  })
})

describe('implicit', () => {
  describe('from new', () => {
    test('from new', () => {
      let participants = getParticipants('new A()');
      expect(Array.from(participants.keys())[0]).toBe('A')
    })
    test('seqDsl should treat creation as a participant - assignment', () => {
      let participants = getParticipants('a = new A()');
      expect(participants.size).toBe(1)
      expect(participants.get('a:A').width).toBeUndefined()
    })
    test('seqDsl should treat creation as a participant - assignment with type', () => {
      let participants = getParticipants('A a = new A()');
      expect(participants.size).toBe(2)
      expect(participants.get('a:A').width).toBeUndefined()
    })
  })

  describe('from method call', () => {
    test('seqDsl should get all participants but ignore parameters - method call', () => {
      let participants = getParticipants('"b:B".method(x.m)');
      expect(participants.size).toBe(1)
      expect(participants.get('b:B').width).toBeUndefined()
    })
    test('seqDsl should get all participants but ignore parameters - creation', () => {
      let participants = getParticipants('"b:B".method(new X())');
      expect(participants.size).toBe(1)
      expect(participants.get('b:B').width).toBeUndefined()
    })

    test('seqDsl should get all participants including from', () => {
      let participants = getParticipants('A->B.m');
      expect(participants.size).toBe(2)
    })
  })
})

describe('Invalid input', () => {
  test('<<', () => {
    let participants = getParticipants('<<');
    expect(Array.from(participants.keys())[0]).toBe('Missing `Participant`')
  })
})








