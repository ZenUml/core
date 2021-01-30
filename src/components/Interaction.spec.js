import {createLocalVue, shallowMount} from '@vue/test-utils'
import Vuex from 'vuex'
import Interaction from './Interaction'
import { Store } from '../index'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Highlight current interact based on position of cursor', () => {
  test.each([
    ['A.bc', null, false],
    ['A.bc', undefined, false],
    ['A.bc', -1, false],
    ['A.bc', 0, true],
    ['A.bc', 1, true],
    ['A.bc', 2, true],
    ['A.bc', 3, true],
    ['A.bc', 4, true],
    ['A.bc', 5, false],
  ])('Interaction: for code: `%s` if cursor is %s then isCurrent will be %s ', (code, cursor, isCurrent) => {
    const storeConfig = Store()
    storeConfig.state.cursor = cursor
    const store = new Vuex.Store(storeConfig)
    store.commit('code', code)
    const rootContext = store.getters.rootContext
    const wrapper = shallowMount(Interaction, {
      store, localVue, propsData: {
        from: 'A',
        context: rootContext.block().stat()[0]
      }
    });
    expect(wrapper.vm.isCurrent).toBe(isCurrent)
  })
})
describe('Interaction width', () => {
  test.each([
    // A --- ?px ---> B
    [ 1,  10, 25, 15],
    [ 1,  25, 10, 17],
    [-1,  10, 25, 17],
    [-1,  25, 10, 15],
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
        fragmentOffset: 7
      }
    });

    expect(wrapper.vm.translateX).toBe(-8)
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
        fragmentOffset: 7
      }
    });
    expect(wrapper.vm.translateX).toBe(-19)
  });
})
