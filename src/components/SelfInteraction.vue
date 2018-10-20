<template>
  <div class="interaction self sync">
    <comment v-if="comment" :comment="comment" />
    <self-invocation :signature="methodSignature"/>
    <occurrence :context="context" :participant="from" :offset="(offset || 0) + 6"/>
  </div>
</template>

<script type="text/babel">
  import Comment from './Comment.vue'
  import Occurrence from './Occurrence.vue'
  import SelfInvocation from './SelfInvocation'

  export default {
    name: 'self-interaction',
    props: ['from', 'context', 'comment', 'offset'],
    computed: {
      methodSignature: function () {
        return this.context.signature().getCode()
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

</style>
