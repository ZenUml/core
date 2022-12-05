<template>
  <!-- style border-width means not to be overridden. -->
  <div class="message self text-sm flex items-start" style="border-width: 0">
    <svg class="arrow text-skin-fill" width="30" height="24">
      <polyline class="line stroke-current fill-none stroke-2" points="0,2 28,2 28,15 14,15"></polyline>
      <polyline class="head stroke-current fill-current stroke-2" points="18,9 8,15 18,21"></polyline>
    </svg>
    <label class="name px-px hover:text-skin-hover hover:bg-skin-hover"><span v-if="assignee">{{assignee}} = </span> {{content}}</label>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'self-invocation',
    props: ['content', 'assignee']
  }
</script>
