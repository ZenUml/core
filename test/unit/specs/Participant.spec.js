import { mount } from '@vue/test-utils';
import { createStore } from 'vuex'
import { VueSequence } from '../../../src/index';
import Participant from '../../../src/components/DiagramFrame/SeqDiagram/LifeLineLayer/Participant.vue';

const storeConfig = VueSequence.Store();
storeConfig.state.code = 'abc';

const store = createStore(storeConfig);
describe('select a participant', () => {
  it('For VM and HTML and store', async () => {
    store.state.firstInvocations = {
      A: {
        top: 3,
      },
    };
    const props = { entity: { name: 'A' } };
    let participantWrapper = mount(Participant, { global: { plugins: [store]}, props });
    expect(participantWrapper.vm.selected).toBeFalsy();
    expect(participantWrapper.find('.selected').exists()).toBeFalsy();

    participantWrapper.find('.participant').trigger('click');
    expect(participantWrapper.vm.selected).toBeTruthy();
    await participantWrapper.vm.$nextTick();
    expect(store.state.selected).toContain('A');
    expect(participantWrapper.find('.selected').exists()).toBeTruthy();

    participantWrapper.find('.participant').trigger('click');
    expect(participantWrapper.vm.selected).toBeFalsy();
    await participantWrapper.vm.$nextTick();
    expect(store.state.selected.includes('A')).toBeFalsy();
    expect(participantWrapper.find('.selected').exists()).toBeFalsy();
  });
});
