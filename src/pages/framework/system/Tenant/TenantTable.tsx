import api from '@/api';
import { ActionType, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';
import { useTenantColumns } from './columnsData';
import TenantSaveForm from './TenantSaveForm';

const TenantTable = () => {
  const actionRef = useRef<ActionType>(null);
  const columns = useTenantColumns();
  return (
    <ProTable<API.TenantVO, API.TenantDto>
      actionRef={actionRef}
      toolbar={{
        actions: [
          <TenantSaveForm
            key="save"
            onFinish={actionRef.current?.reload}
            trigger={<Button type="primary">创建租户</Button>}
          />,
        ],
      }}
      columns={columns}
      request={api.tenant.page}
    ></ProTable>
  );
};

export default TenantTable;
