// 导入请求函数
import { request } from './request';
/**
 * 所属区域
*/
export const getImg = (id:string) => {
    return request({
        // responseType:'arraybuffer',
        url: "gas-supervise/open/file/" + id,
        method: "GET"
    })
}