import type { ProColumns } from '@ant-design/pro-components'
import { useAccess } from '@umijs/max'
import { Button, Popconfirm } from 'antd'
import CustomerSaveForm from './CustomerSaveForm'
import api from '@/api'
import { useUserOptions } from '@/hook/framework/userQuery'
import { useChannelEnums } from '@/hook/channelQuery'
import { useDictMap, useDictOptions } from '@/stores/system/dictStore'

export function useCustomerColumns(): ProColumns<API.CustomerVO>[] {
  const customerSourceEnums = useDictMap('customer:source')
  const followStatusEnums = useDictMap('customer:follow_up_status')
  const { enums: userEnums } = useUserOptions({ enabled: true })
  const { enums: channelEnums } = useChannelEnums({ enabled: true })
  const access = useAccess()
  return [
    { dataIndex: 'id', title: 'ID', hideInSearch: true, sorter: true, filters: true, hidden: true },
    { dataIndex: 'keywords', title: '关键词', hideInTable: true, tooltip: '支持客户名称、手机号码、微信号模糊搜索' },
    { dataIndex: 'source', title: '客资来源', hideInSearch: true, sorter: true, filters: true, valueEnum: customerSourceEnums },
    { dataIndex: 'name', title: '客户名称', hideInSearch: true, sorter: true, filters: true },
    { dataIndex: 'phone', title: '手机号码', hideInSearch: true, sorter: true, filters: true, copyable: true },
    { dataIndex: 'wechat', title: '微信号', hideInSearch: true, sorter: true, filters: true, copyable: true },
    { dataIndex: 'channelId', filters: true, title: '渠道', valueEnum: channelEnums },
    { dataIndex: 'followStatus', title: '跟进状态', hideInSearch: true, sorter: true, filters: true, valueEnum: followStatusEnums },
    { dataIndex: 'saleId', title: '销售', filters: true, valueEnum: userEnums },
    { dataIndex: 'createdAt', title: '创建时间', hideInSearch: true, sorter: true, filters: true },
    { dataIndex: 'createdById', title: '创建人', filters: true, valueEnum: userEnums },
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
