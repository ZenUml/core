<template>
  <div class="sequence-diagram" :style="{'width': width + 'px'}">
    <name/>
    <life-line-layer/>
    <message-layer/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Name from './Name.vue'
  import LifeLineLayer from './LifeLineLayer.vue'
  import MessageLayer from './MessageLayer.vue'

  export default {
    name: 'seq-diagram',
    computed: {
      ...mapGetters(['distance', 'participants', 'starter']),
      width() {
        return this.distance(this.participants[this.participants.length - 1], this.starter) + 150
      }
    },
    components: {
      Name,
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
    display: inline-block;
    position: relative;     /* Make sure its descendants can be positioned */
    box-sizing: border-box; /* Reset box-sizing for the diagram */
    line-height: normal;    /* Reset line-height for the diagram */
    text-align: left;
    border: 2px solid rgba(3, 3, 3, 0.05);
  }

  /* .participant is shared by MessageLayer and LifeLineLayer */
  .participant {
    padding: 8px 4px;
    min-width: 88px;
    max-width: 250px;
    text-align: center;
  }
</style>
