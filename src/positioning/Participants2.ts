import {antlr4, ParticipantListener} from "./ParticipantListener";

export function Participants2(rootContext: any) {
  const listener = new ParticipantListener();
  const walker = antlr4.tree.ParseTreeWalker.DEFAULT
  walker.walk(listener, rootContext)
  return listener.result();
}
