import { ProFormSegmented, ProFormText } from '@ant-design/pro-components'
import { ProFormDependency } from '@ant-design/pro-form'
import type { ComponentType } from '@/pages/form/Designer/components/index'
import CssConfig from '@/pages/form/Designer/components/CssConfig'

interface Props {
  text: string
  event: 'JUMP' | 'SUBMIT'
  targetUrl?: string
  color: string
  bgColor: string
}
const initialValue: Props = {
  text: '按钮',
  color: '#FFFFFF',
  bgColor: '#1890FF',
  event: 'JUMP',
}

function Preview(props: Props) {
  return (
    <div style={{ padding: '2px 8px' }}>
      <div style={{
        backgroundColor: props.bgColor,
        color: props.color,
        padding: '8px 16px',
        borderRadius: 4,
        cursor: 'pointer',
        textAlign: 'center',
      }}
      >
        {props.text}
      </div>
    </div>
  )
}

function Config() {
  return (
    <>
      <ProFormText label="按钮文本" name="text" />
      <CssConfig />
      <ProFormSegmented
        label="事件"
        name="event"
        valueEnum={{
          JUMP: '跳转',
          SUBMIT: '提交',
        }}
      />
      <ProFormDependency name={['event']}>
        {({ event }) => {
          if (event === 'JUMP') {
            return <ProFormText label="跳转地址" name="targetUrl" />
          }
          return null
        }}
      </ProFormDependency>
    </>
  )
}

export default {
  metadata: {
    name: '按钮',
    initialValue,
    type: 'BUTTON' as ComponentType,
    description: '按钮组件',
  },
  preview: Preview,
  config: Config,
}
