<template>
  <div class="frame">
    <div class="header flex">
      <div class="left flex-1">
        <diagram-title :context="title"/>
      </div>
      <div class="right">
        <slot></slot>
      </div>
    </div>
    <seq-diagram/>
  </div>
</template>

<script>
import DiagramTitle from "@/components/DiagramTitle";
import {mapGetters} from "vuex";
export default {
  name: "DiagramFrame",
  components: {DiagramTitle},
  computed: {
    ...mapGetters(['rootContext']),
    title() {
      if(!this.rootContext) {
        console.error('`rootContext` is empty. Please make sure `store` is properly configured.')
      }
      return this.rootContext?.title()
    }
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
