import {ARROW_HEAD_WIDTH, MARGIN, MIN_PARTICIPANT_WIDTH, MINI_GAP} from "@/positioning/Constants";
import {TextType, WidthFunc} from "@/positioning/Coordinate";
import {LeftMessagesGroupedByParticipant} from "@/positioning/LeftMessagesBuilder";
import {OrderedParticipants} from "@/positioning/OrderedParticipants";
import {IParticipantModel} from "@/positioning/ParticipantListener";
import {LeftMessage, MessageType} from "@/positioning/LeftMessage";
import '../utils/ArrayUntil';
import {final_pos} from "@/positioning/MatrixBasedAlgorithm";

export class Coordinates {
  private static m: Array<Array<number>> = [];
  private static ctx: any;
  private static widthProvider: WidthFunc;

  constructor(ctx: any, widthProvider: WidthFunc) {
    Coordinates.walkThrough(ctx, widthProvider);
    Coordinates.ctx = ctx;
    Coordinates.widthProvider = widthProvider;
  }

  getPosition(participantName: string|undefined): number {
    const participantModels = OrderedParticipants(Coordinates.ctx);
    const pIndex = participantModels.findIndex(p => p.name === participantName);
    if(pIndex === -1) {
      throw Error(`Participant ${participantName} not found`);
    }
    return final_pos(pIndex, Coordinates.m) + ARROW_HEAD_WIDTH;
  }

  static walkThrough(ctx: any, widthProvider: WidthFunc) {

    const participantModels = OrderedParticipants(ctx);
    for (let i = 0; i < participantModels.length; i++) {
      Coordinates.m[i] = [];
      for (let j = 0; j < participantModels.length; j++) {
        const p = participantModels[j];
        const participantGap = this.getParticipantGap(widthProvider, p);
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
      const contributingMessages = getContributingMessages(p);
      this._getMessageWidth(contributingMessages, widthProvider, participantModels, i);
    }
  }

  private static getParticipantGap(widthProvider: WidthFunc, p: IParticipantModel) {
    const halfLeft = this.half(widthProvider, p.left);
    const halfSelf = this.half(widthProvider, p.name);
    const leftIsVisible = this.leftIsVisible(p);
    return ((leftIsVisible && halfLeft) || 0) + halfSelf;
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

  private static _getMessageWidth(contributingMessages: LeftMessage[],
                                  widthProvider: WidthFunc,
                                  participantModels: Array<IParticipantModel>, i: number) {
    const halfSelf = this.half(widthProvider, participantModels[i].name);
    function getSignature (m: {signature: string, type: MessageType, leftParticipant: string}) { return {sig: m.signature || '', type: m.type, leftParticipant: m.leftParticipant}; }

    function getWidth(widthProvider: WidthFunc) {
      return (item: any) => {
        let messageWidth = widthProvider(item.sig, TextType.MessageContent);
        // hack for creation message
        if (item.type === MessageType.CreationMessage) {
          messageWidth += halfSelf;
        }
        const leftIndex = participantModels.findIndex(v => v.name === item.leftParticipant);
        Coordinates.m[leftIndex][i] = Math.max(messageWidth + ARROW_HEAD_WIDTH, Coordinates.m[leftIndex][i]);
      };
    }

    contributingMessages.map(getSignature).forEach(getWidth(widthProvider))
  }

  private static _getParticipantWidth(widthProvider: WidthFunc, participant: string | undefined) {
    return Math.max(widthProvider(participant || '', TextType.ParticipantName), MIN_PARTICIPANT_WIDTH);
  }
}
