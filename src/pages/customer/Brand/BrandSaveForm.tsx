import { ProFormText } from '@ant-design/pro-components'
import { message } from 'antd'
import api from '@/api'
import { Modal } from '@/components'

function BrandSaveFormItems() {
  return (
    <>
      <ProFormText name="id" label="ID" hidden />
      <ProFormText name="name" label="名称" rules={[{ required: true }]} />
    </>
  )
}

interface SaveFormProps {
  id?: number
  trigger: React.JSX.Element
  onFinish?: () => void
}

function BrandSaveForm(props: SaveFormProps) {
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    let initialValue: API.BrandSaveDTO = {
    }
    if (props.id)
      initialValue = await api.brand.getById({ id: props.id })

    return initialValue
  }
  /**
   * 处理表单提交事件
   * @param values 保存品牌传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: API.BrandSaveDTO) => {
    await api.brand.save(values)
    message.success('保存品牌成功')
    props.onFinish?.()
    return true
  }
  return (
    <Modal
      title={props.id ? '编辑品牌' : '创建品牌'}
      request={getInitialValues}
      trigger={props.trigger}
      onFinish={handleFinish}
    >
      <BrandSaveFormItems />
    </Modal>
  )
}

export default BrandSaveForm
