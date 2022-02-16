<template>
  <div class="fragment opt" :style="fragmentStyle">
    <comment v-if="comment" :comment="comment" />
    <div class="header">
      <div class="name"><label>Opt</label></div>
    </div>
    <block :style="{paddingLeft: `${offsetX}px`}"
           :context="opt.braceBlock().block()"
           :selfCallIndent="selfCallIndent"
    ></block>
  </div>
</template>

<script>
  import fragment from './FragmentMixin'

  export default {
    name: 'fragment-opt',
    props: ['context', 'comment', 'selfCallIndent'],
    mixins: [fragment],
    computed: {
      from: function() {
        return this.context.Origin()
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
