import { ProFormSelect, ProFormText } from '@ant-design/pro-components'
import { message } from 'antd'
import api from '@/api'
import { Modal } from '@/components'
import { useDeptOptions } from '@/hook/deptQuery'

function DeptSaveFormItems() {
  const { options } = useDeptOptions({ enabled: true })
  return (
    <>
      <ProFormText name="id" label="ID" hidden />
      <ProFormSelect name="parentId" label="上级部门" options={options} disabled></ProFormSelect>
      <ProFormText name="name" label="名称" rules={[{ required: true }]} />
    </>
  )
}

interface SaveFormProps {
  id?: number
  parentId?: number
  trigger: React.JSX.Element
  onFinish?: () => void
}

function DeptSaveForm(props: SaveFormProps) {
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    let initialValue: API.DeptSaveDTO = {
      parentId: props.parentId,
    }
    if (props.id)
      initialValue = await api.dept.getById({ id: props.id })

    return initialValue
  }
  /**
   * 处理表单提交事件
   * @param values 保存部门传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: API.DeptSaveDTO) => {
    await api.dept.save(values)
    message.success('保存部门成功')
    props.onFinish?.()
    return true
  }
  return (
    <Modal
      title={props.id ? '编辑部门' : '创建部门'}
      request={getInitialValues}
      trigger={props.trigger}
      modalProps={{
        destroyOnClose: true,
      }}
      onFinish={handleFinish}
    >
      <DeptSaveFormItems />
    </Modal>
  )
}

export default DeptSaveForm
