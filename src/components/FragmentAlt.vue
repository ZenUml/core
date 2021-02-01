<template>
  <div class="fragment alt" :style="fragmentStyle">
    <div class="segment">
      <comment v-if="comment" :comment="comment"/>

      <div class="header">
        <div class="name"><label>Alt</label></div>
        <label class="condition">[{{condition}}]</label>
      </div>
      <block v-if="alt.ifBlock().braceBlock()"
             :fragment-offset="offsetX"
             :context="alt.ifBlock().braceBlock().block()"
             :selfCallIndent="selfCallIndent"
      ></block>
    </div>
    <template v-for="(elseIfBlock, index) in alt.elseIfBlock()">
      <div class="segment" :key="index+500">
        <div class="header" :key="index+1000">
          <label class="else-if">else if</label>
          <label class="condition">[{{elseIfBlock.parExpr().condition().getCode()}}]</label>
        </div>
        <block :fragment-offset="offsetX"
               :context="elseIfBlock.braceBlock().block()"
               :selfCallIndent="selfCallIndent"
               :key="index+2000"></block>
      </div>
    </template>
    <template v-if="alt.elseBlock()">
      <div class="segment">
        <div class="header"><label>[else]</label></div>
        <block :fragment-offset="offsetX"
               :context="alt.elseBlock().braceBlock().block()"
               :selfCallIndent="selfCallIndent"
        ></block>
      </div>
    </template>
  </div>
</template>

<script>
  import fragment from './FragmentMixin'
  import {GetInheritedFrom} from '../parser'

  export default {
    name: 'fragment-alt',
    props: ['starter', 'context', 'comment', 'selfCallIndent', 'fragmentOffset'],
    mixins: [fragment],
    computed: {
      from: function() {
        return GetInheritedFrom(this.context)
      },
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
  .segment:not(:first-child) {
    border-top: 1px dashed;
  }
</style>
