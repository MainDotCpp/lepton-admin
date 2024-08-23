import type { ProColumns } from '@ant-design/pro-components'
import { useAccess } from '@umijs/max'
import { Button, Popconfirm } from 'antd'
import CustomerSaveForm from './CustomerSaveForm'
import api from '@/api'
import { useUserOptions } from '@/hook/framework/userQuery'
import { useChannelEnums, useChannelOptions } from '@/hook/channelQuery'

export function useCustomerColumns(): ProColumns<API.CustomerVO>[] {
  const { enums: requestUserOptions } = useUserOptions({ enabled: true })
  const { enums: requestChannelOptions } = useChannelEnums({ enabled: true })
  const access = useAccess()
  return [
    { dataIndex: 'id', title: 'ID', hideInSearch: true, sorter: true, filters: true, hidden: true },
    { dataIndex: 'id', title: 'ID', hideInSearch: true, sorter: true, filters: true },
    { dataIndex: 'name', title: '客户名称', hideInSearch: true, sorter: true, filters: true },
    { dataIndex: 'phone', title: '手机号码', hideInSearch: true, sorter: true, filters: true, copyable: true },
    { dataIndex: 'wechat', title: '微信号', hideInSearch: true, sorter: true, filters: true, copyable: true },
    { dataIndex: 'channelId', sorter: true, filters: true, title: '渠道', valueEnum: requestChannelOptions },
    { dataIndex: 'saleId', title: '销售', valueEnum: requestUserOptions },
    { dataIndex: 'createTime', title: '创建时间', hideInSearch: true, sorter: true, filters: true },
    { dataIndex: 'createdById', title: '创建人', valueEnum: requestUserOptions },
    {
      valueType: 'index',
      title: '操作',
      align: 'center',
      width: 200,
      fixed: 'right',
      render(dom, record, index, action) {
        return (
          <>
            {access.CUSTOMER__CUSTOMER__UPDATE && (
              <CustomerSaveForm
                id={record.id}
                onFinish={action?.reload}
                trigger={(
                  <Button size="small" type="link">
                    编辑
                  </Button>
                )}
              />
            )}
            {access.CUSTOMER__CUSTOMER__DELETE && (
              <Popconfirm
                title="确定删除吗？"
                onConfirm={() =>
                  api.customer.deleteById({ id: record.id || 0 }).then(action?.reload)}
              >
                <Button size="small" type="link" danger>
                  删除
                </Button>
              </Popconfirm>
            )}
          </>
        )
      },
    },
  ]
}
