export interface OwnableMessage {
  from: string;
  signature: string;
}

export interface IOwnedMessages {
  owner: string;
  ownableMessages: Array<OwnableMessage>;
}
