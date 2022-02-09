import {ARROW_HEAD_WIDTH, MARGIN, MIN_PARTICIPANT_WIDTH, MINI_GAP} from "@/positioning/Constants";
import {TextType, WidthFunc} from "@/positioning/Coordinate";
import {OrderedParticipants} from "@/positioning/OrderedParticipants";
import {antlr4, IParticipantModel} from "@/positioning/ParticipantListener";
import '../utils/ArrayUntil';
import {final_pos} from "@/positioning/MatrixBasedAlgorithm";
import {MessageContextListener} from "@/positioning/MessageContextListener";
import {OwnableMessage, OwnableMessageType} from "@/positioning/OwnableMessage";

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

    const walker = antlr4.tree.ParseTreeWalker.DEFAULT
    const messageContextListener = new MessageContextListener();
    walker.walk(messageContextListener, ctx);
    const ownableMessages = messageContextListener.flatResult();
    ownableMessages.forEach((m) => {
      const indexFrom = participantModels.findIndex(p => p.name === m.from);
      const indexTo = participantModels.findIndex(p => p.name === m.to);
      let leftIndex = Math.min(indexFrom, indexTo);
      let rightIndex = Math.max(indexFrom, indexTo);
      const halfSelf = this.half(widthProvider, participantModels[indexTo].name);
      function getWidth(widthProvider: WidthFunc) {
        return (item: OwnableMessage) => {
          let messageWidth = widthProvider(item.signature, TextType.MessageContent);
          // hack for creation message
          if (item.type === OwnableMessageType.CreationMessage) {
            messageWidth += halfSelf;
          }
          Coordinates.m[leftIndex][rightIndex] = Math.max(messageWidth + ARROW_HEAD_WIDTH, Coordinates.m[leftIndex][rightIndex]);
        };
      }
      getWidth(widthProvider)(m);
    })

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

  private static _getParticipantWidth(widthProvider: WidthFunc, participant: string | undefined) {
    return Math.max(widthProvider(participant || '', TextType.ParticipantName), MIN_PARTICIPANT_WIDTH);
  }
}
