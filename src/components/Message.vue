<template>
  <div class="message" :style="{'border-bottom-style': borderStyle}">
    <div class="name">{{content}}</div>
    <point :fill="fill" :rtl="rtl"/>
  </div>
</template>

<script type="text/babel">
  import Point from './Point'

  // An asynchronous Message (messageSort equals asynchCall or asynchSignal) has an open arrow head.
  // A synchronous Message (messageSort equals synchCall) has a filled arrow head.
  // A reply Message (messageSort equals reply) has a dashed line with either an open or filled arrow head.
  // An object creation Message (messageSort equals createMessage) has a dashed line with an open arrow head.
  export default {
    name: 'message',
    props: ['content', 'rtl', 'type'],
    computed: {
      borderStyle () {
        switch (this.type) {
          case 'sync':
          case 'async':
            return 'solid'
          case 'creation':
          case 'return':
            return 'dashed'
        }
      },
      fill () {
        switch (this.type) {
          case 'sync':
          case 'async':
            return true
          case 'creation':
          case 'return':
            return false
        }
      }
    },
    components: {
      Point
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .message {
    width: calc(100% - 16px);
    border-bottom-width: 2px;
    white-space: nowrap;
    font-family: 'Cabin Sketch', cursive;
  }

  .sync > .message {
    left: 8px;
  }
</style>
