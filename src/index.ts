import _ from 'lodash'
import {GroupContext, ParticipantContext, Participants, RootContext} from './parser/index.js'

import SeqDiagram from './components/SeqDiagram.vue'

import './components/Cosmetic.scss'
import './components/theme-blue-river.scss'
import {CodeRange} from './parser/CodeRange'
import {LifelineLayout} from "@/components/lifeline/LifelineLayout";

const Store = (debounce?: number) => {
  return {
    state: {
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
      lifelineLayout: (state: any, getters: any) => {
        const participantsLabels = getters.participants.Array().map((p: { label: any; name: any }) => p.label || p.name);
        return LifelineLayout(participantsLabels)
      },
      centerOf: (state: any, getters: any) => (entity: any) => {
        return getters.lifelineLayout.center(entity)
      },
      leftOf: (state: any, getters: any) => (entity: any) => {
        return getters.lifelineLayout.left(entity)
      },
      rightOf: (state: any, getters: any) => (entity: any) => {
        return getters.lifelineLayout.right(entity)
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
export {
  Version,
  BuildTime,
  Store,
  SeqDiagram
}
