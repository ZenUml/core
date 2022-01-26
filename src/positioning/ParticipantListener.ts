import {result} from "lodash";

export const antlr4 = require('antlr4/index');
export let seqDsl = require('../parser/index');
const sequenceParserListener = require('@/generated-parser/sequenceParserListener');

export enum SingleOrGroup {
  SINGLE,
  GROUP
}

export interface IParticipantModel {
  type: SingleOrGroup;
  name?: string;
  children: IParticipantModel[];
  left: string;
}

export class ParticipantListener extends sequenceParserListener.sequenceParserListener {
  private explicitParticipants: IParticipantModel[] = [];
  private starter: string = '';
  private implicitParticipants: IParticipantModel[] = [];
  private currentArray: IParticipantModel[] = this.explicitParticipants;
  private inGroup: boolean = false;
  private left: string = '';
  // constructor
  constructor() {
    super();
  }

  enterStarter(ctx: any) {
    this.starter = ctx.getTextWithoutQuotes();
  }

  enterParticipant(ctx: any) {
    const name = ctx?.name()?.getTextWithoutQuotes() || 'Missing `Participant` name';
    const participant = ParticipantListener._singleFactory(name, this.left);
    this.currentArray.push(participant);
    this.left = name;
  }

  enterGroup(ctx: any) {
    const name = ctx?.name()?.getTextWithoutQuotes();
    const group = ParticipantListener._groupFactory(name, this.left);
    this.explicitParticipants.push(group);
    this.currentArray = group.children;
  }

  exitGroup(ctx: any) {
    this.currentArray = this.explicitParticipants;
  }

  enterFrom(ctx: any) {
    const name = ctx?.getTextWithoutQuotes()
    if(name === this.starter) {
      return;
    }
    const participant = ParticipantListener._singleFactory(name, this.left);
    this.implicitParticipants.push(participant);
    this.left = name;
  }

  enterTo = this.enterFrom

  result(): IParticipantModel[] {
    return this.explicitParticipants;
  }

  flatten(): IParticipantModel[] {
    const flattenedParticipants = this._flattenExplicitParticipants();
    const result = this._handleStarter(flattenedParticipants);
    result.push(...this.implicitParticipants);
    return result;
  }

  private _handleStarter(flattenedParticipants: IParticipantModel[]) {
    let result = flattenedParticipants;
    if (!this._starterIsExplicitlyPositioned(flattenedParticipants)) {
      this.starter = this.starter || '_STARTER_';
      flattenedParticipants[0].left = this.starter
      result = [ParticipantListener._singleFactory(this.starter, ''), ...flattenedParticipants]
    }
    return result;
  }

  private _starterIsExplicitlyPositioned(flattenedParticipants: IParticipantModel[]) {
    return this.starter && flattenedParticipants.find(p => p.name === this.starter);
  }

  private _flattenExplicitParticipants() {
    // flatten the participants array
    const flattenedParticipants: IParticipantModel[] = [];
    this.explicitParticipants.forEach(participant => {
      let items = participant.type === SingleOrGroup.SINGLE ? [participant] : participant.children;
      flattenedParticipants.push(...items);
    });
    return flattenedParticipants;
  }

  private static _singleFactory(name: string, left: string) {
    return {name: name, type: SingleOrGroup.SINGLE, left, children: []};
  }

  private static _groupFactory(name: string, left: string) {
    return {type: SingleOrGroup.GROUP, name, children: [], left};
  }
}
