import {render} from './core'
describe('@ZenUML/core', function () {
  it('should return a ZenUML instance', async () => {
    const el = {} as Element
    const zu = await render('A.method', 'theme-blue', el)
    expect(zu).toBeDefined()
  })

  // it('should throw exception if `el` is not provided in the first rendering', async () => {
  //   expect(() => {
  //     render('A.method', 'theme-blue', undefined)
  //   }).toThrow()
  // })
});