import api from '@/api';
import { queryParams } from '@/utils/request';
import { ActionType, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';
import { useBrandColumns } from './useBrandColumns';
import BrandSaveForm from './BrandSaveForm';
import { useAccess } from '@umijs/max';


const pageRequest = async (params: any, sort: any, filter: any) =>
  api.brand.page(queryParams(params, sort, filter));

const BrandTable = () => {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null);
  const columns = useBrandColumns();
  return (
    <ProTable<API.BrandVO>
      rowKey="id"
      actionRef={actionRef}
      scroll={ { x: 'max-content' } }
      columnsState={ {persistenceType: 'localStorage', persistenceKey: 'brand_table_columns_state'} }
      request={pageRequest}
      columns={columns}
      toolbar={ {
        actions: [
          access.CUSTOMER__BRAND__CREATE && <BrandSaveForm
            key="save"
            onFinish={actionRef.current?.reload}
            trigger={<Button type="primary">创建品牌</Button>}
          />,
        ],
      } }
    ></ProTable>
  );
};

export default BrandTable;
