import api from "@/api";
import { ProColumns } from "@ant-design/pro-components";
import { useAccess } from "@umijs/max";
import { Button, Popconfirm } from "antd";
import RoleSaveForm from "./RoleSaveForm";

export const useRoleColumns = (): ProColumns<API.RoleVO>[] => {
  const access = useAccess();
  return [
    { dataIndex: "id", title: "ID" , hideInSearch: true, sorter: true, filters: true, hidden: true},
    { dataIndex: "name", title: "名称" , hideInSearch: true, sorter: true, filters: true, width:200},
    { dataIndex: "code", title: "代码" , hideInSearch: true, sorter: true, filters: true, width:200},
    { dataIndex: "builtin", title: "内置角色" , hideInSearch: true, sorter: true, filters: true, width:200},
    { dataIndex: "createdBy", title: "创建人" , hideInSearch: true, sorter: true, filters: true, width:200},
    { dataIndex: "createdAt", title: "创建时间" , hideInSearch: true, sorter: true, filters: true, width:200},

    {
      valueType: "index",
      title: "操作",
      align: 'center',
      width: 200,
      fixed: 'right',
      render(dom, record, index, action, schema) {
        return (
          <>
            {access.SYSTEM__ROLE__UPDATE && (
              <RoleSaveForm
                id={record.id}
                onFinish={action?.reload}
                trigger={
                  <Button size="small" type="link">
                    编辑
                  </Button>
                }
              />
            )}
            {access.SYSTEM__ROLE__DELETE && (
              <Popconfirm
                title="确定删除吗？"
                onConfirm={() =>
                  api.role.deleteById({ id: record.id! }).then(action?.reload)
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
