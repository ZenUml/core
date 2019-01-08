<template>
  <div class="message" :style="{'border-bottom-style': borderStyle}">
    <div class="name">{{content}}</div>
    <point fill="true" :rtl="rtl"/>
  </div>
</template>

<script type="text/babel">
  import Point from './Point'

  export default {
    name: 'message',
    props: ['content', 'rtl', 'type'],
    computed: {
      borderStyle () {
        switch (this.type) {
          case 'sync':
          case 'async':
          case 'creation':
            return 'solid'
          case 'return':
            return 'dashed'
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
  }

  .sync > .message {
    left: 8px;
  }
</style>
