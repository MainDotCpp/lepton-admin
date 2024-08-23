import { ProFormText } from '@ant-design/pro-components'
import { message } from 'antd'
import api from '@/api'
import { Modal } from '@/components'

function MenuSaveFormItems() {
  return (
    <>
      <ProFormText name="id" label="ID" hidden />
    </>
  )
}

interface SaveFormProps {
  id?: number
  trigger: React.JSX.Element
  onFinish?: () => void
}

function MenuSaveForm(props: SaveFormProps) {
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    let initialValue: API.MenuSaveDTO = {
    }
    if (props.id)
      initialValue = await api.menu.getById({ id: props.id })

    return initialValue
  }
  /**
   * 处理表单提交事件
   * @param values 保存菜单传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: API.MenuSaveDTO) => {
    await api.menu.save(values)
    message.success('保存菜单成功')
    props.onFinish?.()
    return true
  }
  return (
    <Modal
      title={props.id ? '编辑菜单' : '创建菜单'}
      request={getInitialValues}
      trigger={props.trigger}
      onFinish={handleFinish}
    >
      <MenuSaveFormItems />
    </Modal>
  )
}

export default MenuSaveForm
