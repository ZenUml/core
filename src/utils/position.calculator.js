export default class PositionCalculator {
  _orderedParticipants;
  result = {};
  DEFAULT_GAP = 50;

  constructor(orderedParticipants) {
    this._orderedParticipants = orderedParticipants || [];
  }

  getRightMostPositionedParticipant(before = null) {
    // if before is not null, get the position of the participant with name 'before'
    let end = this._orderedParticipants.length;
    if (before && this._orderedParticipants.includes(before)) {
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
      // if _orderedParticipants does not contain paramKey, add it
      if (!this._orderedParticipants.includes(paramKey)) {
        this._orderedParticipants.push(paramKey);
      }
      const rightMostPositionedParticipant = this.getRightMostPositionedParticipant(paramKey);
      if (rightMostPositionedParticipant) {
        if (param[paramKey] <= this.getPosition(rightMostPositionedParticipant)) {
          this.result[paramKey] = this.getPosition(rightMostPositionedParticipant) + this.DEFAULT_GAP;
          console.log('applying 1', param)
          return
        }
      }
      console.log('applying 2', param)
      this.result[paramKey] = param[paramKey]
    }
  }
}
