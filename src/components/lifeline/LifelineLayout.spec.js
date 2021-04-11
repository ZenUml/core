import {LifelineLayout} from "@/components/lifeline/LifelineLayout";

describe('Lifeline layout', () => {
  // given two participants: p1 and p2, we should know what is the left for any of them
  it('should know the left of p1 and pA', () => {
    const lifelineLayout = LifelineLayout(['p1', 'pA']);
    const centerP1 = lifelineLayout.center('p1')
    expect(centerP1).toBe(60)
    const centerP2 = lifelineLayout.center('pA')
    expect(centerP2).toBe(180)
  })

  it('should know the center, left, etc.', () => {
    const lifelineLayout = LifelineLayout(['A', 'AHasAVeryLongNameSoItIsLong']);
    expect(lifelineLayout.center('A')).toBe(60)
    expect(lifelineLayout.left('A')).toBe(10)
    expect(lifelineLayout.outerLeft('A')).toBe(0)
    expect(lifelineLayout.outerRight('A')).toBe(120)
    expect(lifelineLayout.center('AHasAVeryLongNameSoItIsLong')).toBe(255)
    expect(lifelineLayout.left('AHasAVeryLongNameSoItIsLong')).toBe(130)
    expect(lifelineLayout.outerLeft('AHasAVeryLongNameSoItIsLong')).toBe(120)
    expect(lifelineLayout.outerRight('AHasAVeryLongNameSoItIsLong')).toBe(390)
  })
  it('should know the center, left, etc.', () => {
    const lifelineLayout = LifelineLayout(['AHasAVsdfasdfadiiiiiiiiiiii', 'AHasAVsdfasdfadiiiiiiiiiiiiiiiiiiiiiiiaaaaaaaaaaaaaaa']);
    console.log(lifelineLayout)
  })
})
