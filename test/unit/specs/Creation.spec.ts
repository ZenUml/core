import {createLocalVue, mount} from "@vue/test-utils";
import Vuex from 'vuex'
import {VueSequence} from '@/index'
import Creation from '@/components/Creation.vue'
import {Fixture} from "../parser/fixture/Fixture";

const localVue = createLocalVue()
localVue.use(Vuex)


function mountCreationWithCode(code: string, contextLocator: Function) {
  const storeConfig = VueSequence.Store()
  storeConfig.state.code = code
  const store = new Vuex.Store(storeConfig)

  let creationContext = contextLocator(code);
  const propsData = {
    context: creationContext
  }

  let creationWrapper = mount(Creation, {store, localVue, propsData})
  return creationWrapper;
}

describe('Creation', () => {
  let creationWrapper = mountCreationWithCode('new A', Fixture.firstStatement);

  it('data , props and computed properties', async () => {
    expect(creationWrapper.vm.hover).toBe(false)
    expect(creationWrapper.vm.from).toBe('_STARTER_')
    // expect(creationWrapper.vm.distance).toStrictEqual(expect.any(Function))
    // expect(creationWrapper.vm.interactionWidth).toBe(70)
    // expect(creationWrapper.vm.rightToLeft).toBeFalsy()
  })
})
