import {width} from "../../../src/positioning/Coordinate";
import {PosCal2} from "../../../src/positioning/PosCal2";
import {PosCal3} from "../../../src/positioning/posCal3";

let seqDsl = require('../../../src/parser/index');

describe('PosCal3', () => {
  it('should return the correct position', () => {
    let rootContext = seqDsl.RootContext('A.m');
    const posCal3 = new PosCal3(rootContext);
    let ownableMessages = posCal3.getOwnedMessagesList();
    expect(ownableMessages).toEqual([ {owner: 'A', ownableMessages: [ {from: '_STARTER_', signature: 'm'}]}]);
    let coordinates2 = posCal3.getCoordinates2(width);
    expect(coordinates2).toEqual([{participant: 'A', gap: 2, width: 4}]);
    const posCal2 = new PosCal2(coordinates2);
    expect(posCal2.getPosition('A')).toEqual(100);
  });
})
