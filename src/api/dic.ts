// 导入请求函数
import { request } from './request';
/**
 * 所属区域
*/
export const getDistrict = () => {
    return request({
        url: "gasguard-service-system-app/user/me/district",
        method: "GET"
    })
}

/**
 * 关联燃气公司
*/
export const getOrg = () => {
    return request({
        url: "gasguard-service-system-app/user/me/org",
        method: "GET"
    })
}



export interface DicItem {
  pid:         string;
  id:          string;
  label:       string;
  value:       string;
  order:       number;
  hasChildren: boolean;
  notes1:      string;
  systemFlag:  string;
  text:        string;
  children?: DicItem[]
}
/**
 * 字典
*/
export const getDictList = (dicType:string) => {
    return request<{data: Record<string,DicItem[]>}>({
        url: `gasguard-service-system-app/dictionary/list?types=${dicType}`,
        method: "GET"
    })
}
