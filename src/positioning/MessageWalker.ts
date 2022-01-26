import {IOwnedMessages} from "./OwnableMessage";

const sequenceParserListener = require('@/generated-parser/sequenceParserListener');

export class MessageWalker extends sequenceParserListener.sequenceParserListener {
  private ownedMessagesList: Array<IOwnedMessages> = [];

  enterMessage(ctx: any): void {
    const from = ctx?.parentCtx?.Origin();
    const owner = ctx?.Owner();
    const signature = ctx?.SignatureText();
    // if there is an entry for owner in ownedMessagesList, add ownableMessage to ownableMessages, otherwise create new entry
    const ownerAndTheirMessages = this.ownedMessagesList.find(p => p.owner === owner);
    if (ownerAndTheirMessages) {
      ownerAndTheirMessages.ownableMessages.push({from: from, signature: signature});
    } else {
      this.ownedMessagesList.push({owner: owner, ownableMessages: [{from: from, signature: signature}]});
    }
  }

  result(): Array<IOwnedMessages> {
    return this.ownedMessagesList;
  }
}
