// 导入请求函数
import { request } from "./request";
import { defHttp } from "@/utils/http";
import { userStore, type Server } from "@/state";
import type { ServerConfig ,SysUserInfo,OAuth2LoginReq} from "./model/UserAuth";

/**
 * 上传文件
 *
 */
export const upload = (data: any) => {
  return request({
    url: "gas-supervise/file/upload",
    method: "POST",
    header: {
      "content-type": "multipart/form-data",
    },
    data,
  });
};

/**
 * 服务器配置
 *
 */
export const getConfig =  (): Server[] => {
  let conf = window['conf'] as Server ;
  if(!conf) {
    uni.showModal({
      title: '错误',
      content: '服务器配置错误',
      showCancel: false
    })
  }
  return [conf];
};

/**
 * 登录获取token
 */
export const getToken = (data: OAuth2LoginReq) => {
  const store = userStore();
  const currentServer = store.auth.activeServer;
  const authHeader = currentServer?.APPID + ":" + currentServer?.APPKEY;
  let loginPath = currentServer?.LOGIN_URL!;
  return defHttp.post({
    url: loginPath,
    data,
    header: {
      Authorization: `Basic ${window.btoa(authHeader)}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },{
    withoutToken: true,
    isTransformResponse: false
  });
};

/**
 * 用户信息
 *
 */
export const getUserInfo = () => {
  return defHttp.get<SysUserInfo>({
    url: "gas-supervise/user/me",
  });
};
