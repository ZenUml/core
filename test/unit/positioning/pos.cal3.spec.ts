import {WidthFunc} from "../../../src/positioning/Coordinate";
import {PosCal3} from "../../../src/positioning/posCal3";

let seqDsl = require('../../../src/parser/index');

export let stubWidthProvider: WidthFunc = (text, _) => {
  const number = parseInt(text.substring(1) || '0');

  return isNaN(number) ? 0 : number;
};

describe('PosCal3', () => {
  it('should return default positions for declared participants', () => {
    assertParticipantHasMessageWidthAndParticipantWidth('A500', 'A500', 100, 500);
    // A self-call does not contribute to gap
    assertParticipantHasMessageWidthAndParticipantWidth('@Starter(A500) A500.m100', 'A500', 100, 500);
  })
  it('should return the correct position', () => {
    assertParticipantHasMessageWidthAndParticipantWidth('A500.m100', 'A500', 110, 500);
  });

  it('should return the correct position - for long method name', () => {
    assertParticipantHasMessageWidthAndParticipantWidth('A500.m400', 'A500', 410, 500);
  });

  // A.m1 B.m2
  // B.m2 should be ignored, because it is not from 'A' (the previous participant)
  it('should return the correct position - for long method name', () => {
    assertParticipantHasMessageWidthAndParticipantWidth('A500.m100 B600.m200', 'A500', 110, 500);
    assertParticipantHasMessageWidthAndParticipantWidth('A500.m100 B600.m200', 'B600', 100, 600);
  });
})

function assertParticipantHasMessageWidthAndParticipantWidth(code: string, participant: string, messageWidth: number, participantWidth: number) {
  let rootContext = seqDsl.RootContext(code);
  let coordinates2 = PosCal3.getMessageWidthAndParticipantWidth(rootContext, stubWidthProvider);

  const coordinate2 = coordinates2.find(c => c.participant === participant);
  expect(coordinate2?.messageWidth).toEqual(messageWidth);
  expect(coordinate2?.participantWidth).toEqual(participantWidth);
}
