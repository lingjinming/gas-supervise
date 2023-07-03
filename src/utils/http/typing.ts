import type { BaseResponse } from "@/api/model/BaseModel";
import type { RequestTransform } from './requestTransform'

/**
 * 每个请求的自定义配置
 */
export type PerRequestOptions  = {
  // 是否直接返回http原始响应,而不进行任何处理
  isReturnNativeResponse?: boolean;
  // 是否直接返回服务器原始响应
  // true => data 默认
  // false => {success: true,message: 'xx',code: 'xx',data: {}}
  isTransformResponse?: boolean;
  // 是否不带token访问
  withoutToken?: boolean;
}

export type ClientOptions = {
  // 超时时间
  timeout: number;
  // base url
  baseUrl: string;
  // 拦截器配置
  transforms: RequestTransform,
  perRequestOptions: PerRequestOptions
}


export type UniResponse<T> = UniApp.RequestSuccessCallbackResult & {
  data: BaseResponse<T>
}
