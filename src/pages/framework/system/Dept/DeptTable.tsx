import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useRef } from 'react'
import { useAccess } from '@umijs/max'
import { useDeptColumns } from './useDeptColumns'
import DeptSaveForm from './DeptSaveForm'
import { queryParams } from '@/utils/request'
import api from '@/api'

async function pageRequest(params: any, sort: any, filter: any) {
  return api.dept.page(queryParams(params, sort, filter))
}

function DeptTable() {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null)
  const columns = useDeptColumns()
  return (
    <ProTable<API.DeptVO>
      rowKey="id"
      actionRef={actionRef}
      scroll={{ x: 'max-content' }}
      columnsState={{ persistenceType: 'localStorage', persistenceKey: 'dept_table_columns_state' }}
      request={pageRequest}
      columns={columns}
      toolbar={{
        actions: [
          access.SYSTEM__DEPT__CREATE && (
            <DeptSaveForm
              key="save"
              onFinish={actionRef.current?.reload}
              trigger={<Button type="primary">创建部门</Button>}
            />
          ),
        ],
      }}
    >
    </ProTable>
  )
}

export default DeptTable
