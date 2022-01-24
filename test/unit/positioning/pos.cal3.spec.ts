import {TextType, WidthFunc} from "../../../src/positioning/Coordinate";
import {PosCal2} from "../../../src/positioning/PosCal2";
import {PosCal3} from "../../../src/positioning/posCal3";

let seqDsl = require('../../../src/parser/index');

export let stubWidthProvider: WidthFunc = (text, type) => {
  if (!text || text.length === 0 || text === '_STARTER_') return 0;
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
    let rootContext = seqDsl.RootContext('A.m');
    const posCal3 = new PosCal3(rootContext);
    let ownableMessages = posCal3.getOwnedMessagesList();
    expect(ownableMessages).toEqual([
      {owner: '_STARTER_', ownableMessages: []},
      {owner: 'A', ownableMessages: [ {from: '_STARTER_', signature: 'm'}]}
    ]);
    let coordinates2 = posCal3.getCoordinates2(stubWidthProvider);
    expect(coordinates2).toEqual([
      {participant: '_STARTER_', gap: 0, width: 0},
      {participant: 'A', gap: 150, width: 200}
    ]);
    const posCal2 = new PosCal2(coordinates2);
    expect(posCal2.getPosition('A')).toEqual(250);
  });
})
