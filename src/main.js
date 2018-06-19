import Vue from 'vue'
import Vuex from 'vuex'
import cloneDeep from './clone-deep'
// import log4V from './plugins/Log4V'
import App from './App.vue'


import {SeqDiagram, Store} from './index'

Vue.use(Vuex)
// Vue.use(log4V)

Vue.component('seq-diagram', SeqDiagram)

Vue.config.productionTip = false

/* eslint-disable */
import demo1 from './demo1.js'
import demo2 from './demo2.js'
import demo3 from './demo3.js'
import demo4 from './demo4.js'
import demo5 from './demo5.js'
import demo6 from './demo6.js'

function snapshotStore (code) {
  Store.state.code = code
  return new Vuex.Store(cloneDeep({modules: {Store}}))
}
Store.state.code = demo1
new Vue({el: '#app', store: new Vuex.Store(Store), render: h => h(App)})
// new Vue({el: '#demo1', store: snapshotStore(demo1)})
// new Vue({el: '#demo2', store: snapshotStore(demo2)})
// new Vue({el: '#demo3', store: snapshotStore(demo3)})
// new Vue({el: '#demo4', store: snapshotStore(demo4)})
// new Vue({el: '#demo5', store: snapshotStore(demo5)})
// new Vue({el: '#demo6', store: snapshotStore(demo6)})
