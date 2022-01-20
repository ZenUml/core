import PositionCalculator from "../../../src/utils/position.calculator";

// A.m B.m
describe('Define order of participants', () => {
  it('no pre declared participants', () => {
    const positionCalculator = new PositionCalculator()
    positionCalculator.on({
      A: 1,
    })
    expect(positionCalculator.getRightMostPositionedParticipant('B')).toBe('A')
    expect(positionCalculator.getPosition('A')).toEqual(1)
    positionCalculator.on({
      B: 1,
    })
    expect(positionCalculator.getPosition('B')).toEqual(51)
  })

  it('get right most participant', () => {
    const orderedParticipants = ['A', 'B', 'C']
    const positionCalculator = new PositionCalculator(orderedParticipants);
    positionCalculator.on({
      A: 1,
      B: 2,
    });
    expect(positionCalculator.getRightMostPositionedParticipant()).toBe('B');
    expect(positionCalculator.getRightMostPositionedParticipant('C')).toBe('B');
    expect(positionCalculator.getRightMostPositionedParticipant('B')).toBe('A');
  })

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
    expect(positionCalculator.getPosition('B')).toEqual(150)
  })
})
