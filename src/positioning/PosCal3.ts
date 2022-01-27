import {OrderedParticipants} from "@/positioning/OrderedParticipants";
import {Participants} from "@/parser/index";
import {MessageContextListener} from "./MessageContextListener";
import {ICoordinates2, TextType, WidthFunc} from "./Coordinate";
import {IOwnedMessages} from "@/positioning/OwnableMessage";

const antlr4 = require('antlr4/index');

export class PosCal3 {

  // [participant: [from, signature]]
  getOwnedMessagesList(ctx: any): Array<IOwnedMessages> {
    const ownedMessagesList = PosCal3.visitAllMessages(ctx);
    const participants = PosCal3.getAllParticipants(ctx);
    return participants.map((participant: string) => {
      return this.getOwnedMessages(ownedMessagesList, participant);
    });
  }

  private static getAllParticipants(ctx: any) {
    return Participants(ctx, true).Names();
  }

  private static visitAllMessages(ctx: any) {
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT

    const listener = new MessageContextListener();
    walker.walk(listener, ctx);
    return listener.result();
  }

  private getOwnedMessages(ownedMessagesList: Array<IOwnedMessages>, participant: string) {
    const ownedMessages = ownedMessagesList.find(o => o.owner === participant);
    return ownedMessages || {owner: participant, ownableMessages: []};
  }

// [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
  private static MINI_GAP = 100;
  getCoordinates2(ctx: any, widthProvider: WidthFunc): ICoordinates2 {
    const ownedMessagesList = this.getOwnedMessagesList(ctx);
    // map ownedMessagesList to [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
    return ownedMessagesList.map((p: IOwnedMessages) => {
      const participant = p.owner;
      const gap = PosCal3.getGap(widthProvider, p, ctx);
      const width = widthProvider(participant, TextType.ParticipantName);
      return {participant: participant, gap: gap, width: width};
    });
  }

  private static getGap(widthProvider: WidthFunc, p: IOwnedMessages, ctx: any) {
    const contributingMessages = this.getMessagesFromLeftNeighbour(ctx, p);
    const gaps = contributingMessages.map((m: any) => {
      // 10px for the arrow head
      return widthProvider(m.signature, TextType.MessageContent) + 10;
    });
    // return the max gap from gaps
    return Math.max(...gaps, this.MINI_GAP);
  }

  // An owned message always has 'from';
  // root messages has 'from' as _STARTER_;
  // 'from' can be itself; special case: @Starter(A) A.method(), from === A
  private static getMessagesFromLeftNeighbour(ctx: any, p: IOwnedMessages) {
    const leftNeighbour = PosCal3.leftNeighbour(ctx, p.owner);
    return p.ownableMessages.filter(o => o.from === leftNeighbour);
  }

  private static leftNeighbour(ctx: any, me: string) {
    const orderedParticipants = OrderedParticipants(ctx);
    return orderedParticipants?.find(p => p.name === me)?.left;
  }
}
