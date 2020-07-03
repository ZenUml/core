<template>
  <div class="sequence-diagram" >
    <div ref="dsl" class="zenuml-dsl">
      <slot></slot>
    </div>
    <life-line-layer/>
    <message-layer/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import LifeLineLayer from './LifeLineLayer.vue'
  import MessageLayer from './MessageLayer.vue'
  import Store from '../store'

  Vue.use(Vuex)
  const store = new Vuex.Store(Store)
  export default {
    store,
    name: 'seq-diagram',
    components: {
      LifeLineLayer,
      MessageLayer
    },
    mounted() {
      const that = this
      // Looks like we have to use setTimeout. The approach below does not work on confluence.
      setTimeout(function () {
        store.dispatch('updateCode', { code: that.$slots.default[0].text || 'Example.method'})
      })
      // // Callback function to execute when mutations are observed
      // const callback = function(mutationsList) {
      //   // Use traditional 'for loops' for IE 11
      //   for(let mutation of mutationsList) {
      //     if (mutation.type === 'childList') {
      //       store.dispatch('updateCode', { code: mutation.addedNodes[0]?.textContent || 'Example.method'})
      //     }
      //   }
      // }
      //
      // // Create an observer instance linked to the callback function
      // const observer = new MutationObserver(callback);
      //
      // // Start observing the target node for configured mutations
      // // The slot is added after $nextTick. Chaining next tick does not work.
      // const targetNode = this.$refs['dsl'];
      // // Options for the observer (which mutations to observe)
      // const config = { childList: true};
      // observer.observe(targetNode, config);
    }
  }
</script>

<style>
  @import "Cosmetic.css";
  .sequence-diagram * {
    box-sizing: inherit;
  }

  .sequence-diagram {
    position: relative;     /* Make sure its descendants can be positioned */
    box-sizing: border-box; /* Reset box-sizing for the diagram */
    line-height: normal;    /* Reset line-height for the diagram */
    text-align: left;
  }

  /* .participant is shared by MessageLayer and LifeLineLayer */
  .participant {
    padding: 8px 4px;
    min-width: 88px;
    max-width: 250px;
    text-align: center;
  }

</style>
