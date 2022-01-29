// max(MIN_GAP, old_g, new_g, w/2 + left-part-w/2 + MARGIN)
import {PosCal2} from "@/positioning/PosCal2";
import {seqDsl} from "../../../src/positioning/ParticipantListener";
import {stubWidthProvider} from "../parser/fixture/Fixture";

describe('get absolute position of a participant', () => {

  it('wide participant label and error scenario', () => {
    let rootContext = seqDsl.RootContext('A200 group {B300} C400');
    const posCal2 = new PosCal2(rootContext, stubWidthProvider);

    expect(() => posCal2.getPosition('NotExist')).toThrow('Participant NotExist not found');
    expect(posCal2.getPosition('A200')).toBe(120)
    expect(posCal2.getPosition('B300')).toBe(390)
    expect(posCal2.getPosition('C400')).toBe(760)
  })

  it.each(
    [
      ['A1 B1',         10, 70, 190],
      ['A1 group {B1}', 10, 70, 190], // group does not change absolute positions
    ]
  )('Use MINI_GAP (100) for %s', (code, posStarter, posA1, posB1) => {
    let rootContext = seqDsl.RootContext(code);

    const posCal2 = new PosCal2(rootContext, stubWidthProvider);

    expect(posCal2.getPosition('_STARTER_')).toBe(posStarter)
    // margin for _STARTER_ + half MINI_GAP
    expect(posCal2.getPosition('A1')).toBe(posA1)
    // margin + half MINI_GAP + position of A1
    expect(posCal2.getPosition('B1')).toBe(posB1)
  })

  it('wide method', () => {
    let rootContext = seqDsl.RootContext('A1.m800');
    const posCal2 = new PosCal2(rootContext, stubWidthProvider);
    expect(posCal2.getPosition('_STARTER_')).toBe(10)
    expect(posCal2.getPosition('A1')).toBe(820)
  })

  it.each([
    ['new A1',    'A1',   80],
    ['new A200', 'A200',  130],
  ])('creation method: %s', (code, name, pos) => {
    let rootContext = seqDsl.RootContext(code);
    const posCal2 = new PosCal2(rootContext, stubWidthProvider);
    expect(posCal2.getPosition('_STARTER_')).toBe(10)
    // half participant width + Starter Position + margin
    expect(posCal2.getPosition(name)).toBe(pos)
  })
})
