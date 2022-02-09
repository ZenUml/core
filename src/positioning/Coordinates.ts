import {ARROW_HEAD_WIDTH, MARGIN, MIN_PARTICIPANT_WIDTH, MINI_GAP} from "@/positioning/Constants";
import {TextType, WidthFunc} from "@/positioning/Coordinate";
import {OrderedParticipants} from "@/positioning/OrderedParticipants";
import {antlr4, IParticipantModel} from "@/positioning/ParticipantListener";
import {final_pos} from "@/positioning/MatrixBasedAlgorithm";
import {MessageContextListener} from "@/positioning/MessageContextListener";
import {OwnableMessage, OwnableMessageType} from "@/positioning/OwnableMessage";

export class Coordinates {
  private m: Array<Array<number>> = [];
  private readonly widthProvider: WidthFunc;
  private readonly participantModels: IParticipantModel[];
  private readonly ownableMessages: OwnableMessage[];

  constructor(ctx: any, widthProvider: WidthFunc) {
    this.participantModels = OrderedParticipants(ctx);
    this.ownableMessages = this.getAllMessages(ctx);

    this.widthProvider = widthProvider;
    this.walkThrough();
  }

  getPosition(participantName: string|undefined): number {
    const pIndex = this.participantModels.findIndex(p => p.name === participantName);
    if(pIndex === -1) {
      throw Error(`Participant ${participantName} not found`);
    }
    return final_pos(pIndex, this.m) + ARROW_HEAD_WIDTH;
  }

  walkThrough() {
    this.withParticipantGaps(this.participantModels);
    this.withMessageGaps(this.ownableMessages, this.participantModels);
  }

  private withMessageGaps(ownableMessages: OwnableMessage[], participantModels: IParticipantModel[]) {
    ownableMessages.forEach((message) => {
      const indexFrom = participantModels.findIndex(p => p.name === message.from);
      const indexTo = participantModels.findIndex(p => p.name === message.to);
      let leftIndex = Math.min(indexFrom, indexTo);
      let rightIndex = Math.max(indexFrom, indexTo);
      let messageWidth = this.getMessageWidth(message);
      this.m[leftIndex][rightIndex] = Math.max(messageWidth + ARROW_HEAD_WIDTH, this.m[leftIndex][rightIndex]);
    })
  }

  private getMessageWidth(message: OwnableMessage) {
    const halfSelf = Coordinates.half(this.widthProvider, message.to);
    let messageWidth = this.widthProvider(message.signature, TextType.MessageContent);
    // hack for creation message
    if (message.type === OwnableMessageType.CreationMessage) {
      messageWidth += halfSelf;
    }
    return messageWidth;
  }

  private getAllMessages(ctx: any) {
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT
    const messageContextListener = new MessageContextListener();
    walker.walk(messageContextListener, ctx);
    return messageContextListener.flatResult();
  }

  private withParticipantGaps(participantModels: IParticipantModel[]) {
    this.m = participantModels.map((_, i) => {
      return participantModels.map((v, j) => {
        return (j - i === 1) ? this.getParticipantGap(v) : 0;
      });
    });
  }

  private getParticipantGap(p: IParticipantModel) {
    const halfLeft = Coordinates.half(this.widthProvider, p.left);
    const halfSelf = Coordinates.half(this.widthProvider, p.name);
    const leftIsVisible = Coordinates.leftIsVisible(p);
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
