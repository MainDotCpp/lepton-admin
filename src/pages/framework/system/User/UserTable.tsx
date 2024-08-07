import api from '@/api';
import { queryParams } from '@/utils/request';
import { ActionType, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';
import { useUserColumns } from './useUserColumns';
import UserSaveForm from './UserSaveForm';
import { useAccess } from '@umijs/max';


const pageRequest = async (params: any, sort: any, filter: any) =>
  api.user.page(queryParams(params, sort, filter));

const UserTable = () => {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null);
  const columns = useUserColumns();
  return (
    <ProTable<API.UserVO>
      rowKey="id"
      actionRef={actionRef}
      request={pageRequest}
      columns={columns}
      toolbar={ {
        actions: [
          access.SYSTEM__USER__CREATE && <UserSaveForm
            key="save"
            onFinish={actionRef.current?.reload}
            trigger={<Button type="primary">创建用户</Button>}
          />,
        ],
      } }
    ></ProTable>
  );
};

export default UserTable;
