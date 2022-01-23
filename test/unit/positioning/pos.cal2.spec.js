import PosCal2  from "../../../src/utils/posCal2";
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
      {participant: 'C', gap:10, width: 200 },
    ]);

    expect(posCal2.getPosition('A')).toBe(110)
    expect(posCal2.getPosition('B')).toBe(330)
    expect(posCal2.getPosition('C')).toBe(550)
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
