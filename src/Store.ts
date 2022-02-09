import _, {now} from 'lodash'
import {RootContext, Participants, GroupContext, ParticipantContext} from './parser/index.js'

import WidthProviderOnBrowser from "@/positioning/WidthProviderFunc";
import {Coordinates} from "@/positioning/Coordinates";

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
      selected: [],
      cursor: null,
      firstInvocations: {},
    },
    getters: {
      title: (state: any, getters: any) => {
        return getters.rootContext?.title()?.content()
      },
      GroupContext: () => GroupContext,
      ParticipantContext: () => ParticipantContext,
      firstInvocations: (state: any) => state.firstInvocations,
      cursor: (state: any) => state.cursor,
      rootContext: (state: any) => {
        return RootContext(state.code)
      },
      participants: (state: any, getters: any) => {
        return Participants(getters.rootContext, true)
      },
      centerOf: (state: any, getters: any) => (entity: any) => {
        try {
          const coordinates = new Coordinates(getters.rootContext, WidthProviderOnBrowser);
          return coordinates.getPosition(entity) || 0
        } catch (e) {
          console.error(e)
          return 0
        }
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
export default Store
