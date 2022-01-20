class PositionCalculator {
  _orderedParticipants;
  result = {};
  constructor(orderedParticipants) {
    this._orderedParticipants = orderedParticipants;
  }

  getRightMostParticipant(before = null) {
    // if before is not null, get the position of the participant with name 'before'
    let end = this._orderedParticipants.length;
    if(before) {
      end = this._orderedParticipants.indexOf(before);
    }
    // iterate from end to the beginning and find the first one that is not undefined
    for (let i = end - 1; i >= 0; i--) {
      if (this.result[this._orderedParticipants[i]] !== undefined) {
        return this.result[this._orderedParticipants[i]];
      }
    }
    return -1;
  }

  getPosition(a) {
    return this.result[a];
  }

  on(param) {
    // update orderedParticipants for each key in the param
    for (const paramKey in param) {
      // print if param is trying to position the participant
      // in wrong order

      // get the right most participant currently registered

      // if (param[paramKey] !== this._orderedParticipants[paramKey]) {
      //   console.log(
      //     `${param[paramKey]} is positioned in wrong order.`
      //   );
      // }
      this.result[paramKey] = param[paramKey];
    }
  }
}

describe('Define order of participants', () => {
  it('get right most participant', () => {
    const orderedParticipants = ['A', 'B']
    const positionCalculator = new PositionCalculator(orderedParticipants);
    positionCalculator.on({
      A: 1,
      B: 2,
    });
    expect(positionCalculator.getRightMostParticipant()).toBe(2);
    expect(positionCalculator.getRightMostParticipant('B')).toBe(1);
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

  xit('given order A, B, but events say differently', () => {
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
})
