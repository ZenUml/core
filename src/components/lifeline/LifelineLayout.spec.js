import {LifelineLayout} from "@/components/lifeline/LifelineLayout";

describe('Lifeline layout', () => {
  // given two participants: p1 and p2, we should know what is the left for any of them
  it('should know the left of p1 and pA', () => {
    const lifelineLayout = LifelineLayout(['p1', 'pA']);
    const centerP1 = lifelineLayout.center('p1')
    expect(centerP1).toBe(10)
    const centerP2 = lifelineLayout.center('pA')
    expect(centerP2).toBe(118)
  })

  it('should know the center, left, etc.', () => {
    const lifelineLayout = LifelineLayout(['AVeryLongLabel', 'AnotherVeryLongLabel']);
    expect(lifelineLayout.center('AVeryLongLabel')).toBe(10)
    expect(lifelineLayout.left('AVeryLongLabel')).toBe(-49)
    expect(lifelineLayout.outerLeft('AVeryLongLabel')).toBe(-59)
    expect(lifelineLayout.outerRight('AVeryLongLabel')).toBe(79)
    expect(lifelineLayout.center('AnotherVeryLongLabel')).toBe(148)
    expect(lifelineLayout.left('AnotherVeryLongLabel')).toBe(66)
    expect(lifelineLayout.outerLeft('AnotherVeryLongLabel')).toBe(56)
    expect(lifelineLayout.outerRight('AnotherVeryLongLabel')).toBe(240)
  })
})
