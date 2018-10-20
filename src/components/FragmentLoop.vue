<template>
  <div class="fragment loop" :style="fragmentStyle">
    <comment v-if="comment" :comment="comment" />
    <div class="header">
      <div class="name"><label>Loop</label></div>
      <label class="condition">[{{condition}}]</label>
    </div>
    <block :style="blockStyle"
           :context="context.braceBlock().block()"
           :from="from"
           :offset="offset"
    ></block>
  </div>
</template>

<script>
  import fragment from './FragmentMixin'

  export default {
    name: 'fragment-loop',
    props: ['from', 'context', 'comment', 'offset'],
    mixins: [fragment],
    computed: {
      condition: function () {
        return this.context.parExpr().expr().getCode()
      }
    },
    beforeCreate: function () {
      this.$options.components.Block = require('./Block.vue').default
      this.$options.components.Comment = require('./Comment.vue').default
    }
  }
</script>
