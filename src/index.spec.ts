import vue from 'vue';
import vuex from 'vuex';
import { VueSequence } from '@/index'
vue.use(vuex);

describe('index (store)', () => {
  it('should have title', () => {
    const storeInstance = VueSequence.Store();
    const store = new vuex.Store(storeInstance);
    store.commit('code', 'title abcd');
    expect(store.state.code).toBe('title abcd');
    expect(store.getters.title).toBe('abcd');
  })
})
