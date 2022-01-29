import {mount, createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex'
import {VueSequence} from '@/index'
import Creation from '@/components/Creation'
import {Fixture} from "../parser/fixture/Fixture";

const localVue = createLocalVue()
localVue.use(Vuex)


describe('Creation', () => {
  const storeConfig = VueSequence.Store()
  const code = 'new A';
  storeConfig.state.code = code
  const store = new Vuex.Store(storeConfig)

  let creationContext = Fixture.firstStatement(code);
  const propsData = {
    context: creationContext
  }

  let creationWrapper = mount(Creation, {store, localVue, propsData})

  it('data , props and computed properties', async () => {
    expect(creationWrapper.vm.hover).toBe(false)
    expect(creationWrapper.vm.from).toBe('_STARTER_')
    expect(creationWrapper.vm.distance).toStrictEqual(expect.any(Function))
    expect(creationWrapper.vm.interactionWidth).toBe(70)
    expect(creationWrapper.vm.rightToLeft).toBeFalsy()
  })
})
