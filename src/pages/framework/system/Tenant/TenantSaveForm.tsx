import api from "@/api";
import { Modal } from "@/components";
import { ProFormText } from "@ant-design/pro-components";
import { message } from "antd";

const TenantSaveFormItems = () => {
  return (
    <>
      <ProFormText name="id" label="ID" hidden />
      <ProFormText name="name" label="租户名称" />
      <ProFormText name="code" label="租户编码" />
      <ProFormText name="type" label="状态" />
    </>
  );
};

type TenantSaveFormProps = {
  id?: number,
  trigger: React.JSX.Element,
  onFinish?: () => void,
};

const TenantSaveForm = (props: TenantSaveFormProps) => {
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    let initialValue: API.TenantSaveDTO = {
      type: "INACTIVE",
    };
    if (props.id) initialValue = await api.tenant.getById({ id: props.id });

    return initialValue;
  };
  /**
   * 处理表单提交事件
   * @param values 保存租户传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: API.TenantSaveDTO) => {
    await api.tenant.save(values);
    message.success("保存成功");
    props.onFinish?.();
    return true;
  };
  return (
    <Modal
      title={props.id ? "编辑租户" : "创建租户"}
      request={getInitialValues}
      trigger={props.trigger}
      onFinish={handleFinish}>
      <TenantSaveFormItems />
    </Modal>
  );
};

export default TenantSaveForm;
