<template>
  <div class="interaction self async" :style="{ left: (left) + 'px' }">
    <comment v-if="comment" :comment="comment"/>
    <self-invocation :signature="methodSignature"/>
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
      left: function () {
        return this.$store.getters.distance(this.to, this.from)
      },
      methodSignature: function () {
        return this.context.content().getCode()
      },
      to: function () {
        return this.context.target().getCode()
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
