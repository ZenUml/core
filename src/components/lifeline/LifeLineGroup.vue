<template>
  <div class="container" :style="{left: left + 'px'}">
    <label v-if="name">{{name}}</label>
    <div class="lifeline-group">
      <life-line v-for="entity in entities" :key="entity.name" :ref="entity.name" :entity="entity" :groupLeft="left"/>
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
      },
      left() {
        return 200;
      }
    },
    components: {
      LifeLine
    }
  }
</script>

<style scoped>
  div.container {
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  div.container:nth-child(odd) {
    background-color: #eeffee;
  }

  div.container:nth-child(even) {
    background-color: #eeeeee;
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
