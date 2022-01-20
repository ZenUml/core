<template>
  <div class="occurrence" :data-belongs-to="participant" :data-x-offset="center">
    <block v-if="this.context.braceBlock()"
           :context="context.braceBlock().block()"
           :selfCallIndent="selfCallIndent"
    ></block>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'occurrence',
    props: ['context', 'selfCallIndent', 'participant'],
    data: function () {
      return {
        center: 0,
      }
    },
    beforeCreate: function () {
      this.$options.components.Block = require('./Block.vue').default
    },
    mounted() {
      // get the offset position of the element
      this.offset = this.$el.getBoundingClientRect()
      this.center = this.offset.left + this.offset.width / 2
      // update $store.participantPositions with the center of this occurrence
      this.$store.dispatch('positionParticipant', {
        participant: this.participant,
        position: this.center,
      })
    }
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
