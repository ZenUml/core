<template>
  <div class="container" :style="{left: left + 'px', width: width + 'px'}">
    <label v-if="name">{{name}}</label>
    <div class="lifeline-group">
      <life-line v-for="entity in entities" :key="entity.name" :ref="entity.name" :entity="entity" :groupLeft="left"/>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import {Participants} from '@/parser'
  import LifeLine from './LifeLine'

  export default {
    name: 'lifeline-group',
    props: ['context'],
    computed: {
      ...mapGetters(['lifelineLayout', 'firstInvocations', 'onLifelineMounted']),
      name() {
        return this.context?.name()?.getTextWithoutQuotes()
      },
      entities() {
        return Participants(this.context).Array()
      },
      left() {
        const firstEntity = this.entities[0];
        return this.lifelineLayout.outerLeft(firstEntity?.name);
      },
      width() {
        const firstEntity = this.entities[0];
        const lastEntity = this.entities[this.entities.length - 1];
        return this.lifelineLayout.outerRight(lastEntity?.name) - this.lifelineLayout.outerLeft(firstEntity?.name)
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
    overflow: hidden;
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
