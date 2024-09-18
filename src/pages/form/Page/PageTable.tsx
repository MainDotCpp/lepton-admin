import api from '@/api';
import { queryParams } from '@/utils/request';
import { ActionType, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';
import { usePageColumns } from './usePageColumns';
import PageSaveForm from './PageSaveForm';
import { useAccess } from '@umijs/max';


const pageRequest = async (params: any, sort: any, filter: any) =>
  api.page.page(queryParams(params, sort, filter));

const PageTable = () => {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null);
  const columns = usePageColumns();
  return (
    <ProTable<API.PageVO>
      rowKey="id"
      actionRef={actionRef}
      scroll={ { x: 'max-content' } }
      columnsState={ {persistenceType: 'localStorage', persistenceKey: 'page_table_columns_state'} }
      request={pageRequest}
      columns={columns}
      toolbar={ {
        actions: [
          access.FORM__PAGE__CREATE && <PageSaveForm
            key="save"
            onFinish={actionRef.current?.reload}
            trigger={<Button type="primary">创建表单</Button>}
          />,
        ],
      } }
    ></ProTable>
  );
};

export default PageTable;
