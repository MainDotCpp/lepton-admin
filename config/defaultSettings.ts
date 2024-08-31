import type { ProLayoutProps } from '@ant-design/pro-components'

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean
  logo?: string
} = {
  title: 'Fision Admin',

  // 风格配置
  navTheme: 'light',
  colorPrimary: '#1677FF',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  pwa: true,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  token: {
    colorPrimary: '#4caf50',
    colorInfo: '#4caf50',
    colorTextBase: '#424242',
    colorBgBase: '#fafafa',
    borderRadius: 0,
    wireframe: false,
  },
  splitMenus: false,
  siderMenuType: 'sub',
}

export default Settings
