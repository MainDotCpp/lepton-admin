import Button from './Button'

export const components = [
  { group: '基础组件', components: [Button] },
  { group: '表单组件', components: [] },
  { group: '主题风格组件', components: [] },
  { group: '抢先看组件', components: [] },
]

export type ComponentType = 'BUTTON' | 'INPUT' | 'TEXTAREA' | 'SELECT' | 'RADIO' | 'CHECKBOX'
