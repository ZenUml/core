import {ParticipantType} from "../../../src/parser/Participants";

const antlr4 = require('antlr4/index');
let seqDsl = require('../../../src/parser/index');
const sequenceParserListener = require('@/generated-parser/sequenceParserListener');

enum SingleOrGroup {
  SINGLE,
  GROUP
}

interface IParticipantModel {
  type: SingleOrGroup;
  name?: string;
  children?: IParticipantModel[];
}

class ParticipantListener extends sequenceParserListener.sequenceParserListener {
  private participants: IParticipantModel[] = [];
  private inGroup: boolean = false;

  enterParticipant(ctx: any) {
    const name = ctx?.name()?.getTextWithoutQuotes() || 'Missing `Participant` name';
    // if inGroup, push it to the children of the current group; otherwise, push it to the root
    const participant = {
      type: SingleOrGroup.SINGLE,
      name
    };
    if (this.inGroup) {
      this.participants[this.participants.length - 1]?.children?.push(participant);
    } else {
      this.participants.push(participant);
    }
  }

  enterGroup(ctx: any) {
    this.inGroup = true;
    const name = ctx?.name()?.getTextWithoutQuotes();
    this.participants.push({type: SingleOrGroup.GROUP, name, children: []});
  }

  exitGroup(ctx: any) {
    this.inGroup = false;
  }

  result(): IParticipantModel[] {
    return this.participants;
  }
}

describe('participant group', () => {
  it.each([
    ['A', 'A'],
    ['@EC2', 'Missing `Participant` name'],
  ])('Code `%s` produces one single participant with name `%s`', (code, name) => {
    const rootContext = seqDsl.RootContext(code);
    const listener = new ParticipantListener();
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT
    walker.walk(listener, rootContext)
    expect(listener.result()).toEqual([{ type: SingleOrGroup.SINGLE, name: name }])
  })

  // it should print out a tree: root { A { B C } }
  it('prints participants', () => {
    const code = 'A group { B C }'
    const rootContext = seqDsl.RootContext(code);
    const listener = new ParticipantListener();
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT
    walker.walk(listener, rootContext)
    expect(listener.result()).toEqual([{"type":0,"name":"A"},{"type":1,"children":[{"type":0,"name":"B"},{"type":0,"name":"C"}]}])
  })
})
