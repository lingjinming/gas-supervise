import type { ClientOptions ,UniResponse,PerRequestOptions} from "./typing";
import { isFunction ,isObject} from "../is";



export class RestClient {
  private options: ClientOptions;

  constructor(options: ClientOptions) {
    this.options = options;
  }


  private getTransform() {
    const { transforms } = this.options;
    return transforms;
  }



  /**
   * get请求封装
   */
  get<T = any>(options: UniApp.RequestOptions,per?: PerRequestOptions): Promise<T> {
    // @ts-ignore
    const queryInQuery = options?.data?.query;
    if(isObject(queryInQuery)) {
      // @ts-ignore
      options.data.query = undefined;
      // @ts-ignore
      options.data = {...options.data,...queryInQuery};
    }
    return this.request({...options,method: 'GET'},per);
  }

  /**
   * post请求封装
   */
  post<T = any>(options: UniApp.RequestOptions & {query?: any},per?: PerRequestOptions): Promise<T> {
    // 拼接到url
    if(options.query) {
      const query = Object.keys(options.query).map(key => `${key}=${options.query[key]}`).join('&');
      options.url += `?${query}`;
      options.query = undefined;
    }
    return this.request({...options,method: 'POST'},per);
  }

  /**
   * put请求封装
   */
  put<T = any>(options: UniApp.RequestOptions,per?: PerRequestOptions): Promise<T> {
    return this.request({...options,method: 'PUT'},per);
  }

  /**
   * delete请求封装
   */
  delete<T = any>(options: UniApp.RequestOptions,per?: PerRequestOptions): Promise<T> {
    return this.request({...options,method: 'DELETE'},per);
  }

  /**
   * 上传请求 TODO
   */
  upload<T = any>(options: UniApp.RequestOptions,per?: PerRequestOptions): Promise<T> {
    return this.request({...options,method: 'POST'},per);
  }

  


  /**
   * 基础请求方法封装
   * @param option 配置
   * @returns 
   */
  request<T = any>(option: UniApp.RequestOptions,per?: PerRequestOptions): Promise<T> {
    const transforms = this.getTransform();
    const { perRequestOptions } = this.options;

    const opt: PerRequestOptions = Object.assign({}, perRequestOptions, per);
    
    const { beforeRequestHook, transformResponseHook , responseInterceptorsCatch , httpCodeHook} = transforms || {}
    // 请求前处理请求参数
    if(beforeRequestHook && isFunction(beforeRequestHook)) {
      option = beforeRequestHook(option,opt);
    }

    const fullUrl = this.options.baseUrl + option.url;
    return new Promise((resolve, reject) => {
      uni.request({
        ...option,
        url: fullUrl,
        success: (res: UniApp.RequestSuccessCallbackResult) => {

          // 处理http状态码
          if(httpCodeHook && isFunction(httpCodeHook)) {
            const goOn = httpCodeHook(res,resolve,reject);
            if(!goOn) {
              return;
            }
          }
    
          // 格式话响应
          if(transformResponseHook && isFunction(transformResponseHook)) {
            const gasStyle = res as UniResponse<T>

            const response = transformResponseHook(gasStyle,opt);
            resolve(response);
            return;
          }
          // 什么都没做
          resolve(res as unknown as Promise<T>)
        },
        fail: (err: UniApp.GeneralCallbackResult) => {
          // 应该只有在nginx挂掉的时候才会出现这个错误
          if(responseInterceptorsCatch && isFunction(responseInterceptorsCatch)) {
            reject(responseInterceptorsCatch(err,opt));
            return;
          }
          reject(err);
        }
      });
    });
  }
 
}


