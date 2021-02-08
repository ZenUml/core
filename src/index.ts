import _ from 'lodash'
import {RootContext, Participants2, GroupContext, ParticipantContext} from './parser/index.js'

import SeqDiagram from './components/SeqDiagram.vue'

import './components/Cosmetic.scss'
import './components/theme-blue-river.scss'
import {CodeRange} from './parser/CodeRange'

const Store = () => {
  // @ts-ignore
  // @ts-ignore
  return {
    state: {
      generation: 0,
      // 'lifeLineDimensions' is decided by code and browser's behavior.
      // It cannot be a simple getter (which is a computed value of a state property).
      lifeLineDimensions: new Map(),
      firstInvocations: {},
      code: '',
      events: [],
      selected: [],
      cursor: undefined,
      // To be overridden by extensions
      onLifelineMounted: () => {},
      onElementClick: (codeRange: CodeRange) => {
        console.log('Element clicked', codeRange)
      }
    },
    getters: {
      GroupContext: () => GroupContext,
      ParticipantContext: () => ParticipantContext,
      generation: (state: any) => state.generation,
      // We are using getters to avoid hard coding module's name ($store.Store.state)
      // in the components. Not sure if this is the best practice.
      firstInvocations: (state: any) => state.firstInvocations,
      cursor: (state: any) => state.cursor,
      starter: (state: any, getters: any) => {
        let starterExp = getters.rootContext.head()?.starterExp()
        return starterExp?.starter()?.getCode() || 'Starter'
      },
      rootContext: (state: any) => {
        return RootContext(state.code)
      },
      participants2: (state: any, getters: any) => {
        return Participants2(getters.rootContext)
      },
      centerOf: (state: any) => (entity: any) => {
        return state.lifeLineDimensions.get(entity) &&
          (state.lifeLineDimensions.get(entity).left + state.lifeLineDimensions.get(entity).width / 2)
      },
      leftOf: (state: any) => (entity: any) => {
        return state.lifeLineDimensions.get(entity) && state.lifeLineDimensions.get(entity).left
      },
      rightOf: (state: any) => (entity: any) => {
        return state.lifeLineDimensions.get(entity) &&
          (state.lifeLineDimensions.get(entity).left + state.lifeLineDimensions.get(entity).width)
      },
      widthOf: (state: any) => (entity: any) => {
        return state.lifeLineDimensions.get(entity) && state.lifeLineDimensions.get(entity).width
      },
      // deprecated, use distances that returns centerOf(to) - centerOf(from)
      distance: (state: any, getters: any) => (from: any, to: any) => {
        return getters.centerOf(from) - getters.centerOf(to)
      },
      // deprecated: It should return centerOf(to) - centerOf(from)
      distance2: (state: any, getters: any) => (from: any, to: any) => {
        if (!from || !to) return 0
        return getters.centerOf(to) - getters.centerOf(from)
      },
      onLifelineMounted: (state: any) => state.onLifelineMounted,
      onElementClick: (state: any) => state.onElementClick
    },
    mutations: {
      increaseGeneration: function(state: any) {
        state.generation++
      },
      code: _.debounce(function (state, payload) {
        state.code = payload
        state.generation++
      }, 50),
      event: function (state: any, payload: any) {
        state.events.push(payload)
      },
      onLifelinePositioned: function(state: any, payload: any) {
        state.lifeLineDimensions.set(payload.name, payload.dimensions)
      },
      onLifeLineLayerMountedOrUpdated: function (state: any, payload: any) {
        state.lifeLineDimensions = payload
      },
      onMessageLayerMountedOrUpdated: function (state: any, payload: any) {
        state.firstInvocations = payload
      },
      onSelect: function (state: any, payload: any) {
        if (state.selected.includes(payload)) {
          state.selected = state.selected.filter((p: any) => p !== payload)
        } else {
          state.selected.push(payload)
        }
      }
    },
    actions: {
      updateCode: function (context: any, payload: any) {
        context.commit('code', payload)
      }
    },
    // TODO: Enable strict for development?
    strict: false,
  }
}
/* eslint-disable */
// @ts-ignore
const Version = VERSION || ''
/* eslint-disable */
// @ts-ignore
const BuildTime = BUILD_TIME || ''
export {
  Version,
  BuildTime,
  Store,
  SeqDiagram
}
