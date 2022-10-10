<template>
  <div class="interaction creation sync text-center"
       v-on:click.stop="onClick"
       :data-signature="signature"
       :class="{ 'right-to-left':rightToLeft, '-translate-x-full': rightToLeft, 'highlight': isCurrent }"
       :style="{width: interactionWidth + 'px'}">
    <comment v-if="comment" :comment="comment" />
    <!-- flex items-center is an idiom that vertically align items left and right. -->
    <div ref="messageContainer" class="message-container flex items-center"
         data-type="creation" :data-to="to"
         :class="{ 'flex-row-reverse': rightToLeft}">
      <message ref="messageEl"
             class="invocation w-full transform -translate-y-1/2" :content="signature" :rtl="rightToLeft" type="creation"/>
      <!-- TODO: replace the following with a participant component. -->
      <div ref="participantPlaceHolder"
           class="participant invisible right-0 flex flex-col justify-center flex-shrink-0">
        <!-- Put in a div to give it a fixed height, because stereotype is dynamic. -->
        <div class="h-5 flex flex-col justify-center">
          <label class="name">{{ to }}</label>
        </div>
      </div>
    </div>
    <occurrence :context="creation" :participant="to"/>
    <message class="return transform -translate-y-full" v-if="assignee" :content="assignee" :rtl="!rightToLeft" type="return"/>
  </div>
</template>

<script type="text/babel">
  import {mapGetters} from 'vuex'
  import Comment from '../Comment.vue'
  import Message from '../Message.vue'
  import Occurrence from '../Occurrence.vue'
  import {CodeRange} from '@/parser/CodeRange'

  export default {
    name: 'creation',
    props: ['context', 'comment', 'selfCallIndent'],
    computed: {
      ...mapGetters(['cursor', 'onElementClick', 'distance']),
      from() {
        return this.context.Origin()
      },
      creation() {
        return this.context.creation()
      },
      interactionWidth() {
        let distance = Math.abs(this.distance(this.to, this.from))
        let safeOffset = this.selfCallIndent || 0
        return distance + (this.rightToLeft ? safeOffset : (-safeOffset));
      },
      rightToLeft () {
        return this.distance(this.to, this.from) < 0
      },
      signature() {
        return this.creation.SignatureText()
      },
      assignee () {
        function safeCodeGetter (context) {
          return (context && context.getFormattedText()) || ''
        }
        let assignment = this.creation.creationBody().assignment()
        if (!assignment) return ''
        let assignee = safeCodeGetter(assignment.assignee())
        const type = safeCodeGetter(assignment.type())
        return assignee + (type ? ':' + type : '')
      },
      to() {
        return this.creation.Owner()
      },
      isCurrent() {
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
        setTimeout(() => {
          if (!this.$refs.participantPlaceHolder || !this.$refs.messageContainer) return
          const halfWidthOfPlaceholder = this.$refs['participantPlaceHolder'].offsetWidth / 2;
          ((this.$refs['messageContainer'])).style.width = `calc(100% + ${halfWidthOfPlaceholder + 6}px`;
          if(this.rightToLeft) {
            ((this.$refs['messageContainer'])).style.transform = `translateX( ${-(halfWidthOfPlaceholder + 6)}px`;
          }
        }, 500)
      },
      onClick() {
        this.onElementClick(CodeRange.from(this.context))
      },
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

  .creation.right-to-left > .message-container > .message.invocation {
    /* 3 = (15:occurrenceWidth - 1) / 2 - 5:InteractionBorderWidth
    We can also set right: 3px; but we will also need to reset left: auto */
    left: -2px;
    /* moving .message to the right so that margin will take up the "available" space. It works like float: right.
       But this won't remove .message from the flow.
     */
    margin-left: auto;
  }
</style>
