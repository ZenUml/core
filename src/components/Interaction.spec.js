import {createLocalVue, shallowMount} from '@vue/test-utils'
import Vuex from 'vuex'
import Interaction from './Interaction'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Interaction width', () => {
  test.each([
    [1, 100, 99],
    [-1, 100, 101],
    [1, -100, 101],
    [-1, -100, 99]
  ])('If offset is %s and distance is %s, interactionWidth should be %s', (offset, distance, width) => {
    const store = new Vuex.Store({
      getters: {
        distance: () => () => distance
      }
    })
    const wrapper = shallowMount(Interaction, {
      store, localVue, propsData: {
        offset: offset,
      }
    });
    expect(wrapper.vm.interactionWidth).toBe(width)
  })
})
