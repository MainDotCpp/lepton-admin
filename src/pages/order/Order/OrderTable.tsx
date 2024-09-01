import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useRef } from 'react'
import { useAccess } from '@umijs/max'
import { useOrderColumns } from './useOrderColumns'
import OrderSaveForm from './OrderSaveForm'
import { queryParams } from '@/utils/request'
import api from '@/api'

async function pageRequest(params: any, sort: any, filter: any) {
  return api.order.page(queryParams(params, sort, filter))
}

function OrderTable() {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null)
  const columns = useOrderColumns()
  return (
    <ProTable<API.OrderVO>
      rowKey="id"
      actionRef={actionRef}
      scroll={{ x: 'max-content' }}
      columnsState={{ persistenceType: 'localStorage', persistenceKey: 'order_table_columns_state' }}
      request={pageRequest}
      columns={columns}
      toolbar={{
        actions: [
          // access.ORDER__ORDER__CREATE && (
          //   <OrderSaveForm
          //     key="save"
          //     onFinish={actionRef.current?.reload}
          //     trigger={<Button type="primary">创建订单</Button>}
          //   />
          // ),
        ],
      }}
    >
    </ProTable>
  )
}

export default OrderTable
