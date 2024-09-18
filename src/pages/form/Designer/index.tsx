import { Collapse } from 'antd'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { components } from './components'
import DesignerPreview from './DesignerPreview'
import { useDesigner, useSortComponents } from './hooks/desgner'
import DesignerConfig from '@/pages/form/Designer/DesignerConfig'

export default function Designer() {
  const sortComponents = useSortComponents()
  const addComponent = useDesigner(state => state.addComponent)

  const removeComponent = useDesigner(state => state.removeComponent)
  function onDragEnd(result: any) {
    if (!result.destination) {
      return
    }
    if (result.destination.droppableId === 'remove') {
      removeComponent(result.draggableId)
      return
    }

    sortComponents(result.source.index, result.destination.index)
  }

  return (
    <div className="fixed left-0 top-0 z-[100] h-screen w-screen bg-white">
      <div className="header h-10 flex items-center justify-center border-b border-b-gray-200 border-b-solid px-2">
        <span
          className="cursor-pointer rounded-3xl bg-gray-300 px-32 py-1 text-white transition-all hover:bg-gray"
        >
          首页
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          backgroundColor: '#00000010',
          gridTemplateColumns: '300px 1fr 300px',
          gridTemplateRows: '1fr',
          height: 'calc(100vh - 40px)',
        }}
      >
        <div className="border-r border-r-gray-200 border-r-solid bg-white">
          <div className="p-2">
            <Collapse className="w-full">
              {components.map(group => (
                <Collapse.Panel key={group.group} header={group.group}>
                  <div className="grid grid-cols-2 gap-2">
                    {group.components.map(component => (
                      <>
                        <div
                          className="flex cursor-pointer justify-center border border-gray-200 border-rounded border-solid bg-blue-200 py-1 text-white hover:bg-blue"
                          onClick={() => addComponent({ id: Date.now(), sort: 0, type: component.metadata.type, props: component.metadata.initialValue })}
                        >
                          {component.metadata.name}
                        </div>
                      </>
                    ))}
                  </div>
                </Collapse.Panel>
              ),
              )}
            </Collapse>
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="remove">
            {(provided, snapshot) => (
              <div className={`relative p-2 ${snapshot.isDraggingOver && 'bg-red-100'}`} ref={provided.innerRef} {...provided.droppableProps}>
                <div className="mx-a h-full w-[375px] flex flex-col bg-white">
                  <DesignerPreview />
                </div>
                <div className="absolute left-0 top-0">
                  TRANS
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="border-l border-l-gray-200 border-l-solid bg-white">
          <div className="h-8 flex items-center border-b border-b-gray-200 border-b-solid px-2">组件配置</div>
          <DesignerConfig />
        </div>
      </div>
    </div>

  )
}
