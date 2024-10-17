import { Collapse } from 'antd'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { components } from './components'
import DesignerPreview from './DesignerPreview'
import { useDesigner } from './hooks/desgner'
import DesignerConfig from '@/pages/form/Designer/DesignerConfig'

export default function Designer() {
  const addComponent = useDesigner(state => state.addComponent)
  const onDragEnd = useDesigner(state => state.onDragEnd)
  const onSave = useDesigner(state => state.onSave)

  return (
    <div className="fixed left-0 top-0 z-[100] h-screen w-screen bg-white">
      <div className="header h-10 flex items-center justify-between border-b border-b-gray-200 border-b-solid px-8">
        <div className="logo"></div>
        <span
          className="cursor-pointer rounded-3xl bg-gray-300 px-32 py-1 text-white transition-all hover:bg-gray"
        >
          首页
        </span>
        <div className="action">
          <span onClick={onSave}>保存</span>
        </div>
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
                          className="flex cursor-pointer select-none justify-center border border-gray-200 border-rounded border-solid bg-blue-200 py-1 text-white hover:bg-blue"
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
