<template>
  <div class="comments" v-html="markedComment"></div>
</template>

<script type="text/babel">
  import marked from 'marked'

  export default {
    name: 'comment',
    props: ['comment'],
    computed: {
      markedComment() {
        return marked(this.comment)
      }
    }
  }
</script>
