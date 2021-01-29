<template>
  <div class="interaction sync"
       :signature="signature"
       :class="{ 'right-to-left':rightToLeft, 'highlight': isCurrent }"
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

  function isNullOrUndefined(value) {
    return value === null || value === undefined
  }

  export default {
    name: 'interaction',
    props: ['from', 'context', 'comment', 'offset'],
    computed: {
      ...mapGetters(['distance', 'cursor']),
      message: function () {
        return this.context?.message()
      },
      interactionWidth: function () {
        let distance = this.distance(this.to, this.realFrom)
        let safeOffset = this.offset || 0
        // +1 for the added border
        return Math.abs(distance - safeOffset) + 1
      },
      translateX: function() {
        // The starting point is always this.from
        const moveTo = this.rightToLeft ? this.to : this.realFrom
        return this.distance(moveTo, this.from)
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
        return this.message?.func()?.from()?.getCode() || this.from
      },
      to: function () {
        return this.message?.func()?.to()?.getCode()
      },
      isCurrent: function () {
        let start = this.context?.start.start
        // it still consider the current element if the cursor is just after the end of the function
        let stop = this.message?.func()?.stop.stop + 1
        if (isNullOrUndefined(this.cursor) || isNullOrUndefined(start) || isNullOrUndefined(stop)) return false
        return this.cursor >= start && this.cursor <= stop
      }
    },
    components: {
      Message,
      Comment,
      Occurrence
    }
  }
</script>
<style scoped>
  .interaction {
    /*Keep dashed here otherwise no space is given to the border*/
    border: 1px dashed transparent;
  }
  .interaction.highlight {
    border-color: inherit;
  }
</style>
