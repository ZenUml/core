import _, {now} from 'lodash'
import {RootContext, Participants, GroupContext, ParticipantContext} from './parser/index.js'

import DiagramFrame from './components/DiagramFrame.vue'
import SeqDiagram from './components/SeqDiagram.vue'

import './assets/tailwind.css'
import './components/Cosmetic.scss'
import './components/Cosmetic-blue.scss'
import './components/Cosmetic-black-white.scss'
import './components/theme-blue-river.scss'
import {CodeRange} from './parser/CodeRange'
import PositionCalculator from './utils/position.calculator'

let storeInitiationTime: number = 0
setTimeout(function () {
  if(!storeInitiationTime) {
    console.warn('[vue-sequence] Store is a function and is not initiated in 1 second.')
  }
}, 1000)
const Store = (debounce?: number) => {
  storeInitiationTime = now()
  return {
    state: {
      positionCalculator: new PositionCalculator(),
      participantPositions: new Map(),
      showTips: false,
      generation: 0,
      lifeLineElementMap: new Map(),
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
      title: (state: any, getters: any) => {
        return getters.rootContext?.title()?.content()
      },
      GroupContext: () => GroupContext,
      ParticipantContext: () => ParticipantContext,
      generation: (state: any) => state.generation,
      // We are using getters to avoid hard coding module's name ($store.Store.state)
      // in the components. Not sure if this is the best practice.
      firstInvocations: (state: any) => state.firstInvocations,
      cursor: (state: any) => state.cursor,
      rootContext: (state: any) => {
        return RootContext(state.code)
      },
      participants: (state: any, getters: any) => {
        return Participants(getters.rootContext, true)
      },
      centerOf: (state: any) => (entity: any) => {
        return state.lifeLineElementMap.get(entity) &&
          (state.lifeLineElementMap.get(entity).offsetLeft + Math.floor(state.lifeLineElementMap.get(entity).offsetWidth / 2))
      },
      leftOf: (state: any) => (entity: any) => {
        return state.lifeLineElementMap.get(entity) && state.lifeLineElementMap.get(entity).offsetLeft
      },
      rightOf: (state: any) => (entity: any) => {
        return state.lifeLineElementMap.get(entity) &&
          (state.lifeLineElementMap.get(entity).offsetLeft + state.lifeLineElementMap.get(entity).offsetWidth)
      },
      widthOf: (state: any) => (entity: any) => {
        return state.lifeLineElementMap.get(entity) && state.lifeLineElementMap.get(entity).offsetWidth
      },
      // deprecated, use distances that returns centerOf(to) - centerOf(from)
      distance: (state: any, getters: any) => (from: any, to: any) => {
        return getters.centerOf(from) - getters.centerOf(to)
      },
      distance2: (state: any, getters: any) => (from: any, to: any) => {
        if (!from || !to) return 0
        return getters.centerOf(to) - getters.centerOf(from)
      },
      onLifelineMounted: (state: any) => state.onLifelineMounted,
      onElementClick: (state: any) => state.onElementClick
    },
    mutations: {
      // update participantPositions only when new position is bigger than old one
      updateParticipantPosition (state: any, payload: any) {
        let obj = {}
        // @ts-ignore
        obj[payload.participant] = payload.position
        state.positionCalculator.on(obj)
      },
      increaseGeneration: function(state: any) {
        state.generation++
      },
      code: function (state: any, payload: any) {
        state.code = payload;
        state.generation++;
      },
      cursor: function (state: any, payload: any) {
        state.cursor = payload;
      },
      event: function (state: any, payload: any) {
        state.events.push(payload)
      },
      onLifelinePositioned: function(state: any, payload: any) {
        state.lifeLineElementMap.set(payload.name, payload.el)
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
      // Why debounce is here instead of mutation 'code'?
      // Both code and cursor must be mutated together, especially during typing.
      updateCode: _.debounce(function (context: any, payload: any) {
        if (typeof payload === 'string') {
          throw Error('You are using a old version of vue-sequence. New version requires {code, cursor}.')
        }
        context.commit('code', payload.code);
        context.commit('cursor', payload.cursor);
      }, debounce || 1000)
    },
    // TODO: Enable strict for development?
    strict: false,
  }
};
/* eslint-disable */
// @ts-ignore
const Version = VERSION || ''
/* eslint-disable */
// @ts-ignore
const BuildTime = BUILD_TIME || ''
const VueSequence = {
  Version,
  BuildTime,
  Store,
  SeqDiagram,
  DiagramFrame
}
export { VueSequence }
