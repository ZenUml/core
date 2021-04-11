import {LifelineLayout} from "@/components/lifeline/LifelineLayout";

describe('Lifeline layout', () => {
  // given two participants: p1 and p2, we should know what is the left for any of them
  it('should know the left of p1 and pA', () => {
    const lifelineLayout = LifelineLayout(['p1', 'pA']);
    const centerP1 = lifelineLayout.center('p1')
    expect(centerP1).toBe(0)
    const centerP2 = lifelineLayout.center('pA')
    expect(centerP2).toBe(37)
  })
})
