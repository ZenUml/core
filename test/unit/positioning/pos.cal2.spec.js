// max(MIN_GAP, old_g, new_g, w/2 + left-part-w/2 + MARGIN)
import {PosCal2} from "@/positioning/PosCal2";
import {seqDsl} from "../../../src/positioning/ParticipantListener";
import {stubWidthProvider} from "./pos.cal3.spec";

describe('cal', () => {

  it('produce position of participant - only declared participants', () => {
    let rootContext = seqDsl.RootContext('A100 group {B100} C100');

    const posCal2 = new PosCal2([], rootContext, stubWidthProvider);

    expect(posCal2.getPosition('A100')).toBe(200)
    expect(posCal2.getPosition('B100')).toBe(320)
    expect(posCal2.getPosition('C100')).toBe(440)
  })

  it('produce position of participant - ensure MINI_GAP', () => {
    let rootContext = seqDsl.RootContext('A1 group {B1} C1');

    const posCal2 = new PosCal2([], rootContext, stubWidthProvider);

    expect(posCal2.getPosition('A1')).toBe(200)
    expect(posCal2.getPosition('B1')).toBe(300)
    expect(posCal2.getPosition('C1')).toBe(400)
  })

  it('produce position of participant - wide method', () => {
    let rootContext = seqDsl.RootContext('A1 group {B1} C1 A1.m800');

    const posCal2 = new PosCal2([], rootContext, stubWidthProvider);

    expect(posCal2.getPosition('A1')).toBe(910)
    expect(posCal2.getPosition('B1')).toBe(1010)
    expect(posCal2.getPosition('C1')).toBe(1110)
  })
})
