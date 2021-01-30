<template>
  <div class="interaction self async"
       :signature="signature"
       :style="{ left: left + 'px' }">
    <comment v-if="comment" :comment="comment"/>
    <self-invocation-async :signature="signature"/>
  </div>
</template>

<script type="text/babel">
  import Comment from './Comment.vue'
  import SelfInvocationAsync from './SelfInvocation-async'
  import Occurrence from './Occurrence.vue'
  import {mapGetters} from "vuex";

  export default {
    name: 'self-interaction-async',
    props: ['from', 'context', 'comment', 'fragmentOffset'],
    computed: {
      ...mapGetters(['distance']),
      asyncMessage: function () {
        return this.context.asyncMessage()
      },
      left: function () {
        return this.distance(this.to, this.from) + (this.fragmentOffset || 0)
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
      SelfInvocationAsync,
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
