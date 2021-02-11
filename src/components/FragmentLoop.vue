<template>
  <div class="fragment loop" :style="fragmentStyle">
    <comment v-if="comment" :comment="comment" />
    <div class="header">
      <div class="name"><label>Loop</label></div>
      <label class="condition">[{{condition}}]</label>
    </div>
    <block :fragment-offset="offsetX - 1"
           :context="blockInLoop"
           :selfCallIndent="selfCallIndent"
    ></block>
  </div>
</template>

<script>
  import fragment from './FragmentMixin'

  export default {
    name: 'fragment-loop',
    props: ['starter', 'context', 'comment', 'selfCallIndent', 'fragmentOffset'],
    mixins: [fragment],
    computed: {
      from: function() {
        return this.context.Origin()
      },
      loop: function () {
        return this.context.loop()
      },
      blockInLoop: function () {
        return this.loop?.braceBlock()?.block()
      },
      condition: function () {
        return this.loop?.parExpr()?.condition()?.getText()
      }
    },
    beforeCreate: function () {
      this.$options.components.Block = require('./Block.vue').default
      this.$options.components.Comment = require('./Comment.vue').default
    }
  }
</script>
