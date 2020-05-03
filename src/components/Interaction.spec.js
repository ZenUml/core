import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Interaction from './Interaction'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Interaction', () => {

  it('interactionWidth with offset = 1, distance = 100', () => {
    let store
    store = new Vuex.Store({
      getters: {
        distance: () => () => 100
      }
    })
    const wrapper = shallowMount(Interaction, {
      store, localVue, propsData: {
        offset: 1,
      }
    })

    expect(wrapper.vm.interactionWidth).toBe(99)
  })
})
