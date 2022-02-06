// a, b, c, MIN_GAP=100, MARGIN
// [{participant: a, gap:100, width: 250 }, {p: b, g:100, w: 120 }, {p: c, g: 150, w: 200}]
// delta {a: {g: 110, w: 120} =>
import {ARROW_HEAD_WIDTH, MARGIN, MINI_GAP, MIN_PARTICIPANT_WIDTH} from "@/positioning/Constants";
import {ICoordinate2, ICoordinates2, TextType, WidthFunc} from "@/positioning/Coordinate";
import {LeftMessagesGroupedByParticipant} from "@/positioning/LeftMessagesBuilder";
import {OrderedParticipants} from "@/positioning/OrderedParticipants";
import {IParticipantModel} from "@/positioning/ParticipantListener";
import {LeftMessage, MessageType} from "@/positioning/LeftMessage";

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

  constructor(ctx: any, widthProvider: WidthFunc) {
    this._participants = PosCal2.getMessageWidthAndParticipantWidth(ctx, widthProvider);
  }

  getPosition(participantName: string|undefined): number {
    if(this._participants.findIndex(p => p.participant === participantName) === -1) {
      throw Error(`Participant ${participantName} not found`);
    }
    return this._participants
      .until(p => p.participant === participantName)
      // .slice(1)
      .map(p => p.gap || 0)
      .reduce((sum, cur) => {
        return sum + cur;
      }, 0);
  }

  static getMessageWidthAndParticipantWidth(ctx: any, widthProvider: WidthFunc): ICoordinates2 {
    const participantModels = OrderedParticipants(ctx);
    const participantIndex = {} as any;
    participantModels.forEach((v: any, i:number) => participantIndex[v.name] = i)
    
    const participants = LeftMessagesGroupedByParticipant(ctx, (p1, p2) => participantIndex[p1] < participantIndex[p2]);

    function getContributingMessages(p: IParticipantModel) {
      return participants
        .filter(v => v.participant === p.name)
        .flatMap(v => v.leftMessages);
    }

    return participantModels.map((p: IParticipantModel) => {
      const halfLeft = this.half(widthProvider, p.left);
      const halfSelf = this.half(widthProvider, p.name);
      return {p, halfLeft, halfSelf};
    }).map(({p, halfLeft, halfSelf}) => {
      const contributingMessages = getContributingMessages(p);
      return {p, contributingMessages, halfLeft, halfSelf};
    }).map(({p, contributingMessages, halfLeft, halfSelf}) => {
      const messageWidth = this._getMessageWidth(contributingMessages, widthProvider, halfSelf);
      return {p, messageWidth, halfLeft, halfSelf};
    }).map(({p, messageWidth, halfLeft, halfSelf}) => {
        const leftIsVisible = this.leftIsVisible(p);
        const participantGap = ((leftIsVisible && halfLeft) || 0) + halfSelf;
        let gap = Math.max(messageWidth, participantGap)
        return {participant: p.name, gap} as ICoordinate2;
      });
  }

  private static leftIsVisible(p: IParticipantModel) {
    return p.left && p.left !== '_STARTER_';
  }

  private static half(widthProvider: WidthFunc, participantName: string | undefined) {
    if (participantName === '_STARTER_') {
      return MARGIN/2;
    }
    const halfLeftParticipantWidth = this.halfWithMargin(widthProvider, participantName);
    return Math.max(halfLeftParticipantWidth, MINI_GAP / 2);
  }

  private static halfWithMargin(widthProvider: WidthFunc, participant: string | undefined) {
    return this._getParticipantWidth(widthProvider, participant) / 2 + MARGIN / 2;
  }

  private static _getMessageWidth(contributingMessages: LeftMessage[], widthProvider: WidthFunc, halfSelf: number) {
    function getSignature (m: {signature: string, type: MessageType}) { return {sig: m.signature || '', type: m.type}; }

    function getWidth(widthProvider: WidthFunc) {
      return (item: any) => {
        let messageWidth = widthProvider(item.sig, TextType.MessageContent);
        // hack for creation message
        if (item.type === MessageType.CreationMessage) {
          messageWidth += halfSelf;
        }
        return messageWidth;
      };
    }

    return Math.max(...contributingMessages
        .map(getSignature)
        .map(getWidth(widthProvider))
        .map(w => w + ARROW_HEAD_WIDTH), 0);
  }

  private static _getParticipantWidth(widthProvider: WidthFunc, participant: string | undefined) {
    return Math.max(widthProvider(participant || '', TextType.ParticipantName), MIN_PARTICIPANT_WIDTH);
  }
}
