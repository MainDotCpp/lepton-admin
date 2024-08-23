import { ProFormText, ProFormTreeSelect } from '@ant-design/pro-components'
import { message } from 'antd'
import api from '@/api'
import { Modal } from '@/components'

function RoleSaveFormItems() {
  return (
    <>
      <ProFormText name="id" label="ID" hidden />
      <ProFormText name="name" label="角色名称" />
      <ProFormText name="code" label="角色编码" />
      <ProFormTreeSelect
        name="menuIds"
        label="菜单"
        request={async () => await api.menu.tree({}) as any}
        fieldProps={{
          maxTagCount: 5,
          treeCheckable: true,
          fieldNames: { label: 'name', value: 'id', children: 'children' },
        }}
      />
    </>
  )
}

interface SaveFormProps {
  id?: number
  trigger: React.JSX.Element
  onFinish?: () => void
}

function RoleSaveForm(props: SaveFormProps) {
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    let initialValue: API.RoleSaveDTO = {}
    if (props.id)
      initialValue = await api.role.getById({ id: props.id })

    return initialValue
  }
  /**
   * 处理表单提交事件
   * @param values 保存角色传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: API.RoleSaveDTO) => {
    await api.role.save(values)
    message.success('保存角色成功')
    props.onFinish?.()
    return true
  }
  return (
    <Modal
      title={props.id ? '编辑角色' : '创建角色'}
      request={getInitialValues}
      trigger={props.trigger}
      onFinish={handleFinish}
    >
      <RoleSaveFormItems />
    </Modal>
  )
}

export default RoleSaveForm
