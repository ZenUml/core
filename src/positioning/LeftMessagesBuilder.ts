import {IMessageParticipant, MessageType, MessageDirection} from "./LeftMessage";
import {antlr4} from "@/positioning/ParticipantListener";

const sequenceParserListener = require('@/generated-parser/sequenceParserListener');

export class LeftMessagesBuilder extends sequenceParserListener.sequenceParserListener {
  private isLeft: (p1: any, p2: any) => boolean;
  private participants: Array<IMessageParticipant> = [];

  constructor(_isLeftProvider: (p1: any, p2: any) => boolean) {
    super();
    this.isLeft = _isLeftProvider;
  }

  enterMessage = (ctx: any) => this._handleMessage(MessageType.SyncMessage)(ctx);
  enterAsyncMessage = (ctx: any) => this._handleMessage(MessageType.AsyncMessage)(ctx);
  enterCreation = (ctx: any) => this._handleMessage(MessageType.CreationMessage)(ctx);

  private _handleMessage = (type: MessageType) => (ctx: any) => {
    const from = this._getFrom(ctx);
    const owner = ctx?.Owner();

    const signature = ctx?.SignatureText();

    if(this.isLeft(from, owner)) {
      this._getParticipant(owner).leftMessages.push({leftParticipant: from, direction: MessageDirection.Forward, signature, type});
    } else {
      this._getParticipant(from).leftMessages.push({leftParticipant: owner, direction: MessageDirection.Backward, signature, type});
    }
  }

  private _getFrom(ctx: any) {
    if(ctx.from && ctx.from()) {
      return ctx.from().getText();
    }
    return ctx?.parentCtx?.Origin();
  }

  private _getParticipant(name: string): IMessageParticipant {
    let participant = this.participants.find(p => p.participant === name);
    if(!participant) {
      participant = {participant: name, leftMessages: []};
      this.participants.push(participant);
    }
    return participant;
  }

  result(): Array<IMessageParticipant> {
    return this.participants;
  }
}

export function LeftMessagesGroupedByParticipant(ctx: any, isLeftProvider: (p1: any, p2: any) => boolean) {
  const walker = antlr4.tree.ParseTreeWalker.DEFAULT

  const listener = new LeftMessagesBuilder(isLeftProvider);
  walker.walk(listener, ctx);
  return listener.result();
}
