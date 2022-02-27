import {Fixture} from "../fixture/Fixture";

describe('Conditions', () => {
  it('parse complex condition in if statement', () => {
    const code = `
      if (
        a == 1 &&
        b != 2 ||
        c = A.isGood(B.isBad())
      ) {
        return true;
      }
    `;

    const ast = Fixture.firstStatement(code);
    expect(ast.alt().ifBlock().parExpr().condition().getFormattedText()).toBe('a == 1 && b != 2 || c = A.isGood(B.isBad())');
  });
})
