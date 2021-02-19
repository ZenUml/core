<template>
  <div  :id="entity.name"
        class="lifeline"
        :class="{actor: isActor, database: isDatabase, lambda: isLambda}"
        :style="{'paddingTop': top + 'px'} ">
    <div class="participant" :class="{'selected': selected}" @click="onSelect">
      <label class="interface" v-if="entity.stereotype" >«{{entity.stereotype}}»</label>
      <label class="name">{{entity.label || entity.name}}</label>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  import {ParticipantType} from '../parser/Participants'

  export default {
    name: 'life-line',
    props: ['entity', 'context'],
    computed: {
      ...mapGetters(['firstInvocations', 'onLifelineMounted']),
      isActor() {
        return this.entity.Type() === ParticipantType.Actor
      },
      isDatabase() {
        return this.entity.Type() === ParticipantType.Database
      },
      isLambda() {
        return this.entity.Type() === ParticipantType.Lambda
      },
      selected () {
        return this.$store.state.selected.includes(this.entity.name)
      },
      top () {
        if (this.firstInvocationIsCreation) {
          return this.firstInvocations[this.entity.name].top - 3 - this.$el?.offsetTop
        }
        return 0
      },
      firstInvocationIsCreation () {
        return this.firstInvocations[this.entity.name] && this.firstInvocations[this.entity.name].type === 'creation'
      }
    },
    methods: {
      ...mapMutations(['onLifelinePositioned']),
      onSelect() {
        this.$store.commit('onSelect', this.entity.name)
      }
    },
    mounted() {
      this.onLifelinePositioned({
        name: this.entity.name,
        dimensions: {
          left: this.$el.offsetLeft,
          width: this.$el.offsetWidth
        }
      })
      this.onLifelineMounted(this, this.$vnode.elm);
    },
    updated() {
      this.onLifelinePositioned({
        name: this.entity.name,
        dimensions: {
          left: this.$el.offsetLeft,
          width: this.$el.offsetWidth
        }
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* LifeLineLayer's display is flex, its children don't need display:inline-block */
  .lifeline {
    display: flex;            /* So that .line fill the remaining height */
    flex-direction: column;
    margin: 0 20px;
  }

  .lifeline>.participant>.interface {
    display: block;
  }

  .lifeline .line {
    flex: 1;                /* To fill the remaining height */
    margin-left: 50%;
    border-left-width: 1px;
  }

  .lifeline>.participant {
    z-index: 100;
  }

  .lifeline.actor .participant,
  .lifeline.database .participant,
  .lifeline.lambda .participant
  {
    text-align: center;
    border: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  .lifeline.actor .participant::before,
  .lifeline.database .participant::before,
  .lifeline.lambda .participant::before
  {
    content: '';
    display: block;
    height: 35px;
    background-size: 50px;
    background-image: url("../assets/actor.svg");
    background-position: center;
    background-repeat: no-repeat;
  }

  .lifeline.actor .participant::before {
    background-size: 35px;
    background-image: url("../assets/database.svg");
  }

  .lifeline.database .participant::before {
    background-size: 35px;
    background-image: url("../assets/database.svg");
  }

  .lifeline.lambda .participant::before {
    background-size: 35px;
    background-image: url("../assets/AWS-Lambda_Lambda-Function_light-bg.svg");
  }

</style>
