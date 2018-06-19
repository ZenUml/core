<template>
  <div class="message self">
    <svg class="arrow" width="44" height="34">
      <polyline points="0,2 28,2 28,25 8,25"></polyline>
      <polyline class="head" points="10,19 0,25 10,31"></polyline>
      <!--TODO: What is the below line used for?-->
      <!--<polyline class="closed" points="28,32 28,18"></polyline>-->
    </svg>
    <div class="name">{{signature}}</div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'self-invocation',
    props: ['signature']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .message.self {
    height: 34px; /* Same height as svg */
  }

  .sync > .message.self {
    left: 6px;
  }

  .message .name {
    position: relative;
    left: 30px;
    white-space: nowrap;
  }

  .self > .message .name {
    text-align: left;
  }

  .message.self svg.arrow polyline {
    fill: none;
  }
  .message.self svg.arrow polyline.head {
    fill: #808080;
  }

</style>
