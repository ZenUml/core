<template>
  <div class="interaction self sync"
       :signature="signature">
    <comment v-if="comment" :comment="comment" />
    <self-invocation :signature="signature" :assignee="assignee"/>
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
      assignee: function () {
        function safeCodeGetter (context) {
          return (context && context.getCode()) || ''
        }
        let assignment = this.message.assignment()
        if (!assignment) return ''
        let assignee = safeCodeGetter(assignment.assignee())
        const type = safeCodeGetter(assignment.type())
        return assignee + (type ? ':' + type : '')
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
