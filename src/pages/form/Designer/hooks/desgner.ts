import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { DropResult } from 'react-beautiful-dnd'
import { terminal } from '@@/exports'
import type { ComponentType } from '@/pages/form/Designer/components'
import PageVO = API.PageVO

interface Component {
  id: number
  sort: number
  type: ComponentType
  props: Record<string, any>
}

interface State {
  page: PageVO | null
  currentComponent: Component | null
  components: Component[]
}

interface Action {
  setCurrentComponentById: (id: number) => void
  sortComponents: (from: number, to: number) => void
  removeComponent: (id: number | string) => void
  addComponent: (component: Component) => void
  updateComponentProps: (id: number, props: Record<string, any>) => void
  onDragEnd: (result: DropResult) => void
  // 保存页面数据
  onSave: () => void
}
export const useDesigner = create<State & Action>()(
  immer((set, get) => ({
    page: null,
    currentComponent: null,
    components: [],
    setCurrentComponentById: (id) => {
      set((state) => {
        state.currentComponent = state.components.find(c => c.id === id) || null
      })
    },
    sortComponents: (from, to) => {
      set((state) => {
        const fromComponent = state.components[from]
        state.components.splice(from, 1)
        state.components.splice(to, 0, fromComponent)
      })
    },
    removeComponent: (index: number | string) => {
      set((state) => {
        const removalComponent = state.components.splice(index as number, 1)
        // 如果删除的是当前选中的组件，清空当前选中组件
        if (state.currentComponent?.id === removalComponent[0].id) {
          state.currentComponent = null
        }
      })
    },
    addComponent: (component) => {
      set((state) => {
        state.components.push(component)
      })
    },
    updateComponentProps: (id, props) => {
      set((state) => {
        const component = state.components.find(c => c.id === id)
        if (component) {
          component.props = { ...component.props, ...props }
          terminal.log('updateComponentProps', component)
        }
      })
    },
    onDragEnd: (result) => {
      if (!result.destination) {
        return
      }
      if (result.destination.droppableId === 'remove') {
        get().removeComponent(result.draggableId)
        return
      }

      get().sortComponents(result.source.index, result.destination.index)
    },
    onSave: () => {
      terminal.log(JSON.stringify(get().components))
    },
  })),
)

export const useCurrentComponent = () => useDesigner(state => state.currentComponent)
export const useComponents = () => useDesigner(state => state.components)
export const useSetCurrentComponentById = () => useDesigner(state => state.setCurrentComponentById)
export const useSortComponents = () => useDesigner(state => state.sortComponents)
export const useRemoveComponent = () => useDesigner(state => state.removeComponent)
