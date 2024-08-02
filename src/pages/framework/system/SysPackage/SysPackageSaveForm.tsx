import api from "@/api";
import { Modal } from "@/components";
import { ProFormText } from "@ant-design/pro-components";
import { message } from "antd";

const SysPackageSaveFormItems = () => {
  return (
    <>
      <ProFormText name="id" label="ID" hidden />
    </>
  );
};

type SaveFormProps = {
  id?: number,
  trigger: React.JSX.Element,
  onFinish?: () => void,
};

const SysPackageSaveForm = (props: SaveFormProps) => {
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    let initialValue: API.SysPackageSaveDTO = {
    };
    if (props.id) initialValue = await api.sysPackage.getById({ id: props.id });

    return initialValue;
  };
  /**
   * 处理表单提交事件
   * @param values 保存套餐传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: API.SysPackageSaveDTO) => {
    await api.sysPackage.save(values);
    message.success("保存套餐成功");
    props.onFinish?.();
    return true;
  };
  return (
    <Modal
      title={props.id ? "编辑套餐" : "创建套餐"}
      request={getInitialValues}
      trigger={props.trigger}
      onFinish={handleFinish}>
      <SysPackageSaveFormItems />
    </Modal>
  );
};

export default SysPackageSaveForm;
