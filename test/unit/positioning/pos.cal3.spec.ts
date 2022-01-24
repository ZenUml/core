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

interface IOwnedMessages {
  owner: string;
  ownableMessages: Array<IOwnableMessage>;
}

interface ICoordinate {
  participant: string;
  position: IPosition;
  meta: Array<IOwnableMessage>
}

interface ICoordinate2 {
  participant: string;
  gap: number;
  width: number;
}

interface ICoordinates extends Array<ICoordinate>{}
interface ICoordinates2 extends Array<ICoordinate2>{}

enum TextType {
  MessageContent,
  ParticipantName,
}

interface WidthFunc {
  (text: string, type: TextType): number;
}
let width: WidthFunc = (text, type) => {
  if (type === TextType.MessageContent) {
    return text.length * 2;
  } else if (type === TextType.ParticipantName) {
    return text.length * 4;
  } else {
    throw new Error('Unknown text type');
  }
};

class MessageWalker extends sequenceParserListener.sequenceParserListener {
  private ownedMessagesList : Array<IOwnedMessages> = [];

  enterMessage (ctx: any): void {
    const from = ctx?.parentCtx?.Origin();
    const owner = ctx?.Owner();
    const signature = ctx?.SignatureText();
    // if there is an entry for owner in ownedMessagesList, add ownableMessage to ownableMessages, otherwise create new entry
    const ownerAndTheirMessages = this.ownedMessagesList.find(p => p.owner === owner);
    if (ownerAndTheirMessages) {
      ownerAndTheirMessages.ownableMessages.push({from: from, signature: signature});
    } else {
      this.ownedMessagesList.push({owner: owner, ownableMessages: [{from: from, signature: signature}]});
    }
  }
  result(): Array<IOwnedMessages> {
    return this.ownedMessagesList;
  }
}

class PosCal3 {
  private rootContext: any;
  constructor(rootContext: any) {
    this.rootContext = rootContext;
  }

  // [participant: [from, signature]]
  getOwnedMessagesList() {
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT

    const listener = new MessageWalker();
    walker.walk(listener, this.rootContext);
    return listener.result();
  }


  // [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
  getCoordinates2(widthProvider: WidthFunc): ICoordinates2 {
    const ownedMessagesList = this.getOwnedMessagesList();
    // map ownedMessagesList to [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
    const coordinates2 = ownedMessagesList.map(p => {
      const participant = p.owner;
      const gap = widthProvider(p.ownableMessages[0].signature, TextType.MessageContent);
      const width = widthProvider(participant, TextType.ParticipantName);
      return {participant: participant, gap: gap, width: width};
    });
    return coordinates2;
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
    const posCal3 = new PosCal3(rootContext);
    let ownableMessages = posCal3.getOwnedMessagesList();
    expect(ownableMessages).toEqual([ {owner: 'A', ownableMessages: [ {from: '_STARTER_', signature: 'm'}]}]);
    let coordinates2 = posCal3.getCoordinates2(width);
    expect(coordinates2).toEqual([{participant: 'A', gap: 2, width: 4}]);
  });
})
