export interface NodeConfig {
  type: string
  label: string
  icon?: string
  style?: Record<string, any>
  properties?: Array<{
    name: string
    label: string
    type: string
    default?: any
  }>
}

// 基础节点配置
export const baseNodes: NodeConfig[] = [
  {
    type: 'start',
    label: '开始节点',
    icon: 'Play',
    style: {
      fill: '#C2E7FF',
      stroke: '#1890FF',
      radius: 20
    },
    properties: [
      {
        name: 'name',
        label: '节点名称',
        type: 'string',
        default: '开始'
      }
    ]
  },
  {
    type: 'task',
    label: '任务节点',
    icon: 'Document',
    style: {
      fill: '#FFF',
      stroke: '#1890FF',
      width: 100,
      height: 50
    },
    properties: [
      {
        name: 'name',
        label: '节点名称',
        type: 'string',
        default: '任务'
      },
      {
        name: 'assignee',
        label: '执行人',
        type: 'string'
      }
    ]
  },
  {
    type: 'end',
    label: '结束节点',
    icon: 'CircleClose',
    style: {
      fill: '#FFE4E4',
      stroke: '#FF4D4F',
      radius: 20
    },
    properties: [
      {
        name: 'name',
        label: '节点名称',
        type: 'string',
        default: '结束'
      }
    ]
  }
] 