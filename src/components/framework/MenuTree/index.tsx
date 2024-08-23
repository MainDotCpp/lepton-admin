import { useRequest } from 'ahooks'
import type { TreeProps } from 'antd'
import { Tree } from 'antd'
import api from '@/api'

interface MenuTreeProps {
  value?: string[]
  onChange?: (value: string[]) => void
}
export default function (props: MenuTreeProps) {
  const { data } = useRequest(() => api.menu.tree({}) as Promise<any>)

  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
    props.onChange?.(selectedKeys as string[])
  }

  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info)
  }

  return (
    <>
      <Tree
        selectedKeys={props.value}
        checkable
        treeData={data?.children || []}
        fieldNames={{ title: 'name', key: 'id', children: 'children' }}
        onSelect={onSelect}
        onCheck={onCheck}
      />
    </>
  )
}
