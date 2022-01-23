// a, b, c, MIN_GAP=100, MARGIN
// [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
// delta {a: {g: 110, w: 120} =>
export default class PosCal2 {
  _participants;
  MINI_GAP = 100;
  MARGIN = 20;

  constructor(participants) {
    this._participants = participants;
  }

  getPosition(participantName) {
    // get index of participant by participantName
    const index = this._participants.findIndex(p => p.participant === participantName);
    // filter participants index < index
    const participantsBefore = this._participants.filter((p, i) => i <= index);
    // sum all gaps
    return participantsBefore.reduce((sum, participant, i) => {
      const prev = participantsBefore[i - 1];
      return sum + this.calculateGap(participant, prev);
    }, 0)
  }

  calculateGap(participant, prev) {
    return Math.max(participant.gap, this.half(prev) + this.half(participant), this.MINI_GAP);
  }

  half(participant) {
    if (participant) {
      // get previous participant
      return (participant.width / 2) + (this.MARGIN / 2);
    }
    return 0;
  }
}
