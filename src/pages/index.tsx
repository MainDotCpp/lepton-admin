import api from '@/api';
import { Modal } from '@/components';
import ProCard from '@ant-design/pro-card';
import { Button } from 'antd';

/**
 * title: 标题
 * name: 标题
 * @constructor
 */
const Index = () => {
  return (
    <>
      <Modal request={api.user.userInfo} trigger={<Button>创建租户</Button>}>
        {(data) => {
          return <ProCard title="标题">{JSON.stringify(data)}</ProCard>;
        }}
      </Modal>
    </>
  );
};

export default Index;
