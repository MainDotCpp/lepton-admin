import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { ComponentType } from '@/pages/form/Designer/components'

interface Component {
  id: number
  sort: number
  type: ComponentType
  props: Record<string, any>
}

interface State {
  currentComponent: Component | null
  components: Component[]
}

interface Action {
  setCurrentComponentById: (id: number) => void
  sortComponents: (from: number, to: number) => void
  removeComponent: (id: number) => void
  addComponent: (component: Component) => void
  updateComponentProps: (id: number, props: Record<string, any>) => void
}
export const useDesigner = create<State & Action>()(
  immer(set => ({
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
        state.components.splice(index as number, 1)
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
          console.log(component.props)
        }
      })
    },
  })),
)

export const useCurrentComponent = () => useDesigner(state => state.currentComponent)
export const useComponents = () => useDesigner(state => state.components)
export const useSetCurrentComponentById = () => useDesigner(state => state.setCurrentComponentById)
export const useSortComponents = () => useDesigner(state => state.sortComponents)
export const useRemoveComponent = () => useDesigner(state => state.removeComponent)
