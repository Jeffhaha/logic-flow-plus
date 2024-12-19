<template>
  <div class="flow-designer">
    <div class="flow-toolbar">
      <Toolbar @command="handleCommand" />
    </div>
    <div class="flow-container">
      <div class="node-panel">
        <NodePanel />
      </div>
      <div class="flow-canvas" ref="lfRef"></div>
      <div class="property-panel">
        <PropertyPanel :selected-element="selectedElement" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import LogicFlow from '@logicflow/core'
import { Toolbar, PropertyPanel, NodePanel } from './components'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/lib/style/index.css'
import { baseNodes } from './config/nodeConfig'

const lfRef = ref<HTMLElement>()
const lf = ref<LogicFlow>()
const selectedElement = ref(null)

onMounted(() => {
  if (lfRef.value) {
    lf.value = new LogicFlow({
      container: lfRef.value,
      grid: true,
      plugins: []
    })
    
    // 初始化事件监听
    initEvents()
    
    // 渲染画布
    lf.value.render()
  }
})

const initEvents = () => {
  if (!lf.value) return
  
  // 节点选中事件
  lf.value.on('node:click', ({ data }) => {
    selectedElement.value = { type: 'node', ...data }
  })
  
  // 边选中事件
  lf.value.on('edge:click', ({ data }) => {
    selectedElement.value = { type: 'edge', ...data }
  })

  // 监听画布的拖拽事件
  const lfContainer = lfRef.value
  if (lfContainer) {
    lfContainer.addEventListener('dragover', (ev: DragEvent) => {
      ev.preventDefault()
      ev.dataTransfer!.dropEffect = 'copy'
    })

    lfContainer.addEventListener('drop', (ev: DragEvent) => {
      ev.preventDefault()
      const nodeType = ev.dataTransfer?.getData('node-type')
      if (!nodeType || !lf.value) return

      const point = lf.value.getPointByClient(ev.clientX, ev.clientY)
      
      // 从配置中获取节点样式
      const nodeConfig = baseNodes.find(node => node.type === nodeType)
      if (!nodeConfig) return

      // 创建节点
      lf.value.addNode({
        type: nodeType,
        x: point.x,
        y: point.y,
        properties: {
          ...nodeConfig.properties?.reduce((acc, prop) => ({
            ...acc,
            [prop.name]: prop.default
          }), {})
        },
        text: nodeConfig.label
      })
    })
  }
}

// 工具栏命令处理
const handleCommand = (command: string) => {
  switch (command) {
    case 'undo':
      lf.value?.undo()
      break
    case 'redo':
      lf.value?.redo()
      break
    case 'zoom-in':
      lf.value?.zoom(true)
      break
    case 'zoom-out':
      lf.value?.zoom(false)
      break
    // 更多命令处理...
  }
}
</script>

<style scoped>
.flow-designer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.flow-toolbar {
  height: 40px;
  border-bottom: 1px solid #ddd;
}

.flow-container {
  flex: 1;
  display: flex;
}

.node-panel {
  width: 200px;
  border-right: 1px solid #ddd;
}

.flow-canvas {
  flex: 1;
  height: 100%;
}

.property-panel {
  width: 300px;
  border-left: 1px solid #ddd;
}
</style> 