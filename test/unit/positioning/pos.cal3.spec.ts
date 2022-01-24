import {TextType, WidthFunc} from "../../../src/positioning/Coordinate";
import {PosCal3} from "../../../src/positioning/posCal3";

let seqDsl = require('../../../src/parser/index');

export let stubWidthProvider: WidthFunc = (text, type) => {
  switch (text) {
    case 'm':
    case 'm1':
      return 100;
    case 'm2':
      return 200;
    case 'm3':
      return 300;
    case 'm4':
      return 400;
    case 'A':
      return 500;
    case 'B':
      return 600;
  }
  return 0;
};

describe('PosCal3', () => {
  it('should return the correct position', () => {
    assertParticipantOwnsMessageSignature('A.m', 'A', 'm');
    assertParticipantHasGapAndWidth('A.m', 'A', 100, 500);
  });

  it('should return the correct position - for long method name', () => {
    assertParticipantOwnsMessageSignature('A.m4', 'A', 'm4');
    assertParticipantHasGapAndWidth('A.m4', 'A', 400, 500);
  });

  // A.m1 B.m2
  // B.m2 should be ignored, because it is not from 'A' (the previous participant)
  it('should return the correct position - for long method name', () => {
    assertParticipantOwnsMessageSignature('A.m1 B.m2', 'A', 'm1');
    assertParticipantHasGapAndWidth('A.m1 B.m2', 'A', 100, 500);
    assertParticipantHasGapAndWidth('A.m1 B.m2', 'B', 0, 600);
  });
})

function assertParticipantOwnsMessageSignature(code: string, participant: string, signature: string) {
  let rootContext = seqDsl.RootContext(code);
  const posCal3 = new PosCal3();
  let ownableMessages = posCal3.getOwnedMessagesList(rootContext);

  const message = ownableMessages?.find(m => m.owner === participant)?.ownableMessages?.find(m => m.signature === signature);
  expect(message).toBeDefined();
}

function assertParticipantHasGapAndWidth(code: string, participant: string, gap: number, width: number) {
  let rootContext = seqDsl.RootContext(code);
  const posCal3 = new PosCal3();
  let coordinates2 = posCal3.getCoordinates2(rootContext, stubWidthProvider);

  const coordinate2 = coordinates2.find(c => c.participant === participant);
  expect(coordinate2?.gap).toEqual(gap);
  expect(coordinate2?.width).toEqual(width);
}
