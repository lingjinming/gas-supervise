// 导入请求函数
import { defHttp } from '@/utils/http';
import { userStore } from "@/state";

import type { Flow ,LeaderCommentCreate}  from './model/HidangerFlow'
import type {HidangerOrgPageQuery,HidangerPgaeVO} from './model/HidangerPage'
import type { AuditCreateReq } from "./model/HidangerAudit";
import type { HidangerCreateReq ,HidangerHandleReq} from "./model/Hidanger";
import type { BasePageResponse, BaseResponse } from "./model/BaseModel";


/**
 * @description 隐患类型
 *
 */
export const getHidangerTypes = () => {
  return defHttp.get<BaseResponse<void>>({
    url:"gasguard-service-risk-app/hidanger/types"
  });
};
/**
 * @description 新增隐患
 *
 */
export const addHidden = (data: HidangerCreateReq) => {
  const store = userStore();
  const isOrg = store.isOrgUser;
  const url = isOrg ? "gasguard-service-risk-app/hidanger/org" : "gasguard-service-risk-app/hidanger/gov";
  return defHttp.post<BaseResponse<void>>({
    url,
    data
  },{
    isTransformResponse: false
  });
};

/**
 * 隐患分页请求
 */
export const hidangerPage = (query: HidangerOrgPageQuery) => {
  const store = userStore();
  const isOrg = store.isOrgUser;
  const url = `gasguard-service-risk-app/hidanger/${isOrg ? "org" : "gov"}/page`;

  return defHttp.get<BasePageResponse<HidangerPgaeVO>>({
    url,
    data: query,
  },{
    isTransformResponse: false
  });
};



/**
 * @description 隐患整改
 */
export const reformHidangerById = (uid: string,data: HidangerHandleReq) => {
  const url = `gasguard-service-risk-app/hidanger/org/handle/${uid}`;
  return defHttp.put<BaseResponse<void>>({
    url,
    data,
  },{
    isTransformResponse: false
  });
};


/**
 * 按隐患主键获取隐患整改流程
 * @param uid 隐患主键
 * @returns 整改流程
 */
export const getHidangerFlow = async (uid: string) => {
  return defHttp.get<Flow>({
    url: 'gasguard-service-risk-app/hidanger/flow/'+uid,
  },{
    isTransformResponse:false
  })
}

/**
 * 创建领导评论
 * @param body 领导评论
 * @returns
 */
export const createLeaderComment = (data: LeaderCommentCreate) => {
  return defHttp.post<void>({
    url: 'gasguard-service-risk-app/hidanger/gov/leader-comment',
    data
  })
}
/**
 * 隐患审核
 */
export const hidangerAudit = (data: AuditCreateReq) => {
  return defHttp.put<void>({
    url: 'gasguard-service-risk-app/hidanger/gov/audit',
    data: data
  })
}

/**
 * 下发隐患整改单
 */
export const hidangerOrder = (data: {
  dangerIds:string[]
  orderDate:string[]
  deadline:string[]
  expertSignatures:string[]
  targetOrgMasterSignatures:string[]
  expertOpinion:string
  msgUserIds:string[]
}) => {
  return defHttp.post<void>({
    url: 'gasguard-service-risk-app/hidanger/gov/handle-order',
    data: data
  })
}
/**
 * 检查计划详情
 */
export const checkPlanDetail = (id:string) => {
  return defHttp.get<void>({
    url: `gasguard-service-risk-app/hidanger/gov/check-plan/${id}`,
  })
}