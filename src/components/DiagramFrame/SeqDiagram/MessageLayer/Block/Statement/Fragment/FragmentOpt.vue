<template>
  <div class="fragment opt border-skin-base rounded" :style="fragmentStyle">
    <comment v-if="comment" :comment="comment" />
    <div class="header">
      <div class="name text-skin-header font-semibold p-1 border-b"><label>Opt</label></div>
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
      this.$options.components.Block = require('../../Block.vue').default
      this.$options.components.Comment = require('../Comment/Comment.vue').default
    }
  }
</script>

<style scoped>
/* We need to do this because tailwind 3.2.4 set border-color to #e5e7eb via '*'. */
* {
  border-color: inherit;
}
</style>
