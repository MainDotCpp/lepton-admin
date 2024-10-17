import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useRef } from 'react'
import { useAccess } from '@umijs/max'
import { useOrderColumns } from './useOrderColumns'
import { queryParams } from '@/utils/request'
import api from '@/api'

async function pageRequest(params: any, sort: any, filter: any) {
  return api.order.page(queryParams(params, sort, filter))
}

function OrderTable() {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null)
  const columns = useOrderColumns()

  const exportExcel = () => {
    api.order.exportExcel({}, {
      responseType: 'blob',
      getResponse: true,
    }).then((data) => {
      const url = window.URL.createObjectURL(new Blob([data]))
      const a = document.createElement('a')
      a.href = url
      a.download = `订单数据.xlsx`
      a.click()
    })
  }
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
          access.ORDER__ORDER__EXPORT && (
            <Button key="export" type="dashed" onClick={exportExcel}>
              导出
            </Button>
          ),
        ],
      }}
    >
    </ProTable>
  )
}

export default OrderTable
