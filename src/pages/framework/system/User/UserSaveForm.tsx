import api from "@/api";
import { Modal } from "@/components";
import { ProFormText } from "@ant-design/pro-components";
import { message } from "antd";

const UserSaveFormItems = () => {
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

const UserSaveForm = (props: SaveFormProps) => {
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    let initialValue: API.UserSaveDTO = {
    };
    if (props.id) initialValue = await api.user.getById({ id: props.id });

    return initialValue;
  };
  /**
   * 处理表单提交事件
   * @param values 保存用户传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: API.UserSaveDTO) => {
    await api.user.save(values);
    message.success("保存成功");
    props.onFinish?.();
    return true;
  };
  return (
    <Modal
      request={getInitialValues}
      trigger={props.trigger}
      onFinish={handleFinish}>
      <UserSaveFormItems />
    </Modal>
  );
};

export default UserSaveForm;
