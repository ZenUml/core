const config = require('./vue.config')
describe('vue.config.js', function () {
  it('should get pages', () => {
    const expectedPages = {
      index: {
        entry: 'src/main.ts',
        template: 'public/index.html',
        filename: 'index.html'
      },
      embed: {
        entry: 'src/main.ts',
        template: 'public/embed.html',
        filename: 'embed.html'
      },
      smoke: {
        entry: 'src/main.ts',
        template: 'public/smoke.html',
        filename: 'smoke.html'
      },
      smokeReturn: {
        entry: 'src/main.ts',
        template: 'public/smoke-return.html',
        filename: 'smoke-return.html'
      },
      smokeInteraction: {
        entry: 'src/main.ts',
        template: 'public/smoke-interaction.html',
        filename: 'smoke-interaction.html'
      },
      smokeFragmentIssue: {
        entry: 'src/main.ts',
        template: 'public/smoke-fragment-issue.html',
        filename: 'smoke-fragment-issue.html'
      },
      smokeFragment: {
        entry: 'src/main.ts',
        template: 'public/smoke-fragment.html',
        filename: 'smoke-fragment.html'
      },
      smokeCreation: {
        entry: 'src/main.ts',
        template: 'public/smoke-creation.html',
        filename: 'smoke-creation.html'
      }
    }
    expect(config.pages).toEqual(expectedPages)
  })
});