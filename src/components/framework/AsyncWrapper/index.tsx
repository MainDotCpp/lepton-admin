import { useBoolean } from 'ahooks'
import type React from 'react'

interface AutoLoadingProps {
  callback?: () => Promise<void>
  children: (loading: boolean, call: () => void) => React.ReactElement
}

function AutoLoading(props: AutoLoadingProps) {
  const [loading, { setTrue, setFalse }] = useBoolean(false)
  const call = async () => {
    setTrue()
    await props.callback?.()
    setFalse()
  }
  return props.children(loading, call)
}

export default AutoLoading
