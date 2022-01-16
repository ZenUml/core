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
    <div>
      <a target="_blank" href="https://zenuml.com" class="float-right clearfix text-xs">ZenUML.com</a>
      <button id="show-modal" @click="showModal=true">Show Modal</button>
      <div v-show="showModal" class="fixed z-40 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <TipsDialog />
      </div>
    </div>
    <seq-diagram/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import DiagramTitle from "@/components/DiagramTitle";
import SeqDiagram from "@/components/SeqDiagram";
import TipsDialog from "@/components/tutorial/TipsDialog";
// import Modal from "@/components/tutorial/Modal";

export default {
  name: "DiagramFrame",
  data() {
    return {
      showModal: true
    }
  },
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
    TipsDialog,
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
