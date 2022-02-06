// max(MIN_GAP, old_g, new_g, w/2 + left-part-w/2 + MARGIN)
import {MARGIN, MIN_PARTICIPANT_WIDTH, ARROW_HEAD_WIDTH} from "@/positioning/Constants";
import {Coordinates} from "@/positioning/Coordinates";
import {seqDsl} from "../../../src/positioning/ParticipantListener";
import {stubWidthProvider} from "../parser/fixture/Fixture";

describe('get absolute position of a participant', () => {

  it('wide participant label and error scenario', () => {
    let rootContext = seqDsl.RootContext('A200 group {B300} C400');
    const coordinates = new Coordinates(rootContext, stubWidthProvider);

    expect(() => coordinates.getPosition('NotExist')).toThrow('Participant NotExist not found');
    expect(coordinates.getPosition('A200')).toBe(120)
    expect(coordinates.getPosition('B300')).toBe(390)
    expect(coordinates.getPosition('C400')).toBe(760)
  })

  it.each(
    [
      ['A1 B1',         10, 70, 190],
      ['A1 group {B1}', 10, 70, 190], // group does not change absolute positions
    ]
  )('Use MINI_GAP (100) for %s', (code, posStarter, posA1, posB1) => {
    let rootContext = seqDsl.RootContext(code);

    const coordinates = new Coordinates(rootContext, stubWidthProvider);

    expect(coordinates.getPosition('_STARTER_')).toBe(posStarter)
    // margin for _STARTER_ + half MINI_GAP
    expect(coordinates.getPosition('A1')).toBe(posA1)
    // margin + half MINI_GAP + position of A1
    expect(coordinates.getPosition('B1')).toBe(posB1)
  })

  it('wide method', () => {
    let rootContext = seqDsl.RootContext('A1.m800');
    const coordinates = new Coordinates(rootContext, stubWidthProvider);
    expect(coordinates.getPosition('_STARTER_')).toBe(10)
    expect(coordinates.getPosition('A1')).toBe(820)
  })

  it('reproduce issue', () => {
    let rootContext = seqDsl.RootContext('A1->B1: m800\r\nB1->C1: m900');
    const coordinates = new Coordinates(rootContext, stubWidthProvider);
    expect(coordinates.getPosition('_STARTER_')).toBe(10)
    expect(coordinates.getPosition('A1')).toBe(70)
    expect(coordinates.getPosition('B1')).toBe(880)
    expect(coordinates.getPosition('C1')).toBe(1790)
  })

  it.each([
    ['new A1',    'A1',   80],
    ['new A200', 'A200',  130],
  ])('creation method: %s', (code, name, pos) => {
    let rootContext = seqDsl.RootContext(code);
    const coordinates = new Coordinates(rootContext, stubWidthProvider);
    expect(coordinates.getPosition('_STARTER_')).toBe(10)
    // half participant width + Starter Position + margin
    expect(coordinates.getPosition(name)).toBe(pos)
  })


  it('non-adjacent long message', () => {
    const messageLength = 800;
    let rootContext = seqDsl.RootContext(`A1->B1: m1\nB1->C1: m1\nA1->C1: m${messageLength}`);
    const coordinates = new Coordinates(rootContext, stubWidthProvider);
    
    const positionStarter = MARGIN/2;
    expect(coordinates.getPosition('_STARTER_')).toBe(positionStarter);

    const positionA = positionStarter + MIN_PARTICIPANT_WIDTH/2 + MARGIN/2;
    expect(coordinates.getPosition('A1')).toBe(positionA); //70

    const positionB = positionA + MIN_PARTICIPANT_WIDTH/2 + MARGIN/2 + MIN_PARTICIPANT_WIDTH/2 + MARGIN/2;
    expect(coordinates.getPosition('B1')).toBe(positionB); //190

    const positionC = positionB + (messageLength - (positionB - positionA)) + ARROW_HEAD_WIDTH;
    expect(coordinates.getPosition('C1')).toBe(positionC);
  })

  // it('backwards long message', () => {
  //   const messageLength = 800;
  //   let rootContext = seqDsl.RootContext(`A1->B1: m1\nB1->C1: m1\nC1->A1: m${messageLength}`);
  //   const coordinates = new Coordinates(rootContext, stubWidthProvider);
    
  //   let position = MARGIN/2;
  //   expect(coordinates.getPosition('_STARTER_')).toBe(position);

  //   position += MIN_PARTICIPANT_WIDTH/2 + MARGIN/2;
  //   expect(coordinates.getPosition('A1')).toBe(position); //70

  //   position += MIN_PARTICIPANT_WIDTH/2 + MARGIN/2 + MIN_PARTICIPANT_WIDTH/2 + MARGIN/2;
  //   expect(coordinates.getPosition('B1')).toBe(position); //190

  //   position += MIN_PARTICIPANT_WIDTH/2 + MARGIN/2 + messageLength;
  //   expect(coordinates.getPosition('C1')).toBe(1000);
  // })
})
