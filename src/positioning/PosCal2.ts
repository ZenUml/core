// a, b, c, MIN_GAP=100, MARGIN
// [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
// delta {a: {g: 110, w: 120} =>
import {ICoordinate2, ICoordinates2, TextType, WidthFunc} from "@/positioning/Coordinate";
import {MessagesGroupedByParticipant} from "@/positioning/MessageContextListener";
import {OrderedParticipants} from "@/positioning/OrderedParticipants";
import {IParticipantModel} from "@/positioning/ParticipantListener";
import {IOwnedMessages, OwnableMessage} from "@/positioning/OwnableMessage";

export class PosCal2 {
  private _participants: Array<ICoordinate2>;
  private static MINI_GAP = 100;
  private static MARGIN = 20;
  private static ARROW_HEAD_WIDTH = 10;

  constructor(ctx: any, widthProvider: WidthFunc) {
    this._participants = PosCal2.getMessageWidthAndParticipantWidth(ctx, widthProvider);
  }

  getPosition(participantName: string|undefined): number {
    const index = this._participants.findIndex(p => p.participant === participantName);
    const first = this._participants[0];
    return this._participants.slice(1, index+1)
      .reduce(({sum, pre}, cur) => {
      sum = sum + PosCal2.calculateGap(cur, pre);

      return {sum, pre: cur};
    }, {sum: PosCal2.half(first), pre: first}).sum;
  }

  static calculateGap(participant: ICoordinate2, prev: ICoordinate2): number {
    return Math.max(participant.messageWidth, this.half(prev) + this.half(participant), this.MINI_GAP);
  }

  static half(participant: ICoordinate2): number {
    if (participant.participant === '_STARTER_') {
      return 0;
    }
    return participant ? (participant.participantWidth / 2) + (this.MARGIN / 2) : 0;
  }

  private static MIN_MESSAGE_WIDTH = 100;
  private static MIN_PARTICIPANT_WIDTH = 100;
  static getMessageWidthAndParticipantWidth(ctx: any, widthProvider: WidthFunc): ICoordinates2 {
    let ownedMessagesList = MessagesGroupedByParticipant(ctx);
    const participantModels = OrderedParticipants(ctx);

    return participantModels.map((p: IParticipantModel) => {
      const name = p.name;
      const participantWidth = this._getParticipantWidth(widthProvider, name);
      return {p, participantWidth};
    }).map(({p, participantWidth}) => {
      const messageWidth = this._getMessageWidth(p, ownedMessagesList, widthProvider);
      return {participant: p.name, messageWidth, participantWidth: participantWidth} as ICoordinate2;
    });
  }

  private static _getMessageWidth(p: IParticipantModel, ownedMessagesList: Array<IOwnedMessages>, widthProvider: WidthFunc) {
    const ownedBy = (p: IParticipantModel) => {
      return (p1: {owner: string}) => p1.owner === p.name
    };

    function toOwnableMessages (p2: IOwnedMessages) { return p2.ownableMessages; }

    function fromLeftOf(p: IParticipantModel) {
      return (o: {from: string}) => o.from === p.left;
    }

    function getSignature (m: {signature: string}) { return m.signature || ''}

    function getWidth(widthProvider: WidthFunc) {
      return (s: string) => {
        return widthProvider(s, TextType.MessageContent);
      };
    }

    return Math.max(...ownedMessagesList
        .filter(ownedBy(p))
        .flatMap(toOwnableMessages)
        .filter(fromLeftOf(p))
        .map(getSignature)
        .map(getWidth(widthProvider))
        .map(w => w + PosCal2.ARROW_HEAD_WIDTH)
      , PosCal2.MIN_MESSAGE_WIDTH);
  }

  private static _getParticipantWidth(widthProvider: WidthFunc, participant: string | undefined) {
    return Math.max(widthProvider(participant || '', TextType.ParticipantName), PosCal2.MIN_PARTICIPANT_WIDTH);
  }
}
