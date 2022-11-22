<template>
  <!-- style border-width means not to be overridden. -->
  <div class="message self flex items-start" style="border-width: 0">
    <svg class="arrow" width="30" height="24">
      <polyline class="line fill-none stroke-2" points="0,2 28,2 28,15 14,15"></polyline>
      <polyline class="head fill-none stroke-2" points="18,9 8,15 18,21"></polyline>
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
