<template>
  <div  :id="entity"
        class="lifeline"
        v-bind:class="{'starter': isStarter }"
        :style="{'paddingTop': top + 'px'} ">
    <div v-bind:class="{'participant': !isActor,'actor': isActor}">
      <label class="name">{{entity}}</label>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'life-line',
    props: ['entity', 'isStarter'],
    computed: {
      ...mapGetters(['firstInvocations']),
      isActor() {
        return this.entity==="User"||this.entity==="Actor";
      },
      top () {
        if (this.firstInvocationIsCreation) {
          return this.firstInvocations[this.entity].top - 3
        }
        return 0
      },
      firstInvocationIsCreation () {
        return this.firstInvocations[this.entity] && this.firstInvocations[this.entity].type === 'creation'
      }
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

  .lifeline .line {
    flex: 1;                /* To fill the remaining height */
    margin-left: 50%;
    border-left-width: 1px;
  }

  .lifeline>.participant {
    z-index: 100;
  }
  .actor {
    text-align: center;
    font-weight: bold;
  }
  .actor::before {
    content: '';
    display: block;
    height: 45px;
    width: 88px;
    background-size: 80px;
    background-image: url("../assets/actor.svg");
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
