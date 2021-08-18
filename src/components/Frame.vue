<template>
  <div class="frame">
    <div class="header flex">
      <div class="left flex-1">
        <diagram-title :context="rootContext.title()"/>
      </div>
      <div class="right">

      </div>
    </div>
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
.header {
  border-bottom: #E6E6E6 1px solid;
  margin-bottom: 4px;
  padding: 4px;
}

</style>
