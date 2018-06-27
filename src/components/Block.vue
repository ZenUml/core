<template>
  <div>
    <div v-for="(stat, index) in statements" :key="index">
      <statement :context="stat" :from="from"/>
    </div>
  </div>
</template>

<script>
  import Statement from './Statement'

  export default {
    name: 'block',
    props: ['from', 'context'],
    computed: {
      statements: function () {
        return this.context && this.context.stat()
      }
    },
    components: {
      Statement
    }
  }
</script>
