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
  signature: string;
}

interface ICoordinate {
  participant: string;
  position: IPosition;
  meta: Array<IOwnableMessage>
}

interface ICoordinates extends Array<ICoordinate>{}

class MessageWalker extends sequenceParserListener.sequenceParserListener {
  ownableMessages: Array<IOwnableMessage> = [];
  constructor() {
    super();
  }
  enterMessage (ctx: any): void {
    const from = ctx.parentCtx?.Origin();
    const signature = ctx.SignatureText();
    this.ownableMessages.push({from, signature});
  }
  result(): Array<IOwnableMessage> {
    return this.ownableMessages;
  }
}

class PosCal3 {
  private rootContext: any;
  constructor(rootContext: any) {
    this.rootContext = rootContext;
  }

  getOwnableMessages() {
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT

    const listener = new MessageWalker();
    walker.walk(listener, this.rootContext);
    return listener.result();
  }

  getCoordinates(): ICoordinates {
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT
    const listener = new MessageWalker();
    walker.walk(listener, this.rootContext);

    return listener.coordinates;
  }
}

describe('PosCal3', () => {
  it('should return the correct position', () => {
    let rootContext = seqDsl.RootContext('A.m');
    let ownableMessages = new PosCal3(rootContext).getOwnableMessages();
    expect(ownableMessages).toEqual([{from: '_STARTER_', signature: 'm'}]);
  });
})
