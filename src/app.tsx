import api from "@/api";
import { AvatarDropdown, AvatarName, Footer, Question } from "@/components";
import { RunTimeLayoutConfig } from "@@/plugin-layout/types";
import { PageLoading } from "@ant-design/pro-components";
import { SettingDrawer } from "@ant-design/pro-layout";
import { Link } from "@umijs/max";
import { message } from "antd";
import queryString from "query-string";
import defaultSettings from "../config/defaultSettings";
import { useGlobalStore } from "./stores/global";
import { useLocalStore } from "./stores/localstore";

// @ts-ignore
const isDev = process.env.NODE_ENV === "development";
const loginPath = "/login";

export type InitialStateType = {
  userInfo?: API.UserInfoVO,
  settings: any,
};
export const getInitialState = async (): Promise<InitialStateType> => {
  const initialState: InitialStateType = {
    settings: defaultSettings,
  };

  if (window.location.pathname === loginPath) return initialState;

  initialState.userInfo = await api.user.userInfo();
  useGlobalStore.getState().setUserInfo(initialState.userInfo);
  return initialState;
};

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({
  initialState,
  loading,
  setInitialState,
}) => {
  return {
    actionsRender: () => [<Question key="doc" />],
    avatarProps: {
      src: "https://api.multiavatar.com/tom.png",
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    waterMarkProps: {
      content: "管理后台",
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      let userInfo = useGlobalStore.getState().userInfo;
      if (!userInfo && window.location.pathname !== loginPath)
        window.location.href = loginPath;
    },
    bgLayoutImgList: [
      {
        src: "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr",
        left: 85,
        bottom: 100,
        height: "303px",
      },
      {
        src: "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr",
        bottom: -68,
        right: -45,
        height: "303px",
      },
      {
        src: "https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr",
        bottom: 0,
        left: 0,
        width: "331px",
      },
    ],
    links: [],
    menuHeaderRender: undefined,
    menuItemRender: (menuItemProps, defaultDom) => {
      // 支持二级菜单显示icon
      return (
        <Link to={menuItemProps.path!!}>
          <div style={{ display: "flex" }}>
            {menuItemProps.pro_layout_parentKeys &&
              menuItemProps.pro_layout_parentKeys.length > 0 &&
              menuItemProps.icon}
            <span style={{ paddingRight: 8 }}>{defaultDom}</span>
          </div>
        </Link>
      );
    },
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: children => {
      if (loading) return <PageLoading />;
      return (
        <>
          {children}
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={settings => {
                setInitialState(preInitialState => ({
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
  dataField: "data",
  paramsSerializer(params) {
    return queryString.stringify(params);
  },
  requestInterceptors: [
    [
      (url, options) => {
        const tenantId = useLocalStore.getState().tenantId;
        if (tenantId) {
          options.headers = {
            ...options.headers,
            "tenant-id": tenantId,
          };
        }
        return { url, options };
      },
    ],
  ],
  responseInterceptors: [
    // 直接写一个 function，作为拦截器
    response => {
      // 不再需要异步处理读取返回体内容，可直接在data中读出，部分字段可在 config 中找到
      const { data: body } = response;

      if (body.code !== 200) {
        message.error(body.message);
      }
      return body;
    },
  ],
};
