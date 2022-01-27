<template>
  <div class="message" :class="{ 'right-to-left':rtl }" :style="{'border-bottom-style': borderStyle}">
    <div class="name inline-block px-5">{{content}}</div>
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
        return ''
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
        return false
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
    box-sizing: content-box;
    /* 100% is the width of the content of interaction. */
    /* 100% + InteractionBorderWidth x 2 - ((OccurrenceWidth-1)/2)x2*/
    width: calc(100% - 4px);
    border-bottom-width: 2px;
    white-space: nowrap;
  }

  .message .name {
    min-height: 1em;
  }

  .sync > .message {
    /* (OccurrenceWidth-1)/2 - InteractionBorderWidth*/
    left: 2px;
  }

  .sync > .right-to-left.message {
    /* (OccurrenceWidth-1)/2 - InteractionBorderWidth + LifelineCenter*/
    left: 3px;
  }
</style>
