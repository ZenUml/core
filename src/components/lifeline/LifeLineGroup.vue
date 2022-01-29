<template>
  <div class="container relative flex flex-col" v-if="entities.length > 0" :style="{left: `${left}px`, width: `${right-left}px`}">
    <div class="-mt-8 border-2 border-b-0 h-14">
      <label class="block text-center font-semibold mb-8 border-b-2" v-if="name">{{name}}</label>
    </div>
    <div class="lifeline-group  h-full shadow shadow-slate-500/50">
      <life-line v-for="entity in entities" :key="entity.name" :ref="entity.name" :entity="entity" :group-left="left"/>
    </div>
  </div>
</template>

<script>
  import {Participants} from '@/parser'
  import LifeLine from './LifeLine'
  import {mapGetters} from "vuex";
  import WidthProviderOnBrowser from "@/positioning/WidthProviderFunc";
  import {TextType} from "@/positioning/Coordinate";

  export default {
    name: 'lifeline-group',
    props: ['context'],
    computed: {
      ...mapGetters(['centerOf']),
      name() {
        return this.context?.name()?.getTextWithoutQuotes()
      },
      offset() {
        return 0;
      },
      left() {
        const first = this.entities[0].name;
        const width = Math.max(WidthProviderOnBrowser(first, TextType.ParticipantName), '100');
        return this.centerOf(first) - (width / 2);
      },
      right() {
        const width = Math.max(WidthProviderOnBrowser(this.entities.slice(-1).name, TextType.ParticipantName), '100');
        const last = this.entities.slice(0).pop().name
        return this.centerOf(last) + (width / 2);
      },
      entities() {
        return Participants(this.context).Array()
      }
    },
    components: {
      LifeLine
    }
  }
</script>

<style scoped>
</style>
