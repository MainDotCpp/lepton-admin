import { ProFormColorPicker, ProFormGroup } from '@ant-design/pro-components'

function CssConfig() {
  return (
    <>
      <ProFormGroup>

        <ProFormColorPicker
          label="文字颜色"
          name="color"
          dataFormat="hex"
          transform={value => ({
            color: (typeof value === 'string' ? value : value?.toHexString()),
          })}
        />
        <ProFormColorPicker
          label="背景颜色"
          name="bgColor"
          dataFormat="hex"
          transform={value => ({
            bgColor: (typeof value === 'string' ? value : value?.toHexString()),
          })}
        />
      </ProFormGroup>
    </>
  )
}

export default CssConfig
