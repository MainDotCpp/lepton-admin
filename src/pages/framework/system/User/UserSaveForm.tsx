import { ProFormRadio, ProFormSelect, ProFormText } from '@ant-design/pro-components'
import { message } from 'antd'
import api from '@/api'
import { Modal } from '@/components'
import convert from '@/utils/convert'
import { useDict, useDictMap, useDictOptions } from '@/stores/system/dictStore'
import { useDeptEnums, useDeptOptions } from '@/hook/deptQuery'

function UserSaveFormItems() {
  const dataPermissionEnum = useDictMap('system:data_permission')
  const { options: deptOptions } = useDeptOptions({ enabled: true })
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
      <ProFormSelect
        name="deptId"
        label="部门"
        options={deptOptions}
      />
      <ProFormRadio.Group
        name="dataPermission"
        label="数据权限"
        valueEnum={dataPermissionEnum}
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
  const dataPermissionOptions = useDictOptions('system:data_permission')
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    let initialValue: API.UserSaveDTO = {
      dataPermission: dataPermissionOptions.find(it => it.default)?.value,
    }
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
