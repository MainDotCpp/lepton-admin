import type { ProColumns } from '@ant-design/pro-components'
import { useAccess } from '@umijs/max'
import { Button, Popconfirm } from 'antd'
import dayjs from 'dayjs'
import CustomerSaveForm from './CustomerSaveForm'
import api from '@/api'
import { useUserOptions } from '@/hook/framework/userQuery'
import { useChannelEnums } from '@/hook/channelQuery'
import { useDictMap, useDictOptions } from '@/stores/system/dictStore'
import OrderSaveForm from '@/pages/order/Order/OrderSaveForm'
import { useBrandEnums } from '@/hook/brandQuery'

export function useCustomerColumns(): ProColumns<API.CustomerVO>[] {
  const customerSourceEnums = useDictMap('customer:source')
  const followStatusEnums = useDictMap('customer:follow_up_status')
  const photoType = useDictMap('customer:photo_type')
  const { enums: userEnums } = useUserOptions({ enabled: true })
  const { enums: channelEnums } = useChannelEnums({ enabled: true })
  const { enums: brandEnums } = useBrandEnums({ enabled: true })
  const access = useAccess()
  return [
    { width: 150, ellipsis: true, dataIndex: 'id', title: 'ID', hideInSearch: true, sorter: true, filters: true, hidden: true },
    { width: 150, ellipsis: true, dataIndex: 'keywords', title: '关键词', hideInTable: true, tooltip: '支持客户名称、手机号码、微信号模糊搜索' },
    { width: 150, ellipsis: true, dataIndex: 'brandId', title: '品牌', filters: true, valueEnum: brandEnums },
    { width: 150, ellipsis: true, dataIndex: 'source', title: '客资来源', hideInSearch: true, sorter: true, filters: true, valueEnum: customerSourceEnums },
    { width: 150, ellipsis: true, dataIndex: 'photoType', title: '拍摄类型', hideInSearch: true, sorter: true, filters: true, valueEnum: photoType },
    { width: 150, ellipsis: true, dataIndex: 'name', title: '客户名称', hideInSearch: true, sorter: true, filters: true },
    { width: 150, ellipsis: true, dataIndex: 'phone', title: '手机号码', hideInSearch: true, sorter: true, filters: true, copyable: true },
    { width: 150, ellipsis: true, dataIndex: 'wechat', title: '微信号', hideInSearch: true, sorter: true, filters: true, copyable: true },
    { width: 150, ellipsis: true, dataIndex: 'channelId', filters: true, title: '渠道', valueEnum: channelEnums },
    { width: 150, ellipsis: true, dataIndex: 'followStatus', title: '跟进状态', hideInSearch: true, sorter: true, filters: true, valueEnum: followStatusEnums },
    { width: 150, ellipsis: true, dataIndex: 'saleId', title: '销售', filters: true, valueEnum: userEnums },
    { width: 150, ellipsis: true, dataIndex: 'createdAt', title: '创建时间', sorter: true, defaultSortOrder: 'descend', valueType: 'dateRange', render: (_, record) => record.createdAt, initialValue: [
      dayjs().startOf('month').format('YYYY-MM-DD'),
      dayjs().endOf('month').format('YYYY-MM-DD'),
    ], search: {
      transform: (value) => {
        return {
          createdAt: [`${value[0]} 00:00:00`, `${value[1]} 23:59:59`],
        }
      },
    } },
    { width: 150, ellipsis: true, dataIndex: 'createdById', title: '创建人', filters: true, valueEnum: userEnums },
    { width: 150, ellipsis: true, dataIndex: 'remark', title: '备注', hideInSearch: true },
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
            {access.ORDER__ORDER__CREATE && (
              <OrderSaveForm
                customerId={record.id}
                trigger={(
                  <Button size="small" type="link">
                    创建订单
                  </Button>
                )}
                onFinish={action?.reload}
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
