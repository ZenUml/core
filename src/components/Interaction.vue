<template>
  <div class="interaction sync inline-block"
       v-on:click.stop="onClick"
       v-on:mouseover.stop="mouseOver"
       v-on:mouseout.stop="mouseOut"
       :data-to="to"
       data-type="interaction"
       :data-signature="signature"
       :class="{ 'highlight': isCurrent, 'self': isSelf, 'hover': hover }"
       :style="{width: interactionWidth + 'px', left: left + 'px', transform: 'translateX(' + translateX + 'px)'}">
    <div v-if="showStarter && isRootBlock"
         :style="{transform: 'translateX(' + translateX * (-1) + 'px)'}"
         class="occurrence source"></div>
    <comment v-if="comment" :comment="comment"/>
    <component v-bind:is="invocation"
               class="text-center"
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
    props: ['context', 'comment', 'selfCallIndent'],
    computed: {
      // add tracker to the mapGetters
      ...mapGetters(['participants', 'distance2', 'cursor', 'onElementClick']),
      message: function () {
        return this.context?.message()
      },
      providedFrom: function() {
        return this.context?.message()?.ProvidedFrom()
      },
      from: function() {
        return this.providedFrom || this.origin
      },
      outOfBand: function() {
        return !!this.providedFrom && (this.providedFrom !== this.origin)
      },
      assignee: function () {
        function safeCodeGetter (context) {
          return (context && context.getTextWithoutQuotes()) || ''
        }
        let assignment = this.message?.messageBody().assignment()
        if (!assignment) return ''
        let assignee = safeCodeGetter(assignment.assignee())
        const type = safeCodeGetter(assignment.type())
        return assignee + (type ? ':' + type : '')
      },
      signature: function () {
        return this.message?.SignatureText()
      },
      left: function() {
        const indent = this.selfCallIndent || 0
        return indent * (-1)
      },
      translateX: function() {
        const indent = this.selfCallIndent || 0
        const fragmentOff = 0 || 0
        // ** Starting point is always the center of 'origin' **
        // Normal flow
        if(!this.rightToLeft && !this.outOfBand) {
          // + indent because we always start from the center of origin
          // starting point is moved back to the center of origin by 'left'
          return indent + fragmentOff
        }

        const moveTo = !this.rightToLeft ? this.providedFrom : this.to
        const dist = this.distance2(this.origin, moveTo)
        return dist + fragmentOff
      },
      rightToLeft: function () {
        return this.distance2(this.from, this.to) < 0
      },
      isCurrent: function () {
        return this.message?.isCurrent(this.cursor);
      },
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
        // selfCallIndent is introduced for sync self interaction. Each time we enter a self sync interaction the selfCallIndent
        // increases by 6px (half of the width of an execution bar). However, we set the selfCallIndent back to 0 when
        // it enters a non-self sync interaction.
        return this.isSelf ? (this.selfCallIndent || 0) + 6 : 0
      },
      interactionWidth: function () {
        if (this.context && this.isSelf) {
          return 0
        }

        let safeOffset = this.outOfBand ? 0: (this.selfCallIndent || 0)
        return Math.abs(this.distance2(this.from, this.to) - safeOffset)
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
    updated() {
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
