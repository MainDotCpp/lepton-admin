import api from '@/api';
import { queryParams } from '@/utils/request';
import { ActionType, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef } from 'react';
import { useSysPackageColumns } from './useSysPackageColumns';
import SysPackageSaveForm from './SysPackageSaveForm';
import { useAccess } from '@umijs/max';


const pageRequest = async (params: any, sort: any, filter: any) =>
  api.sysPackage.page(queryParams(params, sort, filter));

const SysPackageTable = () => {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null);
  const columns = useSysPackageColumns();
  return (
    <ProTable<API.SysPackageVO>
      rowKey="id"
      actionRef={actionRef}
      request={pageRequest}
      columns={columns}
      toolbar={ {
        actions: [
          access.SYSTEM__SYS_PACKAGE__CREATE && <SysPackageSaveForm
            key="save"
            onFinish={actionRef.current?.reload}
            trigger={<Button type="primary">创建套餐</Button>}
          />,
        ],
      } }
    ></ProTable>
  );
};

export default SysPackageTable;
