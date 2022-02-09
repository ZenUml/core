import {OwnableMessage, OwnableMessageType} from "./OwnableMessage";
import {antlr4} from "@/positioning/ParticipantListener";

const sequenceParserListener = require('@/generated-parser/sequenceParserListener');

export class MessageContextListener extends sequenceParserListener.sequenceParserListener {
  private ownableMessages: Array<OwnableMessage> = [];

  enterMessage = (ctx: any) => this._addOwnedMessage(OwnableMessageType.SyncMessage)(ctx);
  enterAsyncMessage = (ctx: any) => this._addOwnedMessage(OwnableMessageType.AsyncMessage)(ctx);
  enterCreation = (ctx: any) => this._addOwnedMessage(OwnableMessageType.CreationMessage)(ctx);

  private _addOwnedMessage = (type: OwnableMessageType) => (ctx: any) => {
    let from;
    if(ctx.from && ctx.from()) {
      from = ctx.from().getText();
    } else {
      from = ctx?.parentCtx?.Origin();
    }
    const owner = ctx?.Owner();
    const signature = ctx?.SignatureText();
    this.ownableMessages.push({from: from, signature: signature, type, to: owner});
  }

  result() {
    return this.ownableMessages;
  }
}

// Returns all messages grouped by owner participant
export function AllMessages(ctx: any) {
  const walker = antlr4.tree.ParseTreeWalker.DEFAULT

  const listener = new MessageContextListener();
  walker.walk(listener, ctx);
  return listener.result();
}
