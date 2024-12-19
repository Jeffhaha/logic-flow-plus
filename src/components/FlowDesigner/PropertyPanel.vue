<template>
  <div class="property-panel">
    <template v-if="selectedElement">
      <div class="panel-header">
        {{ selectedElement.type === 'node' ? '节点属性' : '连线属性' }}
      </div>
      <div class="panel-content">
        <pre>{{ selectedElement }}</pre>
      </div>
    </template>
    <template v-else>
      <div class="panel-empty">
        请选择节点或连线
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps({
  selectedElement: {
    type: Object,
    default: null
  }
})
</script>

<style scoped>
.property-panel {
  height: 100%;
  background: #fff;
  padding: 16px;
}

.panel-header {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e8e8e8;
}

.panel-content {
  font-size: 14px;
}

.panel-empty {
  color: #999;
  text-align: center;
  padding-top: 100px;
}
</style> 