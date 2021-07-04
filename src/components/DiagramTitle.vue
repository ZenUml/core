<template>
  <div class="diagram-title">{{title}}</div>
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
.diagram-title {
  border-bottom: #E6E6E6 1px solid;
  margin-bottom: 4px;
  padding: 4px;
}
</style>
