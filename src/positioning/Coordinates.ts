
import {MARGIN, MINI_GAP, MIN_PARTICIPANT_WIDTH, ARROW_HEAD_WIDTH} from "@/positioning/Constants";
import {IParticipantGap, IParticipantGaps, TextType, WidthFunc} from "@/positioning/Coordinate";
import {MessagesGroupedByParticipant} from "@/positioning/MessageContextListener";
import {LeftMessagesGroupedByParticipant} from "@/positioning/LeftMessagesBuilder";
import {OrderedParticipants} from "@/positioning/OrderedParticipants";
import {IParticipantModel} from "@/positioning/ParticipantListener";
import {LeftMessage, MessageType} from "@/positioning/LeftMessage";
import '../utils/ArrayUntil';

export class Coordinates {
  private readonly _participants: Array<IParticipantGap>;
  private static m: Array<Array<number>> = [];
  private static ctx: any;
  private static widthProvider: WidthFunc;

  static p = (i: number, j: number) => {
    return Coordinates.m[i][j];
  }
  static r = (i: number, j: number): number => {
    if (j === i) {
      return 0;
    } else if(j - i === 1) {
      let temp = [];
      for(let k = 0; k <= i; k++) {
        temp.push(Coordinates.p(k, j) - Coordinates.r(k, i));
      }
      return Math.max(...temp)
    } else {
      let sum = 0;
      for(let l = i; l < j; l++) {
        sum += Coordinates.r(l, l + 1);
      }
      return sum;
    }
  }

  constructor(ctx: any, widthProvider: WidthFunc) {
    this._participants = Coordinates.getParticipantGaps(ctx, widthProvider);
    Coordinates.ctx = ctx;
    Coordinates.widthProvider = widthProvider;
  }

  getPosition(participantName: string|undefined): number {
    const pIndex = this._participants.findIndex(p => p.participant === participantName);
    if(pIndex === -1) {
      throw Error(`Participant ${participantName} not found`);
    }
    return Coordinates.r(0, pIndex) + ARROW_HEAD_WIDTH;
  }

  static getParticipantGaps(ctx: any, widthProvider: WidthFunc): IParticipantGaps {


    const participantModels = OrderedParticipants(ctx);
    for (let i = 0; i < participantModels.length; i++) {
      Coordinates.m[i] = [];
      for (let j = 0; j < participantModels.length; j++) {
        const p = participantModels[j];
        const halfLeft = this.half(widthProvider, p.left);
        const halfSelf = this.half(widthProvider, p.name);
        const leftIsVisible = this.leftIsVisible(p);
        const participantGap = ((leftIsVisible && halfLeft) || 0) + halfSelf;
        if (j - i == 1) {
          Coordinates.m[i][j] = participantGap;
        } else {
          Coordinates.m[i][j] = 0;
        }
      }
    }
    const participantIndex = {} as any;
    participantModels.forEach((v: any, i:number) => participantIndex[v.name] = i)

    const participants = LeftMessagesGroupedByParticipant(ctx, (p1, p2) => participantIndex[p1] < participantIndex[p2]);

    function getContributingMessages(p: IParticipantModel) {
      return participants
        .filter(v => v.participant === p.name)
        .flatMap(v => v.leftMessages);
    }

    for(let i=0; i < participantModels.length; i++) {
      const p = participantModels[i];
      const halfLeft = this.half(widthProvider, p.left);
      const halfSelf = this.half(widthProvider, p.name);
      const contributingMessages = getContributingMessages(p);
      const leftIsVisible = this.leftIsVisible(p);
      const participantGap = ((leftIsVisible && halfLeft) || 0) + halfSelf;
      this._getMessageWidth(contributingMessages, widthProvider, halfSelf, participantModels, i, participantGap);
    }

    return participantModels.map(p => ({participant: p.name, gap: (p as any).gap} as IParticipantGap));
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

  private static _getMessageWidth(contributingMessages: LeftMessage[], widthProvider: WidthFunc, halfSelf: number, participantModels: Array<IParticipantModel>, i: number, participantGap: number) {
    function getSignature (m: {signature: string, type: MessageType, leftParticipant: string}) { return {sig: m.signature || '', type: m.type, leftParticipant: m.leftParticipant}; }

    function getWidth(widthProvider: WidthFunc) {
      return (item: any) => {
        let messageWidth = widthProvider(item.sig, TextType.MessageContent);
        // hack for creation message
        if (item.type === MessageType.CreationMessage) {
          messageWidth += halfSelf;
        }
        const leftIndex = participantModels.findIndex(v => v.name === item.leftParticipant);
        Coordinates.m[leftIndex][i] = Math.max(messageWidth + ARROW_HEAD_WIDTH, participantGap);
      };
    }

    [...contributingMessages].map(getSignature).forEach(getWidth(widthProvider))
  }

  private static _getParticipantWidth(widthProvider: WidthFunc, participant: string | undefined) {
    return Math.max(widthProvider(participant || '', TextType.ParticipantName), MIN_PARTICIPANT_WIDTH);
  }
}
