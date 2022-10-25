import Vue from 'vue'
import Vuex from 'vuex'
import {VueSequence} from './index'
import demo1 from './demo1.js'
Vue.use(Vuex)

Vue.config.productionTip = false

/**
 * el and render work together. They do nothing but replace el with a node created by 'h'.
 * There is no magic in 'h' it creates a "virtual node".
 * See https://vuejs.org/v2/guide/render-function.html#The-Virtual-DOM
 */

// find the fist element with tag `pre` and class `zenuml`
const elm = document.querySelector('pre.zenuml');
// get the code from the element
const code = elm?.textContent;
// create a new store
const store = VueSequence.Store();
// dispatch the code to the store
// @ts-ignore
store.state.code = code;
// create a new Vue instance
// @ts-ignore
new Vue({el: elm, store: new Vuex.Store(store), render: h => h(VueSequence.DiagramFrame) })
