import { PageContainer, ProFormDigit, ProFormText } from '@ant-design/pro-components'
import OrderTable from './OrderTable'
import { TenantConfigModal } from '@/components'

function Order() {
  return (
    <PageContainer
      extra={(
        <>
          <TenantConfigModal>
            <ProFormText name="orderNotifyUrl" label="订单通知机器人Url" />
            <ProFormDigit name="orderTarget" label="订单目标" />
          </TenantConfigModal>
        </>
      )}
    >
      <OrderTable />
    </PageContainer>
  )
}

export default Order
