import api from "@/api";
import { ProColumns } from "@ant-design/pro-components";
import { Button, Popconfirm } from "antd";
import UserSaveForm from "./UserSaveForm";

export const useUserColumns = (): ProColumns<API.UserVO>[] => {
  return [
    { dataIndex: "id", title: "ID" , hideInSearch: true, sorter: true, filters: true, hidden: true},
    { dataIndex: "name", title: "名称" , hideInSearch: true, sorter: true, filters: true},
    { dataIndex: "phone", title: "手机号" , hideInSearch: true, sorter: true, filters: true},
    {
      valueType: "index",
      title: "操作",
      align: 'center',
      width: 200,
      fixed: 'right',
      render(dom, record, index, action) {
        return (
          <>
            <UserSaveForm
              id={record.id}
              onFinish={action?.reload}
              trigger={
                <Button size="small" type="link">
                  编辑
                </Button>
              }
            />
            <Popconfirm
              title="确定删除吗？"
              onConfirm={ () =>
                api.user.deleteById({ id: record.id!! })
                .then(action?.reload)
              }>
              <Button size="small" type="link" danger>
                删除
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];
};
