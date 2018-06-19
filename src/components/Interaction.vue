<template>
  <div class="interaction sync" :class="{ 'right-to-left':rightToLeft }" :style="{width: Math.abs(interactionWidth) + 'px'}">
    <comment v-if="comment" :comment="comment"/>
    <message :content="methodSignature" :rtl="rightToLeft" type="sync"/>
    <occurrence :context="context" :from="to"/>
    <message class="return" v-if="assignee" :content="assignee" :rtl="!rightToLeft" type="return"/>
  </div>
</template>

<script type="text/babel">
  import Comment from './Comment.vue'
  import Occurrence from './Occurrence.vue'
  import Message from './Message'

  export default {
    name: 'interaction',
    props: ['from', 'context', 'comment'],
    computed: {
      interactionWidth: function () {
        // This is called in the beforeMount hook. By this time, the beforeMount methods
        // of LifeLines have been called. But since lifelines have not been mounted, the following
        // distance will return 0.
        // The core problem - Interaction is
        return this.$store.getters.distance(this.to, this.from)
      },
      occurrenceLeft: function () {
        return this.rightToLeft ? -14 : this.interactionWidth - 14
      },
      rightToLeft: function () {
        return this.$store.getters.distance(this.to, this.from) < 0
      },
      methodSignature: function () {
        return this.context.signature().getCode()
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
        return this.context.to().getCode()
      }
    },
    components: {
      Message,
      Comment,
      Occurrence
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .interaction {
    /*padding-left: 6px;*/
  }

  .interaction.right-to-left {
    transform: translateX(-100%);
  }
</style>
