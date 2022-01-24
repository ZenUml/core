import {Participants} from "@/parser/index";
import {MessageWalker} from "./MessageWalker";
import {ICoordinates2, TextType, WidthFunc} from "./Coordinate";
import {IOwnedMessages} from "@/positioning/OwnableMessage";
const antlr4 = require('antlr4/index');

export class PosCal3 {
  private rootContext: any;

  constructor(rootContext: any) {
    this.rootContext = rootContext;
  }

  // [participant: [from, signature]]
  getOwnedMessagesList() {
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT

    const listener = new MessageWalker();
    walker.walk(listener, this.rootContext);
    const participants = Participants(this.rootContext, true).Names();
    // map items in participants to their owned messages
    const ownedMessagesList = listener.result();
    return participants.map((p: string) => {
      const ownedMessages = ownedMessagesList.find(o => o.owner === p);
      if (ownedMessages) {
        return ownedMessages;
      } else {
        return {owner: p, ownableMessages: []};
      }
    });
  }


  // [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
  getCoordinates2(widthProvider: WidthFunc): ICoordinates2 {
    const ownedMessagesList = this.getOwnedMessagesList();
    // map ownedMessagesList to [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
    return ownedMessagesList.map((p: IOwnedMessages) => {
      const participant = p.owner;
      const gap = widthProvider(p.ownableMessages[0]?.signature, TextType.MessageContent);
      const width = widthProvider(participant, TextType.ParticipantName);
      return {participant: participant, gap: gap, width: width};
    });
  }
}
