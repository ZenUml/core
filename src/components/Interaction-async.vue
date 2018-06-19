<template>
  <div class="interaction async" :class="{ 'right-to-left':rightToLeft }" :style="{width: Math.abs(interactionWidth) + 'px', left: left + 'px'}">
    <comment v-if="comment" :comment="comment"/>
    <message :content="methodSignature" :rtl="rightToLeft" type="async"/>
    <div class="invisible-occurrence"></div>
  </div>
</template>

<script type="text/babel">
  import Comment from './Comment.vue'
  import Message from './Message'

  export default {
    name: 'interaction-async',
    props: ['from', 'context', 'comment'],
    computed: {
      interactionWidth: function () {
        return this.$store.getters.distance(this.target, this.source)
      },
      left: function () {
        return this.rightToLeft ? this.$store.getters.distance(this.target, this.from) : this.$store.getters.distance(this.source, this.from)
      },
      rightToLeft: function () {
        return this.$store.getters.distance(this.target, this.source) < 0
      },
      methodSignature: function () {
        return this.context.content().getCode()
      },
      source: function () {
        return this.context.source().getCode()
      },
      target: function () {
        return this.context.target().getCode()
      }
    },
    components: {
      Comment,
      Message
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .interaction .invisible-occurrence {
    height: 20px;
  }

  .interaction.async >>> .message {
    width: 100%;
  }
</style>
