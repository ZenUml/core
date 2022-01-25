<template>
<div>
  <message :content="text" rtl="false" type="sync" />
</div>
</template>

<script>
import Message from "../Message";
export default {
  name: "WidthProvider",
  components: {Message},
  data: function () {
    return {
      text: 'abcd',
    }
  },
  methods: {
    width: function (text, type) {
      console.log(text, type);
      this.text = text;
      return this.$el.clientWidth;
    },
  },
  mounted() {
    this.$store.state.widthProvider = this;
  }
}
</script>

<style scoped>

</style>
