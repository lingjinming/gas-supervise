// 导入请求函数
import { request } from "./request";

/**
 * 上传文件
 *
 */
export const upload = (data: any) => {
  return request({
    url: "gasguard-service-system-app/file/upload",
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
  return request<{regions: {region: string,remark: string,auth_header: string}[]}>({
    url: "config.json",
    method: "GET",
  });
};

/**
 * 登录认证
 *
 */
export type req_token = {
  grant_type: String;
  scope: String;
  username: String;
  password: String;
};
export const getToken = (data: req_token) => {
  return request({
    url: "apilogin/oauth/token",
    method: "POST",
    data,
  });
};

/**
 * 用户信息
 *
 */
export const getUserInfo = () => {
  return request({
    url: "gasguard-service-system-app/user/me",
    method: "GET"
  });
};
