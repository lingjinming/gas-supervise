// 导入请求函数
import { request } from "./request";

/**
 * 获取检查计划
 *
 */
export const getCheckPlanByOrg = (orgId: string) => {
  return request({
    url: `gasguard-service-risk-app/hidanger/gov/check-plan/selections?targetOrgId=${orgId}`,
    method: "GET",
  });
};

/**
 * 新增隐患
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

export interface HidangerOrgPageQuery {
  isOrg: boolean | undefined;
  page: number;
  size: number;
  order?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  selectIds?: object[];
  paging?: boolean;

  /** 隐患主体 */
  subjectType?: string;

  /** 风险要素类别 */
  dangerType?: string;

  /** 风险要素子类别 */
  dangerSubType?: string;

  /** 隐患级别 */
  level?: string;

  /** 隐患状态 */
  state?: string;

  /** 隐患来源 */
  dangerSource?: string;

  /** 是否督办 */
  superviseState?: boolean;

  /** 是否同步至省平台 */
  reportState?: boolean;

  /**
   * 隐患检查日期-开始
   * @format date
   */
  startTime?: string;

  /**
   * 隐患检查日期-结束
   * @format date
   */
  endTime?: string;
}
export interface HidangerPgaeVO {
  /** 数据主键 */
  uid?: string;

  checkBy?: string;
  /** 隐患主体类型 */
  subjectType?: "STATION" | "PIPELINE" | "RESTAURANT" | "INDOOR" | "OTHER";

  /** 隐患类型 */
  dangerType?:
    | "GW_SG"
    | "GW_MSBZ"
    | "GW_CY"
    | "GW_ZY"
    | "GW_JJBZ"
    | "GW_LH"
    | "CZ_MZ"
    | "CZ_CPZ"
    | "CZ_GZZ"
    | "CZ_JQZ"
    | "CY_QPWGSZ"
    | "CY_SYBHGPJ"
    | "CY_SJST"
    | "CY_BJQBAZ"
    | "CY_BJQWZBZQ"
    | "CY_BJQWTD"
    | "CY_SYQZWT"
    | "HN_WGCZD"
    | "HN_RQBGZ"
    | "HN_RQGDLH"
    | "HN_SYBHGPJ"
    | "OTHER";

  /** 隐患子类型 */
  dangerSubtype?:
    | "IO01"
    | "BD01"
    | "BD02"
    | "PT14"
    | "PT15"
    | "PT16"
    | "PT17"
    | "PT18"
    | "SD07"
    | "SD08"
    | "SD09"
    | "SD10"
    | "SD11"
    | "OTHER";

  /** 隐患级别 */
  level?: "ZD" | "JD" | "YB";
  _level?: string;

  /** 隐患描述 */
  remark?: string;

  /** 隐患状态 */
  state?:
    | "DRAFT"
    | "WAIT_HANDLE"
    | "WAIT_AUDIT"
    | "HANDLED"
    | "PASS"
    | "NOT_PASS"
    | "WAIT_REVIEW"
    | "REVIEWED"
    | "_UN_HANDLE"
    | "WAIT_RECEIVE"
    | "RECEIVED"
    | "CONFIRMED"
    | "OUT_HELP"
    | "HANDLING"
    | "FALSE_ALARM";

  /** 隐患来源 */
  dangerSource?: "SYSTEM" | "GOV" | "COMPANY";

  /**
   * 排查日期
   * @format date
   */
  checkDate?: string;

  /**
   * 整改完成日期
   * @format date
   */
  completionDate?: string;

  /** 隐患督办状态 */
  superviseState?: string;

  /** 省平台同步状态 */
  reportState?: string;

  /** 行政区划 */
  districtId?: string;

  /** 组织机构 */
  orgId?: string;

  /** 地址 */
  address?: string;

  /** 经度 */
  longitude?: number;

  /** 纬度 */
  latitude?: number;

  /** 隐患时长 */
  dangerDuration?: string;

  /** 检查计划编号 */
  planCode?: string;

  /** 整改单编号 */
  orderCode?: string;
}
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


export interface HiDangerFlow {
  push:        HandleStage;
  handleStage: HandleStage;
  auditStage:  AuditStage;
}

export interface AuditStage {
  stageTime:   string;
  title:       string;
  operator:    string;
  operatorOrg: string;
}

export interface HandleStage {
  stageTime:    string;
  title:        string;
  operator:     string;
  operatorOrg:  string;
  handleDate?:  string;
  level:        string;
  _level:       string;
  address:      string;
  dangerType:   string;
  _dangerType:  string;
  subjectType:  string;
  _subjectType: string;
  remark:       string;
  fileIds:      string[];
  picIds?:      string[];
  checkDate?:   string;
}

export const getHidangerFlow = async (uid: string) => {
  return request<{data: HiDangerFlow}>({
    url: 'gasguard-service-risk-app/hidanger/flow/'+uid,
    method: 'GET'
  })
}
