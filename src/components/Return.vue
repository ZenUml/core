<template>
  <div class="interaction return"
       v-on:click.stop="onClick"
       :data-signature="signature"
       :class="{ 'right-to-left':rightToLeft, 'highlight': isCurrent }"
       :style="{width: width + 'px', left: left + 'px'}">
    <comment v-if="comment" :comment="comment"/>
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
  import {CodeRange} from '@/parser/CodeRange'
  export default {
    name: 'return',
    props: ['context', 'comment'],
    computed: {
      ...mapGetters(['distance', 'cursor', 'onElementClick']),
      from: function() {
        return this.context.Origin()
      },
      asyncMessage: function () {
        return this.context?.ret().asyncMessage()
      },
      width: function () {
        return Math.abs(this.distance(this.target, this.source))
      },
      left: function () {
        return this.rightToLeft ? (this.distance(this.target, this.from) + 2): (this.distance(this.source, this.from) + 2)
      },
      rightToLeft: function () {
        return this.distance(this.target, this.source) < 0
      },
      signature: function () {
        return this.asyncMessage?.content()?.getFormattedText() || this.context?.ret()?.expr()?.getFormattedText()
      },
      source: function () {
        return this.asyncMessage?.from()?.getFormattedText() || this.from
      },
      target: function () {
        return this.asyncMessage?.to()?.getFormattedText() || this.context?.ret()?.ReturnTo()
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
    },
    components: {
      Comment,
      SelfInvocationAsync,
      Message
    }
  }
</script>
