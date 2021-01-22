import {mount, createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex'
import {Store} from '@/index'
import MessageLayer from '@/components/MessageLayer'
const localVue = createLocalVue()
localVue.use(Vuex)
const storeConfig = Store()
storeConfig.state.code = 'a'
storeConfig.getters.rightOf = function () {
  return () => 100;
}

const store = new Vuex.Store(storeConfig)

describe('MessageLayer', () => {
  it('should have a width', async () => {
    let messageLayerWrapper = mount(MessageLayer, {store, localVue})
    expect(messageLayerWrapper.find('.message-layer').exists()).toBeTruthy()
    await messageLayerWrapper.vm.$nextTick()

    expect(messageLayerWrapper.find('.message-layer').attributes().style)
      .toBe('width: 200px;')
  })
})
