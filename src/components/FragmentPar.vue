<template>
  <div class="fragment par" :style="fragmentStyle">
    <comment v-if="comment" :comment="comment" />
    <div class="header">
      <div class="name"><label>Par</label></div>
    </div>
    <block :fragmentOffset="offsetX"
           :context="par.braceBlock().block()"
           :from="from"
           :selfCallIndent="selfCallIndent"
    ></block>
  </div>
</template>

<script>
  import fragment from './FragmentMixin'

  export default {
    name: 'fragment-par',
    props: ['from', 'context', 'comment', 'selfCallIndent', 'fragmentOffset'],
    mixins: [fragment],
    computed: {
      par: function () {
        return this.context.par()
      }
    },
    beforeCreate: function () {
      this.$options.components.Block = require('./Block.vue').default
      this.$options.components.Comment = require('./Comment.vue').default
    }
  }
</script>
<style>
  .fragment.par>.block>.statement-container:not(:first-child) {
    border-top: 1px dashed;
  }
</style>
