import {Coordinates} from "../../../src/positioning/Coordinates";
import {stubWidthProvider} from "../parser/fixture/Fixture";
import {GroupCoordinates} from "../../../src/positioning/GroupCoordinates";
import {Participants2} from "../../../src/positioning/Participants2";

let seqDsl = require('../../../src/parser/index');


function CoordinateCalc(rootContext: any) {
  let participants = Participants2(rootContext);
  const coordinates = new Coordinates(rootContext, stubWidthProvider);
  function absolutePos(name: (string | undefined)) {
    return coordinates.getPosition(name);
  }
  return GroupCoordinates(participants, absolutePos);
}

describe('Group Positioning', () => {

  it('position simple message', () => {
    let rootContext = seqDsl.RootContext('A100.m100');
    let groupCoordinates = CoordinateCalc(rootContext);
    const expected = [
      {name: '_STARTER_', left: 10 },
      {name: 'A100', left: 120 },
    ]
    expect(groupCoordinates). toEqual(expected);
  })

  it('position simple message - with declared participant', () => {
    let rootContext = seqDsl.RootContext('A100 A100.m100');
    let groupCoordinates = CoordinateCalc(rootContext);
    const expected = [
      {name: '_STARTER_', left: 10 },
      {name: 'A100', left: 120 },
    ]
    expect(groupCoordinates). toEqual(expected);
  })


  it('position starter', () => {
    let rootContext = seqDsl.RootContext('A100 @Starter(A100)');
    let groupCoordinates = CoordinateCalc(rootContext);
    const expected = [
      {name: 'A100', left: 60 },
    ]
    // expect(groupCoordinates). toEqual(expected);
  })

  it('position groups', () => {
    let rootContext = seqDsl.RootContext('A100 group {B100} C100');
    let groupCoordinates = CoordinateCalc(rootContext);
    const expected = [
      {name: '_STARTER_', left: 10 },
      {name: 'A100', left: 70 },
      {name: undefined, left: 190 },
      {name: 'B100', left: 0 },
      {name: 'C100', left: 310 }
    ]
    expect(groupCoordinates).toEqual(expected);
  })

})
