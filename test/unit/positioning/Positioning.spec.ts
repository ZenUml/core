import {PosCal2} from "../../../src/positioning/PosCal2";
import {stubWidthProvider} from "../parser/fixture/Fixture";
import {GroupCoordinates} from "../../../src/positioning/GroupCoordinates";
import {Participants2} from "../../../src/positioning/Participants2";

let seqDsl = require('../../../src/parser/index');


function CoordinateCalc(rootContext: any) {
  let participants = Participants2(rootContext);
  const posCal2 = new PosCal2(rootContext, stubWidthProvider);
  function absolutePos(name: (string | undefined)) {
    return posCal2.getPosition(name);
  }
  return GroupCoordinates(participants, absolutePos);
}

describe('Group Positioning', () => {
  it('gives participant a natural key', () => {
    // get rootContext
    let rootContext = seqDsl.RootContext('rootContext');
    console.log('key', `${rootContext.start.start}-${rootContext.stop.stop}`);
  })

  it('position simple message', () => {
    let rootContext = seqDsl.RootContext('A100.m100');
    let groupCoordinates = CoordinateCalc(rootContext);
    const expected = [
      { key: '0-0', name: '_STARTER_', left: 10 },
      { key: '0-3', name: 'A100', left: 120 },
    ]
    expect(groupCoordinates). toEqual(expected);
  })

  it('position simple message - with declared participant', () => {
    let rootContext = seqDsl.RootContext('A100 A100.m100');
    let groupCoordinates = CoordinateCalc(rootContext);
    const expected = [
      { key: '0-0', name: '_STARTER_', left: 10 },
      { key: '0-3', name: 'A100', left: 120 },
    ]
    expect(groupCoordinates). toEqual(expected);
  })


  it('position starter', () => {
    let rootContext = seqDsl.RootContext('A100 @Starter(A100)');
    let groupCoordinates = CoordinateCalc(rootContext);
    const expected = [
      { key: '0-3', name: 'A100', left: 60 },
    ]
    expect(groupCoordinates). toEqual(expected);
  })

  it('position groups', () => {
    let rootContext = seqDsl.RootContext('A100 group {B100} C100');
    let groupCoordinates = CoordinateCalc(rootContext);
    const expected = [
      { key: '0-0', name: '_STARTER_', left: 10 },
      { key: '0-3', name: 'A100', left: 70 },
      { key: '5-16', name: undefined, left: 190 },
      { key: '12-15', name: 'B100', left: 0 },
      { key: '18-21', name: 'C100', left: 310 }
    ]
    expect(groupCoordinates).toEqual(expected);
  })

})
