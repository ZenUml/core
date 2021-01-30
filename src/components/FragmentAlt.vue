<template>
  <div class="fragment alt" :style="fragmentStyle">
    <comment v-if="comment" :comment="comment" />
    <div class="header">
      <div class="name"><label>Alt</label></div>
      <label class="condition">[{{condition}}]</label>
    </div>
    <block v-if="alt.ifBlock().braceBlock()"
           :fragment-offset="offsetX"
           :context="alt.ifBlock().braceBlock().block()"
           :from="from"
           :selfCallIndent="selfCallIndent"
    ></block>
    <template v-for="(elseIfBlock, index) in alt.elseIfBlock()">
      <div class="divider" :key="index"></div>
      <div class="header" :key="index+100">
        <label class="else-if">else if</label>
        <label class="condition">[{{elseIfBlock.parExpr().condition().getCode()}}]</label>
      </div>
      <block :fragment-offset="offsetX"
             :context="elseIfBlock.braceBlock().block()"
             :from="from"
             :selfCallIndent="selfCallIndent"
             :key="index+1000"></block>
    </template>
    <template v-if="alt.elseBlock()">
      <div class="divider"></div>
      <div class="header"><label>[else]</label></div>
      <block :fragment-offset="offsetX"
             :context="alt.elseBlock().braceBlock().block()"
             :from="from"
             :selfCallIndent="selfCallIndent"
      ></block>
    </template>
  </div>
</template>

<script>
  import fragment from './FragmentMixin'
  export default {
    name: 'fragment-alt',
    props: ['from', 'context', 'comment', 'selfCallIndent'],
    mixins: [fragment],
    computed: {
      alt: function () {
        return this.context.alt()
      },
      condition: function () {
        return this.alt.ifBlock().parExpr().condition().getCode()
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
