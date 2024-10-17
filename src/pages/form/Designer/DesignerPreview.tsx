import { Draggable, Droppable } from 'react-beautiful-dnd'
import { DeleteOutlined } from '@ant-design/icons'
import { components as componentsLib } from './components'
import { useComponents, useCurrentComponent, useDesigner } from './hooks/desgner'

export default function DesignerPreview() {
  const components = useComponents()
  const currentComponent = useCurrentComponent()
  const setCurrentComponentById = useDesigner(state => state.setCurrentComponentById)

  return (
    <>
      <Droppable droppableId="my-droppable">
        {provided => (
          <div className="h-full" ref={provided.innerRef} {...provided.droppableProps}>
            {components.map((component, index) => {
              const type = component.type
              const {
                preview: Preview,
                metadata,
              } = componentsLib.flatMap(it => it.components).find(c => c.metadata.type === type)!
              return (
                <Draggable draggableId={`${index}`} index={index}>
                  {(provided, snapshot) => {
                    let tagColor = '#99999930'
                    if (currentComponent?.id === component.id) {
                      tagColor = '#1890FF'
                    }
                    if (snapshot.draggingOver === 'remove') {
                      tagColor = '#FF4D4F'
                    }
                    return (
                      <div
                        className="group relative w-full"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="pointer-events-none">
                          <Preview key={component.id} {...component.props as any} />
                        </div>
                        <div
                          className={`text-md absolute left-full top-2 h-full w-32  `}
                        >
                          <span
                            className="ml-2 cursor-pointer rounded-full px-4 py-1 text-white transition-all"
                            style={{ backgroundColor: tagColor }}
                            onClick={() => {
                              setCurrentComponentById(component.id)
                            }}
                          >
                            {snapshot.draggingOver === 'remove' ? <DeleteOutlined /> : metadata.name}
                          </span>
                        </div>
                      </div>
                    )
                  }}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  )
}
