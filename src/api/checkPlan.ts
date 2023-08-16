import { defHttp } from '@/utils/http';
import type { BaseResponse ,BasePageResponse} from "./model/BaseModel";
import type { ICheckPlanCreateReq ,CheckPlanOptions ,CheckPageVo,CheckPlanQueryReq} from './model/CheckPlan'

/**
 * 检查计划分页查询
 */
export const checkPlanPage = (data: CheckPlanQueryReq) => {
  return defHttp.get<BasePageResponse<CheckPageVo>>({
    url: "gas-supervise/hidanger/gov/check-plan/page",
    data
  },{
    isTransformResponse: false
  });
};

/**
 * @description 新增检查计划
 */
export const addCheckPlan = (data: ICheckPlanCreateReq) => {
  return defHttp.post<BaseResponse<void>>({
    url: "gas-supervise/hidanger/gov/check-plan",
    data
  },{
    isTransformResponse: false
  })
}

/**
 * 按主键删除检查计划
 */
export const checkPlanDelById = (query: { uid: string }) => {
  const url = `gas-supervise/hidanger/gov/check-plan/${query.uid}`;
  return defHttp.delete<BaseResponse<void>>({
    url,
  },{
    isTransformResponse: false
  });
};

/**
 * 按主键标记检查计划已完成
 */
export const checkPlanFinishById = (query: { uid: string }) => {
  const url = `gas-supervise/hidanger/gov/check-plan/finish/${query.uid}`;
  return defHttp.post<BaseResponse<void>>({
    url,
  },{
    isTransformResponse: false
  });
};



/**
 * @description  获取检查计划下拉列表
 *
 */
export const getCheckPlanByOrg = (orgId: string) => {
  return defHttp.get<CheckPlanOptions[]>({
    url: `gas-supervise/hidanger/gov/check-plan/selections?targetOrgId=${orgId}`,
  });
};


