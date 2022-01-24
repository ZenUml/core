import {TextType, WidthFunc} from "../../../src/positioning/Coordinate";
import {PosCal3} from "../../../src/positioning/posCal3";

let seqDsl = require('../../../src/parser/index');

export let stubWidthProvider: WidthFunc = (text, type) => {
  if (!text || text.length === 0 || text === '_STARTER_') return 0;
  if (text.includes('long')) return 500;
  if (type === TextType.MessageContent) {
    return 150;
  } else if (type === TextType.ParticipantName) {
    return 200;
  } else {
    throw new Error('Unknown text type');
  }
};

describe('PosCal3', () => {
  it('should return the correct position', () => {
    assertParticipantOwnsMessageSignature('A.m', 'A', 'm');
    assertParticipantHasGapAndWidth('A.m', 'A', 150, 200);
  });

  it('should return the correct position - for long method name', () => {
    assertParticipantOwnsMessageSignature('A.long', 'A', 'long');
    assertParticipantHasGapAndWidth('A.long', 'A', 500, 200);
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
