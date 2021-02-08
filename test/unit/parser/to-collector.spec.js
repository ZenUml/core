let seqDsl = require('../../../src/parser/index');
let ToCollector = require('../../../src/parser/ToCollector')

function getParticipants(code) {
  let rootContext = seqDsl.RootContext(code);
  const toCollector = new ToCollector();
  return toCollector.getAllTos(toCollector)(rootContext);
}
test('smoke test', () => {
  const code = `
    C
    <<A>> B 1024
    @Starter(B)
    C.m
    D->E:m
    new F
  `
  let participants = getParticipants(code);
  expect(Array.from(participants.keys())).toStrictEqual(['C', 'B', 'D', 'E', 'F'])
  expect(participants.get('B')).toStrictEqual({explicit: true, groupId: undefined, stereotype: 'A', 'width': 1024})
})

test('smoke test2', () => {
  const code = `
    C
    <<A>> B 1024
    @Starter(B)
    C.m
    D->E:m
    new F
  `
  let participants = getParticipants2(code);
  expect(participants.Get('B')).toEqual({name: 'B', isStarter: false, explicit: true, groupId: undefined, stereotype: 'A', 'width': 1024})
})

describe('Plain participants', () => {
  test.each([
    'A', 'A\n', 'A\n\r'
  ])('get participant with width and stereotype undefined', (code) => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants2(code);
    expect(participants.Size()).toBe(1)
    expect(participants.Get('A').width).toBeUndefined()
    expect(participants.Get('A').stereotype).toBeUndefined()
  })
})
describe('with width', () => {
  test.each([
    ['A 1024', 1024],
    ['A 1024 A 1025', 1025],
    ['A 1024\nA 1025', 1025]
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
    ['<<A>> X <<B>> X', 'B'], // Ignore redefining
    ['<<A>> X\n<<B>> X', 'B']
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
    ['group { A }', 'A', undefined],
    ['group group1 { A }', 'A', 'group1'],
    ['group "group 2" { A }', 'A', 'group 2'],
    ['group "group 2" { A } group "group 3" { A }', 'A', 'group 3'],
  ])('code:%s => participant:%s', (code, participant, groupId) => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants(code);
    expect(participants.size).toBe(1)
    expect(participants.keys().next().value).toBe(participant)
    expect(participants.values().next().value.groupId).toBe(groupId)
  })
})

describe('without group', () => {
  test.each([
    ['A.method', 'A', undefined],
    ['@Starter(A)', 'A', undefined],
  ])('code:%s => participant:%s', (code, participant, groupId) => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants(code);
    expect(participants.size).toBe(1)
    expect(participants.keys().next().value).toBe(participant)
    expect(participants.values().next().value.groupId).toBe(groupId)
  })

  test.each([
    ['A.method', 'A', undefined],
    ['@Starter(A)', 'A', undefined],
  ])('code:%s => participant:%s', (code, participant, groupId) => {
    // `A` will be parsed as a participant which matches `participant EOF`
    let participants = getParticipants2(code);
    expect(participants.Size()).toBe(1)
    expect(participants.Get('A').groupId).toBe(groupId)
  })
})

function getParticipants2(code) {
  let rootContext = seqDsl.RootContext(code)
  const toCollector = new ToCollector()
  return toCollector.getParticipants(rootContext)
}

describe('implicit', () => {
  describe('from new', () => {
    test('from new', () => {
      let participants = getParticipants('new A()');
      expect(Array.from(participants.keys())[0]).toBe('A')
    })
    test('from new', () => {
      let participants = getParticipants2('new A()');
      expect(participants.Get('A')).toEqual( {"explicit": undefined, "groupId": undefined, "name": "A", "stereotype": undefined, "width": undefined})
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
    test('get participants', () => {
      const participants = getParticipants2('A.method')
      expect(participants.Get('A'))
        .toEqual({name: 'A', stereotype: undefined, width: undefined});
    });
    test('seqDsl should get all participants but ignore parameters - method call', () => {
      let participants = getParticipants2('"b:B".method(x.m)');
      expect(participants.Size()).toBe(1);
      console.log(participants);
      expect(participants.Get('b:B').width).toBeUndefined();
    })
    test('seqDsl should get all participants but ignore parameters - creation', () => {
      let participants = getParticipants2('"b:B".method(new X())');
      expect(participants.Size()).toBe(1)
      console.log(participants);

      expect(participants.Get('b:B').width).toBeUndefined()
    })


    test('seqDsl should get all participants including from', () => {
      let participants = getParticipants2('A->B.m');
      console.log(participants);

      expect(participants.Size()).toBe(2)
    })
  })
})

describe('Invalid input', () => {
  test('<<', () => {
    let participants = getParticipants('<<');
    expect(Array.from(participants.keys())[0]).toBe('Missing `Participant`')
  })
})








