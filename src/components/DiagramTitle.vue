<template>
  <div>{{title}}</div>
</template>

<script>
export default {
  name: 'DiagramTitle',
  props: ['context'],
  computed: {
    title: function () {
      return this.context?.content()
    }
  }
}
</script>

<style scoped>

</style>
