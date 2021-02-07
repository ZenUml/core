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
    expect(codeRange.stop).toBe(3);
  });

  it('should have an start and an end', () => {
    const m1 = getMessageContext('A.m1{B.m2}');
    const codeRange1 = CodeRange.from(m1);
    expect(codeRange1.start).toBe(0);
    expect(codeRange1.stop).toBe(10);
    const m2 = m1.braceBlock().block().stat()[0].message();
    const codeRange2 = CodeRange.from(m2);
    expect(codeRange2.start).toBe(5);
    expect(codeRange2.stop).toBe(9);
  });
});
