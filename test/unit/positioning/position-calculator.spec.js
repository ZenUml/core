class PositionCalculator {
  _orderedParticipants;
  constructor(orderedParticipants) {
    this._orderedParticipants = orderedParticipants;

  }

  getPosition(a) {
    return this._orderedParticipants[a];
  }

  on(param) {
    // update orderedParticipants for each key in the param
    for (const paramKey in param) {
      this._orderedParticipants[paramKey] = param[paramKey];
    }

  }
}

describe('Define order of participants', () => {
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
})
