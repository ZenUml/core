<template>
  <div class="comments" v-html="markedComment"></div>
</template>

<script type="text/babel">
  import marked from 'marked'
  import highlightjs from 'highlightjs'
  // Override function
  const renderer = {
    table(header, body) {
      return `
            <table class="table table-striped">
              <thead>${header}</thead>
              <tbody>${body}</tbody>
            <table>
            `
    }
  };

  marked.setOptions({
    highlight: function (code, language) {
      const validLanguage = highlightjs.getLanguage(language) ? language : 'plaintext'
      return highlightjs.highlight(validLanguage, code).value
    }
  })

  marked.use({ renderer });

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
