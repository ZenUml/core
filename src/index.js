import seqDsl from './parser'

import SeqDiagram from './components/SeqDiagram.vue'

import './components/Cosmetic.css'

const Store = {
  state: {
    // 'lifeLineDimensions' is decided by code and browser's behavior.
    // It cannot be a simple getter (which is a computed value of a state property).
    lifeLineDimensions: {},
    firstInvocations: {},
    code: '',
    events: [],
    selected: [],
    // To be overridden by plugins
    onLifelineMounted: () => {}
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
    },
    onLifelineMounted: (state) => state.onLifelineMounted
  },
  mutations: {
    code: function (state, payload) {
      state.code = payload
    },
    event: function (state, payload) {
      state.events.push(payload)
    },
    onLifeLineLayerMountedOrUpdated: function (state, payload) {
      state.lifeLineDimensions = payload
    },
    onMessageLayerMountedOrUpdated: function (state, payload) {
      state.firstInvocations = payload
    },
    onSelect: function (state, payload) {
      if (state.selected.includes(payload)) {
        state.selected = state.selected.filter(p => p !== payload)
      } else {
        state.selected.push(payload)
      }
    }
  },
  actions: {
    updateCode: function (context, payload) {
      context.commit('code', payload.code)
    }
  },
  // TODO: Enable strict for development?
  strict: false,
}

let Version = '0.6.3'
export {
  Version,
  Store,
  SeqDiagram
}
