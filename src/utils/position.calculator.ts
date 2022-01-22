export default class PositionCalculator {
  _orderedParticipants: any;
  result = new Map();
  DEFAULT_GAP = 100;

  constructor(orderedParticipants: Array<String>) {
    // if orderedParticipant is null or empty or not an array, throw error
    if (!orderedParticipants || !orderedParticipants.length) {
      throw new Error('orderedParticipants is null or empty');
    }
    this._orderedParticipants = orderedParticipants;
    // map items in orderedParticipants to keys on result and set default position
    let pos = 0;
    this._orderedParticipants.forEach((participant: String) => {
      this.result.set(participant, pos);
      pos += this.DEFAULT_GAP;
    });
  }

  getPosition(a: String) {
    return this.result.get(a);
  }

  on(param: any) {
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
