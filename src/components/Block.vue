<template>
  <div class="block">
    <div class="statement-container" v-for="(stat, index) in statements" :key="index">
      <statement :context="stat" :selfCallIndent="selfCallIndent" :fragment-offset="0"/>
    </div>
  </div>
</template>

<script>
  import Statement from './Statement'

  export default {
    name: 'block',
    props: ['context', 'selfCallIndent'],
    computed: {
      statements: function () {
        return this.context?.stat()
      }
    },
    components: {
      Statement
    }
  }
</script>

