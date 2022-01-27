export enum OwnableMessageType {
  SyncMessage = 0,
  AsyncMessage = 1,
  CreationMessage = 2,
}

export interface OwnableMessage {
  from: string;
  signature: string;
  type: OwnableMessageType;
}

export interface IOwnedMessages {
  owner: string;
  ownableMessages: Array<OwnableMessage>;
}
