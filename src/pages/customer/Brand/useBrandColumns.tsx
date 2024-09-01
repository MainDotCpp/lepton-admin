import type { ProColumns } from '@ant-design/pro-components'
import { useAccess } from '@umijs/max'
import { Button, Popconfirm } from 'antd'
import BrandSaveForm from './BrandSaveForm'
import api from '@/api'

export function useBrandColumns(): ProColumns<API.BrandVO>[] {
  const access = useAccess()
  return [
    { dataIndex: 'id', title: 'ID', hideInSearch: true, sorter: true, filters: true, hidden: true },
    { dataIndex: 'id', title: 'ID', hideInSearch: true, sorter: true, filters: true },
    { dataIndex: 'name', title: '名称', hideInSearch: true, sorter: true, filters: true },
    {
      valueType: 'index',
      title: '操作',
      align: 'center',
      width: 200,
      fixed: 'right',
      render(dom, record, index, action) {
        return (
          <>
            {access.CUSTOMER__BRAND__UPDATE && (
              <BrandSaveForm
                id={record.id}
                onFinish={action?.reload}
                trigger={(
                  <Button size="small" type="link">
                    编辑
                  </Button>
                )}
              />
            )}
            {access.CUSTOMER__BRAND__DELETE && (
              <Popconfirm
                title="确定删除吗？"
                onConfirm={() =>
                  api.brand.deleteById({ id: record.id || 0 }).then(action?.reload)}
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
