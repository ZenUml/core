<template>
  <div class="lifeline-group">
    <life-line v-for="entity in entities" :key="entity.name" :ref="entity.name" :entity="entity"/>
  </div>
</template>

<script>
  import {Participants2} from '../parser'
  import LifeLine from './LifeLine'

  export default {
    name: 'lifeline-group',
    props: ['context'],
    computed: {
      content() {
        return this.context?.getText()
      },
      entities() {
        return Participants2(this.context).Array()
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
    border: #5d5d5d solid 1px;
  }
</style>
