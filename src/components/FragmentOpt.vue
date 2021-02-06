<template>
  <div class="fragment opt" :style="fragmentStyle">
    <comment v-if="comment" :comment="comment" />
    <div class="header">
      <div class="name"><label>Opt</label></div>
    </div>
    <block :fragmentOffset="offsetX - 1"
           :context="opt.braceBlock().block()"
           :selfCallIndent="selfCallIndent"
    ></block>
  </div>
</template>

<script>
  import fragment from './FragmentMixin'
  import {GetInheritedFrom} from '../parser'

  export default {
    name: 'fragment-opt',
    props: ['starter', 'context', 'comment', 'selfCallIndent', 'fragmentOffset'],
    mixins: [fragment],
    computed: {
      from: function() {
        return GetInheritedFrom(this.context)
      },
      opt: function () {
        return this.context.opt()
      }
    },
    beforeCreate: function () {
      this.$options.components.Block = require('./Block.vue').default
      this.$options.components.Comment = require('./Comment.vue').default
    }
  }
</script>
