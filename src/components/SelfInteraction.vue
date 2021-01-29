<template>
  <div class="interaction self sync"
       :signature="signature"
       :class="{ 'highlight': isCurrent }"
       :style="{width: interactionWidth + 'px', transform: 'translateX(' + translateX + 'px)'}"
  >
    <comment v-if="comment" :comment="comment" />
    <self-invocation :content="signature" :assignee="assignee"/>
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
      ...mapGetters(['distance', 'cursor']),
      interactionWidth: function () {
        const leftOfMessage = 30
        const averageWidthOfChar = 10
        return averageWidthOfChar * (this.assignee.length + this.signature.length) + leftOfMessage
      }
    },
    components: {
      Comment,
      SelfInvocation,
      Occurrence
    }
  }
</script>
