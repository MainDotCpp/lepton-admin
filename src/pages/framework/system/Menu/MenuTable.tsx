import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useRef } from 'react'
import { useAccess } from '@umijs/max'
import { useMenuColumns } from './useMenuColumns'
import MenuSaveForm from './MenuSaveForm'
import { queryParams } from '@/utils/request'
import api from '@/api'

async function pageRequest(params: any, sort: any, filter: any) {
  return api.menu.page(queryParams(params, sort, filter))
}

function MenuTable() {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null)
  const columns = useMenuColumns()
  return (
    <ProTable<API.MenuVO>
      rowKey="id"
      actionRef={actionRef}
      request={pageRequest}
      columns={columns}
      toolbar={{
        actions: [
          access.SYSTEM__MENU__CREATE && (
            <MenuSaveForm
              key="save"
              onFinish={actionRef.current?.reload}
              trigger={<Button type="primary">创建菜单</Button>}
            />
          ),
        ],
      }}
    >
    </ProTable>
  )
}

export default MenuTable
