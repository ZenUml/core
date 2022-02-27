export const antlr4 = require('antlr4/index');
export let seqDsl = require('../parser/index');
const sequenceParserListener = require('@/generated-parser/sequenceParserListener');
const sequenceParser = require('../generated-parser/sequenceParser');
const seqParser = sequenceParser.sequenceParser;

export interface IParticipantModel {
  name?: string;
  left: string;
}

export class ParticipantListener extends sequenceParserListener.sequenceParserListener {
  private explicitParticipants: IParticipantModel[] = [];
  private starter: string = '';
  private implicitParticipants: IParticipantModel[] = [];
  private isBlind: boolean = false;

  enterParameters() {
    this.isBlind = true;
  }

  exitParameters() {
    this.isBlind = false;
  }

  enterStarter(ctx: any) {
    this.starter = ctx.getTextWithoutQuotes();
  }

  enterParticipant(ctx: any) {
    const name = ctx?.name()?.getTextWithoutQuotes() || 'Missing `Participant` name';
    const participant = {name, left: ''};
    this.explicitParticipants.push(participant);
  }

  // 'A' is treated as a Starter in 'A->B:m'
  enterFrom(ctx: any) {
    if (this.isBlind) {
      return;
    }

    const name = ctx?.getTextWithoutQuotes()
    if (ctx.ClosestAncestorBlock().parentCtx instanceof seqParser.ProgContext) {
      if (ctx.ClosestAncestorStat() === ctx.ClosestAncestorBlock().children[0]) {
        this.starter = name;
        return;
      }
    }
    this.enterTo(ctx);
  }

  enterTo(ctx: any) {
    if (this.isBlind) {
      return;
    }
    const name = ctx?.getTextWithoutQuotes()
    if(name === this.starter) {
      return;
    }
    // if explicitParticipants includes name, skip
    if(this.explicitParticipants.some(p => p.name === name)) {
      return;
    }
    const participant = {name, left: ''};
    this.implicitParticipants.push(participant);
  }

  enterCreation(ctx: any) {
    if (this.isBlind) {
      return;
    }
    const name = ctx?.Owner();
    if(name === this.starter) {
      return;
    }
    // if explicitParticipants includes name, skip
    if(this.explicitParticipants.some(p => p.name === name)) {
      return;
    }
    const participant = {name, left: ''};
    this.implicitParticipants.push(participant);
  }

  result(): IParticipantModel[] {
    let result = [...this.explicitParticipants, ...this.implicitParticipants];
    if (!this._isStarterExplicitlyPositioned()) {
      result.unshift(this._getStarter());
    }
    result = this._dedup(result);
    ParticipantListener._assignLeft(result);
    return result;
  }

  private _isStarterExplicitlyPositioned() {
    return this.starter && this.explicitParticipants.find(p => p.name === this.starter);
  }

  private _getStarter() {
    return {name: this.starter || '_STARTER_', left: ''};
  }

  private _dedup(array: IParticipantModel[]) {
    return array.filter((p, index) => {
      return array.findIndex(p1 => { return p1.name === p.name }) === index;
    })
  }

  private static _assignLeft(array: IParticipantModel[]) {
    array.reduce((pre: IParticipantModel, curr: IParticipantModel) => {
      curr.left = pre.name || ''
      return curr;
    }, {name: '', left: ''});
  }
}
