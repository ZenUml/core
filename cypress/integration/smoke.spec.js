/* eslint-disable no-undef */
import 'cypress-plugin-snapshots/commands';
describe('Smoke test', function () {
  it('should load the home page', function () {
    cy.visit('http://localhost:8080/smoke')
      .then(() => {
        cy.document().toMatchImageSnapshot({
          imageConfig: {"threshold": 0.001}, capture: "fullPage"
        });
      })
  });

  it('interaction', function () {
    cy.visit('http://localhost:8080/smokeInteraction')
      .then(() => {
        cy.document().toMatchImageSnapshot({
          imageConfig: {"threshold": 0.001}, capture: "viewport"
        });
      })
  });

  it('creation', function () {
    cy.visit('http://localhost:8080/smokeCreation')
      .then(() => {
        cy.document().toMatchImageSnapshot({
          imageConfig: {"threshold": 0.001}, capture: "viewport"
        });
      })
  });

  it('fragment', function () {
    cy.visit('http://localhost:8080/smokeFragment')
      .then(() => {
        cy.document().toMatchImageSnapshot({
          imageConfig: {"threshold": 0.001}, capture: "viewport"
        });
      })
  });
});
