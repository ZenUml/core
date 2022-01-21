export default class PositionCalculator {
  _orderedParticipants;
  result = new Map();
  DEFAULT_GAP = 100;

  constructor(orderedParticipants) {
    // if orderedParticipant is null or empty or not an array, throw error

    if (!orderedParticipants || !orderedParticipants.length) {
      throw new Error('orderedParticipants is null or empty');
    }
    this._orderedParticipants = orderedParticipants;
  }

  getRightMostPositionedParticipant(before = null) {
    // if before is not null, get the position of the participant with name 'before'
    let end = this._orderedParticipants.length;
    if (before) {
      // if before is not in the orderedParticipants array, throw error
      if (!this._orderedParticipants.includes(before)) {
        throw new Error(`${before} is not in the orderedParticipants array`);
      }
      end = this._orderedParticipants.indexOf(before);
    }
    // iterate from end to the beginning and find the first one that is not undefined
    for (let i = end - 1; i >= 0; i--) {
      if (this.result.get(this._orderedParticipants[i]) !== undefined) {
        return this._orderedParticipants[i];
      }
    }
    return undefined;
  }

  getPosition(a) {
    return this.result.get(a);
  }

  on(param) {
    // update orderedParticipants for each key in the param
    for (const paramKey in param) {
      // if _orderedParticipants does not contain paramKey, add it
      if (!this._orderedParticipants.includes(paramKey)) {
        throw new Error(`${paramKey} is not in the orderedParticipants array`);
      }
      // position is smaller than stored position ignore it
      if (this.result.get(paramKey) !== undefined && param[paramKey] < this.result.get(paramKey)) {
        continue;
      }
      const rightMostPositionedParticipant = this.getRightMostPositionedParticipant(paramKey);
      if (rightMostPositionedParticipant) {
        if (param[paramKey] <= this.getPosition(rightMostPositionedParticipant) + this.DEFAULT_GAP) {
          this.result.set(paramKey, this.getPosition(rightMostPositionedParticipant) + this.DEFAULT_GAP);
          return
        }
      }
      if (this.result.get(paramKey) !== undefined && param[paramKey] > this.result.get(paramKey)) {
        const offset = param[paramKey] - this.result.get(paramKey);
        const index = this._orderedParticipants.indexOf(paramKey);
        for (let i = index + 1; i < this._orderedParticipants.length; i++) {
          this.result.set(this._orderedParticipants[i],  this.result.get(this._orderedParticipants[i]) + offset);
        }
      }
      this.result.set(paramKey, param[paramKey])
    }
  }
}
