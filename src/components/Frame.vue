<template>
  <div class="frame">
    <diagram-title :context="rootContext.title()"/>
    <seq-diagram/>
  </div>
</template>

<script>
import DiagramTitle from "@/components/DiagramTitle";
import {mapGetters} from "vuex";
export default {
  name: "Frame",
  components: {DiagramTitle},
  computed: {
    ...mapGetters(['rootContext'])
  },
}
</script>

<style scoped>
.frame {
  display: inline-block;
  border: #E6E6E6 1px solid;
  border-radius: 3px;
}
</style>
