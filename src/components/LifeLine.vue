<template>
  <div  :id="entity"
        class="lifeline"
        :style="{'paddingTop': top + 'px'} ">
    <canvas :id="entity + '-canvas'"></canvas>
    <div class="participant" :class="{'selected': selected}" @click="onSelect">
      <label class="name">{{entity}}</label>
    </div>

    <div class="line"></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  // import rough from 'roughjs'

  export default {
    name: 'life-line',
    props: ['entity'],
    computed: {
      ...mapGetters(['firstInvocations', 'onLifelineMounted']),
      canvasId () {
        return this.entity + '-canvas'
      },
      selected () {
        return this.$store.state.selected.includes(this.entity)
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
    },
    methods: {
      onSelect() {
        this.$store.commit('onSelect', this.entity)
      }
    },
    updated() {
      console.log('$$$updated');
      const rc = rough.canvas(document.getElementById(this.entity + '-canvas'));
      rc.rectangle(0, 0, this.$vnode.elm.offsetWidth, 40, {
        fill: 'red',
        hachureAngle: 60, // angle of hachure,
        fillStyle: 'zigzag',
        hachureGap: 4
      }); // x, y, width, height
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
    font-family: 'Cabin Sketch', cursive;
  }

  .lifeline canvas {
    position: absolute;
  }

  .lifeline .participant {
    background-color: transparent;
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
