// 导入请求函数
import { request } from './request';

/**
 * 获取检查计划
 * 
*/
export const getCheckPlanByOrg = (orgId:string) => {
    return request({
        url: `gasguard-service-risk-app/hidanger/gov/check-plan/selections?targetOrgId=${orgId}`,
        method: "get",
    })
}

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
    districtId:String
}
export const addHidden = (data:req_addHidden) => {
    return request({
        url: data.isOrg? "gasguard-service-risk-app/hidanger/org" : "gasguard-service-risk-app/hidanger/gov",
        method: "post",
        data
    })
}
