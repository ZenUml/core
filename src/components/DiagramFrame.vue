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
    <div>
      <a target="_blank" href="https://zenuml.com" class="float-right clearfix text-xs">ZenUML.com</a>
      <button id="show-modal" @click="showModal=true">Show Modal</button>
      <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">Custom header</h3>
      </modal>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import DiagramTitle from "@/components/DiagramTitle";
import SeqDiagram from "@/components/SeqDiagram";
import Modal from "@/components/tutorial/Modal";
export default {
  name: "DiagramFrame",
  data() {
    return {
      showModal: false
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
    Modal,
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
