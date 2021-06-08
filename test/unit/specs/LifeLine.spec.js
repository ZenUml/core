import {mount, createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex'
import {Store} from '@/index'
import {Participant} from '@/parser/Participants'
import LifeLine from '@/components/lifeline/LifeLine'
const localVue = createLocalVue()
localVue.use(Vuex)
const storeConfig = Store()
storeConfig.state.code = 'abc'

const store = new Vuex.Store(storeConfig)
describe('select a participant', () => {
  it('For VM and HTML and store', async () => {
    store.state.firstInvocations = {
      A: {
        top: 3
      }
    }
    const propsData = {entity: new Participant('A')}
    let lifelineWrapper = mount(LifeLine, {store, localVue, propsData});
    expect(lifelineWrapper.vm.selected).toBeFalsy()
    expect(lifelineWrapper.find('.selected').exists()).toBeFalsy()

    lifelineWrapper.find('.participant').trigger('click')
    expect(lifelineWrapper.vm.selected).toBeTruthy()
    await lifelineWrapper.vm.$nextTick()
    expect(store.state.selected).toContain('A')
    expect(lifelineWrapper.find('.selected').exists()).toBeTruthy()

    lifelineWrapper.find('.participant').trigger('click')
    expect(lifelineWrapper.vm.selected).toBeFalsy()
    await lifelineWrapper.vm.$nextTick()
    expect(store.state.selected.includes('A')).toBeFalsy()
    expect(lifelineWrapper.find('.selected').exists()).toBeFalsy()
  })
})
