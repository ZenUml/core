// a, b, c, MIN_GAP=100, MARGIN
// [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
// delta {a: {g: 110, w: 120} =>
import {ICoordinate2, ICoordinates2, TextType, WidthFunc} from "@/positioning/Coordinate";
import {MessageContextListener} from "@/positioning/MessageContextListener";
import {OrderedParticipants} from "@/positioning/OrderedParticipants";
import {antlr4, IParticipantModel} from "@/positioning/ParticipantListener";
import {OwnableMessage} from "@/positioning/OwnableMessage";

export class PosCal2 {
  private _participants: Array<ICoordinate2>;
  MINI_GAP = 100;
  MARGIN = 20;

  constructor(ctx: any, widthProvider: WidthFunc) {
    this._participants = PosCal2.getMessageWidthAndParticipantWidth(ctx, widthProvider);
  }

  getPosition(participantName: string|undefined): number {
    const index = this._participants.findIndex(p => p.participant === participantName);
    const first = this._participants[0];
    return this._participants.slice(1, index+1)
      .reduce(({sum, pre}, cur) => {
      sum = sum + this.calculateGap(cur, pre);

      return {sum, pre: cur};
    }, {sum: this.half(first), pre: first}).sum;
  }

  calculateGap(participant: ICoordinate2, prev: ICoordinate2): number {
    return Math.max(participant.messageWidth, this.half(prev) + this.half(participant), this.MINI_GAP);
  }

  half(participant: ICoordinate2): number {
    if (participant.participant === '_STARTER_') {
      return 0;
    }
    return participant ? (participant.participantWidth / 2) + (this.MARGIN / 2) : 0;
  }

  private static getAllMessages(ctx: any) {
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT

    const listener = new MessageContextListener();
    walker.walk(listener, ctx);
    return listener.result();
  }

  private static MIN_MESSAGE_WIDTH = 100;
  private static MIN_PARTICIPANT_WIDTH = 100;
  static getMessageWidthAndParticipantWidth(ctx: any, widthProvider: WidthFunc): ICoordinates2 {
    let ownedMessagesList = PosCal2.getAllMessages(ctx);
    const participantModels = OrderedParticipants(ctx);

    return participantModels.map((p: IParticipantModel) => {
      const participant = p.name;
      const leftNeighbour = p.left;
      const myMessage = ownedMessagesList.find(p1 => p1.owner === p.name);
      const contributingMessages = myMessage?.ownableMessages?.filter(o => o.from === leftNeighbour) || [];
      const messageWidth = contributingMessages.reduce((acc, m: OwnableMessage) => {
        return Math.max(acc, widthProvider(m.signature || '', TextType.MessageContent) + 10);
      }, this.MIN_MESSAGE_WIDTH);
      const participantWidth = Math.max(widthProvider(participant || '', TextType.ParticipantName), PosCal2.MIN_PARTICIPANT_WIDTH);
      return {participant, messageWidth, participantWidth} as ICoordinate2;
    });
  }

}
