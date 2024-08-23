import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useRef } from 'react'
import { useTenantColumns } from './columnsData'
import TenantSaveForm from './TenantSaveForm'
import { queryParams } from '@/utils/request'
import api from '@/api'

async function pageRequest(params: any, sort: any, filter: any) {
  return api.tenant.page(queryParams(params, sort, filter))
}

function TenantTable() {
  const actionRef = useRef<ActionType>(null)
  const columns = useTenantColumns()
  return (
    <ProTable<API.TenantVO, API.TenantDto>
      rowKey="id"
      actionRef={actionRef}
      request={pageRequest}
      columns={columns}
      toolbar={{
        actions: [
          <TenantSaveForm
            key="save"
            onFinish={actionRef.current?.reload}
            trigger={<Button type="primary">创建租户</Button>}
          />,
        ],
      }}
    >
    </ProTable>
  )
}

export default TenantTable
