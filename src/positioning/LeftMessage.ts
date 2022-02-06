export enum MessageType {
  SyncMessage = 0,
  AsyncMessage = 1,
  CreationMessage = 2,
}

export enum MessageDirection {
  Forward,
  Backward,
}

export interface LeftMessage {
  leftParticipant: string;
  signature: string;
  type: MessageType;
  direction: MessageDirection
}

export interface IMessageParticipant {
  participant: string;
  leftMessages: Array<LeftMessage>;
}
