// 导入请求函数
import { request } from './request';
/**
 * 所属区域
*/
export const getDistrict = () => {
    return request({
        url: "gasguard-service-system-app/user/me/district",
        method: "get"
    })
}

/**
 * 关联燃气公司
*/
export const getOrg = () => {
    return request({
        url: "gasguard-service-system-app/user/me/org",
        method: "get"
    })
}

/**
 * 字典
*/
export const getDictList = (dicType:string) => {
    return request({
        url: `gasguard-service-system-app/dictionary/list?types=${dicType}`,
        method: "get"
    })
}
