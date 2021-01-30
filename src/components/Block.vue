<template>
  <div class="block">
    <div class="statement-container" v-for="(stat, index) in statements" :key="index">
      <statement :context="stat" :from="from" :selfCallIndent="selfCallIndent" :fragment-offset="fragmentOffset"/>
    </div>
  </div>
</template>

<script>
  import Statement from './Statement'

  export default {
    name: 'block',
    props: ['from', 'context', 'selfCallIndent', 'fragmentOffset'],
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

