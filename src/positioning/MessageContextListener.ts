import {IOwnedMessages, OwnableMessageType} from "./OwnableMessage";
import {Message} from "gauge-ts/dist/gen/messages_pb";
import {antlr4} from "@/positioning/ParticipantListener";

const sequenceParserListener = require('@/generated-parser/sequenceParserListener');

export class MessageContextListener extends sequenceParserListener.sequenceParserListener {
  private ownedMessagesList: Array<IOwnedMessages> = [];

  enterMessage = (ctx: any) => this._addOwnedMessage(OwnableMessageType.SyncMessage)(ctx);
  enterAsyncMessage = (ctx: any) => this._addOwnedMessage(OwnableMessageType.AsyncMessage)(ctx);
  enterCreation = (ctx: any) => this._addOwnedMessage(OwnableMessageType.CreationMessage)(ctx);

  private _addOwnedMessage = (type: OwnableMessageType) => (ctx: any) => {
    const from = ctx?.parentCtx?.Origin();
    const owner = ctx?.Owner();
    const signature = ctx?.SignatureText();
    // if there is an entry for owner in ownedMessagesList, add ownableMessage to ownableMessages, otherwise create new entry
    const ownerAndTheirMessages = this.ownedMessagesList.find(p => p.owner === owner);
    if (ownerAndTheirMessages) {
      ownerAndTheirMessages.ownableMessages.push({from: from, signature: signature, type});
    } else {
      this.ownedMessagesList.push({owner: owner, ownableMessages: [{from: from, signature: signature, type}]});
    }

  }

  result(): Array<IOwnedMessages> {
    return this.ownedMessagesList;
  }
}

// Returns all messages grouped by owner participant
export function MessagesGroupedByParticipant(ctx: any) {
  const walker = antlr4.tree.ParseTreeWalker.DEFAULT

  const listener = new MessageContextListener();
  walker.walk(listener, ctx);
  return listener.result();
}
