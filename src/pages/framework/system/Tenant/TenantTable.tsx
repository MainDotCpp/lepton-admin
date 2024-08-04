import api from '@/api';
import { queryParams } from '@/utils/request';
import { ActionType, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';
import { useTenantColumns } from './columnsData';
import TenantSaveForm from './TenantSaveForm';

const pageRequest = async (params: any, sort: any, filter: any) =>
  api.tenant.page(queryParams(params, sort, filter));

const TenantTable = () => {
  const actionRef = useRef<ActionType>(null);
  const columns = useTenantColumns();
  return (
    <ProTable<API.TenantVO, API.TenantDto>
      rowKey="id"
      actionRef={actionRef}
      request={pageRequest}
      columns={columns}
      toolbar={{
        actions: [
          <TenantSaveForm
            key="save"
            onFinish={actionRef.current?.reload}
            trigger={<Button type="primary">创建租户</Button>}
          />,
        ],
      }}
    ></ProTable>
  );
};

export default TenantTable;
