<template>
  <div class="container">
    <label v-if="name">{{name}}</label>
    <div class="lifeline-group">
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
  div.container {
    background-color: #eeffee;
    margin: 0 2px;
    display: flex;
    flex-direction: column;
  }
  label {
    display: block;
    text-align: center;
    font-weight: bold;
  }

  .lifeline-group {
    display: flex;
    flex-grow: 1;
  }
</style>
