<template>
  <div class="interaction return"
       v-on:click.stop="onClick"
       v-on:mouseover.stop="mouseOver"
       v-on:mouseout.stop="mouseOut"
       :signature="signature"
       :class="{ 'right-to-left':rightToLeft, 'highlight': isCurrent, 'hover': hover }"
       :style="{width: interactionWidth + 'px', left: left + (fragmentOffset || 0) + 'px'}">
    <comment v-if="comment" :comment="comment"/>
<!--    <message :content="signature" :rtl="rightToLeft" type="async"/>-->
    <component v-bind:is="invocation"
               :content="signature"
               :rtl="rightToLeft"
               type="return" />
  </div>
</template>

<script type="text/babel">
  import Comment from './Comment.vue'
  import SelfInvocationAsync from './SelfInvocation-async'
  import Message from './Message'
  import {mapGetters} from "vuex";
  import {CodeRange} from '../parser/CodeRange'
  export default {
    name: 'return',
    data() {
      return {
        hover: false
      }
    },
    props: ['context', 'comment', 'fragmentOffset'],
    computed: {
      ...mapGetters(['distance', 'cursor', 'onElementClick']),
      from: function() {
        return this.context.Origin()
      },
      asyncMessage: function () {
        return this.context?.asyncMessage()
      },
      interactionWidth: function () {
        if (this.isSelf) {
          const leftOfMessage = 100
          const averageWidthOfChar = 10
          return averageWidthOfChar * (this.signature?.length || 0) + leftOfMessage
        }
        return Math.abs(this.distance(this.target, this.source)) + 1
      },
      left: function () {
        return this.rightToLeft ? this.distance(this.target, this.from) : this.distance(this.source, this.from)
      },
      rightToLeft: function () {
        return this.distance(this.target, this.source) < 0
      },
      signature: function () {
        return this.context?.ret()?.expr()?.getTextWithoutQuotes()
      },
      source: function () {
        return this.asyncMessage?.source()?.getTextWithoutQuotes() || this.from
      },
      target: function () {
        return this.context?.ret()?.getReturnTo()
      },
      isCurrent: function () {
        return false
      },
      isSelf: function () {
        return this.source === this.target
      },
      invocation: function () {
        return this.isSelf ? 'SelfInvocationAsync' : 'Message'
      }
    },
    methods: {
      onClick() {
        this.onElementClick(CodeRange.from(this.context))
      },
      mouseOver() {
        this.hover = true
      },
      mouseOut() {
        this.hover = false
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
  .interaction.return {
    /*height: 0;*/
    /*margin-bottom: -6px; !* Occurrence padding bottom *!*/
  }
  .interaction.return >>> .message {
    width: 100%;
  }
</style>
