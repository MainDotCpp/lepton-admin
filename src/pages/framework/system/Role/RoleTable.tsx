import api from '@/api';
import { queryParams } from '@/utils/request';
import { ActionType, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';
import { useRoleColumns } from './useRoleColumns';
import RoleSaveForm from './RoleSaveForm';
import { useAccess } from '@umijs/max';


const pageRequest = async (params: any, sort: any, filter: any) =>
  api.role.page(queryParams(params, sort, filter));

const RoleTable = () => {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null);
  const columns = useRoleColumns();
  return (
    <ProTable<API.RoleVO>
      rowKey="id"
      actionRef={actionRef}
      request={pageRequest}
      columns={columns}
      toolbar={ {
        actions: [
          access.SYSTEM__ROLE__CREATE && <RoleSaveForm
            key="save"
            onFinish={actionRef.current?.reload}
            trigger={<Button type="primary">创建角色</Button>}
          />,
        ],
      } }
    ></ProTable>
  );
};

export default RoleTable;
