import type { ProColumns } from '@ant-design/pro-components'
import { useAccess } from '@umijs/max'
import { Button, Popconfirm } from 'antd'
import GoodsSaveForm from './GoodsSaveForm'
import api from '@/api'

export function useGoodsColumns(): ProColumns<API.GoodsVO>[] {
  const access = useAccess()
  return [
    { dataIndex: 'id', title: 'ID', hideInSearch: true, sorter: true, filters: true, hidden: true },
    { dataIndex: 'name', title: '商品名称', hideInSearch: true, sorter: true, filters: true },
    { dataIndex: 'price', title: '价格', hideInSearch: true, sorter: true, filters: true, valueType: 'money' },
    { dataIndex: 'status', title: '是否启用', hideInSearch: true, sorter: true, filters: true, valueEnum: { 0: '禁用', 1: '启用' } },
    {
      valueType: 'index',
      title: '操作',
      align: 'center',
      width: 200,
      fixed: 'right',
      render(dom, record, index, action) {
        return (
          <>
            {access.ORDER__GOODS__UPDATE && (
              <GoodsSaveForm
                id={record.id}
                onFinish={action?.reload}
                trigger={(
                  <Button size="small" type="link">
                    编辑
                  </Button>
                )}
              />
            )}
            {access.ORDER__GOODS__DELETE && (
              <Popconfirm
                title="确定删除吗？"
                onConfirm={() =>
                  api.goods.deleteById({ id: record.id || 0 }).then(action?.reload)}
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
