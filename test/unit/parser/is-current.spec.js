const {Fixture} = require("./fixture/Fixture");

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
    const stat = Fixture.firstStatement(code);
    const creation = stat.creation();
    expect(creation.isCurrent(cursor)).toBe(expectedIsCurrent);
  })
});
