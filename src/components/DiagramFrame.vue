<template>
  <!-- pb-8 is to offset pt-8 in SeqDiagram component -->
  <div class="frame relative pb-8 ml-1">
    <div class="header flex">
      <div class="left">
        <slot></slot>
      </div>
      <div class="right">
        <diagram-title :context="title"/>
      </div>
    </div>
    <div>
      <div v-show="showTips" class="fixed z-40 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <TipsDialog />
      </div>
    </div>
    <seq-diagram/>
    <button class="absolute bottom-1 left-1" @click="showTipsDialog()">
      <svg class="filter grayscale" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M514 912c-219.9 0-398.8-178.9-398.8-398.9 0-219.9 178.9-398.8 398.8-398.8s398.9 178.9 398.9 398.8c-0.1 220-179 398.9-398.9 398.9z m0-701.5c-166.9 0-302.7 135.8-302.7 302.7S347.1 815.9 514 815.9s302.7-135.8 302.7-302.7S680.9 210.5 514 210.5z" fill="#BDD2EF" /><path d="M431.1 502.4c-0.1 0.3 0.3 0.4 0.4 0.2 6.9-11.7 56.5-89.1 23.4 167.3-17.4 134.7 122.9 153.6 142.3-7.9 0.1-1-1.3-1.4-1.7-0.4-11.9 37.2-49.6 104.9-4.7-155.2 18.6-107.2-127.6-146-159.7-4z" fill="#2867CE" /><path d="M541.3 328m-68 0a68 68 0 1 0 136 0 68 68 0 1 0-136 0Z" fill="#2867CE" /></svg>
    </button>
    <width-provider/>
    <a target="_blank" href="https://zenuml.com" class="absolute bottom-1 right-1 text-xs opacity-0 hover:opacity-100 duration-300 ">ZenUML.com</a>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";
import DiagramTitle from "@/components/DiagramTitle";
import SeqDiagram from "@/components/SeqDiagram";
import TipsDialog from "@/components/tutorial/TipsDialog";
import WidthProvider from "@/components/positioning/WidthProvider";
// import Modal from "@/components/tutorial/Modal";

export default {
  name: "DiagramFrame",
  computed: {
    ...mapState(['showTips']),
    ...mapGetters(['rootContext']),
    title() {
      if(!this.rootContext) {
        console.error('`rootContext` is empty. Please make sure `store` is properly configured.')
      }
      return this.rootContext?.title()
    }
  },
  methods: {
    showTipsDialog() {
      this.$store.state.showTips = true;
      this.$gtag.event('view', {
        'event_category': 'help', 'event_label': 'tips dialog'
      })
    }
  },
  components: {
    WidthProvider,
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
