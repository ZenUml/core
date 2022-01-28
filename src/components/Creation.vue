<!--TODO: this can be implemented without globally calculated width!-->
<template>
  <div class="interaction creation sync"
       v-on:click.stop="onClick"
       v-on:mouseover.stop="mouseOver"
       v-on:mouseout.stop="mouseOut"
       :signature="signature"
       :class="{ 'right-to-left':rightToLeft, 'highlight': isCurrent, 'hover': hover }"
       :style="style">
    <comment v-if="comment" :comment="comment" />
    <!-- h-10 to push occurrence down -->
    <div class="message-container h-10">
      <!-- TODO: replace the following with a participant component. -->
      <div ref="participantPlaceHolder"
           class="participant invisible absolute right-0 flex flex-col justify-center">
        <!-- Put in a div to give it a fixed height, because stereotype is dynamic. -->
        <div class="h-5 flex flex-col justify-center">
          <label class="name">{{ to }}</label>
        </div>
      </div>
      <message ref="messageEl" class="invocation" :content="signature" :rtl="rightToLeft" type="creation"/>
    </div>
    <occurrence :context="creation" :participant="to"/>
    <message class="return" v-if="assignee" :content="assignee" :rtl="!rightToLeft" type="return"/>
  </div>
</template>

<script type="text/babel">
  import {mapGetters} from 'vuex'
  import Comment from './Comment.vue'
  import Message from './Message'
  import Occurrence from './Occurrence'
  import {CodeRange} from '@/parser/CodeRange'

  export default {
    name: 'creation',
    data() {
      return {
        hover: false
      }
    },
    props: ['context', 'comment', 'selfCallIndent', 'fragmentOffset'],
    computed: {
      ...mapGetters(['cursor', 'onElementClick', 'distance', 'centerOf', 'rightOf', 'leftOf', 'widthOf']),
      style: function() {
        const ret = {
          width: Math.abs(this.interactionWidth) + 'px'
        }
        if (!this.rightToLeft) {
          ret.transform = 'translateX(' + this.fragmentOffset + 'px)'
        }
        return ret
      },
      from: function() {
        return this.context.Origin()
      },
      creation: function () {
        return this.context.creation()
      },
      interactionWidth: function () {
        let distance = this.distance(this.to, this.from)
        let safeOffset = this.selfCallIndent || 0
        if(this.rightToLeft) {
          return Math.abs(distance) + safeOffset
        }
        return Math.abs(distance) - safeOffset
      },
      rightToLeft: function () {
        return this.distance(this.to, this.from) < 0
      },
      signature: function () {
        return this.creation.SignatureText()
      },
      assignee: function () {
        function safeCodeGetter (context) {
          return (context && context.getTextWithoutQuotes()) || ''
        }
        let assignment = this.creation.creationBody().assignment()
        if (!assignment) return ''
        let assignee = safeCodeGetter(assignment.assignee())
        const type = safeCodeGetter(assignment.type())
        return assignee + (type ? ':' + type : '')
      },
      to: function () {
        return this.creation.Owner()
      },
      isCurrent: function () {
        return this.creation.isCurrent(this.cursor)
      }
    },
    mounted() {
      this.layoutMessageContainer()
    },
    updated() {
      this.layoutMessageContainer()
    },
    methods: {
      layoutMessageContainer() {
        const halfWidthOfPlaceholder = this.$refs['participantPlaceHolder'].offsetWidth / 2;
        this.$refs['participantPlaceHolder'].style.marginRight = (-1) * (halfWidthOfPlaceholder + 6) + 'px'
        this.$refs['messageEl'].$el.style.participantWidth = `calc(100% - ${halfWidthOfPlaceholder}px`
      },
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
      Occurrence,
      Message
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .interaction.creation.right-to-left {
    transform: translateX(-100%);
  }

  .participant.place-holder {
    margin-top: -19px;
    white-space: nowrap;
  }

  .creation.right-to-left > .message.invocation {
    /* 3 = (15:occurrenceWidth - 1) / 2 - 5:InteractionBorderWidth
    We can also set right: 3px; but we will also need to reset left: auto */
    left: -2px;
    /* moving .message to the right so that margin will take up the "available" space. It works like float: right.
       But this won't remove .message from the flow.
     */
    margin-left: auto;
  }

  .right-to-left > .occurrence {
    left: -8px;
  }

</style>
