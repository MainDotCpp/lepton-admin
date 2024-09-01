import { ModalForm } from '@ant-design/pro-components'
import { Button, message } from 'antd'
import React from 'react'
import { DownloadOutlined, SettingOutlined } from '@ant-design/icons'
import api from '@/api'

interface TenantConfigModalProps {
  children: React.JSX.Element | React.JSX.Element[]
}
export default function TenantConfigModal(props: TenantConfigModalProps) {
  const onFinish = async (formData: any) => {
    await api.config.saveTenantConfig(formData)
    message.success('保存成功')
    return true
  }

  const getInitialValues = async () => {
    const config = await api.config.getTenantConfig()
    return config.tenantConfig
  }

  return (
    <ModalForm title="系统设置" trigger={<Button type="text" icon={<SettingOutlined />} shape="circle" />} request={getInitialValues} onFinish={onFinish}>
      {props.children}
    </ModalForm>
  )
}
