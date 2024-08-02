import { ModalForm, ModalFormProps } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import React, { ReactNode } from 'react';

interface LeptonModalAction {
  close: () => void;
  ok?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  cancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  refresh: () => void;
}

interface LeptonModalProps<T extends any> extends Omit<ModalFormProps, 'children'> {
  request?: (options?: any) => Promise<T>;
  children: ReactNode | ReactNode[] | ((data: T) => ReactNode | ReactNode[]);
}

const defaultRequest = async (): Promise<any> => {
  console.log('Please provide a request function');
  return {};
};

function LeptonModal<T>({ request, ...props }: LeptonModalProps<T>) {
  const { data, runAsync } = useRequest(request || defaultRequest, {
    manual: true,
  });

  return (
    <>
      <ModalForm {...props} request={runAsync}>
        {typeof props.children === 'function' ? props.children(data) : props.children}
      </ModalForm>
    </>
  );
}

export default LeptonModal;
