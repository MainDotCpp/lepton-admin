import api from "@/api";
import { Modal } from "@/components";
import { ProFormText } from "@ant-design/pro-components";
import { message } from "antd";

const PageSaveFormItems = () => {
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

const PageSaveForm = (props: SaveFormProps) => {
  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    let initialValue: API.PageSaveDTO = {
    };
    if (props.id) initialValue = await api.page.getById({ id: props.id });

    return initialValue;
  };
  /**
   * 处理表单提交事件
   * @param values 保存表单传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: API.PageSaveDTO) => {
    await api.page.save(values);
    message.success("保存表单成功");
    props.onFinish?.();
    return true;
  };
  return (
    <Modal
      title={props.id ? "编辑表单" : "创建表单"}
      request={getInitialValues}
      trigger={props.trigger}
      modalProps={ {
        destroyOnClose: true,
      } }
      onFinish={handleFinish}>
      <PageSaveFormItems />
    </Modal>
  );
};

export default PageSaveForm;
