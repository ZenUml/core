<template>
  <div class="message self flex items-start">
    <svg class="arrow" width="30" height="24">
      <polyline points="0,2 28,2 28,15 14,15"></polyline>
      <polyline class="head" points="18,9 8,15 18,21"></polyline>
      <!--TODO: What is the below line used for?-->
      <!--<polyline class="closed" points="28,32 28,18"></polyline>-->
    </svg>
    <label class="name hover:bg-yellow-300"><span v-if="assignee">{{assignee}} = </span> {{content}}</label>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'self-invocation',
    props: ['content', 'assignee']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  svg polyline {
    fill: none;
    stroke-width: 2px;
  }
</style>
