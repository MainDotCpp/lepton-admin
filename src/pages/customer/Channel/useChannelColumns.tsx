import type { ProColumns } from '@ant-design/pro-components'
import { useAccess } from '@umijs/max'
import { Button, Popconfirm, Tag } from 'antd'
import ChannelSaveForm from './ChannelSaveForm'
import api from '@/api'
import { LTag } from '@/components/common/LTag'

export function useChannelColumns(): ProColumns<API.ChannelVO>[] {
  const access = useAccess()
  return [
    { dataIndex: 'id', title: 'ID', hideInSearch: true, sorter: true, filters: true, hidden: true },
    { dataIndex: 'name', title: '渠道名称', hideInSearch: true, sorter: true, filters: true },
    { dataIndex: 'textColor', title: '文本颜色', hideInSearch: true, sorter: true, filters: true, valueType: 'color' },
    { dataIndex: 'backgroundColor', title: '背景颜色', hideInSearch: true, sorter: true, filters: true, valueType: 'color' },
    { dataIndex: 'id', title: '预览', hideInSearch: true, render: (dom, record, index, action) => { return <LTag textColor={record.textColor} backgroundColor={record.backgroundColor}>{record.name}</LTag> } },
    {
      dataIndex: 'option',
      valueType: 'option',
      title: '操作',
      align: 'center',
      width: 200,
      fixed: 'right',
      render(dom, record, index, action) {
        return (
          <>
            {access.CUSTOMER__CHANNEL__UPDATE && (
              <ChannelSaveForm
                id={record.id}
                onFinish={action?.reload}
                trigger={(
                  <Button size="small" type="link">
                    编辑
                  </Button>
                )}
              />
            )}
            {access.CUSTOMER__CHANNEL__DELETE && (
              <Popconfirm
                title="确定删除吗？"
                onConfirm={() =>
                  api.channel
                    .deleteById({ id: record.id || 0 })
                    .then(action?.reload)}
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
