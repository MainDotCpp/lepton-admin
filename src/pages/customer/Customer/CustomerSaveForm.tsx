import { ModalForm, ProForm, ProFormGroup, ProFormRadio, ProFormSelect, ProFormText } from '@ant-design/pro-components'
import { Grid, message } from 'antd'
import { useQuery } from '@umijs/max'
import { useEffect, useState } from 'react'
import type { CheckboxOptionType } from 'antd/lib'
import api from '@/api'
import { Modal } from '@/components'
import convert from '@/utils/convert'
import { LTag, LTagRadio } from '@/components/common/LTag'
import { useDictOptions } from '@/stores/system/dictStore'
import { useChannelOptions } from '@/hook/channelQuery'
import { useUserOptions, useUserQuery } from '@/hook/framework/userQuery'

interface SaveFormProps {
  id?: number
  trigger: React.JSX.Element
  onFinish?: () => void
}

function CustomerSaveForm(props: SaveFormProps) {
  const customerSource = useDictOptions('customer:source')
  const { options: channelOptions, request: requestChannelOptions } = useChannelOptions({ enabled: false })
  const { options: userOptions, request: requestUserOption } = useUserOptions({ enabled: false })

  /**
   * 获取表单初始数据
   * @returns 表单初始数据
   */
  const getInitialValues = async () => {
    const [channels, users] = await Promise.all([
      requestChannelOptions(),
      requestUserOption(),
    ])
    let initialValue: API.CustomerSaveDTO = {
      source: customerSource.at(0)?.value as string,
      channelId: channels?.at(0)?.value,
      saleId: users?.at(0)?.value,
    }
    if (props.id)
      initialValue = await api.customer.getById({ id: props.id })

    return initialValue
  }
  /**
   * 处理表单提交事件
   * @param values 保存客资传输层对象
   * @returns 是否保存成功
   */
  const handleFinish = async (values: API.CustomerSaveDTO) => {
    await api.customer.save(values)
    message.success('保存客资成功')
    props.onFinish?.()
    return true
  }
  return (
    <ModalForm
      title={props.id ? '编辑客资' : '创建客资'}
      request={getInitialValues}
      trigger={props.trigger}
      onFinish={handleFinish}
      grid
    >
      <ProForm.Group>
        <ProFormRadio.Group
          name="source"
          label="客资来源"
          options={customerSource as CheckboxOptionType[]}
        >
        </ProFormRadio.Group>
      </ProForm.Group>

      <ProForm.Group>
        <ProFormRadio.Group
          name="channelId"
          label="渠道"
          options={channelOptions as CheckboxOptionType[]}
        >
        </ProFormRadio.Group>
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText name="id" label="ID" hidden />
        <ProFormText colProps={{ span: 6 }} name="name" label="姓名" rules={[{ required: true }]} />
        <ProFormText colProps={{ span: 6 }} name="phone" label="手机号码" />
        <ProFormText colProps={{ span: 6 }} name="wechat" label="微信号" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect colProps={{ span: 6 }} name="saleId" label="销售" options={userOptions} />
      </ProForm.Group>
    </ModalForm>
  )
}

export default CustomerSaveForm
