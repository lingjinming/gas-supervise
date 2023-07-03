// 导入请求函数
import { request } from "./request";
import type { Flow ,LeaderCommentCreate}  from './model/HidangerFlow'
import type {HidangerOrgPageQuery,HidangerPgaeVO} from './model/HidangerPage'

export interface ICheckPlanVo {

  title:string
  startDate:string
  endDate:string
  type:string
  targetOrgId:string
  targetOrgOwner:string
  targetOrgPhone:string
  checkers:string
  address:string
  targetOrgAddr:''
}
/**
 * @description 新增检查计划
 */

export const addCheckPlan = (data: ICheckPlanVo) => {

  return request({
    url: `gasguard-service-risk-app/hidanger/gov/check-plan`,
    method: "POST",
    data
  });
};


/**
 * @description  获取检查计划
 *
 */
export const getCheckPlanByOrg = (orgId: string) => {
  return request({
    url: `gasguard-service-risk-app/hidanger/gov/check-plan/selections?targetOrgId=${orgId}`,
    method: "GET",
  });
};

/**
 * @description 新增隐患
 *
 */
export type req_addHidden = {
  isOrg: Boolean;
  subjectType: String;
  dangerType: String;
  orgId: String;
  checkDate: String;
  longitude: Number;
  latitude: Number;
  address: String;
  remark: String;
  fileIds: String[];
  level: String;
  planCode: String;
  districtId: String;
};
export const addHidden = (data: req_addHidden) => {
  return request({
    url: data.isOrg
      ? "gasguard-service-risk-app/hidanger/org"
      : "gasguard-service-risk-app/hidanger/gov",
    method: "POST",
    data,
  });
};

/**
 * 消息提醒
 *
 */
export const getNotice = (data: { recipient: string }) => {
  return request({
    url: `gasguard-service-system-app/urge/get/allMsg/page`,
    method: "GET",
    data,
  });
};


export const hidangerPage = (query: HidangerOrgPageQuery) => {
  const url = `gasguard-service-risk-app/hidanger/${
    query.isOrg ? "org" : "gov"
  }/page`;
  return request<{ data: HidangerPgaeVO[]; total: number }>({
    url,
    method: "GET",
    data: query,
  });
};
export type CheckVo = {
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

export const checkPlanPage = (query: CheckVo) => {
  const url = `gasguard-service-risk-app/hidanger/gov/check-plan/page`;
  return request({
    url,
    method: "GET",
    data: query,
  });
};
export const checkPlanDelById = (query: { uid: string }) => {
  const url = `gasguard-service-risk-app/hidanger/gov/check-plan/${query.uid}`;
  return request<{ data: HidangerPgaeVO[]; total: number }>({
    url,
    method: "DELETE",
    data: query,
  });
};

export const checkPlanFinishById = (query: { uid: string }) => {
  const url = `gasguard-service-risk-app/hidanger/gov/check-plan/finish/${query.uid}`;
  return request<{ data: HidangerPgaeVO[]; total: number }>({
    url,
    method: "POST",
    data: query,
  });
};

/**
 * @description 隐患整改
 */
export const reformHidangerById = (query: { data: any }) => {
  const url = `gasguard-service-risk-app/hidanger/org/handle/${query.uid}`;
  return request({
    url,
    method: "PUT",
    data: query,
  });
};




export const getHidangerFlow = async (uid: string) => {
  return request<{data: Flow}>({
    url: 'gasguard-service-risk-app/hidanger/flow/'+uid,
    method: 'GET'
  })
}

/**
 * 创建领导评论
 * @param body 领导评论
 * @returns
 */
export const createLeaderComment = (body: LeaderCommentCreate) => {
  return request<{data: void}>({
    url: 'gasguard-service-risk-app/hidanger/gov/leader-comment',
    method: 'POST',
    data: body
  })
}
