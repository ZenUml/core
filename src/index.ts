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
import {PosCal3} from "@/positioning/PosCal3";
import WidthProviderOnBrowser from "@/positioning/WidthProviderFunc";
import {PosCal2} from "@/positioning/PosCal2";

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
    },
    getters: {
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
        const coordinates2 = new PosCal3().getCoordinates2(getters.rootContext, WidthProviderOnBrowser);
        const posCal2 = new PosCal2(coordinates2);
        return posCal2.getPosition(entity) || 0
      },
      leftOf: (state: any, getters: any) => (entity: any) => {
        return getters.centerOf(entity) - 10
      },
      rightOf: (state: any, getters: any) => (entity: any) => {
        return getters.centerOf(entity) + 10
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
    },
    actions: {
      // Why debounce is here instead of mutation 'code'?
      // Both code and cursor must be mutated together, especially during typing.
      updateCode: _.debounce(function ({commit, getters}: any, payload: any) {
        if (typeof payload === 'string') {
          throw Error('You are using a old version of vue-sequence. New version requires {code, cursor}.')
        }
        commit('code', payload.code);
      }, debounce || 1000),
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
