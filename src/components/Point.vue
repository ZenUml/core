<template>
  <div class="point" :class="{ fill: fill, 'right-to-left':rtl }">
    <svg class="arrow" height="20">
      <polyline class="right" points="0,7 10,13 0,19"></polyline>
      <polyline class="left" points="10,7 0,13 10,19"></polyline>
    </svg>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'point',
    props: ['fill', 'rtl']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .point {
    position:absolute;
    margin-top: -12px;
    right: 10px;
  }

  .fill svg.arrow polyline {
    fill: #808080;
  }

  .async>.message>.point>svg.arrow> polyline {
    fill: none;
  }

  .right-to-left.point {
    left: 0;
    right: auto;
  }
  .right-to-left.point>svg>polyline.right {
    display: none;
  }

  .right-to-left.point>svg>polyline.left {
    display: inline;
  }

  .point>svg>polyline.left {
    display: none;
  }
</style>
