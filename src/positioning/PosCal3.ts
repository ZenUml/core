import {OrderedParticipants} from "@/positioning/OrderedParticipants";
import {MessageContextListener} from "./MessageContextListener";
import {ICoordinate2, ICoordinates2, TextType, WidthFunc} from "./Coordinate";
import {IOwnedMessages, OwnableMessage} from "@/positioning/OwnableMessage";
import {IParticipantModel} from "@/positioning/ParticipantListener";

const antlr4 = require('antlr4/index');

export class PosCal3 {

  // [participant: [from, signature]]
  static getOwnedMessagesList(ctx: any): Array<IOwnedMessages> {
    const ownedMessagesList = PosCal3.getAllMessages(ctx);
    const participants = PosCal3.getAllParticipants(ctx);
    return participants.map((participant: string) => {
      return PosCal3.getOwnedMessages(ownedMessagesList, participant);
    });
  }

  private static getOwnedMessages(ownedMessagesList: Array<IOwnedMessages>, participant: string) {
    const ownedMessages = ownedMessagesList.find(o => o.owner === participant);
    return ownedMessages || {owner: participant, ownableMessages: []};
  }

  private static getAllParticipants(ctx: any) {
    return OrderedParticipants(ctx).map((participant: any) => {
      return participant.name;
    });
  }

  private static getAllMessages(ctx: any) {
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT

    const listener = new MessageContextListener();
    walker.walk(listener, ctx);
    return listener.result();
  }

  private static MIN_MESSAGE_WIDTH = 100;
  static getMessageWidthAndParticipantWidth(ctx: any, widthProvider: WidthFunc): ICoordinates2 {
    let ownedMessagesList = PosCal3.getAllMessages(ctx);
    const participantModels = OrderedParticipants(ctx);

    return participantModels.map((p: IParticipantModel) => {
      const participant = p.name;
      const leftNeighbour = p.left;
      const myMessage = ownedMessagesList.find(p1 => p1.owner === p.name);
      const contributingMessages = myMessage?.ownableMessages?.filter(o => o.from === leftNeighbour) || [];
      const messageWidth = contributingMessages.reduce((acc, m: OwnableMessage) => {
        return Math.max(acc, widthProvider(m.signature || '', TextType.MessageContent) + 10);
      }, this.MIN_MESSAGE_WIDTH);
      const participantWidth = widthProvider(participant || '', TextType.ParticipantName);
      return {participant, messageWidth, participantWidth} as ICoordinate2;
    });
  }
}
