class PositionCalculator {
  _orderedParticipants;
  result = {};
  DEFAULT_GAP = 50;
  constructor(orderedParticipants) {
    this._orderedParticipants = orderedParticipants;
  }

  getRightMostPositionedParticipant(before = null) {
    // if before is not null, get the position of the participant with name 'before'
    let end = this._orderedParticipants.length;
    if(before) {
      end = this._orderedParticipants.indexOf(before);
    }
    // iterate from end to the beginning and find the first one that is not undefined
    for (let i = end - 1; i >= 0; i--) {
      if (this.result[this._orderedParticipants[i]] !== undefined) {
        return this._orderedParticipants[i];
      }
    }
    return undefined;
  }

  getPosition(a) {
    return this.result[a];
  }

  on(param) {
    // update orderedParticipants for each key in the param
    for (const paramKey in param) {
      const rightMostPositionedParticipant = this.getRightMostPositionedParticipant(paramKey);
      if (rightMostPositionedParticipant) {
        if(param[paramKey] < this.getPosition(rightMostPositionedParticipant)) {
          this.result[paramKey] = this.getPosition(rightMostPositionedParticipant) + this.DEFAULT_GAP;
          return;
        }
      }
      this.result[paramKey] = param[paramKey];
    }
  }
}

describe('Define order of participants', () => {
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
