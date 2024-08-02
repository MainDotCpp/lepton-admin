import api from '@/api';
import { queryParams } from '@/utils/request';
import { ActionType, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';
import { useMenuColumns } from './useMenuColumns';
import MenuSaveForm from './MenuSaveForm';
import { useAccess } from '@umijs/max';


const pageRequest = async (params: any, sort: any, filter: any) =>
  api.menu.page(queryParams(params, sort, filter));

const MenuTable = () => {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null);
  const columns = useMenuColumns();
  return (
    <ProTable<API.MenuVO>
      rowKey="id"
      actionRef={actionRef}
      request={pageRequest}
      columns={columns}
      toolbar={ {
        actions: [
          access.SYSTEM__MENU__CREATE && <MenuSaveForm
            key="save"
            onFinish={actionRef.current?.reload}
            trigger={<Button type="primary">创建菜单</Button>}
          />,
        ],
      } }
    ></ProTable>
  );
};

export default MenuTable;
