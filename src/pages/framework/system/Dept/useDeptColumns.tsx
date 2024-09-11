import api from "@/api";
import { ProColumns } from "@ant-design/pro-components";
import { useAccess } from "@umijs/max";
import { Button, Popconfirm } from "antd";
import DeptSaveForm from "./DeptSaveForm";

export const useDeptColumns = (): ProColumns<API.DeptVO>[] => {
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
            {access.SYSTEM__DEPT__UPDATE && (
              <DeptSaveForm
                id={record.id}
                onFinish={action?.reload}
                trigger={
                  <Button size="small" type="link">
                    编辑
                  </Button>
                }
              />
            )}
            {access.SYSTEM__DEPT__DELETE && (
              <Popconfirm
                title="确定删除吗？"
                onConfirm={() =>
                  api.dept.deleteById({ id: record.id || 0 }).then(action?.reload)
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
