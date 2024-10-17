import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useRef } from 'react'
import { useAccess } from '@umijs/max'
import dayjs from 'dayjs'
import type { ProFormInstance } from '@ant-design/pro-form'
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
  const formRef = useRef<ProFormInstance>(null)

  const columns = useCustomerColumns()

  const exportExcel = async () => {
    const params = formRef.current?.getFieldsValue()
    if (params.createdAt) {
      params.createdAt = [dayjs(params.createdAt[0]).format('YYYY-MM-DD 00:00:00'), dayjs(params.createdAt[1]).format('YYYY-MM-DD 23:59:59')]
    }

    const data = await api.customer.exportExcel(params, {
      responseType: 'blob',
      getResponse: true,
    })
    const url = window.URL.createObjectURL(new Blob([data]))
    const a = document.createElement('a')
    a.href = url
    a.download = `客资数据_${dayjs().format('YYYY-MM-DD_HH:mm:ss')}.xlsx`
    a.click()
  }
  return (
    <>
      <ProTable<API.CustomerVO>
        rowKey="id"
        actionRef={actionRef}
        formRef={formRef}
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
            access.CUSTOMER__CUSTOMER__EXPORT && (
              <Button key="export" type="dashed" onClick={exportExcel}>
                导出
              </Button>
            ),
          ],
        }}
      >
      </ProTable>
    </>
  )
}

export default CustomerTable
