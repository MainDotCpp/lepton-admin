import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useRef } from 'react'
import { useAccess } from '@umijs/max'
import { useChannelColumns } from './useChannelColumns'
import ChannelSaveForm from './ChannelSaveForm'
import { queryParams } from '@/utils/request'
import api from '@/api'

async function pageRequest(params: any, sort: any, filter: any) {
  return api.channel.page(queryParams(params, sort, filter))
}

function ChannelTable() {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null)
  const columns = useChannelColumns()
  return (
    <ProTable<API.ChannelVO>
      rowKey="id"
      actionRef={actionRef}
      scroll={{ x: 'max-content' }}
      columnsState={{ persistenceType: 'localStorage', persistenceKey: 'channel_table_columns_state' }}
      request={pageRequest}
      columns={columns}
      toolbar={{
        actions: [
          access.CUSTOMER__CHANNEL__CREATE && (
            <ChannelSaveForm
              key="save"
              onFinish={actionRef.current?.reload}
              trigger={<Button type="primary">创建客资渠道</Button>}
            />
          ),
        ],
      }}
    >
    </ProTable>
  )
}

export default ChannelTable
