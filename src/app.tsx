import api from '@/api';
import { AvatarDropdown, AvatarName, Footer, Question } from '@/components';
import { useGlobalStore } from '@/stores/global'; // @ts-ignore
import { RunTimeLayoutConfig } from '@@/plugin-layout/types';
import { LinkOutlined } from '@ant-design/icons'; // @ts-ignore
import { PageLoading, SettingDrawer } from '@ant-design/pro-layout';
import { Link } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { API } from '../types';

// @ts-ignore
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/login';

type InitialStateType = {
  loading?: boolean;
  userInfo?: API.UserInfoVO;
  settings: any;
  init: () => Promise<Partial<InitialStateType>>;
};
export const getInitialState = async (): Promise<InitialStateType> => {
  return {
    loading: true,
    settings: defaultSettings,
    init: async () => {
      const userInfo = await api.user.userInfo();
      if (!userInfo) throw new Error('获取用户信息失败');
      return {
        userInfo,
        loading: false,
      };
    },
  };
};

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    actionsRender: () => [<Question key="doc" />],
    avatarProps: {
      src: 'https://api.multiavatar.com/tom.png',
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    waterMarkProps: {
      content: '管理后台',
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      let userInfo = initialState?.userInfo;
      console.log(`onPageChange:`, userInfo);
      if (!userInfo) {
        initialState
          ?.init()
          .then((res) => {
            useGlobalStore.getState?.().setUserInfo(res.userInfo!!);
            return setInitialState((preInitialState) => ({
              ...preInitialState,
              ...res,
            }));
          })
          .catch((e) => {
            window.location.href = loginPath;
          });
      }
    },
    bgLayoutImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  dataField: 'data',
  responseInterceptors: [
    // 直接写一个 function，作为拦截器
    (response) => {
      // 不再需要异步处理读取返回体内容，可直接在data中读出，部分字段可在 config 中找到
      const { data = {} as any, config } = response;
      // do something
      return data;
    },
  ],
};
