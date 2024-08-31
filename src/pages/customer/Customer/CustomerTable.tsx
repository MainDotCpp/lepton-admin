import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useRef } from 'react'
import { useAccess } from '@umijs/max'
import { useCustomerColumns } from './useCustomerColumns'
import CustomerSaveForm from './CustomerSaveForm'
import { queryParams } from '@/utils/request'
import api from '@/api'

async function pageRequest(params: any, sort: any, filter: any) {
  return api.customer.page(queryParams(params, sort, filter))
}

function CustomerTable() {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null)

  const columns = useCustomerColumns()
  return (
    <>
      <ProTable<API.CustomerVO>
        rowKey="id"
        actionRef={actionRef}
        scroll={{ x: 'max-content' }}
        columnsState={{ persistenceType: 'localStorage', persistenceKey: 'customer_table_columns_state' }}
        request={pageRequest}
        columns={columns}
        toolbar={{
          actions: [
            access.CUSTOMER__CUSTOMER__CREATE && (
              <CustomerSaveForm
                key="save"
                onFinish={actionRef.current?.reload}
                trigger={<Button type="primary">创建客资</Button>}
              />
            ),
          ],
        }}
      >
      </ProTable>
    </>
  )
}

export default CustomerTable
