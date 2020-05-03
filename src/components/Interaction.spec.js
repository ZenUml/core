import {createLocalVue, shallowMount} from '@vue/test-utils'
import Vuex from 'vuex'
import Interaction from './Interaction'
import { Store } from '../index'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Interaction width', () => {
  test.each([
    // A --- ?px ---> B
    [ 1,  10, 25, 14],
    [ 1,  25, 10, 16],
    [-1,  10, 25, 16],
    [-1,  25, 10, 14],
  ])('If offset is %s and distance is %s, interactionWidth should be %s', (offset, a, b, width) => {
    Interaction.computed.to = () => 'B';
    Store.getters.centerOf = () => (participant) => {
      if(participant === 'A') return a
      if(participant === 'B') return b
    };
    const store = new Vuex.Store(Store)
    const wrapper = shallowMount(Interaction, {
      store, localVue, propsData: {
        from: 'A',
        offset: offset,
      }
    });
    expect(wrapper.vm.interactionWidth).toBe(width)
  })
})
