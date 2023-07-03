import type { UniResponse,PerRequestOptions} from "./typing";


export abstract class RequestTransform {

  /**
   * 请求成功后,处理响应数据
   */
  transformResponseHook?: (response: UniResponse<any>,per?: PerRequestOptions) => any


  /**
   * 请求发出之前的拦截器
   */
  beforeRequestHook?: (option: UniApp.RequestOptions,per?: PerRequestOptions) => UniApp.RequestOptions

}