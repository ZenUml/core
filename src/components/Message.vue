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
    // TODO: there is a big assumption that message is mounted after message layer
    // This has been made true only because block is import()'ed in occurrence!
    mounted () {
      let parent = this.$parent
      let to = parent.to
      let yOfMessageLayer = 0
      while(parent.$options.name !== 'message-layer') {
        parent = parent.$parent
      }
      yOfMessageLayer = parent.$el.getBoundingClientRect().y
      this.$store.commit('onMessageMounted', {
        entity: to,
        top: this.$el.getBoundingClientRect().y - yOfMessageLayer,
        type: this.type
      })
    },
    components: {
      Point
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .message {
    width: calc(100% - 14px);
    border-bottom-width: 2px;
    white-space: nowrap;
  }

  .sync > .message {
    left: 6px;
  }
</style>
