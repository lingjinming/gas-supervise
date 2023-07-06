import type { BasePageReq } from "./BaseModel";

/**
 * 隐患分页查询条件
 */
export interface HidangerOrgPageQuery extends BasePageReq{

  /** 隐患主体 */
  subjectType?: string;

  /** 风险要素类别 */
  dangerType?: string;

  /** 风险要素子类别 */
  dangerSubType?: string;

  /** 隐患级别 */
  level?: string[];

  /** 隐患状态 */
  state?: string[];

  /** 隐患来源 */
  dangerSource?: string[];

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
  // xx 天前
  ago: string;
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
  _subjectType: string;
  _dangerType: string;
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
    _state: string;

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