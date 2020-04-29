<template>
  <div class="interaction sync"
       :signature="signature"
       :class="{ 'right-to-left':rightToLeft }"
       :style="{width: interactionWidth + 'px', transform: 'translateX(' + translateX + 'px)'}">
    <comment v-if="comment" :comment="comment"/>
    <message :content="signature" :rtl="rightToLeft" type="sync"/>
    <!--We reset the offset here to make it simple; re-entering a method should be rare.-->
    <occurrence :context="message" :participant="to" :offset="0"/>
    <message class="return" v-if="assignee" :content="assignee" :rtl="!rightToLeft" type="return"/>
  </div>
</template>

<script type="text/babel">
  import Comment from './Comment.vue'
  import Occurrence from './Occurrence.vue'
  import Message from './Message'

  export default {
    name: 'interaction',
    props: ['from', 'context', 'comment', 'offset'],
    computed: {
      message: function () {
        return this.context.message()
      },
      interactionWidth: function () {
        let distance = this.$store.getters.distance(this.to, this.realFrom)
        let safeOffset = this.offset || 0
        if (distance < 0) {
          return Math.abs(distance) + safeOffset
        }
        return Math.abs(distance) - safeOffset
      },
      translateX: function() {
        let offsetFrom = this.$store.getters.distance(this.realFrom, this.from);
        if (this.rightToLeft) {
          return offsetFrom - this.interactionWidth;
        }
        return offsetFrom
      },
      occurrenceLeft: function () {
        return this.rightToLeft ? -14 : this.interactionWidth - 14
      },
      rightToLeft: function () {
        return this.$store.getters.distance(this.to, this.realFrom) < 0
      },
      signature: function () {
        return this.message.func().signature().map(s => s.getCode()).join('.')
      },
      assignee: function () {
        function safeCodeGetter (context) {
          return (context && context.getCode()) || ''
        }
        let assignment = this.message.assignment()
        if (!assignment) return ''
        let assignee = safeCodeGetter(assignment.assignee())
        const type = safeCodeGetter(assignment.type())
        return assignee + (type ? ':' + type : '')
      },
      realFrom: function() {
        return this.message.func().from() && this.message.func().from().getCode() || this.from
      },
      to: function () {
        return this.message.func().to().getCode()
      }
    },
    components: {
      Message,
      Comment,
      Occurrence
    }
  }
</script>

