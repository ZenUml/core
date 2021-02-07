import {createLocalVue} from "@vue/test-utils";
import CodeRange from '../../../src/plugins/CodeRange'

describe('', () => {
  test('default code range', () => {
    const vue = createLocalVue()
    vue.use(CodeRange)
    expect(vue.codeRange.contextStart).toBe(0)
  })
})
