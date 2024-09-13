import { ModalForm, ProForm, ProFormDateTimePicker, ProFormRadio, ProFormSelect, ProFormText, ProFormTextArea, ProFormTimePicker } from '@ant-design/pro-components'
import { message } from 'antd'
import type { CheckboxOptionType } from 'antd/lib'
import dayjs from 'dayjs'
import { useDebounceFn, useRequest } from 'ahooks'
import api from '@/api'
import { useDictOptions } from '@/stores/system/dictStore'
import { useChannelOptions } from '@/hook/channelQuery'
import { useUserOptions } from '@/hook/framework/userQuery'
import { useUserInfo } from '@/stores/global'
import { useBrandOptions } from '@/hook/brandQuery'

interface SaveFormProps {
  id?: number
  trigger: React.JSX.Element
  onFinish?: () => void
}

function CustomerSaveForm(props: SaveFormProps) {
  const customerSource = useDictOptions('customer:source')
  const followUpStatus = useDictOptions('customer:follow_up_status')
  const photoType = useDictOptions('customer:photo_type')
  const { options: channelOptions, request: requestChannelOptions } = useChannelOptions({ enabled: false })
  const { options: userOptions, request: requestUserOption } = useUserOptions({ enabled: false })
  const { options: brandOptions } = useBrandOptions({ enabled: false })
  const userInfo = useUserInfo()

  const { run: customerList } = useDebounceFn(api.customer.list, { wait: 500 })
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
      source: customerSource.find(it => it.default)?.value,
      followStatus: followUpStatus.find(it => it.default)?.value,
      channelId: channels?.at(0)?.value,
      saleId: users?.at(0)?.value,
      createdById: userInfo?.id,
      photoType: photoType.find(it => it.default)?.value,
      brandId: brandOptions?.at(0)?.value,
      createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
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

  const validContact = async (rule: any, value: any) => {
    if (!value || value.length === 0 || props.id)
      return Promise.resolve()
    const r = await api.customer.list({ keywords: value })
    if (r && r.length > 0) {
      return Promise.reject(new Error(`检测到 ${r.length} 个可能重复的客资`))
    }
    return Promise.resolve()
  }
  return (
    <ModalForm
      modalProps={{
        destroyOnClose: true,
      }}
      title={props.id ? '编辑客资' : '创建客资'}
      request={getInitialValues}
      trigger={props.trigger}
      onFinish={handleFinish}
      grid
    >
      <ProForm.Group>
        <ProFormRadio.Group rules={[{ required: true }]} name="source" label="客资来源" options={customerSource as CheckboxOptionType[]} />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormSelect colProps={{ md: 6, xs: 24 }} rules={[{ required: true }]} name="brandId" label="品牌" options={brandOptions as CheckboxOptionType[]} />
        <ProFormSelect colProps={{ md: 6, xs: 24 }} rules={[{ required: true }]} name="channelId" label="渠道" options={channelOptions as CheckboxOptionType[]} />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText name="id" label="ID" hidden />
        <ProFormSelect colProps={{ md: 6, xs: 24 }} name="photoType" label="拍摄类型" options={photoType} rules={[{ required: true }]} />
        <ProFormText colProps={{ md: 6, xs: 24 }} name="name" label="姓名" rules={[{ required: true }]} />
        <ProFormText colProps={{ md: 6, xs: 24 }} name="phone" label="手机号码" rules={[{ type: 'regexp', pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码' }, { validator: validContact, warningOnly: true }]} />
        <ProFormText colProps={{ md: 6, xs: 24 }} name="wechat" label="微信号" validateDebounce={5000} rules={[{ validator: validContact, warningOnly: true }]} />
        <ProFormSelect colProps={{ md: 6, xs: 24 }} name="followStatus" label="跟进状态" options={followUpStatus} rules={[{ required: true }]} />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect colProps={{ md: 6, xs: 24 }} name="saleId" label="销售" options={userOptions} rules={[{ required: true }]} />
        <ProFormSelect colProps={{ md: 6, xs: 24 }} name="createdById" label="创建人" options={userOptions} rules={[{ required: true }]} />
        <ProFormDateTimePicker colProps={{ md: 6, xs: 24 }} name="createdAt" label="创建时间" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormTextArea name="remark" label="备注" />
      </ProForm.Group>
    </ModalForm>
  )
}

export default CustomerSaveForm
