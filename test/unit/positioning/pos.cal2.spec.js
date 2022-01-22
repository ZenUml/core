// a, b, c, MIN_GAP=100, MARGIN
// [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
// delta {a: {g: 110, w: 120} =>
class PosCal2 {
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
    return participantsBefore.reduce((sum, p, i) => {
      if (i === 0) {
        return sum + Math.max(p.gap, (p.width / 2) + (this.MARGIN / 2), this.MINI_GAP);
      }
      // get previous participant
      const prevParticipant = participantsBefore[i - 1];

      return sum + Math.max(p.gap, ((prevParticipant.width/2) + (p.width /2) + this.MARGIN), this.MINI_GAP);
    }, 0)
  }
}

// max(MIN_GAP, old_g, new_g, w/2 + left-part-w/2 + MARGIN)
describe('cal', () => {
  // it('should accept a gap', () => {
  //   new PosCal2()
  // })

  it('produce position of participant', () => {
    const posCal2 = new PosCal2([
      {participant: 'A', gap:100, width: 10 },
      {participant: 'B', gap:100, width: 10 },
      {participant: 'C', gap:150, width: 10}
    ]);

    expect(posCal2.getPosition('A')).toBe(100)
    expect(posCal2.getPosition('B')).toBe(200)
    expect(posCal2.getPosition('C')).toBe(350)
  })
  // A: 100, B: 200, C: 350
  it('produce position of participant - consider width and margin', () => {
    const posCal2 = new PosCal2([
      {participant: 'A', gap:10, width: 200 },
      {participant: 'B', gap:10, width: 200 },
    ]);

    expect(posCal2.getPosition('A')).toBe(110)
    expect(posCal2.getPosition('B')).toBe(330)
  })

  // A: 100, B: 200, C: 350
  it('produce position of participant - ensure MINI_GAP', () => {
    const posCal2 = new PosCal2([
      {participant: 'A', gap:10, width: 20 },
      {participant: 'B', gap:10, width: 20 },
    ]);

    expect(posCal2.getPosition('A')).toBe(100)
    expect(posCal2.getPosition('B')).toBe(200)
  })
})
