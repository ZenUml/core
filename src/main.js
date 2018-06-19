import Vuex from 'vuex'

import createLogger from 'vuex/dist/logger'
import seqDsl from 'sequence-parser'

import SeqDiagram from './components/SeqDiagram.vue'
import App from './App.vue'

import './components/Cosmetic.css'
import Vue from "vue"
Vue.use(Vuex)

const Store = {
  state: {
    // 'lifeLineDimensions' is decided by code and browser's behavior.
    // It cannot be a simple getter (which is a computed value of a state property).
    lifeLineDimensions: {},
    firstInvocations: {},
    code: '',
    events: []
  },
  getters: {
    // We are using getters to avoid hard coding module's name ($store.Store.state)
    // in the components. Not sure if this is the best practice.
    firstInvocations: (state) => state.firstInvocations,
    starter: (state, getters) => {
      let starterExp = getters.rootContext.starterExp()
      return starterExp && starterExp.starter() && starterExp.starter().getCode() || 'Starter'
    },
    rootContext: (state) => {
      return seqDsl.RootContext(state.code)
    },
    participants: (state, getters) => {
      return seqDsl.Participants(getters.rootContext)
    },
    centerOf: (state) => (entity) => {
      return state.lifeLineDimensions[entity] &&
        (state.lifeLineDimensions[entity].left + state.lifeLineDimensions[entity].width / 2)
    },
    leftOf: (state) => (entity) => {
      return state.lifeLineDimensions[entity] && state.lifeLineDimensions[entity].left
    },
    rightOf: (state) => (entity) => {
      return state.lifeLineDimensions[entity] &&
        (state.lifeLineDimensions[entity].left + state.lifeLineDimensions[entity].width)
    },
    widthOf: (state) => (entity) => {
      return state.lifeLineDimensions[entity] && state.lifeLineDimensions[entity].width
    },
    distance: (state, getters) => (from, to) => {
      return getters.centerOf(from) - getters.centerOf(to)
    }
  },
  mutations: {
    code: function (state, payload) {
      state.code = payload
    },
    event: function (state, payload) {
      state.events.push(payload)
    },
    onMessageMounted: function (state, payload) {
      if (state.firstInvocations[payload.entity]) return
      state.firstInvocations[payload.entity] = {
        top: payload.top,
        type: payload.type
      }
      state.firstInvocations = Object.assign({}, state.firstInvocations)
    },
    onLifeLineLayerMountedOrUpdated: function (state, payload) {
      state.lifeLineDimensions = payload
    },
    onMessageLayerMountedOrUpdated: function (state, payload) {
      state.firstInvocations = payload
    }
  },
  actions: {
    updateCode: function (context, payload) {
      context.commit('code', payload.code)
    }
  },
  // TODO: Enable strict for development?
  strict: false,
  plugins: [createLogger()]
}

import demo1 from './demo1.js'

Store.state.code = demo1

new Vue({
  store: new Vuex.Store(Store),
  render: h => h(App)
}).$mount('#app')

export {
  Store,
  SeqDiagram
}
