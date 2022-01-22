// a, b, c, MIN_GAP=100, MARGIN
// [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
// delta {a: {g: 110, w: 120} =>
class PosCal2 {
  _participants;
  constructor(participants) {
    this._participants = participants;
  }

  getPosition(participantName) {
    // get index of participant by participantName
    const index = this._participants.findIndex(p => p.participant === participantName);
    // filter participants index < index
    const participantsBefore = this._participants.filter((p, i) => i <= index);
    // sum all gaps
    return participantsBefore.reduce((sum, p) => sum + p.gap, 0)
  }
}

// max(MIN_GAP, old_g, new_g, w/2 + left-part-w/2 + MARGIN)
describe('cal', () => {
  // it('should accept a gap', () => {
  //   new PosCal2()
  // })

  it('produce position of participant', () => {
    const posCal2 = new PosCal2([
      {participant: 'A', gap:100, width: 250 },
      {participant: 'B', gap:100, width: 120 },
      {participant: 'C', gap:150, width: 200}
    ]);

    expect(posCal2.getPosition('A')).toBe(100)
    expect(posCal2.getPosition('B')).toBe(200)
    expect(posCal2.getPosition('C')).toBe(350)
  })
})
