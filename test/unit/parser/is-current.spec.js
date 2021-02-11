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
    const creation = stat.creation();
    expect(creation.isCurrent(cursor)).toBe(expectedIsCurrent);
  })
});
