<template>
  <div class="frame">
    <div class="header flex">
      <div class="left">
        <slot></slot>
      </div>
      <div class="right">
        <diagram-title :context="title"/>
      </div>
    </div>
    <seq-diagram/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import DiagramTitle from "@/components/DiagramTitle";
import SeqDiagram from "@/components/SeqDiagram";
export default {
  name: "DiagramFrame",
  computed: {
    ...mapGetters(['rootContext']),
    title() {
      if(!this.rootContext) {
        console.error('`rootContext` is empty. Please make sure `store` is properly configured.')
      }
      return this.rootContext?.title()
    }
  },
  components: {
    DiagramTitle,
    SeqDiagram
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
