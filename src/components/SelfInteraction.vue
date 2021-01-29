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
  import InteractionMixin from './InteractionMixin'

  export default {
    name: 'self-interaction',
    props: ['from', 'context', 'comment', 'offset'],
    mixins: [InteractionMixin],
    computed: {
      ...mapGetters(['distance']),
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
