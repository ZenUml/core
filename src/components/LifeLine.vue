<template>
  <div :id="entity" class="lifeline" :style="{'paddingTop': top + 'px', 'margin-left': (index + 1) * 50 + 'px'} ">
    <div class="participant">
      <label class="name">{{entity}}</label>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'life-line',
    props: ['entity', 'index'],
    computed: {
      ...mapGetters(['firstInvocations']),
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
    display: inline-block;            /* So that .line fill the remaining height */
    height: 100%;
    margin: 0 20px;
    vertical-align: top;
  }

  .lifeline .line {
    flex: 1;                /* To fill the remaining height */
    margin-left: 50%;
    border-left-width: 1px;
    height: 100%;
  }

  .lifeline>.participant {
    z-index: 100;
  }
</style>
