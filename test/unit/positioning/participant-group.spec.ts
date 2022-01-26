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
    expect(participants2).toEqual([{ type: SingleOrGroup.SINGLE, name: name, left: "" }])
  })

  it.each([
    ['A B', 'A', ''],
    ['A B', 'B', 'A'],
  ])('Code `%s` tells left of `%s` is `%s`', (code: string, name: string, left?: string) => {
    const participants2 = Participants2(code);
    expect(participants2.find(p => p.name === name)?.left).toBe(left)
  })

  // it should print out a tree: root { A { B C } }
  it('prints participants', () => {
    const code = 'A group { B C }';
    const expected = [{"type":0,"name":"A","left":""},
      {
        "type":1,"children":[
          {"type":0,"name":"B","left":"A"},{"type":0,"name":"C","left":"B"}
        ], name: undefined, left: "A"
      }];
    expect(Participants2(code)).toEqual(expected)
  })
})
