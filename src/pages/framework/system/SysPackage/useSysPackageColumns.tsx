import api from "@/api";
import { ProColumns } from "@ant-design/pro-components";
import { useAccess } from "@umijs/max";
import { Button, Popconfirm } from "antd";
import SysPackageSaveForm from "./SysPackageSaveForm";

export const useSysPackageColumns = (): ProColumns<API.SysPackageVO>[] => {
  const access = useAccess();
  return [
    {
      dataIndex: "id",
      title: "ID",
      hideInSearch: true,
      sorter: true,
      filters: true,
      hidden: true,
    },
    {
      dataIndex: "id",
      title: "ID",
      hideInSearch: true,
      sorter: true,
      filters: true,
    },
    {
      dataIndex: "name",
      title: "套餐名称",
      hideInSearch: true,
      sorter: true,
      filters: true,
    },
    {
      valueType: "index",
      title: "操作",
      align: "center",
      width: 200,
      fixed: "right",
      render(dom, record, index, action) {
        return (
          <>
            {access.SYSTEM__SYS_PACKAGE__UPDATE && (
              <SysPackageSaveForm
                id={record.id}
                onFinish={action?.reload}
                trigger={
                  <Button size="small" type="link">
                    编辑
                  </Button>
                }
              />
            )}
            {access.SYSTEM__SYS_PACKAGE__DELETE && (
              <Popconfirm
                title="确定删除吗？"
                onConfirm={() =>
                  api.sysPackage
                    .deleteById({ id: record.id || 0 })
                    .then(action?.reload)
                }>
                <Button size="small" type="link" danger>
                  删除
                </Button>
              </Popconfirm>
            )}
          </>
        );
      },
    },
  ];
};
