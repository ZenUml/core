<template>
  <div class="interaction creation sync" :class="{ 'right-to-left':rightToLeft }" :style="{width: Math.abs(interactionWidth) + 'px'}">
    <comment v-if="comment" :comment="comment" />
    <message class="invocation" :content="methodSignature" :rtl="rightToLeft" :style="{width: invocationWidth + 'px'}" type="creation"/>
    <div class="participant place-holder">
      <!--This line is to set the height of the place-holder-->
      <label class="name">{{to}}</label>
    </div>
    <occurrence :context="context" :from="to" :to="to"/>
    <message class="return" v-if="assignee" :content="assignee" :rtl="!rightToLeft" type="return"/>
  </div>
</template>

<script type="text/babel">
  import { mapGetters } from 'vuex'
  import Comment from './Comment.vue'
  import Message from './Message'
  import Occurrence from './Occurrence'

  export default {
    name: 'creation',
    props: ['from', 'context', 'comment'],
    computed: {
      ...mapGetters(['distance', 'centerOf', 'rightOf', 'leftOf', 'widthOf']),
      interactionWidth: function () {
        return this.distance(this.to, this.from)
      },
      invocationWidth: function () {
        if (this.rightToLeft) {
          return this.centerOf(this.from) - this.rightOf(this.to) - 6
        }
        return this.leftOf(this.to) - this.centerOf(this.from) - 6
      },
      rightToLeft: function () {
        return this.distance(this.to, this.from) < 0
      },
      methodSignature: function () {
        const params = this.context.parameters()
        const text = (params && params.parameter() && params.parameter().length > 0) ? params.getCode() : 'create'
        return '«' + text + '»'
      },
      assignee: function () {
        function safeCodeGetter (context) {
          return (context && context.getCode()) || ''
        }
        let assignment = this.context.assignment()
        if (!assignment) return ''
        let assignee = safeCodeGetter(assignment.assignee())
        const type = safeCodeGetter(assignment.type())
        return assignee + (type ? ':' + type : '')
      },
      to: function () {
        const assignee = this.context.assignment() && this.context.assignment().assignee().getText()
        const type = this.context.constructor().getText()
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
  .interaction.creation {
    text-align: right;
  }

  .interaction.creation.right-to-left {
    transform: translateX(-100%);
    text-align: left;
  }

  .participant.place-holder {
    visibility: hidden;
    margin-top: -10px;
  }

  .creation > .message.invocation {
    top: 10px;
  }

  .creation.right-to-left > .message.invocation {
    /* We can also set right: 6px; but we will also need to reset left: auto */
    left: -6px;
    /* moving .message to the right so that margin will take up the "available" space. It works like float: right.
       But this won't remove .message from the flow.
     */
    margin-left: auto;
  }

  .right-to-left > .occurrence {
    left: -8px;
  }

</style>
