import {ARROW_HEAD_WIDTH, MARGIN, MIN_PARTICIPANT_WIDTH, MINI_GAP} from "@/positioning/Constants";
import {TextType, WidthFunc} from "@/positioning/Coordinate";
import {OrderedParticipants} from "@/positioning/OrderedParticipants";
import {antlr4, IParticipantModel} from "@/positioning/ParticipantListener";
import {final_pos} from "@/positioning/MatrixBasedAlgorithm";
import {MessageContextListener} from "@/positioning/MessageContextListener";
import {OwnableMessage, OwnableMessageType} from "@/positioning/OwnableMessage";

export class Coordinates {
  private m: Array<Array<number>> = [];
  private readonly ctx: any;
  private readonly widthProvider: WidthFunc;

  constructor(ctx: any, widthProvider: WidthFunc) {
    this.ctx = ctx;
    this.widthProvider = widthProvider;
    this.walkThrough();
  }

  getPosition(participantName: string|undefined): number {
    const participantModels = OrderedParticipants(this.ctx);
    const pIndex = participantModels.findIndex(p => p.name === participantName);
    if(pIndex === -1) {
      throw Error(`Participant ${participantName} not found`);
    }
    return final_pos(pIndex, this.m) + ARROW_HEAD_WIDTH;
  }

  walkThrough() {

    const participantModels = OrderedParticipants(this.ctx);
    this.withParticipantGaps(participantModels);
    const ownableMessages = this.getAllMessages();
    ownableMessages.forEach((message) => {
      const indexFrom = participantModels.findIndex(p => p.name === message.from);
      const indexTo = participantModels.findIndex(p => p.name === message.to);
      let leftIndex = Math.min(indexFrom, indexTo);
      let rightIndex = Math.max(indexFrom, indexTo);
      const halfSelf = Coordinates.half(this.widthProvider, message.to);
      const that = this;
      let messageWidth = this.widthProvider(message.signature, TextType.MessageContent);
      // hack for creation message
      if (message.type === OwnableMessageType.CreationMessage) {
        messageWidth += halfSelf;
      }
      that.m[leftIndex][rightIndex] = Math.max(messageWidth + ARROW_HEAD_WIDTH, that.m[leftIndex][rightIndex]);
    })

  }

  private getAllMessages() {
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT
    const messageContextListener = new MessageContextListener();
    walker.walk(messageContextListener, this.ctx);
    const ownableMessages = messageContextListener.flatResult();
    return ownableMessages;
  }

  private withParticipantGaps(participantModels: IParticipantModel[]) {
    for (let i = 0; i < participantModels.length; i++) {
      this.m[i] = [];
      for (let j = 0; j < participantModels.length; j++) {
        const p = participantModels[j];
        const participantGap = Coordinates.getParticipantGap(this.widthProvider, p);
        this.m[i][j] = (j - i === 1) ? participantGap : 0;
      }
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

  private static _getParticipantWidth(widthProvider: WidthFunc, participant: string | undefined) {
    return Math.max(widthProvider(participant || '', TextType.ParticipantName), MIN_PARTICIPANT_WIDTH);
  }
}
