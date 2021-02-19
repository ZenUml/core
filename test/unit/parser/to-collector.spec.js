let seqDsl = require('../../../src/parser/index');
let ToCollector = require('../../../src/parser/ToCollector')
test('smoke test2', () => {
  const code = `
    C
    <<A>> "B 1" 1024
    @Starter("B 1")
    C.m
    D->E:m
    new F
  `
  let participants = getParticipants(code);
  expect(participants.Get('B 1')).toEqual({name: 'B 1', isStarter: false, explicit: true, groupId: undefined, stereotype: 'A', 'width': 1024, 'type': undefined})
})

describe('Plain participants', () => {
  test.each([
    'A', 'A\n', 'A\n\r'
  ])('get participant with width and stereotype undefined', (code) => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants(code, true);
    expect(participants.Size()).toBe(2)
    expect(participants.Get('A').width).toBeUndefined()
    expect(participants.Get('A').stereotype).toBeUndefined()
  })
})
describe('with width', () => {
  test.each([
    ['A 1024', 1024],
    ['A 1024 A 1025', 1024],
    ['A 1024\nA 1025', 1024]
  ])('code:%s => width:%s', (code, width) => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants(code, true);
    expect(participants.Size()).toBe(2)
    expect(participants.First().name).toBe('Starter')
    expect(participants.First().width).toBe(undefined)
    expect(participants.Get('A').name).toBe('A')
    expect(participants.Get('A').width).toBe(width)
  })
})

describe('with interface', () => {
  test.each([
    ['<<A>> X 1024', 'A'],
    ['<<A>> X <<B>> X', 'A'], // Ignore redefining
    ['<<A>> X\n<<B>> X', 'A']
  ])('code:%s => width:%s', (code, stereotype) => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants(code, true);
    expect(participants.Size()).toBe(2)
    expect(participants.Get('X').name).toBe('X')
    expect(participants.Get('X').stereotype).toBe(stereotype)
  })
})

describe('with group', () => {
  test.each([
    ['group { A }', 'A', undefined],
    ['group group1 { A }', 'A', 'group1'],
    ['group "group 2" { A }', 'A', 'group 2'],
    ['group "group 2" { A } group "group 3" { A }', 'A', 'group 2'],
  ])('code:%s => participant:%s', (code, participant, groupId) => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants(code, true);
    expect(participants.Size()).toBe(2)
    expect(participants.Get('A').name).toBe(participant)
    expect(participants.Get('A').groupId).toBe(groupId)
  })
})

describe('without starter', () => {
  test.each([
    ['A.method', 'A', 2],
    ['@Starter(A)', 'A', 1],
  ])('code:%s => participant:%s', (code, participant, numberOfParticipants) => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants(code, true);
    expect(participants.Size()).toBe(numberOfParticipants)
    expect(participants.Get('A').name).toBe(participant)
  })
})

describe('with label', () => {
  test.each([
    ['A as AA', 'AA'],
    ['A as "AA"', 'AA'],
  ])('code:%s => label:%s', (code, label) => {
    let participants = getParticipants(code, true);
    expect(participants.Size()).toBe(2)
    expect(participants.Get('A').name).toBe('A')
    expect(participants.Get('A').label).toBe(label)
  })
})

describe('with participantType', () => {
  test.each([
    ['@actor A', 'actor'],
    ['@Actor A', 'actor'],
    ['@database A', 'database']
  ])('code:%s => participantType:%s', (code, participantType) => {
    let participants = getParticipants(code, true);
    expect(participants.Size()).toBe(2)
    expect(participants.Get('A').name).toBe('A')
    expect(participants.Get('A').participantType).toBe(participantType)
  })
})

function getParticipants(code, withStarter) {
  let rootContext = seqDsl.RootContext(code)
  const toCollector = new ToCollector()
  return toCollector.getParticipants(rootContext, withStarter)
}

describe('Add Starter to participants', () => {
  test('Empty context', () => {
    let rootContext = seqDsl.RootContext('')
    const toCollector = new ToCollector()
    const participants = toCollector.getParticipants(rootContext, true)
    expect(participants.Size()).toBe(1)
    expect(participants.Get('Starter').name).toBe('Starter')
    expect(participants.Get('Starter').isStarter).toBeTruthy()
  })
})

describe('implicit', () => {
  describe('from new', () => {
    test('from new', () => {
      let participants = getParticipants('new A()', true);
      expect(participants.Get('A')).toEqual( {"explicit": undefined, "groupId": undefined, "name": "A", "stereotype": undefined, "width": undefined})
    })
    test('seqDsl should treat creation as a participant - assignment', () => {
      let participants = getParticipants('a = new A()', true);
      expect(participants.Size()).toBe(2)
      expect(participants.Get('a:A').width).toBeUndefined()
    })
    test('seqDsl should treat creation as a participant - assignment with type', () => {
      // We need @Starter, otherwise IA becomes a participant declaration
      let participants = getParticipants('@Starter(X) IA a = new A()', true);
      expect(participants.Size()).toBe(2)
      expect(participants.Get('X').width).toBeUndefined()
      expect(participants.Get('a:A').width).toBeUndefined()
    })
  })

  describe('from method call', () => {
    test('get participants', () => {
      const participants = getParticipants('A.method', true)
      expect(participants.Get('A'))
        .toEqual({name: 'A', stereotype: undefined, width: undefined});
    });
    test('seqDsl should get all participants but ignore parameters - method call', () => {
      let participants = getParticipants('"b:B".method(x.m)', true);
      expect(participants.Size()).toBe(2);
      expect(participants.Get('b:B').width).toBeUndefined();
    })
    test('seqDsl should get all participants but ignore parameters - creation', () => {
      let participants = getParticipants('"b:B".method(new X())', true);
      expect(participants.Size()).toBe(2)
      expect(participants.Get('b:B').width).toBeUndefined()
    })

    test('seqDsl should get all participants including from', () => {
      let participants = getParticipants('A->B.m', true);
      expect(participants.Size()).toBe(3)
    })
  })
})

describe('Invalid input', () => {
  test('<<', () => {
    let participants = getParticipants('<<', false);
    expect(participants.First().name).toBe('Missing `Participant`')
  })
})








