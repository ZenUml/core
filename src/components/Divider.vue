<template>
  <div class="fragment divider" :style="fragmentStyle">
    <div class="header">
      <div class="name"><label>{{name}}</label></div>
    </div>
  </div>
</template>

<script>
  import fragment from './MaxFragmentMixin'

  export default {
    name: 'divider',
    props: ['context'],
    mixins: [fragment],
    computed: {
      from: function() {
        return this.context.Origin()
      },
      name: function () {
        return this.context.divider().name().getText()
      }
    }
  }
</script>

<style scoped>
  .fragment.divider .header {
    text-align: center;
  }
</style>