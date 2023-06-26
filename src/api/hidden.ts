// 导入请求函数
import { request } from './request';


/**
 * 新增隐患
 * 
*/
export type req_addHidden = {
    isOrg:Boolean
    subjectType:String
    dangerType:String
    orgId:String
    checkDate:String
    longitude:Number
    latitude:Number
    address:String
    remark:String
    fileIds:String[]
    level:String
    planCode:String
}
export const addHidden = (data:req_addHidden) => {
    return request({
        url: data.isOrg? "gasguard-service-risk-app/hidanger/org" : "gasguard-service-risk-app/hidanger/gov",
        method: "post",
        data
    })
}
