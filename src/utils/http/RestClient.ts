import type { ClientOptions ,UniResponse,PerRequestOptions} from "./typing";
import { isFunction } from "../is";



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
    return this.request({...options,method: 'GET'},per);
  }

  /**
   * post请求封装
   */
  post<T = any>(options: UniApp.RequestOptions,per?: PerRequestOptions): Promise<T> {
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
    
    const { beforeRequestHook, transformResponseHook , responseInterceptorsCatch} = transforms || {}
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
          if(transformResponseHook && isFunction(transformResponseHook)) {
            const gasStyle = res as UniResponse<T>

            const response = transformResponseHook(gasStyle,opt);
            resolve(response)
          }
          resolve(res as unknown as Promise<T>)
        },
        fail: (err: UniApp.GeneralCallbackResult) => {
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


