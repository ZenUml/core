import {OrderedParticipants} from "@/positioning/OrderedParticipants";
import {MessageContextListener} from "./MessageContextListener";
import {ICoordinate2, ICoordinates2, TextType, WidthFunc} from "./Coordinate";
import {IOwnedMessages} from "@/positioning/OwnableMessage";
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

  private static getOwnedMessages(ownedMessagesList: Array<IOwnedMessages>, participant: string) {
    const ownedMessages = ownedMessagesList.find(o => o.owner === participant);
    return ownedMessages || {owner: participant, ownableMessages: []};
  }

  private static MIN_MESSAGE_WIDTH = 100;
  static getMessageWidthAndParticipantWidth(ctx: any, widthProvider: WidthFunc): ICoordinates2 {
    let ownedMessagesList = PosCal3.getAllMessages(ctx);
    const participantModels = OrderedParticipants(ctx);
    ownedMessagesList = participantModels.map((participant: IParticipantModel) => {
      return PosCal3.getOwnedMessages(ownedMessagesList, participant.name || '');
    });

    return participantModels.map((p: IParticipantModel) => {
      const participant = p.name;
      const leftNeighbour = p.left;
      const myMessage = ownedMessagesList.find(p1 => p1.owner === p.name);
      const messageWidth = PosCal3.getMessageWidth(widthProvider, myMessage, leftNeighbour);
      const participantWidth = widthProvider(participant || '', TextType.ParticipantName);
      return {participant, messageWidth, participantWidth} as ICoordinate2;
    });
  }

  private static getMessageWidth(widthProvider: WidthFunc, p: IOwnedMessages | undefined, leftNeighbour: string | undefined) {
    const contributingMessages = p?.ownableMessages.filter(o => o.from === leftNeighbour);
    const messageWidth = contributingMessages?.map((m: any) => {
      // 10px for the arrow head
      return widthProvider(m.signature, TextType.MessageContent) + 10;
    });
    // return the max width for messages
    return Math.max(...messageWidth || [], this.MIN_MESSAGE_WIDTH);
  }

  // An owned message always has 'from';
  // root messages has 'from' as _STARTER_;
  // 'from' can be itself; special case: @Starter(A) A.method(), from === A
}
