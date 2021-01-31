<template>
  <div class="occurrence">
    <block v-if="this.context.braceBlock()"
           :context="context.braceBlock().block()"
           :selfCallIndent="selfCallIndent"
    ></block>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'occurrence',
    props: ['context', 'selfCallIndent'],
    beforeCreate: function () {
      this.$options.components.Block = require('./Block.vue').default
    }
  }
</script>


<style>
  .occurrence {
    margin-top: -2px; /* To offset Message's border-bottom width */
  }
</style>
