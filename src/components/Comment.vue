<template>
  <div class="comments" v-html="markedComment"></div>
</template>

<script type="text/babel">
  import marked from 'marked'
  import highlightjs from 'highlight.js/lib/core'
  //
  // Languages import
  import javascript from 'highlight.js/lib/languages/javascript'
  import bash from 'highlight.js/lib/languages/bash'
  import yaml from 'highlight.js/lib/languages/yaml'

  // Register languages
  highlightjs.registerLanguage('javascript', javascript)
  highlightjs.registerLanguage('bash', bash)
  highlightjs.registerLanguage('yaml', yaml)

  // import highlightjs from 'highlight.js'
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
      return `<code>${code}</code>`
    }
  };

  marked.setOptions({
    highlight: function (code, language) {
      const validLanguage = highlightjs.getLanguage(language) ? language : 'javascript'
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
<style>
  @import '~highlight.js/styles/github-gist.css';
</style>
