let seqDsl = require('../../../src/parser/index');

const sequenceParser = require('../../../src/generated-parser/sequenceParser')

describe('Creation', () => {
  test.each([
    [-1, false],
    [0, true],
    [9, true],   // after ')'
    [10, false], // after ') '
    [12, false], // after 'B'
    ]
  )('is current', (cursor, expectedIsCurrent) => {
    const code = 'a=new A() {B.m}';
    const rootContext = seqDsl.RootContext(code);
    const stat = rootContext.block().stat()[0];
    const seqParser = sequenceParser.sequenceParser;
    const CreationContext = seqParser.CreationContext;
    CreationContext.prototype.isCurrent = function (cursor) {
      const start = this.start.start;
      const stop = this.creationBody().stop.stop + 1;

      return cursor >= start && cursor <= stop;
    }
    const creation = stat.creation();
    expect(creation.isCurrent(cursor)).toBe(expectedIsCurrent);
  })
});
