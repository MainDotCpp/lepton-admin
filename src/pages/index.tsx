import { ColorPicker } from 'antd'
import { useState } from 'react'
import type { Color } from 'antd/es/color-picker'
import { useGlobalStore } from '@/stores/global'
import { useDictOptions } from '@/stores/system/dictStore'

/**
 * title: 标题
 * name: 标题
 * @constructor
 */
function Index() {
  const [color, setColor] = useState<Color>()
  const customerSource = useDictOptions('customer:source')
  return (
    <>
      <h1>{JSON.stringify(customerSource)}</h1>
      <ColorPicker value={color} onChange={setColor} format="hex" />
    </>
  )
}

export default Index
