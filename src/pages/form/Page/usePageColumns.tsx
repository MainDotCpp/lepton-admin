import api from "@/api";
import { ProColumns } from "@ant-design/pro-components";
import { useAccess } from "@umijs/max";
import { Button, Popconfirm } from "antd";
import PageSaveForm from "./PageSaveForm";

export const usePageColumns = (): ProColumns<API.PageVO>[] => {
  const access = useAccess();
  return [
    { dataIndex: "id", title: "ID" , hideInSearch: true, sorter: true, filters: true, hidden: true},
    { dataIndex: "id", title: "ID" , hideInSearch: true, sorter: true, filters: true},
    {
      valueType: "index",
      title: "操作",
      align: 'center',
      width: 200,
      fixed: 'right',
      render(dom, record, index, action) {
        return (
          <>
            {access.FORM__PAGE__UPDATE && (
              <PageSaveForm
                id={record.id}
                onFinish={action?.reload}
                trigger={
                  <Button size="small" type="link">
                    编辑
                  </Button>
                }
              />
            )}
            {access.FORM__PAGE__DELETE && (
              <Popconfirm
                title="确定删除吗？"
                onConfirm={() =>
                  api.page.deleteById({ id: record.id || 0 }).then(action?.reload)
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
