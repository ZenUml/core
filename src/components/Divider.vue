<template>
  <div class="fragment divider" :style="{width: width + 'px', transform: 'translateX(' + (-1) * centerOfFrom + 'px)'}">
    <div class="header">
      <div class="name"><label>{{name}}</label></div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'divider',
    props: ['context'],
    computed: {
      ...mapGetters(['participants', 'centerOf', 'rightOf']),
      /* Dividers have the same width as the lifeline layer */
      width() {
        let rearParticipant = this.participants.Names().pop()
        // 20px for the right margin of the participant
        return this.rightOf(rearParticipant) + 20
      },
      from: function() {
        return this.context.Origin()
      },
      centerOfFrom() {
        return this.centerOf(this.from)
      },
      name: function () {
        return this.context.divider().name().getText()
      }
    }
  }
</script>

<style scoped>
  .fragment.divider .header {
    text-align: center;
  }
</style>
