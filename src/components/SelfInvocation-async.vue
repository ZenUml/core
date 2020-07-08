<template>
  <div class="message self">
    <svg class="arrow" width="44" height="34">
      <polyline points="0,2 28,2 28,25 1,25"></polyline>
      <polyline class="head" points="11,19 1,25 11,31"></polyline>
      <!--TODO: What is the below line used for?-->
      <!--<polyline class="closed" points="28,32 28,18"></polyline>-->
    </svg>
    <label class="name"><span v-if="assignee">{{assignee}} = </span> {{signature}}</label>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'self-invocation-async',
    props: ['signature', 'assignee']
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
    fill: none;
  }

</style>
