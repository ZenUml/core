<template>
  <div class="sequence-diagram overflow-visible px-8" :style="{width: `${width}px`}" ref="diagram" >
    <life-line-layer :context="rootContext.head()"/>
    <message-layer :context="rootContext.block()"/>
  </div>
</template>

<script>
  import LifeLineLayer from './lifeline/LifeLineLayer.vue'
  import MessageLayer from './MessageLayer.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 'seq-diagram',
    components: {
      LifeLineLayer,
      MessageLayer
    },
    computed: {
      ...mapGetters(['rootContext', 'coordinates']),
      width() {
        return this.coordinates.getWidth() + 100;
      },
    },
  }
</script>

<style>
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
    border-width: 2px; /* don't put it in cosmetic or theme css */
    padding: 8px 4px;
    min-width: 88px;
    max-width: 250px;
    text-align: center;
  }
</style>
