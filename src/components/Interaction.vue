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
  import {mapGetters} from "vuex";

  export default {
    name: 'interaction',
    props: ['from', 'context', 'comment', 'offset'],
    computed: {
      ...mapGetters(['distance']),
      message: function () {
        return this.context?.message()
      },
      interactionWidth: function () {
        let distance = this.distance(this.to, this.realFrom)
        let safeOffset = this.offset || 0
        return Math.abs(distance - safeOffset)
      },
      translateX: function() {
        let offsetFrom = this.distance(this.realFrom, this.from);
        if (this.rightToLeft) {
          return offsetFrom - this.interactionWidth;
        }
        return offsetFrom
      },
      occurrenceLeft: function () {
        return this.rightToLeft ? -14 : this.interactionWidth - 14
      },
      rightToLeft: function () {
        return this.distance(this.to, this.realFrom) < 0
      },
      signature: function () {
        return this.message?.func().signature().map(s => s.getCode()).join('.')
      },
      assignee: function () {
        let assignment = this.message?.assignment()
        if (!assignment) return ''
        let assignee = (assignment.assignee()?.getCode()) || ''
        const type = (assignment.type()?.getCode()) || ''
        return assignee + (type ? ':' + type : '')
      },
      realFrom: function() {
        return this.message?.func()?.from().getCode() || this.from
      },
      to: function () {
        return this.message?.func().to().getCode()
      }
    },
    components: {
      Message,
      Comment,
      Occurrence
    }
  }
</script>

