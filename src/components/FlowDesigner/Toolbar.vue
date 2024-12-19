<template>
  <div class="toolbar">
    <el-button-group>
      <el-button @click="emit('command', 'undo')" :icon="ArrowLeft">撤销</el-button>
      <el-button @click="emit('command', 'redo')" :icon="ArrowRight">重做</el-button>
    </el-button-group>
    
    <el-button-group>
      <el-button @click="emit('command', 'zoom-in')" :icon="ZoomIn">放大</el-button>
      <el-button @click="emit('command', 'zoom-out')" :icon="ZoomOut">缩小</el-button>
    </el-button-group>
    
    <el-button-group>
      <el-button @click="emit('command', 'save')" :icon="Download">保存</el-button>
      <el-button @click="emit('command', 'download')" :icon="Upload">下载</el-button>
    </el-button-group>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, ArrowRight, ZoomIn, ZoomOut, Download, Upload } from '@element-plus/icons-vue'

const emit = defineEmits(['command'])
</script>

<style scoped>
.toolbar {
  padding: 8px;
  display: flex;
  gap: 16px;
}
</style> 