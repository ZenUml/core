import PositionCalculator from "../../../src/utils/position.calculator";

// A.m B.m
describe('Define order of participants', () => {
  // expect exception if no orderParticipants is defined
  it('should throw an exception if no orderParticipants is defined', () => {
    expect(() => {
      new PositionCalculator();
    }).toThrow();
  });

  // it('get right most participant', () => {
  //   const orderedParticipants = ['A', 'B', 'C']
  //   const positionCalculator = new PositionCalculator(orderedParticipants);
  //   positionCalculator.on({
  //     A: 1,
  //     B: 2,
  //   });
  //   expect(positionCalculator.getRightMostPositionedParticipant()).toBe('B');
  //   expect(positionCalculator.getRightMostPositionedParticipant('C')).toBe('B');
  //   expect(positionCalculator.getRightMostPositionedParticipant('B')).toBe('A');
  // })

  it('given order A, B', () => {
    const orderedParticipants = ['A', 'B']
    const positionCalculator = new PositionCalculator(orderedParticipants);
    positionCalculator.on({
      A: 100
    })
    expect(positionCalculator.getPosition('A')).toEqual(100)
    positionCalculator.on({
      B: 200
    })
    expect(positionCalculator.getPosition('B')).toEqual(200)
  })

  // positioning event comes in different order
  it('given order B, A', () => {
    const orderedParticipants = ['B', 'A']
    const positionCalculator = new PositionCalculator(orderedParticipants);
    positionCalculator.on({
      A: 100
    })
    expect(positionCalculator.getPosition('A')).toEqual(100)
    positionCalculator.on({
      B: 200
    })
    expect(positionCalculator.getPosition('B')).toEqual(200)
    expect(positionCalculator.getPosition('A')).toEqual(300)
  })

  it('Minimum gap is 100', () => {
    const orderedParticipants = ['A', 'B']
    const positionCalculator = new PositionCalculator(orderedParticipants);
    positionCalculator.on({
      A: 100
    })
    expect(positionCalculator.getPosition('A')).toEqual(100)
    positionCalculator.on({
      B: 101
    })
    expect(positionCalculator.getPosition('B')).toEqual(200)
  })

  it('Push a single participant to the right', () => {
    const orderedParticipants = ['A', 'B']
    const positionCalculator = new PositionCalculator(orderedParticipants);
    positionCalculator.on({
      A: 100
    })
    expect(positionCalculator.getPosition('A')).toEqual(100)
    positionCalculator.on({
      A: 200
    })
    expect(positionCalculator.getPosition('A')).toEqual(200)
  })

  it('Cannot push a single participant to the left', () => {
    const orderedParticipants = ['A', 'B']
    const positionCalculator = new PositionCalculator(orderedParticipants);
    positionCalculator.on({
      A: 100
    })
    expect(positionCalculator.getPosition('A')).toEqual(100)
    positionCalculator.on({
      A: 50
    })
    expect(positionCalculator.getPosition('A')).toEqual(100)
  })

  it('When pushing one to the right, push all siblings on the right', () => {
    const orderedParticipants = ['A', 'B']
    const positionCalculator = new PositionCalculator(orderedParticipants);
    positionCalculator.on({
      A: 100,
      B: 200
    })
    expect(positionCalculator.getPosition('A')).toEqual(100)
    expect(positionCalculator.getPosition('B')).toEqual(200)
    positionCalculator.on({
      A: 150
    })
    expect(positionCalculator.getPosition('A')).toEqual(150)
    expect(positionCalculator.getPosition('B')).toEqual(250)
  })


  // A.longMethodName
  // B.short
  it('given order A, B, but events say differently', () => {
    const orderedParticipants = ['A', 'B']
    const positionCalculator = new PositionCalculator(orderedParticipants);
    positionCalculator.on({
      A: 100
    })
    expect(positionCalculator.getPosition('A')).toEqual(100)
    positionCalculator.on({
      B: 50
    })
    expect(positionCalculator.getPosition('B')).toEqual(200)
  })

  // A.longMethodName
  // B.short
  it('produces a result (to be used in store)', () => {
    const orderedParticipants = ['A', 'B']
    const positionCalculator = new PositionCalculator(orderedParticipants);
    positionCalculator.on({
      A: 100
    })
    expect(positionCalculator.result.get('A')).toEqual(100)
  })
})
