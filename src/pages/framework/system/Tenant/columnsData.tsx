import api from '@/api';
import { ProColumns } from '@ant-design/pro-components';
import { Button, Popconfirm } from 'antd';
import TenantSaveForm from './TenantSaveForm';

export const useTenantColumns = (): ProColumns<API.TenantVO>[] => {
  return [
    { dataIndex: 'id', title: 'ID', search: false },
    { dataIndex: 'logo', title: 'logo', search: false, valueType: 'avatar' },
    { dataIndex: 'name', title: '租户名称' },
    { dataIndex: 'code', title: '租户编码' },
    { dataIndex: 'type', title: '状态' },
    { dataIndex: 'packageName', title: '套餐' },
    {
      valueType: 'index',
      title: '操作',
      render(dom, record, index, action, schema) {
        return (
          <>
            <TenantSaveForm
              id={record.id}
              onFinish={action?.reload}
              trigger={
                <Button size="small" type="link">
                  编辑
                </Button>
              }
            />
            <Popconfirm
              title="123123"
              onConfirm={api.tenant.deleteById.bind(null, { id: record.id!! })}
            >
              <Button size="small" type="link" danger>
                删除
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];
};
