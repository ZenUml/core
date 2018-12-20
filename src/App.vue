<template>
  <div id="app">
    <div>
      <b-btn v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-btn>
      <b-collapse id="collapse1" visible class="mt-2">
        <SeqDiagram />
      </b-collapse>
    </div>
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
