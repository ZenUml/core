import {antlr4, ParticipantListener, seqDsl, SingleOrGroup} from "@/positioning/ParticipantListener";

function Participants2(code: string) {
  const rootContext = seqDsl.RootContext(code);
  const listener = new ParticipantListener();
  const walker = antlr4.tree.ParseTreeWalker.DEFAULT
  walker.walk(listener, rootContext)
  return listener.result();
}

describe('participant group', () => {
  it.each([
    ['A', 'A'],
    ['@EC2', 'Missing `Participant` name'],
  ])('Code `%s` produces one single participant with name `%s`', (code, name) => {
    const participants2 = Participants2(code);
    expect(participants2).toEqual([{ type: SingleOrGroup.SINGLE, name: name }])
  })

  // it should print out a tree: root { A { B C } }
  it('prints participants', () => {
    const code = 'A group { B C }';
    const expected = [{"type":0,"name":"A"},
      {
        "type":1,"children":[
          {"type":0,"name":"B"},{"type":0,"name":"C"}
        ]
      }];
    expect(Participants2(code)).toEqual(expected)
  })
})
