<template>
  <div class="occurrence">
    <canvas style="top: 0; left: 0" ref="canvas"></canvas>
    <block v-if="this.context.braceBlock()"
           :context="context.braceBlock().block()"
           :from="participant"
           :offset="offset"
    ></block>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'occurrence',
    props: ['context', 'participant', 'offset'],
    beforeCreate: function () {
      this.$options.components.Block = require('./Block.vue').default
    },
    mounted() {
      console.log('$$$ mounted occurrence')
      const rc = rough.canvas(this.$refs.canvas);
      rc.rectangle(0, 0, 14, this.$vnode.elm.clientHeight,{
        fill: 'red',
        fillStyle: 'zigzag-line',
        hachureGap: 2
      }); // x, y, width, height
    }
  }
</script>


<style>
  .occurrence {
    margin-top: -2px; /* To offset Message's border-bottom width */
    background: transparent;
  }

  .occurrence canvas {
    position: absolute;
  }
</style>
