import type { RequestTransform } from "./requestTransform";
import type { UniResponse, ClientOptions,PerRequestOptions } from "./typing";
import { RestClient } from './RestClient'
import { userStore } from "@/state";

const transforms: RequestTransform = {

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
    return options;
  },

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
  }
}


function createHttpInstance(opt: Partial<ClientOptions>) {
  return new RestClient({
    timeout: 1000 * 30,
    baseUrl: 'https://aiot.citysafety.com/gasguard/',
    transforms: {},
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