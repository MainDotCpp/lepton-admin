import type { ActionType } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useRef } from 'react'
import { useAccess } from '@umijs/max'
import { useSysPackageColumns } from './useSysPackageColumns'
import SysPackageSaveForm from './SysPackageSaveForm'
import { queryParams } from '@/utils/request'
import api from '@/api'

async function pageRequest(params: any, sort: any, filter: any) {
  return api.sysPackage.page(queryParams(params, sort, filter))
}

function SysPackageTable() {
  const access = useAccess()
  const actionRef = useRef<ActionType>(null)
  const columns = useSysPackageColumns()
  return (
    <ProTable<API.SysPackageVO>
      rowKey="id"
      actionRef={actionRef}
      request={pageRequest}
      columns={columns}
      toolbar={{
        actions: [
          access.SYSTEM__SYS_PACKAGE__CREATE && (
            <SysPackageSaveForm
              key="save"
              onFinish={() => actionRef.current?.reload()}
              trigger={<Button type="primary">创建套餐</Button>}
            />
          ),
        ],
      }}
    >
    </ProTable>
  )
}

export default SysPackageTable
