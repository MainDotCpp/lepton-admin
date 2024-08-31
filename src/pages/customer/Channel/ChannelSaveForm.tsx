import { ProFormColorPicker, ProFormGroup, ProFormText } from '@ant-design/pro-components'
import { message } from 'antd'
import api from '@/api'
import { Modal } from '@/components'
import convert from '@/utils/convert'

function ChannelSaveFormItems() {
  return (
    <>
      <ProFormText name="id" label="ID" hidden />
      <ProFormText name="name" label="名称" />
      <ProFormGroup>
        <ProFormColorPicker name="textColor" label="文本颜色" />
        <ProFormColorPicker name="backgroundColor" label="背景颜色" />
      </ProFormGroup>
    </>
  )
}

interface SaveFormProps {
  id?: number
  trigger: React.JSX.Element
  onFinish?: () => void
}

function ChannelSaveForm(props: SaveFormProps) {
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    let initialValue: API.ChannelSaveDTO = {}
    if (props.id)
      initialValue = await api.channel.getById({ id: props.id })

    return initialValue
  }
  /**
   * 处理表单提交事件
   * @param values 保存客资渠道传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: API.ChannelSaveDTO) => {
    values.textColor = convert.color.getHex(values.textColor)
    values.backgroundColor = convert.color.getHex(values.backgroundColor)
    await api.channel.save(values)
    message.success('保存客资渠道成功')
    props.onFinish?.()
    return true
  }
  return (
    <Modal
      title={props.id ? '编辑客资渠道' : '创建客资渠道'}
      request={getInitialValues}
      trigger={props.trigger}
      onFinish={handleFinish}
    >
      <ChannelSaveFormItems />
    </Modal>
  )
}

export default ChannelSaveForm
