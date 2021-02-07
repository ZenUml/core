let seqDsl = require('./index');
import {CodeRange} from "@/parser/CodeRange";

function getMessageContext(code: string) {
  let rootContext = seqDsl.RootContext(code);
  expect(seqDsl.RootContext).not.toBeNull();
  return rootContext.block().stat()[0].message();
}

describe('CodeRange', () => {
  it('should have an start and an end', () => {
    const message = getMessageContext('A.m');
    const codeRange = CodeRange.from(message);
    expect(codeRange.start).toBe(0);
    expect(codeRange.end).toBe(3);
  });
});
