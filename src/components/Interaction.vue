<template>
  <div class="interaction sync inline-block"
       v-on:click.stop="onClick"
       v-on:mouseover.stop="mouseOver"
       v-on:mouseout.stop="mouseOut"
       :signature="signature"
       :class="{ 'right-to-left':rightToLeft, 'highlight': isCurrent, 'self': isSelf, 'hover': hover }"
       :style="{left: left + 'px', transform: 'translateX(' + translateX + 'px)'}">
    <div v-if="showStarter && isRootBlock"
         :style="{transform: 'translateX(' + translateX * (-1) + 'px)'}"
         class="occurrence source"></div>
    <comment v-if="comment" :comment="comment"/>
    <component v-bind:is="invocation"
             :content="signature"
             :assignee="assignee"
             :rtl="rightToLeft"
             type="sync"></component>
    <occurrence :context="message" :participant="isSelf? from : to" :selfCallIndent="passOnOffset"/>
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
  import {CodeRange} from '@/parser/CodeRange'
  import {ProgContext} from '@/parser'

  export default {
    name: 'interaction',
    data() {
      return {
        hover: false
      }
    },
    props: ['context', 'comment', 'selfCallIndent', 'fragmentOffset'],
    mixins: [InteractionMixin],
    computed: {
      ...mapGetters(['rootContext', 'participants', 'distance', 'distance2', 'centerOf', 'cursor', 'onElementClick']),
      showStarter() {
        return this.participants.Starter().name !== '_STARTER_'
      },
      isRootBlock() {
        return this.context?.parentCtx?.parentCtx instanceof ProgContext
      },
      origin: function() {
        return this.context?.Origin()
      },
      passOnOffset: function() {
        // selfCallIndent is introduced for sync self interaction. Each time we enters a self sync interaction the selfCallIndent
        // increases by 6px (half of the width of an execution bar). However, we set the selfCallIndent back to 0 when
        // it enters a non-self sync interaction.
        return this.isSelf ? (this.selfCallIndent || 0) + 6 : 0
      },
      interactionWidth: function () {
        if (this.context && this.isSelf) {
          return 0
        }

        const dist = Math.abs(this.distance(this.from, this.to))
        if (this.outOfBand) {
          return dist
        }
        let safeOffset = this.selfCallIndent || 0
        if (!this.rightToLeft) {
          // Interaction width = dist
          return dist - safeOffset
        } else {
          return dist + safeOffset
        }
      },
      to: function () {
        return this.context?.message()?.messageBody()?.to()?.getTextWithoutQuotes()
      },
      isSelf: function() {
        return !this.context?.message()?.messageBody()?.to() || this.context?.message()?.messageBody()?.to().getTextWithoutQuotes() === this.from
      },
      invocation: function () {
        // return 'Message'
        return this.isSelf ? 'SelfInvocation' : 'Message'
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
      Message,
      SelfInvocation,
      Comment,
      Occurrence
    }
  }
</script>
<style scoped>
  .occurrence.source {
    position: absolute;
    height: calc(100% + 16px);
    left: -12px;
  }
</style>
