export const antlr4 = require('antlr4/index');
export let seqDsl = require('../parser/index');
const sequenceParserListener = require('@/generated-parser/sequenceParserListener');

export enum SingleOrGroup {
  SINGLE,
  GROUP
}

interface IParticipantModel {
  type: SingleOrGroup;
  name?: string;
  children?: IParticipantModel[];
  left: string;
}

export class ParticipantListener extends sequenceParserListener.sequenceParserListener {
  private participants: IParticipantModel[] = [];
  private inGroup: boolean = false;
  private left: string = '';

  enterParticipant(ctx: any) {
    const name = ctx?.name()?.getTextWithoutQuotes() || 'Missing `Participant` name';
    // if inGroup, push it to the children of the current group; otherwise, push it to the root
    const participant = {
      type: SingleOrGroup.SINGLE,
      name,
      left: this.left
    };
    if (this.inGroup) {
      this.participants[this.participants.length - 1]?.children?.push(participant);
    } else {
      this.participants.push(participant);
    }
    this.left = name;
  }

  enterGroup(ctx: any) {
    this.inGroup = true;
    const name = ctx?.name()?.getTextWithoutQuotes();
    this.participants.push({type: SingleOrGroup.GROUP, name, children: [], left: this.left});
  }

  exitGroup(ctx: any) {
    this.inGroup = false;
  }

  result(): IParticipantModel[] {
    return this.participants;
  }
}
