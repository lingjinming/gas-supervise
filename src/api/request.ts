import { userStore } from "@/state";

const BASE_URL = "https://aiot.citysafety.com/gasguard/";
const SUCESS_CODE = [200];


export const request = <T = any>(option: UniApp.RequestOptions): Promise<T> => {
  const store = userStore();
  const currentServer = store.auth.activeServer;

  let header = {
    "x-api-region": currentServer?.region
  };
  // 登录请求
  if(isLoginReq(option.url)) {
    header["Authorization"] = currentServer?.auth_header;
    header["content-type"] =  "application/x-www-form-urlencoded";
  }
  // 其他请求 
  else {
    header["Authorization"] = `Bearer ${store.auth.token?.access_token}`;
  }

  if (option.header) {
    header = Object.assign(header, option.header);
  }
  if(option.method === 'GET') {
    handleGetQueryParam(option.data);
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + option.url,
      method: option.method,
      header,
      data: option.data,
      timeout:1000 * 30,
      success(res: UniApp.RequestSuccessCallbackResult) {
        if(res.statusCode != 401 && res.data && !res.data.success && res.data.message){
          uni.showToast({
            icon:'error',
            title:res.data.message
          })
        }
        resolve(res.data as any);

      },
      fail(err: UniApp.GeneralCallbackResult) {
        console.log('fail',err)
        uni.hideLoading()
        reject(err);
      }
    });
  });
};

// 是否是登录请求
const isLoginReq = (url: string) => {
  return url.includes('oauth/token')
}

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