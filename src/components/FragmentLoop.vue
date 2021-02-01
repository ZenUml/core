<template>
  <div class="fragment loop" :style="fragmentStyle">
    <comment v-if="comment" :comment="comment" />
    <div class="header">
      <div class="name"><label>Loop</label></div>
      <label class="condition">[{{condition}}]</label>
    </div>
    <block :fragment-offset="offsetX"
           :context="loop.braceBlock().block()"
           :selfCallIndent="selfCallIndent"
    ></block>
  </div>
</template>

<script>
  import fragment from './FragmentMixin'
  import {GetInheritedFrom} from '../parser'

  export default {
    name: 'fragment-loop',
    props: ['starter', 'context', 'comment', 'selfCallIndent', 'fragmentOffset'],
    mixins: [fragment],
    computed: {
      from: function() {
        return GetInheritedFrom(this.context)
      },
      loop: function () {
        return this.context.loop()
      },
      condition: function () {
        return this.loop.parExpr().condition().getCode()
      }
    },
    beforeCreate: function () {
      this.$options.components.Block = require('./Block.vue').default
      this.$options.components.Comment = require('./Comment.vue').default
    }
  }
</script>
