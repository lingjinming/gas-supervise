/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ThirdBuildUpdateDTO {
  /** 行政区划 */
  districtId: string;
  /** 施工类型 */
  buildType: string;
  /** 第三方施工状态 */
  buildState: ThirdBuildUpdateDtoBuildState;
  /** 施工位置 */
  constructionAddress: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /**
   * 计划施工开始时间
   * @format date
   */
  planTimeStart: string;
  /**
   * 计划施结束工时间
   * @format date
   */
  planTimeEnd: string;
  /** 建设单位名称 */
  buildUnitName: string;
  /** 建设单位联系人姓名 */
  buildUnitContactName: string;
  /** 建设单位联系电话 */
  buildUnitContactPhone: string;
  /** 监理单位名称 */
  supUnitName: string;
  /** 监理单位联系人 */
  supUnitContactName: string;
  /** 监理单位联系人手机号 */
  supUnitContactPhone: string;
  /** 行政区划枚举中文描述 */
  _districtId: string;
  /** 第三方施工状态枚举中文描述 */
  _buildState: string;
}

export interface ResultVoid {
  code: string;
  data: object;
  message: string;
  success: boolean;
}

export interface IDsRequestDTO {
  ids: string[];
}

export interface FileObj {
  id: string;
  name: string;
}

/** 新增隐患 */
export interface HidangerCreateDTO {
  /** 检查计划-政府创建时提供 */
  planCode: string;
  /** 隐患主体类型 */
  subjectType: string;
  /** 隐患类别 */
  dangerType: string;
  /** 隐患子类别 */
  dangerSubtype: string;
  /** 风险要素等级 */
  level: HidangerCreateDtoLevel;
  /** 行政区划 */
  districtId: string;
  /** 组织机构 */
  orgId: string;
  /**
   * 排查日期
   * @format date
   */
  checkDate: string;
  /**
   * 坐标经度
   * @format double
   */
  longitude: number;
  /**
   * 坐标纬度
   * @format double
   */
  latitude: number;
  /**
   * 地址
   * @minLength 0
   * @maxLength 50
   */
  address: string;
  /**
   * 隐患描述
   * @minLength 0
   * @maxLength 300
   */
  remark: string;
  /** 隐患图片 */
  fileIds: FileObj[];
  /** 风险要素状态 */
  state: HidangerCreateDtoState;
  /**
   * 整改完成日期
   * @format date
   */
  completionDate: string;
  /** 隐患来源 */
  dangerSource: HidangerCreateDtoDangerSource;
  /** 风险要素等级枚举中文描述 */
  _level: string;
  /** 行政区划枚举中文描述 */
  _districtId: string;
  /** 组织机构枚举中文描述 */
  _orgId: string;
  /** 风险要素状态枚举中文描述 */
  _state: string;
  /** 隐患来源枚举中文描述 */
  _dangerSource: string;
}

export interface HidangerStatementDTO {
  /**
   * 整改情况说明
   * @minLength 0
   * @maxLength 200
   */
  remark: string;
  /** 附件 */
  fileIds: string[];
  /** 现场照片 */
  picIds: string[];
}

/** 燃气企业隐患整改 */
export interface OrgHidangerHandleDTO {
  /** 是否和隐患描述一致 */
  sameWithRemark: OrgHidangerHandleDtoSameWithRemark;
  /** 整改进度 */
  handleState: OrgHidangerHandleDtoHandleState;
  /**
   * 整改时间
   * @format date-time
   */
  handleDate: string;
  /**
   * 整改情况说明
   * @minLength 0
   * @maxLength 200
   */
  handleContent: string;
  /** 整改图片 */
  picIds: string[];
  /** 相关附件 */
  fileIds: string[];
  /** 是否和隐患描述一致枚举中文描述 */
  _sameWithRemark: string;
  /** 整改进度枚举中文描述 */
  _handleState: string;
}

export interface RiskIdsReqDTO {
  /**
   * 隐患id
   * @maxItems 2147483647
   * @minItems 1
   * @uniqueItems true
   */
  riskIds: number[];
}

/** 安全检查计划更新 */
export interface HiDangerCheckPlanUpdateDTO {
  /** 安全检查计划ID */
  title: string;
  /** 安全检查计划ID */
  checkers: string;
}

export interface Risk2DangerDTO {
  /** 风险要素审核结果 */
  auditResult: Risk2DangerDtoAuditResult;
  /** 附件id */
  fileIds: string[];
  /**
   * 隐患id
   * @maxItems 2147483647
   * @minItems 1
   * @uniqueItems true
   */
  riskIds: number[];
  /** 审核内容 */
  auditRemark: string;
  /** 风险要素审核结果枚举中文描述 */
  _auditResult: string;
}

/** 三方施工创建 */
export interface ThirdBuildCreateDTO {
  /** 三方施工基本信息 */
  info: ThirdBuildInfoCreateDTO;
  /** 三方施工交底创建DTO */
  report: ThirdBuildReportCreateDTO;
  /** 三方施工看护信息 */
  guard: ThirdBuildGuardCreateDTO;
}

/** 三方施工看护信息 */
export interface ThirdBuildGuardCreateDTO {
  /** 看护记录描述 */
  remark: string;
  /**
   * 看护记录图片
   * @maxItems 3
   * @minItems 0
   */
  picIds: string[];
  /**
   * 看护时间
   * @format date-time
   */
  guardTime: string;
  /**
   * 看护人员姓名
   * @minLength 0
   * @maxLength 16
   */
  guarderName: string;
}

/** 三方施工基本信息 */
export interface ThirdBuildInfoCreateDTO {
  /** 施工位置 */
  constructionAddress: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 行政区划 */
  districtId: string;
  /** 组织机构id,政府创建时必填 */
  orgId: string;
  /**
   * 计划施工开始时间
   * @format date
   */
  planTimeStart: string;
  /**
   * 计划施结束工时间
   * @format date
   */
  planTimeEnd: string;
  /** 第三方施工状态 */
  buildState: ThirdBuildInfoCreateDtoBuildState;
  /** 施工类型 */
  buildType: string;
  /** 建设单位名称 */
  buildUnitName: string;
  /** 建设单位联系人姓名 */
  buildUnitContactName: string;
  /** 建设单位联系电话 */
  buildUnitContactPhone: string;
  /** 监理单位名称 */
  supUnitName: string;
  /** 监理单位联系人 */
  supUnitContactName: string;
  /** 监理单位联系人手机号 */
  supUnitContactPhone: string;
  /** 行政区划枚举中文描述 */
  _districtId: string;
  /** 组织机构id,政府创建时必填枚举中文描述 */
  _orgId: string;
  /** 第三方施工状态枚举中文描述 */
  _buildState: string;
}

/** 三方施工交底创建DTO */
export interface ThirdBuildReportCreateDTO {
  /** 交底人姓名 */
  reporterName: string;
  /** 交底人手机号 */
  reporterPhone: string;
  /**
   * 交底照片id
   * @maxItems 3
   * @minItems 0
   */
  reportPicIds: string[];
  /**
   * 管网保护方案照片
   * @maxItems 3
   * @minItems 0
   */
  schemaPicIds: string[];
  /**
   * 管网保护协议照片
   * @maxItems 3
   * @minItems 0
   */
  protocolPicIds: string[];
  /**
   * 交底相关附件id
   * @maxItems 5
   * @minItems 0
   */
  fileIds: string[];
  /**
   * 交底时间,默认当前时间
   * @format date-time
   */
  reportTime: string;
}

export interface ResultString {
  code: string;
  data: string;
  message: string;
  success: boolean;
}

export interface ExcelImportValidationVO {
  hasBadData: boolean;
  badData: string[];
  goodData: object[];
}

export interface ResultExcelImportValidationVO {
  code: string;
  data: ExcelImportValidationVO;
  message: string;
  success: boolean;
}

export interface ThirdBuildBatchImportDTO {
  /**
   * @maxItems 2147483647
   * @minItems 1
   */
  items: ThirdBuildImportDTO[];
}

export interface ThirdBuildImportDTO {
  /** 施工类型 */
  buildType: string;
  /** 关联燃气企业 */
  orgId: string;
  /** 所属区域 */
  districtId: string;
  /**
   * 地址
   * @minLength 0
   * @maxLength 64
   */
  constructionAddress: string;
  /**
   * 计划施工开始时间
   * @format date
   */
  planTimeStart: string;
  /**
   * 计划施工结束工时间
   * @format date
   */
  planTimeEnd: string;
  /**
   * 实际施工开始工时间
   * @format date
   */
  realBuildTimeStart: string;
  /**
   * 实际施工结束时间
   * @format date
   */
  realBuildTimeEnd: string;
  /**
   * 上报人
   * @minLength 0
   * @maxLength 16
   */
  reportBy: string;
  /** 第三方施工状态 */
  buildState: ThirdBuildImportDtoBuildState;
  /**
   * 建设单位名称
   * @minLength 0
   * @maxLength 16
   */
  buildUnitName: string;
  /**
   * 建设单位联系人姓名
   * @minLength 0
   * @maxLength 16
   */
  buildUnitContactName: string;
  /**
   * 建设单位联系电话
   * @minLength 0
   * @maxLength 11
   * @pattern 1[3456789]\d{9}
   */
  buildUnitContactPhone: string;
  /**
   * 监理单位名称
   * @minLength 0
   * @maxLength 16
   */
  supUnitName: string;
  /**
   * 监理单位联系人
   * @minLength 0
   * @maxLength 16
   */
  supUnitContactName: string;
  /**
   * 监理单位联系人手机号
   * @minLength 0
   * @maxLength 11
   * @pattern 1[3456789]\d{9}
   */
  supUnitContactPhone: string;
  realBuildTimeEndValid: boolean;
  realBuildTimeStartValid: boolean;
  /** 关联燃气企业枚举中文描述 */
  _orgId: string;
  /** 所属区域枚举中文描述 */
  _districtId: string;
  /** 第三方施工状态枚举中文描述 */
  _buildState: string;
}

/** 研判分析-隐患分析列表请求 */
export interface ProjectRiskDangerRequest {
  /** @format int32 */
  page: number;
  /** @format int32 */
  size: number;
  order: string;
  originalOrder: string;
  orgId: string;
  districtId: string;
  keyword: string;
  /** @uniqueItems true */
  selectIds: object[];
  paging: boolean;
  /** 报警编号 */
  alarmId: string;
  /**
   * 报警经度
   * @format float
   */
  longitude: number;
  /**
   * 报警纬度
   * @format float
   */
  latitude: number;
  /**
   * 报警纬度
   * @format float
   */
  distance: number;
  districtIdAsList: string[];
  /** @uniqueItems true */
  selectIdsAsString: string[];
  /** @uniqueItems true */
  selectIdsAsLong: number[];
  /** @uniqueItems true */
  districtIdAsSet: string[];
  /** undefined枚举中文描述 */
  _orgId: string;
  /** undefined枚举中文描述 */
  _districtId: string;
}

/** 研判分析-隐患分析列表 */
export interface ProjectRiskDangerVO {
  /** 隐患编号 */
  id: string;
  /** 描述 */
  remark: string;
  /** 风险要素主体 */
  subjectType: string;
  /** 风险要素类型 */
  dangerType: string;
  /** 风险要素子类型 */
  dangerSubtype: string;
  /** 所属区域id */
  districtId: string;
  /** 所属机构id */
  orgId: string;
  /** 具体位置 */
  address: string;
  /**
   * 经度
   * @format double
   */
  longitude: number;
  /**
   * 纬度
   * @format double
   */
  latitude: number;
  /** 主体编号 */
  subjectId: string;
  /** 推送人 */
  pushBy: string;
  /**
   * 推送时间
   * @format date-time
   */
  pushTime: string;
  /** 整改建议 */
  measure: string;
  /** 风险要素状态 */
  state: ProjectRiskDangerVoState;
  /** 风险要素等级 */
  level: ProjectRiskDangerVoLevel;
  /** 所属区域id枚举中文描述 */
  _districtId: string;
  /** 所属机构id枚举中文描述 */
  _orgId: string;
  /** 风险要素状态枚举中文描述 */
  _state: string;
  /** 风险要素等级枚举中文描述 */
  _level: string;
}

export interface ResultListProjectRiskDangerVO {
  code: string;
  data: ProjectRiskDangerVO[];
  message: string;
  success: boolean;
}

export interface DataMessage {
  source: string;
  catalog: string;
  /** @format int64 */
  timestamp: number;
  serialNumber: string;
  payload: JsonNode;
}

export type JsonNode = object;

export interface IndoorAlarmQuery {
  type: string;
  timestamp: string;
  data: object[];
}

export interface HidangerImportVO {
  hasBadData: boolean;
  badData: string[];
  goodData: HidangerCreateDTO[];
}

export interface ResultHidangerImportVO {
  code: string;
  data: HidangerImportVO;
  message: string;
  success: boolean;
}

export interface HidangerDispatchDTO {
  /**
   * 隐患uid集合
   * @maxItems 2147483647
   * @minItems 1
   * @uniqueItems true
   */
  uids: number[];
  /** 隐患处置人员id */
  receiverId: string;
  /**
   * 派单说明
   * @minLength 0
   * @maxLength 200
   */
  remark: string;
  /** 附件 */
  fileIds: string[];
  /** 现场照片 */
  imgIds: string[];
  /** 是否发送短信 */
  sendMsg: boolean;
}

export interface HidangerImportDTO {
  /** 目标组织机构 */
  orgId: string;
  /** 隐患来源 */
  source: HidangerImportDtoSource;
  /** 整改计划编号,政府创建/导入时必须提供 */
  planCode: string;
  /** 隐患数据 */
  items: HidangerCreateDTO[];
  /** 目标组织机构枚举中文描述 */
  _orgId: string;
  /** 隐患来源枚举中文描述 */
  _source: string;
}

export interface LeaderCommentCreateDTO {
  /** 隐患编号 */
  dangerId: string;
  /** 处置流程阶段 */
  stage: LeaderCommentCreateDtoStage;
  /**
   * 阶段id
   * @format int64
   */
  stageId: number;
  /** 评论内容 */
  comment: string;
  /** 相关附件 */
  fileIds: string[];
  /** 处置流程阶段枚举中文描述 */
  _stage: string;
}

export interface HiDangerSendHandleOrderDTO {
  /** 企业负责人签名 */
  targetOrgMasterSignatures: string[];
  /** 专家签名 */
  expertSignatures: string[];
  /**
   * 隐患id集合
   * @maxItems 2147483647
   * @minItems 1
   * @uniqueItems true
   */
  dangerIds: number[];
  /**
   * 整改单日期
   * @format date
   */
  orderDate: string;
  /**
   * 整改单完成期限
   * @format date
   */
  deadline: string;
  /** 专家意见 */
  expertOpinion: string;
  /**
   * 需要发短信的用户id集合
   * @uniqueItems true
   */
  msgUserIds: string[];
  targetOrgMasterSignaturesStr: string;
  expertSignaturesStr: string;
}

/** 安全检查计划创建DTO */
export interface HiDangerCheckPlanCreateDTO {
  /** 安全检查计划类型 */
  type: HiDangerCheckPlanCreateDtoType;
  /** 标题 */
  title: string;
  /**
   * 检查时间开始
   * @format date
   */
  startDate: string;
  /**
   * 检查时间结束
   * @format date
   */
  endDate: string;
  /** 目标检查企业 */
  targetOrgId: string;
  /** 目标检查企业负责人 */
  targetOrgOwner: string;
  /** 目标检查企业联系方式 */
  targetOrgPhone: string;
  /** 目标检查企业地址 */
  targetOrgAddr: string;
  /** 检查人员 */
  checkers: string;
  /** 安全检查计划类型枚举中文描述 */
  _type: string;
}

export interface RiskComputedCallbackDTO {
  /** 评估时间 */
  date: string;
  /** 风险/指标评估文件 */
  files: RiskPipelineFileDTO[];
}

/** 区域风险管网数据 */
export interface RiskPipelineFileDTO {
  /** 文件地址 */
  link: string;
  /** 文件类型:RISK/NORM */
  type: string;
}

export interface ResultBoolean {
  code: string;
  data: boolean;
  message: string;
  success: boolean;
}

export interface FileUpdateResponseDTO {
  fileName: string;
  objectName: string;
  previewUrl: string;
  bucketName: string;
  /** @format double */
  fileMbSize: number;
}

export interface ResultFileUpdateResponseDTO {
  code: string;
  data: FileUpdateResponseDTO;
  message: string;
  success: boolean;
}

/** 响应错误详情 */
export interface Error {
  /** Exception完整信息 */
  detail: string;
  /** 额外的错误信息，目前主要是Validation的Message */
  message: string;
  /** 额外的错误代码，目前主要是Validation的Code */
  code: string;
  /** 额外的错误字段，目前主要是Validation的Field */
  field: string;
  /** 错误堆栈信息 */
  stackTrace: {
    classLoaderName: string;
    moduleName: string;
    moduleVersion: string;
    methodName: string;
    fileName: string;
    /** @format int32 */
    lineNumber: number;
    className: string;
    nativeMethod: boolean;
  }[];
}

/**
 * 统一响应返回实体
 * 所有Rest接口统一返回的实体定义
 * @example "new Result<T>().ok().message("XXX")"
 */
export interface Result {
  /**
   * 自定义响应编码
   * @format int32
   */
  code: number;
  /** 响应返回信息 */
  message: string;
  /** 请求路径 */
  path: string;
  /** 响应返回数据 */
  data: object;
  /** 链路 TraceId */
  traceId: string;
  /**
   * http状态码
   * @format int32
   */
  status: number;
  /**
   * 响应时间戳
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  timestamp: string;
  error: Error;
}

export interface OrganizationVO {
  id: string;
  parentOrg: string;
  fullName: string;
  name: string;
  shortName: string;
  districtCode: string;
  /** @format int32 */
  sort: number;
  unifiedSocialCreditIdentifie: string;
  fax: string;
  orgType: string;
  orgCode: string;
  tel: string;
  children: OrganizationVO[];
}

export interface ResultListUserInfoVO {
  code: string;
  data: UserInfoVO[];
  message: string;
  success: boolean;
}

export interface UserInfoVO {
  userId: string;
  /** @format int32 */
  pbfRanking: number;
  pbfDescription: string;
  pbfIsReserved: boolean;
  /** @format int32 */
  pbfReversion: number;
  /** @format int32 */
  pbfStatus: number;
  avatar: string;
  attachmentPreviewUrl: string;
  email: string;
  nickName: string;
  phoneNumber: string;
  userName: string;
  name: string;
  organizationId: string;
  /** @format int32 */
  sort: number;
  idcard: string;
  gender: string;
  officeNumber: string;
  job: string;
  contactAddress: string;
  organizationFullName: string;
  organizationShortName: string;
  organizationVO: OrganizationVO;
  partOrganizationVOs: OrganizationVO[];
  partTimeOrganization: string;
  dataSpecific: string;
  dataRegional: string;
  permissionDistrictCode: string;
  districtObjType: string;
  permissionSystemDistrictName: string;
  permissionEnable: boolean;
  permissionParentDistrictCode: string;
  permissionParentDistrictName: string;
  /** @format int32 */
  districtObjLevel: number;
}

export interface MenuButtonVO {
  id: string;
  menuId: string;
  name: string;
  mark: string;
  type: string;
  remark: string;
  /** @format int32 */
  sort: number;
}

export interface MenuVO {
  id: string;
  parentMenu: string;
  parentMenuName: string;
  menuName: string;
  menuCode: string;
  menuUrl: string;
  menuIcon: string;
  menuDisabled: boolean;
  menuPopup: boolean;
  menuHide: boolean;
  /** @format int32 */
  sort: number;
  applicationsId: string;
  buttonChildren: MenuButtonVO[];
}

export interface ResultListMenuVO {
  code: string;
  data: MenuVO[];
  message: string;
  success: boolean;
}

export interface ResultListOrganizationVO {
  code: string;
  data: OrganizationVO[];
  message: string;
  success: boolean;
}

export interface ResultUserInfoVO {
  code: string;
  data: UserInfoVO;
  message: string;
  success: boolean;
}

export interface DistrictVO {
  /** @format int64 */
  cmKid: number;
  /** @format int64 */
  parentId: number;
  parentName: string;
  parentCode: string;
  /** @format int32 */
  objLevel: number;
  name: string;
  /** @format int32 */
  code: number;
  objX: number;
  objY: number;
  children: DistrictVO[];
  note1: string;
  note2: string;
  note3: string;
  objType: string;
}

export interface ResultDistrictVO {
  code: string;
  data: DistrictVO;
  message: string;
  success: boolean;
}

export interface ResultThirdBuildDetailVO {
  code: string;
  data: ThirdBuildDetailVO;
  message: string;
  success: boolean;
}

/** 看护记录 */
export interface RiskThirdGuardItemDTO {
  uid: string;
  /** 看护记录描述 */
  remark: string;
  /** 看护记录图片 */
  picIds: FileObj[];
  /**
   * 看护时间
   * @format date-time
   */
  guardTime: string;
  /** 看护人员姓名 */
  guarderName: string;
}

export interface ThirdBuildDetailVO {
  /** 看护记录 */
  guardList: RiskThirdGuardItemDTO[];
  uid: string;
  /** 施工类型 */
  buildType: ThirdBuildDetailVoBuildType;
  /** 交底状态 */
  reportState: ThirdBuildDetailVoReportState;
  /** 看护状态 */
  guardState: ThirdBuildDetailVoGuardState;
  /** 所属单位 */
  orgId: string;
  /**
   * 计划施工开始时间
   * @format date
   */
  planTimeStart: string;
  /**
   * 计划施结束工时间
   * @format date
   */
  planTimeEnd: string;
  /** 第三方施工状态 */
  buildState: ThirdBuildDetailVoBuildState;
  /**
   * 上报时间
   * @format date-time
   */
  createTime: string;
  /** 所属区域 */
  districtId: string;
  /** 施工位置 */
  constructionAddress: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /**
   * 实际施工开始时间
   * @format date-time
   */
  realBuildTimeStart: string;
  /**
   * 实际施工结束时间
   * @format date-time
   */
  realBuildTimeEnd: string;
  /** 交底人姓名 */
  reporterName: string;
  /** 交底人手机号 */
  reporterPhone: string;
  /** 建设单位名称 */
  buildUnitName: string;
  /** 建设单位联系人姓名 */
  buildUnitContactName: string;
  /** 建设单位联系电话 */
  buildUnitContactPhone: string;
  /** 监理单位名称 */
  supUnitName: string;
  /** 监理单位联系人 */
  supUnitContactName: string;
  /** 监理单位联系人手机号 */
  supUnitContactPhone: string;
  /** 交底照片 */
  reportPicIds: FileObj[];
  /** 管网保护方案 */
  schemaPicIds: FileObj[];
  /** 管网保护协议 */
  protocolPicIds: FileObj[];
  /** 施工类型枚举中文描述 */
  _buildType: string;
  /** 交底状态枚举中文描述 */
  _reportState: string;
  /** 看护状态枚举中文描述 */
  _guardState: string;
  /** 所属单位枚举中文描述 */
  _orgId: string;
  /** 第三方施工状态枚举中文描述 */
  _buildState: string;
  /** 所属区域枚举中文描述 */
  _districtId: string;
}

export interface ResultThirdBuildHandleFlowVO {
  code: string;
  data: ThirdBuildHandleFlowVO;
  message: string;
  success: boolean;
}

export interface ThirdBuildHandleFlowVO {
  flows: ThirdBuildHandleItemDTO[];
}

export interface ThirdBuildHandleItemDTO {
  /** 标题 */
  title: string;
  /**
   * 阶段时间
   * @format date-time
   */
  stageTime: string;
  /** 操作人 */
  operator: string;
  /** 交底照片 */
  reportPicIds: FileObj[];
  /** 管网保护方案照片 */
  schemaPicIds: FileObj[];
  /** 管网保护协议照片 */
  protocolPicIds: FileObj[];
  /** 交底相关附件id */
  fileIds: FileObj[];
  /** 看护记录描述 */
  remark: string;
  /**
   * 看护记录图片
   * @maxItems 3
   * @minItems 0
   */
  picIds: FileObj[];
}

export interface ResultThirdBuildSummaryVO {
  code: string;
  /** 三方施工统计 */
  data: ThirdBuildSummaryVO;
  message: string;
  success: boolean;
}

/** 三方施工统计 */
export interface ThirdBuildSummaryVO {
  /**
   * 施工总数
   * @format int32
   */
  total: number;
  /**
   * 在施工数量
   * @format int32
   */
  inProgress: number;
}

export interface ThirdBuildPageQuery {
  /** @format int32 */
  page: number;
  /** @format int32 */
  size: number;
  order: string;
  originalOrder: string;
  orgId: string;
  districtId: string;
  keyword: string;
  /** @uniqueItems true */
  selectIds: object[];
  paging: boolean;
  buildType: string[];
  /** @format date-time */
  startTime: string;
  /** @format date-time */
  endTime: string;
  buildStates: ThirdBuildPageQueryBuildStates[];
  reportStates: ThirdBuildPageQueryReportStates[];
  guardStates: ThirdBuildPageQueryGuardStates[];
  districtIdAsList: string[];
  /** @uniqueItems true */
  selectIdsAsString: string[];
  /** @uniqueItems true */
  selectIdsAsLong: number[];
  /** @uniqueItems true */
  districtIdAsSet: string[];
  /** undefined枚举中文描述 */
  _orgId: string;
  /** undefined枚举中文描述 */
  _districtId: string;
}

export interface PageResultListThirdBuildPageVO {
  code: string;
  data: ThirdBuildPageVO[];
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface ThirdBuildPageVO {
  /** 施工id */
  uid: string;
  /** 施工类型 */
  buildType: ThirdBuildPageVoBuildType;
  /** 第三方施工状态 */
  buildState: ThirdBuildPageVoBuildState;
  /** 交底状态 */
  reportState: ThirdBuildPageVoReportState;
  /**
   * 交底时间
   * @format date
   */
  reportTime: string;
  /** 看护状态 */
  guardState: ThirdBuildPageVoGuardState;
  /** 所属单位 */
  orgId: string;
  /** 所属区域 */
  districtId: string;
  /** 施工位置 */
  constructionAddress: string;
  /**
   * 计划施工开始时间
   * @format date
   */
  planTimeStart: string;
  /**
   * 计划施结束工时间
   * @format date
   */
  planTimeEnd: string;
  latitude: number;
  longitude: number;
  /** 施工单位名称 */
  buildUnitName: string;
  /** 施工单位联系人手机号 */
  buildUnitContactPhone: string;
  /** 监管单位名称 */
  supUnitName: string;
  /** 监管单位联系人手机号 */
  supUnitContactPhone: string;
  /** 施工类型枚举中文描述 */
  _buildType: string;
  /** 第三方施工状态枚举中文描述 */
  _buildState: string;
  /** 交底状态枚举中文描述 */
  _reportState: string;
  /** 看护状态枚举中文描述 */
  _guardState: string;
  /** 所属单位枚举中文描述 */
  _orgId: string;
  /** 所属区域枚举中文描述 */
  _districtId: string;
}

/** 监管预警信息分页查询请求 */
export interface WarnPageRequest {
  /** @format int32 */
  page: number;
  /** @format int32 */
  size: number;
  order: string;
  originalOrder: string;
  orgId: string;
  districtId: string;
  keyword: string;
  /** @uniqueItems true */
  selectIds: object[];
  paging: boolean;
  /** 预警级别 */
  warnLevel: WarnPageRequestWarnLevel[];
  /** 预警场所 */
  objType: WarnPageRequestObjType[];
  /** 预警状态 */
  warnState: WarnPageRequestWarnState[];
  /**
   * 预警发布时间开始
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  startTime: string;
  /**
   * 预警发布时间结束
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  endTime: string;
  districtIdAsList: string[];
  /** @uniqueItems true */
  selectIdsAsString: string[];
  /** @uniqueItems true */
  selectIdsAsLong: number[];
  /** @uniqueItems true */
  districtIdAsSet: string[];
  /** undefined枚举中文描述 */
  _orgId: string;
  /** undefined枚举中文描述 */
  _districtId: string;
}

export interface PageResultListWarnPageVO {
  code: string;
  data: WarnPageVO[];
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 监管预警信息分页查询VO */
export interface WarnPageVO {
  /** ID */
  uid: string;
  /** 预警编号 */
  warnId: string;
  /**
   * 预警时间
   * @format date-time
   */
  warnTime: string;
  /** 监测场所 */
  objType: WarnPageVoObjType;
  /** 预警内容 */
  warnContent: string;
  /** 预警级别 */
  warnLevel: WarnPageVoWarnLevel;
  /** 报警编号 */
  alarmId: string;
  /** 预警状态 */
  state: WarnPageVoState;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime: string;
  /** 预警名称 */
  warnName: string;
  /** 排查结果 */
  warnResult: string;
  /** 行政区划 */
  districtId: string;
  /** 组织机构 */
  orgId: string;
  /** 详细地址 */
  address: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 报警时长 */
  duration: string;
  /** 预警类型 */
  warnType: string;
  /** 数据来源 */
  alarmSource: WarnPageVoAlarmSource;
  /** 监测场所枚举中文描述 */
  _objType: string;
  /** 预警级别枚举中文描述 */
  _warnLevel: string;
  /** 预警状态枚举中文描述 */
  _state: string;
  /** 行政区划枚举中文描述 */
  _districtId: string;
  /** 组织机构枚举中文描述 */
  _orgId: string;
  /** 数据来源枚举中文描述 */
  _alarmSource: string;
}

export interface ResultWarnSummaryVO {
  code: string;
  /** 预警汇总VO */
  data: WarnSummaryVO;
  message: string;
  success: boolean;
}

/** 预警汇总VO */
export interface WarnSummaryVO {
  /**
   * 报警总数
   * @format int64
   */
  allCount: number;
  /**
   * 管网监测预警总数
   * @format int64
   */
  pipelineCount: number;
  /**
   * 场站监测预警总数
   * @format int64
   */
  stationCount: number;
}

export interface ResultListWarnTotalVO {
  code: string;
  data: WarnTotalVO[];
  message: string;
  success: boolean;
}

/** 预警统计分析-预警类型统计VO */
export interface WarnTotalVO {
  /**
   * 预警总数
   * @format int64
   */
  total: number;
  /** 组织机构 */
  orgId: string;
  /** 数据类型：数据来源、监测指标、监测场所... */
  dataType: string;
  /**
   * 处置中
   * @format int64
   */
  dispose: number;
  /**
   * 已解除
   * @format int64
   */
  relieve: number;
  /**
   * 占比
   * @format float
   */
  rate: number;
  /** 组织机构枚举中文描述 */
  _orgId: string;
}

/** 处置中预警明细 */
export interface DisposeDetail {
  /** 预警编号 */
  warnId: string;
  /** 预警类型 */
  warnType: string;
  /** 预警级别 */
  warnLevel: DisposeDetailWarnLevel;
  /** 详细地址 */
  address: string;
  /** 组织机构 */
  orgId: string;
  /**
   * 预警时间
   * @format date-time
   */
  warnTime: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 报警时长 */
  duration: string;
  /** 预警级别枚举中文描述 */
  _warnLevel: string;
  /** 组织机构枚举中文描述 */
  _orgId: string;
}

export interface ResultWarnDisposeVO {
  code: string;
  /** 预警统计分析-处置中预警VO */
  data: WarnDisposeVO;
  message: string;
  success: boolean;
}

/** 预警统计分析-处置中预警VO */
export interface WarnDisposeVO {
  /**
   * 预警总数
   * @format int64
   */
  total: number;
  /** 报警类型总数 */
  disposeTotal: WarnTotalVO[];
  /** 处置中预警明细 */
  details: DisposeDetail[];
}

/** 监管统计请求 */
export interface StatisticalRequest {
  /** @format int32 */
  page: number;
  /** @format int32 */
  size: number;
  order: string;
  originalOrder: string;
  orgId: string;
  districtId: string;
  keyword: string;
  /** @uniqueItems true */
  selectIds: object[];
  paging: boolean;
  /** 组织机构列表 */
  orgIds: string[];
  /** 监测类型 */
  objType: StatisticalRequestObjType[];
  /** 报警状态 */
  alarmState: StatisticalRequestAlarmState[];
  /** 预警状态 */
  warnState: StatisticalRequestWarnState[];
  districtIdAsList: string[];
  /** @uniqueItems true */
  selectIdsAsString: string[];
  /** @uniqueItems true */
  selectIdsAsLong: number[];
  /** @uniqueItems true */
  districtIdAsSet: string[];
  /** undefined枚举中文描述 */
  _orgId: string;
  /** undefined枚举中文描述 */
  _districtId: string;
}

/** 实时监测设备汇总VO */
export interface DeviceStateSummaryVO {
  /** 数据类型：数据来源、监测指标、监测场所... */
  dataType: string;
  /**
   * 设备总数
   * @format int64
   */
  total: number;
  /**
   * 在线设备总数
   * @format int64
   */
  onlineCount: number;
  /**
   * 离线设备总数
   * @format int64
   */
  offlineCount: number;
  /**
   * 在线率
   * @format float
   */
  rate: number;
}

export interface ResultListDeviceStateSummaryVO {
  code: string;
  data: DeviceStateSummaryVO[];
  message: string;
  success: boolean;
}

/** 实时监测设备汇总VO */
export interface MonitorDeviceSumVO {
  /** 监测场所 */
  objType: string;
  /**
   * 设备总数
   * @format int64
   */
  allCount: number;
}

export interface ResultListMonitorDeviceSumVO {
  code: string;
  data: MonitorDeviceSumVO[];
  message: string;
  success: boolean;
}

/** 企业监测设备在线率排名VO */
export interface OrgDeviceRateVO {
  /** 组织机构ID */
  orgId: string;
  /** 部门名称 */
  fullName: string;
  /**
   * 设备总数
   * @format int64
   */
  total: number;
  /**
   * 在线设备总数
   * @format int64
   */
  onlineCount: number;
  /**
   * 离线设备总数
   * @format int64
   */
  offlineCount: number;
  /**
   * 在线率
   * @format float
   */
  rate: number;
  /** 组织机构ID枚举中文描述 */
  _orgId: string;
}

export interface ResultListOrgDeviceRateVO {
  code: string;
  data: OrgDeviceRateVO[];
  message: string;
  success: boolean;
}

/** 设备总数在线率VO */
export interface AllOnlineRateVO {
  /**
   * 设备总数
   * @format int64
   */
  total: number;
  /**
   * 在线设备总数
   * @format int64
   */
  onlineCount: number;
  /**
   * 在线率
   * @format float
   */
  rate: number;
}

export interface ResultAllOnlineRateVO {
  code: string;
  /** 设备总数在线率VO */
  data: AllOnlineRateVO;
  message: string;
  success: boolean;
}

/** 报警数量统计VO */
export interface AlarmObjTypeSummaryVO {
  /**
   * 报警总数
   * @format int64
   */
  total: number;
  /** 数据类型：数据来源、监测指标、监测场所... */
  dataType: string;
  /**
   * 报警中
   * @format int64
   */
  alarmCount: number;
  /**
   * 报警处置
   * @format int64
   */
  disposeCount: number;
  /**
   * 报警解除
   * @format int64
   */
  relieveCount: number;
}

export interface ResultListAlarmObjTypeSummaryVO {
  code: string;
  data: AlarmObjTypeSummaryVO[];
  message: string;
  success: boolean;
}

/** 报警类别数量统计VO */
export interface AlarmSumVO {
  /**
   * 报警总数
   * @format int64
   */
  total: number;
  /** 数据类型：数据来源、监测指标、监测场所... */
  dataType: string;
  /**
   * 占比
   * @format float
   */
  rate: number;
}

export interface ResultListAlarmSumVO {
  code: string;
  data: AlarmSumVO[];
  message: string;
  success: boolean;
}

/** 监测查询分页请求 */
export interface MonitorRequest {
  /** @format int32 */
  page: number;
  /** @format int32 */
  size: number;
  order: string;
  originalOrder: string;
  orgId: string;
  districtId: string;
  keyword: string;
  /** @uniqueItems true */
  selectIds: object[];
  paging: boolean;
  /** 监测场所 */
  objType: MonitorRequestObjType[];
  /** 监测指标 */
  monitorIndex: string[];
  /** 监测状态 */
  eqptState: MonitorRequestEqptState[];
  districtIdAsList: string[];
  /** @uniqueItems true */
  selectIdsAsString: string[];
  /** @uniqueItems true */
  selectIdsAsLong: number[];
  /** @uniqueItems true */
  districtIdAsSet: string[];
  /** undefined枚举中文描述 */
  _orgId: string;
  /** undefined枚举中文描述 */
  _districtId: string;
}

/** 实时监测分页信息VO */
export interface MonitorPageVO {
  /** ID */
  uid: string;
  /** 设备编号 */
  eqptId: string;
  /** 设备名称 */
  eqptName: string;
  /** 监测对象 */
  objId: string;
  /** 监测场所 */
  objType: MonitorPageVoObjType;
  /** 监测对象子类型，如管网有：燃气井、排水井等 */
  objSubtype: string;
  /** 监测指标 */
  monitorIndex: string;
  /**
   * 设备最新值时间
   * @format date-time
   */
  latestTime: string;
  /** 设备最新值 */
  latestValue: number;
  /** 度量单位 */
  measurement: string;
  /** 行政区划id */
  districtId: string;
  /** 组织机构id */
  orgId: string;
  /** 详细地址 */
  address: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 监测状态 */
  eqptState: MonitorPageVoEqptState;
  /** 数据来源 */
  dataSource: MonitorPageVoDataSource;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime: string;
  /** 监测场所枚举中文描述 */
  _objType: string;
  /** 行政区划id枚举中文描述 */
  _districtId: string;
  /** 组织机构id枚举中文描述 */
  _orgId: string;
  /** 监测状态枚举中文描述 */
  _eqptState: string;
  /** 数据来源枚举中文描述 */
  _dataSource: string;
}

export interface PageResultListMonitorPageVO {
  code: string;
  data: MonitorPageVO[];
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 实时监测汇总VO */
export interface MonitorSummaryVO {
  /** 监测场所 */
  objType: MonitorSummaryVoObjType;
  /**
   * count
   * @format int64
   */
  allCount: number;
  /**
   * 报警中设备数
   * @format int64
   */
  alarmCount: number;
  /**
   * 离线设备数
   * @format int64
   */
  offlineCount: number;
  /**
   * 正常设备数
   * @format int64
   */
  normalCount: number;
  /** 监测场所枚举中文描述 */
  _objType: string;
}

export interface ResultListMonitorSummaryVO {
  code: string;
  data: MonitorSummaryVO[];
  message: string;
  success: boolean;
}

/** 搜索周边地理信息请求 */
export interface PerimeterSearchRequest {
  /**
   * 经度
   * @format double
   */
  longitude: number;
  /**
   * 纬度
   * @format double
   */
  latitude: number;
  /**
   * 半径距离
   * @format float
   */
  distance: number;
  /** 点位对象 */
  geom: string;
}

/** 危险源VO */
export interface DangerJudgeVO {
  /**
   * id
   * @format int64
   */
  cmKid: number;
  /** 危险源编号 */
  dangerCode: string;
  /**  危险源类型 */
  type: DangerJudgeVoType;
  /**  危险源名称 */
  name: string;
  /** 是否重大危险源 */
  flgMajor: string;
  /** 详细地址 */
  address: string;
  /** 经度 */
  longitude: number;
  /**  纬度 */
  latitude: number;
  /** 距离 */
  distance: string;
  /**  危险源类型枚举中文描述 */
  _type: string;
}

/** 测点VO */
export interface MonitorJudgeVO {
  /** 设备编号 */
  eqptId: string;
  /** 设备名称 */
  eqptName: string;
  /** 监测对象 */
  objId: string;
  /** 监测指标 */
  monitorIndex: string;
  /**
   * 设备最新值时间
   * @format date-time
   */
  latestTime: string;
  /** 设备最新值 */
  latestValue: number;
  /** 最新报警级别 */
  latestLevel: string;
  /** 度量单位 */
  measurement: string;
  /** 监测对象子类型，如管网有：燃气井、排水井等 */
  objSubtype: string;
  /** 详细地址 */
  address: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 距离 */
  distance: string;
}

/** 搜索周边地理信息返回 */
export interface PerimeterSearchVO {
  /**
   * 搜索半径
   * @format float
   */
  distance: number;
  /**
   * 防护目标总数
   * @format int32
   */
  protagCount: number;
  /**
   * 危险源总数
   * @format int32
   */
  dangerCount: number;
  /**
   * 监测设备总数
   * @format int32
   */
  deviceCount: number;
  /** 防护目标列表 */
  protagList: ProtagJudgeVO[];
  /** 危险源列表 */
  dangerList: DangerJudgeVO[];
  /** 监测设备 */
  deviceList: MonitorJudgeVO[];
}

/** 防护目标VO */
export interface ProtagJudgeVO {
  /**
   * id
   * @format int64
   */
  cmKid: number;
  /** 防护目标编号 */
  portectid: string;
  /** 防护目标类型 */
  type: ProtagJudgeVoType;
  /** 防护目标名称 */
  name: string;
  /** 是否重点防护目标 */
  flgMajor: string;
  /** 详细地址 */
  address: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 距离 */
  distance: string;
  /** 防护目标类型枚举中文描述 */
  _type: string;
}

export interface ResultPerimeterSearchVO {
  code: string;
  /** 搜索周边地理信息返回 */
  data: PerimeterSearchVO;
  message: string;
  success: boolean;
}

/** 页面详情VO */
export interface ObjDetail {
  /** 标题 */
  title: string;
  /** 明细 */
  details: Record<string, any>;
}

export interface ResultSuperviseObjDetailVO {
  code: string;
  /** 监管对象详情信息VO */
  data: SuperviseObjDetailVO;
  message: string;
  success: boolean;
}

/** 监管对象详情信息VO */
export interface SuperviseObjDetailVO {
  /** 设备编号 */
  eqptId: string;
  /** 点位编号 */
  pointId: string;
  /** 页面详情 */
  page: ObjDetail[];
}

/** 设备监测曲线 */
export interface MonitorCurveQuery {
  /** 设备编码 */
  eqptId: string;
  /**
   * 开始时间
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  startTime: string;
  /**
   * 结束时间
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  endTime: string;
}

/** 最大值与最小值对象VO */
export interface Difference {
  /**
   * Y坐标轴数据值
   * @format float
   */
  val: number;
  xdata: string;
}

/** 监测曲线返回VO */
export interface MonitorCurveVO {
  /** 设备编号 */
  eqptId: string;
  /** 点位编号 */
  pointId: string;
  /** 度量单位，如：%vol.. */
  measure: string[];
  /** 最大值 */
  max: Difference[];
  /** 最小值 */
  min: Difference[];
  ydata: Record<string, any>;
  xdata: string[];
}

export interface ResultMonitorCurveVO {
  code: string;
  /** 监测曲线返回VO */
  data: MonitorCurveVO;
  message: string;
  success: boolean;
}

/** 监管报警信息分页查询请求 */
export interface AlarmPageRequest {
  /** @format int32 */
  page: number;
  /** @format int32 */
  size: number;
  order: string;
  originalOrder: string;
  orgId: string;
  districtId: string;
  keyword: string;
  /** @uniqueItems true */
  selectIds: object[];
  paging: boolean;
  /** 监测类型 */
  objType: AlarmPageRequestObjType[];
  /** 报警类型 */
  alarmType: string[];
  /** 报警指标类型 */
  alarmIndex: string[];
  /** 报警状态 */
  alarmState: AlarmPageRequestAlarmState[];
  /**
   * 报警时间查询开始
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  startTime: string;
  /**
   * 报警时间查询结束
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  endTime: string;
  districtIdAsList: string[];
  /** @uniqueItems true */
  selectIdsAsString: string[];
  /** @uniqueItems true */
  selectIdsAsLong: number[];
  /** @uniqueItems true */
  districtIdAsSet: string[];
  /** undefined枚举中文描述 */
  _orgId: string;
  /** undefined枚举中文描述 */
  _districtId: string;
}

/** 监管报警信息分页查询VO */
export interface AlarmPageVO {
  /** ID */
  uid: string;
  /** 报警编号 */
  alarmId: string;
  /** 设备编号 */
  eqptId: string;
  /** 设备名称 */
  eqptName: string;
  /** 监测场所 */
  objType: AlarmPageVoObjType;
  /** 监测编号 */
  objId: string;
  /** 监测对象子类型 */
  objSubtype: string;
  /** 报警类型 */
  alarmType: string;
  /** 监测指标 */
  monitorIndex: string;
  /** 最新报警值 */
  latestValue: number;
  /**
   * 最新报警时间
   * @format date-time
   */
  latestTime: string;
  /** 最新报警级别 */
  latestLevel: string;
  /**
   * 第一次报警时间
   * @format date-time
   */
  firstTime: string;
  /** 度量单位 */
  measurement: string;
  /** 报警状态 */
  alarmState: AlarmPageVoAlarmState;
  /** 报警时长 */
  duration: string;
  /** 数据来源 */
  alarmSource: AlarmPageVoAlarmSource;
  /**
   * 报警解除时间
   * @format date-time
   */
  relieveTime: string;
  /** 行政区划 */
  districtId: string;
  /** 组织机构 */
  orgId: string;
  /** 详细地址 */
  address: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 监测场所枚举中文描述 */
  _objType: string;
  /** 报警状态枚举中文描述 */
  _alarmState: string;
  /** 数据来源枚举中文描述 */
  _alarmSource: string;
  /** 行政区划枚举中文描述 */
  _districtId: string;
  /** 组织机构枚举中文描述 */
  _orgId: string;
}

export interface PageResultListAlarmPageVO {
  code: string;
  data: AlarmPageVO[];
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 报警汇总VO */
export interface AlarmSummaryVO {
  /**
   * 报警总数
   * @format int64
   */
  allCount: number;
  /**
   * 管网监测报警
   * @format int64
   */
  pipelineCount: number;
  /**
   * 工商用户监测报警
   * @format int64
   */
  industryCount: number;
  /**
   * 居民用户监测报警
   * @format int64
   */
  indoorCount: number;
  /**
   * 场站监测报警
   * @format int64
   */
  stationCount: number;
}

export interface ResultAlarmSummaryVO {
  code: string;
  /** 报警汇总VO */
  data: AlarmSummaryVO;
  message: string;
  success: boolean;
}

/** 历史报警记录VO */
export interface HistoryAlarmVO {
  /** 设备编号 */
  eqptId: string;
  /** 监测编号 */
  objId: string;
  /** 报警类型 */
  alarmType: string;
  /**
   * 预警数量
   * @format int32
   */
  count: number;
  /** 历史详情 */
  historyDetails: ObjDetail[];
}

export interface ResultListHistoryAlarmVO {
  code: string;
  data: HistoryAlarmVO[];
  message: string;
  success: boolean;
}

/** 报警、预警处置流程VO */
export interface DisposeTraceVO {
  /**
   * 处置时间
   * @format date-time
   */
  disposeTime: string;
  /** 处置节点 */
  disposeNode: string;
  /** 处置人 */
  disposeBy: string;
  /** 处置人电话 */
  disposePhone: string;
  /** 处置结果 */
  disposeResult: string;
  /** 处置说明 */
  content: string;
  /** 文件id集合，多个以逗号分隔 */
  fileIds: FileObj[];
}

export interface ResultListDisposeTraceVO {
  code: string;
  data: DisposeTraceVO[];
  message: string;
  success: boolean;
}

export interface ResultRiskDangerStatisticsOfWordVO {
  code: string;
  data: RiskDangerStatisticsOfWordVO;
  message: string;
  success: boolean;
}

export interface RiskDangerStatisticsOfWordVO {
  /**
   * 隐患总数
   * @format int64
   */
  risk_total: number;
  /**
   * 上期遗留隐患
   * @format int64
   */
  last_risk_total: number;
  /**
   * 本期新增隐患
   * @format int64
   */
  add_risk_total: number;
  /**
   * 本期治理隐患
   * @format int64
   */
  deal_risk_total: number;
  /**
   * 重大隐患
   * @format int64
   */
  major_risk_total: number;
  /**
   * 较大隐患
   * @format int64
   */
  more_risk_total: number;
  /**
   * 一般隐患
   * @format int64
   */
  commonly_risk_total: number;
  /** 高风险管道公里 */
  read_level_total: string;
  /** 高风险管道公里占比 */
  read_level_total_per: string;
}

export interface ResultListRiskExportVO {
  code: string;
  data: RiskExportVO[];
  message: string;
  success: boolean;
}

/** 隐患数据导出 */
export interface RiskExportVO {
  /** 隐患主键 */
  uid: string;
  /** 隐患编号 */
  dangerId: string;
  /** 风险要素主体 */
  subjectType: string;
  /** 风险要素类型 */
  dangerType: string;
  /** 风险要素子类型 */
  dangerSubtype: string;
  /** 隐患主体编号 */
  subjectId: string;
  /** 权属单位 */
  orgId: string;
  /** 所属区域 */
  districtId: string;
  /** 具体位置 */
  address: string;
  /** 风险要素等级 */
  level: RiskExportVoLevel;
  /** 排查人员 */
  checkBy: string;
  /** 排查人员联系电话 */
  checkPhone: string;
  /**
   * 排查时间
   * @format date
   */
  checkDate: string;
  /**
   * 整改期限
   * @format date
   */
  deadline: string;
  /** 风险要素状态 */
  state: RiskExportVoState;
  /** 隐患来源 */
  dangerSource: RiskExportVoDangerSource;
  /** 整改责任人 */
  director: string;
  /** 整改责任人电话 */
  directorPhone: string;
  /** 整改措施 */
  measure: string;
  /**
   * 计划整改时间
   * @format date
   * @pattern yyyy-MM-dd
   */
  planTime: string;
  /** 排查单位 */
  checkDept: string;
  /** 描述 */
  remark: string;
  /** 是否密集场所 */
  isDense: boolean;
  /** 推送人 */
  pushBy: string;
  /**
   * 推送时间
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  pushTime: string;
  /**
   * 更新时间
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  updateTime: string;
  /** @format double */
  longitude: number;
  /** @format double */
  latitude: number;
  /** 权属单位枚举中文描述 */
  _orgId: string;
  /** 所属区域枚举中文描述 */
  _districtId: string;
  /** 风险要素等级枚举中文描述 */
  _level: string;
  /** 风险要素状态枚举中文描述 */
  _state: string;
  /** 隐患来源枚举中文描述 */
  _dangerSource: string;
}

export interface ResultListTreeVo {
  code: string;
  data: TreeVo[];
  message: string;
  success: boolean;
}

export interface TreeVo {
  id: string;
  label: string;
  children: TreeVo[];
}

export interface MessageContent {
  /** @format int64 */
  id: number;
  bizId: string;
  title: string;
  /** @format date-time */
  timestamp: string;
  type: string;
  content: Record<string, any>;
  properties: Record<string, any>;
  read: boolean;
}

export interface PageResultListMessageContent {
  code: string;
  data: MessageContent[];
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface ResultMapStringListMessageContent {
  code: string;
  data: Record<string, any>;
  message: string;
  success: boolean;
}

export interface DictionaryItem {
  pid: string;
  id: string;
  label: string;
  value: string;
  /** @format int32 */
  order: number;
  desc: string;
  hasChildren: boolean;
  notes1: string;
  notes2: string;
  systemFlag: string;
  text: string;
}

export interface ResultListDictionaryItem {
  code: string;
  data: DictionaryItem[];
  message: string;
  success: boolean;
}

/** 隐患统计视图请求 */
export interface RiskStatisticsQuery {
  /** 是否根据所属企业汇总 */
  isGroupByOrg: boolean;
  /** 隐患第一级类型 */
  subjectType: string[];
  /** 隐患级别 */
  level: string[];
  /** 日期类型 */
  dateType: string;
  /** 日期详情 */
  dateDetail: string;
  /** 所属组织机构id */
  orgId: string[];
  /** 行政区划id */
  districtId: string[];
  /** 所属组织机构id枚举中文描述 */
  _orgId: string;
  /** 行政区划id枚举中文描述 */
  _districtId: string;
}

export interface ResultListRiskStatisticsVO {
  code: string;
  data: RiskStatisticsVO[];
  message: string;
  success: boolean;
}

/** 隐患统计视图返回 */
export interface RiskStatisticsVO {
  /** 隐患第一级类型 */
  subjectType: string;
  /** 所属组织机构 */
  orgId: string;
  /** 风险要素等级 */
  level: RiskStatisticsVoLevel;
  /** 风险要素状态 */
  state: RiskStatisticsVoState;
  /** 隐患来源 */
  dangerSource: RiskStatisticsVoDangerSource;
  /** 日期详情 */
  dateDetail: string;
  /** @format int64 */
  ctotal: number;
  /** 所属组织机构枚举中文描述 */
  _orgId: string;
  /** 风险要素等级枚举中文描述 */
  _level: string;
  /** 风险要素状态枚举中文描述 */
  _state: string;
  /** 隐患来源枚举中文描述 */
  _dangerSource: string;
}

/** 组织机构各维度隐患统计 */
export interface OrgHidangerTypeSummaryDTO {
  /**
   * 总数
   * @format int32
   */
  total: number;
  /**
   * 待整改
   * @format int32
   */
  waitHandle: number;
  /**
   * 待消除
   * @format int32
   */
  waitAudit: number;
  /**
   * 重大隐患个数
   * @format int32
   */
  zd: number;
  /**
   * 督办个数
   * @format int32
   */
  db: number;
  /**
   * 企业上报个数
   * @format int32
   */
  org: number;
  /**
   * 政府检查个数
   * @format int32
   */
  gov: number;
  /**
   * 系统辨识个数
   * @format int32
   */
  sys: number;
  /** 企业上报个数枚举中文描述 */
  _org: string;
}

export interface ResultOrgHidangerTypeSummaryDTO {
  code: string;
  /** 组织机构各维度隐患统计 */
  data: OrgHidangerTypeSummaryDTO;
  message: string;
  success: boolean;
}

export interface HidangerOrgPageQuery {
  /** @format int32 */
  page: number;
  /** @format int32 */
  size: number;
  order: string;
  originalOrder: string;
  orgId: string;
  districtId: string;
  keyword: string;
  /** @uniqueItems true */
  selectIds: object[];
  paging: boolean;
  /** 检查计划编号.小程序创建隐患整改单时专用.其他请勿使用 */
  planCode: string;
  /** 隐患主体 */
  subjectType: string;
  /** 风险要素类别 */
  dangerType: string;
  /** 风险要素子类别 */
  dangerSubType: string;
  /** 隐患级别 */
  level: HidangerOrgPageQueryLevel[];
  /** 隐患状态 */
  state: HidangerOrgPageQueryState[];
  /** 隐患来源 */
  dangerSource: HidangerOrgPageQueryDangerSource[];
  /** 是否督办 */
  superviseState: boolean;
  /** 是否同步至省平台 */
  reportState: boolean;
  /**
   * 隐患检查日期-开始
   * @format date
   */
  startTime: string;
  /**
   * 隐患检查日期-结束
   * @format date
   */
  endTime: string;
  dangerTypeStr: string;
  subjectTypeStr: string;
  queryOrder: string;
  dangerSubTypeStr: string;
  districtIdAsList: string[];
  /** @uniqueItems true */
  selectIdsAsString: string[];
  /** @uniqueItems true */
  selectIdsAsLong: number[];
  /** @uniqueItems true */
  districtIdAsSet: string[];
  /** undefined枚举中文描述 */
  _orgId: string;
  /** undefined枚举中文描述 */
  _districtId: string;
}

/** 企业隐患管理-分页 */
export interface HidangerOrgPageVO {
  /** 数据主键 */
  uid: string;
  /** 隐患主体类型 */
  subjectType: HidangerOrgPageVoSubjectType;
  /** 隐患类别 */
  dangerType: string;
  /** 风险要素子类型 */
  dangerSubtype: string;
  /** 风险要素等级 */
  level: HidangerOrgPageVoLevel;
  /** 隐患描述 */
  remark: string;
  /** 风险要素状态 */
  state: HidangerOrgPageVoState;
  /** 隐患来源 */
  dangerSource: HidangerOrgPageVoDangerSource;
  /**
   * 排查日期
   * @format date
   */
  checkDate: string;
  /**
   * 整改完成日期
   * @format date
   */
  completionDate: string;
  /** 隐患督办状态 */
  superviseState: string;
  /** 省平台同步状态 */
  reportState: string;
  /** 排查人 */
  checkBy: string;
  /** @format date-time */
  pushTime: string;
  /** 行政区划 */
  districtId: string;
  /** 组织机构 */
  orgId: string;
  /** 地址 */
  address: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 隐患时长 */
  dangerDuration: string;
  /** 检查计划编号 */
  planCode: string;
  /** 整改单编号 */
  orderCode: string;
  ago: string;
  /** 隐患主体类型枚举中文描述 */
  _subjectType: string;
  /** 风险要素等级枚举中文描述 */
  _level: string;
  /** 风险要素状态枚举中文描述 */
  _state: string;
  /** 隐患来源枚举中文描述 */
  _dangerSource: string;
  /** 行政区划枚举中文描述 */
  _districtId: string;
  /** 组织机构枚举中文描述 */
  _orgId: string;
}

export interface PageResultListHidangerOrgPageVO {
  code: string;
  data: HidangerOrgPageVO[];
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 企业隐患管理-分页 */
export interface CheckPlanRelDangerVO {
  /** 数据主键 */
  uid: string;
  /** 隐患主体类型 */
  subjectType: string;
  /** 隐患类别 */
  dangerType: string;
  /** 风险要素子类型 */
  dangerSubtype: string;
  /** 风险要素等级 */
  level: CheckPlanRelDangerVoLevel;
  /** 隐患描述 */
  remark: string;
  /** 风险要素状态 */
  state: CheckPlanRelDangerVoState;
  /** 隐患来源 */
  dangerSource: CheckPlanRelDangerVoDangerSource;
  /**
   * 排查日期
   * @format date
   */
  checkDate: string;
  /** 排查人 */
  checkBy: string;
  /** 地址 */
  address: string;
  /**
   * 经度
   * @format double
   */
  longitude: number;
  /**
   * 纬度
   * @format double
   */
  latitude: number;
  /** 行政区划 */
  districtId: string;
  /** 组织机构 */
  orgId: string;
  /** 风险要素等级枚举中文描述 */
  _level: string;
  /** 风险要素状态枚举中文描述 */
  _state: string;
  /** 隐患来源枚举中文描述 */
  _dangerSource: string;
  /** 行政区划枚举中文描述 */
  _districtId: string;
  /** 组织机构枚举中文描述 */
  _orgId: string;
}

export interface ResultListCheckPlanRelDangerVO {
  code: string;
  data: CheckPlanRelDangerVO[];
  message: string;
  success: boolean;
}

export interface HidangerCheckPlanDetailVO {
  /** 安全检查计划UID */
  uid: string;
  /** 安全检查计划类型 */
  type: HidangerCheckPlanDetailVoType;
  /** 标题 */
  title: string;
  /** 安全检查编号 */
  code: string;
  /**
   * 计划时间开始
   * @format date
   */
  startDate: string;
  /**
   * 计划时间结束
   * @format date
   */
  endDate: string;
  /** 目标检查企业 */
  targetOrgId: string;
  /** 目标检查企业负责人 */
  targetOrgOwner: string;
  /** 目标检查企业联系方式 */
  targetOrgPhone: string;
  /** 目标检查企业地址 */
  targetOrgAddr: string;
  /** 主管部门 */
  masterOrgId: string;
  /** 检查人员 */
  checkers: string;
  /** 安全检查计划状态 */
  handleState: HidangerCheckPlanDetailVoHandleState;
  /** 整改单列表 */
  handleOrders: HidangerHandleOrderDTO[];
  /** 安全检查计划类型枚举中文描述 */
  _type: string;
  /** 安全检查计划状态枚举中文描述 */
  _handleState: string;
}

/** 整改单列表 */
export interface HidangerHandleOrderDTO {
  /** 主键 */
  uid: string;
  /** 安全检查计划编号 */
  planCode: string;
  /** 整改单编号 */
  orderCode: string;
  /**
   * 整改单日期
   * @format date
   */
  orderDate: string;
  /**
   * 整改单完成期限
   * @format date
   */
  deadline: string;
  /** 主管单位 */
  masterOrgId: string;
  /** 目标企业 */
  targetOrgId: string;
  /** 目标检查企业负责人 */
  targetOrgOwner: string;
  /** 目标检查企业联系方式 */
  targetOrgPhone: string;
  /** 目标检查企业地址 */
  targetOrgAddr: string;
  /** 专家意见 */
  expertOpinion: string;
  /** 企业负责人签名 */
  targetOrgMasterSign: string[];
  /** 专家签名 */
  expertSign: string[];
}

export interface ResultHidangerCheckPlanDetailVO {
  code: string;
  data: HidangerCheckPlanDetailVO;
  message: string;
  success: boolean;
}

export interface HiDangerCheckPlanSummaryVO {
  list: HiDangerPlanSummaryItemDTO[];
}

export interface HiDangerPlanSummaryItemDTO {
  /** 安全检查计划类型 */
  type: HiDangerPlanSummaryItemDtoType;
  /** @format int32 */
  count: number;
  /** 安全检查计划类型枚举中文描述 */
  _type: string;
}

export interface ResultHiDangerCheckPlanSummaryVO {
  code: string;
  data: HiDangerCheckPlanSummaryVO;
  message: string;
  success: boolean;
}

export interface HiDangerCheckPlanSelectionsDTO {
  /** 安全检查计划编号 */
  value: string;
  /** 安全检查计划ID */
  label: string;
}

export interface ResultListHiDangerCheckPlanSelectionsDTO {
  code: string;
  data: HiDangerCheckPlanSelectionsDTO[];
  message: string;
  success: boolean;
}

/** 安全检查分页查询 */
export interface HiDangerCheckPageQuery {
  /** @format int32 */
  page: number;
  /** @format int32 */
  size: number;
  order: string;
  originalOrder: string;
  orgId: string;
  districtId: string;
  keyword: string;
  /** @uniqueItems true */
  selectIds: object[];
  paging: boolean;
  /** 安全检查计划类型 */
  type: HiDangerCheckPageQueryType;
  /** 正文 */
  title: string;
  /**
   * 开始日期
   * @format date
   */
  startTime: string;
  /**
   * 结束日期
   * @format date
   */
  endTime: string;
  /** @uniqueItems true */
  orgIds: string[];
  queryOrder: string;
  districtIdAsList: string[];
  /** @uniqueItems true */
  selectIdsAsString: string[];
  /** @uniqueItems true */
  selectIdsAsLong: number[];
  /** @uniqueItems true */
  districtIdAsSet: string[];
  /** undefined枚举中文描述 */
  _orgId: string;
  /** undefined枚举中文描述 */
  _districtId: string;
  /** 安全检查计划类型枚举中文描述 */
  _type: string;
}

/** 安全检查-分页VO */
export interface HiDangerCheckPageVO {
  /** 数据主键 */
  uid: string;
  /** 安全检查计划类型 */
  type: HiDangerCheckPageVoType;
  /** 检查编号 */
  planCode: string;
  /** 检查标题 */
  title: string;
  /**
   * 开始日期
   * @format date
   */
  startDate: string;
  /**
   * 结束日期
   * @format date
   */
  endDate: string;
  /** 抽查企业 */
  masterOrgId: string;
  /** 安全检查计划状态 */
  handleState: HiDangerCheckPageVoHandleState;
  /** 检查小组 */
  checkers: string;
  /** 计划创建人 */
  planCreator: string;
  /** 安全检查计划类型枚举中文描述 */
  _type: string;
  /** 安全检查计划状态枚举中文描述 */
  _handleState: string;
}

export interface PageResultListHiDangerCheckPageVO {
  code: string;
  data: HiDangerCheckPageVO[];
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface HidangerGisVO {
  /** 数据主键 */
  uid: string;
  /** 隐患主体类型 */
  subjectType: string;
  /** 隐患类别 */
  dangerType: string;
  /** 风险要素子类型 */
  dangerSubtype: string;
  /** 风险要素等级 */
  level: HidangerGisVoLevel;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 风险要素等级枚举中文描述 */
  _level: string;
}

export interface ResultListHidangerGisVO {
  code: string;
  data: HidangerGisVO[];
  message: string;
  success: boolean;
}

export interface HidangerFlowDTO {
  /** 标题 */
  title: string;
  /** 处置流程阶段 */
  stage: HidangerFlowDtoStage;
  /** 阶段主键 */
  stageId: string;
  /**
   * 阶段时间
   * @format date-time
   */
  stageTime: string;
  /** 操作人 */
  operator: string;
  /** 操作人所属组织id */
  operatorOrgId: string;
  /** 操作人所属组织名称 */
  operatorOrgName: string;
  /** 图片id列表 */
  picIds: FileObj[];
  /** 附件id列表 */
  fileIds: FileObj[];
  /** 评论列表 */
  commentList: LeaderCommentDTO[];
  content: object;
  /** 处置流程阶段枚举中文描述 */
  _stage: string;
}

export interface HidnagerFlowVO {
  dangerId: string;
  /** 隐患来源 */
  dangerSource: HidnagerFlowVoDangerSource;
  /** 风险要素等级 */
  level: HidnagerFlowVoLevel;
  /** 风险要素状态 */
  state: HidnagerFlowVoState;
  flow: HidangerFlowDTO[];
  /** 隐患来源枚举中文描述 */
  _dangerSource: string;
  /** 风险要素等级枚举中文描述 */
  _level: string;
  /** 风险要素状态枚举中文描述 */
  _state: string;
}

/** 评论列表 */
export interface LeaderCommentDTO {
  uid: string;
  fid: string;
  /** @format date-time */
  commentTime: string;
  leaderName: string;
  leaderOrgName: string;
  leaderComment: string;
  children: LeaderCommentDTO[];
}

export interface ResultHidnagerFlowVO {
  code: string;
  data: HidnagerFlowVO;
  message: string;
  success: boolean;
}

/** 风险要素-汇总vo */
export interface HidangerFactorsSummaryVO {
  /** 汇总统计列表 */
  list: SummaryItem[];
}

export interface ResultHidangerFactorsSummaryVO {
  code: string;
  /** 风险要素-汇总vo */
  data: HidangerFactorsSummaryVO;
  message: string;
  success: boolean;
}

/** 汇总统计列表 */
export interface SummaryItem {
  /**
   * 数量
   * @format int32
   */
  count: number;
  /** 长度,单位KM */
  length: number;
  /** 类型 */
  type: string;
  /** 类型编码 */
  code: string;
  params: Record<string, any>;
}

export interface HidangerFactorsSummaryPageQuery {
  /** @format int32 */
  page: number;
  /** @format int32 */
  size: number;
  order: string;
  originalOrder: string;
  orgId: string;
  districtId: string;
  keyword: string;
  /** @uniqueItems true */
  selectIds: object[];
  paging: boolean;
  /** 燃气管网风险要素类型 */
  dangerType: HidangerFactorsSummaryPageQueryDangerType;
  /** 风险要素子类型 */
  dangerSubType: HidangerFactorsSummaryPageQueryDangerSubType;
  /** 管道材质 */
  material: HidangerFactorsSummaryPageQueryMaterial;
  /**
   * 管道服役年限,左闭右开
   * @uniqueItems true
   * @example "0-10,10-15,15-20,20-25,25-30,30-999"
   */
  years: string[];
  /** 压力级别 */
  pressureLevels: HidangerFactorsSummaryPageQueryPressureLevels[];
  dangerTypeStr: string;
  materialStr: string;
  dangerSubTypeStr: string;
  pressureLevelCodes: string[];
  districtIdAsList: string[];
  /** @uniqueItems true */
  selectIdsAsString: string[];
  /** @uniqueItems true */
  selectIdsAsLong: number[];
  /** @uniqueItems true */
  districtIdAsSet: string[];
  /** undefined枚举中文描述 */
  _orgId: string;
  /** undefined枚举中文描述 */
  _districtId: string;
  /** 燃气管网风险要素类型枚举中文描述 */
  _dangerType: string;
  /** 风险要素子类型枚举中文描述 */
  _dangerSubType: string;
  /** 管道材质枚举中文描述 */
  _material: string;
}

/** 风险要素-分页 */
export interface HidangerFactorsSummaryPageVO {
  /** 数据主键 */
  uid: string;
  /** 管道id */
  pipelineId: string;
  /** 行政区划 */
  districtId: string;
  /** 组织机构 */
  orgId: string;
  /** 地址 */
  address: string;
  /** 风险要素等级 */
  level: HidangerFactorsSummaryPageVoLevel;
  /** 燃气管网风险要素类型 */
  dangerType: HidangerFactorsSummaryPageVoDangerType;
  /** 风险要素子类型 */
  dangerSubtype: HidangerFactorsSummaryPageVoDangerSubtype;
  /** 管道材质 */
  material: HidangerFactorsSummaryPageVoMaterial;
  /**
   * 管道服役年限
   * @format int32
   */
  years: number;
  /** 压力级别 */
  pressureLevel: HidangerFactorsSummaryPageVoPressureLevel;
  /**
   * 管道长度
   * @format double
   */
  length: number;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 实际值 */
  realValue: string;
  /** 标准值 */
  standardValue: string;
  /** 行政区划枚举中文描述 */
  _districtId: string;
  /** 组织机构枚举中文描述 */
  _orgId: string;
  /** 风险要素等级枚举中文描述 */
  _level: string;
  /** 燃气管网风险要素类型枚举中文描述 */
  _dangerType: string;
  /** 风险要素子类型枚举中文描述 */
  _dangerSubtype: string;
  /** 管道材质枚举中文描述 */
  _material: string;
  /** 压力级别枚举中文描述 */
  _pressureLevel: string;
}

export interface PageResultListHidangerFactorsSummaryPageVO {
  code: string;
  data: HidangerFactorsSummaryPageVO[];
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 维度描述 */
export interface DimensionDetail {
  /**
   * 维度得分
   * @format int32
   */
  score: number;
  /** 维度描述 */
  desc: string;
  /** 维度级别 */
  level: string;
}

/** 关联的管线 */
export interface GisRelPipInfo {
  /** 关联管线ID */
  pipeId: string;
  /** 关联管线GEOM */
  geom: string;
  label: string;
  value: string;
}

/** 指标项 */
export interface HazardNormsDTO {
  /** 指标编码 */
  code: string;
  /** 指标名称 */
  name: string;
  /** 指标分类 */
  category: string;
  /** GIS异常指标弹窗描述 */
  gisException: string;
  /** 规范要求 */
  requirements: string;
  /**
   * 影响纬度
   * @uniqueItems true
   */
  dimension: string[];
  /** 评估依据 */
  specifications: Specifications[];
  /**
   * 管控措施编码列表
   * @uniqueItems true
   */
  measures: string[];
  /** 实际数据 */
  readData: string;
  /** 关联的管线 */
  relPipes: GisRelPipInfo[];
  /**
   * 指标得分
   * @format int32
   */
  score: number;
  /** 评估结论 */
  evalResult: string;
}

/** 危险源列表 */
export interface ObjectExtDto {
  id: string;
  name: string;
  geom: string;
  address: string;
  code: string;
  /** @format double */
  distance: number;
  /** @format double */
  pathLen: number;
}

/** 关联管线详情 */
export interface PipelineInfo {
  /** 管线权属单位 */
  orgId: string;
  /** 管线编码 */
  pipelineId: string;
  /** 管线类型 */
  pipelineType: string;
  /** 数据来源 */
  dataSource: string;
  /** 材质 */
  pmaterial: PipelineInfoPmaterial;
  /** 管段所在位置 */
  address: string;
  /** 管道压力 */
  volclass: PipelineInfoVolclass;
  /** 管径 */
  outDS: string;
  /** 管道长度 */
  pipelen: number;
  /** 建设年代 */
  mdate: string;
  /**
   * 物探时间
   * @format date
   */
  sdate: string;
  edepth: number;
  sdepth: number;
  /** @format date */
  ddate: string;
  /** 管线权属单位枚举中文描述 */
  _orgId: string;
  /** 材质枚举中文描述 */
  _pmaterial: string;
  /** 管道压力枚举中文描述 */
  _volclass: string;
}

export interface ResultRiskFactorDetailVO {
  code: string;
  /** 风险隐患详情 */
  data: RiskFactorDetailVO;
  message: string;
  success: boolean;
}

/** 隐患基础信息 */
export interface RiskDetailInfo {
  /** 标题 */
  title: string;
  /** 风险要素状态 */
  state: RiskDetailInfoState;
  是否挂牌督办: string;
  /** 风险隐患uid */
  uid: string;
  /** 风险要素等级 */
  level: RiskDetailInfoLevel;
  /** 风险要素子类型 */
  subType: RiskDetailInfoSubType;
  /**
   * 辨识时间
   * @format date
   */
  checkDate: string;
  /** 组织机构 */
  orgId: string;
  /** 风险隐患地址 */
  address: string;
  /** 动态字段 */
  dynamicInfo: Record<string, any>;
  /** 风险要素状态枚举中文描述 */
  _state: string;
  /** 风险要素等级枚举中文描述 */
  _level: string;
  /** 风险要素子类型枚举中文描述 */
  _subType: string;
  /** 组织机构枚举中文描述 */
  _orgId: string;
}

/** 风险隐患详情 */
export interface RiskFactorDetailVO {
  /** 隐患基础信息 */
  riskInfo: RiskDetailInfo;
  /** 关联管线详情 */
  pipeInfo: PipelineInfo;
  /** 关联管线详情 */
  otherPipeInfo: PipelineInfo;
  /** 评估依据 */
  specifications: Specifications[];
  /** 风险评估矩阵 */
  riskTable: number[][];
  /** 维度描述 */
  leak: DimensionDetail;
  /** 维度描述 */
  severity: DimensionDetail;
  /** 维度描述 */
  risk: DimensionDetail;
  /** 后果影响因素 */
  norms: Record<string, any>;
  /** 当前管控措施 */
  currentMeasures: string;
  /** 管线关联的设备编号 */
  relDeviceCodes: string[];
  /** 管控建议列表 */
  measures: Record<string, any>;
  /** 周边环境(200米) */
  aroundEnv: VicinalinfoDto;
}

/** 评估依据详情 */
export interface Specifications {
  /** 文件名称 */
  title: string;
  /** 文件id */
  fileId: string;
  /** 引用章节内容 */
  text: string;
  /** 引用图片 */
  img: string;
}

/** 周边环境(200米) */
export interface VicinalinfoDto {
  /** 防护目标列表 */
  protagList: ObjectExtDto[];
  /** 危险源列表 */
  dangerList: ObjectExtDto[];
  /** 缓冲面 */
  geom: string;
}

export interface ResultObject {
  code: string;
  data: object;
  message: string;
  success: boolean;
}

export interface ResultListDistrictVO {
  code: string;
  data: DistrictVO[];
  message: string;
  success: boolean;
}

export interface ResultMapStringListDictionaryItem {
  code: string;
  data: Record<string, any>;
  message: string;
  success: boolean;
}

export interface AroundRiskQuery {
  /** 隐患类型: PIPELINE,THIRD_BUILD */
  riskType: string;
  /**
   * 经度
   * @format float
   */
  longitude: number;
  /**
   * 纬度
   * @format float
   */
  latitude: number;
  /**
   * 查询半径
   * @format float
   */
  distance: number;
}

export interface AroundRiskDTO {
  /** 标题 */
  title: string;
  /** 地址 */
  address: string;
  /**
   * 距离
   * @format int32
   */
  distance: number;
}

export interface ResultListAroundRiskDTO {
  code: string;
  data: AroundRiskDTO[];
  message: string;
  success: boolean;
}

/** 第三方施工状态 */
export type ThirdBuildUpdateDtoBuildState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

/** 风险要素等级 */
export type HidangerCreateDtoLevel = "ZD" | "JD" | "YB";

/** 风险要素状态 */
export type HidangerCreateDtoState = "DRAFT" | "WAIT_HANDLE" | "WAIT_AUDIT" | "HANDLED";

/** 隐患来源 */
export type HidangerCreateDtoDangerSource = "SYSTEM" | "GOV" | "COMPANY";

/** 是否和隐患描述一致 */
export type OrgHidangerHandleDtoSameWithRemark = "SAME" | "NOT_SAME" | "NOT_SURE";

/** 整改进度 */
export type OrgHidangerHandleDtoHandleState =
  | "WAIT_DISPATCH"
  | "DISPATCHED"
  | "HANDLING"
  | "HANDLED"
  | "CLOSED"
  | "REJECTED";

/** 风险要素审核结果 */
export type Risk2DangerDtoAuditResult = "PASS" | "NOT_PASS";

/** 第三方施工状态 */
export type ThirdBuildInfoCreateDtoBuildState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

/** 第三方施工状态 */
export type ThirdBuildImportDtoBuildState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

/** 风险要素状态 */
export type ProjectRiskDangerVoState = "DRAFT" | "WAIT_HANDLE" | "WAIT_AUDIT" | "HANDLED";

/** 风险要素等级 */
export type ProjectRiskDangerVoLevel = "ZD" | "JD" | "YB";

/** 隐患来源 */
export type HidangerImportDtoSource = "SYSTEM" | "GOV" | "COMPANY";

/** 处置流程阶段 */
export type LeaderCommentCreateDtoStage =
  | "PUSH"
  | "DISPATCH"
  | "RECEIVE"
  | "HANDLE"
  | "STATEMENT"
  | "AUDIT"
  | "COMMENT";

/** 安全检查计划类型 */
export type HiDangerCheckPlanCreateDtoType =
  | "CNG_STATION"
  | "NG_TRANSPORT"
  | "LNG_STATION"
  | "LPG_STATION"
  | "ORG_SAFE_MNG"
  | "LG_TRANSPORT"
  | "NG_STATION"
  | "INDOOR_NG";

/** 施工类型 */
export type ThirdBuildDetailVoBuildType = "DTJS" | "DLGZ";

/** 交底状态 */
export type ThirdBuildDetailVoReportState = "REPORTED" | "UNREPORTED";

/** 看护状态 */
export type ThirdBuildDetailVoGuardState = "GUARDED" | "UNGUARDED";

/** 第三方施工状态 */
export type ThirdBuildDetailVoBuildState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

/** 第三方施工状态 */
export type ThirdBuildPageQueryBuildStates = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

/** 交底状态 */
export type ThirdBuildPageQueryReportStates = "REPORTED" | "UNREPORTED";

/** 看护状态 */
export type ThirdBuildPageQueryGuardStates = "GUARDED" | "UNGUARDED";

/** 施工类型 */
export type ThirdBuildPageVoBuildType = "string" | "DTJS" | "DLGZ";

/** 第三方施工状态 */
export type ThirdBuildPageVoBuildState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

/** 交底状态 */
export type ThirdBuildPageVoReportState = "REPORTED" | "UNREPORTED";

/** 看护状态 */
export type ThirdBuildPageVoGuardState = "GUARDED" | "UNGUARDED";

/** 预警级别 */
export type WarnPageRequestWarnLevel = "YJYJ" | "EJYJ" | "SJYJ";

/** 预警场所 */
export type WarnPageRequestObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH";

/** 预警状态 */
export type WarnPageRequestWarnState = "yjzt001" | "yjzt002" | "yjzt010";

/** 监测场所 */
export type WarnPageVoObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH";

/** 预警级别 */
export type WarnPageVoWarnLevel = "yjjb001" | "yjjb002" | "yjjb003";

/** 预警状态 */
export type WarnPageVoState = "yjzt001" | "yjzt002" | "yjzt010";

/** 数据来源 */
export type WarnPageVoAlarmSource = "LIFELINE" | "GAS_ENTERPRISES" | "AIoT";

/** 预警级别 */
export type DisposeDetailWarnLevel = "yjjb001" | "yjjb002" | "yjjb003";

/** 监测类型 */
export type StatisticalRequestObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH";

/** 报警状态 */
export type StatisticalRequestAlarmState = "bjzt001" | "bjzt003" | "bjzt004";

/** 预警状态 */
export type StatisticalRequestWarnState = "yjzt001" | "yjzt002" | "yjzt010";

/** 监测场所 */
export type MonitorRequestObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH";

/** 监测状态 */
export type MonitorRequestEqptState = "equipRunStatus1" | "equipRunStatus2" | "equipRunStatus3";

/** 监测场所 */
export type MonitorPageVoObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH";

/** 监测状态 */
export type MonitorPageVoEqptState = "equipRunStatus1" | "equipRunStatus2" | "equipRunStatus3";

/** 数据来源 */
export type MonitorPageVoDataSource = "LIFELINE" | "GAS_ENTERPRISES" | "AIoT";

/** 监测场所 */
export type MonitorSummaryVoObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH";

/**  危险源类型 */
export type DangerJudgeVoType =
  | "wxylx001"
  | "wxylx002"
  | "wxylx003"
  | "wxylx004"
  | "wxylx005"
  | "wxylx006"
  | "wxylx007"
  | "wxylx008"
  | "wxylx009"
  | "wxylx010"
  | "wxylx011"
  | "wxylx012"
  | "wxylx013"
  | "wxylx014"
  | "wxylx015"
  | "wxylx016";

/** 防护目标类型 */
export type ProtagJudgeVoType =
  | "fhmblx001"
  | "fhmblx002"
  | "fhmblx003"
  | "fhmblx004"
  | "fhmblx005"
  | "fhmblx006"
  | "fhmblx007"
  | "fhmblx008"
  | "fhmblx009"
  | "fhmblx010"
  | "fhmblx011"
  | "fhmblx012"
  | "fhmblx013"
  | "fhmblx014"
  | "fhmblx015"
  | "fhmblx016"
  | "fhmblx017"
  | "fhmblx018"
  | "fhmblx019"
  | "fhmblx020"
  | "fhmblx021"
  | "fhmblx022"
  | "fhmblx023"
  | "fhmblx024"
  | "fhmblx025"
  | "fhmblx026"
  | "fhmblx027"
  | "fhmblx028"
  | "fhmblx029"
  | "fhmblx030"
  | "fhmblx031"
  | "fhmblx032"
  | "fhmblx033"
  | "fhmblx034"
  | "fhmblx035"
  | "fhmblx036"
  | "fhmblx037"
  | "fhmblx038"
  | "fhmblx039"
  | "fhmblx040";

/** 监测类型 */
export type AlarmPageRequestObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH";

/** 报警状态 */
export type AlarmPageRequestAlarmState = "bjzt001" | "bjzt003" | "bjzt004";

/** 监测场所 */
export type AlarmPageVoObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH";

/** 报警状态 */
export type AlarmPageVoAlarmState = "bjzt001" | "bjzt003" | "bjzt004";

/** 数据来源 */
export type AlarmPageVoAlarmSource = "LIFELINE" | "GAS_ENTERPRISES" | "AIoT";

/** 风险要素等级 */
export type RiskExportVoLevel = "ZD" | "JD" | "YB";

/** 风险要素状态 */
export type RiskExportVoState = "DRAFT" | "WAIT_HANDLE" | "WAIT_AUDIT" | "HANDLED";

/** 隐患来源 */
export type RiskExportVoDangerSource = "SYSTEM" | "GOV" | "COMPANY";

/** 风险要素等级 */
export type RiskStatisticsVoLevel = "ZD" | "JD" | "YB";

/** 风险要素状态 */
export type RiskStatisticsVoState = "DRAFT" | "WAIT_HANDLE" | "WAIT_AUDIT" | "HANDLED";

/** 隐患来源 */
export type RiskStatisticsVoDangerSource = "SYSTEM" | "GOV" | "COMPANY";

/** 风险要素等级 */
export type HidangerOrgPageQueryLevel = "ZD" | "JD" | "YB";

/** 风险要素状态 */
export type HidangerOrgPageQueryState = "DRAFT" | "WAIT_HANDLE" | "WAIT_AUDIT" | "HANDLED";

/** 隐患来源 */
export type HidangerOrgPageQueryDangerSource = "SYSTEM" | "GOV" | "COMPANY";

/** 隐患主体类型 */
export type HidangerOrgPageVoSubjectType = "PIPELINE";

/** 风险要素等级 */
export type HidangerOrgPageVoLevel = "ZD" | "JD" | "YB";

/** 风险要素状态 */
export type HidangerOrgPageVoState = "DRAFT" | "WAIT_HANDLE" | "WAIT_AUDIT" | "HANDLED";

/** 隐患来源 */
export type HidangerOrgPageVoDangerSource = "SYSTEM" | "GOV" | "COMPANY";

/** 风险要素等级 */
export type CheckPlanRelDangerVoLevel = "ZD" | "JD" | "YB";

/** 风险要素状态 */
export type CheckPlanRelDangerVoState = "DRAFT" | "WAIT_HANDLE" | "WAIT_AUDIT" | "HANDLED";

/** 隐患来源 */
export type CheckPlanRelDangerVoDangerSource = "SYSTEM" | "GOV" | "COMPANY";

/** 安全检查计划类型 */
export type HidangerCheckPlanDetailVoType =
  | "CNG_STATION"
  | "NG_TRANSPORT"
  | "LNG_STATION"
  | "LPG_STATION"
  | "ORG_SAFE_MNG"
  | "LG_TRANSPORT"
  | "NG_STATION"
  | "INDOOR_NG";

/** 安全检查计划状态 */
export type HidangerCheckPlanDetailVoHandleState = "UNCOMPLETED" | "COMPLETED";

/** 安全检查计划类型 */
export type HiDangerPlanSummaryItemDtoType =
  | "CNG_STATION"
  | "NG_TRANSPORT"
  | "LNG_STATION"
  | "LPG_STATION"
  | "ORG_SAFE_MNG"
  | "LG_TRANSPORT"
  | "NG_STATION"
  | "INDOOR_NG";

/** 安全检查计划类型 */
export type HiDangerCheckPageQueryType =
  | "CNG_STATION"
  | "NG_TRANSPORT"
  | "LNG_STATION"
  | "LPG_STATION"
  | "ORG_SAFE_MNG"
  | "LG_TRANSPORT"
  | "NG_STATION"
  | "INDOOR_NG";

/** 安全检查计划类型 */
export type HiDangerCheckPageVoType =
  | "CNG_STATION"
  | "NG_TRANSPORT"
  | "LNG_STATION"
  | "LPG_STATION"
  | "ORG_SAFE_MNG"
  | "LG_TRANSPORT"
  | "NG_STATION"
  | "INDOOR_NG";

/** 安全检查计划状态 */
export type HiDangerCheckPageVoHandleState = "UNCOMPLETED" | "COMPLETED";

/** 风险要素等级 */
export type HidangerGisVoLevel = "ZD" | "JD" | "YB";

/** 处置流程阶段 */
export type HidangerFlowDtoStage = "PUSH" | "DISPATCH" | "RECEIVE" | "HANDLE" | "STATEMENT" | "AUDIT" | "COMMENT";

/** 隐患来源 */
export type HidnagerFlowVoDangerSource = "SYSTEM" | "GOV" | "COMPANY";

/** 风险要素等级 */
export type HidnagerFlowVoLevel = "ZD" | "JD" | "YB";

/** 风险要素状态 */
export type HidnagerFlowVoState = "DRAFT" | "WAIT_HANDLE" | "WAIT_AUDIT" | "HANDLED";

/** 燃气管网风险要素类型 */
export type HidangerFactorsSummaryPageQueryDangerType =
  | "GW_SG"
  | "GW_MSBZ"
  | "GW_CY"
  | "GW_ZY"
  | "GW_JJBZ"
  | "GW_LH"
  | "OTHER";

/** 风险要素子类型 */
export type HidangerFactorsSummaryPageQueryDangerSubType =
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

/** 管道材质 */
export type HidangerFactorsSummaryPageQueryMaterial =
  | "gwcz1"
  | "gwcz2"
  | "gwcz3"
  | "gwcz4"
  | "gwcz5"
  | "gwcz6"
  | "gwcz7"
  | "gwcz8"
  | "gwcz9"
  | "gwcz10"
  | "gwcz11"
  | "gwcz12"
  | "gwcz13"
  | "gwcz14"
  | "gwcz15"
  | "gwcz16"
  | "gwcz17"
  | "gwcz18"
  | "gwcz19"
  | "gwcz20"
  | "gwcz21"
  | "gwcz22"
  | "gwcz23"
  | "gwcz24"
  | "gwcz25"
  | "gwcz26"
  | "gwcz27"
  | "gwcz28"
  | "gwcz29"
  | "gwcz30"
  | "gwcz31"
  | "gwcz32"
  | "gwcz33"
  | "gwcz34"
  | "gwcz35"
  | "gwcz36"
  | "gwcz37"
  | "gwcz38"
  | "gwcz39"
  | "gwcz40"
  | "gwcz41"
  | "gwcz42"
  | "gwcz43"
  | "gwcz44"
  | "gwcz45"
  | "gwcz46"
  | "gwcz47"
  | "gwcz48"
  | "gwcz49"
  | "gwcz50"
  | "gwcz51"
  | "gwcz52"
  | "gwcz53"
  | "gwcz54"
  | "gwcz55"
  | "gwcz56"
  | "gwcz57"
  | "gwcz58"
  | "gwcz59"
  | "gwcz60"
  | "gwcz61"
  | "gwcz62"
  | "gwcz63"
  | "gwcz64"
  | "gwcz65"
  | "gwcz66"
  | "gwcz67"
  | "gwcz68"
  | "gwcz69"
  | "gwcz70"
  | "gwcz71"
  | "gwcz72"
  | "gwcz73"
  | "gwcz74"
  | "gwcz75"
  | "gwcz76"
  | "gwcz77"
  | "gwcz78"
  | "gwcz79"
  | "gwcz80"
  | "gwcz81"
  | "gwcz82"
  | "gwcz83"
  | "gwcz84"
  | "gwcz85"
  | "gwcz86"
  | "gwcz87"
  | "gwcz88"
  | "gwcz89"
  | "gwcz90"
  | "gwcz91"
  | "gwcz92"
  | "gwcz93"
  | "gwcz94"
  | "gwcz95"
  | "gwcz96"
  | "gwcz97"
  | "gwcz98"
  | "gwcz99"
  | "gwcz100";

/** 压力级别 */
export type HidangerFactorsSummaryPageQueryPressureLevels =
  | "yljb001"
  | "yljb002"
  | "yljb003"
  | "yljb004"
  | "yljb005"
  | "yljb006"
  | "yljb007"
  | "yljb008"
  | "yljb009"
  | "yljb010"
  | "yljb011"
  | "yljb012"
  | "yljb013"
  | "yljb014"
  | "yljb015"
  | "yljb016";

/** 风险要素等级 */
export type HidangerFactorsSummaryPageVoLevel = "ZD" | "JD" | "YB";

/** 燃气管网风险要素类型 */
export type HidangerFactorsSummaryPageVoDangerType =
  | "GW_SG"
  | "GW_MSBZ"
  | "GW_CY"
  | "GW_ZY"
  | "GW_JJBZ"
  | "GW_LH"
  | "OTHER";

/** 风险要素子类型 */
export type HidangerFactorsSummaryPageVoDangerSubtype =
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

/** 管道材质 */
export type HidangerFactorsSummaryPageVoMaterial =
  | "gwcz1"
  | "gwcz2"
  | "gwcz3"
  | "gwcz4"
  | "gwcz5"
  | "gwcz6"
  | "gwcz7"
  | "gwcz8"
  | "gwcz9"
  | "gwcz10"
  | "gwcz11"
  | "gwcz12"
  | "gwcz13"
  | "gwcz14"
  | "gwcz15"
  | "gwcz16"
  | "gwcz17"
  | "gwcz18"
  | "gwcz19"
  | "gwcz20"
  | "gwcz21"
  | "gwcz22"
  | "gwcz23"
  | "gwcz24"
  | "gwcz25"
  | "gwcz26"
  | "gwcz27"
  | "gwcz28"
  | "gwcz29"
  | "gwcz30"
  | "gwcz31"
  | "gwcz32"
  | "gwcz33"
  | "gwcz34"
  | "gwcz35"
  | "gwcz36"
  | "gwcz37"
  | "gwcz38"
  | "gwcz39"
  | "gwcz40"
  | "gwcz41"
  | "gwcz42"
  | "gwcz43"
  | "gwcz44"
  | "gwcz45"
  | "gwcz46"
  | "gwcz47"
  | "gwcz48"
  | "gwcz49"
  | "gwcz50"
  | "gwcz51"
  | "gwcz52"
  | "gwcz53"
  | "gwcz54"
  | "gwcz55"
  | "gwcz56"
  | "gwcz57"
  | "gwcz58"
  | "gwcz59"
  | "gwcz60"
  | "gwcz61"
  | "gwcz62"
  | "gwcz63"
  | "gwcz64"
  | "gwcz65"
  | "gwcz66"
  | "gwcz67"
  | "gwcz68"
  | "gwcz69"
  | "gwcz70"
  | "gwcz71"
  | "gwcz72"
  | "gwcz73"
  | "gwcz74"
  | "gwcz75"
  | "gwcz76"
  | "gwcz77"
  | "gwcz78"
  | "gwcz79"
  | "gwcz80"
  | "gwcz81"
  | "gwcz82"
  | "gwcz83"
  | "gwcz84"
  | "gwcz85"
  | "gwcz86"
  | "gwcz87"
  | "gwcz88"
  | "gwcz89"
  | "gwcz90"
  | "gwcz91"
  | "gwcz92"
  | "gwcz93"
  | "gwcz94"
  | "gwcz95"
  | "gwcz96"
  | "gwcz97"
  | "gwcz98"
  | "gwcz99"
  | "gwcz100";

/** 压力级别 */
export type HidangerFactorsSummaryPageVoPressureLevel =
  | "yljb001"
  | "yljb002"
  | "yljb003"
  | "yljb004"
  | "yljb005"
  | "yljb006"
  | "yljb007"
  | "yljb008"
  | "yljb009"
  | "yljb010"
  | "yljb011"
  | "yljb012"
  | "yljb013"
  | "yljb014"
  | "yljb015"
  | "yljb016";

/** 材质 */
export type PipelineInfoPmaterial =
  | "gwcz1"
  | "gwcz2"
  | "gwcz3"
  | "gwcz4"
  | "gwcz5"
  | "gwcz6"
  | "gwcz7"
  | "gwcz8"
  | "gwcz9"
  | "gwcz10"
  | "gwcz11"
  | "gwcz12"
  | "gwcz13"
  | "gwcz14"
  | "gwcz15"
  | "gwcz16"
  | "gwcz17"
  | "gwcz18"
  | "gwcz19"
  | "gwcz20"
  | "gwcz21"
  | "gwcz22"
  | "gwcz23"
  | "gwcz24"
  | "gwcz25"
  | "gwcz26"
  | "gwcz27"
  | "gwcz28"
  | "gwcz29"
  | "gwcz30"
  | "gwcz31"
  | "gwcz32"
  | "gwcz33"
  | "gwcz34"
  | "gwcz35"
  | "gwcz36"
  | "gwcz37"
  | "gwcz38"
  | "gwcz39"
  | "gwcz40"
  | "gwcz41"
  | "gwcz42"
  | "gwcz43"
  | "gwcz44"
  | "gwcz45"
  | "gwcz46"
  | "gwcz47"
  | "gwcz48"
  | "gwcz49"
  | "gwcz50"
  | "gwcz51"
  | "gwcz52"
  | "gwcz53"
  | "gwcz54"
  | "gwcz55"
  | "gwcz56"
  | "gwcz57"
  | "gwcz58"
  | "gwcz59"
  | "gwcz60"
  | "gwcz61"
  | "gwcz62"
  | "gwcz63"
  | "gwcz64"
  | "gwcz65"
  | "gwcz66"
  | "gwcz67"
  | "gwcz68"
  | "gwcz69"
  | "gwcz70"
  | "gwcz71"
  | "gwcz72"
  | "gwcz73"
  | "gwcz74"
  | "gwcz75"
  | "gwcz76"
  | "gwcz77"
  | "gwcz78"
  | "gwcz79"
  | "gwcz80"
  | "gwcz81"
  | "gwcz82"
  | "gwcz83"
  | "gwcz84"
  | "gwcz85"
  | "gwcz86"
  | "gwcz87"
  | "gwcz88"
  | "gwcz89"
  | "gwcz90"
  | "gwcz91"
  | "gwcz92"
  | "gwcz93"
  | "gwcz94"
  | "gwcz95"
  | "gwcz96"
  | "gwcz97"
  | "gwcz98"
  | "gwcz99"
  | "gwcz100";

/** 管道压力 */
export type PipelineInfoVolclass =
  | "yljb001"
  | "yljb002"
  | "yljb003"
  | "yljb004"
  | "yljb005"
  | "yljb006"
  | "yljb007"
  | "yljb008"
  | "yljb009"
  | "yljb010"
  | "yljb011"
  | "yljb012"
  | "yljb013"
  | "yljb014"
  | "yljb015"
  | "yljb016";

/** 风险要素状态 */
export type RiskDetailInfoState = "DRAFT" | "WAIT_HANDLE" | "WAIT_AUDIT" | "HANDLED";

/** 风险要素等级 */
export type RiskDetailInfoLevel = "ZD" | "JD" | "YB";

/** 风险要素子类型 */
export type RiskDetailInfoSubType =
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

/** 燃气管网风险要素类型 */
export type TypeSummaryParamsType = "GW_SG" | "GW_MSBZ" | "GW_CY" | "GW_ZY" | "GW_JJBZ" | "GW_LH" | "OTHER";

/** 燃气管网风险要素类型 */
export type TypePageParamsType = "GW_SG" | "GW_MSBZ" | "GW_CY" | "GW_ZY" | "GW_JJBZ" | "GW_LH" | "OTHER";
