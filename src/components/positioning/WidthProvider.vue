<template>
<div>

</div>
</template>

<script>
export default {
  name: "WidthProvider",
  date: function () {
    return {
      width: 0,
    }
  },
  mounted() {
    this.width = this.$el.clientWidth
  }
}
</script>

<style scoped>

</style>
