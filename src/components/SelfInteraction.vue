<template>
  <div class="interaction self sync">
    <comment v-if="comment" :comment="comment" />
    <self-invocation :signature="signature"/>
    <occurrence :context="message" :participant="from" :offset="(offset || 0) + 6"/>
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
      message: function () {
        return this.context.message()
      },
      signature: function () {
        return this.message.signature().getCode()
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
