<template>
  <div class="lifeline-group">
    <life-line v-for="entity in entities" :key="entity.name" :ref="entity.name" :entity="entity"/>
  </div>
</template>

<script>
  import {Participants} from '../parser'
  import LifeLine from './LifeLine'

  export default {
    name: 'lifeline-group',
    props: ['context'],
    computed: {
      content() {
        return this.context?.getText()
      },
      implicitParticipants() {
        return Array.from(Participants(this.context)?.entries())
          .map(entry => {return {name: entry[0], stereotype: entry[1].stereotype}})
      }
    },
    components: {
      LifeLine
    }
  }
</script>

<style scoped>
  .lifeline-group {
    display: flex;
  }
</style>
