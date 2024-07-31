import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  colorPrimary: '#52C41A',
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
    borderRadius: 64,
    wireframe: false,
  },
  splitMenus: false,
  siderMenuType: 'sub',
};

export default Settings;
