import {OwnableMessage} from "@/positioning/OwnableMessage";

export enum TextType {
  MessageContent,
  ParticipantName,
}

export interface Coordinate {
  center: number;
  top: number;
}

export interface ICoordinate2 {
  participant: string;
  messageWidth: number;
  width: number;
}

interface ICoordinate {
  participant: string;
  position: Coordinate;
  meta: Array<OwnableMessage>
}

export interface ICoordinates extends Array<ICoordinate>{}
export interface ICoordinates2 extends Array<ICoordinate2>{}


export interface WidthFunc {
  (text: string, type: TextType): number;
}

