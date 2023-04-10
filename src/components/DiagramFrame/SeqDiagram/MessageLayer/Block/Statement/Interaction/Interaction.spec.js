import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import Interaction from './Interaction.vue'
import { VueSequence } from '../../../../../../../index'
import { ProgContextFixture } from '../../../../../../../parser/ContextsFixture'

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
  ])(
    'Interaction: for code: `%s` if cursor is %s then isCurrent will be %s ',
    (code, cursor, isCurrent) => {
      const storeConfig = VueSequence.Store();
      storeConfig.state.cursor = cursor;
      const store = createStore(storeConfig);
      store.state.code = code;
      const rootContext = store.getters.rootContext;
      const wrapper = shallowMount(Interaction, {
        global: {
          plugins: [store],
        },
        props: {
          from: 'A',
          context: rootContext.block().stat()[0],
        },
      });
      expect(wrapper.vm.isCurrent).toBe(isCurrent);
    }
  );
});

// function positionParticipantsInStore () {
//   const storeConfig = VueSequence.Store()
//   storeConfig.getters.centerOf = () => (participant) => {
//     if (participant === 'A') return 10
//     if (participant === 'B') return 25
//     if (participant === 'C') return 35
//   }
//   return createStore(storeConfig)
// }

describe('Interaction width', () => {
  test.each([
    // A --- ?px ---> B
    [1, 10, 25, 14],
    [1, 25, 10, 16],
  ])(
    'If selfCallIndent is %s and distance is %s, interactionWidth should be %s',
    (selfCallIndent, a, b, width) => {
      Interaction.computed.to = () => 'B';
      const storeConfig = VueSequence.Store();
      storeConfig.getters.centerOf = () => (participant) => {
        if (participant === 'A') return a;
        if (participant === 'B') return b;
      };
      const store = createStore(storeConfig);
      const wrapper = shallowMount(Interaction, {
        global: {
          plugins: [store],
        },
        props: {
          selfCallIndent: selfCallIndent,
          context: ProgContextFixture('A->B.method()').block().stat()[0],
        },
      });
      expect(wrapper.vm.interactionWidth).toBe(width);
    }
  );
});

describe('Calculate translateX and rtl when an explict from is provided (i.e. From -> To)', () => {
  // A          B           C
  // 10         25          35
  // given a dictionary of participants and their center positions like: { A: 10, B: 25, C: 35 }
  // return a store with a getter that returns the center position of a participant
  function positionParticipantsInStore (participants) {
    const storeConfig = VueSequence.Store()
    storeConfig.getters.centerOf = () => (participant) => participants[participant]
    return createStore(storeConfig)
  }

  // given an interaction component and a dictionary of field name to participant like:
  // { providedFrom: 'A', origin: 'B', to: 'C' }
  // set the computed properties of the interaction component to return the participant
  function mapParticipantsToOriginProvidedAndTo (InteractionComp, participants) {
    // set up interaction component
    InteractionComp.computed.providedFrom = () => participants.providedFrom
    InteractionComp.computed.origin = () => participants.origin
    InteractionComp.computed.to = () => participants.to
  }
  // set up store
  const store = positionParticipantsInStore({ A: 10, B: 25, C: 35 });

  it('when left to right and no explict form is provided', function () {
    // set up interaction component
    mapParticipantsToOriginProvidedAndTo(Interaction, { providedFrom: null, origin: 'A', to: 'B' });
    const wrapper = shallowMount(Interaction, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.vm.translateX).toBe(0);
    expect(wrapper.find('.right-to-left').exists()).toBeFalsy();
  });

  // A          B           C
  // provided  origin      to
  //   ------------------->
  // 10         25          35
  it('when left to right', function () {
    mapParticipantsToOriginProvidedAndTo(Interaction, { providedFrom: 'A', origin: 'B', to: 'C' });
    const wrapper = shallowMount(Interaction, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.vm.translateX).toBe(-15);
    expect(wrapper.find('.right-to-left').exists()).toBeFalsy();
  });

  // A <-- B             C
  // to    provided      origin
  // 10    25            35
  it('right to left', function () {
    // set up interaction component
    mapParticipantsToOriginProvidedAndTo(Interaction, { providedFrom: 'B', origin: 'C', to: 'A' });

    const wrapper = shallowMount(Interaction, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.vm.translateX).toBe(-25);
    expect(wrapper.find('.right-to-left').exists()).toBeTruthy();
  });
});
