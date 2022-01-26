let seqDsl = require('../../../../src/parser/index');

export class Fixture {
  static firstStatement(code: string) {
    let rootContext = seqDsl.RootContext(code);
    return rootContext.block().stat()[0];
  }
}
