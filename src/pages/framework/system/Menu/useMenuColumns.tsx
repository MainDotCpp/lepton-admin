import type { ProColumns } from '@ant-design/pro-components'
import { useAccess } from '@umijs/max'
import { Button, Popconfirm } from 'antd'
import MenuSaveForm from './MenuSaveForm'
import api from '@/api'

export function useMenuColumns(): ProColumns<API.MenuVO>[] {
  const access = useAccess()
  return [
    { dataIndex: 'id', title: 'ID', hideInSearch: true, sorter: true, filters: true, hidden: true },
    { dataIndex: 'id', title: 'ID', hideInSearch: true, sorter: true, filters: true },
    {
      valueType: 'index',
      title: '操作',
      align: 'center',
      width: 200,
      fixed: 'right',
      render(dom, record, index, action, schema) {
        return (
          <>
            {access.SYSTEM__MENU__UPDATE && (
              <MenuSaveForm
                id={record.id}
                onFinish={action?.reload}
                trigger={(
                  <Button size="small" type="link">
                    编辑
                  </Button>
                )}
              />
            )}
            {access.SYSTEM__MENU__DELETE && (
              <Popconfirm
                title="确定删除吗？"
                onConfirm={() =>
                  api.menu.deleteById({ id: record.id! }).then(action?.reload)}
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
