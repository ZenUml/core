/* eslint-disable no-undef */
import 'cypress-plugin-snapshots/commands';
describe('Smoke test', function () {
  it('should load the home page', function () {
    cy.visit('http://localhost:8080/smoke.html')
      .then(() => {
        cy.document().toMatchImageSnapshot({
          imageConfig: {"threshold": 0.001}, capture: "fullPage"
        });
      })
  });

  it('interaction', function () {
    cy.visit('http://localhost:8080/smoke-interaction.html')
      .then(() => {
        cy.document().toMatchImageSnapshot({
          imageConfig: {"threshold": 0.001}, capture: "viewport"
        });
      })
  });

  it('creation', function () {
    cy.visit('http://localhost:8080/smoke-creation.html')
      .then(() => {
        cy.document().toMatchImageSnapshot({
          imageConfig: {"threshold": 0.001}, capture: "viewport"
        });
      })
  });

  it('fragment', function () {
    cy.visit('http://localhost:8080/smoke-fragment.html')
      .then(() => {
        cy.document().toMatchImageSnapshot({
          imageConfig: {"threshold": 0.001}, capture: "viewport"
        });
      })
  });
});
