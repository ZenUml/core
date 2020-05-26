<template>
  <div  :id="entity"
        class="lifeline"
        :style="{'paddingTop': top + 'px'} ">
    <div class="participant" :class="{'selected': selected}" @click="onSelect">
      <label class="name">{{entity}}</label>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'life-line',
    data() {
      return {
        selected: false
      }
    },
    props: ['entity'],
    computed: {
      ...mapGetters(['firstInvocations', 'onLifelineMounted']),
      top () {
        if (this.firstInvocationIsCreation) {
          return this.firstInvocations[this.entity].top - 3
        }
        return 0
      },
      firstInvocationIsCreation () {
        return this.firstInvocations[this.entity] && this.firstInvocations[this.entity].type === 'creation'
      }
    },
    methods: {
      onSelect() {
        this.selected = !this.selected
        this.$store.commit('onSelect', this.entity)
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

  .lifeline .line {
    flex: 1;                /* To fill the remaining height */
    margin-left: 50%;
    border-left-width: 1px;
  }

  .lifeline>.participant {
    z-index: 100;
  }
</style>
