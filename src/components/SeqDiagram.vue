<template>
  <div class="sequence-diagram" ref="diagram" :style="{'padding-left': paddingLeft + 'px'}">
    <life-line-layer :context="rootContext.head()"/>
    <message-layer :context="rootContext.block()"/>
  </div>

</template>

<script>
  import LifeLineLayer from './lifeline/LifeLineLayer.vue'
  import MessageLayer from './MessageLayer.vue'
  import domtoimage from 'dom-to-image-more'
  import {mapGetters} from 'vuex'

  export default {
    name: 'seq-diagram',
    components: {
      LifeLineLayer,
      MessageLayer
    },
    computed: {
      ...mapGetters(['rootContext', 'generation', 'participants', 'lifelineLayout']),
      starter() {
        return this.participants?.Starter()?.name
      },
      paddingLeft () {
        return this.lifelineLayout.outerLeft(this.starter) * (-1) + 20
      },
    },
    methods: {
      toPng() {
        return domtoimage.toPng(this.$refs['diagram'], {})
      },
      toBlob() {
        return domtoimage.toBlob(this.$refs['diagram'], {})
      },
      toJpeg() {
        // It does not render the 'User' svg icon.
        return domtoimage.toJpeg(this.$refs['diagram'], { quality: 0.95, bgcolor: 'white' })
      }
    }
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
    padding: 8px 4px;
    min-width: 88px;
    max-width: 250px;
    text-align: center;
  }
</style>
