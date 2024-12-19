<template>
  <div class="app-container">
    <FlowDesigner />
  </div>
</template>

<script setup lang="ts">
import FlowDesigner from './components/FlowDesigner/index.vue'
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.app-container {
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
}
</style>
