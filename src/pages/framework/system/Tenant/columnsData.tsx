import api from "@/api";
import { ProColumns } from "@ant-design/pro-components";
import { Button, Popconfirm } from "antd";
import TenantSaveForm from "./TenantSaveForm";

export const useTenantColumns = (): ProColumns<API.TenantVO>[] => {
  return [
    { dataIndex: "id", title: "ID" },
    {
      dataIndex: "logo",
      title: "logo",
      search: false,
      valueType: "avatar",
      filters: true,
      valueEnum: {
        1: { text: "男" },
        2: { text: "女" },
      },
    },
    { dataIndex: "name", title: "租户名称", sorter: true, filters: true },
    { dataIndex: "code", title: "租户编码", search: false },
    {
      dataIndex: "type",
      title: "状态",
      valueEnum: { ACTIVE: { text: "启用" }, INACTIVE: { text: "禁用" } },
      sorter: true,
      filters: true,
    },
    { dataIndex: "packageName", title: "套餐", search: false },
    {
      valueType: "index",
      title: "操作",
      render(dom, record, index, action, schema) {
        return (
          <>
            <TenantSaveForm
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
              onConfirm={() =>
                api.tenant.deleteById({ id: record.id!! })
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
