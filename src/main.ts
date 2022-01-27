import LogRocket from 'logrocket';
import createPlugin from 'logrocket-vuex';

import Vue from 'vue'
import Vuex from 'vuex'
// import log4V from './plugins/Log4V'
import {VueSequence} from './index'
import demo1 from './demo1.js'
import demo2 from './demo2.js'
import VueGtag from "vue-gtag";

LogRocket.init('ixkm5m/mylogrocket');
const logrocketPlugin = createPlugin(LogRocket);

// This is an example script - don't forget to change it!
LogRocket.identify('THE_USER_ID_IN_YOUR_APP_1', {
  name: 'James Morrison1',
  email: 'jamesmorrison1@example.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});

Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable */
Vue.use(VueGtag, {
  config: {
    id: 'UA-1234567-1'
  }
})

// store1.state.onLifelineMounted = function(vueComp, elm) {
//   console.log('Callback installed on', vueComp, elm)
// }
const storeConfig = VueSequence.Store(50);
// @ts-ignore
storeConfig.plugins = [logrocketPlugin];
const store1 = new Vuex.Store(storeConfig);
store1.dispatch('updateCode', {
  code: demo1
})
/**
 * el and render work together. They do nothing but replace el with a node created by 'h'.
 * There is no magic in 'h' it creates a "virtual node".
 * See https://vuejs.org/v2/guide/render-function.html#The-Virtual-DOM
 * These two Vue instances are rendered on public/index.html.
 * The previous version used h(App). That was kind of wrong, because when doing that we do not need to
 * define the seq-diagram component here.
 */
new Vue({el: '#demo1', store: store1, render: h => h(VueSequence.DiagramFrame) })
// const store2 = VueSequence.Store()
// store2.state.code = demo2
// new Vue({el: '#demo2', store: new Vuex.Store(store2), render: h => h(VueSequence.DiagramFrame) })
