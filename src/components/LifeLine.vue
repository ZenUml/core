<template>
  <div  :id="entity"
        class="lifeline"
        :style="{'paddingTop': top + 'px'} ">
    <div class="participant" :class="{'selected': selected}" @click="onSelect">
      <label class="interface">{{entity.interface}}</label>
      <label class="name">{{entity.name}}</label>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'life-line',
    props: ['entity'],
    computed: {
      ...mapGetters(['firstInvocations', 'onLifelineMounted']),
      selected () {
        return this.$store.state.selected.includes(this.entity.name)
      },
      top () {
        if (this.firstInvocationIsCreation) {
          return this.firstInvocations[this.entity.name].top - 3
        }
        return 0
      },
      firstInvocationIsCreation () {
        return this.firstInvocations[this.entity.name] && this.firstInvocations[this.entity.name].type === 'creation'
      }
    },
    methods: {
      onSelect() {
        this.$store.commit('onSelect', this.entity.name)
      }
    },
    mounted() {
      this.onLifelineMounted(this, this.$vnode.elm);
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
</style>
