/* eslint-disable no-undef */
import 'cypress-plugin-snapshots/commands';
describe('Defect 406', function () {
  it('Fragments under Creation', function () {
    cy.visit('http://localhost:8080/cy/defect-406-alt-under-creation.html', {
      headers: {
        "Accept-Encoding": "gzip, deflate"
      },
      retryOnStatusCodeFailure: true,
      retryOnNetworkFailure: true,
      timeout: 30000
    })
      .then(() => {
        cy.document().toMatchImageSnapshot({
          imageConfig: {"threshold": 0.005}, capture: "viewport"
        });
      })
  });
});
