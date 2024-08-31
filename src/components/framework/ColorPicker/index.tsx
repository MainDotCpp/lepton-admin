import type { ColorPickerProps } from 'antd'
import { ColorPicker } from 'antd'

export default function LColorPicker(props: ColorPickerProps) {
  return <ColorPicker value={props.value} onFormatChange={props.onChange} />
}
