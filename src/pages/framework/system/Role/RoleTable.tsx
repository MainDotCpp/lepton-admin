import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useRef } from 'react'
import { useAccess } from '@umijs/max'
import { useRoleColumns } from './useRoleColumns'
import RoleSaveForm from './RoleSaveForm'
import { queryParams } from '@/utils/request'
import api from '@/api'

async function pageRequest(params: any, sort: any, filter: any) {
  return api.role.page(queryParams(params, sort, filter))
}

function RoleTable() {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null)
  const columns = useRoleColumns()
  return (
    <ProTable<API.RoleVO>
      rowKey="id"
      actionRef={actionRef}
      request={pageRequest}
      columns={columns}
      scroll={{ x: 'max-content' }}
      columnsState={{ persistenceType: 'localStorage', persistenceKey: 'role_table_columns_state' }}
      toolbar={{
        actions: [
          access.SYSTEM__ROLE__CREATE && (
            <RoleSaveForm
              key="save"
              onFinish={actionRef.current?.reload.bind(null)}
              trigger={<Button type="primary">创建角色</Button>}
            />
          ),
        ],
      }}
    >
    </ProTable>
  )
}

export default RoleTable
