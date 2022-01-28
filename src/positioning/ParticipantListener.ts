export const antlr4 = require('antlr4/index');
export let seqDsl = require('../parser/index');
const sequenceParserListener = require('@/generated-parser/sequenceParserListener');

export enum SingleOrGroup {
  SINGLE,
  GROUP
}

export interface IParticipantModel {
  key: string;
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

  enterStarter(ctx: any) {
    this.starter = ctx.getTextWithoutQuotes();
  }

  enterParticipant(ctx: any) {
    const name = ctx?.name()?.getTextWithoutQuotes() || 'Missing `Participant` name';
    const key = ParticipantListener._getKey(ctx);
    const participant = ParticipantListener._singleFactory(key, name);
    this.currentArray.push(participant);
  }

  private static _getKey(ctx: any) {
    return `${ctx.start.start}-${ctx.stop.stop}`;
  }

  enterGroup(ctx: any) {
    const name = ctx?.name()?.getTextWithoutQuotes();
    const key = ParticipantListener._getKey(ctx);
    const group = ParticipantListener._groupFactory(key, name);
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
    // if explicitParticipants includes name, skip
    if(this.explicitParticipants.some(p => p.name === name)) {
      return;
    }
    const key = ParticipantListener._getKey(ctx);

    const participant = ParticipantListener._singleFactory(key, name);
    this.implicitParticipants.push(participant);
  }

  enterTo = this.enterFrom

  result(): IParticipantModel[] {
    ParticipantListener._assignLeft(this.explicitParticipants)
    return [...this.explicitParticipants, ...this.implicitParticipants];
  }

  flatten(): IParticipantModel[] {
    let result2 = [...this._flattenExplicitParticipants(), ...this.implicitParticipants];
    if (!this._isStarterExplicitlyPositioned()) {
      result2.unshift(this._getStarter());
    }
    result2 = this._dedup(result2);
    ParticipantListener._assignLeft(result2);
    return result2;
  }

  private _isStarterExplicitlyPositioned() {
    return this.starter && this._flattenExplicitParticipants().find(p => p.name === this.starter);
  }

  private _getStarter() {
    return ParticipantListener._singleFactory('0-0', this.starter || '_STARTER_');
  }

  private static _assignLeft(array: IParticipantModel[]) {
    array.reduce((pre: IParticipantModel, curr: IParticipantModel) => {
      curr.left = pre.name || ''
      return curr;
    }, ParticipantListener._singleFactory('0-0', ''));
  }

  private _dedup(array: IParticipantModel[]) {
    return array.filter((p, index) => {
      return array.findIndex(p1 => { return p1.name === p.name }) === index;
    })
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

  private static _singleFactory(key: string, name: string): IParticipantModel {
    return {key, name: name, type: SingleOrGroup.SINGLE, children: [], left: ''};
  }

  private static _groupFactory(key: string, name: string): IParticipantModel {
    return {key, name, type: SingleOrGroup.GROUP, children: [], left: ''};
  }
}
