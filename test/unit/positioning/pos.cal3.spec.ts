const antlr4 = require('antlr4/index');

let seqDsl = require('../../../src/parser/index');
const sequenceParserListener = require('../../../src/generated-parser/sequenceParserListener');

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

class MessageCollector extends sequenceParserListener.sequenceParserListener {
  constructor() {
    super();
  }
  enterMessage (ctx: any) {
    console.log('enterMessage: from', ctx.parentCtx?.Origin());
    console.log('enterMessage: to', ctx.Owner());
    console.log('enterMessage: content', ctx.messageBody().func().signature().map((s: any) => s.getTextWithoutQuotes()).join('.'));
  }
}

class PosCal3 {
  constructor(rootContext: any) {
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT
    const listener = new MessageCollector();
    walker.walk(listener, rootContext);
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
