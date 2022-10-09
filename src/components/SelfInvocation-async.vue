<template>
  <div class="message self flex items-start">
    <svg class="arrow" width="34" height="34">
      <polyline points="0,2 28,2 28,25 1,25"></polyline>
      <polyline class="head" points="11,19 1,25 11,31"></polyline>
      <!--TODO: What is the below line used for?-->
      <!--<polyline class="closed" points="28,32 28,18"></polyline>-->
    </svg>
    <label class="name hover:bg-yellow-300"><span v-if="assignee">{{assignee}} = </span> <span v-if="type === 'return'">return</span> {{content}}</label>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'self-invocation-async',
    props: ['content', 'assignee', 'type']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .message.self {
    /* InteractionBorderWidth */
    transform: translateX(-5px);
  }


  .message.self svg.arrow polyline {
    fill: none;
  }
  .message.self svg.arrow polyline.head {
    fill: none;
  }

</style>
