import Vue from 'vue'
import Vuex from 'vuex'
// import log4V from './plugins/Log4V'

import {Frame, SeqDiagram, Store, BuildTime, Version} from './index'

Vue.use(Vuex)
// Vue.use(log4V)

Vue.component('seq-diagram', SeqDiagram)
Vue.component('frame', Frame)

Vue.config.productionTip = false

/* eslint-disable */
console.log('----------', Version)
console.log('----------', BuildTime)
import demo1 from './demo1.js'
import demo2 from './demo2.js'
import './assets/tailwind.css'
const store1 = Store(50)
store1.state.code = demo1
// store1.state.onLifelineMounted = function(vueComp, elm) {
//   console.log('Callback installed on', vueComp, elm)
// }
/**
 * el and render work together. They do nothing but replace el with a node created by 'h'.
 * There is no magic in 'h' it creates a "virtual node".
 * See https://vuejs.org/v2/guide/render-function.html#The-Virtual-DOM
 * These two Vue instances are rendered on public/index.html.
 * The previous version used h(App). That was kind of wrong, because when doing that we do not need to
 * define the seq-diagram component here.
 */
new Vue({el: '#demo1', store: new Vuex.Store(store1), render: h => h('frame') })
const store2 = Store()
store2.state.code = demo2
new Vue({el: '#demo2', store: new Vuex.Store(store2), render: h => h('frame') })
