import { ProColumns } from "@ant-design/pro-components";
import { useAccess } from "@umijs/max";
import { Button, Popconfirm } from "antd";
import UserSaveForm from "./UserSaveForm";

export const useUserColumns = (): ProColumns<API.UserVO>[] => {
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
      valueType: "index",
      title: "操作",
      align: "center",
      width: 200,
      fixed: "right",
      render(dom, record, index, action, schema) {
        return (
          <>
            {access.SYSTEM__USER__UPDATE && (
              <UserSaveForm
                id={record.id}
                onFinish={action?.reload}
                trigger={
                  <Button size="small" type="link">
                    编辑
                  </Button>
                }
              />
            )}
            {access.SYSTEM__USER__DELETE && (
              <Popconfirm title="确定删除吗？">
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
