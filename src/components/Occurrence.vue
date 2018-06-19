<template>
  <div class="occurrence">
    <block v-if="this.context.block()"
           :context="context.block()"
           :from="localTo"></block>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'occurrence',
    props: ['from', 'context', 'to'],
    computed: {
      localTo: function () {
        return this.to || (this.context.to() && this.context.to().getCode()) || this.from
      }
    },
    components: {
      'block': () => import(/* webpackMode: "eager" */ './Block.vue')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .occurrence {
    margin-top: -2px; /* To offset Message's border-bottom width */
  }
</style>
