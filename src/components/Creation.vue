<template>
  <div class="interaction creation sync"
       :signature="signature"
       :class="{ 'right-to-left':rightToLeft }"
       :style="style">
    <comment v-if="comment" :comment="comment" />
    <message class="invocation" :content="signature" :rtl="rightToLeft" :style="{width: invocationWidth + 'px'}" type="creation"/>
    <div class="participant place-holder">
      <!--This line is to set the height of the place-holder-->
      <label class="name">{{to}}</label>
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
  import {GetInheritedFrom} from '../parser'

  export default {
    name: 'creation',
    props: ['context', 'comment', 'selfCallIndent', 'fragmentOffset'],
    computed: {
      ...mapGetters(['starter', 'distance', 'centerOf', 'rightOf', 'leftOf', 'widthOf']),
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
        return GetInheritedFrom(this.context)
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
      invocationWidth: function () {
        let safeOffset = this.selfCallIndent || 0
        // why this 8? 1px middle of occurrence, 7px for occurrenceWidth/2
        const occurrenceDelta = 8;
        if (this.rightToLeft) {
          return this.centerOf(this.from) - this.rightOf(this.to) + safeOffset - occurrenceDelta
        }
        return this.leftOf(this.to) - this.centerOf(this.from) - safeOffset - occurrenceDelta
      },
      rightToLeft: function () {
        return this.distance(this.to, this.from) < 0
      },
      signature: function () {
        const params = this.creation.parameters()
        const text = (params && params.parameter() && params.parameter().length > 0) ? params.getCode() : 'create'
        return '«' + text + '»'
      },
      assignee: function () {
        function safeCodeGetter (context) {
          return (context && context.getCode()) || ''
        }
        let assignment = this.creation.assignment()
        if (!assignment) return ''
        let assignee = safeCodeGetter(assignment.assignee())
        const type = safeCodeGetter(assignment.type())
        return assignee + (type ? ':' + type : '')
      },
      to: function () {
        const assignee = this.creation.assignment() && this.creation.assignment().assignee().getText()
        const type = this.creation.construct().getText()
        return assignee ? assignee + ':' + type : type
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
    visibility: hidden;
    margin-top: -20px;
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
