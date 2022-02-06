export enum TextType {
  MessageContent,
  ParticipantName,
}

export interface IParticipantGap {
  participant: string;
  gap: number;
}

export interface IParticipantGaps extends Array<IParticipantGap>{}

export interface WidthFunc {
  (text: string, type: TextType): number;
}

