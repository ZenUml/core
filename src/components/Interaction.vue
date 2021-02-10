<template>
  <div class="interaction sync"
       v-on:click.stop="onClick"
       v-on:mouseover.stop="mouseOver"
       v-on:mouseout.stop="mouseOut"
       :signature="signature"
       :class="{ 'right-to-left':rightToLeft, 'highlight': isCurrent, 'self': isSelf, 'hover': hover }"
       :style="{width: interactionWidth + 'px', transform: 'translateX(' + translateX + 'px)'}">
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
  import {GetInheritedFrom} from '../parser'
  import {CodeRange} from '../parser/CodeRange'

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
      ...mapGetters(['starter', 'participants2', 'distance', 'distance2', 'centerOf', 'cursor', 'onElementClick']),
      inheritedFrom: function() {
        return GetInheritedFrom(this.context)
      },
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
        return this.func?.to()?.getCode()
      },
      isSelf: function() {
        return !this.context?.message().func().to() || this.context?.message().func().to().getCode() === this.from
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
