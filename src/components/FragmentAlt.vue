<template>
  <div class="fragment alt" :style="fragmentStyle">
    <div class="segment">
      <comment v-if="comment" :comment="comment"/>

      <div class="header">
        <div class="name"><label>Alt</label></div>
        <label class="condition">[{{condition}}]</label>
      </div>
<!-- fragment-offset set as offsetX - 1 for fragment border     -->
      <block v-if="blockInIfBlock"
             :fragment-offset="offsetX - 1"
             :context="blockInIfBlock"
             :selfCallIndent="selfCallIndent"
      ></block>
    </div>
    <template v-for="(elseIfBlock, index) in alt.elseIfBlock()">
      <div class="segment" :key="index+500">
        <div class="header" :key="index+1000">
          <label class="else-if">else if</label>
          <label class="condition">[{{conditionFromIfElseBlock(elseIfBlock)}}]</label>
        </div>
        <block :fragment-offset="offsetX - 1"
               :context="blockInElseIfBlock(elseIfBlock)"
               :selfCallIndent="selfCallIndent"
               :key="index+2000"></block>
      </div>
    </template>
    <template v-if="elseBlock">
      <div class="segment">
        <div class="header"><label>[else]</label></div>
        <block :fragment-offset="offsetX - 1"
               :context="elseBlock"
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
      blockInIfBlock: function () {
        return this.alt?.ifBlock()?.braceBlock()?.block()
      },
      condition: function () {
        return this.conditionFromIfElseBlock(this.alt?.ifBlock())
      },
      elseBlock: function () {
        return this.alt?.elseBlock()?.braceBlock()?.block()
      }
    },
    methods: {
      conditionFromIfElseBlock(ctx) {
        return ctx?.parExpr()?.condition()?.getText()
      },
      blockInElseIfBlock(ctx) {
        return ctx?.braceBlock()?.block()
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
