import {Participants} from "@/parser/index";
import {MessageWalker} from "./MessageWalker";
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

    const listener = new MessageWalker();
    walker.walk(listener, ctx);
    return listener.result();
  }

  private getOwnedMessages(ownedMessagesList: Array<IOwnedMessages>, participant: string) {
    const ownedMessages = ownedMessagesList.find(o => o.owner === participant);
    return ownedMessages || {owner: participant, ownableMessages: []};
  }

// [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
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
    const participants = PosCal3.getAllParticipants(ctx);
    const participantIndex = participants.indexOf(p.owner);
    const previousParticipant = participants[participantIndex - 1];
    // find ownable message that is from previous participant
    const contributingMessages = p.ownableMessages.filter(o => o.from === previousParticipant);
    const gaps = contributingMessages.map((m: any) => {
      return widthProvider(m.signature, TextType.MessageContent);
    });
    // return the max gap from gaps
    return Math.max(...gaps, 0);
  }
}
