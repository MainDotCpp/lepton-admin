import { PageContainer, ProFormDigit, ProFormText } from '@ant-design/pro-components'
import { Button } from 'antd'
import CustomerTable from './CustomerTable'
import { TenantConfigModal } from '@/components'

function Customer() {
  return (
    <PageContainer
      extra={(
        <>
          <TenantConfigModal>
            <ProFormText name="customerNotifyUrl" label="客资通知机器人Url" />
            <ProFormDigit name="customerTarget" label="客资目标" />
          </TenantConfigModal>
        </>
      )}
    >
      <CustomerTable />
    </PageContainer>
  )
}

export default Customer
