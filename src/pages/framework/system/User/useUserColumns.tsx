import type { ProColumns } from '@ant-design/pro-components'
import { useAccess } from '@umijs/max'
import { Button, Popconfirm } from 'antd'
import UserSaveForm from './UserSaveForm'
import api from '@/api'

export function useUserColumns(): ProColumns<API.UserVO>[] {
  const access = useAccess()
  return [
    {
      dataIndex: 'id',
      title: 'ID',
      hideInSearch: true,
      sorter: true,
      filters: true,
      hidden: true,
    },
    {
      dataIndex: 'avatar',
      title: '头像',
      hideInSearch: true,
      sorter: true,
      filters: true,
      width: 200,
      valueType: 'avatar',
    },
    {
      dataIndex: 'name',
      title: '姓名',
      hideInSearch: true,
      sorter: true,
      filters: true,
      width: 200,
    },

    {
      dataIndex: 'phone',
      title: '手机号',
      hideInSearch: true,
      sorter: true,
      filters: true,
      width: 200,
    },
    {
      dataIndex: 'roleIds',
      title: '角色',
      sorter: true,
      filters: true,
      width: 200,
      valueType: 'select',
      request: api.role.list,
      fieldProps: {
        fieldNames: { label: 'name', value: 'id' },
      },
    },
    {
      valueType: 'index',
      title: '操作',
      align: 'center',
      width: 200,
      fixed: 'right',
      render(dom, record, index, action) {
        return (
          <>
            {access.SYSTEM__USER__UPDATE && (
              <UserSaveForm
                id={record.id}
                onFinish={action?.reload}
                trigger={(
                  <Button size="small" type="link">
                    编辑
                  </Button>
                )}
              />
            )}
            {access.SYSTEM__USER__DELETE && (
              <Popconfirm title="确定删除吗">
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
