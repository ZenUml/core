<template>
  <div>
    <transition name="fade">
      <div v-for="(stat, index) in statements" :key="index">
        <statement :context="stat" :from="from" :offset="offset"/>
      </div>
    </transition>
  </div>
</template>

<script>
  import Statement from './Statement'

  export default {
    name: 'block',
    props: ['from', 'context', 'offset'],
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

<style>

</style>
