import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useRef } from 'react'
import { useAccess } from '@umijs/max'
import { useUserColumns } from './useUserColumns'
import UserSaveForm from './UserSaveForm'
import { queryParams } from '@/utils/request'
import api from '@/api'

async function pageRequest(params: any, sort: any, filter: any) {
  return api.user.page(queryParams(params, sort, filter))
}

function UserTable() {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null)
  const columns = useUserColumns()
  return (
    <ProTable<API.UserVO>
      rowKey="id"
      actionRef={actionRef}
      request={pageRequest}
      columns={columns}
      toolbar={{
        actions: [
          access.SYSTEM__USER__CREATE && (
            <UserSaveForm
              key="save"
              onFinish={() => actionRef.current?.reload()}
              trigger={<Button type="primary">创建用户</Button>}
            />
          ),
        ],
      }}
    >
    </ProTable>
  )
}

export default UserTable
