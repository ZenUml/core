const antlr4 = require('antlr4/index');
let seqDsl = require('../../../src/parser/index');

/**
 * message -> messageBody -> func -> signature (DOT signature)*
 * "A.method1().method2()" should produce signature "method1().method2()"
 */
describe('Message', () => {
  it('produces signatureText', () => {
    let rootContext = seqDsl.RootContext('A.m1.m2');
    let message = rootContext.block().stat()[0].message();
    expect(message.SignatureText()).toBe('m1.m2');
  })
})
