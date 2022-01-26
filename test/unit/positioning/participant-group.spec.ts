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
  enterParticipant(ctx: any) {
    const name = ctx?.name()?.getTextWithoutQuotes() || 'Missing `Participant` name';

    this.participants.push({type: SingleOrGroup.SINGLE, name});
  }
  result(): IParticipantModel[] {
    return this.participants;
  }
}

describe('participant group', () => {
  it('prints participants', () => {
    const code = 'A'
    const rootContext = seqDsl.RootContext(code);
    const listener = new ParticipantListener();
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT
    walker.walk(listener, rootContext)
    expect(listener.result()).toEqual([
      {
        type: SingleOrGroup.SINGLE,
        name: 'A'
      },
    ])
    console.log(JSON.stringify(listener.result()))
  })

  // it should print out a tree: root { A { B C } }
  it('prints participants', () => {
    const code = 'A group { B C }'
    const rootContext = seqDsl.RootContext(code);
    const listener = new ParticipantListener();
    const walker = antlr4.tree.ParseTreeWalker.DEFAULT
    walker.walk(listener, rootContext)
    console.log(JSON.stringify(listener.result()))
  })
})
