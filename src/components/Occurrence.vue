<template>
  <div class="occurrence">
    <block v-if="this.context.block()"
           :context="context.block()"
           :from="participant"
           :offset="offset"
    ></block>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'occurrence',
    props: ['context', 'participant', 'offset'],
    beforeCreate: function () {
      this.$options.components.Block = require('./Block.vue').default
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .occurrence {
    margin-top: -2px; /* To offset Message's border-bottom width */
  }
</style>
