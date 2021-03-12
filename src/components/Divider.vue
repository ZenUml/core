<template>
  <div class="divider" :style="{width: width + 'px', transform: 'translateX(' + ((-1) * centerOfFrom + fragmentOffset) + 'px)'}">
    <div class="left"></div>
    <div class="name">{{name}}</div>
    <div class="right"></div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'divider',
    props: ['context', 'fragmentOffset'],
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
        return this.context.divider().name().getTextWithoutQuotes()
      }
    }
  }
</script>

<style scoped>
.divider {
  display: flex;
  align-items: center;
}
.name {
  margin: 0 5px;
}
.left, .right {
  height: 1px;
  flex-grow: 1;
}
</style>
