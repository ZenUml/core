let seqDsl = require('../../../src/parser/index');

interface IPosition {
  center: number;
  top: number;
}

// An ownable message can be assigned to a `target` participant.
interface IOwnableMessage {
  from: string;
  content: string;
}

interface ICoordinate {
  participant: string;
  position: IPosition;
  meta: Array<IOwnableMessage>
}

interface ICoordinates extends Array<ICoordinate>{}

class PosCal3 {
  constructor(rootContext: any) {

  }

  getCoordinates(): ICoordinates {
    return [{
      participant: 'A',
      position: {
        center: 0,
        top: 0
      },
      meta: [{
        from: '_STARTER_',
        content: 'm'
      }]
    }];
  }
}

describe('PosCal3', () => {
  it('should return the correct position', () => {
    let rootContext = seqDsl.RootContext('A.m');
    const pos = new PosCal3(rootContext);
    expect(pos.getCoordinates()).toEqual([{
      participant: 'A',
      position: {
        center: 0,
        top: 0
      },
      meta: [{
        from: '_STARTER_',
        content: 'm'
      }]
    }]);
  });
})
