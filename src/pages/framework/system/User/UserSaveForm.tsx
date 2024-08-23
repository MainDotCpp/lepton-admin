import { ProFormSelect, ProFormText } from '@ant-design/pro-components'
import { message } from 'antd'
import api from '@/api'
import { Modal } from '@/components'
import convert from '@/utils/convert'

function UserSaveFormItems() {
  return (
    <>
      <ProFormText name="id" label="ID" hidden />
      <ProFormText name="name" label="姓名" />
      <ProFormText name="phone" label="手机号" />
      <ProFormText.Password name="password" label="密码" />
      <ProFormSelect
        name="roleIds"
        label="角色"
        request={async () =>
          convert.fetchOptions(api.role.list, { label: 'name', value: 'id' })}
        mode="multiple"
      />
    </>
  )
}

interface SaveFormProps {
  id?: number
  trigger: React.JSX.Element
  onFinish?: () => void
}

function UserSaveForm(props: SaveFormProps) {
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    let initialValue: API.UserSaveDTO = {}
    if (props.id)
      initialValue = await api.user.getById({ id: props.id })

    return initialValue
  }
  /**
   * 处理表单提交事件
   * @param values 保存用户传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: API.UserSaveDTO) => {
    await api.user.save(values)
    message.success('保存用户成功')
    props.onFinish?.()
    return true
  }
  return (
    <Modal
      title={props.id ? '编辑用户' : '创建用户'}
      request={getInitialValues}
      trigger={props.trigger}
      onFinish={handleFinish}
    >
      <UserSaveFormItems />
    </Modal>
  )
}

export default UserSaveForm
