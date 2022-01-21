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
      messageLayerLeft: 0,
      posCal: null,
      participantPositions: new Map(),
      // Map is not observable. See https://github.com/vuejs/vue/issues/2410
      participantPositionsTracker: 0,
      code: '',
    },
    getters: {
      // get participantPositions
      participantPositions: (state: any) => state.participantPositions,
      messageLayerLeft: (state: any) => state.messageLayerLeft,
      posCal: (state: any, getters: any) => {
        if (!state.posCal && getters.participants && getters.participants.length) {
          state.posCal = new PositionCalculator(getters.participants)
        }
        return state.posCal
      },
      title: (state: any, getters: any) => {
        return getters.rootContext?.title()?.content()
      },
      GroupContext: () => GroupContext,
      ParticipantContext: () => ParticipantContext,
      firstInvocations: (state: any) => 0,
      cursor: (state: any) => 0,
      rootContext: (state: any) => {
        return RootContext(state.code)
      },
      participants: (state: any, getters: any) => {
        return Participants(getters.rootContext, true)
      },
      centerOf: (state: any, getters: any) => (entity: any) => {
        return getters.posCal?.getPosition(entity) || 0
      },
      leftOf: (state: any, getters: any) => (entity: any) => {
        return getters.posCal?.getPosition(entity) - 10
      },
      rightOf: (state: any, getters: any) => (entity: any) => {
        return getters.posCal?.getPosition(entity) + 10
      },
      widthOf: (state: any, getters: any) => (entity: any) => {
        return 20
      },
      // deprecated, use distances that returns centerOf(to) - centerOf(from)
      distance: (state: any, getters: any) => (from: any, to: any) => {
        return getters.centerOf(from) - getters.centerOf(to)
      },
      distance2: (state: any, getters: any) => (from: any, to: any) => {
        if (!from || !to) return 0
        return getters.centerOf(to) - getters.centerOf(from)
      },
    },
    mutations: {
      // clear participantPositions
      clearParticipantPositions: (state: any) => {
        state.participantPositions = new Map()
      },
      setMessageLayerLeft(state: any, left: number) {
        state.messageLayerLeft = left
      },
      // set posCal
      setPosCal (state: any, posCal: any) {
        state.posCal = posCal
      },
      // set participantPositions
      setParticipantPositions (state: any, payload: any) {
        // update the tracker if saved position is different from payload
        if (state.participantPositions.get(payload.participant) !== payload.position) {
          state.participantPositionsTracker++
        }
        state.participantPositions.set(payload.participant, payload.position)
      },
      code: function (state: any, payload: any) {
        state.code = payload;
      },
    },
    actions: {
      // Why debounce is here instead of mutation 'code'?
      // Both code and cursor must be mutated together, especially during typing.
      updateCode: _.debounce(function ({commit, getters}: any, payload: any) {
        if (typeof payload === 'string') {
          throw Error('You are using a old version of vue-sequence. New version requires {code, cursor}.')
        }
        commit('clearParticipantPositions')
        commit('code', payload.code);
        // commit('cursor', payload.cursor);
        commit('setPosCal',new PositionCalculator(getters.participants.Names()))
      }, debounce || 1000),
      positionParticipant: ({getters, commit}: any, payload: any) => {
        getters.posCal?.on({
          [payload.participant]: payload.position
        })
        // set participant position
        commit('setParticipantPositions', {
          participant: payload.participant,
          position: getters.posCal.getPosition(payload.participant)
        })
      },
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
