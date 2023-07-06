import type { RequestTransform } from "./requestTransform";
import type { UniResponse, ClientOptions,PerRequestOptions } from "./typing";
import { RestClient } from './RestClient'
import { userStore } from "@/state";

// 处理一下get下的数组传参
const handleGetQueryParam = (param: any) => {
  if(param && typeof param === 'object') {
    for(let key in param) {
      const theValue = param[key];
      if(Array.isArray(theValue)) {
        param[key] = theValue.join(',');
      } 
    }
  }
}

const transforms: RequestTransform = {

  // 请求前的参数处理
  beforeRequestHook: (options: UniApp.RequestOptions,per?: PerRequestOptions) => {
    const store = userStore();
    const activeServer = store.auth.activeServer;
    let header =  {
      "x-api-region": activeServer?.region
    }
    // 处理token
    if(!per?.withoutToken) {
      header["Authorization"] = `Bearer ${store.auth.token?.access_token}`;
    }
    if (options.header) {
      header = Object.assign(header, options.header);
    }
    options.header = header;
    // 处理一下get下的数组传参,用逗号拼接
    if(options.method === 'GET' && options.data) {
      handleGetQueryParam(options.data)
    }
    return options;
  },

  // 系统正常响应后的处理方式
  transformResponseHook: (response: UniResponse<any>,per?: PerRequestOptions) => {
    // 直接返回uniapp 原始响应,不做任何处理
    if(per?.isReturnNativeResponse) {
      return response;
    }
    // 直接返回uniapp 响应中的 data 属性
    if(!per?.isTransformResponse) {
      return response.data;
    }
    // 按照后端的统一格式处理
    const { success, code, data, message } = response.data;
    if (!success) {
      uni.showToast({
        icon: 'error',
        title: message
      })
    }
    return data;
  },

  // 处理http状态码
  httpCodeHook: (response: UniApp.RequestSuccessCallbackResult,resolve: PromiseLike<any>, reject) => {
    const { statusCode } = response;
    if(statusCode === 200) {
      return true;
    }
    // 404 服务不在线,或者区域没选对
    if(statusCode === 404) {
        uni.showToast({
          icon: 'error',
          title: '服务器不在线!',
          duration: 1500
        })
        reject();
        return false;
    }
    // 401 没有登录
    if(statusCode === 401) {
      // 
    }

    // 403 没有权限



    reject();
    return false;
  },

  /**
   * 连接错误
   */
  responseInterceptorsCatch: (error: UniApp.GeneralCallbackResult,opt: PerRequestOptions) => {
    uni.showToast({
      icon: 'error',
      title: '服务暂不可用'
    })
    return  Promise.reject('系统出错!');
  }

  
}


function createHttpInstance(opt: Partial<ClientOptions>) {
  return new RestClient({
    timeout: 1000 * 30,
    baseUrl: 'https://aiot.citysafety.com/gasguard/',
    transforms,
    perRequestOptions: {
      isReturnNativeResponse: false,
      isTransformResponse: true,
      withoutToken: false
    },
    ...opt
  })
}

export const defHttp = createHttpInstance({
  transforms
})