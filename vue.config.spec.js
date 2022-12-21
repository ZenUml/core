import { describe, expect, it } from 'vitest'
const config = require('./vue.config')
describe('vue.config.js', function () {
  it('should get pages', () => {
    const expectedPages = {"embed-container-demo.html":{"entry":"src/main.ts","template":"public/embed-container-demo.html","filename":"embed-container-demo.html"},"cy/smoke-fragment-issue.html":{"entry":"src/main.ts","template":"public/cy/smoke-fragment-issue.html","filename":"cy/smoke-fragment-issue.html"},"cy/smoke-creation.html":{"entry":"src/main.ts","template":"public/cy/smoke-creation.html","filename":"cy/smoke-creation.html"},"cy/smoke-interaction.html":{"entry":"src/main.ts","template":"public/cy/smoke-interaction.html","filename":"cy/smoke-interaction.html"},"cy/defect-406-alt-under-creation.html":{"entry":"src/main.ts","template":"public/cy/defect-406-alt-under-creation.html","filename":"cy/defect-406-alt-under-creation.html"},"cy/smoke.html":{"entry":"src/main.ts","template":"public/cy/smoke.html","filename":"cy/smoke.html"},"cy/smoke-return.html":{"entry":"src/main.ts","template":"public/cy/smoke-return.html","filename":"cy/smoke-return.html"},"cy/smoke-fragment.html":{"entry":"src/main.ts","template":"public/cy/smoke-fragment.html","filename":"cy/smoke-fragment.html"},"embed.html":{"entry":"src/main.ts","template":"public/embed.html","filename":"embed.html"}};
    expect(config.pages).toEqual(expectedPages)
  })
});
