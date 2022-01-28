import {PosCal3} from "../../../src/positioning/PosCal3";
import {stubWidthProvider} from "./pos.cal3.spec";
import {
  antlr4,
  IParticipantModel,
  ParticipantListener,
  SingleOrGroup
} from "../../../src/positioning/ParticipantListener";
import {ICoordinates2} from "../../../src/positioning/Coordinate";
import {PosCal2} from "../../../src/positioning/PosCal2";

let seqDsl = require('../../../src/parser/index');

function Participants2(rootContext: any) {
  const listener = new ParticipantListener();
  const walker = antlr4.tree.ParseTreeWalker.DEFAULT
  walker.walk(listener, rootContext)
  return listener.result();
}


function getGroupCoordinates(participants: IParticipantModel[], coordinates2: ICoordinates2) {
  let result = [] as any;
  const posCal2 = new PosCal2(coordinates2);

  function _processSingleParticipantWithRelativeLeft(participant: IParticipantModel, relativeLeft: number) {
    let left = posCal2.getPosition(participant.name || '') || 0
    result.push({
      key: participant.key,
      name: participant.name,
      left: left - relativeLeft
    })
  }

  function _processGroup(participant: IParticipantModel) {
    let firstChild = participant.children[0];
    let left = posCal2.getPosition(firstChild.name || '') || 0
    result.push({
      key: participant.key,
      name: participant.name,
      left: left
    })
    for (let j = 0; j < participant.children.length; j++) {
      _processSingleParticipantWithRelativeLeft(participant.children[j], left);
    }
  }

  for (let i = 0; i < participants.length; i++) {
    const participant = participants[i];
    if (participant.type === SingleOrGroup.SINGLE) {
      _processSingleParticipantWithRelativeLeft(participant, 0);
    }
    if (participant.type === SingleOrGroup.GROUP) {
      _processGroup(participant);
    }
  }
  return result;
}

describe('Group Positioning', () => {
  it('gives participant a natural key', () => {
    // get rootContext
    let rootContext = seqDsl.RootContext('rootContext');
    console.log('key', `${rootContext.start.start}-${rootContext.stop.stop}`);
  })

  it('position groups', () => {
    let rootContext = seqDsl.RootContext('A100 group {B100}');
    let participants = Participants2(rootContext);
    const posCal3 = new PosCal3();
    let coordinates2 = posCal3.getCoordinates2(rootContext, stubWidthProvider);

    let groupCoordinates = getGroupCoordinates(participants, coordinates2);
    const expected = [
      { key: '0-3', name: 'A100', left: 100 },
      { key: '5-16', name: undefined, left: 220 },
      { key: '12-15', name: 'B100', left: 0 }
    ]
    console.log('groupCoordinates', groupCoordinates);
    expect(groupCoordinates).toEqual(expected);
  })

})
