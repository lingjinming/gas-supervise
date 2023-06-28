const BASE_URL = "https://aiot.citysafety.com/gasguard/";
const SUCESS_CODE = [200]
export const request = <T = any>(option: UniApp.RequestOptions): Promise<T> => {
  let TOKEN = uni.getStorageSync("TOKEN_INFO")["access_token"];
  let SERVER_CONFIG = uni.getStorageSync("SERVER_CONFIG");
  let header = {};
  if (SERVER_CONFIG) {
    header = Object.assign(header, {
      "x-api-region": SERVER_CONFIG.name,
      Authorization: SERVER_CONFIG.auth,
      "content-type": "application/x-www-form-urlencoded",
    });
  }
  if (TOKEN) {
    header = Object.assign(header, {
      Authorization: "Bearer " + TOKEN,
      "content-type": "application/json",
    });
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
        reject(err);
      }
    });
  });
};


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