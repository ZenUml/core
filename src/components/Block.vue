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
  .fade-enter-active, .fade-leave-active {
    animation: bounce-in .3s;
  }

  .fade-enter, .fade-leave-to {
    animation: bounce-in .3s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }
</style>
