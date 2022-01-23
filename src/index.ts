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
// @ts-ignore
import PositionCalculator from './utils/position.calculator'
// @ts-ignore
import PosCal2 from './utils/posCal2'

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
      code: '',
      coordinates: [
        {participant: '_STARTER_', gap:0, width: 10 },
        {participant: 'A', gap:100, width: 10 },
        {participant: 'B', gap:100, width: 10 },
        {participant: 'C', gap:150, width: 10}
      ]
    },
    getters: {
      // get coordinates
      coordinates: (state: any) => {
        return state.coordinates
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
        return new PosCal2(state.coordinates).getPosition(entity)
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
      code: function (state: any, payload: any) {
        state.code = payload;
      },
      mutateCoordinates: function (state: any, payload: any) {
        state.coordinates = payload;
      }
    },
    actions: {
      // Why debounce is here instead of mutation 'code'?
      // Both code and cursor must be mutated together, especially during typing.
      updateCode: _.debounce(function ({commit, getters}: any, payload: any) {
        if (typeof payload === 'string') {
          throw Error('You are using a old version of vue-sequence. New version requires {code, cursor}.')
        }
        commit('code', payload.code);
        // // construct updateParticipants
        // let unpositionedParticipants = getters.participants.Names().map((name: string) => ({
        //   participant: name,
        //   gap: 0,
        //   width: 0
        // }))
        // // reset coordinates
        // commit('mutateCoordinates', unpositionedParticipants)
      }, debounce || 1000),
      updateCoordinates: ({commit, getters}: any, payload: any) => {
        let coordinates = getters.coordinates;
        // find the participant in coordinates by name in payload.participant and replace gap with gap in payload
        const updatedCoordinates = coordinates.map((coordinate: any) => {
          if (coordinate.participant === payload.participant) {
            coordinate.gap = payload.gap
          }
          return coordinate
        });
        commit('mutateCoordinates', updatedCoordinates)
      }
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
