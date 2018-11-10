<template>
  <div class="interaction self async"
       :signature="signature"
       :style="{ left: (left) + 'px' }">
    <comment v-if="comment" :comment="comment"/>
    <self-invocation :signature="signature"/>
  </div>
</template>

<script type="text/babel">
  import Comment from './Comment.vue'
  import SelfInvocation from './SelfInvocation'
  import Occurrence from './Occurrence.vue'

  export default {
    name: 'self-interaction-async',
    props: ['from', 'context', 'comment'],
    computed: {
      asyncMessage: function () {
        return this.context.asyncMessage()
      },
      left: function () {
        return this.$store.getters.distance(this.to, this.from)
      },
      signature: function () {
        return this.asyncMessage.content().getCode().replace(/^:+/g, '')
      },
      to: function () {
        return this.asyncMessage.target().getCode()
      }
    },
    components: {
      Comment,
      SelfInvocation,
      Occurrence
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .self > .comments {
    transform: translateY(-4px);
  }
</style>
