import type { BasePageReq } from "./BaseModel"

export interface ICheckPlanCreateReq {
  title:string
  startDate:string
  endDate:string
  type:string
  targetOrgId:string
  targetOrgOwner:string
  targetOrgPhone:string
  checkers:string
  address:string
  targetOrgAddr: string
}
/**
 * 检查计划下拉选
 */
export interface CheckPlanOptions {
  value: string;
  label: string;
  text: string;
}

/**
 * 检查计划分页请求
 */
export interface CheckPlanQueryReq extends BasePageReq{
  type: string;
  title: string;
  startTime: string;
  endTime: string;
  orgIds: string[]
}

/**
 * 检查计划分页响应
 */
export interface CheckPageVo  {
  checkers: string;
  endDate: string;
  handleState: string;
  masterOrgId: string;
  planCode: string;
  startDate: string;
  title: string;
  type: string;
  uid: string;
  _handleState: string;
  _masterOrgId: string;
  _type: string;
  planCreator:string
};
