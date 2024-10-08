import { ProFormSelect, ProFormText } from '@ant-design/pro-components'
import { message } from 'antd'
import api from '@/api'
import { Modal } from '@/components'
import convert from '@/utils/convert'

function TenantSaveFormItems() {
  // const { sysPackageOptions } = useSysPackageList();

  return (
    <>
      <ProFormText name="id" label="ID" hidden />
      <ProFormText name="name" label="租户名称" />
      <ProFormText name="code" label="租户编码" />
      <ProFormSelect
        name="type"
        label="状态"
        valueEnum={{
          ACTIVE: '启用',
          INACTIVE: '禁用',
        }}
      />
      <ProFormSelect
        name="packageId"
        label="套餐"
        request={async () =>
          convert.fetchOptions(api.sysPackage.list, {
            label: 'name',
            value: 'id',
          })}
      />
    </>
  )
}

interface TenantSaveFormProps {
  id?: number
  trigger: React.JSX.Element
  onFinish?: () => void
}

function TenantSaveForm(props: TenantSaveFormProps) {
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    let initialValue: API.TenantSaveDTO = {
      type: 'INACTIVE',
    }
    if (props.id)
      initialValue = await api.tenant.getById({ id: props.id })

    return initialValue
  }
  /**
   * 处理表单提交事件
   * @param values 保存租户传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: API.TenantSaveDTO) => {
    await api.tenant.save(values)
    message.success('保存成功')
    props.onFinish?.()
    return true
  }
  return (
    <Modal
      title={props.id ? '编辑租户' : '创建租户'}
      request={getInitialValues}
      trigger={props.trigger}
      onFinish={handleFinish}
    >
      <TenantSaveFormItems />
    </Modal>
  )
}

export default TenantSaveForm
