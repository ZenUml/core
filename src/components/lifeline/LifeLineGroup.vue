<template>
  <!-- pb-2 to show the shadow -->
  <div class="container absolute -mt-7 flex flex-col h-full pb-2" v-if="entities.length > 0" :style="{left: `${left}px`, width: `${right-left}px`}">
    <div class="shadow shadow shadow-slate-500/50 flex-grow">
      <div class="h-14">
        <label class="block text-center font-semibold" v-if="name">{{ name }}</label>
      </div>
      <div class="lifeline-group">
        <life-line v-for="entity in entities" :key="entity.name" :ref="entity.name" :entity="entity" :group-left="left"/>
      </div>
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
