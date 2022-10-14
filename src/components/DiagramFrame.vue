<template>
  <!-- We have enabled important: ".zenuml" for tailwind.
        1. Don't use inline-block as class name here. Other clients may not have .zenuml at ancestor level.
        2. .zenuml is used to make sure tailwind css takes effect.
   -->
  <div ref="export" class="zenuml" style="display: inline-block">
    <!-- pb-8 is to offset pt-8 in SeqDiagram component
        .whitespace-nowrap will be inherited by all children
     -->
    <div class="frame relative m-1 origin-top-left whitespace-nowrap" :style="{transform: `scale(${scale})`}">
      <div ref="content">
        <div class="header flex justify-between">
          <div class="left hide-export">
            <slot></slot>
          </div>
          <div class="right flex-grow flex justify-between">
            <diagram-title :context="title"/>
            <privacy class="hide-export" />
          </div>
        </div>
        <div>
          <div v-show="showTips" class="fixed z-40 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <TipsDialog />
          </div>
        </div>
        <seq-diagram :style="{paddingLeft: `${paddingLeft}px`}"/>
      </div>
      <div class="footer mt-10 flex justify-between hide-export">
        <button class="bottom-1 left-1" @click="showTipsDialog()">
          <svg class="filter grayscale" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M514 912c-219.9 0-398.8-178.9-398.8-398.9 0-219.9 178.9-398.8 398.8-398.8s398.9 178.9 398.9 398.8c-0.1 220-179 398.9-398.9 398.9z m0-701.5c-166.9 0-302.7 135.8-302.7 302.7S347.1 815.9 514 815.9s302.7-135.8 302.7-302.7S680.9 210.5 514 210.5z" fill="#BDD2EF" /><path d="M431.1 502.4c-0.1 0.3 0.3 0.4 0.4 0.2 6.9-11.7 56.5-89.1 23.4 167.3-17.4 134.7 122.9 153.6 142.3-7.9 0.1-1-1.3-1.4-1.7-0.4-11.9 37.2-49.6 104.9-4.7-155.2 18.6-107.2-127.6-146-159.7-4z" fill="#2867CE" /><path d="M541.3 328m-68 0a68 68 0 1 0 136 0 68 68 0 1 0-136 0Z" fill="#2867CE" /></svg>
        </button>
        <div class="zoom-controls flex justify-between w-28 bg-blue-100" :style="{transform: `scale(${1/scale})`}">
          <button class="zoom-in px-1" @click="zoomIn()">+</button>
          <label>{{Number(scale * 100).toFixed(0)}} %</label>
          <button class="zoom-out  px-1" @click="zoomOut()">-</button>
        </div>
        <width-provider/>
        <a target="_blank" href="https://zenuml.com" class="absolute bottom-1 right-1 text-xs opacity-0 hover:opacity-100 duration-300 ">ZenUML.com</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from "vuex";
import Privacy from "@/components/privacy/Privacy.vue";
import DiagramTitle from "@/components/DiagramTitle";
import SeqDiagram from "@/components/SeqDiagram";
import TipsDialog from "@/components/tutorial/TipsDialog";
import WidthProvider from "@/components/positioning/WidthProvider";
import * as htmlToImage from 'html-to-image'
import {Depth} from "@/parser";


export default {
  name: "DiagramFrame",
  computed: {
    ...mapState(['showTips', 'scale']),
    ...mapGetters(['rootContext']),
    title() {
      if(!this.rootContext) {
        console.error('`rootContext` is empty. Please make sure `store` is properly configured.')
      }
      return this.rootContext?.title()
    },
    depth: function () {
      return Depth(this.rootContext)
    },
    paddingLeft: function () {
      return 10 * (this.depth + 1)
    }
  },
  methods: {
    ...mapMutations(['setScale',]),
    showTipsDialog() {
      this.$store.state.showTips = true;

      try {
        this.$gtag?.event('view', {
          'event_category': 'help', 'event_label': 'tips dialog'
        })
      } catch (e) {
        console.error(e)
      }
    },
    toPng() {
      return htmlToImage.toPng(this.$refs['export'], {
        backgroundColor: 'white',
        filter: (node) => {
          return !node?.classList?.contains('hide-export')
        }
      })
    },
    toSvg() {
      return htmlToImage.toSvg(this.$refs['export'], {
        backgroundColor: 'white',
        filter: (node) => {
          return !node?.classList?.contains('hide-export')
        }
      })
    },
    toBlob() {
      return htmlToImage.toBlob(this.$refs['export'], {
        backgroundColor: 'white',
        filter: (node) => {
          return !node?.classList?.contains('hide-export')
        }
      })
    },
    toJpeg() {
      // It does not render the 'User' svg icon.
      return htmlToImage.toJpeg(this.$refs['export'], {
        backgroundColor: 'white',
        filter: (node) => {
          return !node?.classList?.contains('hide-export')
        }
      })
    },
    zoomIn() {
      this.setScale(this.scale + 0.1)
    },
    zoomOut() {
      this.setScale(this.scale - 0.1)
    },
  },
  components: {
    WidthProvider,
    TipsDialog,
    DiagramTitle,
    SeqDiagram,
    Privacy,
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
