<template>
  <div class="comments" v-html="comment"></div>
</template>

<script type="text/babel">
  export default {
    name: 'comment',
    props: ['comment']
  }
</script>
