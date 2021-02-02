<template>
  <div class="interaction async"
       :signature="signature"
       :class="{ 'right-to-left':rightToLeft, 'highlight': isCurrent }"
       :style="{width: interactionWidth + 'px', left: left + (fragmentOffset || 0) + 'px'}">
    <comment v-if="comment" :comment="comment"/>
<!--    <message :content="signature" :rtl="rightToLeft" type="async"/>-->
    <component v-bind:is="invocation"
               :content="signature"
               :rtl="rightToLeft"
               type="async" />
    <div class="invisible-occurrence"></div>
  </div>
</template>

<script type="text/babel">
  import Comment from './Comment.vue'
  import SelfInvocationAsync from './SelfInvocation-async'
  import Message from './Message'
  import {mapGetters} from "vuex";
  import {GetInheritedFrom} from '../parser'

  function isNullOrUndefined(value) {
    return value === null || value === undefined
  }

  export default {
    name: 'interaction-async',
    props: ['starter', 'context', 'comment', 'fragmentOffset'],
    computed: {
      ...mapGetters(['distance', 'cursor']),
      from: function() {
        return GetInheritedFrom(this.context)
      },
      asyncMessage: function () {
        return this.context?.asyncMessage()
      },
      interactionWidth: function () {
        return Math.abs(this.distance(this.target, this.source)) + 1
      },
      left: function () {
        return this.rightToLeft ? this.distance(this.target, this.from) : this.distance(this.source, this.from)
      },
      rightToLeft: function () {
        return this.distance(this.target, this.source) < 0
      },
      signature: function () {
        return this.asyncMessage?.content()?.getCode()
      },
      source: function () {
        return this.asyncMessage?.source()?.getCode() || this.from
      },
      target: function () {
        return this.asyncMessage?.target()?.getCode()
      },
      isCurrent: function () {
        const start = this.asyncMessage.start.start
        const stop = this.asyncMessage.stop.stop + 1
        if (isNullOrUndefined(this.cursor) || isNullOrUndefined(start) || isNullOrUndefined(stop)) return false
        return this.cursor >= start && this.cursor <= stop
      },
      isSelf: function () {
        return this.source === this.target
      },
      invocation: function () {
        return this.isSelf ? 'SelfInvocationAsync' : 'Message'
      }
    },
    components: {
      Comment,
      SelfInvocationAsync,
      Message
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .interaction .invisible-occurrence {
    height: 20px;
  }

  .interaction.async >>> .message {
    width: 100%;
  }
</style>
