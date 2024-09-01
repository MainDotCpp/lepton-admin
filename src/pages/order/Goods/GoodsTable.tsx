import api from '@/api';
import { queryParams } from '@/utils/request';
import { ActionType, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';
import { useGoodsColumns } from './useGoodsColumns';
import GoodsSaveForm from './GoodsSaveForm';
import { useAccess } from '@umijs/max';


const pageRequest = async (params: any, sort: any, filter: any) =>
  api.goods.page(queryParams(params, sort, filter));

const GoodsTable = () => {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null);
  const columns = useGoodsColumns();
  return (
    <ProTable<API.GoodsVO>
      rowKey="id"
      actionRef={actionRef}
      scroll={ { x: 'max-content' } }
      columnsState={ {persistenceType: 'localStorage', persistenceKey: 'goods_table_columns_state'} }
      request={pageRequest}
      columns={columns}
      toolbar={ {
        actions: [
          access.ORDER__GOODS__CREATE && <GoodsSaveForm
            key="save"
            onFinish={actionRef.current?.reload}
            trigger={<Button type="primary">创建商品</Button>}
          />,
        ],
      } }
    ></ProTable>
  );
};

export default GoodsTable;
