<template>
  <div class="life-line-layer">
    <life-line :entity="starter" :ref="starter" class="starter" :class="{hidden: lifeLineHidden, actor: isStarterAnActor}"/>
    <life-line v-for="entity in entities" :key="entity" :ref="entity" :entity="entity"/>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import LifeLine from './LifeLine.vue'

  export default {
    name: 'life-line-layer',
    computed: {
      ...mapGetters(['starter', 'participants']),
      isStarterAnActor() {
        return this.starter === "User" || this.starter === "Actor";
      },
      lifeLineHidden () {
        return this.starter === 'Starter'
      },
      entities () {
        return this.participants.filter( p => p !== this.starter)
      }
    },
    mounted () {
      this.emitDimensions()
    },
    updated () {
      this.emitDimensions()
    },
    methods: {
      ...mapMutations(['onLifeLineLayerMountedOrUpdated']),
      emitDimensions () {
        let lifeLineDimensions = {}
        let starterEl = this.$refs[this.starter].$el
        lifeLineDimensions[this.starter] = {
          left: starterEl.offsetLeft,
          width: starterEl.offsetWidth
        }
        this.entities.forEach(entity => {
          let el = this.$refs[entity][0].$el
          lifeLineDimensions[entity] = {
            left: el.offsetLeft,
            width: el.offsetWidth
          }
        })
        this.onLifeLineLayerMountedOrUpdated(lifeLineDimensions)
      }
    },
    components: {
      LifeLine
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .life-line-layer {
    display: flex;        /* This is to remove spaces between inline-blocks, not necessary for generated and non-formatted code*/
    white-space: nowrap;  /* why? */
    position: absolute;   /* So that message layer is overlaid. */
    height: 100%;         /* To give height to the line */
  }

  .lifeline.starter {
    transform: translateX(6px);
  }

  .lifeline.hidden {
    visibility: hidden;
    margin-left: -40px; /* Remove the extra margin created by starter */
  }

  .lifeline.actor >>> .participant {
    text-align: center;
    font-weight: bold;
    border: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .lifeline.actor >>> .participant::before {
    content: '';
    display: block;
    height: 45px;
    width: 88px;
    background-size: 80px;
    background-image: url("../assets/actor.svg");
    background-position: center;
    background-repeat: no-repeat;
  }

  .lifeline.actor > .participant {
    text-align: center;
    font-weight: bold;
    border: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

</style>

