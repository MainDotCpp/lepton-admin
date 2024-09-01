import { PageContainer, ProFormText } from '@ant-design/pro-components'
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
          </TenantConfigModal>
        </>
      )}
    >
      <CustomerTable />
    </PageContainer>
  )
}

export default Customer
