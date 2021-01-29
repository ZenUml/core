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
  import InteractionMixin from './InteractionMixin'

  export default {
    name: 'interaction',
    props: ['from', 'context', 'comment', 'offset'],
    mixins: [InteractionMixin],
    computed: {
      ...mapGetters(['distance', 'cursor']),
      interactionWidth: function () {
        let distance = this.distance(this.to, this.realFrom)
        let safeOffset = this.offset || 0
        // +1 for the added border
        return Math.abs(distance - safeOffset) + 1
      },
      to: function () {
        return this.func?.to()?.getCode()
      },
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
