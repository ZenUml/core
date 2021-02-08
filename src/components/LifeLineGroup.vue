<template>
  <div>
    <label v-if="name">{{name}}</label>
    <div class="lifeline-group">
      <life-line v-for="entity in entities" :key="entity.name" :ref="entity.name" :entity="entity"/>
    </div>
  </div>
</template>

<script>
  import {Participants2} from '../parser'
  import LifeLine from './LifeLine'

  export default {
    name: 'lifeline-group',
    props: ['context'],
    computed: {
      name() {
        return this.context?.name()?.getText().replace(/^"(.*)"$/, '$1')
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
  div {
    background-color: #eeffee;
  }
  label {
    display: block;
    text-align: center;
    font-weight: bold;
  }

  .lifeline-group {
    display: flex;
    height: 100%;
    /*opacity: 50%;*/
  }
</style>
