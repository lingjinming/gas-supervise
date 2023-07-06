/**
 * 分页请求基类
 */
export interface BasePageReq {
  /**
   * 是否分页,默认=true 即分页
   * false 不分页查询,直接返回所有符合条件的数据
   */
  paging?: boolean;
  // 页号,1开始
  page?: number;
  // 页面大小
  size?: number;
  // 关键字查询
  keyword?: string;
  // 组织机构查询
  orgId?: string;
  // 行政区划查询,多个逗号拼接
  districtId?: string;
  // 排序方式
  order?: string;
}

/**
 * 后台响应数据结构基类
 */
export interface BaseResponse<T> {
  code: string;
  success: boolean;
  message: string;
  data: T
}

/**
 * 分页请求响应基类
 */
export interface BasePageResponse<T> extends BaseResponse<T[]>{
  total: number;
  data: T[]
}

/**
 * 分页请求响应基类
 */
export interface BasePageResponse<T> extends BaseResponse<T[]>{
  total: number;
  data: T[]
}