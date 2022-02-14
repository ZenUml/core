import 'cypress-plugin-snapshots/commands';
describe('Smoke test', function () {
  it('should load the home page', function () {
    cy.visit('http://localhost:8080')
      .then(() => {
        cy.document().toMatchImageSnapshot({imageConfig: {"threshold": 0.05}})
      })
  });
});
