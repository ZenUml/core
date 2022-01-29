// a, b, c, MIN_GAP=100, MARGIN
// [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
// delta {a: {g: 110, w: 120} =>
import {ICoordinate2, ICoordinates2, TextType, WidthFunc} from "@/positioning/Coordinate";
import {MessagesGroupedByParticipant} from "@/positioning/MessageContextListener";
import {OrderedParticipants} from "@/positioning/OrderedParticipants";
import {IParticipantModel} from "@/positioning/ParticipantListener";
import {IOwnedMessages, OwnableMessage} from "@/positioning/OwnableMessage";

declare global {
  interface Array<T> {
    until(predicate: (value: T, index: number, array: T[]) => boolean): T[];
  }
}

Array.prototype['until'] = function (predicate: (value: any, index: number, array: any[]) => boolean): any[] {
  let result: any[] = [];
  for (let i = 0; i < this.length; i++) {
    result.push(this[i]);
    if (predicate(this[i], i, this)) {
      break;
    }
  }
  return result;
};

export class PosCal2 {
  private readonly _participants: Array<ICoordinate2>;
  private static MINI_GAP = 100;
  private static MARGIN = 20;
  private static ARROW_HEAD_WIDTH = 10;
  private static MIN_PARTICIPANT_WIDTH = 100;

  constructor(ctx: any, widthProvider: WidthFunc) {
    this._participants = PosCal2.getMessageWidthAndParticipantWidth(ctx, widthProvider);
  }

  getPosition(participantName: string|undefined): number {
    return this._participants
      .until(p => p.participant === participantName)
      // .slice(1)
      .map(p => p.gap || 0)
      .reduce((sum, cur) => {
        return sum + cur;
      }, 0);
  }

  static getMessageWidthAndParticipantWidth(ctx: any, widthProvider: WidthFunc): ICoordinates2 {
    let ownedMessagesList = MessagesGroupedByParticipant(ctx);
    const participantModels = OrderedParticipants(ctx);

    function getContributingMessages(p: IParticipantModel) {
      const ownedBy = (p: IParticipantModel) => {
        return (p1: { owner: string }) => p1.owner === p.name
      };

      function toOwnableMessages(p2: IOwnedMessages) {
        return p2.ownableMessages;
      }

      function fromLeftOf(p: IParticipantModel) {
        return (o: { from: string }) => o.from === p.left;
      }

      return ownedMessagesList
        .filter(ownedBy(p))
        .flatMap(toOwnableMessages)
        .filter(fromLeftOf(p));
    }

    return participantModels.map((p: IParticipantModel) => {
      const name = p.name;
      const participantWidth = this._getParticipantWidth(widthProvider, name);
      return {p, participantWidth};
    }).map(({p, participantWidth}) => {
      const contributingMessages = getContributingMessages(p);
      return {p, participantWidth, contributingMessages};
    }).map(({p, participantWidth, contributingMessages}) => {
        const messageWidth = this._getMessageWidth(contributingMessages, widthProvider);
        return {p, participant: p.name, messageWidth, participantWidth: participantWidth};
      })
      .map(({p, participant, messageWidth, participantWidth}) => {

        const halfLeft = this.half(widthProvider, p.left);
        const halfSelf = this.half(widthProvider, p.name);

        const leftIsVisible = p.left && p.left !== '_STARTER_';
        const participantGap = ((leftIsVisible && halfLeft) || 0) + halfSelf;
        let gap =Math.max(messageWidth, participantGap)
        return {participant, gap} as ICoordinate2;
      });
  }

  private static half(widthProvider: WidthFunc, participantName: string | undefined) {
    if (participantName === '_STARTER_') {
      return this.MARGIN/2;
    }
    const halfLeftParticipantWidth = this.halfWithMargin(widthProvider, participantName);
    return Math.max(halfLeftParticipantWidth, this.MINI_GAP / 2);
  }

  private static halfWithMargin(widthProvider: WidthFunc, participant: string | undefined) {
    return this._getParticipantWidth(widthProvider, participant) / 2 + this.MARGIN / 2;
  }

  private static _getMessageWidth(contributingMessages: OwnableMessage[], widthProvider: WidthFunc) {
    function getSignature (m: {signature: string}) { return m.signature || ''}

    function getWidth(widthProvider: WidthFunc) {
      return (s: string) => {
        return widthProvider(s, TextType.MessageContent);
      };
    }

    return Math.max(...contributingMessages
        .map(getSignature)
        .map(getWidth(widthProvider))
        .map(w => w + PosCal2.ARROW_HEAD_WIDTH), 0);
  }

  private static _getParticipantWidth(widthProvider: WidthFunc, participant: string | undefined) {
    return Math.max(widthProvider(participant || '', TextType.ParticipantName), PosCal2.MIN_PARTICIPANT_WIDTH);
  }
}
