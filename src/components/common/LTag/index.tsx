import type { Color } from 'antd/es/color-picker'
import { Radio } from 'antd'
import { useState } from 'react'
import convert from '@/utils/convert'

interface LTagProps {
  textColor?: string | Color
  backgroundColor?: string | Color
  children?: string
}
export function LTag(props: LTagProps) {
  const textColor = convert.color.getHex(props.textColor)
  const backgroundColor = convert.color.getHex(props.backgroundColor)
  return (
    <span className="rounded-2xl px-2 py-1" style={{ color: textColor, backgroundColor }}>{props.children}</span>
  )
}

interface LTagRadioProps {
  value?: string
  onChange?: (value: string) => void
  options: { label: any, value: any }[]
}

export function LTagRadio(props: LTagRadioProps) {
  const [value, setValue] = useState(props.value)

  const handleClick = (value: any) => {
    setValue(value)
    props.onChange?.(value)
  }
  return (
    <div className="flex gap-2">
      {props.options?.map((option) => {
        return <div className="cursor-pointer filter-contrast-80" onClick={handleClick}>{option.label}</div>
      })}
    </div>
  )
}
