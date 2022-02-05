import {Coordinates} from "../../../src/positioning/Coordinates";
import {stubWidthProvider} from "../parser/fixture/Fixture";

let seqDsl = require('../../../src/parser/index');

describe('PosCal3', () => {
  it('should return default positions for declared participants', () => {
    assertParticipantHasMessageWidthAndParticipantWidth('A500', 'A500', 260, 500);
    // A self-call does not contribute to gap
    assertParticipantHasMessageWidthAndParticipantWidth('@Starter(A500) A500.m100', 'A500', 260, 500);
  })
  it('should return the correct position', () => {
    assertParticipantHasMessageWidthAndParticipantWidth('A500.m100', 'A500', 260, 500);
  });

  it('should return the correct position - for long method name', () => {
    assertParticipantHasMessageWidthAndParticipantWidth('A500.m400', 'A500', 410, 500);
  });

  // A.m1 B.m2
  // B.m2 should be ignored, because it is not from 'A' (the previous participant)
  it('should return the correct position - for long participant name', () => {
    assertParticipantHasMessageWidthAndParticipantWidth('A500.m100 B600.m200', '_STARTER_', 10, 500);
    assertParticipantHasMessageWidthAndParticipantWidth('A500.m100 B600.m200', 'A500', 260, 500);
    assertParticipantHasMessageWidthAndParticipantWidth('A500.m100 B600.m200', 'B600', 570, 600);
  });
})

function assertParticipantHasMessageWidthAndParticipantWidth(code: string, participant: string, gap: number, participantWidth: number) {
  let rootContext = seqDsl.RootContext(code);
  let coordinates2 = Coordinates.getMessageWidthAndParticipantWidth(rootContext, stubWidthProvider);

  const coordinate2 = coordinates2.find(c => c.participant === participant);
  expect(coordinate2?.gap).toEqual(gap);
}
