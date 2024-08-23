import queryString from 'query-string'
import {
  LogoutOutlined,
  SettingOutlined,
  SwapOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { history } from '@umijs/max'
import { Dropdown, Spin } from 'antd'
import type { MenuInfo } from 'rc-menu/lib/interface'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Action } from './AvatarDropdown.styled'
import TenantSwitch from './TenantSwitch'
import { useTenantId } from '@/stores/localstore'
import { useUserInfo } from '@/stores/global'
import { Modal } from '@/components'
import api from '@/api'

export interface GlobalHeaderRightProps {
  menu?: boolean
  children?: React.ReactNode
}

export const AvatarName = styled((props: any) => {
  const userInfo = useUserInfo()
  const tenantId = useTenantId()

  const tenantName = userInfo?.tenants?.find(
    tenant => tenant.id === tenantId,
  )?.name
  return (
    <div {...props}>
      <div className="user-name">{userInfo?.name}</div>
      <div className="tenant-name">{tenantName}</div>
    </div>
  )
})`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #d500f9;

  .tenant-name {
    color: #666;
    font-size: 0.8em;
  }

  & > div {
    line-height: 1.5;
  }
`

export const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({
  children,
}) => {
  const [switchTenantModal, setSwitchTenantModal] = useState(false)
  /**
   * 退出登录，并且将当前的 url 保存
   */
  const loginOut = async () => {
    const { search, pathname } = window.location
    const urlParams = new URL(window.location.href).searchParams
    /** 此方法会跳转到 redirect 参数所在的位置 */
    const redirect = urlParams.get('redirect')
    await api.auth.logout()
    // Note: There may be security issues, please note
    if (window.location.pathname !== '/login' && !redirect) {
      history.replace({
        pathname: '/login',
        search: queryString.stringify({
          redirect: pathname + search,
        }),
      })
    }
  }

  const userInfo = useUserInfo()

  const onMenuClick = useCallback((event: MenuInfo) => {
    const { key } = event

    if (key === 'switch-tenant') {
      setSwitchTenantModal(true)
      return
    }
    if (key === 'logout') {
      loginOut().then()
    }
    history.push(key)
  }, [])

  const loading = (
    <Action>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </Action>
  )

  if (!userInfo) {
    return loading
  }

  const menuItems = [
    {
      key: '/user/center',
      icon: <UserOutlined />,
      label: '个人中心',
    },
    {
      key: '/user/settings',
      icon: <SettingOutlined />,
      label: '个人设置',
    },

    {
      type: 'divider',
    },
    {
      key: 'switch-tenant',
      icon: <SwapOutlined />,
      label: '切换企业',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ]

  return (
    <>
      <Modal
        width={500}
        open={switchTenantModal}
        onOpenChange={setSwitchTenantModal}
        submitter={false}
        modalProps={{
          closable: false,
          footer: null,
        }}
      >
        <TenantSwitch />
      </Modal>
      <Dropdown
        menu={{
          selectedKeys: [],
          items: menuItems as any[],
          onClick: onMenuClick,
        }}
      >
        {children}
      </Dropdown>
    </>
  )
}
