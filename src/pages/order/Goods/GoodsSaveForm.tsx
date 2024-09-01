import { ProFormMoney, ProFormSwitch, ProFormText } from '@ant-design/pro-components'
import { message } from 'antd'
import api from '@/api'
import { Modal } from '@/components'

function GoodsSaveFormItems() {
  return (
    <>
      <ProFormText name="id" label="ID" hidden />
      <ProFormText name="name" label="名称" rules={[{ required: true }]} />
      <ProFormMoney name="price" label="价格" rules={[{ required: true }]} />
      <ProFormSwitch name="status" label="是否启用" />
    </>
  )
}

interface SaveFormProps {
  id?: number
  trigger: React.JSX.Element
  onFinish?: () => void
}

function GoodsSaveForm(props: SaveFormProps) {
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    let initialValue: API.GoodsSaveDTO = {
    }
    if (props.id)
      initialValue = await api.goods.getById({ id: props.id })

    return initialValue
  }
  /**
   * 处理表单提交事件
   * @param values 保存商品传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: any) => {
    const data: API.GoodsSaveDTO = {
      ...values,
      status: values.status ? 1 : 0,
    }

    await api.goods.save(data)
    message.success('保存商品成功')
    props.onFinish?.()
    return true
  }
  return (
    <Modal
      title={props.id ? '编辑商品' : '创建商品'}
      request={getInitialValues}
      trigger={props.trigger}
      onFinish={handleFinish}
    >
      <GoodsSaveFormItems />
    </Modal>
  )
}

export default GoodsSaveForm
