<template>
  <div class="interaction self sync"
       :signature="signature"
       :style="{transform: 'translateX(' + translateX + 'px)'}"
  >
    <comment v-if="comment" :comment="comment" />
    <self-invocation :signature="signature" :assignee="assignee"/>
    <occurrence :context="message" :participant="realFrom" :offset="(offset || 0) + 6"/>
  </div>
</template>

<script type="text/babel">
  import Comment from './Comment.vue'
  import Occurrence from './Occurrence.vue'
  import SelfInvocation from './SelfInvocation'
  import {mapGetters} from "vuex";

  export default {
    name: 'self-interaction',
    props: ['from', 'context', 'comment', 'offset'],
    computed: {
      ...mapGetters(['distance']),
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
      translateX: function() {
        let offsetFrom = this.distance(this.realFrom, this.from);
        if (this.rightToLeft) {
          return offsetFrom - this.interactionWidth;
        }
        return offsetFrom
      },
      realFrom: function() {
        return this.message.func().from() && this.message.func().from().getCode() || this.from
      },
      signature: function () {
        return this.message.func().signature().map(s => s.getCode()).join('.')
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
