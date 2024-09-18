import { ProForm } from '@ant-design/pro-components'
import { useEffect } from 'react'
import { useCurrentComponent, useDesigner } from './hooks/desgner'
import { components as componentsLib } from './components'

export default function DesignerConfig() {
  const currentComponent = useCurrentComponent()
  const updateComponentProps = useDesigner(state => state.updateComponentProps)
  const type = currentComponent?.type
  const Config = componentsLib.flatMap(it => it.components).find(c => c.metadata.type === type)?.config

  const [propsForm] = ProForm.useForm()

  useEffect(() => {
    propsForm.setFieldsValue(currentComponent?.props)
  }, [currentComponent])

  if (!currentComponent)
    return <>请选择组件</>
  return (
    <>
      <div className="w-full p-2">
        <ProForm
          form={propsForm}
          submitter={false}
          initialValues={currentComponent.props}
          onValuesChange={(value) => {
            updateComponentProps(currentComponent.id, value)
          }}
        >
          {Config && <Config />}
        </ProForm>
      </div>
    </>
  )
}
