import {mount, createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex'
import {Store} from '@/index'
import MessageLayer from '@/components/MessageLayer'
const localVue = createLocalVue()
localVue.use(Vuex)
const storeConfig = Store()
storeConfig.state.code = 'a'
storeConfig.getters.rightOf = function () {
  return (p) => p === 'a' ? 100 : NaN
}

const store = new Vuex.Store(storeConfig)

describe('MessageLayer', () => {
  let messageLayerWrapper = mount(MessageLayer, {store, localVue})
  it('should have a width', async () => {
    expect(messageLayerWrapper.find('.message-layer').exists()).toBeTruthy()
    // We do not need to wait until next tick in **test**.
    // await messageLayerWrapper.vm.$nextTick()
    expect(messageLayerWrapper.find('.message-layer').attributes().style)
      .toBe('width: 140px;')
  })
  it('gets participant names', async () => {
    expect(messageLayerWrapper.vm.participantNames()[0]).toBe('_STARTER_')
    expect(messageLayerWrapper.vm.participantNames()[1]).toBe('a')
  })
})
