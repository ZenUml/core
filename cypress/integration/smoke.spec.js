import 'cypress-plugin-snapshots/commands';
describe('Smoke test', function () {
  it('should load the home page', function () {
    cy.viewport(2700, 3000);
    cy.visit('http://localhost:8082')
      .then(() => {
        cy.document().toMatchImageSnapshot({
          imageConfig: {"threshold": 0.05}, capture: "fullPage"
        });
      })
  });
});
