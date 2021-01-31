<template>
  <div class="interaction sync"
       :signature="signature"
       :class="{ 'right-to-left':rightToLeft, 'highlight': isCurrent, 'self': isSelf }"
       :style="{width: interactionWidth + 'px', transform: 'translateX(' + translateX + 'px)'}">
    <comment v-if="comment" :comment="comment"/>
    <component v-bind:is="invocation"
             :content="signature"
             :assignee="assignee"
             :rtl="rightToLeft"
             type="sync"></component>
    <occurrence :context="message" :participant="isSelf? realFrom : to" :selfCallIndent="passOnOffset"/>
    <message class="return" v-if="assignee && !isSelf" :content="assignee" :rtl="!rightToLeft" type="return"/>
  </div>
</template>

<script type="text/babel">
  import Comment from './Comment.vue'
  import Occurrence from './Occurrence.vue'
  import Message from './Message'
  import {mapGetters} from "vuex";
  import InteractionMixin from './InteractionMixin'
  import SelfInvocation from './SelfInvocation'

  export default {
    name: 'interaction',
    props: ['from', 'context', 'comment', 'selfCallIndent', 'fragmentOffset'],
    mixins: [InteractionMixin],
    computed: {
      ...mapGetters(['starter', 'distance', 'cursor']),
      passOnOffset: function() {
        // selfCallIndent is introduced for sync self interaction. Each time we enters a self sync interaction the selfCallIndent
        // increases by 6px (half of the width of an execution bar). However, we set the selfCallIndent back to 0 when
        // it enters a non-self sync interaction.
        return this.isSelf ? (this.selfCallIndent || 0) + 6 : 0
      },
      interactionWidth: function () {
        if (this.context && this.isSelf) {
          const leftOfMessage = 30
          const averageWidthOfChar = 10
          return averageWidthOfChar * (this.assignee?.length + this.signature?.length) + leftOfMessage
        }
        let distance = this.distance(this.to, this.realFrom)
        let safeOffset = this.selfCallIndent || 0
        // +1 for the added border
        return Math.abs(distance - safeOffset) + 1
      },
      to: function () {
        return this.func?.to()?.getCode()
      },
      isSelf: function() {
        return !this.context?.message().func().to() || this.context?.message().func().to().getCode() === this.realFrom
      },
      invocation: function () {
        // return 'Message'
        return this.isSelf ? 'SelfInvocation' : 'Message'
      }
    },
    components: {
      Message,
      SelfInvocation,
      Comment,
      Occurrence
    }
  }
</script>
