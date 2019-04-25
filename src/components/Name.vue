<template>
  <div class="name">
    <div class="container">
      <label>{{title}}</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'name',
    props: ['title']
  }
</script>

<style>
  .name .container {
    position: fixed;
    display: inline-block;
    padding: 5px;
    background: rgba(170, 170, 170, 0.1);
  }
</style>
