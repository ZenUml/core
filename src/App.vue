<template>
  <div id="app">
    <SeqDiagram />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SeqDiagram from './components/SeqDiagram'

export default {
  name: 'app',
  components: {
    HelloWorld,
    SeqDiagram
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
