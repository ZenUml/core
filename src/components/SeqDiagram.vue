<template>
  <div class="sequence-diagram" >
    <life-line-layer/>
    <message-layer/>
  </div>
</template>

<script>
  import LifeLineLayer from './LifeLineLayer.vue'
  import MessageLayer from './MessageLayer.vue'

  export default {
    name: 'seq-diagram',
    components: {
      LifeLineLayer,
      MessageLayer
    }
  }
</script>

<style>
  *, *:before, *:after {
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
