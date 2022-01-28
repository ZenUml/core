import {stubWidthProvider} from "./pos.cal3.spec";
import {
  antlr4,
  IParticipantModel,
  ParticipantListener,
  SingleOrGroup
} from "../../../src/positioning/ParticipantListener";
import {PosCal2} from "../../../src/positioning/PosCal2";

let seqDsl = require('../../../src/parser/index');

function Participants2(rootContext: any) {
  const listener = new ParticipantListener();
  const walker = antlr4.tree.ParseTreeWalker.DEFAULT
  walker.walk(listener, rootContext)
  return listener.result();
}


function getGroupCoordinates(participants: IParticipantModel[], absolutePos: (name: (string | undefined)) => number) {
  let result = [] as any;

  function _getLeft(participant: IParticipantModel) {
    let positionProvider = participant.type === SingleOrGroup.GROUP ? participant.children[0] : participant;
    return absolutePos(positionProvider.name);
  }

  function _processItem(participant: IParticipantModel, relativeLeft: number = 0) {
    let left = _getLeft(participant);
    result.push({key: participant.key, name: participant.name, left: left - relativeLeft})
    for (const item of participant.children) {
      _processItem(item, left);
    }
  }

  for (const participant of participants) {
    _processItem(participant);
  }
  return result;
}

function CoordinateCalc(rootContext: any) {
  let participants = Participants2(rootContext);
  const posCal2 = new PosCal2(rootContext, stubWidthProvider);
  function absolutePos(name: (string | undefined)) {
    return posCal2.getPosition(name);
  }
  return getGroupCoordinates(participants, absolutePos);
}

describe('Group Positioning', () => {
  it('gives participant a natural key', () => {
    // get rootContext
    let rootContext = seqDsl.RootContext('rootContext');
    console.log('key', `${rootContext.start.start}-${rootContext.stop.stop}`);
  })

  it('position groups', () => {
    let rootContext = seqDsl.RootContext('A100 group {B100} C100');
    let groupCoordinates = CoordinateCalc(rootContext);
    const expected = [
      { key: '0-3', name: 'A100', left: 100 },
      { key: '5-16', name: undefined, left: 220 },
      { key: '12-15', name: 'B100', left: 0 },
      { key: '18-21', name: 'C100', left: 340 }
    ]
    expect(groupCoordinates).toEqual(expected);
  })

})
