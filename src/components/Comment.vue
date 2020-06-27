<template>
  <div class="comments" v-html="markedComment"></div>
</template>

<script type="text/babel">
  import marked from 'marked'
  import highlightjs from 'highlight.js'
  // Override function
  const renderer = {
    table(header, body) {
      return `
            <table class="table table-striped">
              <thead>${header}</thead>
              <tbody>${body}</tbody>
            <table>
            `
    },
    codespan(code) {
      const endpointPattern = /(GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH)\s+(.+)/ig
      // let found = code.match(endpointPattern)
      let found = endpointPattern.exec(code)
      if (found?.length === 3) {
        return `
          <code class="rest-api">
          <span class="http-method-${found[1].toLowerCase()}">${found[1]}</span>
          <span class="http-path">${found[2]}</span>
          </code>
        `
      }
      return code
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
