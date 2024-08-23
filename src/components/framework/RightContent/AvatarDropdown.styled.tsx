import styled from 'styled-components'
import { useUserInfo } from '@/stores/global'

export const Action = styled.div`
  display: 'flex';
  height: '48px';
  margin-left: 'auto';
  overflow: 'hidden';
  align-items: 'center';
  padding: '0 8px';
  cursor: 'pointer';
  border-radius: 6px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`

export const AvatarName2 = styled((props: any) => {
  const userInfo = useUserInfo()
  return (
    <div {...props}>
      <div>{userInfo?.name}</div>
      <div>{userInfo?.phone}</div>
    </div>
  )
})`
  background-color: red;
`
