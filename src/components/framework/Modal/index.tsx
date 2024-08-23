import type { ModalFormProps } from '@ant-design/pro-components'
import { ModalForm } from '@ant-design/pro-components'
import { useRequest } from 'ahooks'
import type { ReactNode } from 'react'
import React from 'react'

// @ts-ignore
interface LeptonModalProps<T extends any> extends ModalFormProps {
  request?: (options?: any) => Promise<T>
  children: ReactNode | ReactNode[] | ((data: T) => ReactNode | ReactNode[])
}

async function defaultRequest(): Promise<any> {
  console.log('Please provide a request function')
  return {}
}

function LeptonModal<T>({ request, ...props }: LeptonModalProps<T>) {
  const { data, runAsync } = useRequest(request || defaultRequest, {
    manual: true,
  })

  return (
    <>
      <ModalForm {...props} request={runAsync}>
        {typeof props.children === 'function' ? props.children(data) : props.children}
      </ModalForm>
    </>
  )
}

export default LeptonModal
