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
    const storeConfig = Store()
    storeConfig.getters.centerOf = () => (participant) => {
      if(participant === 'A') return a
      if(participant === 'B') return b
    };
    const store = new Vuex.Store(storeConfig)
    const wrapper = shallowMount(Interaction, {
      store, localVue, propsData: {
        from: 'A',
        offset: offset,
      }
    });
    expect(wrapper.vm.interactionWidth).toBe(width)
  })
})

describe('Translate X', () => {
  // A      B      C
  // real   from   to
  it('when left to right', function () {
    Interaction.computed.realFrom = () => 'A'
    Interaction.computed.to = () => 'C'
    const storeConfig = Store()
    storeConfig.getters.centerOf = () => (participant) => {
      if(participant === 'A') return 10
      if(participant === 'B') return 25
      if(participant === 'C') return 35
    };

    const store = new Vuex.Store(storeConfig)
    const wrapper = shallowMount(Interaction, {
      store, localVue, propsData: {
        from: 'B',
      }
    });

    expect(wrapper.vm.translateX).toBe(-15)
  });

  // A      B      C
  // to   real     from
  it('when right to left', function () {
    Interaction.computed.realFrom = () => 'B'
    Interaction.computed.to = () => 'A'
    const storeConfig = Store()
    storeConfig.getters.centerOf = () => (participant) => {
      if(participant === 'A') return 10
      if(participant === 'B') return 25
      if(participant === 'C') return 35
    };

    const store = new Vuex.Store(storeConfig)
    const wrapper = shallowMount(Interaction, {
      store, localVue, propsData: {
        from: 'C',
      }
    });
    expect(wrapper.vm.translateX).toBe(-25)
  });
})
