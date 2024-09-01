import type { ProColumns } from '@ant-design/pro-components'
import { useAccess } from '@umijs/max'
import { Button, Popconfirm } from 'antd'
import OrderSaveForm from './OrderSaveForm'
import api from '@/api'
import { useUserOptions } from '@/hook/framework/userQuery'

export function useOrderColumns(): ProColumns<API.OrderVO>[] {
  const access = useAccess()
  const { enums: userEnums } = useUserOptions({ enabled: true })
  return [
    { dataIndex: 'id', title: 'ID', hideInSearch: true, sorter: true, filters: true, hidden: true },
    { dataIndex: ['customer', 'name'], title: '客户名称', hideInSearch: true, sorter: true, filters: true },
    { dataIndex: ['customer', 'phone'], title: '手机号码', hideInSearch: true, sorter: true, filters: true },
    { dataIndex: ['customer', 'wechat'], title: '微信号', hideInSearch: true, sorter: true, filters: true },
    { dataIndex: ['goods', 'name'], title: '商品名称', hideInSearch: true, sorter: true, filters: true },
    { dataIndex: ['goods', 'price'], title: '商品价格', hideInSearch: true, sorter: true, filters: true, valueType: 'money' },
    { dataIndex: ['payAmount'], title: '支付金额', hideInSearch: true, sorter: true, filters: true, valueType: 'money' },
    { dataIndex: ['sellerId'], title: '销售', hideInSearch: true, sorter: true, filters: true, valueType: 'select', valueEnum: userEnums },
    { dataIndex: ['createdAt'], title: '创建时间', hideInSearch: true, sorter: true, filters: true },
    {
      valueType: 'index',
      title: '操作',
      align: 'center',
      width: 200,
      fixed: 'right',
      render(dom, record, index, action) {
        return (
          <>
            {access.ORDER__ORDER__UPDATE && (
              <OrderSaveForm
                id={record.id}
                onFinish={action?.reload}
                trigger={(
                  <Button size="small" type="link">
                    编辑
                  </Button>
                )}
              />
            )}
            {access.ORDER__ORDER__DELETE && (
              <Popconfirm
                title="确定删除吗？"
                onConfirm={() =>
                  api.order.deleteById({ id: record.id || 0 }).then(action?.reload)}
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
