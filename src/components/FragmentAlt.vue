<template>
  <div class="fragment alt" :style="fragmentStyle">
    <comment v-if="comment" :comment="comment" />
    <div class="header">
      <div class="name"><label>Alt</label></div>
      <label class="condition">[{{condition}}]</label>
    </div>
    <block :style="blockStyle"
           :context="alt.ifBlock().braceBlock().block()"
           :from="from"
           :offset="offset"
    ></block>
    <template v-for="(elseIfBlock, index) in alt.elseIfBlock()">
      <div class="divider" :key="index"></div>
      <div class="header" :key="index+100"><label class="else-if">else if</label> <label class="condition">[{{elseIfBlock.parExpr().expr().getCode()}}]</label></div>
      <block :style="blockStyle"
             :context="elseIfBlock.braceBlock().block()"
             :from="from"
             :offset="offset"
             :key="index+1000"></block>
    </template>
    <template v-if="alt.elseBlock()">
      <div class="divider"></div>
      <div class="header"><label>[else]</label></div>
      <block :style="blockStyle"
             :context="alt.elseBlock().braceBlock().block()"
             :from="from"
             :offset="offset"
      ></block>
    </template>
  </div>
</template>

<script>
  import fragment from './FragmentMixin'
  export default {
    name: 'fragment-alt',
    props: ['from', 'context', 'comment', 'offset'],
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
