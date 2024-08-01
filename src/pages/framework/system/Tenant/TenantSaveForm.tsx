import api from '@/api';
import { Modal } from '@/components';
import { ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';

const TenantSaveFormItems = () => {
  return (
    <>
      <ProFormText name="id" label="ID" hidden />
      <ProFormText name="name" label="租户名称" />
    </>
  );
};

type TenantSaveFormProps = {
  id?: number;
  trigger: React.JSX.Element;
  onFinish?: () => void;
};

const TenantSaveForm = (props: TenantSaveFormProps) => {
  const handleFinish = async (values: API.TenantDto) => {
    await api.tenant.save(values);
    message.success('保存成功');
    props.onFinish?.();
    return true;
  };
  return (
    <Modal trigger={props.trigger} onFinish={handleFinish}>
      <TenantSaveFormItems />
    </Modal>
  );
};

export default TenantSaveForm;
