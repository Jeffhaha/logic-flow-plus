<template>
  <div class="node-panel">
    <el-scrollbar>
      <div class="node-list">
        <div
          v-for="node in nodes"
          :key="node.type"
          class="node-item"
          draggable="true"
          @dragstart="handleDragStart($event, node)"
        >
          <el-icon><component :is="node.icon" /></el-icon>
          <span>{{ node.label }}</span>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { baseNodes, type NodeConfig } from './config/nodeConfig'
import * as ElementPlusIcons from '@element-plus/icons-vue'

const nodes = ref(baseNodes)

const handleDragStart = (ev: DragEvent, node: NodeConfig) => {
  if (ev.dataTransfer) {
    ev.dataTransfer.setData('node-type', node.type)
    ev.dataTransfer.effectAllowed = 'copy'
  }
}
</script>

<style scoped>
.node-panel {
  height: 100%;
  background: #fafafa;
}

.node-list {
  padding: 8px;
}

.node-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  margin-bottom: 8px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: move;
  user-select: none;
}

.node-item:hover {
  border-color: #1890ff;
  background: #e6f7ff;
}

.node-item .el-icon {
  font-size: 16px;
}
</style> 