import {antlr4, ParticipantListener, seqDsl, SingleOrGroup} from "@/positioning/ParticipantListener";

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
