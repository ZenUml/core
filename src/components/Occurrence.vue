<template>
  <div class="occurrence" data-el-type="occurrence" :data-belongs-to="participant" :data-x-offset="center" :data-debug-center-of="computedCenter">
    {{participant}}
    <block v-if="this.context.braceBlock()"
           :context="context.braceBlock().block()"
           :selfCallIndent="selfCallIndent"
    ></block>
  </div>
</template>

<script type="text/babel">
import {mapState, mapGetters} from 'vuex'

  export default {
    name: 'occurrence',
    props: ['context', 'selfCallIndent', 'participant'],
    data: function () {
      return {
        center: 0,
      }
    },
    computed: {
      ...mapGetters(['centerOf', 'messageLayerLeft']),
      ...mapState(['code']),
      computedCenter: function () {
        try {
          return this.centerOf(this.participant)
        } catch (e) {
          console.error(e)
          return 0
        }
      },
    },
    beforeCreate: function () {
      this.$options.components.Block = require('./Block.vue').default
    },
    mounted: function () {
    },
  }
</script>

<style scoped>

  >>> >.statement-container:last-child>.interaction.return:last-of-type {
    margin-bottom: 0;
    border-bottom: 0;
    transform: translateY(1px);
  }

  >>> >.statement-container:last-child>.interaction.return:last-of-type>.message {
    position: absolute;
  }

</style>

<style>
  .occurrence {
    margin-top: -2px; /* To offset Message's border-bottom width */
  }
</style>
