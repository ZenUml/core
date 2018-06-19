<template>
  <div class="fragment alt" :style="fragmentStyle">
    <comment v-if="comment" :comment="comment" />
    <div class="header">
      <div class="name"><label>Alt</label></div>
      <label class="condition">[{{condition}}]</label>
    </div>
    <block :style="blockStyle"
           :context="context.ifBlock().braceBlock().block()"
           :from="from"></block>
    <template v-for="(elseIfBlock, index) in context.elseIfBlock()">
      <div class="divider" :key="index"></div>
      <div class="name" :key="index+100">else if [{{elseIfBlock.parExpr().expr().getCode()}}]</div>
      <block :style="blockStyle"
             :context="elseIfBlock.braceBlock().block()"
             :from="from" :key="index+1000"></block>
    </template>
    <template v-if="context.elseBlock()">
      <div class="divider"></div>
      <div class="name">else</div>
      <block :style="blockStyle"
             :context="context.elseBlock().braceBlock().block()"
             :from="from"></block>
    </template>
  </div>
</template>

<script>
  import fragment from './FragmentMixin'
  export default {
    name: 'fragment-alt',
    props: ['from', 'context', 'comment'],
    mixins: [fragment],
    computed: {
      condition: function () {
        return this.context.ifBlock().parExpr().expr().getCode()
      }
    },
    beforeCreate: function () {
      this.$options.components.Block = require('./Block.vue').default
      this.$options.components.Comment = require('./Comment.vue').default
    }
  }
</script>

<style scoped>
  /* This divider is specific to the fragment alt component */
  .divider {
    border-bottom-width:1px;
    margin: 10px 4px;
  }
</style>
