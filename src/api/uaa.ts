// 导入请求函数
import { request } from "./request";
import { defHttp } from "@/utils/http";
import { userStore } from "@/state";
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
export const getConfig = () => {
  return defHttp.get<ServerConfig>({
    url: "config.json",
  },{
    isTransformResponse: false
  });
};

/**
 * 登录获取token
 */
export const getToken = (data: OAuth2LoginReq) => {
  const store = userStore();
  const authHeader = store.auth.activeServer?.auth_header
  return defHttp.post({
    url: "apilogin/oauth/token",
    data,
    header: {
      Authorization: authHeader,
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
