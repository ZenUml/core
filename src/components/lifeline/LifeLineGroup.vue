<template>
  <div class="container flex flex-col">
    <div class="-mt-8 border-2 border-b-0 h-14">
      <label class="block text-center font-semibold mb-8 border-b-2" v-if="name">{{name}}</label>
    </div>
    <div class="lifeline-group flex flex-grow border-2 border-t-0">
      <life-line v-for="entity in entities" :key="entity.name" :ref="entity.name" :entity="entity"/>
    </div>
  </div>
</template>

<script>
  import {Participants} from '@/parser'
  import LifeLine from './LifeLine'

  export default {
    name: 'lifeline-group',
    props: ['context'],
    computed: {
      name() {
        return this.context?.name()?.getTextWithoutQuotes()
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
