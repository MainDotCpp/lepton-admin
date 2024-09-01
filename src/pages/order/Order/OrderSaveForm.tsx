import { ProFormMoney, ProFormSelect, ProFormText } from '@ant-design/pro-components'
import { message } from 'antd'
import api from '@/api'
import { Modal } from '@/components'
import { useGoodsOptions } from '@/hook/goodsQuery'
import { useUserInfo } from '@/stores/global'
import { useUserOptions } from '@/hook/framework/userQuery'

function OrderSaveFormItems() {
  const { options: goodsOptions } = useGoodsOptions({ enabled: true })
  const { options: userOptions } = useUserOptions({ enabled: true })
  return (
    <>
      <ProFormText name="id" label="ID" hidden />
      <ProFormText name="customerId" label="客户ID" hidden />
      <ProFormSelect name="goodsId" label="商品" options={goodsOptions} rules={[{ required: true }]} />
      <ProFormMoney name="payAmount" label="支付金额" rules={[{ required: true }]} />
      <ProFormSelect name="sellerId" label="销售" options={userOptions} rules={[{ required: true }]} />
    </>
  )
}

interface SaveFormProps {
  id?: number
  customerId?: number
  trigger: React.JSX.Element
  onFinish?: () => void
}

function OrderSaveForm(props: SaveFormProps) {
  const { options: goodsOptions } = useGoodsOptions({ enabled: true })
  const userInfo = useUserInfo()
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    // 默认套系
    const defaultGoods = goodsOptions?.at(0)

    let initialValue: API.OrderSaveDTO = {
      customerId: props.customerId,
      goodsId: defaultGoods?.value,
      payAmount: defaultGoods?.price,
      sellerId: userInfo?.id,
    }
    if (props.id) {
      const vo = await api.order.getById({ id: props.id })
      initialValue = {
        ...vo,
        customerId: vo.customer?.id,
        goodsId: vo.goods?.id,
      }
    }

    return initialValue
  }
  /**
   * 处理表单提交事件
   * @param values 保存订单传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: API.OrderSaveDTO) => {
    await api.order.save(values)
    message.success('保存订单成功')
    props.onFinish?.()
    return true
  }
  return (
    <Modal
      title={props.id ? '编辑订单' : '创建订单'}
      request={getInitialValues}
      trigger={props.trigger}
      onFinish={handleFinish}
    >
      <OrderSaveFormItems />
    </Modal>
  )
}

export default OrderSaveForm
