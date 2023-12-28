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

export interface Type车辆信息 {
  /** 车辆编号 */
  vehicleId: string;
  /** 车牌号码 */
  vehicleNo: string;
  /** 所属燃气企业 */
  orgId: string;
  /** 所属区域 */
  districtId: string;
  /** 生产厂家 */
  manufacturer?: string;
  /** 车辆状态 */
  vehicleState: string;
  /** 行驶证编号 */
  drivingLicenseNo?: string;
  /** 危运证编号 */
  dangerCertNo?: string;
  /**
   * 危运证发证日期
   * @format date-time
   */
  dangerCertIssueDate?: string;
  /**
   * 危运证到期日期
   * @format date-time
   */
  dangerCertExpireDate?: string;
  /** 危运证发证机关 */
  dangerCertIssueGov?: string;
  /** 车辆类别，配送车/危运车 */
  vehicleCatalog: string;
  /** 车辆类型，机动车/非机动车 */
  vehicleType: string;
  /** 是否安装GPS */
  hasGps?: boolean;
  /** 司机姓名 */
  driverName?: string;
  longitude?: string;
  latitude?: string;
}

export interface ResultVoid {
  code: string;
  data: object;
  message: string;
  success: boolean;
}

/** 应急车辆信息 */
export interface EmerVehicleInfoDTO {
  /** 车牌号码 */
  vehicleNo: string;
  /** 行政区划 */
  districtId?: string;
  /** 车辆使用状态 */
  useState?: string;
  /** 所在地址 */
  address?: string;
  /** 车辆类型 */
  vehicleType?: string;
  /** 车辆品牌/型号 */
  vehicleBrand?: string;
  /** 所属单位/部门 */
  deptName?: string;
  /** 联系人 */
  contacts?: string;
  /** 联系电话 */
  phoneNumber?: string;
}

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
}

export interface IDsRequestDTO {
  ids?: Array<string> | string;
}

export interface SysNotifyTemplateDTO {
  /**
   * 模板名称
   * @minLength 0
   * @maxLength 32
   */
  title: string;
  /** 通知方式:SMS/PHONE */
  method: SysNotifyTemplateDtoMethod;
  /**
   * 模板内容
   * @minLength 0
   * @maxLength 100
   */
  content: string;
  /** 关联系统功能模块 */
  module: SysNotifyTemplateDtoModule;
}

export interface SysNotifyRuleDTO {
  /** 规则 */
  rule?: string;
  /**
   * 模板id
   * @format int64
   */
  refTemplateId?: number;
  /** 是否启用 */
  enable?: boolean;
}

/** 企业人员资格证记录信息 */
export interface PerCertificateQuery {
  /** 企业人员资格证记录信息ID */
  uid?: string;
  /** 从业资格证编号 */
  proQuaNo?: string;
  /** 通过年份 */
  effectiveDate: string;
  /**
   * 过期时间，格式：yyyy-MM-dd
   * @format date
   */
  expirationDate: string;
}

/** 企业人员岗位信息 */
export interface PerPositionQuery {
  /** 企业人员岗位信息ID */
  uid?: string;
  /** 人员编号 */
  code?: string;
  /** 所属企业 */
  enterpriseId: string;
  /** 所属企业 */
  enterpriseName?: string;
  /** 岗位 */
  position: PerPositionQueryPosition;
  /** 岗位时间，格式：yyyy-MM-dd */
  startEndTime: Array<string> | string;
  /**
   * 开始时间，格式：yyyy-MM-dd
   * @format date
   */
  startTime?: string;
  /**
   * 结束时间，格式：yyyy-MM-dd
   * @format date
   */
  endTime?: string;
}

/** 新增企业人员资质证照信息 */
export interface UpdatePerQualificationsQuery {
  /** 企业人员资质证照ID */
  uid?: string;
  /** 人员名称 */
  name: string;
  /** 所属企业 */
  enterpriseId: string;
  /** 身份证号码 */
  idNo: string;
  /** 性别 */
  gender: UpdatePerQualificationsQueryGender;
  /**
   * 出生年月，格式：yyyy-MM-dd
   * @format date
   */
  birthday: string;
  /** 当前岗位 */
  currentPosition: UpdatePerQualificationsQueryCurrentPosition;
  /** 是否在岗 */
  isWorking: UpdatePerQualificationsQueryIsWorking;
  /**
   * 联系方式
   * @minLength 11
   * @maxLength 11
   */
  contactInfo: string;
  /** 从业资格证编号 */
  proQuaNo: string;
  /** 附件 */
  files?: string;
  code?: string;
  /** 人员岗位信息列表 */
  positionQuery?: Array<PerPositionQuery>;
  /** 人员资格证信息列表 */
  certificateQuery?: Array<PerCertificateQuery>;
}

export interface FileObj {
  id?: string;
  name?: string;
}

/** 新增隐患 */
export interface HidangerCreateDTO {
  /** 检查计划-政府创建时提供 */
  planCode?: string;
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
  fileIds?: Array<FileObj>;
  /** 风险要素状态 */
  state: HidangerCreateDtoState;
  /**
   * 整改完成日期
   * @format date
   */
  completionDate?: string;
  /** 隐患来源 */
  dangerSource?: HidangerCreateDtoDangerSource;
}

export interface HidangerStatementDTO {
  /**
   * 整改情况说明
   * @minLength 0
   * @maxLength 200
   */
  remark: string;
  /** 附件 */
  fileIds?: Array<string> | string;
  /** 现场照片 */
  picIds?: Array<string> | string;
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
  picIds?: Array<string> | string;
  /** 相关附件 */
  fileIds?: Array<string> | string;
}

export interface RiskIdsReqDTO {
  /**
   * 隐患id
   * @maxItems 2147483647
   * @minItems 1
   * @uniqueItems true
   */
  riskIds: Array<number> | number;
}

/** 安全检查计划更新 */
export interface HiDangerCheckPlanUpdateDTO {
  /** 安全检查计划ID */
  title?: string;
  /** 安全检查计划ID */
  checkers?: string;
}

export interface Risk2DangerDTO {
  /** 隐患审核结果 */
  auditResult: Risk2DangerDtoAuditResult;
  /** 附件id */
  fileIds?: Array<string> | string;
  /**
   * 隐患id
   * @maxItems 2147483647
   * @minItems 1
   * @uniqueItems true
   */
  riskIds: Array<number> | number;
  /** 审核内容 */
  auditRemark?: string;
}

export interface HidangerDictionaryUpdateDTO {
  /** 隐患配置编码 */
  code: string;
  /** 主管部门编码 */
  masterDepts?: Array<string> | string;
  /** 协同部门编码 */
  helperDepts?: Array<string> | string;
  /** 风险要素等级 */
  dangerLevel?: HidangerDictionaryUpdateDtoDangerLevel;
}

export interface GovDeptUserCreateDTO {
  /**
   * 用户id,更新时必填
   * @format int64
   */
  uid?: number;
  /**
   * 姓名
   * @minLength 0
   * @maxLength 16
   */
  name: string;
  /** 手机号 */
  phone: string;
  /**
   * 职务
   * @minLength 0
   * @maxLength 64
   */
  jobTitle?: string;
  /** 是否接收短信 */
  smsFlag: boolean;
  /**
   * 部门名称
   * @minLength 0
   * @maxLength 64
   */
  deptAlias: string;
  /** 所属部门编码 */
  deptCode: string;
  phoneValid?: boolean;
}

/** 修改用气用户信息 */
export interface UpdateGasUserQuery {
  /** 用户名称 */
  name: string;
  /** 行政区划id */
  districtId: string;
  /** 所属燃气公司 */
  orgId?: string;
  /** 用户类型 */
  userType: UpdateGasUserQueryUserType;
  /** 用户标签 */
  userTag?: UpdateGasUserQueryUserTag;
  /** 用气类型 */
  useType: UpdateGasUserQueryUseType;
  /** 天然气户号 */
  gasUserNo?: string;
  /** 地址 */
  address: string;
  /**
   * 所在小区/工商业名称
   * @minLength 0
   * @maxLength 255
   */
  location?: string;
  /**
   * 楼栋
   * @minLength 0
   * @maxLength 10
   */
  buildingNo?: string;
  /**
   * 楼层
   * @minLength 0
   * @maxLength 10
   */
  floor?: string;
  /**
   * 房号
   * @minLength 0
   * @maxLength 10
   */
  houseNo?: string;
  /**
   * 常用联系方式
   * @minLength 11
   * @maxLength 11
   */
  comContactInfo: string;
  /** 紧急联系方式 */
  emContactInfo?: string;
  /** 社区/物业名称 */
  communityName?: string;
  /** 社区/物业联系方式 */
  communityContactInfo?: string;
  /** 用户编号 */
  code: string;
}

export interface GasSupplyDTO {
  /**
   * 供气用气日期
   * @format date
   */
  supplyDate: string;
  /**
   * 门站日合同量（万立方米）
   * @format double
   * @min 0.01
   * @exclusiveMin false
   */
  planSum: number;
  /**
   * 门站合同落实量（万立方米）
   * @format double
   * @min 0.01
   * @exclusiveMin false
   */
  actualSum: number;
  /**
   * 日供气总量（万立方米）
   * @format double
   * @min 0.01
   * @exclusiveMin false
   */
  supplySum: number;
  /**
   * 日压减气量（万立方米）
   * @format double
   * @min 0.01
   * @exclusiveMin false
   */
  decrSum: number;
  /**
   * 日停供用户数量（户）
   * @format int32
   * @min 1
   */
  stopSupplyCnt: number;
  /**
   * 日限供用户数量（户）
   * @format int32
   * @min 1
   */
  limitSupplyCnt: number;
}

export interface LinePatrolDTO {
  /** 巡线计划名称 */
  planName: string;
  /**
   * 巡线计划开始日期
   * @format date
   */
  startDate: string;
  /**
   * 巡线计划结束日期
   * @format date
   */
  endDate: string;
  /** 所属区域 */
  districtId: string;
  /** 所属燃气公司 */
  orgId: string;
  /** 巡线类型 */
  patrolType: string;
  /** 管道压力 */
  linePressure: string;
  /**
   * 计划巡线公里数
   * @format int32
   */
  lineKm: number;
  /** 巡检频次 */
  patrolFreq: string;
}

export interface EnterpriseCreateDTO {
  /**
   * 企业名称
   * @minLength 0
   * @maxLength 20
   */
  name: string;
  /** 所属区域 */
  belongArea: string;
  /**
   * 经营区域
   * @maxItems 2147483647
   * @minItems 1
   */
  businessArea: Array<string> | string;
  /**
   * 企业地址
   * @minLength 0
   * @maxLength 100
   */
  address: string;
  /**
   * 经营范围(类别)
   * @minLength 1
   * @maxLength 2147483647
   */
  businessScope: string;
  /**
   * 企业负责人姓名
   * @minLength 0
   * @maxLength 5
   */
  masterName?: string;
  /**
   * 企业负责人手机号
   * @minLength 11
   * @maxLength 11
   */
  masterPhone?: string;
  /**
   * 营业执照编号
   * @minLength 0
   * @maxLength 32
   */
  licenseNumber: string;
  /**
   * 营业执照有效期
   * @format date
   */
  licenseExpiryDate: string;
  /**
   * 营业执照照片
   * @maxItems 3
   * @minItems 0
   */
  licenseImgs?: Array<string> | string;
  /**
   * 经营许可证编号
   * @minLength 0
   * @maxLength 32
   */
  permitsNumber: string;
  /**
   * 经营许可证有效期
   * @format date
   */
  permitsExpiryDate: string;
  /**
   * 经营许可证照片
   * @maxItems 3
   * @minItems 0
   */
  permitsImgs?: Array<string> | string;
  /**
   * 企业照片
   * @maxItems 3
   * @minItems 0
   */
  enterpriseImgs?: Array<string> | string;
  /**
   * 员工数量
   * @format int32
   */
  employeeCount?: number;
  /**
   * 拥有的窨井数量
   * @format int32
   */
  wellsCount?: number;
  /**
   * 拥有的场站数量
   * @format int32
   */
  stationCount?: number;
  /** 拥有的管线长度,km */
  pipelineLengthKm?: number;
  /**
   * 拥有的液化气瓶数量
   * @format int32
   */
  gasBottleCount?: number;
  /** 特种设备列表 */
  specialEquips?: Array<SpecialEquipDTO>;
}

/** 特种设备列表 */
export interface SpecialEquipDTO {
  /**
   * 特种设备数量
   * @format int32
   */
  count?: number;
  /** 特种设备类型 */
  type?: SpecialEquipDtoType;
}

export interface SecurityCheckDTO {
  /**
   * 安检年度
   * @format int32
   */
  planYear: number;
  /** 安检批次 */
  planBatch: string;
  /**
   * 安检计划开始日期
   * @format date
   */
  startDate: string;
  /**
   * 安检计划结束日期
   * @format date
   */
  endDate: string;
  /** 所属燃气公司 */
  orgId: string;
}

/** 三方施工创建 */
export interface ThirdBuildCreateDTO {
  /** 三方施工基本信息 */
  info: ThirdBuildInfoCreateDTO;
  /** 三方施工交底创建DTO */
  report?: ThirdBuildReportCreateDTO;
  /** 三方施工看护信息 */
  guard?: ThirdBuildGuardCreateDTO;
}

/** 三方施工看护信息 */
export interface ThirdBuildGuardCreateDTO {
  /**
   * 看护记录描述
   * @minLength 0
   * @maxLength 300
   */
  remark?: string;
  /**
   * 看护记录图片
   * @maxItems 3
   * @minItems 0
   */
  picIds?: Array<string> | string;
  /**
   * 看护时间
   * @format date-time
   */
  guardTime?: string;
  /**
   * 看护人员姓名
   * @minLength 0
   * @maxLength 16
   */
  guarderName?: string;
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
  orgId?: string;
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
}

/** 三方施工交底创建DTO */
export interface ThirdBuildReportCreateDTO {
  /** 交底人姓名 */
  reporterName?: string;
  /** 交底人手机号 */
  reporterPhone?: string;
  /**
   * 交底照片id
   * @maxItems 3
   * @minItems 0
   */
  reportPicIds?: Array<string> | string;
  /**
   * 管网保护方案照片
   * @maxItems 3
   * @minItems 0
   */
  schemaPicIds?: Array<string> | string;
  /**
   * 管网保护协议照片
   * @maxItems 3
   * @minItems 0
   */
  protocolPicIds?: Array<string> | string;
  /**
   * 交底相关附件id
   * @maxItems 5
   * @minItems 0
   */
  fileIds?: Array<string> | string;
  /**
   * 交底时间,默认当前时间
   * @format date-time
   */
  reportTime?: string;
}

export interface ResultString {
  code: string;
  data: string;
  message: string;
  success: boolean;
}

export interface ExcelImportValidationVO {
  hasBadData: boolean;
  badData: Array<string> | string;
  goodData: Array<object>;
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
  items: Array<ThirdBuildImportDTO>;
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
  realBuildTimeStart?: string;
  /**
   * 实际施工结束时间
   * @format date
   */
  realBuildTimeEnd?: string;
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
  realBuildTimeStartValid?: boolean;
  realBuildTimeEndValid?: boolean;
}

export interface ConferenceAttendees {
  mobile: string;
  name?: string;
}

export interface ConferenceCreateRequest {
  originatorMobile: string;
  subjectName: string;
  /**
   * @maxItems 50
   * @minItems 1
   */
  attendees: Array<ConferenceAttendees>;
  remark?: string;
}

export interface CreateConferenceDTO {
  conferenceId: string;
  conferenceUrl: string;
}

export interface ResultCreateConferenceDTO {
  code: string;
  data: CreateConferenceDTO;
  message: string;
  success: boolean;
}

/** 研判分析-隐患分析列表请求 */
export interface ProjectRiskDangerRequest {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 报警编号 */
  alarmId?: string;
  /**
   * 报警经度
   * @format float
   */
  longitude?: number;
  /**
   * 报警纬度
   * @format float
   */
  latitude?: number;
  /**
   * 报警纬度
   * @format float
   */
  distance: number;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
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
  /** 所属区域id */
  _districtId: string;
  /** 所属机构id */
  _orgId: string;
  /** 风险要素状态 */
  _state: string;
  /** 风险要素等级 */
  _level: string;
}

export interface ResultListProjectRiskDangerVO {
  code: string;
  data: Array<ProjectRiskDangerVO>;
  message: string;
  success: boolean;
}

/** 企业人员资质证照信息管理导入 */
export interface EnterprisePerQuaImportDTO {
  /**
   * 员工名称
   * @minLength 0
   * @maxLength 20
   */
  name: string;
  /**
   * 身份证号码
   * @pattern (^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)
   */
  idNo: string;
  /** 性别 */
  gender: EnterprisePerQuaImportDtoGender;
  /**
   * 出生年月，格式：yyyy-MM-dd
   * @format date
   */
  birthday: string;
  /** 所属企业 */
  enterpriseId: string;
  /** 当前岗位 */
  currentPosition: EnterprisePerQuaImportDtoCurrentPosition;
  /**
   * 联系方式
   * @minLength 11
   * @maxLength 11
   */
  contactInfo: string;
  /** 是否在岗 */
  isWorking: EnterprisePerQuaImportDtoIsWorking;
  /** 从业资格证编号 */
  proQuaNo: string;
  /**
   * 通过年份
   * @format int32
   */
  effectiveDate: number;
  /**
   * 过期时间，格式：yyyy-MM-dd
   * @format date
   */
  expirationDate: string;
}

/** 企业人员资质证照信息导入 */
export interface ImportPerQualificationsQuery {
  /** 数据 */
  items?: Array<EnterprisePerQuaImportDTO>;
}

/** 新增企业人员资质证照信息 */
export interface AddPerQualificationsQuery {
  /** 企业人员资质证照ID */
  uid?: string;
  /** 人员名称 */
  name: string;
  /** 所属企业 */
  enterpriseId: string;
  /** 身份证号码 */
  idNo: string;
  /** 性别 */
  gender: AddPerQualificationsQueryGender;
  /**
   * 出生年月，格式：yyyy-MM-dd
   * @format date
   */
  birthday: string;
  /** 当前岗位 */
  currentPosition: AddPerQualificationsQueryCurrentPosition;
  /** 是否在岗 */
  isWorking: AddPerQualificationsQueryIsWorking;
  /**
   * 联系方式
   * @minLength 11
   * @maxLength 11
   */
  contactInfo: string;
  /** 从业资格证编号 */
  proQuaNo: string;
  /** 附件 */
  files?: string;
  /** 人员岗位信息列表 */
  positionQuery?: Array<PerPositionQuery>;
  /** 人员资格证信息列表 */
  certificateQuery?: Array<PerCertificateQuery>;
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
  timestamp?: string;
  data: Array<object>;
}

/** 更新老旧管网改造进度 */
export interface UpdateOldPipeBuildQuery {
  /** ID */
  uid: string;
  /** 改造进度（%） */
  buildSpeed: number;
  /** 改造进度照片 */
  fileIds?: string;
}

/** 老旧管网改造计划新增 */
export interface AddOldPipeBuildQuery {
  /** 项目名称 */
  buildName: string;
  /** 管道、管线编号 */
  pipeId?: string;
  /** 行政区划id */
  districtId: string;
  /** 组织机构id */
  orgId: string;
  /** 项目地址 */
  address: string;
  /**
   * 施工开始时间
   * @format date
   */
  buildStart: string;
  /**
   * 施工结束时间
   * @format date
   */
  buildEnd: string;
  /** 改造类型 */
  buildType?: AddOldPipeBuildQueryBuildType;
  /** 管网材质类型 */
  pmaterialType?: AddOldPipeBuildQueryPmaterialType;
  /** 压力级别 */
  volclassLevel?: AddOldPipeBuildQueryVolclassLevel;
  /**
   * 改造公里数
   * @min 0
   */
  buildKilometer?: number;
  /** 改造施工方案 */
  fileIds?: string;
  /** 建设单位 */
  buildUnit: string;
  /** 建设单位联系人 */
  buildContactsMan: string;
  /** 建设单位联系电话 */
  buildContactsPhone: string;
  /** 监理单位 */
  supervisionUnit: string;
  /** 监理单位联系人 */
  supervisionContactsNam: string;
  /** 监理单位联系人电话 */
  supervisionContactsPhone: string;
}

/** 应急演练新增VO */
export interface AddEmresDrillRequest {
  /** 应急演练ID */
  uid?: string;
  /**
   * 应急演练名称
   * @minLength 0
   * @maxLength 100
   */
  drillName: string;
  /** 演练类型 */
  drillType: AddEmresDrillRequestDrillType;
  /** 行政区划id */
  districtId?: string;
  /** 组织机构id */
  orgId: string;
  /** 文件id集合，多个以逗号分隔 */
  fileIds?: string;
  /**
   * 演练时间
   * @format date
   */
  drillTime: string;
  /** 演练状态 未开始、已完成、逾期 */
  drillState?: AddEmresDrillRequestDrillState;
}

export interface HidangerDoUrgeDTO {
  /**
   * @maxItems 2147483647
   * @minItems 1
   */
  uids: Array<string> | string;
  /** 是否通知主体责任单位 */
  notifyMaster: boolean;
  /** 是否通知协同单位 */
  notifyHelper: boolean;
  /** 通知其他人 */
  othersPhone?: Array<string> | string;
  /** 同企业是否合并发送 */
  orgMarge: boolean;
}

export interface HidangerUrgePreviewVO {
  /** @uniqueItems true */
  masterDepts: Array<string> | string;
  /** @uniqueItems true */
  helperDepts: Array<string> | string;
  smsTemplate: string;
}

export interface ResultHidangerUrgePreviewVO {
  code: string;
  data: HidangerUrgePreviewVO;
  message: string;
  success: boolean;
}

export interface HidangerImportVO {
  hasBadData: boolean;
  badData: Array<string> | string;
  goodData: Array<HidangerCreateDTO>;
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
  uids: Array<number> | number;
  /** 隐患处置人员id */
  receiverId: string;
  /**
   * 派单说明
   * @minLength 0
   * @maxLength 200
   */
  remark: string;
  /** 附件 */
  fileIds?: Array<string> | string;
  /** 现场照片 */
  imgIds?: Array<string> | string;
  /** 是否发送短信 */
  sendMsg?: boolean;
}

export interface HidangerImportDTO {
  /** 目标组织机构 */
  orgId: string;
  /** 隐患来源 */
  source: HidangerImportDtoSource;
  /** 整改计划编号,政府创建/导入时必须提供 */
  planCode?: string;
  /** 隐患数据 */
  items: Array<HidangerCreateDTO>;
}

export interface LeaderCommentCreateDTO {
  /** 隐患编号 */
  dangerId?: string;
  /** 处置流程阶段 */
  stage?: LeaderCommentCreateDtoStage;
  /**
   * 阶段id
   * @format int64
   */
  stageId?: number;
  /** 评论内容 */
  comment?: string;
  /** 相关附件 */
  fileIds?: Array<string> | string;
}

export interface HiDangerSendHandleOrderDTO {
  /** 企业负责人签名 */
  targetOrgMasterSignatures?: Array<string> | string;
  /** 专家签名 */
  expertSignatures?: Array<string> | string;
  /**
   * 隐患id集合
   * @maxItems 2147483647
   * @minItems 1
   * @uniqueItems true
   */
  dangerIds: Array<number> | number;
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
  msgUserIds?: Array<string> | string;
  targetOrgMasterSignaturesStr?: string;
  expertSignaturesStr?: string;
}

/** 安全检查计划创建DTO */
export interface HiDangerCheckPlanCreateDTO {
  /** 安全检查计划类型 */
  type: HiDangerCheckPlanCreateDtoType;
  /** 安全检查形式 */
  mode?: HiDangerCheckPlanCreateDtoMode;
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
  checkers?: string;
}

export interface RiskComputedCallbackDTO {
  /** 评估时间 */
  date?: string;
  /** 风险/指标评估文件 */
  files: Array<RiskPipelineFileDTO>;
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

export interface AnalysBaseMnKnowledgeDTO {
  /** 主键id */
  uid?: string;
  /** 知识库编号 */
  knowledgeId?: string;
  /** 知识库名称 */
  knowledgeName?: string;
  /** 知识库名称类型：法律法规、技术标准、国家政策 */
  knowledgeType?: string;
  /**  发布单位 */
  publishCompany?: string;
  /**
   * 发布日期
   * @format date
   */
  publishDate?: string;
  /**
   * 实施日期
   * @format date
   */
  practiceDate?: string;
  /** 附件id */
  fileId?: string;
}

export interface AnalysBaseMnCaseDTO {
  /** 案例库id */
  uid?: string;
  /** 案例编号 */
  caseId?: string;
  /**  事故名称 */
  accidentName?: string;
  /** 事故类型：燃气管网事故、管道燃气用户事故、液化气用户事故 */
  accidentType?: string;
  /** 事故等级:特别重大、重大、较大、一般 */
  accidentLevel?: string;
  /**
   * 事故时间
   * @format date-time
   */
  accidentTime?: string;
  /** 所属区域 */
  districtId?: string;
  /** 事故地址 */
  address?: string;
  /** 死亡人数 */
  death?: string;
  /** 受伤人数 */
  fatal?: string;
  /** 经济损失（万元） */
  economicLosses?: number;
  /** 涉事企业 */
  involveCompany?: string;
  /** 事故直接原因 */
  reason?: string;
  /** 附件id */
  fileId?: string;
}

export interface SuperviseActivitiesCreateDTO {
  /**
   * 活动标题
   * @minLength 0
   * @maxLength 100
   */
  title: string;
  /**
   * 活动地址
   * @minLength 0
   * @maxLength 100
   */
  address: string;
  /**
   * 主办方
   * @minLength 0
   * @maxLength 100
   */
  organizer: string;
  /**
   * 活动参与人数
   * @format int32
   */
  participantsCount: number;
  /**
   * 活动时间
   * @format date
   */
  eventDate: string;
  /**
   * 活动图片id
   * @maxItems 3
   * @minItems 0
   */
  imgIds?: Array<string> | string;
}

export interface GovDeptCreateDTO {
  deptNames: Array<string> | string;
}

/** 用气用户导入 */
export interface GasUserImportDTO {
  /**
   * 用户名称
   * @minLength 0
   * @maxLength 20
   */
  name: string;
  /** 用户类型 */
  userType: GasUserImportDtoUserType;
  /** 用户标签 */
  userTag?: GasUserImportDtoUserTag;
  /** 用气类型 */
  useType: GasUserImportDtoUseType;
  /** 所属区域 */
  districtId: string;
  /** 天然气户号 */
  gasUserNo?: string;
  /**
   * 地址
   * @minLength 0
   * @maxLength 100
   */
  address: string;
  /** 所在小区/工商业名称 */
  location?: string;
  /** 楼号（栋） */
  buildingNo?: string;
  /** 楼层（层） */
  floor?: string;
  /** 房号 */
  houseNo?: string;
  /**
   * 常用联系方式
   * @minLength 11
   * @maxLength 11
   */
  comContactInfo?: string;
  /** 紧急联系方式 */
  emContactInfo?: string;
  /** 社区/物业名称 */
  communityName?: string;
  /** 社区/物业联系方式 */
  communityContactInfo?: string;
}

/** 用气用户批量导入 */
export interface ImportGasUserQuery {
  /** 数据 */
  items?: Array<GasUserImportDTO>;
}

/** 新增用气用户信息 */
export interface AddGasUserQuery {
  /** 用户名称 */
  name: string;
  /** 行政区划id */
  districtId: string;
  /** 所属燃气公司 */
  orgId?: string;
  /** 用户类型 */
  userType: AddGasUserQueryUserType;
  /** 用户标签 */
  userTag?: AddGasUserQueryUserTag;
  /** 用气类型 */
  useType: AddGasUserQueryUseType;
  /** 天然气户号 */
  gasUserNo?: string;
  /** 地址 */
  address: string;
  /**
   * 所在小区/工商业名称
   * @minLength 0
   * @maxLength 255
   */
  location?: string;
  /**
   * 楼栋
   * @minLength 0
   * @maxLength 10
   */
  buildingNo?: string;
  /**
   * 楼层
   * @minLength 0
   * @maxLength 10
   */
  floor?: string;
  /**
   * 房号
   * @minLength 0
   * @maxLength 10
   */
  houseNo?: string;
  /**
   * 常用联系方式
   * @minLength 11
   * @maxLength 11
   */
  comContactInfo: string;
  /** 紧急联系方式 */
  emContactInfo?: string;
  /** 社区/物业名称 */
  communityName?: string;
  /** 社区/物业联系方式 */
  communityContactInfo?: string;
}

export interface GasStationImportDTO {
  gasType?: GasStationImportDtoGasType;
  items?: Array<GasStationImportItemDTO>;
}

export interface GasStationImportItemDTO {
  /**
   * 场站编号
   * @minLength 0
   * @maxLength 64
   */
  stationId: string;
  /**
   * 场站名称
   * @minLength 0
   * @maxLength 64
   */
  stationName: string;
  /** 场站类型 */
  stationType: GasStationImportItemDtoStationType;
  /** 所属企业 */
  orgId: string;
  /** 所属区域 */
  districtId: string;
  /**
   * 场站地址
   * @minLength 0
   * @maxLength 100
   */
  address: string;
  /**
   * 日最大输气能力（万立方）
   * @format double
   */
  gasSupplyMax?: number;
  /**
   * 设计储气能力（万立方）
   * @format double
   */
  gasCapacityDesign?: number;
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

/** 评分列表 */
export interface EnterpriseScoringItemDTO {
  /** 分类 */
  category: string;
  /**
   * 评分项最高分
   * @format int32
   */
  maximumScore: number;
  /** 评分项名称 */
  scoringItem: string;
  /** 评分项编码 */
  scoringCode: string;
  /**
   * 实际得分
   * @format int32
   */
  scoringValue: number;
}

export interface EnterpriseScoringPostDTO {
  /** 企业id */
  orgId: string;
  /** 评分列表 */
  list: Array<EnterpriseScoringItemDTO>;
}

export interface EnterpriseBatchImportDTO {
  items?: Array<EnterpriseImportDTO>;
}

export interface EnterpriseImportDTO {
  /**
   * 企业名称
   * @minLength 0
   * @maxLength 20
   */
  name: string;
  /** 所属区域 */
  belongArea: string;
  /**
   * 企业地址
   * @minLength 0
   * @maxLength 100
   */
  address: string;
  /** 经营区域 */
  businessArea: string;
  /** 经营范围(类别) */
  businessScope: EnterpriseImportDtoBusinessScope;
  /**
   * 企业负责人姓名
   * @minLength 0
   * @maxLength 5
   */
  masterName: string;
  /**
   * 企业负责人手机号
   * @minLength 11
   * @maxLength 11
   */
  masterPhone: string;
  /**
   * 员工数量
   * @format int32
   */
  employeeCount?: number;
  /**
   * 拥有的窨井数量
   * @format int32
   */
  wellsCount?: number;
  /** 拥有的管线长度,km */
  pipelineLengthKm?: number;
  /**
   * 拥有的液化气瓶数量
   * @format int32
   */
  gasBottleCount?: number;
  /**
   * 拥有的场站数量
   * @format int32
   */
  stationCount?: number;
  /** 特种设备类型 */
  specialEquipType?: EnterpriseImportDtoSpecialEquipType;
  /**
   * 特种设备数量
   * @format int32
   */
  specialEquipmentCount?: number;
  /**
   * 安全负责人姓名
   * @minLength 0
   * @maxLength 5
   */
  csoName?: string;
  /**
   * 职位
   * @minLength 0
   * @maxLength 20
   */
  csoJobTitle?: string;
  /**
   * 联系方式
   * @minLength 11
   * @maxLength 11
   */
  csoPhone?: string;
  /**
   * 营业执照编号
   * @minLength 0
   * @maxLength 32
   */
  licenseNumber: string;
  /**
   * 营业执照有效期
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  licenseExpiryDate: string;
  /**
   * 经营许可证编号
   * @minLength 0
   * @maxLength 32
   */
  permitsNumber: string;
  /**
   * 经营许可证有效期
   * @pattern ^\d{4}-\d{2}-\d{2}$
   */
  permitsExpiryDate: string;
}

export interface EnterpriseInfoImportVO {
  hasBadData: boolean;
  badData: Array<string> | string;
  goodData: Array<object>;
}

export interface ResultEnterpriseInfoImportVO {
  code: string;
  data: EnterpriseInfoImportVO;
  message: string;
  success: boolean;
}

export interface SecCheckImportDTO {
  /** @format int64 */
  checkPlanId?: number;
  items?: Array<SecCheckImportItemDTO>;
}

export interface SecCheckImportItemDTO {
  /**
   * 用户号
   * @minLength 0
   * @maxLength 32
   */
  gasUserNo: string;
  /** 安检结果 */
  checkResult: SecCheckImportItemDtoCheckResult;
  /**
   * 入户安检日期
   * @format date
   */
  checkDate: string;
}

/** 燃气企业底数请求 */
export interface AddBaseDataRequest {
  /**
   * 燃气底数ID
   * @format int64
   */
  uid?: number;
  /**
   * 企业ID
   * @format int64
   */
  enterpriseId: number;
  /** 主类型 */
  mainType: string;
  /** 子类型 */
  subType: string;
  /** 子类型值 */
  subValue: string;
  /**
   * 序号
   * @format int32
   */
  sort: number;
}

/** 应急预案新增 */
export interface AddEmresPlanRequest {
  /** 应急预案ID */
  uid?: string;
  /**
   * 应急预案名称
   * @minLength 0
   * @maxLength 100
   */
  planName: string;
  /** 预案类型 */
  planType: AddEmresPlanRequestPlanType;
  /** 行政区划id */
  districtId?: string;
  /** 组织机构id */
  orgId: string;
  /** 文件id集合，多个以逗号分隔 */
  fileIds: string;
  /** 更新原因 */
  updateReason?: string;
}

/** 公告信息新增 */
export interface UpdateBulletinQuery {
  /** 公告类型 */
  bulletinType: UpdateBulletinQueryBulletinType;
  /** 公告标题 */
  bulletinTitle: string;
  /** 公告正文 */
  bulletinText?: string;
  /**
   * 发布时间
   * @format date-time
   */
  publishTime: string;
  /** 附件id */
  fileId?: string;
  /**
   * 公告ID
   * @format int64
   */
  uid: number;
}

/** 通知消息新增类 */
export interface BulletinSendMsgDTO {
  /** 消息标识：隐患编号 或 报警编号等关键标识 */
  msgFlag: string;
  /** 消息类型，隐患：risk 报警：alarm */
  msgType: string;
  /** 通知类型，短信/广播/传真 */
  type: string;
  /** 消息标题 */
  title?: string;
  /** 消息内容 */
  content: string;
  /** 创建人 */
  createBy?: string;
  /** 通知对象 */
  itemList: Array<UrgeTargetItem>;
}

/** 通知对象 */
export interface UrgeTargetItem {
  /** 消息接收人 */
  recipient?: string;
  /** 消息接收人名称 */
  recipientName?: string;
  /** 消息接收人电话 */
  recipientPhone?: string;
  /** 消息接收人单位 */
  recipientUnit?: string;
}

/** 公告信息新增 */
export interface AddBulletinQuery {
  /** 公告类型 */
  bulletinType: AddBulletinQueryBulletinType;
  /** 公告标题 */
  bulletinTitle: string;
  /** 公告正文 */
  bulletinText?: string;
  /**
   * 发布时间
   * @format date-time
   */
  publishTime: string;
  /** 附件id */
  fileId?: string;
}

/** 救援人员管理 */
export interface EmresMnRetmanDTO {
  /**
   * 主键
   * @format int64
   */
  cmKid?: number;
  /** 人员编号 */
  persoNum: string;
  /** 成员姓名 */
  persoName: string;
  /** 联系电话 */
  personTel: string;
  /** 队伍编号 */
  orgid: string;
  /** 救援队名称 */
  orgName: string;
  /** 职务 */
  persotitle?: string;
  /** 专长或特长 */
  speciality?: string;
  /** 填报人 */
  cmCreator?: string;
  /** 填报人电话 */
  cmTel?: string;
  /**
   * 填报时间
   * @format date-time
   */
  cmAddtime?: string;
  /**
   * 更新时间
   * @format date-time
   */
  cmUptime?: string;
  /** 数据来源单位 */
  datasource?: string;
}

/** 救援队伍DTO */
export interface EmresMnReteamDTO {
  /**
   * 主键
   * @format int64
   */
  cmKid?: number;
  /** 队伍编号 */
  orgid: string;
  /** 队伍名称 */
  name: string;
  /** 级别 */
  levelCode?: string;
  /** 隶属单位 */
  cmOrgflag?: string;
  /** 地址 */
  address?: string;
  /** 负责人 */
  director: string;
  /** 联系电话 */
  dutyTel: string;
  /** 经度 */
  longitude?: number;
  /** 纬度 */
  latitude?: number;
  /** 填报人 */
  fillPerson?: string;
  /** 填报人电话 */
  fillPhone?: string;
  /**
   * 填报时间
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  fillTime?: string;
  /** 数据来源 */
  datasource?: string;
  /**
   * 队伍规模
   * @format int32
   */
  personnum?: number;
}

/** 参数查询对象DTO */
export interface ParamQuery {
  /** 编码 */
  codes?: string;
}

/** 管点分页信息 */
export interface CifrsPipeMnPipepointPageVO {
  /**
   * 主键
   * @format int64
   */
  cmKid: number;
  /**  管点编码 */
  guid: string;
  /** 行政区划 */
  cmRegflag: string;
  /** 所属机构 */
  cmOrgflag: string;
  /** 所在道路 */
  roadName: string;
  /** 管点类型 */
  code: string;
  /** 埋深 */
  deep: number;
  /** 当前状态 */
  state: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 物探点号 */
  expNo: string;
  /**
   * 建设年代（安装日期）
   * @format date
   */
  installdat: string;
  /** 附属物 */
  subSid: string;
  /** 特征点 */
  feature: string;
  scode: string;
}

export interface ResultListCifrsPipeMnPipepointPageVO {
  code: string;
  data: Array<CifrsPipeMnPipepointPageVO>;
  message: string;
  success: boolean;
}

/** 管线信息 */
export interface CifrsPipeMnPipelineVO {
  /**
   * 主键Id
   * @format int64
   */
  cmKid: number;
  /** 管线编码 */
  guid: string;
  /** 管线类型 */
  code: string;
  /** 行政区划 */
  cmRegflag: string;
  /** 所属机构 */
  cmOrgflag: string;
  /** 所在道路 */
  roadName: string;
  /** 管线材质 */
  pmaterial: CifrsPipeMnPipelineVoPmaterial;
  /** 管线管径 */
  outDS: string;
  /** 运行压力 */
  operatPress: string;
  /** 压力级别 */
  volclass: CifrsPipeMnPipelineVoVolclass;
  /** 管壁厚度 */
  pipeThink: string;
  /**  管线长度 */
  pipelen: number;
  /** 是否为监测对象 */
  monitorno: string;
  cmGeom: string;
  /** 建设年代 */
  mdate: string;
  /** 管道年限 */
  pipedate: number;
  /** 起点埋深 */
  sDeep: number;
  /** 终点埋深 */
  eDeep: number;
  /** 管线材质 */
  _pmaterial: string;
  /** 压力级别 */
  _volclass: string;
}

export interface CifrsPipeSectionVO {
  pipelineId: string;
  point: string;
  height: number;
  /** 管线信息 */
  pipeline: CifrsPipeMnPipelineVO;
}

export interface ResultListCifrsPipeSectionVO {
  code: string;
  data: Array<CifrsPipeSectionVO>;
  message: string;
  success: boolean;
}

export interface ResultListCifrsPipeMnPipelineVO {
  code: string;
  data: Array<CifrsPipeMnPipelineVO>;
  message: string;
  success: boolean;
}

/** 救援物质DTO */
export interface EmresMnMateriDTO {
  /**
   * 主键
   * @format int64
   */
  cmKid?: number;
  /** 物资装备编号 */
  materCode: string;
  /** 物资装备名称 */
  name: string;
  /** 储备库编号 */
  materhouseCode: string;
  /** 物资装备种类 */
  materType?: string;
  /** 物资装备品牌 */
  factory?: string;
  /** 物资装备型号 */
  specification?: string;
  /** 物资装备数量 */
  matNum?: number;
  /** 计量单位 */
  measureunit?: string;
  /** 主要功能 */
  instruction?: string;
  /** 所在队伍编号 */
  orgid: string;
  /** 所在位置 */
  location: string;
  /** 经纬度 */
  cmGeom?: string;
  /** 填报人 */
  fillPerson?: string;
  /** 填报人电话 */
  contacTel?: string;
  /**
   * 填报时间
   * @format date-time
   */
  fillTime?: string;
  /** 数据来源单位 */
  datasource?: string;
}

/** 专家信息DTO */
export interface EmresMnExpertDTO {
  /** 主键 */
  cmKid?: string;
  /** 专家编号 */
  expCode?: string;
  /** 姓名 */
  name: string;
  /** 性别 */
  sex?: string;
  /** 专家类型 */
  experType?: string;
  /** 民族代码 */
  natioinCode?: string;
  /** 手机 */
  phone?: string;
  /** 办公电话 */
  dutyTel?: string;
  /**
   * 出生日期
   * @format date
   */
  birthday?: string;
  /**  所属单位 */
  unitName?: string;
  /** 单位地址 */
  address?: string;
  /** 身份证号 */
  idCard?: string;
  /** 学历 */
  degreeCode?: string;
  /** 职务 */
  duty?: string;
  /** 专业 */
  major?: string;
  /** 工作部门 */
  department?: string;
  /** 所在区域 */
  area?: string;
  /** 职称 */
  protitle?: string;
  /**
   * 授予时间
   * @format date
   */
  titleDate?: string;
  /** 专长描述 */
  speciality?: string;
  /** 毕业院校 */
  university?: string;
  /** 邮箱地址 */
  mail?: string;
  /**  附件存储位置 */
  fileAdder?: string;
  /**  所在区域 */
  cmRegflag?: string;
}

/** 事故事件修改 */
export interface UpdateAccidentQuery {
  /** 行政区划id */
  districtId: string;
  /** 组织机构id */
  orgId: string;
  /** 事故事件地址 */
  address: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /**
   * 事故事件发生时间
   * @format date-time
   */
  accidentTime: string;
  /** 事故类型：火灾、爆炸、爆燃、机械伤害 */
  accidentType: UpdateAccidentQueryAccidentType;
  /** 事故场景：户内、管网、场站 */
  accidentScene: UpdateAccidentQueryAccidentScene;
  /** 事故等级：特别重大、重大、较大 */
  accidentLevel: UpdateAccidentQueryAccidentLevel;
  /** 事故描述 */
  describe?: string;
  /** 事故报告 */
  fileIds?: string;
  /**
   * 死亡人数
   * @format int32
   * @min 0
   */
  deathCnt?: number;
  /**
   * 受伤人数
   * @format int32
   * @min 0
   */
  injuredCnt?: number;
  /** ID */
  uid: string;
}

/** 事故事件新增 */
export interface AddAccidentQuery {
  /** 行政区划id */
  districtId: string;
  /** 组织机构id */
  orgId: string;
  /** 事故事件地址 */
  address: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /**
   * 事故事件发生时间
   * @format date-time
   */
  accidentTime: string;
  /** 事故类型：火灾、爆炸、爆燃、机械伤害 */
  accidentType: AddAccidentQueryAccidentType;
  /** 事故场景：户内、管网、场站 */
  accidentScene: AddAccidentQueryAccidentScene;
  /** 事故等级：特别重大、重大、较大 */
  accidentLevel: AddAccidentQueryAccidentLevel;
  /** 事故描述 */
  describe?: string;
  /** 事故报告 */
  fileIds?: string;
  /**
   * 死亡人数
   * @format int32
   * @min 0
   */
  deathCnt?: number;
  /**
   * 受伤人数
   * @format int32
   * @min 0
   */
  injuredCnt?: number;
}

export interface ResultWeatherInfo {
  code: string;
  data: WeatherInfo;
  message: string;
  success: boolean;
}

export interface WeatherData {
  /** @format double */
  temperature?: number;
  /** @format double */
  temperatureDiff?: number;
  /** @format double */
  airpressure?: number;
  /** @format double */
  humidity?: number;
  /** @format double */
  rain?: number;
  /** @format int32 */
  rcomfort?: number;
  /** @format int32 */
  icomfort?: number;
  info?: string;
  img?: string;
  imgPath?: string;
  /** @format double */
  feelst?: number;
}

export interface WeatherInfo {
  station: WeatherStation;
  time: string;
  weather: WeatherData;
  wind: WeatherWind;
}

export interface WeatherStation {
  code?: string;
  province?: string;
  city?: string;
  url?: string;
}

export interface WeatherWind {
  direct?: string;
  /** @format double */
  degree?: number;
  power?: string;
  /** @format double */
  speed?: number;
}

export interface ResultVehicleInfoVO {
  code: string;
  /** 车辆信息 */
  data: VehicleInfoVO;
  message: string;
  success: boolean;
}

/** 车辆信息 */
export interface VehicleInfoVO {
  /** 主键 */
  id: string;
  /** 车辆id */
  vehicleId: string;
  /** 车牌号码 */
  vehicleNo: string;
  /** 所属燃气企业 */
  orgId: string;
  /** 行政区划 */
  districtId: string;
  /** 生产厂家 */
  manufacturer: string;
  /** 车辆状态 */
  vehicleState: string;
  /** 行驶证编号 */
  drivingLicenseNo: string;
  /** 危运证编号 */
  dangerCertNo: string;
  /**
   * 危运证发证日期
   * @format date-time
   */
  dangerCertIssueDate: string;
  /**
   * 危运证到期日期
   * @format date-time
   */
  dangerCertExpireDate: string;
  /** 危运证发证机关 */
  dangerCertIssueGov: string;
  /** 车辆类别，配送车/危运车 */
  vehicleCatalog: string;
  /** 车辆类型，机动车/非机动车 */
  vehicleType: string;
  /** 是否安装GPS */
  hasGps: boolean;
  /** 司机姓名 */
  driverName: string;
  /** 所属燃气企业 */
  _orgId: string;
  /** 行政区划 */
  _districtId: string;
}

export interface VehiclePageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 车牌号码 */
  vehicleNo?: string;
  /** 运输车辆类别/应急车辆类型 */
  vehicleCatalog?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface PageResultListVehicleInfoVO {
  code: string;
  data: Array<VehicleInfoVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 应急车辆信息 */
export interface EmerVehicleInfoVO {
  /** 主键 */
  id: string;
  /** 车牌号码 */
  vehicleNo: string;
  /** 行政区划 */
  districtId: string;
  /** 车辆使用状态 */
  useState: string;
  /** 所在地址 */
  address: string;
  /** 车辆类型 */
  vehicleType: string;
  /** 车辆品牌/型号 */
  vehicleBrand: string;
  /** 所属单位/部门 */
  deptName: string;
  /** 联系人 */
  contacts: string;
  /** 联系电话 */
  phoneNumber: string;
  /** 行政区划 */
  _districtId: string;
}

export interface ResultEmerVehicleInfoVO {
  code: string;
  /** 应急车辆信息 */
  data: EmerVehicleInfoVO;
  message: string;
  success: boolean;
}

export interface PageResultListEmerVehicleInfoVO {
  code: string;
  data: Array<EmerVehicleInfoVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 响应错误详情 */
export interface Error {
  /** Exception完整信息 */
  detail?: string;
  /** 额外的错误信息，目前主要是Validation的Message */
  message?: string;
  /** 额外的错误代码，目前主要是Validation的Code */
  code?: string;
  /** 额外的错误字段，目前主要是Validation的Field */
  field?: string;
  /** 错误堆栈信息 */
  stackTrace?: Array<{
    classLoaderName?: string;
    moduleName?: string;
    moduleVersion?: string;
    methodName?: string;
    fileName?: string;
    /** @format int32 */
    lineNumber?: number;
    className?: string;
    nativeMethod?: boolean;
  }>;
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
  code?: number;
  /** 响应返回信息 */
  message?: string;
  /** 请求路径 */
  path?: string;
  /** 响应返回数据 */
  data?: object;
  /** 链路 TraceId */
  traceId?: string;
  /**
   * http状态码
   * @format int32
   */
  status?: number;
  /**
   * 响应时间戳
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  timestamp?: string;
  error?: Error;
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
  children: Array<OrganizationVO>;
}

export interface ResultListUserInfoVO {
  code: string;
  data: Array<UserInfoVO>;
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
  partOrganizationVOs: Array<OrganizationVO>;
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
  id?: string;
  menuId?: string;
  name?: string;
  mark?: string;
  type?: string;
  remark?: string;
  /** @format int32 */
  sort?: number;
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
  buttonChildren: Array<MenuButtonVO>;
}

export interface ResultListMenuVO {
  code: string;
  data: Array<MenuVO>;
  message: string;
  success: boolean;
}

export interface ResultListOrganizationVO {
  code: string;
  data: Array<OrganizationVO>;
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
  children: Array<DistrictVO>;
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
  uid?: string;
  /** 看护记录描述 */
  remark?: string;
  /** 看护记录图片 */
  picIds?: Array<FileObj>;
  /**
   * 看护时间
   * @format date-time
   */
  guardTime?: string;
  /** 看护人员姓名 */
  guarderName?: string;
}

export interface ThirdBuildDetailVO {
  /** 看护记录 */
  guardList: Array<RiskThirdGuardItemDTO>;
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
  reportPicIds: Array<FileObj>;
  /** 管网保护方案 */
  schemaPicIds: Array<FileObj>;
  /** 管网保护协议 */
  protocolPicIds: Array<FileObj>;
  /** 施工类型 */
  _buildType: string;
  /** 交底状态 */
  _reportState: string;
  /** 看护状态 */
  _guardState: string;
  /** 所属单位 */
  _orgId: string;
  /** 第三方施工状态 */
  _buildState: string;
  /** 所属区域 */
  _districtId: string;
}

export interface ResultThirdBuildHandleFlowVO {
  code: string;
  data: ThirdBuildHandleFlowVO;
  message: string;
  success: boolean;
}

export interface ThirdBuildHandleFlowVO {
  flows: Array<ThirdBuildHandleItemDTO>;
}

export interface ThirdBuildHandleItemDTO {
  /** 标题 */
  title?: string;
  /**
   * 阶段时间
   * @format date-time
   */
  stageTime?: string;
  /** 操作人 */
  operator?: string;
  /** 交底照片 */
  reportPicIds?: Array<FileObj>;
  /** 管网保护方案照片 */
  schemaPicIds?: Array<FileObj>;
  /** 管网保护协议照片 */
  protocolPicIds?: Array<FileObj>;
  /** 交底相关附件id */
  fileIds?: Array<FileObj>;
  /** 看护记录描述 */
  remark?: string;
  /**
   * 看护记录图片
   * @maxItems 3
   * @minItems 0
   */
  picIds?: Array<FileObj>;
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
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /**
   * 计划施工开始时间
   * @format date
   */
  startTime?: string;
  /**
   * 计划施工结束时间
   * @format date
   */
  endTime?: string;
  /** 施工类型 */
  buildType?: Array<string> | string;
  /** 施工状态 */
  buildStates?: Array<ThirdBuildPageQueryBuildStates>;
  /** 上报状态 */
  reportStates?: Array<ThirdBuildPageQueryReportStates>;
  /** 看护状态 */
  guardStates?: Array<ThirdBuildPageQueryGuardStates>;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface PageResultListThirdBuildPageVO {
  code: string;
  data: Array<ThirdBuildPageVO>;
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
  /** 施工类型 */
  _buildType: string;
  /** 第三方施工状态 */
  _buildState: string;
  /** 交底状态 */
  _reportState: string;
  /** 看护状态 */
  _guardState: string;
  /** 所属单位 */
  _orgId: string;
  /** 所属区域 */
  _districtId: string;
}

/** 模板参数列表 */
export interface AvailableTemplateVariable {
  /** 参数名称 */
  paramName?: string;
  /** 参数占位 */
  paramValue?: string;
  /** 参数含义说明 */
  paramDesc?: string;
}

export interface ResultSysNotifyTemplateDetailVO {
  code: string;
  data: SysNotifyTemplateDetailVO;
  message: string;
  success: boolean;
}

export interface SysNotifyTemplateDetailVO {
  /** 模板id */
  uid: string;
  /** 模板名称 */
  title: string;
  /** 通知方式:SMS/PHONE */
  method: SysNotifyTemplateDetailVoMethod;
  /** 模板内容 */
  content: string;
  /** 关联系统功能模块 */
  module: SysNotifyTemplateDetailVoModule;
  /** 模板参数列表 */
  availableTemplateVariables: Array<AvailableTemplateVariable>;
  /** 通知方式:SMS/PHONE */
  _method: string;
  /** 关联系统功能模块 */
  _module: string;
}

export interface SysNotifyTemplatePageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 通知方式 */
  method?: string;
  /** 通知名称 */
  title?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface PageResultListSysNotifyTemplatePageVO {
  code: string;
  data: Array<SysNotifyTemplatePageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface SysNotifyTemplatePageVO {
  /** 模板id */
  uid: string;
  /** 模板名称 */
  title: string;
  /** 通知方式:SMS/PHONE */
  method: SysNotifyTemplatePageVoMethod;
  /** 模板内容 */
  content: string;
  /** 关联系统功能模块 */
  module: SysNotifyTemplatePageVoModule;
  /** 通知方式:SMS/PHONE */
  _method: string;
  /** 关联系统功能模块 */
  _module: string;
}

export interface PageRequest {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface JSONConfig {
  order?: boolean;
  ignoreError?: boolean;
  ignoreCase?: boolean;
  dateFormat?: string;
  ignoreNullValue?: boolean;
  transientSupport?: boolean;
  stripTrailingZeros?: boolean;
}

export interface JSONObject {
  config?: JSONConfig;
  empty?: boolean;
  [key: string]: any;
}

export interface PageResultListSuperviseNotifyRulePageVO {
  code: string;
  data: Array<SuperviseNotifyRulePageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface SuperviseNotifyRulePageVO {
  /**
   * 主键
   * @format int64
   */
  uid: number;
  /** 规则名称 */
  ruleName: string;
  /** 模板名称 */
  refTemplateName: string;
  /**
   * 模板id
   * @format int64
   */
  refTemplateId: number;
  /** 是否启用 */
  enable: boolean;
  rule: JSONObject;
}

/** 监管预警信息分页查询请求 */
export interface WarnPageRequest {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 组织机构列表 */
  orgIds?: Array<string> | string;
  /** 查询过滤 */
  queryFilter?: WarnPageRequestQueryFilter;
  /** 预警级别 */
  warnLevel?: Array<WarnPageRequestWarnLevel>;
  /** 预警场所 */
  objType?: Array<WarnPageRequestObjType>;
  /** 预警类型 */
  warnType?: Array<string> | string;
  /** 预警状态 */
  warnState?: Array<WarnPageRequestWarnState>;
  /** 报警来源 */
  alarmSource?: Array<WarnPageRequestAlarmSource>;
  /**
   * 预警发布时间开始
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  startTime?: string;
  /**
   * 预警发布时间结束
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  endTime?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface PageResultListWarnPageVO {
  code: string;
  data: Array<WarnPageVO>;
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
  /** 监测场所类型 */
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
  /** 设备编号 */
  eqptId: string;
  /** 监测编号 */
  objId: string;
  /** 预警类型 */
  warnType: string;
  /** 数据来源 */
  alarmSource: WarnPageVoAlarmSource;
  /**
   * 预警解除时间
   * @format date-time
   */
  relieveTime: string;
  /** @format date-time */
  startTime: string;
  /** @format date-time */
  endTime: string;
  /** 监测场所类型 */
  _objType: string;
  /** 预警级别 */
  _warnLevel: string;
  /** 预警状态 */
  _state: string;
  /** 行政区划 */
  _districtId: string;
  /** 组织机构 */
  _orgId: string;
  /** 数据来源 */
  _alarmSource: string;
}

export interface ResultListWarnSummaryVO {
  code: string;
  data: Array<WarnSummaryVO>;
  message: string;
  success: boolean;
}

/** 预警汇总VO */
export interface WarnSummaryVO {
  /** 预警类型 */
  warnType: string;
  /**
   * 预警总数
   * @format int64
   */
  total: number;
}

export interface ResultListWarnTotalVO {
  code: string;
  data: Array<WarnTotalVO>;
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
   * 确认燃气泄漏
   * @format int64
   */
  realTotal: number;
  /**
   * 占比
   * @format float
   */
  rate: number;
  /** 组织机构 */
  _orgId: string;
}

/** 处置中预警明细 */
export interface DisposeDetail {
  /** 预警编号 */
  warnId?: string;
  /** 预警类型 */
  warnType?: string;
  /** 预警级别 */
  warnLevel?: DisposeDetailWarnLevel;
  /** 详细地址 */
  address?: string;
  /** 组织机构 */
  orgId?: string;
  /**
   * 预警时间
   * @format date-time
   */
  warnTime?: string;
  /** 经度 */
  longitude?: number;
  /** 纬度 */
  latitude?: number;
  /** 报警时长 */
  duration?: string;
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
  disposeTotal: Array<WarnTotalVO>;
  /** 处置中预警明细 */
  details: Array<DisposeDetail>;
}

/** 监管统计请求 */
export interface StatisticalRequest {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 组织机构列表 */
  orgIds?: Array<string> | string;
  /** 监测类型 */
  objType?: Array<StatisticalRequestObjType>;
  /** 报警状态 */
  alarmState?: Array<StatisticalRequestAlarmState>;
  /** 预警状态 */
  warnState?: Array<StatisticalRequestWarnState>;
  /** 时间维度，如：本月、本季度、本年度 */
  timeDimension?: StatisticalRequestTimeDimension;
  /**
   * 时间查询开始
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  startTime?: string;
  /**
   * 时间查询结束
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  endTime?: string;
  /** 报警指标类型 */
  alarmIndex?: Array<string> | string;
  /** 用气类型 */
  gasType?: Array<StatisticalRequestGasType>;
  /** 筛选年度 */
  yearSelect?: Array<string> | string;
  /** 时间点位列表 */
  timePoints?: Array<TimePoint>;
  /** 数据来源 */
  dataSource?: Array<StatisticalRequestDataSource>;
  /** 撒点行政区划ID */
  byDistrictId?: string;
  /** 管线类型 */
  code?: Array<string> | string;
  /** 数据类型：防护目标类型、危险源类型.... */
  dataType?: Array<string> | string;
  /** 燃气企业经营类别 */
  businessScopes?: Array<StatisticalRequestBusinessScopes>;
  /** 管网材质 */
  pmaterialType?: Array<StatisticalRequestPmaterialType>;
  /** 岗位 */
  position?: Array<StatisticalRequestPosition>;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 时间点位 */
export interface TimePoint {
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
}

export interface ResultWarnScreenSummaryVO {
  code: string;
  /** 监测预警大屏-预警统计VO */
  data: WarnScreenSummaryVO;
  message: string;
  success: boolean;
}

/** 监测预警大屏-预警统计VO */
export interface WarnScreenSummaryVO {
  /**
   * 报警总数
   * @format int64
   */
  allCount: number;
  /** 监测场所预警明细 */
  objSummaryDetail: Array<WarnTotalVO>;
  /** 燃气企业预警处置效率排名 */
  handlingRate: Array<WarnTotalVO>;
}

/** 管道气大屏-预警事件明细VO */
export interface PipeGasWarnDetailVO {
  /** 预警ID */
  uid?: string;
  /** 预警编号 */
  warnId?: string;
  /** 预警类型 */
  warnType?: string;
  /** 预警级别 */
  warnLevel?: PipeGasWarnDetailVoWarnLevel;
  /** 详细地址 */
  address?: string;
  /** 预警状态 */
  state?: PipeGasWarnDetailVoState;
  /** 行政区划 */
  districtId?: string;
  /** 组织机构 */
  orgId?: string;
  /**
   * 预警时间
   * @format date-time
   */
  warnTime?: string;
  /** 经度 */
  longitude?: number;
  /** 纬度 */
  latitude?: number;
  /** 响应时长 */
  duration?: string;
  /** 是否挂牌督办 */
  isSupervision?: boolean;
  /**
   * 首次处置时间
   * @format date-time
   */
  firstDisposalTime?: string;
  /** 处置时效：正常、超时 */
  ageing?: string;
  /** 设备编号 */
  eqptId?: string;
  /** 监测编号 */
  objId?: string;
  /** 报警编号 */
  alarmId?: string;
  supervision?: string;
}

export interface ResultWarnStatisticalVO {
  code: string;
  /** 监测预警大屏-预警时间VO */
  data: WarnStatisticalVO;
  message: string;
  success: boolean;
}

/** 监测预警大屏-预警时间VO */
export interface WarnStatisticalVO {
  /**
   * 预警事件总数
   * @format int64
   */
  total: number;
  /**
   * 燃气管网泄漏
   * @format int64
   */
  gasPipelineCnt: number;
  /**
   * 沼气聚集
   * @format int64
   */
  methaneCnt: number;
  /**
   * 场站泄漏
   * @format int64
   */
  stationCnt: number;
  /**
   * 工商业用户
   * @format int64
   */
  terminalCnt: number;
  /** 预警事件明细 */
  detail: Array<PipeGasWarnDetailVO>;
}

/** 管道气大屏-人员资质证照异常明细 */
export interface QualificationsErrorDetailVO {
  /** 组织机构ID */
  orgId?: string;
  /**
   * 资质证照总数
   * @format int64
   */
  total?: number;
  /**
   * 资质即将到期
   * @format int64
   */
  nearExpireCnt?: number;
  /**
   * 资质已过期
   * @format int64
   */
  expireCnt?: number;
  /**
   * 人资质证照缺失数
   * @format int64
   */
  deletion?: number;
  /**
   * 人资质证照正常数量
   * @format int64
   */
  normal?: number;
}

/** 管道气大屏-资质证照异常VO */
export interface QualificationsErrorVO {
  /**
   * 资质证照总数
   * @format int64
   */
  total: number;
  /**
   * 资质即将到期
   * @format int64
   */
  nearExpireCnt: number;
  /**
   * 资质已过期
   * @format int64
   */
  expireCnt: number;
  /** 管道气大屏-资质证照异常明细列表 */
  details: Array<QualificationsErrorDetailVO>;
}

export interface ResultQualificationsErrorVO {
  code: string;
  /** 管道气大屏-资质证照异常VO */
  data: QualificationsErrorVO;
  message: string;
  success: boolean;
}

/** 管道气大屏-预警事件VO */
export interface PipeGasWarnTotalVO {
  /**
   * 预警总数
   * @format int64
   */
  total: number;
  /**
   * 处置中
   * @format int64
   */
  dispose: number;
  /**
   * 已处置
   * @format int64
   */
  relieve: number;
  /**
   * 占比
   * @format float
   */
  rate: number;
  /** 预警事件明细 */
  warnDetail: Array<PipeGasWarnDetailVO>;
}

export interface ResultPipeGasWarnTotalVO {
  code: string;
  /** 管道气大屏-预警事件VO */
  data: PipeGasWarnTotalVO;
  message: string;
  success: boolean;
}

/** 管道气大屏-行业概览VO */
export interface PipelineOverviewVO {
  /**
   * 管道气企业
   * @format int64
   */
  total: number;
  /**
   * 燃气管网公里数
   * @format int64
   */
  pipelineCnt: number;
  /**
   * 天然气场站企业数
   * @format int64
   */
  stationCnt: number;
  /**
   * 用户数
   * @format int64
   */
  userCnt: number;
  /**
   * 从业人员数
   * @format int64
   */
  quaCnt: number;
}

export interface ResultPipelineOverviewVO {
  code: string;
  /** 管道气大屏-行业概览VO */
  data: PipelineOverviewVO;
  message: string;
  success: boolean;
}

/** 管道气大屏-资质证照异常VO */
export interface InspectionPatrolVO {
  /**
   * 计划巡检
   * @format int64
   */
  planKm: number;
  /**
   * 实际巡检
   * @format int64
   */
  endKm: number;
  /**
   * 巡检完成率
   * @format float
   */
  endRatio: number;
  /**
   * 计划安检
   * @format int64
   */
  userCnt: number;
  /**
   * 实际安检
   * @format int64
   */
  checkedCnt: number;
  /**
   * 入户安检完成率
   * @format float
   */
  checkedRatio: number;
}

export interface ResultInspectionPatrolVO {
  code: string;
  /** 管道气大屏-资质证照异常VO */
  data: InspectionPatrolVO;
  message: string;
  success: boolean;
}

/** 监测预警大屏-运行概况VO */
export interface AlarmStatisticalVO {
  /**
   * 总数
   * @format int64
   */
  allTotal: number;
  /**
   * 报警总数
   * @format int64
   */
  total: number;
  /** 数据类型：数据来源、监测指标、监测场所... */
  dataType: string;
  /** 报警统计明细 */
  detail: Array<AlarmSumVO>;
}

/** 报警类别数量统计VO */
export interface AlarmSumVO {
  /** 数据类型：数据来源、监测指标、监测场所... */
  dataType: string;
  /** 组织机构 */
  orgId: string;
  /** 行政区划 */
  districtId: string;
  /**
   * 总数
   * @format int64
   */
  allTotal: number;
  /**
   * 报警总数
   * @format int64
   */
  total: number;
  /** 监测场所 */
  objType: string;
  /** 报警类型 */
  alarmType: string;
  /** 报警级别 */
  alarmLevel: string;
  /**
   * 占比
   * @format float
   */
  rate: number;
  /** 组织机构 */
  _orgId: string;
  /** 行政区划 */
  _districtId: string;
}

export interface ResultListAlarmStatisticalVO {
  code: string;
  data: Array<AlarmStatisticalVO>;
  message: string;
  success: boolean;
}

/** 监测设备统计明细VO */
export interface MonitorStatisticalDetail {
  /** 监测场所 */
  objType?: string;
  /**
   * 设备总数
   * @format int64
   */
  deviceCnt?: number;
  /**
   * 设备种类数
   * @format int64
   */
  monitorIndexCnt?: number;
  /**
   * 监测设备在线数
   * @format float
   */
  onlineRate?: number;
}

/** 监测设备统计VO */
export interface MonitorStatisticalVO {
  /**
   * 监测设备总数
   * @format int64
   */
  total: number;
  /**
   * 监测设备在线数
   * @format float
   */
  onlineRate: number;
  /** 监测设备统计明细 */
  detail: Array<MonitorStatisticalDetail>;
}

export interface ResultMonitorStatisticalVO {
  code: string;
  /** 监测设备统计VO */
  data: MonitorStatisticalVO;
  message: string;
  success: boolean;
}

export interface ResultScreenEmresCountVO {
  code: string;
  /** 基础数据-应急资源VO */
  data: ScreenEmresCountVO;
  message: string;
  success: boolean;
}

/** 基础数据-应急资源VO */
export interface ScreenEmresCountVO {
  /**
   * 救援人员
   * @format int64
   */
  retManCnt: number;
  /**
   * 应急专家
   * @format int64
   */
  expertCnt: number;
  /**
   * 救援队伍
   * @format int64
   */
  reteamCnt: number;
  /**
   * 应急避难场所
   * @format int64
   */
  shelteCnt: number;
  /**
   * 应急车辆
   * @format int64
   */
  carCnt: number;
  /**
   * 应急物资储备库
   * @format int64
   */
  whoseCnt: number;
}

/** 系统首页大屏-企业经营VO */
export interface HomePageEnterpriseVO {
  /** 统计类型：企业资质证照、从员资质证书、安全人员配比、应急预案、应急演练 */
  summaryType: string;
  /**
   * 总数
   * @format int64
   */
  total: number;
  /**
   * 正常、已上报、完成
   * @format int64
   */
  normal: number;
  /**
   * 过期、不足、未完成
   * @format int64
   */
  errorCnt: number;
  /**
   * 缺失
   * @format int64
   */
  deletion: number;
}

export interface ResultListHomePageEnterpriseVO {
  code: string;
  data: Array<HomePageEnterpriseVO>;
  message: string;
  success: boolean;
}

/** 基础数据-应急资源VO */
export interface InstallAlarmVO {
  /** 用户类型：居民、工商业 */
  useType: string;
  /**
   * 报警器安装总个数
   * @format int64
   */
  total: number;
  /**
   * 报警器接入总个数
   * @format int64
   */
  accessTotal: number;
  /**
   * 用户总数
   * @format int64
   */
  useTotal: number;
  /**
   * 加装户数
   * @format int64
   */
  addUser: number;
  /**
   * 加装覆盖率
   * @format float
   */
  addRate: number;
  /**
   * 特殊户数（孤寡老人、餐饮企业）
   * @format int64
   */
  otherUserTotal: number;
  /**
   * 特殊户增加设备数
   * @format int64
   */
  addOtherUserTotal: number;
  /**
   * 特殊户覆盖率
   * @format float
   */
  addOtherRate: number;
  /**
   * 接入报警器在线率
   * @format float
   */
  onlineRate: number;
}

export interface ResultListInstallAlarmVO {
  code: string;
  data: Array<InstallAlarmVO>;
  message: string;
  success: boolean;
}

/** 终端用户综合监管-报警安装汇总VO */
export interface InstallAlarmCountVO {
  /**
   * 报警器安装总个数
   * @format int64
   */
  total: number;
  /**
   * 报警器接入总个数
   * @format int64
   */
  accessTotal: number;
}

export interface ResultInstallAlarmCountVO {
  code: string;
  /** 终端用户综合监管-报警安装汇总VO */
  data: InstallAlarmCountVO;
  message: string;
  success: boolean;
}

/** 终端用户-监测报警-报警分析VO */
export interface ClientDeviceRateVO {
  /** 明细列表 */
  details: Array<SummaryDetail>;
}

export interface ResultClientDeviceRateVO {
  code: string;
  /** 终端用户-监测报警-报警分析VO */
  data: ClientDeviceRateVO;
  message: string;
  success: boolean;
}

/** 明细列表 */
export interface SummaryDetail {
  /** 数据类型 */
  dataType?: string;
  /** 数量 */
  total?: number;
  /** 报警处置中 */
  disposeCount?: number;
  /** 已解除报警数量 */
  relieveCount?: number;
  /**
   * 比率
   * @format float
   */
  rate?: number;
}

export interface ResultMapStringListScreenAlarmSummaryLineChartVO {
  code: string;
  data: Record<string, any>;
  message: string;
  success: boolean;
}

/** 大屏-监测预警接口-监测运行-累计报警折线图VO */
export interface ScreenAlarmSummaryLineChartVO {
  /** 监测场所类型 */
  objType?: ScreenAlarmSummaryLineChartVoObjType;
  /** 监测指标 */
  alarmIndex?: string;
  /**
   * 报警数量
   * @format int64
   */
  total?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 点位格式化 */
  timeStr?: string;
}

export interface ResultListAlarmSumVO {
  code: string;
  data: Array<AlarmSumVO>;
  message: string;
  success: boolean;
}

/** 终端用户-监测报警-报警数量VO */
export interface ClientAlarmCountVO {
  /**
   * 居民燃气泄漏报警数
   * @format int64
   */
  jmCnt: number;
  /**
   * 居民天然气燃气泄漏
   * @format int64
   */
  jmGasCnt: number;
  /**
   * 居民液化气燃气泄漏
   * @format int64
   */
  jmLiqCnt: number;
  /**
   * 工商业用户燃气泄漏报警数
   * @format int64
   */
  gsCnt: number;
  /**
   * 工商业天然气燃气泄漏
   * @format int64
   */
  gsGasCnt: number;
  /**
   * 工商业液化气燃气泄漏
   * @format int64
   */
  gsLiqCnt: number;
}

export interface ResultClientAlarmCountVO {
  code: string;
  /** 终端用户-监测报警-报警数量VO */
  data: ClientAlarmCountVO;
  message: string;
  success: boolean;
}

/** 终端用户综合监管-重点清单-确认燃气泄漏汇总VO */
export interface PcAlarmSummaryVO {
  /**
   * 报警总数
   * @format int64
   */
  total: number;
  /**
   * 已处置
   * @format int64
   */
  yczTotal: number;
  /**
   * 处置中
   * @format int64
   */
  czzTotal: number;
  /**
   * 未处置
   * @format int64
   */
  wczTotal: number;
  /**
   * 确认燃气泄漏
   * @format int64
   */
  realTotal: number;
}

export interface ResultPcAlarmSummaryVO {
  code: string;
  /** 终端用户综合监管-重点清单-确认燃气泄漏汇总VO */
  data: PcAlarmSummaryVO;
  message: string;
  success: boolean;
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
  /** 监测场所类型 */
  objType: AlarmPageVoObjType;
  /** 监测编号 */
  objId: string;
  /** 监测对象名称 */
  objName: string;
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
   * 初次报警时间
   * @format date-time
   */
  firstTime: string;
  /** 初次报警值 */
  firstValue: number;
  /** 初次报警级别 */
  firstLevel: string;
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
  /** 报警排查结果 */
  alarmResult: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 监测场所类型 */
  _objType: string;
  /** 报警状态 */
  _alarmState: string;
  /** 数据来源 */
  _alarmSource: string;
  /** 行政区划 */
  _districtId: string;
  /** 组织机构 */
  _orgId: string;
}

export interface ResultListAlarmPageVO {
  code: string;
  data: Array<AlarmPageVO>;
  message: string;
  success: boolean;
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
  data: Array<DeviceStateSummaryVO>;
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
  data: Array<MonitorDeviceSumVO>;
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
  /** 组织机构ID */
  _orgId: string;
}

export interface ResultListOrgDeviceRateVO {
  code: string;
  data: Array<OrgDeviceRateVO>;
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
  /**
   * 生命线设备总数
   * @format int64
   */
  lifelineTotal: number;
  /**
   * 生命线在线设备总数
   * @format int64
   */
  onlineLifelineCount: number;
  /**
   * 第三方设备总数
   * @format int64
   */
  thirdTotal: number;
  /**
   * 第三方在线设备总数
   * @format int64
   */
  onlineThirdCount: number;
}

export interface ResultAllOnlineRateVO {
  code: string;
  /** 设备总数在线率VO */
  data: AllOnlineRateVO;
  message: string;
  success: boolean;
}

/** 系统首页大屏-监测预警VO */
export interface HomePageWarnSummaryVO {
  /**
   * 安装设备总数
   * @format int64
   */
  installDeviceCnt: number;
  /**
   * 接入设备总数
   * @format int64
   */
  accessDeviceCnt: number;
  /**
   * 当前报警总数
   * @format int64
   */
  alarmCnt: number;
  /**
   * 预警总数
   * @format int64
   */
  warnCnt: number;
  /** 预警来源汇总 */
  warnSourceDetail: Array<WarnTotalVO>;
  /** 预警类型汇总 */
  warnTypeDetail: Array<WarnTotalVO>;
}

export interface ResultHomePageWarnSummaryVO {
  code: string;
  /** 系统首页大屏-监测预警VO */
  data: HomePageWarnSummaryVO;
  message: string;
  success: boolean;
}

/** 系统首页大屏-数据接入VO */
export interface HomePageDataAccessVO {
  /**
   * 接入系统个数、类型数
   * @format int64
   */
  total: number;
  /**
   * 设备数
   * @format int64
   */
  deviceCnt: number;
  /** 接入数据明细 */
  dataAccessDetail: Array<DeviceStateSummaryVO>;
}

export interface ResultListHomePageDataAccessVO {
  code: string;
  data: Array<HomePageDataAccessVO>;
  message: string;
  success: boolean;
}

/** 报警累计统计和趋势分布VO */
export interface AlarmCountTrendVO {
  /**
   * 当前未解除报警数量
   * @format int32
   */
  alarmCnt: number;
  /**
   * 统计范围内的累计报警数量
   * @format int32
   */
  alarmTotal: number;
  /**
   * 当前未解除的预警数量(非草稿)
   * @format int32
   */
  warnCnt: number;
  /**
   * 统计范围内的累计预警数量
   * @format int32
   */
  warnTotal: number;
  /** 报警统计分布 */
  trendList: Array<Count>;
}

/** 报警统计分布 */
export interface Count {
  /** 统计月份 */
  month?: string;
  /**
   * 报警数量
   * @format int32
   */
  alarmCnt?: number;
  /**
   * 预警数量
   * @format int32
   */
  warnCnt?: number;
}

export interface ResultAlarmCountTrendVO {
  code: string;
  /** 报警累计统计和趋势分布VO */
  data: AlarmCountTrendVO;
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
  data: Array<AlarmObjTypeSummaryVO>;
  message: string;
  success: boolean;
}

/** 监测报警管理-报警分析报表VO */
export interface AlarmAnalysisVO {
  /** 所属区域 */
  districtId: string;
  /** 未处置、处置中、已解除、小计 */
  dataType: string;
  /**
   * 合计
   * @format int64
   */
  total: number;
  /**
   * 1级报警
   * @format int64
   */
  oneCnt: number;
  /**
   * 2级报警
   * @format int64
   */
  twoCnt: number;
  /**
   * 3级报警
   * @format int64
   */
  threeCnt: number;
  /**
   * 居民
   * @format int64
   */
  jmyhCnt: number;
  /**
   * 工商业
   * @format int64
   */
  gsyhCnt: number;
  /**
   * 天然气
   * @format int64
   */
  gasCnt: number;
  /**
   * 液化气
   * @format int64
   */
  liquefiedGasCnt: number;
  /** 所属区域 */
  _districtId: string;
}

export interface ResultListAlarmAnalysisVO {
  code: string;
  data: Array<AlarmAnalysisVO>;
  message: string;
  success: boolean;
}

export interface ResultScreenWarnSummaryVO {
  code: string;
  /** 大屏-监测预警接口-监测预警-累计分析VO */
  data: ScreenWarnSummaryVO;
  message: string;
  success: boolean;
}

/** 大屏-监测预警接口-监测预警-累计分析VO */
export interface ScreenWarnSummaryVO {
  /**
   * 预警总数
   * @format int64
   */
  total: number;
  /**
   * 处置中
   * @format int64
   */
  dispose: number;
  /**
   * 已处置
   * @format int64
   */
  relieve: number;
  /**
   * 完成率
   * @format float
   */
  rate: number;
  /** 预警类型占比 */
  warnTypeSummary: Array<WarnTotalVO>;
  /** 燃气企业预警处置排名 */
  warnOrgSort: Array<WarnTotalVO>;
}

export interface ResultScreenWarnHistoryVO {
  code: string;
  /** 大屏-监测预警接口-监测预警-历史预警VO */
  data: ScreenWarnHistoryVO;
  message: string;
  success: boolean;
}

/** 大屏-监测预警接口-监测预警-历史预警VO */
export interface ScreenWarnHistoryVO {
  /**
   * 已处置
   * @format int64
   */
  relieve: number;
  /**
   * 响应时效
   * @format float
   */
  responseTime: number;
  /**
   * 控险时效
   * @format float
   */
  controlTime: number;
  /**
   * 处置及时率
   * @format float
   */
  handlingRate: number;
}

export interface ResultScreenWarnCurrentVO {
  code: string;
  /** 大屏-监测预警接口-监测预警-当前预警VO */
  data: ScreenWarnCurrentVO;
  message: string;
  success: boolean;
}

/** 大屏-监测预警接口-监测预警-当前预警VO */
export interface ScreenWarnCurrentVO {
  /**
   * 处置中
   * @format int64
   */
  dispose: number;
  /**
   * 待接收
   * @format int64
   */
  toBeReceived: number;
  /**
   * 待复核
   * @format int64
   */
  toBeReviewed: number;
  /**
   * 待解除
   * @format int64
   */
  toBeRelieve: number;
}

export interface ResultMapStringListScreenGasDataMapVO {
  code: string;
  data: Record<string, any>;
  message: string;
  success: boolean;
}

/** 大屏-燃气底数-地图VO */
export interface ScreenGasDataMapVO {
  /** 行政区划 */
  districtId: string;
  /** 组织机构id */
  orgId: string;
  /** 类型：燃气管网、液化气瓶、用气用户、危险源与防护目标 */
  objType: string;
  /**
   * 数量
   * @format float
   */
  total: number;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 行政区划 */
  _districtId: string;
  /** 组织机构id */
  _orgId: string;
}

export interface ResultScreenDeviceOnlineSummaryVO {
  code: string;
  /** 大屏-监测预警接口-监测运行-设备在线率VO */
  data: ScreenDeviceOnlineSummaryVO;
  message: string;
  success: boolean;
}

/** 大屏-监测预警接口-监测运行-设备在线率VO */
export interface ScreenDeviceOnlineSummaryVO {
  /**
   * 生命线设备在线率 | 第三方设备在线率
   * @format float
   */
  totalRate: number;
  /**
   * 燃气管网及地下相邻空间设备在线率
   * @format float
   */
  lineRate: number;
  /**
   * 工商业用户-天然气用户设备在线率
   * @format float
   */
  gsGasRate: number;
  /**
   * 工商业用户-液化气用户设备在线率
   * @format float
   */
  gsLiRate: number;
  /**
   * 居民用户-天然气用户设备在线率
   * @format float
   */
  jmGasRate: number;
  /**
   * 居民用户-液化气用户设备在线率
   * @format float
   */
  jmLiRate: number;
  /**
   * 燃气场站-天然气场站设备在线率
   * @format float
   */
  czGasRate: number;
  /**
   * 燃气场站-液化气场站设备在线率
   * @format float
   */
  czLiRate: number;
  /**
   * 液化气-气瓶定位在线率
   * @format double
   */
  lngBotRate: number;
  /**
   * 液化气-车辆定位在线率
   * @format double
   */
  lngVehicleRate: number;
  /**
   * 液化气-智能联锁在线率
   * @format double
   */
  lngScaleRate: number;
  /**
   * 液化气-灌装站设备在线率
   * @format double
   */
  lngStoDevRate: number;
  /**
   * 液化气-供应站设备在线率
   * @format double
   */
  lngSupDevRate: number;
}

export interface ResultListScreenGasDataMapVO {
  code: string;
  data: Array<ScreenGasDataMapVO>;
  message: string;
  success: boolean;
}

/** 大屏-监测预警接口-监测场所设备覆盖率VO */
export interface ObjTypeCoverage {
  /** 监测场所类型 */
  objType?: ObjTypeCoverageObjType;
  /**
   * 天然气覆盖率
   * @format float
   */
  gasRate?: number;
  /**
   * 液化气覆盖率
   * @format float
   */
  liquefiedGasRate?: number;
  /**
   * 设备联网率
   * @format float
   */
  deviceNetworkRate?: number;
}

export interface ResultScreenMonitorCoverageVO {
  code: string;
  /** 大屏-监测预警接口-监测覆盖VO */
  data: ScreenMonitorCoverageVO;
  message: string;
  success: boolean;
}

/** 风险覆盖率 */
export interface RiskLevelCoverageVO {
  riskLevel?: string;
  coverage?: number;
}

/** 大屏-监测预警接口-监测覆盖VO */
export interface ScreenMonitorCoverageVO {
  /** 风险覆盖率 */
  riskCoverage: Array<RiskLevelCoverageVO>;
  /** 监测场所设备覆盖率 */
  objTypeCoverage: Array<ObjTypeCoverage>;
}

export interface LngBotDevStat {
  /** @format int32 */
  botCnt?: number;
  /** @format int32 */
  botQrCnt?: number;
  botQrProportion?: string;
  /** @format int32 */
  heavyCnt?: number;
  /** @format int32 */
  heavyGpsCnt?: number;
  /** @format int32 */
  heavyGpsOnlineCnt?: number;
  heavyGpsProportion?: string;
  /** @format double */
  heavyGpsOnlineRate?: number;
}

export interface LngDeviceStatDTO {
  /** @format int32 */
  devCnt: number;
  botStat: LngBotDevStat;
  vehicleStat: LngVehicleDevStat;
  stationStat: LngStationDevStat;
  scaleStat: LngScaleDevStat;
}

export interface LngScaleDevStat {
  /** @format int32 */
  scaleCnt?: number;
  /** @format int32 */
  lockScaleCnt?: number;
  /** @format int32 */
  lockScaleOnlineCnt?: number;
  /** @format double */
  lockScaleOnlineRate?: number;
  lockScaleProportion?: string;
}

export interface LngStationDevStat {
  /** @format int32 */
  supplyStnCnt?: number;
  /** @format int32 */
  supplyStnMoniCnt?: number;
  /** @format int32 */
  supplyStnGasDevCnt?: number;
  /** @format int32 */
  supplyStnGasDevOnlineCnt?: number;
  /** @format double */
  supplyStnGasDevOnlineRate?: number;
  /** @format int32 */
  supplyStnVideoDevCnt?: number;
  supplyStnProportion?: string;
  /** @format int32 */
  storageStnCnt?: number;
  /** @format int32 */
  storageStnMoniCnt?: number;
  /** @format int32 */
  storageStnGasDevCnt?: number;
  /** @format int32 */
  storageStnGasDevOnlineCnt?: number;
  /** @format double */
  storageStnGasDevOnlineRate?: number;
  /** @format int32 */
  storageStnVideoDevCnt?: number;
  storageStnProportion?: string;
}

export interface LngVehicleDevStat {
  /** @format int32 */
  dangerVehicleCnt?: number;
  /** @format int32 */
  dangerVehicleGpsCnt?: number;
  /** @format int32 */
  dangerVehicleGpsOnlineCnt?: number;
  /** @format double */
  dangerVehicleGpsOnlineRate?: number;
  dangerVehicleGpsProportion?: string;
  /** @format int32 */
  deliveryVehicleCnt?: number;
  /** @format int32 */
  deliveryVehicleGpsCnt?: number;
  /** @format int32 */
  deliveryVehicleGpsOnlineCnt?: number;
  /** @format double */
  deliveryVehicleGpsOnlineRate?: number;
  deliveryVehicleGpsProportion?: string;
  /** @format double */
  vehicleGpsOnlineRate?: number;
}

export interface ResultLngDeviceStatDTO {
  code: string;
  data: LngDeviceStatDTO;
  message: string;
  success: boolean;
}

export interface ResultScreenDeviceSummaryVO {
  code: string;
  /** 大屏-监测预警接口-监测运行-监测概览VO */
  data: ScreenDeviceSummaryVO;
  message: string;
  success: boolean;
}

/** 大屏-监测预警接口-监测运行-监测概览设备指标VO */
export interface ScreenDeviceSourceSummary {
  /** 数据来源 */
  sourceType?: string;
  /**
   * 设备数量
   * @format int64
   */
  sourceCnt?: number;
  /** 设备���量 */
  deviceCnt?: Record<string, any>;
}

/** 大屏-监测预警接口-监测运行-监测概览VO */
export interface ScreenDeviceSummaryVO {
  /**
   * 监测设备总数
   * @format int64
   */
  deviceCnt: number;
  /**
   * 生命线设备数
   * @format int64
   */
  lifelineCnt: number;
  /**
   * 第三方设备数
   * @format int64
   */
  thirdCnt: number;
  /**
   * 管网设备总数
   * @format int64
   */
  lineCnt: number;
  /** 管网监测类型详情 */
  lineDetail: Array<ScreenDeviceSourceSummary>;
  /**
   * 燃气场站设备总数
   * @format int64
   */
  stationCnt: number;
  /** 燃气场站统计详情 */
  stationDetail: Array<ScreenDeviceSourceSummary>;
  /** 工商业、居民统计 */
  deviceClient: Array<ScreenDeviceTypeVO>;
  /**
   * 液化气相关设备总数
   * @format int64
   */
  lngCnt: number;
  /** 液化气监测类型详情 */
  lngDetail: Array<ScreenDeviceSourceSummary>;
}

/** 大屏-监测预警接口-监测运行-设备类型汇总 */
export interface ScreenDeviceTypeVO {
  /** 监测场所类型 */
  objType?: ScreenDeviceTypeVoObjType;
  /**
   * 设备总数
   * @format int64
   */
  total?: number;
  /**
   * 天然气总数
   * @format int64
   */
  gasCnt?: number;
  /**
   * 生命线燃气总数
   * @format int64
   */
  lifelineGasCnt?: number;
  /**
   * 第三方燃气总数
   * @format int64
   */
  thirdGasCnt?: number;
  /**
   * 液化气设备总数
   * @format int64
   */
  liCnt?: number;
  /**
   * 生命线液化气设备数
   * @format int64
   */
  lifelineLiCnt?: number;
  /**
   * 第三方液化气设备数
   * @format int64
   */
  thirdLiCnt?: number;
}

export interface ResultListYearSupplyVO {
  code: string;
  data: Array<YearSupplyVO>;
  message: string;
  success: boolean;
}

export interface YearSupplyVO {
  year: string;
  /** @format int64 */
  gas: number;
  /** @format int64 */
  jmGas: number;
  /** @format int64 */
  gsGas: number;
  /** @format int64 */
  liquefiedGas: number;
  /** @format int64 */
  jmLiGas: number;
  /** @format int64 */
  gsLiGas: number;
}

/** 燃气底数-燃气企业-燃气底数总览VO */
export interface DataOverviewVO {
  /** 主类型 */
  mainType: string;
  /**
   * 统计值
   * @format float
   */
  sumValue: number;
}

export interface ResultListDataOverviewVO {
  code: string;
  data: Array<DataOverviewVO>;
  message: string;
  success: boolean;
}

export interface ResultVehicleDataVO {
  code: string;
  /** 运输车辆VO */
  data: VehicleDataVO;
  message: string;
  success: boolean;
}

/** 运输车辆VO */
export interface VehicleDataVO {
  /**
   * 底数
   * @format float
   */
  dataTotal: number;
  /**
   * 接入数
   * @format float
   */
  accessTotal: number;
  /**
   * 接入率
   * @format float
   */
  rate: number;
  /**
   * 总数
   * @format int64
   */
  total: number;
  /**
   * 配送车辆
   * @format int64
   */
  deliveryVehicleCnt: number;
  /**
   * 危运车
   * @format int64
   */
  dangerVehicleCnt: number;
  /**
   * 其他
   * @format int64
   */
  otherVehicleCnt: number;
}

/** 底数总览明细VO */
export interface AccessDataDetailVO {
  /** 数据类型 */
  dataType?: string;
  /**
   * 数量、长度
   * @format float
   */
  total?: number;
  /**
   * 比率
   * @format float
   */
  rate?: number;
}

/** 底数总览VO */
export interface AccessDataVO {
  /**
   * 底数
   * @format float
   */
  dataTotal: number;
  /**
   * 接入数
   * @format float
   */
  accessTotal: number;
  /**
   * 接入率
   * @format float
   */
  rate: number;
  /** 天然气场站明细 */
  gasStationDetails: Array<AccessDataDetailVO>;
  /** 液化气场站明细 */
  liqDataDetails: Array<AccessDataDetailVO>;
  /** 管网材质明细 */
  pipeMaterialDetails: Array<AccessDataDetailVO>;
  /** 管网年限统计VO */
  pipeAgeDetails: PipelineAgeVO;
  /** 液化气瓶规格 */
  bottleStandardDetail: Array<AccessDataDetailVO>;
  /** 液化气瓶组织机构 */
  bottleOrgDetail: Array<AccessDataDetailVO>;
  /** 天然气从业人员 */
  gasPersonDetail: Array<AccessDataDetailVO>;
  /** 液化气从业人员 */
  liqPersonDetail: Array<AccessDataDetailVO>;
}

/** 管网年限统计VO */
export interface PipelineAgeVO {
  /**
   * 总数
   * @format float
   */
  total?: number;
  /**
   * 20年以上
   * @format float
   */
  ta?: number;
  /**
   * 15-20年
   * @format float
   */
  tb?: number;
  /**
   * 10-15年
   * @format float
   */
  tc?: number;
  /**
   * 5-10年
   * @format float
   */
  td?: number;
  /**
   * 0-5年
   * @format float
   */
  te?: number;
}

export interface ResultAccessDataVO {
  code: string;
  /** 底数总览VO */
  data: AccessDataVO;
  message: string;
  success: boolean;
}

/** 企业人员资质证照信息汇总 */
export interface GasUserCountVO {
  /**
   * 底数
   * @format float
   */
  dataTotal: number;
  /**
   * 接入数
   * @format float
   */
  accessTotal: number;
  /**
   * 接入率
   * @format float
   */
  rate: number;
  /**
   * 用气用户总数
   * @format float
   */
  userTotal: number;
  /**
   * 天然气用户
   * @format float
   */
  trqCnt: number;
  /**
   * 液化气用户
   * @format float
   */
  yhqCnt: number;
  /**
   * 居民天然气用户
   * @format float
   */
  jmtrqCnt: number;
  /**
   * 居民液化气用户
   * @format float
   */
  jmyhqCnt: number;
  /**
   * 工业天然气用户
   * @format float
   */
  gytrqCnt: number;
  /**
   * 工业液化气用户
   * @format float
   */
  gyyhqCnt: number;
  /**
   * 商业天然气用户
   * @format float
   */
  sytrqCnt: number;
  /**
   * 商业液化气用户
   * @format float
   */
  syyhqCnt: number;
  /**
   * 居民天然气孤寡老人数量
   * @format float
   */
  jmtrqlrCnt: number;
  /**
   * 居民液化气孤寡老人数量
   * @format float
   */
  jmyhqlrCnt: number;
  /**
   * 工商业餐饮场所数量
   * @format float
   */
  gsyyhqcyCnt: number;
  /**
   * 工商业天然气餐饮场所数量
   * @format float
   */
  gsytrqcyCnt: number;
}

export interface ResultGasUserCountVO {
  code: string;
  /** 企业人员资质证照信息汇总 */
  data: GasUserCountVO;
  message: string;
  success: boolean;
}

/** 底数结果集VO */
export interface BaseDataVO {
  /**
   * 总数
   * @format float
   */
  total: number;
  /** 底数结果详情 */
  baseDataDetail: Record<string, any>;
}

export interface ResultBaseDataVO {
  code: string;
  /** 底数结果集VO */
  data: BaseDataVO;
  message: string;
  success: boolean;
}

export interface ResultMapStringLong {
  code: string;
  data: Record<string, any>;
  message: string;
  success: boolean;
}

export interface ResultScreenAlarmSummaryVO {
  code: string;
  /** 大屏-监测预警接口-运行监测-累计报警VO */
  data: ScreenAlarmSummaryVO;
  message: string;
  success: boolean;
}

/** 大屏-监测预警接口-运行监测-累计报警VO */
export interface ScreenAlarmSummaryVO {
  /**
   * 累计报警总数
   * @format int64
   */
  total: number;
  /**
   * 今日报警总数
   * @format int64
   */
  todayTotal: number;
  /**
   * 近一个月报警总数
   * @format int64
   */
  monthTotal: number;
  /**
   * 近一年报警总数
   * @format int64
   */
  yearTotal: number;
  /** 累计报警折线图 */
  summaryDetail: Record<string, any>;
}

/** 监测查询分页请求 */
export interface MonitorRequest {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 组织机构列表 */
  orgIds?: Array<string> | string;
  /** 监测场所 */
  objType?: Array<MonitorRequestObjType>;
  /** 监测指标 */
  monitorIndex?: Array<string> | string;
  /** 监测状态 */
  eqptState?: Array<MonitorRequestEqptState>;
  /** 数据来源 */
  dataSource?: Array<MonitorRequestDataSource>;
  /** 查询过滤 */
  queryFilter?: MonitorRequestQueryFilter;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
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
  /** 监测场所类型 */
  objType: MonitorPageVoObjType;
  /** 监测对象名称，如燃气井、排水井等 */
  objName: string;
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
  /** 报警ID */
  alarmId: string;
  /** 报警类型 */
  alarmType: string;
  /**
   * 最新报警时间
   * @format date-time
   */
  alarmLatestTime: string;
  /** 最新报警级别 */
  alarmLatestLevel: string;
  /** 最新报警值 */
  alarmLatestValue: number;
  /**
   * 初次报警时间
   * @format date-time
   */
  alarmFirstTime: string;
  /** 初次报警级别 */
  alarmFirstLevel: string;
  /** 初次报警值 */
  alarmFirstValue: number;
  /** 报警状态 */
  alarmState: MonitorPageVoAlarmState;
  /** 数据来源 */
  alarmSource: MonitorPageVoAlarmSource;
  /**
   * 报警解除时间
   * @format date-time
   */
  relieveTime: string;
  /** 报警排查结果 */
  alarmResult: string;
  /** 监测场所类型 */
  _objType: string;
  /** 行政区划id */
  _districtId: string;
  /** 组织机构id */
  _orgId: string;
  /** 监测状态 */
  _eqptState: string;
  /** 数据来源 */
  _dataSource: string;
  /** 报警状态 */
  _alarmState: string;
  /** 数据来源 */
  _alarmSource: string;
}

export interface PageResultListMonitorPageVO {
  code: string;
  data: Array<MonitorPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 实时监测汇总VO */
export interface MonitorSummaryVO {
  /** 监测场所 */
  objType: string;
  /**
   * 设备总数
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
}

export interface ResultListMonitorSummaryVO {
  code: string;
  data: Array<MonitorSummaryVO>;
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
  geom?: string;
}

/** 危险源VO */
export interface DangerJudgeVO {
  /**
   * id
   * @format int64
   */
  cmKid?: number;
  /** 危险源编号 */
  dangerCode?: string;
  /**  危险源类型 */
  type?: DangerJudgeVoType;
  /**  危险源名称 */
  name?: string;
  /** 是否重大危险源 */
  flgMajor?: string;
  /** 详细地址 */
  address?: string;
  /** 经度 */
  longitude?: number;
  /**  纬度 */
  latitude?: number;
  /** 距离 */
  distance?: string;
}

/** 测点VO */
export interface MonitorJudgeVO {
  /** 设备编号 */
  eqptId?: string;
  /** 设备名称 */
  eqptName?: string;
  /** 监测对象 */
  objId?: string;
  /** 监测指标 */
  monitorIndex?: string;
  /**
   * 设备最新值时间
   * @format date-time
   */
  latestTime?: string;
  /** 设备最新值 */
  latestValue?: number;
  /** 最新报警级别 */
  latestLevel?: string;
  /** 度量单位 */
  measurement?: string;
  /** 监测对象名称，如燃气井、排水井等 */
  objName?: string;
  /** 详细地址 */
  address?: string;
  /** 经度 */
  longitude?: number;
  /** 纬度 */
  latitude?: number;
  /** 距离 */
  distance?: string;
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
  protagList: Array<ProtagJudgeVO>;
  /** 危险源列表 */
  dangerList: Array<DangerJudgeVO>;
  /** 监测设备 */
  deviceList: Array<MonitorJudgeVO>;
}

/** 防护目标VO */
export interface ProtagJudgeVO {
  /**
   * id
   * @format int64
   */
  cmKid?: number;
  /** 防护目标编号 */
  portectid?: string;
  /** 防护目标类型 */
  type?: ProtagJudgeVoType;
  /** 防护目标名称 */
  name?: string;
  /** 是否重点防护目标 */
  flgMajor?: string;
  /** 详细地址 */
  address?: string;
  /** 经度 */
  longitude?: number;
  /** 纬度 */
  latitude?: number;
  /** 距离 */
  distance?: string;
}

export interface ResultPerimeterSearchVO {
  code: string;
  /** 搜索周边地理信息返回 */
  data: PerimeterSearchVO;
  message: string;
  success: boolean;
}

/** 实时监测列表GIS撒点请求 */
export interface DeviceMapRequest {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 组织机构列表 */
  orgIds?: Array<string> | string;
  /** 撒点行政区划ID */
  byDistrictId?: string;
  /** 监测场所 */
  objType?: Array<DeviceMapRequestObjType>;
  /** 监测状态 */
  eqptState?: Array<DeviceMapRequestEqptState>;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 设备GIS一张图点位聚合数据 */
export interface DeviceMapVO {
  /** 聚合范围，如340104 */
  scope: string;
  /** 聚合范围，如蜀山区 */
  scopeName: string;
  /** 聚合展示点经度 */
  longitude: number;
  /** 聚合展示点纬度 */
  latitude: number;
  /** 监测场所类型 */
  objType: DeviceMapVoObjType;
  /**
   * 聚合总数
   * @format int64
   */
  total: number;
  /**
   * 地下管网设备总数
   * @format int64
   */
  dxTotal: number;
  /**
   * 工商业设备总数
   * @format int64
   */
  gsTotal: number;
  /**
   * 居民用户设备总数
   * @format int64
   */
  jmTotal: number;
  /**
   * 场站设备总数
   * @format int64
   */
  czTotal: number;
  /**
   * 管线设备总数
   * @format int64
   */
  lineTotal: number;
  /** 设备子区域撒点 */
  subDeviceMap: Array<DeviceMapVO>;
  /** 监测场所类型 */
  _objType: string;
}

export interface ResultDeviceMapVO {
  code: string;
  /** 设备GIS一张图点位聚合数据 */
  data: DeviceMapVO;
  message: string;
  success: boolean;
}

/** 页面详情VO */
export interface ObjDetail {
  /** 标题 */
  title?: string;
  /** 明细 */
  details?: Record<string, any>;
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
  page: Array<ObjDetail>;
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
  val?: number;
  xdata?: string;
}

/** 监测曲线返回VO */
export interface MonitorCurveVO {
  /** 设备编号 */
  eqptId: string;
  /** 点位编号 */
  pointId: string;
  /** 实时值 */
  realTimeValue: string;
  /** 度量单位，如：%vol.. */
  measure: Array<string> | string;
  /** 最大值 */
  max: Array<Difference>;
  /** 最小值 */
  min: Array<Difference>;
  ydata: Record<string, any>;
  xdata: Array<string> | string;
}

export interface ResultMonitorCurveVO {
  code: string;
  /** 监测曲线返回VO */
  data: MonitorCurveVO;
  message: string;
  success: boolean;
}

/** 监测设备查询请求 */
export interface DeviceRequest {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 详细地址 */
  address?: string;
  /** 气源类型 */
  gasType?: Array<DeviceRequestGasType>;
  /** 用户类型 */
  userType?: Array<DeviceRequestUserType>;
  /** 设备状态 */
  eqptState?: Array<DeviceRequestEqptState>;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 监测设备分页信息 */
export interface DevicePageVO {
  /** ID */
  uid: string;
  /** 设备编号 */
  eqptId: string;
  /** 设备名称 */
  eqptName: string;
  /** 气源类型 */
  gasType: DevicePageVoGasType;
  /** 所属街道/乡镇 */
  towns: string;
  /** 所属社区/村 */
  community: string;
  /** 所属小区/村组 */
  village: string;
  /** 监测状态 */
  eqptState: DevicePageVoEqptState;
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
  /** 数据来源系统 */
  dataSource: DevicePageVoDataSource;
  /** 是否启用 */
  enabled: boolean;
  /** 系统标识 */
  systemId: string;
  /** 监测场所类型 */
  userType: DevicePageVoUserType;
  /** 所属用户 */
  userName: string;
  /** 设备品牌 */
  eqptBrand: string;
  /** 设备型号 */
  eqptModel: string;
  /** 是否有阀门 */
  isValve: boolean;
  /**
   * 安装日期
   * @format date-time
   */
  installTime: string;
  valve: string;
  /** 气源类型 */
  _gasType: string;
  /** 监测状态 */
  _eqptState: string;
  /** 行政区划id */
  _districtId: string;
  /** 组织机构id */
  _orgId: string;
  /** 数据来源系统 */
  _dataSource: string;
  /** 监测场所类型 */
  _userType: string;
}

export interface PageResultListDevicePageVO {
  code: string;
  data: Array<DevicePageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 监测设备统计 */
export interface DeviceSummaryVO {
  /**
   * 安装设备总数
   * @format int64
   */
  total: number;
  /**
   * 天然气居民总数
   * @format int64
   */
  gasJmCnt: number;
  /**
   * 天然气工商业总数
   * @format int64
   */
  gasGsCnt: number;
  /**
   * 液化气居民总数
   * @format int64
   */
  liGasJmCnt: number;
  /**
   * 液化气工商业总数
   * @format int64
   */
  liGasGsCnt: number;
}

export interface ResultDeviceSummaryVO {
  code: string;
  /** 监测设备统计 */
  data: DeviceSummaryVO;
  message: string;
  success: boolean;
}

/** 监管报警信息分页查询请求 */
export interface AlarmPageRequest {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 组织机构列表 */
  orgIds?: Array<string> | string;
  /** 查询过滤 */
  queryFilter?: AlarmPageRequestQueryFilter;
  /** 监测类型 */
  objType?: Array<AlarmPageRequestObjType>;
  /** 报警类型 */
  alarmType?: Array<string> | string;
  /** 报警指标类型 */
  alarmIndex?: Array<string> | string;
  /** 报警状态 */
  alarmState?: Array<AlarmPageRequestAlarmState>;
  /** 报警来源 */
  alarmSource?: Array<AlarmPageRequestAlarmSource>;
  /**
   * 报警时间查询开始
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  startTime?: string;
  /**
   * 报警时间查询结束
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  endTime?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface PageResultListAlarmPageVO {
  code: string;
  data: Array<AlarmPageVO>;
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
  /** 监测场所类型 */
  objType: HistoryAlarmVoObjType;
  /** 复核结果 */
  warnResult: string;
  /** 报警类型 */
  alarmType: string;
  /**
   * 预警数量
   * @format int32
   */
  count: number;
  /** 历史详情 */
  historyDetails: Array<ObjDetail>;
  /** 监测场所类型 */
  _objType: string;
}

export interface ResultListHistoryAlarmVO {
  code: string;
  data: Array<HistoryAlarmVO>;
  message: string;
  success: boolean;
}

/** 报警、预警处置流程VO */
export interface DisposeTraceVO {
  /** 报警编号 */
  alarmId: string;
  /** 预警编号 */
  warnId: string;
  /**
   * 操作处置时间
   * @format date-time
   */
  timestamp: string;
  /** 操作处置详细内容json */
  traceData: string;
  files: Array<string> | string;
}

export interface ResultListDisposeTraceVO {
  code: string;
  data: Array<DisposeTraceVO>;
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
  data: Array<RiskExportVO>;
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
  /** 权属单位 */
  _orgId: string;
  /** 所属区域 */
  _districtId: string;
  /** 风险要素等级 */
  _level: string;
  /** 风险要素状态 */
  _state: string;
  /** 隐患来源 */
  _dangerSource: string;
}

/** 防护目标详情信息 */
export interface ProtagDetailVO {
  /** 主键 */
  cmKid: string;
  /** 防护目标编号 */
  portectid: string;
  /** 防护目标名称 */
  name: string;
  /** 防护目标分类 */
  type: string;
  /** 是否重点防护目标 */
  flgMajor: string;
  /** 所属区域 */
  cmRegflag: string;
  /** 所属组织 */
  cmOrgflag: string;
  /** 详细地址 */
  address: string;
  /** 满负荷人数 */
  fullCapacity: string;
  /** 投影面积 */
  area: number;
  /** 建筑结构形式 */
  buildingStruct: string;
  /** 建筑层数 */
  highestLayer: string;
  /** 建筑年份 */
  builtIn: string;
  /** 使用年限 */
  serviceYears: string;
  /** 预警责任单位 */
  warnUnit: string;
  /** 预警责任人姓名 */
  warnPerson: string;
  /** 预警责任职务 */
  warnPersonJob: string;
  /** 预警责任人电话 */
  warnPersonPhone: string;
  /** 管理单位名称 */
  manaUnit: string;
  /** 管理单位名称负责人 */
  person: string;
  /** 负责人职务 */
  personJob: string;
  /** 负责人电话 */
  personPhone: string;
  /** 填表人 */
  filledPerson: string;
  /** 填表人电话 */
  filledPhone: string;
  /**
   * 填表日期
   * @format date-time
   */
  filledDate: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 坐标系 */
  coordinate: string;
  /** 备注 */
  remake: string;
  /**
   * 修改时间
   * @format date-time
   */
  cmUptime: string;
  /**
   * 创建时间
   * @format date-time
   */
  cmAddtime: string;
}

export interface ResultProtagDetailVO {
  code: string;
  /** 防护目标详情信息 */
  data: ProtagDetailVO;
  message: string;
  success: boolean;
}

/** 企业人员资质证照分页查询 */
export interface PerCertificatePageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 组织机构列表 */
  orgIds?: Array<string> | string;
  /** 查询过滤 */
  queryFilter?: PerCertificatePageQueryQueryFilter;
  /** 性别 */
  gender?: PerCertificatePageQueryGender;
  /**
   * 截止有效日期开始
   * @format date
   * @pattern yyyy-MM-dd
   */
  startTime?: string;
  /**
   * 截止有效日期结束
   * @format date
   * @pattern yyyy-MM-dd
   */
  endTime?: string;
  /** 所属企业 */
  enterpriseId?: Array<number> | number;
  /** 是否过期 */
  isExpiration?: PerCertificatePageQueryIsExpiration;
  /** 当前岗位 */
  currentPosition?: PerCertificatePageQueryCurrentPosition;
  /** 人员编号 */
  code?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface PageResultListPerCertificatePageVO {
  code: string;
  data: Array<PerCertificatePageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 企业人员资质证照分页查询 */
export interface PerCertificatePageVO {
  /** 企业人员岗位信息ID */
  uid: string;
  /** 人员名称 */
  name: string;
  /** 人员编号 */
  code: string;
  /** 所属企业 */
  enterpriseId: string;
  /** 所属企业 */
  enterpriseName: string;
  /** 经营范围(类别) */
  businessScope: Array<PerCertificatePageVoBusinessScope>;
  /** 身份证号码 */
  idNo: string;
  /** 性别 */
  gender: PerCertificatePageVoGender;
  /**
   * 出生年月
   * @format date
   */
  birthday: string;
  /** 当前岗位 */
  currentPosition: PerCertificatePageVoCurrentPosition;
  /** 是否在岗 */
  isWorking: PerCertificatePageVoIsWorking;
  /** 从业资格证编号 */
  proQuaNo: string;
  /** 联系方式 */
  contactInfo: string;
  /** 是否过期 */
  isExpiration: PerCertificatePageVoIsExpiration;
  /** 过期时间 */
  expirationDate: string;
  /** 通过年份 */
  effectiveDate: string;
  /** 性别 */
  _gender: string;
  /** 当前岗位 */
  _currentPosition: string;
  /** 是否在岗 */
  _isWorking: string;
  /** 是否过期 */
  _isExpiration: string;
}

/** 企业人员资质证照信息详情 */
export interface PerCertificateDetailVO {
  /** 企业人员岗位信息ID */
  uid: string;
  /** 人员名称 */
  name: string;
  /** 人员编号 */
  code: string;
  /** 所属企业 */
  enterpriseId: string;
  /** 所属企业 */
  enterpriseName: string;
  /** 经营范围(类别) */
  businessScope: Array<PerCertificateDetailVoBusinessScope>;
  /** 身份证号码 */
  idNo: string;
  /** 性别 */
  gender: PerCertificateDetailVoGender;
  /**
   * 出生年月
   * @format date
   */
  birthday: string;
  /** 当前岗位 */
  currentPosition: PerCertificateDetailVoCurrentPosition;
  /** 是否在岗 */
  isWorking: PerCertificateDetailVoIsWorking;
  /** 从业资格证编号 */
  proQuaNo: string;
  /** 联系方式 */
  contactInfo: string;
  /** 是否过期 */
  isExpiration: PerCertificateDetailVoIsExpiration;
  /** 过期时间 */
  expirationDate: string;
  /** 通过年份 */
  effectiveDate: string;
  /** 附件 */
  files: Array<FileObj>;
  /** 人员岗位信息列表 */
  positionQuery: Array<PerPositionQuery>;
  /** 人员资格证信息列表 */
  certificateQuery: Array<PerCertificateQuery>;
  /** 性别 */
  _gender: string;
  /** 当前岗位 */
  _currentPosition: string;
  /** 是否在岗 */
  _isWorking: string;
  /** 是否过期 */
  _isExpiration: string;
}

export interface ResultPerCertificateDetailVO {
  code: string;
  /** 企业人员资质证照信息详情 */
  data: PerCertificateDetailVO;
  message: string;
  success: boolean;
}

/** 企业人员资质证照信息汇总 */
export interface PerCertificateCountVO {
  /**
   * 企业员工总数
   * @format int64
   */
  perTotal: number;
  /**
   * 企业负责人
   * @format int64
   */
  qyfzrCnt: number;
  /**
   * 安全管理人员
   * @format int64
   */
  aqglryCnt: number;
  /**
   * 燃气输配场站工
   * @format int64
   */
  rqspczgCnt: number;
  /**
   * 液化石油气库站工
   * @format int64
   */
  yhsyqkzgCnt: number;
  /**
   * 压缩天然气场站工
   * @format int64
   */
  ystrqzgCnt: number;
  /**
   * 液化天然气储运工
   * @format int64
   */
  yhtrqcygCnt: number;
  /**
   * 汽车加气站操作工
   * @format int64
   */
  qcjqzczgCnt: number;
  /**
   * 燃气管网工
   * @format int64
   */
  rqgwgCnt: number;
  /**
   * 燃气用户安装检修工
   * @format int64
   */
  rqyhazjxgCnt: number;
  /**
   * 瓶装燃气送气工
   * @format int64
   */
  pzrqsqgCnt: number;
  /**
   * 在岗人员
   * @format int64
   */
  onDutyCnt: number;
  /**
   * 离职人员
   * @format int64
   */
  departCnt: number;
}

export interface ResultPerCertificateCountVO {
  code: string;
  /** 企业人员资质证照信息汇总 */
  data: PerCertificateCountVO;
  message: string;
  success: boolean;
}

export interface ResultListTreeVo {
  code: string;
  data: Array<TreeVo>;
  message: string;
  success: boolean;
}

export interface TreeVo {
  id: string;
  label: string;
  children: Array<TreeVo>;
}

/** 老旧管网改造列表查询请求 */
export interface PageOldPipeBuildQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** @uniqueItems true */
  districtIds?: Array<string> | string;
  /** 改造类型 */
  buildType?: Array<PageOldPipeBuildQueryBuildType>;
  /** 改造状态 */
  buildState?: Array<PageOldPipeBuildQueryBuildState>;
  /** 压力级别 */
  volclassLevel?: Array<PageOldPipeBuildQueryVolclassLevel>;
  /** 管网材质类型 */
  pmaterialType?: Array<PageOldPipeBuildQueryPmaterialType>;
  /** 是否挂牌督办 */
  isSupervision?: boolean;
  /** 是否同步至首平台 */
  isUpload?: boolean;
  /**
   * 开始时间，格式：yyyy-MM-dd
   * @format date
   */
  startTime?: string;
  /**
   * 结束时间，格式：yyyy-MM-dd
   * @format date
   */
  endTime?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 老旧管网返回列表 */
export interface OldPipeBuildVO {
  /** ID */
  uid: string;
  /** 项目编号 */
  buildNo: string;
  /** 项目名称 */
  buildName: string;
  /** 第三方施工状态 */
  buildState: OldPipeBuildVoBuildState;
  /** 管道、管线编号 */
  pipeId: string;
  /** 行政区划id */
  districtId: string;
  /** 组织机构id */
  orgId: string;
  /** 事故事件地址 */
  address: string;
  /**
   * 施工开始时间
   * @format date
   */
  buildStart: string;
  /**
   * 施工结束时间
   * @format date
   */
  buildEnd: string;
  /** 改造类型：道路及庭院管、立管、场站和设施 */
  buildType: OldPipeBuildVoBuildType;
  /** 管网材质类型 */
  pmaterialType: OldPipeBuildVoPmaterialType;
  /** 压力级别 */
  volclassLevel: OldPipeBuildVoVolclassLevel;
  /** 改造公里数 */
  buildKilometer: number;
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
  /** 改造施工方案 */
  fileIds: string;
  /** 创建人 */
  createBy: string;
  /** 更新人 */
  updateBy: string;
  /** 改造进度（%） */
  buildSpeed: number;
  /** 建设单位 */
  buildUnit: string;
  /** 建设单位联系人 */
  buildContactsMan: string;
  /** 建设单位联系电话 */
  buildContactsPhone: string;
  /** 监理单位 */
  supervisionUnit: string;
  /** 监理单位联系人 */
  supervisionContactsNam: string;
  /** 监理单位联系人电话 */
  supervisionContactsPhone: string;
  /** 是否挂牌督办 */
  isSupervision: boolean;
  supervision: string;
  /** 第三方施工状态 */
  _buildState: string;
  /** 行政区划id */
  _districtId: string;
  /** 组织机构id */
  _orgId: string;
  /** 改造类型：道路及庭院管、立管、场站和设施 */
  _buildType: string;
  /** 管网材质类型 */
  _pmaterialType: string;
  /** 压力级别 */
  _volclassLevel: string;
}

export interface PageResultListOldPipeBuildVO {
  code: string;
  data: Array<OldPipeBuildVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 老旧管网改造汇总 */
export interface OldPipeBuildSummaryVO {
  /**
   * 老旧管网公里数
   * @format float
   */
  total: number;
  /**
   * 改造中
   * @format float
   */
  buildingCnt: number;
  /**
   * 未开始
   * @format float
   */
  noStartCnt: number;
}

export interface ResultOldPipeBuildSummaryVO {
  code: string;
  /** 老旧管网改造汇总 */
  data: OldPipeBuildSummaryVO;
  message: string;
  success: boolean;
}

/** 老旧管网改造统计 */
export interface OldPipeBuildStatVO {
  /** 老旧管网台账总长度 */
  total: number;
  /** 计划改造公里数 */
  totalPlaned: number;
  /** 改造完成公里数 */
  totalDone: number;
  /** 剩余改造公里数 */
  totalTodo: number;
}

export interface ResultOldPipeBuildStatVO {
  code: string;
  /** 老旧管网改造统计 */
  data: OldPipeBuildStatVO;
  message: string;
  success: boolean;
}

export interface ResultOldPipeBuildVO {
  code: string;
  /** 老旧管网返回列表 */
  data: OldPipeBuildVO;
  message: string;
  success: boolean;
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
  data: Array<MessageContent>;
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

/** 应急演练分页查询请求 */
export interface EmresDrillRequest {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 演练状态 */
  drillState?: Array<EmresDrillRequestDrillState>;
  /**
   * 计划开展时间开始
   * @format date
   * @pattern yyyy-MM-dd
   */
  startTime?: string;
  /**
   * 计划开展时间结束
   * @format date
   * @pattern yyyy-MM-dd
   */
  endTime?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 应急演练VO */
export interface EmresDrillVO {
  /** ID */
  uid: string;
  /** 应急演练编号 */
  drillCode: string;
  /** 应急演练名称 */
  drillName: string;
  /** 演练类型 */
  drillType: EmresDrillVoDrillType;
  /** 行政区划id */
  districtId: string;
  /** 组织机构id */
  orgId: string;
  /** 创建人 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新人 */
  updateBy: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime: string;
  /** 文件id集合 */
  fileIds: string;
  /**
   * 演练时间
   * @format date
   */
  drillTime: string;
  /** 演练状态 */
  drillState: EmresDrillVoDrillState;
  /** 演练类型 */
  _drillType: string;
  /** 行政区划id */
  _districtId: string;
  /** 组织机构id */
  _orgId: string;
  /** 演练状态 */
  _drillState: string;
}

export interface PageResultListEmresDrillVO {
  code: string;
  data: Array<EmresDrillVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 应急演练汇总VO */
export interface EmresDrillSummaryVO {
  /**
   * 应急演练计划总数
   * @format int64
   */
  total: number;
  /**
   * 未开始演练计划
   * @format int64
   */
  notStartedCnt: number;
  /**
   * 已完成演练计划
   * @format int64
   */
  completedCnt: number;
  /**
   * 逾期未开展演练计划
   * @format int64
   */
  beOverdueCnt: number;
}

export interface ResultEmresDrillSummaryVO {
  code: string;
  /** 应急演练汇总VO */
  data: EmresDrillSummaryVO;
  message: string;
  success: boolean;
}

export interface ResultEmresDrillVO {
  code: string;
  /** 应急演练VO */
  data: EmresDrillVO;
  message: string;
  success: boolean;
}

/** 液化气流转信息统计 */
export interface LngFlowStatVO {
  /**
   * 灌装站充装总数
   * @format int32
   */
  fillingCnt: number;
  /**
   * 实瓶运输总数
   * @format int32
   */
  fullTransCnt: number;
  /**
   * 实瓶运输车辆总数
   * @format int32
   */
  fullTransVehicleCnt: number;
  /**
   * 供应站实瓶存放总数
   * @format int32
   */
  fullSupplyCnt: number;
  /**
   * 实瓶供应站总数
   * @format int32
   */
  fullSupplyStnCnt: number;
  /**
   * 实瓶配送总数
   * @format int32
   */
  deliveryCnt: number;
  /**
   * 实瓶配送工总数
   * @format int32
   */
  deliveryStaffCnt: number;
  /**
   * 交付气瓶总数
   * @format int32
   */
  usageCnt: number;
  /**
   * 空瓶回收总数
   * @format int32
   */
  recycleCnt: number;
  /**
   * 空瓶回收配送工总数
   * @format int32
   */
  recycleStaffCnt: number;
  /**
   * 供应站空瓶存放总数
   * @format int32
   */
  emptySupplyCnt: number;
  /**
   * 空瓶供应站总数
   * @format int32
   */
  emptySupplyStnCnt: number;
  /**
   * 空瓶运输总数
   * @format int32
   */
  emptyTransCnt: number;
  /**
   * 空瓶运输车辆总数
   * @format int32
   */
  emptyTransVehicleCnt: number;
}

export interface ResultLngFlowStatVO {
  code: string;
  /** 液化气流转信息统计 */
  data: LngFlowStatVO;
  message: string;
  success: boolean;
}

/** 液化气流转异常统计 */
export interface LngFlowAlarmStatVO {
  /**
   * 充装异常个数
   * @format int32
   */
  fillingCnt: number;
  /**
   * 运输异常个数
   * @format int32
   */
  transportCnt: number;
  /**
   * 供应异常个数
   * @format int32
   */
  supplyCnt: number;
  /**
   * 配送异常个数
   * @format int32
   */
  deliveryCnt: number;
  /**
   * 使用异常个数
   * @format int32
   */
  usageCnt: number;
}

export interface ResultLngFlowAlarmStatVO {
  code: string;
  /** 液化气流转异常统计 */
  data: LngFlowAlarmStatVO;
  message: string;
  success: boolean;
}

/** 气瓶流转异常,5 */
export interface LngAlarmStatItemVO {
  /**
   * 异常总个数
   * @format int32
   */
  total?: number;
  /**
   * 已处理个数
   * @format int32
   */
  doneCnt?: number;
  /**
   * 未处理个数
   * @format int32
   */
  todoCnt?: number;
}

/** 液化气异常统计 */
export interface LngAlarmStatVO {
  /** @format int32 */
  total: number;
  /** 气瓶流转异常,5 */
  checkTimeout: LngAlarmStatItemVO;
  /** 气瓶流转异常,5 */
  useAlarm: LngAlarmStatItemVO;
  /** 气瓶流转异常,5 */
  certTimeout: LngAlarmStatItemVO;
  /** 气瓶流转异常,5 */
  muchStorage: LngAlarmStatItemVO;
  /** 气瓶流转异常,5 */
  flowAlarm: LngAlarmStatItemVO;
}

export interface ResultLngAlarmStatVO {
  code: string;
  /** 液化气异常统计 */
  data: LngAlarmStatVO;
  message: string;
  success: boolean;
}

export interface OverallItemVO {
  label: string;
  summary: number;
  /** @format int32 */
  count: number;
  proportion: string;
}

export interface ResultListOverallItemVO {
  code: string;
  data: Array<OverallItemVO>;
  message: string;
  success: boolean;
}

/** 气瓶异常趋势 */
export interface LngAlarmTrendVO {
  /** 时间 */
  time: string;
  /**
   * 新增异常总数
   * @format int32
   */
  total: number;
}

export interface ResultListLngAlarmTrendVO {
  code: string;
  data: Array<LngAlarmTrendVO>;
  message: string;
  success: boolean;
}

/** 企业气瓶异常统计 */
export interface LngEntAlarmStatVO {
  /** 燃气企业 */
  enterprise: string;
  /**
   * 异常总个数
   * @format int32
   */
  total: number;
  /**
   * 已处理个数
   * @format int32
   */
  doneCnt: number;
  /**
   * 未处理个数
   * @format int32
   */
  todoCnt: number;
}

export interface ResultListLngEntAlarmStatVO {
  code: string;
  data: Array<LngEntAlarmStatVO>;
  message: string;
  success: boolean;
}

/** 液化气异常列表 */
export interface LngAlarmPageSumVO {
  /** 气瓶流转异常,5 */
  sum: LngAlarmStatItemVO;
  records: Array<LngAlarmPageVO>;
}

/** 液化气异常列表 */
export interface LngAlarmPageVO {
  /**
   * 异常时间
   * @format date-time
   */
  alarmTime?: string;
  /** 异常类型 */
  alarmType?: string;
  /** 异常级别 */
  alarmLevel?: string;
  /** 违规者 */
  violatorName?: string;
  /** 行政区划 */
  districtId?: string;
  /** 燃气企业 */
  orgId?: string;
  /** 处理状态,0未处理,1已处理 */
  processState?: string;
  /** 报警id */
  alarmId?: string;
}

export interface ResultLngAlarmPageSumVO {
  code: string;
  /** 液化气异常列表 */
  data: LngAlarmPageSumVO;
  message: string;
  success: boolean;
}

export interface HidangerUrgeHisVO {
  /** @format date-time */
  sendTime: string;
  sender: string;
  deptName: string;
  role: string;
  name: string;
  phone: string;
  smsContent: string;
}

export interface ResultListHidangerUrgeHisVO {
  code: string;
  data: Array<HidangerUrgeHisVO>;
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
  data: Array<DictionaryItem>;
  message: string;
  success: boolean;
}

/** 隐患统计视图请求 */
export interface RiskStatisticsQuery {
  /** 是否根据所属企业汇总 */
  isGroupByOrg?: boolean;
  /** 隐患第一级类型 */
  subjectType?: Array<string> | string;
  /** 隐患级别 */
  level?: Array<string> | string;
  /** 日期类型 */
  dateType?: string;
  /** 日期详情 */
  dateDetail?: string;
  /** 所属组织机构id */
  orgId?: Array<string> | string;
  /** 行政区划id */
  districtId?: Array<string> | string;
}

export interface ResultListRiskStatisticsVO {
  code: string;
  data: Array<RiskStatisticsVO>;
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
  /** 所属组织机构 */
  _orgId: string;
  /** 风险要素等级 */
  _level: string;
  /** 风险要素状态 */
  _state: string;
  /** 隐患来源 */
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
  /** 企业上报个数 */
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
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 检查计划编号.小程序创建隐患整改单时专用.其他请勿使用 */
  planCode?: string;
  /** 小程序创建隐患整改单时专用.其他请勿使用 */
  canSendHandleOrder?: boolean;
  /** 隐患主体 */
  subjectType?: Array<string> | string;
  /** 风险要素类别 */
  dangerType?: Array<string> | string;
  /** 风险要素子类别 */
  dangerSubType?: Array<string> | string;
  /** 隐患级别 */
  level?: Array<HidangerOrgPageQueryLevel>;
  /** 隐患状态 */
  state?: Array<HidangerOrgPageQueryState>;
  /** 隐患来源 */
  dangerSource?: Array<HidangerOrgPageQueryDangerSource>;
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
  queryOrder?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
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
  /**
   * 隐患推送时间
   * @format date-time
   */
  pushTime: string;
  /**
   * 隐患整改期限
   * @format date
   */
  deadline: string;
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
  /** 隐患主体类型 */
  _subjectType: string;
  /** 风险要素等级 */
  _level: string;
  /** 风险要素状态 */
  _state: string;
  /** 隐患来源 */
  _dangerSource: string;
  /** 行政区划 */
  _districtId: string;
  /** 组织机构 */
  _orgId: string;
}

export interface PageResultListHidangerOrgPageVO {
  code: string;
  data: Array<HidangerOrgPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface BsHidangerPageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 隐患第一类 */
  l1?: string;
  /** 隐患第二类 */
  l2?: string;
  /** 隐患第三类 */
  l3?: string;
  /** 隐患第四类 */
  l4?: string;
  /** 隐患目标名称 */
  targetName?: string;
  /** 隐患目标类型 */
  targetType?: string;
  /** 隐患状态 */
  dangerState?: string;
  /** 隐患级别 */
  dangerLevel?: string;
  /** 隐患来源 */
  dangerSource?: Array<string> | string;
  /** 隐患地址 */
  address?: string;
  /** @format date-time */
  startTime?: string;
  /** @format date-time */
  endTime?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface BsHidangerPageVO {
  /** 隐患uid */
  uid: string;
  /** 隐患id */
  dangerId: string;
  /** 行政区划id */
  districtId: string;
  /** 隐患一级分类 */
  l1: string;
  /** 隐患二级分类 */
  l2: string;
  /** 隐患三级分类 */
  l3: string;
  /** 隐患四级分类 */
  l4: string;
  /** 隐患描述 */
  description: string;
  /** 风险要素等级 */
  dangerLevel: BsHidangerPageVoDangerLevel;
  /** 隐患地址 */
  address: string;
  /** 风险要素状态 */
  dangerState: BsHidangerPageVoDangerState;
  /** 隐患来源 */
  dangerSource: BsHidangerPageVoDangerSource;
  /** 相关企业名称 */
  targetName: string;
  /** 相关企业类型 */
  targetType: string;
  /**
   * 隐患排查时间
   * @format date-time
   */
  checkTime: string;
  /**
   * 隐患催办次数
   * @format int32
   */
  urgeCount: number;
  /** @format double */
  longitude: number;
  /** @format double */
  latitude: number;
  /** 行政区划id */
  _districtId: string;
  /** 风险要素等级 */
  _dangerLevel: string;
  /** 风险要素状态 */
  _dangerState: string;
  /** 隐患来源 */
  _dangerSource: string;
}

export interface PageResultListBsHidangerPageVO {
  code: string;
  data: Array<BsHidangerPageVO>;
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
  /** 风险要素等级 */
  _level: string;
  /** 风险要素状态 */
  _state: string;
  /** 隐患来源 */
  _dangerSource: string;
  /** 行政区划 */
  _districtId: string;
  /** 组织机构 */
  _orgId: string;
}

export interface ResultListCheckPlanRelDangerVO {
  code: string;
  data: Array<CheckPlanRelDangerVO>;
  message: string;
  success: boolean;
}

export interface HidangerCheckPlanDetailVO {
  /** 安全检查计划UID */
  uid: string;
  /** 安全检查计划类型 */
  type: HidangerCheckPlanDetailVoType;
  /** 安全检查形式 */
  mode: HidangerCheckPlanDetailVoMode;
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
  handleOrders: Array<HidangerHandleOrderDTO>;
  /** 安全检查计划类型 */
  _type: string;
  /** 安全检查形式 */
  _mode: string;
  /** 安全检查计划状态 */
  _handleState: string;
}

/** 整改单列表 */
export interface HidangerHandleOrderDTO {
  /** 主键 */
  uid?: string;
  /** 安全检查计划编号 */
  planCode?: string;
  /** 整改单编号 */
  orderCode?: string;
  /**
   * 整改单日期
   * @format date
   */
  orderDate?: string;
  /**
   * 整改单完成期限
   * @format date
   */
  deadline?: string;
  /** 主管单位 */
  masterOrgId?: string;
  /** 目标企业 */
  targetOrgId?: string;
  /** 目标检查企业负责人 */
  targetOrgOwner?: string;
  /** 目标检查企业联系方式 */
  targetOrgPhone?: string;
  /** 目标检查企业地址 */
  targetOrgAddr?: string;
  /** 专家意见 */
  expertOpinion?: string;
  /** 企业负责人签名 */
  targetOrgMasterSign?: Array<string> | string;
  /** 专家签名 */
  expertSign?: Array<string> | string;
}

export interface ResultHidangerCheckPlanDetailVO {
  code: string;
  data: HidangerCheckPlanDetailVO;
  message: string;
  success: boolean;
}

export interface HiDangerCheckPlanSummaryVO {
  list: Array<HiDangerPlanSummaryItemDTO>;
}

export interface HiDangerPlanSummaryItemDTO {
  type?: string;
  /** @format int32 */
  count?: number;
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
  data: Array<HiDangerCheckPlanSelectionsDTO>;
  message: string;
  success: boolean;
}

/** 安全检查分页查询 */
export interface HiDangerCheckPageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 终端用户监管 */
  endUser?: boolean;
  /** 管道气监管 */
  pipeline?: boolean;
  /** 安全检查计划类型 */
  type?: Array<string> | string;
  /** 安全检查形式 */
  mode?: HiDangerCheckPageQueryMode;
  /** 正文 */
  title?: string;
  /**
   * 开始日期
   * @format date
   */
  startTime?: string;
  /**
   * 结束日期
   * @format date
   */
  endTime?: string;
  queryOrder?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 安全检查-分页VO */
export interface HiDangerCheckPageVO {
  /** 数据主键 */
  uid: string;
  /** 安全检查计划类型 */
  type: HiDangerCheckPageVoType;
  /** 安全检查形式 */
  mode: HiDangerCheckPageVoMode;
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
  /** 安全检查计划类型 */
  _type: string;
  /** 安全检查形式 */
  _mode: string;
  /** 安全检查计划状态 */
  _handleState: string;
}

export interface PageResultListHiDangerCheckPageVO {
  code: string;
  data: Array<HiDangerCheckPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface CheckPlanInfoVO {
  /** 目标检查企业id */
  targetOrgId: string;
  /** 目标检查企业负责人 */
  targetOrgOwner: string;
  /** 目标检查企业联系方式 */
  targetOrgPhone: string;
  /** 目标检查企业地址 */
  targetOrgAddr: string;
}

export interface ResultCheckPlanInfoVO {
  code: string;
  data: CheckPlanInfoVO;
  message: string;
  success: boolean;
}

export interface CheckPlanEndUserSummaryVO {
  /**
   * 户内天然气计划数量
   * @format int32
   */
  indoorNgCount: number;
  /**
   * 配送及使用计划数量
   * @format int32
   */
  lgTransportCount: number;
  /**
   * 关联隐患数量
   * @format int32
   */
  dangerCount: number;
}

export interface ResultCheckPlanEndUserSummaryVO {
  code: string;
  data: CheckPlanEndUserSummaryVO;
  message: string;
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
  /** 风险要素等级 */
  _level: string;
}

export interface ResultListHidangerGisVO {
  code: string;
  data: Array<HidangerGisVO>;
  message: string;
  success: boolean;
}

export interface HidangerFlowDTO {
  /** 标题 */
  title?: string;
  /** 处置流程阶段 */
  stage?: HidangerFlowDtoStage;
  /** 阶段主键 */
  stageId?: string;
  /**
   * 阶段时间
   * @format date-time
   */
  stageTime?: string;
  /** 操作人 */
  operator?: string;
  /** 操作人所属组织id */
  operatorOrgId?: string;
  /** 操作人所属组织名称 */
  operatorOrgName?: string;
  /** 图片id列表 */
  picIds?: Array<FileObj>;
  /** 附件id列表 */
  fileIds?: Array<FileObj>;
  /** 评论列表 */
  commentList?: Array<LeaderCommentDTO>;
  content?: any;
}

export interface HidnagerFlowVO {
  dangerId: string;
  /** 隐患来源 */
  dangerSource: HidnagerFlowVoDangerSource;
  /** 风险要素等级 */
  level: HidnagerFlowVoLevel;
  /** 风险要素状态 */
  state: HidnagerFlowVoState;
  flow: Array<HidangerFlowDTO>;
  /** 隐患来源 */
  _dangerSource: string;
  /** 风险要素等级 */
  _level: string;
  /** 风险要素状态 */
  _state: string;
}

/** 评论列表 */
export interface LeaderCommentDTO {
  uid?: string;
  fid?: string;
  /** @format date-time */
  commentTime?: string;
  leaderName?: string;
  leaderOrgName?: string;
  leaderComment?: string;
  children?: Array<LeaderCommentDTO>;
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
  list: Array<SummaryItem>;
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
  count?: number;
  /** 长度,单位KM */
  length?: number;
  /** 类型 */
  type?: string;
  /** 类型编码 */
  code?: string;
  params?: Record<string, any>;
}

export interface HidangerFactorsSummaryPageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 燃气管网风险要素类型 */
  dangerType?: HidangerFactorsSummaryPageQueryDangerType;
  /** 风险要素子类型 */
  dangerSubType?: HidangerFactorsSummaryPageQueryDangerSubType;
  /** 管道材质 */
  material?: HidangerFactorsSummaryPageQueryMaterial;
  /**
   * 管道服役年限,左闭右开
   * @uniqueItems true
   * @example "0-10,10-15,15-20,20-25,25-30,30-999"
   */
  years?: Array<string> | string;
  /** 压力级别 */
  pressureLevels?: Array<HidangerFactorsSummaryPageQueryPressureLevels>;
  dangerTypeStr?: string;
  materialStr?: string;
  dangerSubTypeStr?: string;
  pressureLevelCodes?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 风险要素-分页 */
export interface HidangerFactorsPageVO {
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
  level: HidangerFactorsPageVoLevel;
  /** 燃气管网风险要素类型 */
  dangerType: HidangerFactorsPageVoDangerType;
  /** 风险要素子类型 */
  dangerSubtype: HidangerFactorsPageVoDangerSubtype;
  /** 管道材质 */
  material: HidangerFactorsPageVoMaterial;
  /**
   * 管道服役年限
   * @format int32
   */
  years: number;
  /** 压力级别 */
  pressureLevel: HidangerFactorsPageVoPressureLevel;
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
  /** 行政区划 */
  _districtId: string;
  /** 组织机构 */
  _orgId: string;
  /** 风险要素等级 */
  _level: string;
  /** 燃气管网风险要素类型 */
  _dangerType: string;
  /** 风险要素子类型 */
  _dangerSubtype: string;
  /** 管道材质 */
  _material: string;
  /** 压力级别 */
  _pressureLevel: string;
}

export interface PageResultListHidangerFactorsPageVO {
  code: string;
  data: Array<HidangerFactorsPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 风险要素-汇总分页vo */
export interface HidangerFactorsSummaryPageVO {
  uid: string;
  /** 管道id */
  pipelineId: string;
  /** 行政区划 */
  districtId: string;
  /** 组织机构 */
  orgId: string;
  /** 地址 */
  address: string;
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
  /**
   * 管网老化数量
   * @format int32
   */
  gwlh: number;
  /**
   * 间距不足数量
   * @format int32
   */
  jjbz: number;
  /**
   * 埋深不足数量
   * @format int32
   */
  msbz: number;
  /**
   * 管道穿越数量
   * @format int32
   */
  jccy: number;
  riskTypesStr: string;
  riskTypes: Array<PairRiskDangerTypeInteger>;
  /** 行政区划 */
  _districtId: string;
  /** 组织机构 */
  _orgId: string;
  /** 管道材质 */
  _material: string;
  /** 压力级别 */
  _pressureLevel: string;
}

export interface PageResultListHidangerFactorsSummaryPageVO {
  code: string;
  data: Array<HidangerFactorsSummaryPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface PairRiskDangerTypeInteger {
  /** 燃气管网风险要素类型 */
  key?: PairRiskDangerTypeIntegerKey;
  /** @format int32 */
  value?: number;
}

/** 维度描述 */
export interface DimensionDetail {
  /**
   * 维度得分
   * @format int32
   */
  score?: number;
  /** 维度描述 */
  desc?: string;
  /** 维度级别 */
  level?: string;
}

/** 关联的管线 */
export interface GisRelPipInfo {
  /** 关联管线ID */
  pipeId?: string;
  /** 关联管线GEOM */
  geom?: string;
  label?: string;
  value?: string;
}

/** 指标项 */
export interface HazardNormsDTO {
  /** 指标编码 */
  code?: string;
  /** 指标名称 */
  name?: string;
  /** 指标分类 */
  category?: string;
  /** GIS异常指标弹窗描述 */
  gisException?: string;
  /** 规范要求 */
  requirements?: string;
  /**
   * 影响纬度
   * @uniqueItems true
   */
  dimension?: Array<string> | string;
  /** 评估依据 */
  specifications?: Array<Specifications>;
  /**
   * 管控措施编码列表
   * @uniqueItems true
   */
  measures?: Array<string> | string;
  /** 实际数据 */
  readData?: string;
  /** 关联的管线 */
  relPipes?: Array<GisRelPipInfo>;
  /**
   * 指标得分
   * @format int32
   */
  score?: number;
  /** 评估结论 */
  evalResult?: string;
}

/** 危险源列表 */
export interface ObjectExtDto {
  id?: string;
  name?: string;
  geom?: string;
  address?: string;
  code?: string;
  /** @format double */
  distance?: number;
  /** @format double */
  pathLen?: number;
}

/** 关联管线详情 */
export interface PipelineInfo {
  /** 管线权属单位 */
  orgId?: string;
  /** 管线编码 */
  pipelineId?: string;
  /** 管线类型 */
  pipelineType?: string;
  /** 数据来源 */
  dataSource?: string;
  /** 材质 */
  pmaterial?: PipelineInfoPmaterial;
  /** 管段所在位置 */
  address?: string;
  /** 管道压力 */
  volclass?: PipelineInfoVolclass;
  /** 管径 */
  outDS?: string;
  /** 管道长度 */
  pipelen?: number;
  /** 建设年代 */
  mdate?: string;
  /** 物探时间 */
  sdate?: string;
  geom?: string;
  sdepth?: number;
  edepth?: number;
  ddate?: string;
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
  title?: string;
  /** 风险要素状态 */
  state?: RiskDetailInfoState;
  /** 是否挂牌督办 */
  superviseState?: string;
  /** 风险隐患uid */
  uid?: string;
  /** 风险要素等级 */
  level?: RiskDetailInfoLevel;
  /** 风险要素子类型 */
  subType?: RiskDetailInfoSubType;
  /**
   * 辨识时间
   * @format date
   */
  checkDate?: string;
  /** 组织机构 */
  orgId?: string;
  /** 风险隐患地址 */
  address?: string;
  /** 动态字段 */
  dynamicInfo?: Record<string, any>;
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
  specifications: Array<Specifications>;
  /** 风险评估矩阵 */
  riskTable: Array<Array<number> | number>;
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
  relDeviceCodes: Array<string> | string;
  /** 管控建议列表 */
  measures: Record<string, any>;
  /** 周边环境(200米) */
  aroundEnv: VicinalinfoDto;
  /** 处置流程 */
  flow: Array<HidangerFlowDTO>;
}

/** 评估依据详情 */
export interface Specifications {
  /** 文件名称 */
  title?: string;
  /** 文件id */
  fileId?: string;
  /** 引用章节内容 */
  text?: string;
  /** 引用图片 */
  img?: string;
}

/** 周边环境(200米) */
export interface VicinalinfoDto {
  /** 防护目标列表 */
  protagList?: Array<ObjectExtDto>;
  /** 危险源列表 */
  dangerList?: Array<ObjectExtDto>;
  /** 缓冲面 */
  geom?: string;
}

export interface HidangerDictionaryVO {
  /** 隐患编码 */
  code: string;
  /** 问题大类 */
  category: string;
  /** 一级分类 */
  l1: string;
  /** 二级分类 */
  l2: string;
  /** 三级分类 */
  l3: string;
  /** 四级分类 */
  l4: string;
  /** 检查对象类型 */
  targetType: string;
  /** 主体单位 */
  masterDepts: Array<string> | string;
  /** 协同单位 */
  helperDepts: Array<string> | string;
  /** 风险要素等级 */
  dangerLevel: HidangerDictionaryVoDangerLevel;
  /** 风险要素等级 */
  _dangerLevel: string;
}

export interface ResultListHidangerDictionaryVO {
  code: string;
  data: Array<HidangerDictionaryVO>;
  message: string;
  success: boolean;
}

export interface ResultObject {
  code: string;
  data: object;
  message: string;
  success: boolean;
}

export interface KnowledgePageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** @uniqueItems true */
  districtIds?: Array<string> | string;
  /** 知识库名称 */
  knowledgeName?: string;
  /** 知识库名称类型：法律法规、技术标准、国家政策 */
  knowledgeType?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface AnalysBaseMnKnowledgePageVO {
  /** 主键id */
  uid: string;
  /** 知识库编号 */
  knowledgeId: string;
  /** 知识库名称 */
  knowledgeName: string;
  /** 知识库名称枚举类型（KNOWLEDGETYPE）：法律法规、技术标准、国家政策 */
  knowledgeType: AnalysBaseMnKnowledgePageVoKnowledgeType;
  /**  发布单位 */
  publishCompany: string;
  /**
   * 发布日期
   * @format date
   */
  publishDate: string;
  /**
   * 实施日期
   * @format date
   */
  practiceDate: string;
  /** 附件id */
  fileId: string;
  /** 类型: -1:系统（默认）0：政府 1：企业  2：监测中心 */
  type: string;
  /** 知识库名称枚举类型（KNOWLEDGETYPE）：法律法规、技术标准、国家政策 */
  _knowledgeType: string;
}

export interface PageResultListAnalysBaseMnKnowledgePageVO {
  code: string;
  data: Array<AnalysBaseMnKnowledgePageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface AnalysBaseMnKnowledgeDetailVO {
  /** 主键id */
  uid: string;
  /** 知识库编号 */
  knowledgeId: string;
  /** 知识库名称 */
  knowledgeName: string;
  /** 知识库名称类型：法律法规、技术标准、国家政策 */
  knowledgeType: AnalysBaseMnKnowledgeDetailVoKnowledgeType;
  /**  发布单位 */
  publishCompany: string;
  /**
   * 发布日期
   * @format date
   */
  publishDate: string;
  /**
   * 实施日期
   * @format date
   */
  practiceDate: string;
  /** 附件id */
  fileId: string;
  /** 知识库名称类型：法律法规、技术标准、国家政策 */
  _knowledgeType: string;
}

export interface ResultAnalysBaseMnKnowledgeDetailVO {
  code: string;
  data: AnalysBaseMnKnowledgeDetailVO;
  message: string;
  success: boolean;
}

export interface CasePageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  /** 所属区域 */
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 事故名称 */
  accidentName?: string;
  /** 事故等级枚举（ACCIDENTLEVEL）:特别重大、重大、较大、一般 */
  accidentLevel?: string;
  /** 事故地址 */
  address?: string;
  /**
   * 事故时间查询开始
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  startTime?: string;
  /**
   * 事故时间查询结束
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  endTime?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface AnalysBaseMnCasePageVO {
  /** 案例库编号 */
  uid: string;
  /** 案例编号 */
  caseId: string;
  /** 事故名称 */
  accidentName: string;
  /** 事故类型：燃气管网事故、管道燃气用户事故、液化气用户事故 */
  accidentType: AnalysBaseMnCasePageVoAccidentType;
  /** 事故等级:特别重大、重大、较大、一般 */
  accidentLevel: AnalysBaseMnCasePageVoAccidentLevel;
  /**
   * 事故时间
   * @format date-time
   */
  accidentTime: string;
  /** 所属区域 */
  districtId: string;
  /** 事故地址 */
  address: string;
  /**
   * 死亡人数
   * @format int32
   */
  death: number;
  /**
   * 受伤人数
   * @format int32
   */
  fatal: number;
  /** 经济损失（万元） */
  economicLosses: number;
  /** 涉事企业 */
  involveCompany: string;
  /** 事故直接原因 */
  reason: string;
  /** 附件id */
  fileId: string;
  /** 类型: -1:系统（默认）0：政府 1：企业  2：监测中心 */
  type: string;
  /** 事故类型：燃气管网事故、管道燃气用户事故、液化气用户事故 */
  _accidentType: string;
  /** 事故等级:特别重大、重大、较大、一般 */
  _accidentLevel: string;
  /** 所属区域 */
  _districtId: string;
}

export interface PageResultListAnalysBaseMnCasePageVO {
  code: string;
  data: Array<AnalysBaseMnCasePageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface AnalysBaseMnCaseDetailVO {
  /** 案例库编号 */
  uid: string;
  /** 案例编号 */
  caseId: string;
  /** 事故名称 */
  accidentName: string;
  /** 事故类型：燃气管网事故、管道燃气用户事故、液化气用户事故 */
  accidentType: AnalysBaseMnCaseDetailVoAccidentType;
  /** 事故等级:特别重大、重大、较大、一般 */
  accidentLevel: AnalysBaseMnCaseDetailVoAccidentLevel;
  /**
   * 事故时间
   * @format date-time
   */
  accidentTime: string;
  /** 所属区域 */
  districtId: string;
  /** 事故地址 */
  address: string;
  /**
   * 死亡人数
   * @format int32
   */
  death: number;
  /**
   * 受伤人数
   * @format int32
   */
  fatal: number;
  /** 经济损失（万元） */
  economicLosses: number;
  /** 涉事企业 */
  involveCompany: string;
  /** 事故直接原因 */
  reason: string;
  /** 事故描述 */
  description: string;
  /** 附件id */
  fileId: string;
  /** 事故类型：燃气管网事故、管道燃气用户事故、液化气用户事故 */
  _accidentType: string;
  /** 事故等级:特别重大、重大、较大、一般 */
  _accidentLevel: string;
  /** 所属区域 */
  _districtId: string;
}

export interface ResultAnalysBaseMnCaseDetailVO {
  code: string;
  data: AnalysBaseMnCaseDetailVO;
  message: string;
  success: boolean;
}

export interface AnalysBaseMnCaseBaseVO {
  /** 案例编号 */
  caseId: string;
  /** 案例名称 */
  accidentName: string;
  /** 案例类别 */
  accidentType: AnalysBaseMnCaseBaseVoAccidentType;
  /** 案例等级 */
  accidentLevel: AnalysBaseMnCaseBaseVoAccidentLevel;
  /**
   * 案例时间
   * @format date-time
   */
  accidentTime: string;
  /** 所属区域 */
  districtId: string;
  /** 具体位置 */
  address: string;
  /**
   * 死亡人数
   * @format int32
   */
  death: number;
  /**
   * 受伤人数
   * @format int32
   */
  fatal: number;
  /** 经济损失（万元） */
  economicLosses: number;
  /** 涉事企业 */
  involveCompany: string;
  /** 发生原因 */
  reason: string;
  /** 详细描述 */
  description: string;
  /** 附件id */
  fileId: string;
  /** 案例类别 */
  _accidentType: string;
  /** 案例等级 */
  _accidentLevel: string;
  /** 所属区域 */
  _districtId: string;
}

export interface ResultAnalysBaseMnCaseBaseVO {
  code: string;
  data: AnalysBaseMnCaseBaseVO;
  message: string;
  success: boolean;
}

export interface ResultSuperviseActivitiesPageVO {
  code: string;
  data: SuperviseActivitiesPageVO;
  message: string;
  success: boolean;
}

export interface SuperviseActivitiesPageVO {
  /**
   * 活动id
   * @format int64
   */
  uid: number;
  /** 活动标题 */
  title: string;
  /** 活动地址 */
  address: string;
  /** 活动组织者 */
  organizer: string;
  /**
   * 活动参与人数
   * @format int32
   */
  participantsCount: number;
  /**
   * 活动时间
   * @format date
   */
  eventDate: string;
  /** 活动图片id */
  imgIds: Array<FileObj>;
}

export interface ActivitiesPageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** @format date */
  startTime?: string;
  /**
   * 隐患检查日期-结束
   * @format date
   */
  endTime?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface PageResultListSuperviseActivitiesPageVO {
  code: string;
  data: Array<SuperviseActivitiesPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface SuperviseDeptUserPageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 用户姓名 */
  name?: string;
  /** 手机号 */
  phone?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface GovDeptUserPageVO {
  /** 用户id */
  uid: string;
  /** 姓名 */
  name: string;
  /** 所属部门 */
  deptName: string;
  /** 部门名称 */
  deptAlias: string;
  /** 手机号 */
  phone: string;
  /** 职务 */
  jobTitle: string;
  /** 是否接收短信 */
  smsFlag: boolean;
}

export interface PageResultListGovDeptUserPageVO {
  code: string;
  data: Array<GovDeptUserPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface GovDeptPageVO {
  /** 部门id */
  uid: string;
  /** 部门编码 */
  code: string;
  /** 部门名称 */
  name: string;
  /** 是否可以删除 */
  deletable: boolean;
}

export interface PageResultListGovDeptPageVO {
  code: string;
  data: Array<GovDeptPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 用气用户分页查询 */
export interface PageGasUserQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 组织机构列表 */
  orgIds?: Array<string> | string;
  /** 查询过滤 */
  queryFilter?: PageGasUserQueryQueryFilter;
  /** 用户类型 */
  userType?: Array<PageGasUserQueryUserType>;
  /** 用气类型 */
  useType?: Array<PageGasUserQueryUseType>;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 修改用气用户信息 */
export interface DetailGasUserVO {
  /** 用户名称 */
  name: string;
  /** 行政区划id */
  districtId: string;
  /** 所属燃气公司 */
  orgId: string;
  /** 用户类型 */
  userType: DetailGasUserVoUserType;
  /** 用户标签 */
  userTag: DetailGasUserVoUserTag;
  /** 用气类型 */
  useType: DetailGasUserVoUseType;
  /** 天然气户号 */
  gasUserNo: string;
  /** 地址 */
  address: string;
  /**
   * 所在小区/工商业名称
   * @minLength 0
   * @maxLength 255
   */
  location: string;
  /**
   * 楼栋
   * @minLength 0
   * @maxLength 10
   */
  buildingNo: string;
  /**
   * 楼层
   * @minLength 0
   * @maxLength 10
   */
  floor: string;
  /**
   * 房号
   * @minLength 0
   * @maxLength 10
   */
  houseNo: string;
  /**
   * 常用联系方式
   * @minLength 11
   * @maxLength 11
   */
  comContactInfo: string;
  /** 紧急联系方式 */
  emContactInfo: string;
  /** 社区/物业名称 */
  communityName: string;
  /** 社区/物业联系方式 */
  communityContactInfo: string;
  /** 用户ID */
  uid: string;
  /** 用户编号 */
  code: string;
  /** 行政区划id */
  _districtId: string;
  /** 所属燃气公司 */
  _orgId: string;
  /** 用户类型 */
  _userType: string;
  /** 用户标签 */
  _userTag: string;
  /** 用气类型 */
  _useType: string;
}

export interface PageResultListDetailGasUserVO {
  code: string;
  data: Array<DetailGasUserVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface ResultDetailGasUserVO {
  code: string;
  /** 修改用气用户信息 */
  data: DetailGasUserVO;
  message: string;
  success: boolean;
}

/** 基础数据大屏-用气用户VO */
export interface BasicScreenUserCountVO {
  /**
   * 用气用户总数
   * @format float
   */
  userTotal: number;
  /**
   * 居民天然气用户
   * @format float
   */
  jmTrqCnt: number;
  /**
   * 非居民天然气用户
   * @format float
   */
  otherTrqCnt: number;
  /**
   * 居民液化气用户
   * @format float
   */
  jmYhqCnt: number;
  /**
   * 非居民液化气气用户
   * @format float
   */
  otherYhqCnt: number;
}

export interface ResultBasicScreenUserCountVO {
  code: string;
  /** 基础数据大屏-用气用户VO */
  data: BasicScreenUserCountVO;
  message: string;
  success: boolean;
}

export interface GasSupplySumVO {
  /**
   * 昨日供气总量(万立方米)
   * @format double
   */
  sumYda: number;
  /**
   * 昨日压减气量(万立方米)
   * @format double
   */
  decrSumYda: number;
  /**
   * 昨日停供用户数(户)
   * @format int32
   */
  stopSumYda: number;
  /**
   * 昨日限供用户数(户)
   * @format int32
   */
  limitSumYda: number;
  /**
   * 本年累计供气总量(万立方米)
   * @format double
   */
  sumYear: number;
}

export interface ResultGasSupplySumVO {
  code: string;
  data: GasSupplySumVO;
  message: string;
  success: boolean;
}

export interface GasSupplyQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /**
   * 用气供气日期开始
   * @format date
   * @pattern yyyy-MM-dd
   */
  startTime?: string;
  /**
   * 用气供气日期结束
   * @format date
   * @pattern yyyy-MM-dd
   */
  endTime?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface GasSupplyPageVO {
  uid: string;
  /**
   * 供气用气日期
   * @format date
   */
  supplyDate: string;
  /** 所属燃气公司 */
  orgId: string;
  /**
   * 门站日合同量（万立方米）
   * @format double
   */
  planSum: number;
  /**
   * 门站合同落实量（万立方米）
   * @format double
   */
  actualSum: number;
  /**
   * 日供气总量（万立方米）
   * @format double
   */
  supplySum: number;
  /**
   * 日压减气量（万立方米）
   * @format double
   */
  decrSum: number;
  /**
   * 日停供用户数量（户）
   * @format int32
   */
  stopSupplyCnt: number;
  /**
   * 日限供用户数量（户）
   * @format int32
   */
  limitSupplyCnt: number;
  /** 上报人 */
  reportBy: string;
  /**
   * 上报时间
   * @format date-time
   */
  reportTime: string;
  /** 所属燃气公司 */
  _orgId: string;
}

export interface PageResultListGasSupplyPageVO {
  code: string;
  data: Array<GasSupplyPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface GasStationQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  stationType?: string;
  gasType?: GasStationQueryGasType;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface GasStationSumVO {
  /**
   * 场站总数
   * @format int32
   */
  total: number;
  /**
   * 门站个数
   * @format int32
   */
  gateStnCnt: number;
  /**
   * 储配站个数
   * @format int32
   */
  storageStnCnt: number;
  /**
   * 调压站个数
   * @format int32
   */
  regulatorStnCnt: number;
  /**
   * 汽车加气站个数
   * @format int32
   */
  carStnCnt: number;
}

export interface ResultGasStationSumVO {
  code: string;
  data: GasStationSumVO;
  message: string;
  success: boolean;
}

export interface GasStationPageVO {
  uid: string;
  /** 场站编号 */
  stationId: string;
  /** 所属燃气公司 */
  orgId: string;
  /** 场站名称 */
  stationName: string;
  /** 场站类型 */
  stationType: GasStationPageVoStationType;
  /** 所属区域 */
  districtId: string;
  /** 场站地址 */
  address: string;
  /** 日最大供气量（万立方） */
  gasSupplyMax: string;
  /** 经度 */
  longitude: string;
  /** 纬度 */
  latitude: string;
  /** 设计储气能力（万立方） */
  gasCapacityDesign: string;
  /** 所属燃气公司 */
  _orgId: string;
  /** 场站类型 */
  _stationType: string;
  /** 所属区域 */
  _districtId: string;
}

export interface PageResultListGasStationPageVO {
  code: string;
  data: Array<GasStationPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface ResultListVehicleMapInfoVO {
  code: string;
  data: Array<VehicleMapInfoVO>;
  message: string;
  success: boolean;
}

/** 车辆GIS撒点信息 */
export interface VehicleMapInfoVO {
  vehicleId: string;
  vehicleNo: string;
  vehicleCatalog: string;
  longitude: string;
  latitude: string;
}

export interface ResultListMapStringString {
  code: string;
  data: Array<Record<string, any>>;
  message: string;
  success: boolean;
}

export interface ResultListMapObjectObject {
  code: string;
  data: Array<Record<string, any>>;
  message: string;
  success: boolean;
}

/** 场站资质证照信息 */
export interface LicenseInfoDTO {
  /** 证照编号 */
  licenseNo?: string;
  /** 证照类型 */
  licenseType?: string;
  /**
   * 签发日期
   * @format date
   */
  signedDate?: string;
  /**
   * 过期日期
   * @format date
   */
  expiredDate?: string;
  /** 证照照片 */
  licensePic?: string;
}

export interface ResultStationInfoDTO {
  code: string;
  /** 场站信息 */
  data: StationInfoDTO;
  message: string;
  success: boolean;
}

/** 场站基础信息 */
export interface StationBaseInfo {
  /** 场站编号 */
  stationId?: string;
  /** 场站名称 */
  stationName?: string;
  /** 所属燃气公司 */
  orgId?: string;
  /** 行政区划 */
  districtId?: string;
  /** 场站地址 */
  address?: string;
  /** 场站分类 */
  stationCatalog?: string;
  /** 场站类型 */
  stationType?: string;
  /** 负责人 */
  leaderName?: string;
  /** 营运状态 */
  serviceState?: string;
  /** 营业执照编号 */
  licenseNo?: string;
  /**
   * 营业执照签发日期
   * @format date
   */
  licenseSignedDate?: string;
  /**
   * 营业执照过期日期
   * @format date
   */
  licenseExpiredDate?: string;
  /** 燃气经营许可证编号 */
  gasLicenseNo?: string;
  /**
   * 燃气经营许可证签发日期
   * @format date
   */
  gasLicenseSignedDate?: string;
  /**
   * 燃气经营许可证过期日期
   * @format date
   */
  gasLicenseExpiredDate?: string;
  /** 充装许可证编号 */
  fillingLicenseNo?: string;
  /**
   * 充装许可证签发日期
   * @format date
   */
  fillingLicenseSignedDate?: string;
  /**
   * 充装许可证过期日期
   * @format date
   */
  fillingLicenseExpiredDate?: string;
  /** 营业执照照片地址 */
  licensePic?: string;
  /** 燃气经营许可证照片地址 */
  gasLicensePic?: string;
  /** 充装许可证照片地址 */
  fillingLicensePic?: string;
  /** 危化品经营许可证照片地址 */
  dangerLicensePic?: string;
  /** 经度 */
  longitude?: string;
  /** 纬度 */
  latitude?: string;
}

/** 场站信息 */
export interface StationInfoDTO {
  /** 场站基础信息 */
  baseInfo: StationBaseInfo;
  /** 资质证照信息 */
  licenseInfo: Array<LicenseInfoDTO>;
  /** 视频监控信息 */
  videoInfo: Array<StationVideoInfo>;
}

/** 场站监控点位信息 */
export interface StationVideoInfo {
  /** 视频点名称 */
  videoName?: string;
  /** 视频点编号 */
  videoCode?: string;
  /** 视频在线状态 */
  onlineState?: string;
  /** 视频监控播放地址 */
  videoUrl?: string;
  /** 视频点地址 */
  videoAddr?: string;
}

export interface ResultListStationMapInfoVO {
  code: string;
  data: Array<StationMapInfoVO>;
  message: string;
  success: boolean;
}

/** 场站GIS撒点信息 */
export interface StationMapInfoVO {
  stationId: string;
  stationName: string;
  stationCatalog: string;
  stationType: string;
  longitude: string;
  latitude: string;
}

/** 各维度最高分 */
export interface EnterpriseScoreInfoDTO {
  /** 企业id */
  orgId?: string;
  /** 企业类型 */
  enterpriseType?: string;
  /** 分类 */
  category?: string;
  /**
   * 分数
   * @format int32
   */
  score?: number;
}

/** 各企业评分列表 */
export interface EnterpriseScoringValueDTO {
  orgId?: string;
  /** 行业类型 */
  enterpriseType?: string;
  /**
   * 总得分
   * @format int32
   */
  totalScore?: number;
  /**
   * 级别
   * @example "优,良,差,未评价"
   */
  scoringLevel?: string;
  /** 分类评分 */
  categories?: Array<PairStringInteger>;
}

export interface EnterpriseScoringViewVO {
  /** 行业平均分 */
  avgScore: Record<string, any>;
  /** 各维度最高分 */
  maxScore: Record<string, any>;
  /** 各企业评分列表 */
  rankList: Array<EnterpriseScoringValueDTO>;
}

/** 分类评分 */
export interface PairStringInteger {
  key?: string;
  /** @format int32 */
  value?: number;
}

export interface ResultEnterpriseScoringViewVO {
  code: string;
  data: EnterpriseScoringViewVO;
  message: string;
  success: boolean;
}

export interface ResultListEnterpriseScoringItemDTO {
  code: string;
  data: Array<EnterpriseScoringItemDTO>;
  message: string;
  success: boolean;
}

export interface Coordinate {
  lng: string;
  lat: string;
}

export interface ResultListCoordinate {
  code: string;
  data: Array<Coordinate>;
  message: string;
  success: boolean;
}

export interface LinePatrolSumVO {
  /**
   * 巡线计划总数
   * @format int64
   */
  total: number;
  /**
   * 已完成巡线计划数
   * @format int64
   */
  completeCnt: number;
  /**
   * 超期未完成巡线计划数
   * @format int64
   */
  timeoutCnt: number;
  /**
   * 未完成巡线计划数
   * @format int64
   */
  unCompleteCnt: number;
}

export interface ResultLinePatrolSumVO {
  code: string;
  data: LinePatrolSumVO;
  message: string;
  success: boolean;
}

export interface LinePatrolQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 巡线计划名称 */
  planName?: string;
  /**
   * 巡线计划开始日期
   * @format date
   */
  planDate?: string;
  /** 巡线类型 */
  patrolType?: string;
  /** 管道压力 */
  linePressure?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface LinePatrolPageVO {
  id: string;
  /** 巡线计划名称 */
  planName: string;
  /**
   * 巡线计划开始日期
   * @format date
   */
  startDate: string;
  /**
   * 巡线计划结束日期
   * @format date
   */
  endDate: string;
  /** 所属区域 */
  districtId: string;
  /** 所属燃气公司 */
  orgId: string;
  /** 巡线类型 */
  patrolType: string;
  /** 管道压力 */
  linePressure: string;
  /**
   * 计划巡线公里数
   * @format int32
   */
  lineKm: number;
  /** 巡检频次 */
  patrolFreq: string;
  /**
   * 巡线完成率
   * @format double
   */
  completeRate: number;
  /** 巡线记录附件 */
  fileId: string;
  /**
   * 巡线计划更新时间
   * @format date-time
   */
  updateTime: string;
  /** 催办状态 */
  superviseState: boolean;
  /** 所属区域 */
  _districtId: string;
  /** 所属燃气公司 */
  _orgId: string;
}

export interface PageResultListLinePatrolPageVO {
  code: string;
  data: Array<LinePatrolPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 企业安全负责人列表 */
export interface EnterpriseCsoDTO {
  /** 安全负责人姓名 */
  name?: string;
  /** 职位 */
  jobTitle?: string;
  /** 联系方式 */
  phone?: string;
}

export interface EnterpriseDetailVO {
  /** 企业名称 */
  name: string;
  /** 所属区域 */
  belongArea: string;
  /** 经营区域 */
  businessArea: Array<string> | string;
  /** 企业地址 */
  address: string;
  /** 经营范围(类别) */
  businessScope: Array<EnterpriseDetailVoBusinessScope>;
  /** 企业负责人姓名 */
  masterName: string;
  /** 企业负责人手机号 */
  masterPhone: string;
  /** 营业执照编号 */
  licenseNumber: string;
  /**
   * 营业执照有效期
   * @format date
   */
  licenseExpiryDate: string;
  /** 营业执照照片 */
  licenseImgs: Array<FileObj>;
  /** 经营许可证编号 */
  permitsNumber: string;
  /**
   * 经营许可证有效期
   * @format date
   */
  permitsExpiryDate: string;
  /** 经营许可证照片 */
  permitsImgs: Array<FileObj>;
  /** 企业照片 */
  enterpriseImgs: Array<FileObj>;
  /**
   * 员工数量
   * @format int32
   */
  employeeCount: number;
  /**
   * 拥有的窨井数量
   * @format int32
   */
  wellsCount: number;
  /**
   * 拥有的场站数量
   * @format int32
   */
  stationCount: number;
  /**
   * 拥有的液化气瓶数量
   * @format int32
   */
  gasBottleCount: number;
  /** 拥有的管线长度,km */
  pipelineLengthKm: number;
  /** 特种设备列表 */
  specialEquips: Array<SpecialEquipDTO>;
  /** 企业安全负责人列表 */
  csos: Array<EnterpriseCsoDTO>;
  /** 资质证照信息 */
  licenseInfo: Array<LicenseInfoDTO>;
}

export interface ResultEnterpriseDetailVO {
  code: string;
  data: EnterpriseDetailVO;
  message: string;
  success: boolean;
}

export interface EnterpriseSummaryVO {
  /**
   * 企业总数
   * @format int32
   */
  total: number;
  /**
   * 管道气经营企业数量
   * @format int32
   */
  pipelineGas: number;
  /**
   * 液化气经营企业数量
   * @format int32
   */
  liquefiedGas: number;
  /**
   * 汽车加气站企业数量
   * @format int32
   */
  carGas: number;
}

export interface ResultEnterpriseSummaryVO {
  code: string;
  data: EnterpriseSummaryVO;
  message: string;
  success: boolean;
}

export interface EnterpriseInfoPageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 经营区域 */
  businessArea?: Array<string> | string;
  /** 经营类别 */
  businessScope?: Array<EnterpriseInfoPageQueryBusinessScope>;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface EnterpriseInfoPageVO {
  /** 主键 */
  uid: string;
  /** 企业名称 */
  name: string;
  /** 所属区域 */
  belongArea: string;
  /** 经营区域 */
  businessArea: Array<string> | string;
  /** 地址 */
  address: string;
  /** 经营范围 */
  businessScope: Array<EnterpriseInfoPageVoBusinessScope>;
  /** 企业负责人姓名 */
  masterName: string;
  /** 企业负责人手机号 */
  masterPhone: string;
  /** 营业执照编号 */
  licenseNumber: string;
  /**
   * 营业执照有效期
   * @format date
   */
  licenseExpiryDate: string;
  /** 经营许可证编号 */
  permitsNumber: string;
  /**
   * 经营许可证有效期
   * @format date
   */
  permitsExpiryDate: string;
  /** 所属区域 */
  districtId: string;
  /**
   * 员工数量
   * @format int32
   */
  employeeCount: number;
  /**
   * 特种设备数量
   * @format int32
   */
  specialEquipmentCount: number;
  longitude: string;
  latitude: string;
  /** 所属区域 */
  _districtId: string;
}

export interface PageResultListEnterpriseInfoPageVO {
  code: string;
  data: Array<EnterpriseInfoPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 企业GIS撒点信息 */
export interface EnterpriseMapInfoVO {
  /** 企业编号 */
  id: string;
  /** 企业名称 */
  name: string;
  /** 经营类别 */
  type: EnterpriseMapInfoVoType;
  longitude: string;
  latitude: string;
  /** 经营类别 */
  _type: string;
}

export interface ResultListEnterpriseMapInfoVO {
  code: string;
  data: Array<EnterpriseMapInfoVO>;
  message: string;
  success: boolean;
}

/** 企业相关的设施和应急资源统计 */
export interface EnterpriseDevResInfoVO {
  /** 企业编号 */
  id: string;
  /** 企业名称 */
  name: string;
  /** 经营类别 */
  type: EnterpriseDevResInfoVoType;
  /**
   * 燃气管网公里数
   * @format double
   */
  gasPipeLen: number;
  /**
   * 燃气场站数量
   * @format int32
   */
  gasStationCnt: number;
  /**
   * 液化气瓶数量
   * @format int32
   */
  bottleCnt: number;
  /**
   * 配送车辆数量
   * @format int32
   */
  deliveryVehicleCnt: number;
  /**
   * 液化气场站数量
   * @format int32
   */
  lngStationCnt: number;
  /**
   * 危险品运输车辆数量
   * @format int32
   */
  dangerVehicleCnt: number;
  /**
   * 转运车辆数量
   * @format int32
   */
  transferVehicleCnt: number;
  /**
   * 应急资源数量
   * @format int32
   */
  emerResCnt: number;
  /**
   * 应急队伍数量
   * @format int32
   */
  emerTeamCnt: number;
  /** 经营类别 */
  _type: string;
}

export interface ResultEnterpriseDevResInfoVO {
  code: string;
  /** 企业相关的设施和应急资源统计 */
  data: EnterpriseDevResInfoVO;
  message: string;
  success: boolean;
}

export interface ResultSecurityCheckSumVO {
  code: string;
  data: SecurityCheckSumVO;
  message: string;
  success: boolean;
}

export interface SecurityCheckSumVO {
  /**
   * 安检年度
   * @format int32
   */
  planYear: number;
  /** 安检批次 */
  planBatch: string;
  /** 所属燃气公司 */
  orgId: string;
  /**
   * 三年未安检用户数
   * @format int64
   */
  unCheckUserCnt3Year: number;
  /**
   * 应安检用户数
   * @format int64
   */
  userCnt: number;
  /**
   * 未安检用户数
   * @format int64
   */
  unCheckUserCnt: number;
  /**
   * 已安检用户数
   * @format int64
   */
  checkedUserCnt: number;
  /** 所属燃气公司 */
  _orgId: string;
}

export interface SecurityCheckRecQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /**
   * 关联企业安检计划id
   * @format int64
   */
  checkPlanId: number;
  /** 用户类型 */
  userType?: SecurityCheckRecQueryUserType;
  /**
   * 安检结果
   * @format int32
   */
  checkState?: number;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface PageResultListSecurityCheckRecPageVO {
  code: string;
  data: Array<SecurityCheckRecPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface SecurityCheckRecPageVO {
  /** 用户id */
  id: string;
  /**
   * 安检年度
   * @format int32
   */
  planYear: number;
  /** 安检批次 */
  planBatch: string;
  /**
   * 安检计划开始日期
   * @format date
   */
  startDate: string;
  /**
   * 安检计划结束日期
   * @format date
   */
  endDate: string;
  /** 所属燃气公司 */
  orgId: string;
  /** 行政区划 */
  districtId: string;
  /** 用户号 */
  gasUserNo: string;
  /** 用户类型 */
  userType: SecurityCheckRecPageVoUserType;
  /** 用户地址 */
  address: string;
  /** 所在小区/工商业名称 */
  location: string;
  /**
   * 入户安检时间
   * @format date
   */
  checkDate: string;
  /** 排查结果 */
  checkResult: SecurityCheckRecPageVoCheckResult;
  /**
   * 最后一次安检时间
   * @format date
   */
  lastCheckDate: string;
  /** 所属燃气公司 */
  _orgId: string;
  /** 行政区划 */
  _districtId: string;
  /** 用户类型 */
  _userType: string;
  /** 排查结果 */
  _checkResult: string;
}

export interface SecurityCheckQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /**
   * 安检年度
   * @format int32
   */
  planYear?: number;
  /** 安检批次 */
  planBatch?: string;
  /** 安全监测类型 */
  planType?: SecurityCheckQueryPlanType;
  planTypeStr?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface PageResultListSecurityCheckPageVO {
  code: string;
  data: Array<SecurityCheckPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface SecurityCheckPageVO {
  id: string;
  /**
   * 安检年度
   * @format int32
   */
  planYear: number;
  /** 安检批次 */
  planBatch: string;
  /**
   * 安检计划开始日期
   * @format date
   */
  startDate: string;
  /**
   * 安检计划结束日期
   * @format date
   */
  endDate: string;
  /** 所属燃气公司 */
  orgId: string;
  /**
   * 安检进度
   * @format double
   */
  completeRate: number;
  /**
   * 计划安检用户数
   * @format int64
   */
  userCnt: number;
  /**
   * 居民用户计划安检数
   * @format int64
   */
  residentCnt: number;
  /**
   * 工商用户计划安检数
   * @format int64
   */
  businessCnt: number;
  /**
   * 居民用户已完成安检数
   * @format int64
   */
  residentCheckedCnt: number;
  /**
   * 工商用户已完成安检数
   * @format int64
   */
  businessCheckedCnt: number;
  /** 所属燃气公司 */
  _orgId: string;
}

export interface ResultSecCheckSummaryVO {
  code: string;
  data: SecCheckSummaryVO;
  message: string;
  success: boolean;
}

export interface SecCheckSummaryVO {
  /** 入户安检总体完成率 */
  rate: string;
  /**
   * 三年未入户安检的用户数量
   * @format int32
   */
  threeUnCheckedUserCnt: number;
  /**
   * 计划安检户数
   * @format int32
   */
  userCnt: number;
  /**
   * 已完成安检户数
   * @format int32
   */
  checkedCnt: number;
  /**
   * 未完成安检户数
   * @format int32
   */
  unCheckCnt: number;
  /**
   * 未完成安检户数中的 拒绝安检户数
   * @format int32
   */
  rejectCnt: number;
  /**
   * 未完成安检户数中的 到访不遇安检户数
   * @format int32
   */
  missCnt: number;
  /**
   * 未完成安检户数中的 未覆盖户数(即无检查记录的)
   * @format int32
   */
  unDo: number;
}

export interface EndUserSecCheckSummaryDTO {
  /** 关联企业 */
  orgId?: string;
  /** 安检批次 */
  planBatch?: string;
  /**
   * 居民用户-计划安检用户数
   * @format int32
   */
  residentCnt?: number;
  /**
   * 居民用户-已完成安检数
   * @format int32
   */
  residentCheckedCnt?: number;
  /** 居民用户-安检完成率 */
  residentCompleteRate?: string;
  /**
   * 居民用户-未安检数
   * @format int32
   */
  residentUndoCnt?: number;
  /**
   * 居民用户-到访不遇数
   * @format int32
   */
  residentMissCnt?: number;
  /**
   * 居民用户-拒绝安检数
   * @format int32
   */
  residentRejectCnt?: number;
  /**
   * 居民用户-三年未检数
   * @format int32
   */
  residentThreeNotCheckCnt?: number;
  /**
   * 工商业用户-计划安检用户数
   * @format int32
   */
  businessCnt?: number;
  /**
   * 工商业用户-已完成安检数
   * @format int32
   */
  busCheckedCnt?: number;
  /** 工商业用户-安检完成率 */
  busCompleteRate?: string;
  /**
   * 工商业用户-未检用户数
   * @format int32
   */
  busUndoCnt?: number;
  /**
   * 工商业用户-到访不遇数
   * @format int32
   */
  busMissCnt?: number;
  /**
   * 工商业用户-拒绝安检数
   * @format int32
   */
  busRejectCnt?: number;
  /**
   * 工商业用户-三年未检数
   * @format int32
   */
  busThreeNotCheckCnt?: number;
}

export interface EndUserSecCheckSummaryVO {
  summary: EndUserSecCheckSummaryDTO;
  list: Array<EndUserSecCheckSummaryDTO>;
}

export interface ResultEndUserSecCheckSummaryVO {
  code: string;
  data: EndUserSecCheckSummaryVO;
  message: string;
  success: boolean;
}

export interface PageResultListSecCheckThreeYearsUnCheckPageDTO {
  code: string;
  data: Array<SecCheckThreeYearsUnCheckPageDTO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface SecCheckThreeYearsUnCheckPageDTO {
  /** 户号 */
  gasUserNo: string;
  /** 用户地址 */
  address: string;
  /** 所属社区 */
  communityName: string;
  /** 所属燃气企业 */
  orgId: string;
  /**
   * 最近一次入户安检日期
   * @format date
   */
  checkDate: string;
  /** 所属燃气企业 */
  _orgId: string;
}

/** 气瓶信息 */
export interface BottleInfoVO {
  /** 气瓶编号 */
  bottleId: string;
  /** 气瓶条码 */
  labelNo: string;
  /** 二维码地址 */
  qrCode: string;
  /** 自有编码 */
  ownCode: string;
  /**
   * 规格
   * @format int32
   */
  standard: number;
  /** 出厂编码 */
  factoryCode: string;
  /**
   * 出厂日期
   * @format date
   */
  productDate: string;
  /** 制造单位 */
  manufacturer: string;
  /** 制造年月 */
  manufacturingDate: string;
  /**
   * 建档日期
   * @format date
   */
  recordDate: string;
  /** 末检年月 */
  lastTestDate: string;
  /** 下检年月 */
  nextTestDate: string;
  /**
   * 报废日期
   * @format date
   */
  scrapDate: string;
  /** 使用状态 */
  useState: string;
  /** 是否在用重瓶 */
  inHeavyBottle: boolean;
  /** 是否流转正常 */
  circulationNormal: boolean;
}

export interface ResultBottleInfoVO {
  code: string;
  /** 气瓶信息 */
  data: BottleInfoVO;
  message: string;
  success: boolean;
}

/** 气瓶GIS撒点信息 */
export interface BottleMapInfoVO {
  bottleId: string;
  longitude: string;
  latitude: string;
}

export interface ResultListBottleMapInfoVO {
  code: string;
  data: Array<BottleMapInfoVO>;
  message: string;
  success: boolean;
}

/** 燃气企业底数请求 */
export interface BaseDataRequest {
  /**
   * 企业ID
   * @format int64
   */
  enterpriseId?: number;
  /** 主类型 */
  mainType?: string;
  /** 子类型 */
  subType?: string;
  /** 子类型值 */
  subValue?: string;
  /**
   * 序号
   * @format int32
   */
  sort?: number;
}

export interface ResultMapStringListListMapStringString {
  code: string;
  data: Record<string, any>;
  message: string;
  success: boolean;
}

/** 应急预案分页查询请求 */
export interface EmresPlanRequest {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 预案类型 */
  planType?: Array<EmresPlanRequestPlanType>;
  /**
   * 预案上传时间开始
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  startTime?: string;
  /**
   * 预案上传时间结束
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  endTime?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 应急预案VO */
export interface EmresPlanVO {
  /** ID */
  uid: string;
  /** 应急预案编号 */
  planCode: string;
  /** 应急预案名称 */
  planName: string;
  /** 预案类型 */
  planType: EmresPlanVoPlanType;
  /** 行政区划 */
  districtId: string;
  /** 组织机构 */
  orgId: string;
  /** 创建人 */
  createBy: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 更新人 */
  updateBy: string;
  /**
   * 更新时间
   * @format date-time
   */
  updateTime: string;
  /** 文件id集合，多个以逗号分隔 */
  fileIds: string;
  /** 应急预案历史变更记录 */
  historyDetail: Array<PlanHistory>;
  /** 预案类型 */
  _planType: string;
  /** 行政区划 */
  _districtId: string;
  /** 组织机构 */
  _orgId: string;
}

export interface PageResultListEmresPlanVO {
  code: string;
  data: Array<EmresPlanVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 应急预案历史变更记录VO */
export interface PlanHistory {
  /** 应急预案编号 */
  planCode?: string;
  /** 更新原因 */
  updateReason?: string;
  /** 更新人 */
  createBy?: string;
  /**
   * 更新时间
   * @format date-time
   */
  createTime?: string;
  /** 文件id集合，多个以逗号分隔 */
  fileIds?: string;
}

/** 实时监测分页信息VO */
export interface EmresPlanSummaryVO {
  /**
   * 应急预案总数
   * @format int64
   */
  total: number;
  /**
   * 综合应急预案数
   * @format int64
   */
  zhCnt: number;
  /**
   * 专项应急预案数
   * @format int64
   */
  zxCnt: number;
  /**
   * 现场处置应急预案数
   * @format int64
   */
  xcczCnt: number;
  /**
   * 其他类应急预案数
   * @format int64
   */
  otherCnt: number;
}

export interface ResultEmresPlanSummaryVO {
  code: string;
  /** 实时监测分页信息VO */
  data: EmresPlanSummaryVO;
  message: string;
  success: boolean;
}

export interface ResultEmresPlanVO {
  code: string;
  /** 应急预案VO */
  data: EmresPlanVO;
  message: string;
  success: boolean;
}

export interface ResultListDistrictVO {
  code: string;
  data: Array<DistrictVO>;
  message: string;
  success: boolean;
}

export interface ResultMapStringListDictionaryItem {
  code: string;
  data: Record<string, any>;
  message: string;
  success: boolean;
}

/** 燃气危险源详情信息 */
export interface DangerDetailVO {
  /** 主键 */
  cmKid: string;
  /** 危险源编号 */
  dangerCode: string;
  /**  危险源名称 */
  name: string;
  /**  危险源分类 */
  type: string;
  /** 特征简述 */
  hazardFeature: string;
  /** 是否重大危险源 */
  flgMajor: string;
  /** 是否重大危险源 */
  flgChemical: string;
  /** 化学工艺 */
  flgChemiTech: string;
  /** 所属区域 */
  cmRegflag: string;
  /** 详细地址 */
  address: string;
  /** 风险等级 */
  riskLevel: string;
  /** 风险行业 */
  riskIndustry: string;
  /** 风险描述 */
  riskDesc: string;
  /** 影响范围 */
  influenceScope: string;
  /** 影响人员 */
  influencePersons: string;
  /** 社会影响 */
  influenceSociety: string;
  /** 影响环境 */
  influenceEnv: string;
  /** 财产损失 */
  influenceProperty: string;
  /** 所属单位 */
  belongUnit: string;
  /** 负责人 */
  director: string;
  /** 负责人电话 */
  directorPhone: string;
  /** 监督单位 */
  superviseUnit: string;
  /** 填表负责人 */
  filledPerson: string;
  /** 填表负责人 */
  filledPhone: string;
  /**
   * 填表日期
   * @format date
   */
  filledDate: string;
  /** 经度 */
  longitude: number;
  /**  纬度 */
  latitude: number;
  /**
   * 创建时间
   * @format date-time
   */
  cmAddtime: string;
  /**
   * 修改时间
   * @format date-time
   */
  cmUptime: string;
  /** 创建人 */
  cmCreator: string;
  /** 修改人 */
  cmModifier: string;
  /** 备注 */
  remake: string;
  /** 地理坐标  有地理坐标的数据增加 其他的删除 */
  cmGeom: string;
}

export interface ResultDangerDetailVO {
  code: string;
  /** 燃气危险源详情信息 */
  data: DangerDetailVO;
  message: string;
  success: boolean;
}

/** 隐患清单 */
export interface BsEnterpriseHidangerHandleDTO {
  /**
   * 隐患总数
   * @format int32
   */
  total: number;
  /**
   * 已整改个数
   * @format int32
   */
  handledCnt: number;
  /**
   * 整改中个数
   * @format int32
   */
  handlingCnt: number;
  /**
   * 未整改个数
   * @format int32
   */
  unHandledCnt: number;
  /** 整改率,百分比,前端拼接个百分号就行 */
  handleRate: string;
  /** 所属企业 */
  orgId: string;
  /** 所属企业 */
  _orgId: string;
}

export interface BsPipeGasHidangerSummaryVO {
  /**
   * 隐患总数
   * @format int32
   */
  total: number;
  /**
   * 已整改数量
   * @format int32
   */
  handled: number;
  /**
   * 未整改数量
   * @format int32
   */
  unHandled: number;
  /** 隐患清单 */
  rankList: Array<BsEnterpriseHidangerHandleDTO>;
}

export interface ResultBsPipeGasHidangerSummaryVO {
  code: string;
  data: BsPipeGasHidangerSummaryVO;
  message: string;
  success: boolean;
}

/** 企业安检 */
export interface ComSupPipeGasDTO {
  /**
   * 检查计划数量
   * @format int32
   */
  planCnt?: number;
  /**
   * 检查对象/企业数量
   * @format int32
   */
  objectCnt?: number;
  /**
   * 隐患数量
   * @format int32
   */
  dangerCnt?: number;
}

/** 管道气综合监管-安全检查 */
export interface ComSupSafeCheckVO {
  /** 企业安检 */
  govCheck: ComSupPipeGasDTO;
  /** 企业安检 */
  enterpriseCheck: ComSupPipeGasDTO;
  /**
   * 三方检测评估,管网公里
   * @format int32
   */
  thirdPipeKm: number;
  /**
   * 三方检测评估,场站评估
   * @format int32
   */
  thirdStationCnt: number;
}

export interface ResultComSupSafeCheckVO {
  code: string;
  /** 管道气综合监管-安全检查 */
  data: ComSupSafeCheckVO;
  message: string;
  success: boolean;
}

export interface ResultListBsEnterpriseHidangerHandleDTO {
  code: string;
  data: Array<BsEnterpriseHidangerHandleDTO>;
  message: string;
  success: boolean;
}

export interface ComSupLgEnterpriseDTO {
  /** 所属企业 */
  orgId: string;
  /** 隐患类型统计 */
  items: Array<Item>;
  /** 所属企业 */
  _orgId: string;
}

export interface ComSupLgEnterpriseVO {
  /**
   * 总数
   * @format int32
   */
  total: number;
  /**
   * 未整改数量
   * @format int32
   */
  unHandledCnt: number;
  /**
   * 整改中数量
   * @format int32
   */
  handlingCnt: number;
  /**
   * 已整改数量
   * @format int32
   */
  handledCnt: number;
  handledItem: Array<ComSupLgEnterpriseDTO>;
  unHandledItem: Array<ComSupLgEnterpriseDTO>;
  handedRate: string;
  unHandledRate: string;
}

/** 隐患类型统计 */
export interface Item {
  /** 隐患主体类型 */
  subjectType?: string;
  /**
   * 数量
   * @format int32
   */
  count?: number;
}

export interface ResultComSupLgEnterpriseVO {
  code: string;
  data: ComSupLgEnterpriseVO;
  message: string;
  success: boolean;
}

export interface ResultListComSupLgEnterpriseDTO {
  code: string;
  data: Array<ComSupLgEnterpriseDTO>;
  message: string;
  success: boolean;
}

/** 液化气综合监管-隐患排查 */
export interface ComSupLGTypeLevelCountDTO {
  /** 隐患主体 */
  subjectType?: string;
  /**
   * 隐患总数
   * @format int32
   */
  total?: number;
  /**
   * 重大隐患数
   * @format int32
   */
  zdCnt?: number;
  /**
   * 较大隐患数
   * @format int32
   */
  jdCnt?: number;
  /**
   * 一般隐患数
   * @format int32
   */
  ybCnt?: number;
}

export interface ComSupSubjectTypeVO {
  /** @format int32 */
  total: number;
  items: Array<ComSupLGTypeLevelCountDTO>;
}

export interface ResultComSupSubjectTypeVO {
  code: string;
  data: ComSupSubjectTypeVO;
  message: string;
  success: boolean;
}

export interface ResultListObject {
  code: string;
  data: Array<object>;
  message: string;
  success: boolean;
}

/** pc-终端用户-隐患统计 */
export interface EndUserHidangerSummary {
  /** 按隐患状态统计 */
  stateCnt: HidangerStateDTO;
  /** 按隐患趋势统计 */
  trendCnt: Array<HidangerTrendDTO>;
  /** 按隐患类型统计 */
  typeCnt: Array<HidangerTypeDTO>;
}

/** 按隐患状态统计 */
export interface HidangerStateDTO {
  /**
   * 终端用户-隐患总数
   * @format int32
   */
  totalCnt: number;
  /**
   * 终端用户-未整改隐患数量
   * @format int32
   */
  unHandledCnt: number;
  /**
   * 终端用户-整改中隐患数量
   * @format int32
   */
  handlingCnt: number;
  /**
   * 终端用户-已整改隐患数量
   * @format int32
   */
  handledCnt: number;
  /**
   * 终端用户-超期未整改隐患数量
   * @format int32
   */
  overDueCount: number;
  /** 终端用户 隐患整改率 */
  handleRate: string;
}

/** 按隐患趋势统计 */
export interface HidangerTrendDTO {
  date?: string;
  /** @format int32 */
  orgCnt?: number;
  /** @format int32 */
  govCnt?: number;
}

/** 按隐患类型统计 */
export interface HidangerTypeDTO {
  /** 终端用户隐患类型 */
  type?: string;
  /**
   * 终端用户隐患数量
   * @format int32
   */
  cnt?: number;
}

export interface ResultEndUserHidangerSummary {
  code: string;
  /** pc-终端用户-隐患统计 */
  data: EndUserHidangerSummary;
  message: string;
  success: boolean;
}

/** 公告信息查询 */
export interface BulletinQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** @uniqueItems true */
  districtIds?: Array<string> | string;
  /** 公告标题 */
  bulletinTitle?: string;
  /** 公告类型 */
  bulletinType?: Array<BulletinQueryBulletinType>;
  /**
   * 发布时间开始
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  startTime?: string;
  /**
   * 发布时间结束
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  endTime?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 公告信息VO */
export interface BulletinVO {
  /** id */
  uid: string;
  /** 公告类型 */
  bulletinType: BulletinVoBulletinType;
  /** 公告标题 */
  bulletinTitle: string;
  /** 公告正文 */
  bulletinText: string;
  /**
   * 发布时间
   * @format date-time
   */
  publishTime: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 创建人 */
  createBy: string;
  /**
   * 最后更新时间
   * @format date-time
   */
  lastUpdateTime: string;
  /** 更新人 */
  lastUpdateBy: string;
  /**
   * 通知日期
   * @format date
   */
  noticeTime: string;
  /** 主管单位 */
  managerBy: string;
  /** 通知公司 */
  noticeCompany: string;
  fileId: string;
  /** 公告类型 */
  _bulletinType: string;
}

export interface PageResultListBulletinVO {
  code: string;
  data: Array<BulletinVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 公告信息VO */
export interface BulletinDetailVO {
  /**
   * id
   * @format int64
   */
  uid: number;
  /** 公告类型 */
  bulletinType: BulletinDetailVoBulletinType;
  /** 公告标题 */
  bulletinTitle: string;
  /** 公告正文 */
  bulletinText: string;
  /**
   * 发布时间
   * @format date-time
   */
  publishTime: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime: string;
  /** 创建人 */
  createBy: string;
  /**
   * 最后更新时间
   * @format date-time
   */
  lastUpdateTime: string;
  /** 更新人 */
  lastUpdateBy: string;
  /** 主管单位 */
  managerBy: string;
  fileId: string;
  /** 消息推送记录 */
  urgeMsgVOList: Array<BulletinMsgHisDTO>;
  /** 公告类型 */
  _bulletinType: string;
}

/** 消息推送查询VO */
export interface BulletinMsgHisDTO {
  /** 催办消息记录id */
  uid?: string;
  /** 消息标识：隐患编号 或 报警编号等关键标识 */
  msgFlag?: string;
  /** 消息标题 */
  title?: string;
  /** 消息内容 */
  content?: string;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: string;
  /** 创建人 */
  createBy?: string;
  /**
   * 最后更新时间
   * @format date-time
   */
  lastUpdateTime?: string;
  /** 消息接收人 */
  recipient?: string;
  /** 消息接收人名称 */
  recipientName?: string;
  /** 消息接收人电话 */
  recipientPhone?: string;
  /** 通知状态，未接通/已送达等 */
  sendStatus?: BulletinMsgHisDtoSendStatus;
  /**
   * 推送状态变更时间
   * @format date-time
   */
  sendTime?: string;
  /** 消息接收人单位 */
  recipientUnit?: string;
  /** 主管单位 */
  masterUnit?: string;
}

export interface ResultBulletinDetailVO {
  code: string;
  /** 公告信息VO */
  data: BulletinDetailVO;
  message: string;
  success: boolean;
}

/** 公告信息统计 */
export interface BulletinCountVO {
  /**
   * 公告总数
   * @format int32
   */
  total: number;
  /**
   * 法律法规
   * @format int32
   */
  lrCnt: number;
  /**
   * 政策文件
   * @format int32
   */
  pdCnt: number;
  /**
   * 通知公告
   * @format int32
   */
  naCnt: number;
}

export interface ResultBulletinCountVO {
  code: string;
  /** 公告信息统计 */
  data: BulletinCountVO;
  message: string;
  success: boolean;
}

/** 基础统计概览 */
export interface BaseOverallVO {
  /**
   * 燃气企业总数(家)
   * @format int32
   */
  entCnt: number;
  /** 燃气管网总长度(公里) */
  pipeLen: number;
  /** 液化气瓶总数(万个) */
  botCnt: number;
  /**
   * 场站总数(个)
   * @format int32
   */
  stnCnt: number;
  /** 用气用户总数(万户) */
  userCnt: number;
  /**
   * 从业人员总数(人)
   * @format int32
   */
  staffCnt: number;
}

export interface ResultBaseOverallVO {
  code: string;
  /** 基础统计概览 */
  data: BaseOverallVO;
  message: string;
  success: boolean;
}

/** 管道气基础统计概览 */
export interface BaseNgOverallVO {
  /**
   * 管道气企业总数(家)
   * @format int32
   */
  entCnt: number;
  /** 燃气管网总长度(公里) */
  pipeLen: number;
  /**
   * 天然气场站总数(个)
   * @format int32
   */
  stnCnt: number;
  /** 用气用户总数(万户) */
  userCnt: number;
  /**
   * 从业人员总数(人)
   * @format int32
   */
  staffCnt: number;
}

export interface ResultBaseNgOverallVO {
  code: string;
  /** 管道气基础统计概览 */
  data: BaseNgOverallVO;
  message: string;
  success: boolean;
}

/** 燃气供气信息统计 */
export interface BaseGasSupplyVO {
  /**
   * 全年累计销量(天然气-万立方米/液化气-吨)
   * @format int32
   */
  total: number;
  /**
   * 今日采购量(万立方)/今日充装(吨)
   * @format int32
   */
  todaySupply: number;
  /**
   * 今日使用量(万立方)/今日交付(吨)
   * @format int32
   */
  todayUsed: number;
}

export interface ResultBaseGasSupplyVO {
  code: string;
  /** 燃气供气信息统计 */
  data: BaseGasSupplyVO;
  message: string;
  success: boolean;
}

/** 场站统计概览 */
export interface BaseStnOverallVO {
  /**
   * 场站总数(个)
   * @format int32
   */
  stnCnt: number;
  /** 场站分类统计(座) */
  categories: Array<OverallItemVO>;
}

export interface ResultBaseStnOverallVO {
  code: string;
  /** 场站统计概览 */
  data: BaseStnOverallVO;
  message: string;
  success: boolean;
}

/** 燃气管网统计概览 */
export interface BasePipeOverallVO {
  /** 燃气管网总长度(公里) */
  pipeLen: number;
  /** 燃气管网材质统计(公里) */
  materials: Array<OverallItemVO>;
  /** 燃气管网管龄统计(公里) */
  ages: Array<OverallItemVO>;
  /** 材质对应管网年限 */
  materialAge: Record<string, any>;
}

export interface ResultBasePipeOverallVO {
  code: string;
  /** 燃气管网统计概览 */
  data: BasePipeOverallVO;
  message: string;
  success: boolean;
}

/** 管道气经营企业基础统计概览 */
export interface BaseEntOverallVO {
  /**
   * 企业总数(家)
   * @format int32
   */
  entCnt: number;
  /**
   * 管道天然气企业总数(家)
   * @format int32
   */
  ngEntCnt: number;
  /**
   * 汽车加气企业总数(家)
   * @format int32
   */
  lpgEntCnt: number;
  /**
   * 液化气企业总数(家)
   * @format int32
   */
  lngEntCnt: number;
  /**
   * 从业人员总数(人)
   * @format int32
   */
  staffCnt: number;
}

export interface ResultBaseEntOverallVO {
  code: string;
  /** 管道气经营企业基础统计概览 */
  data: BaseEntOverallVO;
  message: string;
  success: boolean;
}

/** 特种设备统计概览 */
export interface BaseSpecDevVO {
  /**
   * 特种设备总数(个)
   * @format int32
   */
  devCnt: number;
  /** 特种设备分类统计(个) */
  categories: Array<OverallItemVO>;
}

export interface ResultBaseSpecDevVO {
  code: string;
  /** 特种设备统计概览 */
  data: BaseSpecDevVO;
  message: string;
  success: boolean;
}

/** 液化气基础统计概览 */
export interface BaseLngOverallVO {
  /**
   * 液化气企业总数(家)
   * @format int32
   */
  entCnt: number;
  /**
   * 罐装站总数(个)
   * @format int32
   */
  gzStnCnt: number;
  /**
   * 供应站总数(个)
   * @format int32
   */
  gyStnCnt: number;
  /**
   * 危运车辆总数(辆)
   * @format int32
   */
  dangerVehicleCnt: number;
  /**
   * 配送车辆总数(辆)
   * @format int32
   */
  deliveryVehicleCnt: number;
  /** 用气用户总数(户) */
  userCnt: number;
  /**
   * 送气工总数(人)
   * @format int32
   */
  deliveryStaffCnt: number;
  /**
   * 充装工总数(人)
   * @format int32
   */
  fillStaffCnt: number;
  /**
   * 其他工种总数(人)
   * @format int32
   */
  otherStaffCnt: number;
}

export interface ResultBaseLngOverallVO {
  code: string;
  /** 液化气基础统计概览 */
  data: BaseLngOverallVO;
  message: string;
  success: boolean;
}

/** 液化气钢瓶统计概览 */
export interface BaseBotOverallVO {
  /** 钢瓶总数(万个) */
  botCnt: number;
  /** 企业钢瓶统计(万个) */
  enterprises: Array<OverallItemVO>;
  /** 钢瓶重量规格统计(万个) */
  standards: Array<OverallItemVO>;
}

export interface ResultBaseBotOverallVO {
  code: string;
  /** 液化气钢瓶统计概览 */
  data: BaseBotOverallVO;
  message: string;
  success: boolean;
}

export interface BsHidangerDTO {
  uid: string;
  /** 检查对象名称 */
  targetName: string;
  /** 检查对象类型 */
  targetType: string;
  /** 检查对象地址 */
  address: string;
  /** 具体问题 */
  content: string;
  /** 隐患第一类 */
  l1: string;
  /** 隐患第二类 */
  l2: string;
  /** 隐患第四类 */
  l4: string;
  /**
   * 检查时间
   * @format date-time
   */
  checkTime: string;
  /** 隐患状态 */
  dangerState: string;
  /** 隐患来源 */
  dangerSource: BsHidangerDtoDangerSource;
  /**
   * 催办次数
   * @format int32
   */
  urgeCount: number;
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
  /** 管网长度,米 */
  length: string;
  /** 管龄,年 */
  years: string;
  /** 管网材质 */
  material: BsHidangerDtoMaterial;
  /** 隐患来源 */
  _dangerSource: string;
  /** 管网材质 */
  _material: string;
}

export interface PageResultListBsHidangerDTO {
  code: string;
  data: Array<BsHidangerDTO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface BsOldPipeConfigDTO {
  items: Array<YearlyItem>;
}

/** 各企业计划改造详情 */
export interface OrgItem {
  /** 企业名称 */
  orgName?: string;
  /**
   * 计划改造公里数
   * @format double
   */
  lengthKm?: number;
}

export interface ResultBsOldPipeConfigDTO {
  code: string;
  data: BsOldPipeConfigDTO;
  message: string;
  success: boolean;
}

export interface YearlyItem {
  /**
   * 年度
   * @format int32
   */
  yearly?: number;
  /**
   * 老旧管网总公里数
   * @format double
   */
  totalKm?: number;
  /** 各企业计划改造详情 */
  items?: Array<OrgItem>;
}

export interface BsHidangerCountItemDTO {
  /** 分类 */
  category: string;
  /**
   * 隐患总数
   * @format int32
   */
  total: number;
  /**
   * 未整改数量
   * @format int32
   */
  waitHandle: number;
  /**
   * 已整改数量
   * @format int32
   */
  handled: number;
  /** 整改率 */
  rate: string;
}

export interface ResultListBsHidangerCountItemDTO {
  code: string;
  data: Array<BsHidangerCountItemDTO>;
  message: string;
  success: boolean;
}

export interface BsHidangerHandleItemDTO {
  category: string;
  title: string;
  subTitle: string;
  /** @format int32 */
  count: number;
}

export interface ResultListBsHidangerHandleItemDTO {
  code: string;
  data: Array<BsHidangerHandleItemDTO>;
  message: string;
  success: boolean;
}

export interface BsHidangerHandleSummaryVO {
  /**
   * 隐患总数
   * @format int32
   */
  total: number;
  /**
   * 已整改数量
   * @format int32
   */
  handled: number;
  /**
   * 未整改数量
   * @format int32
   */
  waitHandle: number;
  /** 整改率 */
  rate: string;
  list: Array<BsHidangerCountItemDTO>;
}

export interface ResultBsHidangerHandleSummaryVO {
  code: string;
  data: BsHidangerHandleSummaryVO;
  message: string;
  success: boolean;
}

export interface BsHidangerCountDTO {
  /** 问题大类 */
  l1: string;
  /** 二级分类 */
  l2: string;
  /** 三级分类 */
  l3: string;
  /**
   * 隐患数量
   * @format int32
   */
  count: number;
  /** 扩展字段 */
  ext1: string;
}

export interface ResultListBsHidangerCountDTO {
  code: string;
  data: Array<BsHidangerCountDTO>;
  message: string;
  success: boolean;
}

/** 入户安检 */
export interface BsPipeGasCheckSummaryDTO {
  /** 总体完成率 */
  rate?: string;
  /**
   * 数据总量
   * @format int32
   */
  total?: number;
  /**
   * 已完成数据量
   * @format int32
   */
  done?: number;
}

export interface BsPipeGasCheckSummaryVO {
  /** 入户安检 */
  inspection: BsPipeGasCheckSummaryDTO;
  /** 入户安检 */
  indoor: BsPipeGasCheckSummaryDTO;
}

export interface ResultBsPipeGasCheckSummaryVO {
  code: string;
  data: BsPipeGasCheckSummaryVO;
  message: string;
  success: boolean;
}

/** 大屏首页-安全检查统计 */
export interface BsSafeCheckVO {
  /**
   * 全部隐患总数
   * @format int32
   */
  total: number;
  /**
   * 已整改数量
   * @format int32
   */
  handledCnt: number;
  /**
   * 未整改数量
   * @format int32
   */
  unHandledCnt: number;
  /**
   * 整改中数量
   * @format int32
   */
  handlingCnt: number;
  /**
   * 日常检查总数
   * @format int32
   */
  dailyCnt: number;
  /**
   * 日常检查-已整改数量
   * @format int32
   */
  dailyHandledCnt: number;
  /**
   * 日常检查-未整改数量
   * @format int32
   */
  dailyUnHandledCnt: number;
  /**
   * 日常检查-整改中数量
   * @format int32
   */
  dailyHandlingCnt: number;
  /**
   * 专项检查总数量
   * @format int32
   */
  speCnt: number;
  /**
   * 专项检查-已整改数量
   * @format int32
   */
  speHandledCnt: number;
  /**
   * 专项检查-未整改数量
   * @format int32
   */
  speUnhandledCnt: number;
  /**
   * 专项检查-整改中数量
   * @format int32
   */
  speHandlingCnt: number;
  /**
   * 三方评估总数
   * @format int32
   */
  thirdCnt: number;
  /**
   * 三方评估-已整改数量
   * @format int32
   */
  thirdHandledCnt: number;
  /**
   * 三方评估-未整改数量
   * @format int32
   */
  thirdUnHandledCnt: number;
  /**
   * 三方评估-整改中数量
   * @format int32
   */
  thirdHandlingCnt: number;
}

export interface ResultBsSafeCheckVO {
  code: string;
  /** 大屏首页-安全检查统计 */
  data: BsSafeCheckVO;
  message: string;
  success: boolean;
}

/** 大屏首页-管网隐患排查整改 */
export interface BsPipelineDangerTypesDTO {
  /**
   * 管网隐患总数
   * @format int32
   */
  total: number;
  /**
   * 管网隐患-已整改数量
   * @format int32
   */
  handled: number;
  /** 管网隐患-整改率-百分比 */
  rate: string;
  /** 管网隐患-隐患类型 */
  dangerType: string;
}

export interface ResultListBsPipelineDangerTypesDTO {
  code: string;
  data: Array<BsPipelineDangerTypesDTO>;
  message: string;
  success: boolean;
}

export interface BsThirdCheckSummaryVO {
  /**
   * 检查管网-公里
   * @format int32
   */
  pipeKm: number;
  /**
   * 管网隐患数量
   * @format int32
   */
  pipeDangerCnt: number;
  /**
   * 管网隐患已整改数量
   * @format int32
   */
  pipeHandledDangerCnt: number;
  /**
   * 管网隐患未整改数量
   * @format int32
   */
  pipeUnHandledDangerCnt: number;
  /**
   * 管网隐患整改中数量
   * @format int32
   */
  pipeHandlingDangerCnt: number;
  /**
   * 检查场站数量
   * @format int32
   */
  stationCnt: number;
  /**
   * 场站隐患数量
   * @format int32
   */
  stationDangerCnt: number;
  /**
   * 场站隐患已整改数量
   * @format int32
   */
  stationHandledDangerCnt: number;
  /**
   * 场站隐患未整改数量
   * @format int32
   */
  stationUnHandledDangerCnt: number;
  /**
   * 场站隐患整改中数量
   * @format int32
   */
  stationHandlingDangerCnt: number;
}

export interface ResultBsThirdCheckSummaryVO {
  code: string;
  data: BsThirdCheckSummaryVO;
  message: string;
  success: boolean;
}

export interface BsHidangerSubjectSummaryVO {
  /** 终端用户 */
  endUser: Array<BsHidangerTypeCountDTO>;
  /** 管网隐患 */
  pipeline: Array<BsHidangerTypeCountDTO>;
  /** 场站隐患 */
  station: Array<BsHidangerTypeCountDTO>;
}

/** 场站隐患 */
export interface BsHidangerTypeCountDTO {
  /** 隐患类型 */
  dangerType?: string;
  /**
   * 隐患数量
   * @format int32
   */
  count?: number;
}

export interface ResultBsHidangerSubjectSummaryVO {
  code: string;
  data: BsHidangerSubjectSummaryVO;
  message: string;
  success: boolean;
}

export interface BsGovCheckPlanDTO {
  /** 标题 */
  title?: string;
  /** 检查企业 */
  targetOrgId?: string;
  /** 安全检查形式 */
  mode?: BsGovCheckPlanDtoMode;
  /**
   * 检查时间开始
   * @format date
   */
  startDate?: string;
  /**
   * 检查时间结束
   * @format date
   */
  endDate?: string;
  /**
   * 检查隐患总数
   * @format int32
   */
  dangerCnt?: number;
  /**
   * 隐患整改单数
   * @format int32
   */
  orderCnt?: number;
}

export interface BsGovCheckPlanSummaryVO {
  /**
   * 日常检查计划数量
   * @format int32
   */
  dailyCnt: number;
  /**
   * 专项检查计划数量
   * @format int32
   */
  speCnt: number;
  /**
   * 整改单数量
   * @format int32
   */
  orderCnt: number;
  /**
   * 隐患数量
   * @format int32
   */
  dangerCnt: number;
  planList: Array<BsGovCheckPlanDTO>;
}

export interface ResultBsGovCheckPlanSummaryVO {
  code: string;
  data: BsGovCheckPlanSummaryVO;
  message: string;
  success: boolean;
}

/** 隐患排查-企业安全检查 */
export interface BsEnterpriseSafeCheckVO {
  /** 管网巡线覆盖率 */
  pipeCoverageRate: string;
  /** 入户安检 */
  pipeCount: BsHidangerStateCountDTO;
  /** 入户安检完成率 */
  indoorCoverageRate: string;
  /** 入户安检 */
  indoorCount: BsHidangerStateCountDTO;
}

/** 入户安检 */
export interface BsHidangerStateCountDTO {
  /**
   * 隐患总数
   * @format int32
   */
  total?: number;
  /**
   * 已整改数量
   * @format int32
   */
  handledCnt?: number;
  /**
   * 整改中数量
   * @format int32
   */
  handlingCnt?: number;
  /**
   * 未整改数量
   * @format int32
   */
  unHandledCnt?: number;
}

export interface ResultBsEnterpriseSafeCheckVO {
  code: string;
  /** 隐患排查-企业安全检查 */
  data: BsEnterpriseSafeCheckVO;
  message: string;
  success: boolean;
}

export interface HidangerStateQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /**
   * 统计口径: 3-本年,4-累计;默认本年
   * @format int32
   */
  cycle?: number;
  /**
   * 统计类型: 0-超期未整改,1-待整改,2-待消除,3-已消除,4-隐患总数
   * @format int32
   */
  type?: number;
  /** @format date */
  startDate?: string;
  /** @format date */
  endDate?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface HidangerStatePageDTO {
  uid: string;
  /** 隐患id */
  dangerId: string;
  /** 隐患类型 */
  dangerType: string;
  /** 风险要素等级 */
  level: HidangerStatePageDtoLevel;
  /** 隐患描述 */
  remark: string;
  /** 隐患地址 */
  address: string;
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
  /** 所属企业 */
  orgId: string;
  /** 整改状态 */
  state: string;
  get_state: string;
  /** 风险要素等级 */
  _level: string;
  /** 所属企业 */
  _orgId: string;
}

export interface PageResultListHidangerStatePageDTO {
  code: string;
  data: Array<HidangerStatePageDTO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

export interface ResultHidangerStateDTO {
  code: string;
  /** 按隐患状态统计 */
  data: HidangerStateDTO;
  message: string;
  success: boolean;
}

/** 救援人员分页查询条件 */
export interface EmresMnRetmanPageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 队伍编号 */
  orgid?: string;
  /** 队伍名称 */
  orgName?: string;
  /** 级别 */
  levelCode?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 救援人员EmresMnRetmanPageVO */
export interface EmresMnRetmanPageVO {
  /** 救援队编号 */
  orgid: string;
  /** 救援队名称 */
  orgName: string;
  /** 人员编号 */
  persoNum: string;
  /** 人员名称 */
  persoName: string;
  /** 联系电话 */
  personTel: string;
  /** 职务 */
  persotitle: string;
  /** 专长或特长 */
  speciality: string;
  /** 填报人 */
  cmCreator: string;
  /** 填报人电话 */
  cmTel: string;
  /**
   * 填报时间
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  cmAddtime: string;
  /**
   * 更新时间
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  cmUptime: string;
  /** 主键 */
  cmKid: string;
}

export interface PageResultListEmresMnRetmanPageVO {
  code: string;
  data: Array<EmresMnRetmanPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 救援人员ExportVO */
export interface EmresMnRetmanExportVO {
  /** 救援队编号 */
  orgid: string;
  /** 救援队名称 */
  orgName: string;
  /** 人员编号 */
  persoNum: string;
  /** 人员名称 */
  persoName: string;
  /** 联系电话 */
  personTel: string;
  /** 职务 */
  persotitle: string;
  /** 专长或特长 */
  speciality: string;
  /** 填报人 */
  cmCreator: string;
  /** 填报人电话 */
  cmTel: string;
  /**
   * 填报时间
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  cmAddtime: string;
  /**
   * 更新时间
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  cmUptime: string;
}

export interface ResultListEmresMnRetmanExportVO {
  code: string;
  data: Array<EmresMnRetmanExportVO>;
  message: string;
  success: boolean;
}

/** 救援人员DetailVO */
export interface EmresMnRetmanDetailVO {
  /** 救援队编号 */
  orgid: string;
  /** 救援队名称 */
  orgName: string;
  /** 人员编号 */
  persoNum: string;
  /** 人员名称 */
  persoName: string;
  /** 联系电话 */
  personTel: string;
  /** 职务 */
  persotitle: string;
  /** 专长或特长 */
  speciality: string;
  /** 填报人 */
  cmCreator: string;
  /** 填报人电话 */
  cmTel: string;
  /**
   * 填报时间
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  cmAddtime: string;
  /**
   * 更新时间
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  cmUptime: string;
  /** 主键 */
  cmKid: string;
  /** 数据来源单位 */
  datasource: string;
}

export interface ResultEmresMnRetmanDetailVO {
  code: string;
  /** 救援人员DetailVO */
  data: EmresMnRetmanDetailVO;
  message: string;
  success: boolean;
}

/** 救援队伍分页查询条件 */
export interface EmresMnReteamPageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 队伍编号 */
  orgid?: string;
  /** 队伍名称 */
  name?: string;
  /** 级别 */
  levelCode?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 救援队伍VO */
export interface EmresMnReteamPageVO {
  /** 队伍编号 */
  orgid: string;
  /** 队伍名称 */
  name: string;
  /** 级别 */
  levelCode: string;
  /** 隶属单位 */
  cmOrgflag: string;
  /** 负责人 */
  director: string;
  /** 联系电话 */
  dutyTel: string;
  /**
   * 队伍规模
   * @format int32
   */
  personnum: number;
  /** 主键 */
  cmKid: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
}

export interface PageResultListEmresMnReteamPageVO {
  code: string;
  data: Array<EmresMnReteamPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 附近救援队伍 */
export interface EmresMnReteamNearQuery {
  /** 经度 */
  longitude: string;
  /** 纬度 */
  latitude: string;
}

/** 最近救援队伍 */
export interface EmresMnReteamNearVO {
  /** 队伍编号 */
  orgid: string;
  /** 队伍名称 */
  name: string;
  /** 级别 */
  levelCode: string;
  /** 隶属单位 */
  cmOrgflag: string;
  /** 负责人 */
  director: string;
  /** 联系电话 */
  dutyTel: string;
  /**
   * 队伍规模
   * @format int32
   */
  personnum: number;
  /**
   * 主键
   * @format int64
   */
  cmKid: number;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 距离 */
  distance: string;
}

export interface ResultListEmresMnReteamNearVO {
  code: string;
  data: Array<EmresMnReteamNearVO>;
  message: string;
  success: boolean;
}

/** 救援队伍ExportVO */
export interface EmresMnReteamExportVO {
  /** 队伍编号 */
  orgid: string;
  /** 队伍名称 */
  name: string;
  /** 级别 */
  levelCode: string;
  /** 隶属单位 */
  cmOrgflag: string;
  /** 负责人 */
  director: string;
  /** 联系电话 */
  dutyTel: string;
  /**
   * 队伍规模
   * @format int32
   */
  personnum: number;
}

export interface ResultListEmresMnReteamExportVO {
  code: string;
  data: Array<EmresMnReteamExportVO>;
  message: string;
  success: boolean;
}

/** 所在队伍下拉VO */
export interface EmresMnReteamDownVO {
  /** 队伍编号 */
  orgid: string;
  /** 队伍名称 */
  name: string;
}

export interface ResultListEmresMnReteamDownVO {
  code: string;
  data: Array<EmresMnReteamDownVO>;
  message: string;
  success: boolean;
}

/** 救援队伍VO */
export interface EmresMnReteamDetailVO {
  /** 队伍编号 */
  orgid: string;
  /** 队伍名称 */
  name: string;
  /** 级别 */
  levelCode: string;
  /** 隶属单位 */
  cmOrgflag: string;
  /** 负责人 */
  director: string;
  /** 联系电话 */
  dutyTel: string;
  /**
   * 队伍规模
   * @format int32
   */
  personnum: number;
  /** 主键 */
  cmKid: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 地址 */
  address: string;
  /** 填报人 */
  fillPerson: string;
  /** 填报人电话 */
  fillPhone: string;
  /**
   * 填报时间
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  fillTime: string;
  /** 数据来源 */
  datasource: string;
}

export interface ResultEmresMnReteamDetailVO {
  code: string;
  /** 救援队伍VO */
  data: EmresMnReteamDetailVO;
  message: string;
  success: boolean;
}

/** 队伍人员信息列表VO */
export interface EmresMnRetmanBaseVO {
  /** 人员编号 */
  persoNum: string;
  /** 成员姓名 */
  persoName: string;
  /** 联系电话 */
  personTel: string;
  /** 职务 */
  persotitle: string;
  /** 专业特长 */
  speciality: string;
}

export interface ResultListEmresMnRetmanBaseVO {
  code: string;
  data: Array<EmresMnRetmanBaseVO>;
  message: string;
  success: boolean;
}

/** 救援物资分页信息 */
export interface EmresMnMateriBaseVO {
  /** 编号 */
  materCode: string;
  /** 装备名称 */
  name: string;
  /** 装备种类 */
  materType: string;
  /** 装备型号 */
  specification: string;
  /** 装备数量 */
  matNum: number;
  /** 计量单位 */
  measureunit: string;
  /** 所在队伍编号 */
  orgid: string;
  /** 所在位置 */
  location: string;
}

export interface ResultListEmresMnMateriBaseVO {
  code: string;
  data: Array<EmresMnMateriBaseVO>;
  message: string;
  success: boolean;
}

/** 队伍基本信息VO */
export interface EmresMnReteamBaseVO {
  /** 队伍名称 */
  name: string;
  /** 级别 */
  levelCode: string;
  /**
   * 规模
   * @format int32
   */
  personnum: number;
  /** 只要负责人 */
  director: string;
  /** 联系电话 */
  dutyTel: string;
  /** 物资明细 */
  materiDetails: Array<MateriDetail>;
}

/** 队伍对应物资信息VO */
export interface MateriDetail {
  /** 物资装备种类 */
  materType?: string;
  /**
   * 物资装备数量
   * @format int64
   */
  num?: number;
}

export interface ResultEmresMnReteamBaseVO {
  code: string;
  /** 队伍基本信息VO */
  data: EmresMnReteamBaseVO;
  message: string;
  success: boolean;
}

/** 管网维修记录列表分页查询条件 */
export interface CifrsGasChPipeRepairPageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  /** 所属机构 */
  orgId?: string;
  /** 所属区域 */
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 工单编号 */
  orderNo?: string;
  /** 服务所 */
  belongOrg?: string;
  /** 管材，支持排序 */
  material?: string;
  /** 管网压力 */
  pressureClass?: string;
  /**
   * 抢修完成时间-开始
   * @format date-time
   */
  reportTimeStar?: string;
  /**
   * 抢修完成时间-结束
   * @format date
   */
  reportTimeEnd?: string;
  /** 维修地址 */
  repairAddr?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 维修记录分页信息 */
export interface CifrsGasChPipeRepairPageVO {
  /**
   * 主键
   * @format int64
   */
  cmKid: number;
  /** 工单编号 */
  orderNo: string;
  /** 关联管线 */
  pipelineId: string;
  /** 行政区划 */
  cmRegflag: string;
  /** 所属机构 */
  cmOrgflag: string;
  /** 管材 */
  material: CifrsGasChPipeRepairPageVoMaterial;
  /** 维修位置 */
  repairPosition: string;
  /** 维修地址 */
  repairAddr: string;
  /**
   * 报修时间
   * @format date-time
   */
  reportTime: string;
  /**
   * 抢修完成时间
   * @format date-time
   */
  repairedTime: string;
  /** 管网压力 */
  pressureClass: CifrsGasChPipeRepairPageVoPressureClass;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** （维修原因）维修故障类型 */
  repairType: string;
  /**
   * 维修时长
   * @format int64
   */
  repairHour: number;
  /** 地址坐标 */
  cmGeom: string;
  /** 管材 */
  _material: string;
  /** 管网压力 */
  _pressureClass: string;
}

export interface PageResultListCifrsGasChPipeRepairPageVO {
  code: string;
  data: Array<CifrsGasChPipeRepairPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 维修记录详情 */
export interface CifrsGasChPipeRepairDetailVO {
  /** 工单编号 */
  orderNo: string;
  /** 所属区域 */
  cmRegflag: string;
  /** 所属组织 */
  cmOrgflag: string;
  /**  维修地址 */
  repairAddr: string;
  /**
   * 报修时间
   * @format date-time
   */
  reportTime: string;
  /**
   *  维修完成时间
   * @format date-time
   */
  repairedTime: string;
  /** 关联管线 */
  pipelineId: string;
  /** 关联管点 */
  pipepointId: string;
  /** 维修位置 */
  repairPosition: string;
  /** 管线压力级别 */
  pressureClass: CifrsGasChPipeRepairDetailVoPressureClass;
  /** 维修性质 */
  repairProp: string;
  /** （维修原因）维修故障类型 */
  repairType: string;
  /** 管线材质 */
  material: CifrsGasChPipeRepairDetailVoMaterial;
  /** 抢修内容及结果 */
  repairContent: string;
  /**  抢修单位 */
  repairUnit: string;
  /** 抢修责任人 */
  repairPerson: string;
  /** 抢修联系方式 */
  repairPhone: string;
  /** 验收单位 */
  checkUnit: string;
  /**
   * 验收时间
   * @format date
   */
  checkTime: string;
  /** 数据来源 */
  dataSource: string;
  /** 备注 */
  remark: string;
  /**
   * 维修时长
   * @format int64
   */
  repairHour: number;
  /** 管线压力级别 */
  _pressureClass: string;
  /** 管线材质 */
  _material: string;
}

export interface ResultCifrsGasChPipeRepairDetailVO {
  code: string;
  /** 维修记录详情 */
  data: CifrsGasChPipeRepairDetailVO;
  message: string;
  success: boolean;
}

/**  管线点、线编码DTO */
export interface CifrsPipeMnPipecodeDTO {
  /** 管线、点代码Id */
  value: string;
  /**  名称 */
  label: string;
}

export interface ResultListCifrsPipeMnPipecodeDTO {
  code: string;
  data: Array<CifrsPipeMnPipecodeDTO>;
  message: string;
  success: boolean;
}

/** 管点信息列表分页查询条件 */
export interface CifrsPipeMnPipepointPageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  /** 所属机构 */
  orgId?: string;
  /** 所属区域 */
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 管点类型 */
  code?: string;
  /** 所在道路 */
  roadName?: string;
  /**  管点编码 */
  guid?: string;
  /** 附属物 */
  subSid?: string;
  /** 特征点 */
  feature?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

export interface PageResultListCifrsPipeMnPipepointPageVO {
  code: string;
  data: Array<CifrsPipeMnPipepointPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 管点详情 */
export interface CifrsPipeMnPipepointDetailVO {
  /**  管点编码 */
  guid: string;
  /** 管点类别 */
  code: string;
  /** 所在道路 */
  roadId: string;
  /** 长度 */
  pipelen: number;
  /** 埋深 */
  deep: number;
  /** 所属区域 */
  cmRegflag: string;
  /** 所属组织 */
  cmOrgflag: string;
  /** 特征点 */
  feature: string;
  /**
   * 建设年代（安装日期）
   * @format date-time
   */
  installdat: string;
  /** 附属物 */
  subSid: string;
  scode: string;
}

export interface ResultCifrsPipeMnPipepointDetailVO {
  code: string;
  /** 管点详情 */
  data: CifrsPipeMnPipepointDetailVO;
  message: string;
  success: boolean;
}

/** 管网统计 */
export interface CifrsPipeStatisticsVO {
  /** 行政区管网公里数统计 */
  regionStatistics: Array<RegionStatisticsDTO>;
  /** 压力级别统计 */
  volclassStatistics: Array<VolclassStatisticsDTO>;
  /** 管网材质统计 */
  pmaterialStatistics: Array<PmaterialStatisticsDTO>;
}

/** 行政区域管网公里数统计DTO */
export interface PmaterialStatisticsDTO {
  /** 名称 */
  name?: string;
  /** 公里数 */
  kilometer?: number;
}

/** 行政区域管网公里数统计DTO */
export interface RegionStatisticsDTO {
  /** 名称 */
  name?: string;
  /** 公里数 */
  kilometer?: number;
}

export interface ResultCifrsPipeStatisticsVO {
  code: string;
  /** 管网统计 */
  data: CifrsPipeStatisticsVO;
  message: string;
  success: boolean;
}

/** 行政区域管网公里数统计DTO */
export interface VolclassStatisticsDTO {
  /** 名称 */
  name?: string;
  /** 公里数 */
  kilometer?: number;
}

/** 管线信息列表分页查询条件 */
export interface CifrsPipeMnPipelinePageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  /** 所属机构 */
  orgId?: string;
  /** 所属区域 */
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 管线编码 */
  guid?: string;
  /** 压力级别 */
  volclass?: string;
  /** 是否为监测对象 */
  monitorno?: string;
  /** 管线材质 */
  pmaterial?: string;
  /** 所在道路 */
  roadName?: string;
  /** 建设年代 */
  mdate?: string;
  /**
   * 管龄
   * @format int32
   */
  pipelineyear?: number;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 管线分页信息 */
export interface CifrsPipeMnPipelinePageVO {
  /**
   * 主键Id
   * @format int64
   */
  cmKid: number;
  /** 管线编码 */
  guid: string;
  /** 管线类型 */
  code: string;
  /** 行政区划 */
  cmRegflag: string;
  /** 所属机构 */
  cmOrgflag: string;
  /** 所在道路 */
  roadName: string;
  /** 管线材质 */
  pmaterial: CifrsPipeMnPipelinePageVoPmaterial;
  /** 运行压力 */
  operatPress: string;
  /** 压力级别 */
  volclass: CifrsPipeMnPipelinePageVoVolclass;
  /** 管壁厚度 */
  pipeThink: string;
  /**  管线长度 */
  pipelen: number;
  /** 是否为监测对象 */
  monitorno: string;
  cmGeom: string;
  /** 建设年代 */
  mdate: string;
  /** 管道年限 */
  pipedate: number;
  /**
   * 管龄
   * @format int32
   */
  pipelineyear: number;
  /** 起点埋深 */
  sDeep: number;
  /** 终点埋深 */
  eDeep: number;
  /** 管线材质 */
  _pmaterial: string;
  /** 压力级别 */
  _volclass: string;
}

export interface PageResultListCifrsPipeMnPipelinePageVO {
  code: string;
  data: Array<CifrsPipeMnPipelinePageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 管线详情 */
export interface CifrsPipeMnPipelineDetailVO {
  /**
   * 主键
   * @format int64
   */
  cmKid: number;
  /** 管编码号 */
  guid: string;
  /** 管线类别 */
  code: string;
  /** 地市编码 */
  pac: string;
  /** 图幅号 */
  mapNo: string;
  /** 材质 */
  pmaterial: CifrsPipeMnPipelineDetailVoPmaterial;
  /**  管径(外径)mm */
  outDS: string;
  /** 内径mm */
  inDS: string;
  /** 压力 */
  voltage: string;
  /** 压力级别 */
  volclass: CifrsPipeMnPipelineDetailVoVolclass;
  /** 流向 */
  flowD: string;
  /**
   * 总孔数
   * @format int32
   */
  holeCount: number;
  /**
   * 占用孔数
   * @format int32
   */
  holeUsed: number;
  /**
   * 电缆条数
   * @format int32
   */
  cabCount: number;
  /** 保护材质 */
  safemateri: string;
  /** 管道年限 */
  pipedate: number;
  /** 套管形状 */
  caseshape: string;
  /** 套管材质 */
  casemateri: string;
  /** 套管尺寸 */
  casesize: string;
  /** 线型 */
  lineStyle: string;
  /** 管线分类编码 */
  linecode: string;
  /** 管线通道权属单位 */
  bunit: string;
  /** 所在道路 */
  roadName: string;
  /** 建设年代 */
  mdate: string;
  /** 探测单位 */
  sunit: string;
  /**
   * 探测日期
   * @format date-time
   */
  sdate: string;
  /** 当前状态 */
  usedstate: string;
  /** 数据获取方式 */
  datasource: string;
  /** 管线长度 */
  pipelen: number;
  /** 断面形式 */
  section: string;
  /** 供水性质 */
  natureWater: string;
  /** 系统编码 */
  sysId: string;
  /** 原始编码 */
  oldId: string;
  /** 数据状态 */
  datastatus: string;
  /**  管壁厚度 */
  pipeThink: string;
  /**
   * 竣工日期
   * @format date-time
   */
  compleDate: string;
  /**
   * 通气日期
   * @format date-time
   */
  ventiDate: string;
  /** 接口方式 */
  interMode: string;
  /** 设计压力 */
  designPress: string;
  /** 运行压力 */
  operatPress: string;
  /** 防腐材料 */
  antiMaterial: CifrsPipeMnPipelineDetailVoAntiMaterial;
  /** 防腐等级 */
  antiLevl: CifrsPipeMnPipelineDetailVoAntiLevl;
  /** 管理中心 */
  mangerCenter: string;
  /** wkt */
  wkt: string;
  /** 是否监测 */
  monitorno: string;
  /** 备注 */
  remark: string;
  /**
   *  创建时间
   * @format date-time
   */
  cmAddtime: string;
  /**
   * 修改时间
   * @format date-time
   */
  cmUptime: string;
  /** 创建人 */
  cmCreator: string;
  /** 修改人 */
  cmModifier: string;
  /**
   * 版本号
   * @format int32
   */
  cmVersion: number;
  /**  所属区域 */
  cmRegflag: string;
  /**  所属组织 */
  cmOrgflag: string;
  /** 业务扩展数据 */
  cmBusext: string;
  /** 逻辑删除 */
  cmUsable: boolean;
  /** 租户ID */
  cmTenantid: string;
  /** 地理坐标  有地理坐标的数据增加 其他的删除 */
  cmGeom: string;
  /** 井体积 */
  volume: number;
  /** 窨井长度 */
  len: number;
  /**  窨井宽度 */
  width: number;
  /** @format date-time */
  ddate: string;
  epoint: string;
  spoint: string;
  sh: number;
  eh: number;
  sdeep: number;
  edeep: number;
  dtype: string;
  /** 材质 */
  _pmaterial: string;
  /** 压力级别 */
  _volclass: string;
  /** 防腐材料 */
  _antiMaterial: string;
  /** 防腐等级 */
  _antiLevl: string;
}

export interface ResultCifrsPipeMnPipelineDetailVO {
  code: string;
  /** 管线详情 */
  data: CifrsPipeMnPipelineDetailVO;
  message: string;
  success: boolean;
}

/** 首页管网类统计DTO */
export interface PipelineIndexStatisticsDTO {
  /** 管网所属机构统计DTO */
  pipelineOrgStatistics: Array<PipelineOrgStatisticsDTO>;
  /** 管网年限材质统计DTO */
  pipelineYearPmaterialStatistics: Array<PipelineYearPmaterialStatisticsDTO>;
}

/** 首页管网所属机构统计DTO */
export interface PipelineOrgStatisticsDTO {
  /** 组织机构 */
  cmOrgflag?: string;
  /**
   * 数量
   * @format int32
   */
  num?: number;
}

/** 首页管网材质统计DTO */
export interface PipelinePmaterialStatisticsDTO {
  /** 管网材质 */
  pmaterial?: string;
  /**
   * 公里数
   * @format int32
   */
  num?: number;
  /** 年限 */
  year?: string;
  /**
   * 排序值
   * @format int32
   */
  sort?: number;
}

/** 首页管网年限材质统计DTO */
export interface PipelineYearPmaterialStatisticsDTO {
  /** 管网年限 */
  year?: string;
  /**
   * 排序值
   * @format int32
   */
  sort?: number;
  /** 管网材质统计DTO */
  pipelinePmaterialStatistics?: Array<PipelinePmaterialStatisticsDTO>;
}

export interface ResultPipelineIndexStatisticsDTO {
  code: string;
  /** 首页管网类统计DTO */
  data: PipelineIndexStatisticsDTO;
  message: string;
  success: boolean;
}

/** 救援物资分页查询条件 */
export interface EmresMnMateriPageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 物资装备编号 */
  materCode?: string;
  /** 物资装备名称 */
  name?: string;
  /** 所在队伍编号 */
  orgid?: string;
  /** 所在位置 */
  location?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 救援物资分页信息 */
export interface EmresMnMateriPageVO {
  /** 物资装备编码 */
  materCode: string;
  /** 物资装备名称 */
  name: string;
  /** 储备库编号 */
  materhouseCode: string;
  /** 物资装备种类 */
  materType: string;
  /** 物资装备型号 */
  specification: string;
  /** 物资装备数量 */
  matNum: number;
  /** 计量单位 */
  measureunit: string;
  /** 主要功能 */
  instruction: string;
  /** 所在队伍编号 */
  orgid: string;
  /** 所在位置 */
  location: string;
  /** 主键 */
  cmKid: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 地理坐标 */
  cmGeom: string;
}

export interface PageResultListEmresMnMateriPageVO {
  code: string;
  data: Array<EmresMnMateriPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 救援物资分页信息 */
export interface EmresMnMateriExportVO {
  /** 物资装备编码 */
  materCode: string;
  /** 物资装备名称 */
  name: string;
  /** 储备库编号 */
  materhouseCode: string;
  /** 物资装备种类 */
  materType: string;
  /** 物资装备型号 */
  specification: string;
  /** 物资装备数量 */
  matNum: number;
  /** 计量单位 */
  measureunit: string;
  /** 主要功能 */
  instruction: string;
  /** 所在队伍编号 */
  orgid: string;
  /** 所在位置 */
  location: string;
}

export interface ResultListEmresMnMateriExportVO {
  code: string;
  data: Array<EmresMnMateriExportVO>;
  message: string;
  success: boolean;
}

/** 救援物资详情信息 */
export interface EmresMnMateriDetailVO {
  /** 物资装备编码 */
  materCode: string;
  /** 物资装备名称 */
  name: string;
  /** 储备库编号 */
  materhouseCode: string;
  /** 物资装备种类 */
  materType: string;
  /** 物资装备型号 */
  specification: string;
  /** 物资装备数量 */
  matNum: number;
  /** 计量单位 */
  measureunit: string;
  /** 主要功能 */
  instruction: string;
  /** 所在队伍编号 */
  orgid: string;
  /** 所在位置 */
  location: string;
  /** 主键 */
  cmKid: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 地理坐标 */
  cmGeom: string;
  /** 物资装备品牌 */
  factory: string;
  /** 填报人 */
  fillPerson: string;
  /** 填报人电话 */
  contacTel: string;
  /**
   * 填报时间
   * @format date-time
   */
  fillTime: string;
  /** 数据来单位 */
  datasource: string;
}

export interface ResultEmresMnMateriDetailVO {
  code: string;
  /** 救援物资详情信息 */
  data: EmresMnMateriDetailVO;
  message: string;
  success: boolean;
}

/** 专家信息分页查询条件 */
export interface EmresMnExpertPageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** 姓名 */
  name?: string;
  /** 专业技术特长 */
  speciality?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 专家信息分页信息 */
export interface EmresMnExpertPageVO {
  /** 主键 */
  cmKid: string;
  /** 姓名 */
  name: string;
  /** 性别代码:男，女 */
  sex: string;
  /** 所属区域 */
  cmRegflag: string;
  /** 职称:1正高级、2副高级、3中级、4中级以下、5未评级 */
  protitle: string;
  /** 职务 */
  duty: string;
  /** 专业类别 */
  major: string;
  /** 专业技术特长 */
  speciality: string;
  /** 联系电话 */
  dutyTel: string;
  /**  所属单位 */
  unitName: string;
  /**
   *  出生日期
   * @format date
   */
  birthday: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 邮箱地址 */
  mail: string;
  /**  附件存储位置 */
  fileAdder: string;
}

export interface PageResultListEmresMnExpertPageVO {
  code: string;
  data: Array<EmresMnExpertPageVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 专家信息DTO */
export interface EmresMnExpertDetailVO {
  /** 主键 */
  cmKid: string;
  /** 专家编号 */
  expCode: string;
  /** 姓名 */
  name: string;
  /** 性别 */
  sex: string;
  /** 专家类型 */
  experType: string;
  /** 民族代码 */
  natioinCode: string;
  /** 手机 */
  phone: string;
  /** 办公电话 */
  dutyTel: string;
  /**
   * 出生日期
   * @format date
   */
  birthday: string;
  /** 所属区域 */
  cmRegflag: string;
  /**  所属单位 */
  unitName: string;
  /** 单位地址 */
  address: string;
  /** 身份证号 */
  idCard: string;
  /** 学历 */
  degreeCode: string;
  /** 职务 */
  duty: string;
  /** 专业 */
  major: string;
  /** 工作部门 */
  department: string;
  /** 职称 */
  protitle: string;
  /**
   * 授予时间
   * @format date
   */
  titleDate: string;
  /** 专长描述 */
  speciality: string;
  /** 毕业院校 */
  university: string;
  /** 邮箱地址 */
  mail: string;
  /**  附件存储位置 */
  fileAdder: string;
}

export interface ResultListEmresMnExpertDetailVO {
  code: string;
  data: Array<EmresMnExpertDetailVO>;
  message: string;
  success: boolean;
}

export interface ResultEmresMnExpertDetailVO {
  code: string;
  /** 专家信息DTO */
  data: EmresMnExpertDetailVO;
  message: string;
  success: boolean;
}

/** 物资储备库下拉列表VO */
export interface EmresMnWhouseDownVO {
  /** 储备库编号 */
  materhouseCode: string;
  /** 储备库名称 */
  name: string;
}

export interface ResultListEmresMnWhouseDownVO {
  code: string;
  data: Array<EmresMnWhouseDownVO>;
  message: string;
  success: boolean;
}

export interface AroundRiskQuery {
  /** 隐患类型: PIPELINE,THIRD_BUILD */
  riskType?: string;
  /**
   * 经度
   * @format float
   */
  longitude?: number;
  /**
   * 纬度
   * @format float
   */
  latitude?: number;
  /**
   * 查询半径
   * @format float
   */
  distance: number;
}

export interface AroundRiskDTO {
  /** 标题-隐患类型 */
  title: string;
  /** 地址 */
  address: string;
  /**
   * 距离
   * @format int32
   */
  distance: number;
  /**
   * 纬度
   * @format float
   */
  latitude: number;
  /**
   * 经度
   * @format float
   */
  longitude: number;
}

export interface ResultListAroundRiskDTO {
  code: string;
  data: Array<AroundRiskDTO>;
  message: string;
  success: boolean;
}

/** 事故事件查询 */
export interface AccidentPageQuery {
  /** @format int32 */
  page?: number;
  /** @format int32 */
  size?: number;
  order?: string;
  originalOrder?: string;
  orgId?: string;
  districtId?: string;
  keyword?: string;
  /** @uniqueItems true */
  selectIds?: Array<object>;
  paging?: boolean;
  /** accident_type */
  accidentType?: Array<AccidentPageQueryAccidentType>;
  /** 事故场景 */
  accidentScene?: Array<AccidentPageQueryAccidentScene>;
  /** 事故等级 */
  accidentLevel?: Array<AccidentPageQueryAccidentLevel>;
  /** 是否挂牌督办 */
  isSupervision?: boolean;
  /**
   * 事故时间开始
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  startTime?: string;
  /**
   * 事故时间结束
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  endTime?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: Array<number> | number;
  /** @uniqueItems true */
  districtIdAsSet?: Array<string> | string;
  /** @uniqueItems true */
  selectIdsAsString?: Array<string> | string;
  districtIdAsList?: Array<string> | string;
}

/** 事故事件列表 */
export interface AccidentVO {
  /** ID */
  uid: string;
  /** 事故事件编号 */
  accidentId: string;
  /** 行政区划id */
  districtId: string;
  /** 组织机构id */
  orgId: string;
  /** 事故事件地址 */
  address: string;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /**
   * 事故事件发生时间
   * @format date-time
   */
  accidentTime: string;
  /** 事故类型：火灾、爆炸、爆燃、机械伤害 */
  accidentType: AccidentVoAccidentType;
  /** 事故场景：户内、管网、场站 */
  accidentScene: AccidentVoAccidentScene;
  /** 事故等级：特别重大、重大、较大 */
  accidentLevel: AccidentVoAccidentLevel;
  /** 事故描述 */
  describe: string;
  /** 事故报告 */
  fileIds: string;
  /** 事故报告上传状态 */
  upload: string;
  /** 是否挂牌督办 */
  isSupervision: boolean;
  /**
   * 死亡人数
   * @format int32
   */
  deathCnt: number;
  /**
   * 受伤人数
   * @format int32
   */
  injuredCnt: number;
  supervision: string;
  /** 行政区划id */
  _districtId: string;
  /** 组织机构id */
  _orgId: string;
  /** 事故类型：火灾、爆炸、爆燃、机械伤害 */
  _accidentType: string;
  /** 事故场景：户内、管网、场站 */
  _accidentScene: string;
  /** 事故等级：特别重大、重大、较大 */
  _accidentLevel: string;
}

export interface PageResultListAccidentVO {
  code: string;
  data: Array<AccidentVO>;
  message: string;
  /** @format int64 */
  total: number;
  success: boolean;
}

/** 事故事件汇总 */
export interface AccidentSummaryVO {
  /**
   * 事故事件总数
   * @format int32
   */
  total: number;
  /**
   * 待上传事故报告数
   * @format int32
   */
  noUploadCnt: number;
  /**
   * 特别重大事故数
   * @format int32
   */
  majorCnt: number;
  /**
   * 挂牌督办数
   * @format int32
   */
  supervisionCnt: number;
}

export interface ResultAccidentSummaryVO {
  code: string;
  /** 事故事件汇总 */
  data: AccidentSummaryVO;
  message: string;
  success: boolean;
}

export interface ResultAccidentVO {
  code: string;
  /** 事故事件列表 */
  data: AccidentVO;
  message: string;
  success: boolean;
}

/** 第三方施工状态 */
export type ThirdBuildUpdateDtoBuildState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

/** 通知方式:SMS/PHONE */
export type SysNotifyTemplateDtoMethod = "SMS" | "PHONE";

/** 关联系统功能模块 */
export type SysNotifyTemplateDtoModule = "HIDANGER_URGE";

/** 岗位 */
export type PerPositionQueryPosition =
  | "QYFZR"
  | "AQGLRY"
  | "RQSPCZG"
  | "YHSYQKZG"
  | "YSTRQZG"
  | "YHTRQCYG"
  | "QCJQZCZG"
  | "RQGWG"
  | "RQYHAZJXG"
  | "PZRQSQG";

/** 性别 */
export type UpdatePerQualificationsQueryGender = "xb001" | "xb002";

/** 当前岗位 */
export type UpdatePerQualificationsQueryCurrentPosition =
  | "QYFZR"
  | "AQGLRY"
  | "RQSPCZG"
  | "YHSYQKZG"
  | "YSTRQZG"
  | "YHTRQCYG"
  | "QCJQZCZG"
  | "RQGWG"
  | "RQYHAZJXG"
  | "PZRQSQG";

/** 是否在岗 */
export type UpdatePerQualificationsQueryIsWorking = "ON_DUTY" | "DEPART";

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

/** 隐患审核结果 */
export type Risk2DangerDtoAuditResult = "PASS" | "NOT_PASS";

/** 风险要素等级 */
export type HidangerDictionaryUpdateDtoDangerLevel = "ZD" | "JD" | "YB";

/** 用户类型 */
export type UpdateGasUserQueryUserType = "RESIDENT" | "INDUSTRY" | "BUSINESS";

/** 用户标签 */
export type UpdateGasUserQueryUserTag = "OLD" | "RESTAURANT";

/** 用气类型 */
export type UpdateGasUserQueryUseType = "GAS" | "LIQUEFIED_GAS";

/** 特种设备类型 */
export type SpecialEquipDtoType =
  | "COMPRESSOR"
  | "OIL_PUMP"
  | "BUFFER_TANK"
  | "GAS_CYLINDER"
  | "WELL_OR_TANK"
  | "GAS_MACHINE";

/** 第三方施工状态 */
export type ThirdBuildInfoCreateDtoBuildState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

/** 第三方施工状态 */
export type ThirdBuildImportDtoBuildState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

/** 风险要素状态 */
export type ProjectRiskDangerVoState = "DRAFT" | "WAIT_HANDLE" | "WAIT_AUDIT" | "HANDLED";

/** 风险要素等级 */
export type ProjectRiskDangerVoLevel = "ZD" | "JD" | "YB";

/** 性别 */
export type EnterprisePerQuaImportDtoGender = "xb001" | "xb002";

/** 当前岗位 */
export type EnterprisePerQuaImportDtoCurrentPosition =
  | "QYFZR"
  | "AQGLRY"
  | "RQSPCZG"
  | "YHSYQKZG"
  | "YSTRQZG"
  | "YHTRQCYG"
  | "QCJQZCZG"
  | "RQGWG"
  | "RQYHAZJXG"
  | "PZRQSQG";

/** 是否在岗 */
export type EnterprisePerQuaImportDtoIsWorking = "ON_DUTY" | "DEPART";

/** 性别 */
export type AddPerQualificationsQueryGender = "xb001" | "xb002";

/** 当前岗位 */
export type AddPerQualificationsQueryCurrentPosition =
  | "QYFZR"
  | "AQGLRY"
  | "RQSPCZG"
  | "YHSYQKZG"
  | "YSTRQZG"
  | "YHTRQCYG"
  | "QCJQZCZG"
  | "RQGWG"
  | "RQYHAZJXG"
  | "PZRQSQG";

/** 是否在岗 */
export type AddPerQualificationsQueryIsWorking = "ON_DUTY" | "DEPART";

/** 改造类型 */
export type AddOldPipeBuildQueryBuildType = "SP_ROAD" | "SP_LG" | "SP_CZ";

/** 管网材质类型 */
export type AddOldPipeBuildQueryPmaterialType =
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
export type AddOldPipeBuildQueryVolclassLevel =
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

/** 演练类型 */
export type AddEmresDrillRequestDrillType = "zh_plan" | "zx_plan" | "xccz_plan" | "other_plan";

/** 演练状态 未开始、已完成、逾期 */
export type AddEmresDrillRequestDrillState = "not_started" | "completed" | "be_overdue";

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

/** 安全检查形式 */
export type HiDangerCheckPlanCreateDtoMode = "DAILY" | "SPECIAL";

/** 用户类型 */
export type GasUserImportDtoUserType = "RESIDENT" | "INDUSTRY" | "BUSINESS";

/** 用户标签 */
export type GasUserImportDtoUserTag = "OLD" | "RESTAURANT";

/** 用气类型 */
export type GasUserImportDtoUseType = "GAS" | "LIQUEFIED_GAS";

/** 用户类型 */
export type AddGasUserQueryUserType = "RESIDENT" | "INDUSTRY" | "BUSINESS";

/** 用户标签 */
export type AddGasUserQueryUserTag = "OLD" | "RESTAURANT";

/** 用气类型 */
export type AddGasUserQueryUseType = "GAS" | "LIQUEFIED_GAS";

export type GasStationImportDtoGasType = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 场站类型 */
export type GasStationImportItemDtoStationType =
  | "czlb001"
  | "czlb003"
  | "czlb004"
  | "czlb005"
  | "czlb002"
  | "czlb006"
  | "czlb007"
  | "czlb008"
  | "czlb009"
  | "czlb010"
  | "czlb011"
  | "czlb012"
  | "czlb013"
  | "czlb014"
  | "czlb015"
  | "czlb016"
  | "czlb017"
  | "czlb018"
  | "czlb019"
  | "czlb020";

/** 经营范围(类别) */
export type EnterpriseImportDtoBusinessScope = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 特种设备类型 */
export type EnterpriseImportDtoSpecialEquipType =
  | "COMPRESSOR"
  | "OIL_PUMP"
  | "BUFFER_TANK"
  | "GAS_CYLINDER"
  | "WELL_OR_TANK"
  | "GAS_MACHINE";

/** 安检结果 */
export type SecCheckImportItemDtoCheckResult = "CHECKED" | "CHECK_DENIED" | "VISIT_MISSED";

/** 预案类型 */
export type AddEmresPlanRequestPlanType = "zh_plan" | "zx_plan" | "xccz_plan" | "other_plan";

/** 公告类型 */
export type UpdateBulletinQueryBulletinType = "NOTICE_LR" | "NOTICE_PD" | "NOTICE_NA";

/** 公告类型 */
export type AddBulletinQueryBulletinType = "NOTICE_LR" | "NOTICE_PD" | "NOTICE_NA";

/** 管线材质 */
export type CifrsPipeMnPipelineVoPmaterial =
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
export type CifrsPipeMnPipelineVoVolclass =
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

/** 事故类型：火灾、爆炸、爆燃、机械伤害 */
export type UpdateAccidentQueryAccidentType =
  | "fire"
  | "explosion"
  | "detonation"
  | "machinery"
  | "thirdBuild"
  | "other";

/** 事故场景：户内、管网、场站 */
export type UpdateAccidentQueryAccidentScene = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH";

/** 事故等级：特别重大、重大、较大 */
export type UpdateAccidentQueryAccidentLevel = "TBZD" | "ZD" | "JD" | "YB";

/** 事故类型：火灾、爆炸、爆燃、机械伤害 */
export type AddAccidentQueryAccidentType = "fire" | "explosion" | "detonation" | "machinery" | "thirdBuild" | "other";

/** 事故场景：户内、管网、场站 */
export type AddAccidentQueryAccidentScene = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH";

/** 事故等级：特别重大、重大、较大 */
export type AddAccidentQueryAccidentLevel = "TBZD" | "ZD" | "JD" | "YB";

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

/** 通知方式:SMS/PHONE */
export type SysNotifyTemplateDetailVoMethod = "SMS" | "PHONE";

/** 关联系统功能模块 */
export type SysNotifyTemplateDetailVoModule = "HIDANGER_URGE";

/** 通知方式:SMS/PHONE */
export type SysNotifyTemplatePageVoMethod = "SMS" | "PHONE";

/** 关联系统功能模块 */
export type SysNotifyTemplatePageVoModule = "HIDANGER_URGE";

/** 查询过滤 */
export type WarnPageRequestQueryFilter = "pipeline_gas" | "end_user";

/** 预警级别 */
export type WarnPageRequestWarnLevel = "yjjb001" | "yjjb002" | "yjjb003";

/** 监测场所类型 */
export type WarnPageRequestObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 预警状态 */
export type WarnPageRequestWarnState = "yjzt005" | "yjzt001" | "yjzt002" | "yjzt006" | "yjzt010";

/** 报警来源 */
export type WarnPageRequestAlarmSource = "LIFELINE" | "GAS_ENTERPRISES" | "AIoT";

/** 监测场所类型 */
export type WarnPageVoObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 预警级别 */
export type WarnPageVoWarnLevel = "yjjb001" | "yjjb002" | "yjjb003";

/** 预警状态 */
export type WarnPageVoState = "yjzt005" | "yjzt001" | "yjzt002" | "yjzt006" | "yjzt010";

/** 数据来源 */
export type WarnPageVoAlarmSource = "LIFELINE" | "GAS_ENTERPRISES" | "AIoT";

/** 预警级别 */
export type DisposeDetailWarnLevel = "yjjb001" | "yjjb002" | "yjjb003";

/** 监测场所类型 */
export type StatisticalRequestObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 报警状态 */
export type StatisticalRequestAlarmState = "bjzt001" | "bjzt003" | "bjzt004";

/** 预警状态 */
export type StatisticalRequestWarnState = "yjzt005" | "yjzt001" | "yjzt002" | "yjzt006" | "yjzt010";

/** 时间维度，如：本月、本季度、本年度 */
export type StatisticalRequestTimeDimension = "day" | "month" | "quarter" | "year";

/** 用气类型 */
export type StatisticalRequestGasType = "GAS" | "LIQUEFIED_GAS";

/** 数据来源 */
export type StatisticalRequestDataSource = "LIFELINE" | "GAS_ENTERPRISES" | "AIoT";

/** 燃气企业经营类别 */
export type StatisticalRequestBusinessScopes = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 管网材质 */
export type StatisticalRequestPmaterialType =
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

/** 岗位 */
export type StatisticalRequestPosition =
  | "QYFZR"
  | "AQGLRY"
  | "RQSPCZG"
  | "YHSYQKZG"
  | "YSTRQZG"
  | "YHTRQCYG"
  | "QCJQZCZG"
  | "RQGWG"
  | "RQYHAZJXG"
  | "PZRQSQG";

/** 预警级别 */
export type PipeGasWarnDetailVoWarnLevel = "yjjb001" | "yjjb002" | "yjjb003";

/** 预警状态 */
export type PipeGasWarnDetailVoState = "yjzt005" | "yjzt001" | "yjzt002" | "yjzt006" | "yjzt010";

/** 监测场所类型 */
export type ScreenAlarmSummaryLineChartVoObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 监测场所类型 */
export type AlarmPageVoObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 报警状态 */
export type AlarmPageVoAlarmState = "bjzt001" | "bjzt003" | "bjzt004";

/** 数据来源 */
export type AlarmPageVoAlarmSource = "LIFELINE" | "GAS_ENTERPRISES" | "AIoT";

/** 监测场所类型 */
export type ObjTypeCoverageObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 监测场所类型 */
export type ScreenDeviceTypeVoObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 监测场所类型 */
export type MonitorRequestObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 监测状态 */
export type MonitorRequestEqptState = "equipRunStatus1" | "equipRunStatus2" | "equipRunStatus3";

/** 数据来源 */
export type MonitorRequestDataSource = "LIFELINE" | "GAS_ENTERPRISES" | "AIoT";

/** 查询过滤 */
export type MonitorRequestQueryFilter = "pipeline_gas" | "end_user";

/** 监测场所类型 */
export type MonitorPageVoObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 监测状态 */
export type MonitorPageVoEqptState = "equipRunStatus1" | "equipRunStatus2" | "equipRunStatus3";

/** 数据来源 */
export type MonitorPageVoDataSource = "LIFELINE" | "GAS_ENTERPRISES" | "AIoT";

/** 报警状态 */
export type MonitorPageVoAlarmState = "bjzt001" | "bjzt003" | "bjzt004";

/** 数据来源 */
export type MonitorPageVoAlarmSource = "LIFELINE" | "GAS_ENTERPRISES" | "AIoT";

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

/** 监测场所类型 */
export type DeviceMapRequestObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 监测状态 */
export type DeviceMapRequestEqptState = "equipRunStatus1" | "equipRunStatus2" | "equipRunStatus3";

/** 监测场所类型 */
export type DeviceMapVoObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 气源类型 */
export type DeviceRequestGasType = "GAS" | "LIQUEFIED_GAS";

/** 监测场所类型 */
export type DeviceRequestUserType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 监测状态 */
export type DeviceRequestEqptState = "equipRunStatus1" | "equipRunStatus2" | "equipRunStatus3";

/** 气源类型 */
export type DevicePageVoGasType = "GAS" | "LIQUEFIED_GAS";

/** 监测状态 */
export type DevicePageVoEqptState = "equipRunStatus1" | "equipRunStatus2" | "equipRunStatus3";

/** 数据来源系统 */
export type DevicePageVoDataSource = "LIFELINE" | "GAS_ENTERPRISES" | "AIoT";

/** 监测场所类型 */
export type DevicePageVoUserType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 查询过滤 */
export type AlarmPageRequestQueryFilter = "pipeline_gas" | "end_user";

/** 监测场所类型 */
export type AlarmPageRequestObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 报警状态 */
export type AlarmPageRequestAlarmState = "bjzt001" | "bjzt003" | "bjzt004";

/** 报警来源 */
export type AlarmPageRequestAlarmSource = "LIFELINE" | "GAS_ENTERPRISES" | "AIoT";

/** 监测场所类型 */
export type HistoryAlarmVoObjType = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH" | "OBJ_GSYH" | "OBJ_LINE";

/** 风险要素等级 */
export type RiskExportVoLevel = "ZD" | "JD" | "YB";

/** 风险要素状态 */
export type RiskExportVoState = "DRAFT" | "WAIT_HANDLE" | "WAIT_AUDIT" | "HANDLED";

/** 隐患来源 */
export type RiskExportVoDangerSource = "SYSTEM" | "GOV" | "COMPANY";

/** 查询过滤 */
export type PerCertificatePageQueryQueryFilter = "pipeline_gas" | "end_user";

/** 性别 */
export type PerCertificatePageQueryGender = "xb001" | "xb002";

/** 是否过期 */
export type PerCertificatePageQueryIsExpiration = "NO" | "YES";

/** 当前岗位 */
export type PerCertificatePageQueryCurrentPosition =
  | "QYFZR"
  | "AQGLRY"
  | "RQSPCZG"
  | "YHSYQKZG"
  | "YSTRQZG"
  | "YHTRQCYG"
  | "QCJQZCZG"
  | "RQGWG"
  | "RQYHAZJXG"
  | "PZRQSQG";

/** 经营范围(类别) */
export type PerCertificatePageVoBusinessScope = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 性别 */
export type PerCertificatePageVoGender = "xb001" | "xb002";

/** 当前岗位 */
export type PerCertificatePageVoCurrentPosition =
  | "QYFZR"
  | "AQGLRY"
  | "RQSPCZG"
  | "YHSYQKZG"
  | "YSTRQZG"
  | "YHTRQCYG"
  | "QCJQZCZG"
  | "RQGWG"
  | "RQYHAZJXG"
  | "PZRQSQG";

/** 是否在岗 */
export type PerCertificatePageVoIsWorking = "ON_DUTY" | "DEPART";

/** 是否过期 */
export type PerCertificatePageVoIsExpiration = "NO" | "YES";

/** 经营范围(类别) */
export type PerCertificateDetailVoBusinessScope = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 性别 */
export type PerCertificateDetailVoGender = "xb001" | "xb002";

/** 当前岗位 */
export type PerCertificateDetailVoCurrentPosition =
  | "QYFZR"
  | "AQGLRY"
  | "RQSPCZG"
  | "YHSYQKZG"
  | "YSTRQZG"
  | "YHTRQCYG"
  | "QCJQZCZG"
  | "RQGWG"
  | "RQYHAZJXG"
  | "PZRQSQG";

/** 是否在岗 */
export type PerCertificateDetailVoIsWorking = "ON_DUTY" | "DEPART";

/** 是否过期 */
export type PerCertificateDetailVoIsExpiration = "NO" | "YES";

/** 改造类型 */
export type PageOldPipeBuildQueryBuildType = "SP_ROAD" | "SP_LG" | "SP_CZ";

/** 第三方施工状态 */
export type PageOldPipeBuildQueryBuildState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

/** 压力级别 */
export type PageOldPipeBuildQueryVolclassLevel =
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

/** 管网材质类型 */
export type PageOldPipeBuildQueryPmaterialType =
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

/** 第三方施工状态 */
export type OldPipeBuildVoBuildState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

/** 改造类型：道路及庭院管、立管、场站和设施 */
export type OldPipeBuildVoBuildType = "SP_ROAD" | "SP_LG" | "SP_CZ";

/** 管网材质类型 */
export type OldPipeBuildVoPmaterialType =
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
export type OldPipeBuildVoVolclassLevel =
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

/** 演练状态 */
export type EmresDrillRequestDrillState = "not_started" | "completed" | "be_overdue";

/** 演练类型 */
export type EmresDrillVoDrillType = "zh_plan" | "zx_plan" | "xccz_plan" | "other_plan";

/** 演练状态 */
export type EmresDrillVoDrillState = "not_started" | "completed" | "be_overdue";

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
export type BsHidangerPageVoDangerLevel = "ZD" | "JD" | "YB";

/** 风险要素状态 */
export type BsHidangerPageVoDangerState = "DRAFT" | "WAIT_HANDLE" | "WAIT_AUDIT" | "HANDLED";

/** 隐患来源 */
export type BsHidangerPageVoDangerSource = "SYSTEM" | "GOV" | "COMPANY";

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

/** 安全检查形式 */
export type HidangerCheckPlanDetailVoMode = "DAILY" | "SPECIAL";

/** 安全检查计划状态 */
export type HidangerCheckPlanDetailVoHandleState = "UNCOMPLETED" | "COMPLETED";

/** 安全检查形式 */
export type HiDangerCheckPageQueryMode = "DAILY" | "SPECIAL";

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

/** 安全检查形式 */
export type HiDangerCheckPageVoMode = "DAILY" | "SPECIAL";

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
export type HidangerFactorsPageVoLevel = "ZD" | "JD" | "YB";

/** 燃气管网风险要素类型 */
export type HidangerFactorsPageVoDangerType = "GW_SG" | "GW_MSBZ" | "GW_CY" | "GW_ZY" | "GW_JJBZ" | "GW_LH" | "OTHER";

/** 风险要素子类型 */
export type HidangerFactorsPageVoDangerSubtype =
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
export type HidangerFactorsPageVoMaterial =
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
export type HidangerFactorsPageVoPressureLevel =
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

/** 燃气管网风险要素类型 */
export type PairRiskDangerTypeIntegerKey = "GW_SG" | "GW_MSBZ" | "GW_CY" | "GW_ZY" | "GW_JJBZ" | "GW_LH" | "OTHER";

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

/** 风险要素等级 */
export type HidangerDictionaryVoDangerLevel = "ZD" | "JD" | "YB";

/** 知识库名称枚举类型（KNOWLEDGETYPE）：法律法规、技术标准、国家政策 */
export type AnalysBaseMnKnowledgePageVoKnowledgeType = "FLFG" | "JSBZ" | "AQJY" | "GJZC";

/** 知识库名称类型：法律法规、技术标准、国家政策 */
export type AnalysBaseMnKnowledgeDetailVoKnowledgeType = "FLFG" | "JSBZ" | "GJZC";

/** 事故类型：燃气管网事故、管道燃气用户事故、液化气用户事故 */
export type AnalysBaseMnCasePageVoAccidentType =
  | "RQ_GW"
  | "GD_US"
  | "YHQ_US"
  | "QY_AQ"
  | "YHQ_CZ"
  | "YHQ_TRQZ"
  | "YHQ_Z";

/** 事故等级:特别重大、重大、较大、一般 */
export type AnalysBaseMnCasePageVoAccidentLevel = "TBZD" | "ZD" | "JD" | "YB";

/** 事故类型：燃气管网事故、管道燃气用户事故、液化气用户事故 */
export type AnalysBaseMnCaseDetailVoAccidentType =
  | "RQ_GW"
  | "GD_US"
  | "YHQ_US"
  | "QY_AQ"
  | "YHQ_CZ"
  | "YHQ_TRQZ"
  | "YHQ_Z";

/** 事故等级:特别重大、重大、较大、一般 */
export type AnalysBaseMnCaseDetailVoAccidentLevel = "TBZD" | "ZD" | "JD" | "YB";

/** 案例类别 */
export type AnalysBaseMnCaseBaseVoAccidentType =
  | "RQ_GW"
  | "GD_US"
  | "YHQ_US"
  | "QY_AQ"
  | "YHQ_CZ"
  | "YHQ_TRQZ"
  | "YHQ_Z";

/** 案例等级 */
export type AnalysBaseMnCaseBaseVoAccidentLevel = "TBZD" | "ZD" | "JD" | "YB";

/** 查询过滤 */
export type PageGasUserQueryQueryFilter = "pipeline_gas" | "end_user";

/** 用户类型 */
export type PageGasUserQueryUserType = "RESIDENT" | "INDUSTRY" | "BUSINESS";

/** 用气类型 */
export type PageGasUserQueryUseType = "GAS" | "LIQUEFIED_GAS";

/** 用户类型 */
export type DetailGasUserVoUserType = "RESIDENT" | "INDUSTRY" | "BUSINESS";

/** 用户标签 */
export type DetailGasUserVoUserTag = "OLD" | "RESTAURANT";

/** 用气类型 */
export type DetailGasUserVoUseType = "GAS" | "LIQUEFIED_GAS";

export type GasStationQueryGasType = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 场站类型 */
export type GasStationPageVoStationType =
  | "czlb001"
  | "czlb003"
  | "czlb004"
  | "czlb005"
  | "czlb002"
  | "czlb006"
  | "czlb007"
  | "czlb008"
  | "czlb009"
  | "czlb010"
  | "czlb011"
  | "czlb012"
  | "czlb013"
  | "czlb014"
  | "czlb015"
  | "czlb016"
  | "czlb017"
  | "czlb018"
  | "czlb019"
  | "czlb020";

/** 经营范围(类别) */
export type EnterpriseDetailVoBusinessScope = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 经营类别 */
export type EnterpriseInfoPageQueryBusinessScope = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 经营范围 */
export type EnterpriseInfoPageVoBusinessScope = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 经营类别 */
export type EnterpriseMapInfoVoType = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 经营类别 */
export type EnterpriseDevResInfoVoType = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 用户类型 */
export type SecurityCheckRecQueryUserType = "RESIDENT" | "INDUSTRY" | "BUSINESS";

/** 用户类型 */
export type SecurityCheckRecPageVoUserType = "RESIDENT" | "INDUSTRY" | "BUSINESS";

/** 排查结果 */
export type SecurityCheckRecPageVoCheckResult = "CHECKED" | "CHECK_DENIED" | "VISIT_MISSED";

/** 安全监测类型 */
export type SecurityCheckQueryPlanType = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 预案类型 */
export type EmresPlanRequestPlanType = "zh_plan" | "zx_plan" | "xccz_plan" | "other_plan";

/** 预案类型 */
export type EmresPlanVoPlanType = "zh_plan" | "zx_plan" | "xccz_plan" | "other_plan";

/** 公告类型 */
export type BulletinQueryBulletinType = "NOTICE_LR" | "NOTICE_PD" | "NOTICE_NA";

/** 公告类型 */
export type BulletinVoBulletinType = "NOTICE_LR" | "NOTICE_PD" | "NOTICE_NA";

/** 公告类型 */
export type BulletinDetailVoBulletinType = "NOTICE_LR" | "NOTICE_PD" | "NOTICE_NA";

/** 通知状态，未接通/已送达等 */
export type BulletinMsgHisDtoSendStatus = "UN_URGE" | "DELIVERED" | "SEND_ERROR" | "RETAINED";

/** 隐患来源 */
export type BsHidangerDtoDangerSource = "SYSTEM" | "GOV" | "COMPANY";

/** 管网材质 */
export type BsHidangerDtoMaterial =
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

/** 安全检查形式 */
export type BsGovCheckPlanDtoMode = "DAILY" | "SPECIAL";

/** 风险要素等级 */
export type HidangerStatePageDtoLevel = "ZD" | "JD" | "YB";

/** 管材 */
export type CifrsGasChPipeRepairPageVoMaterial =
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

/** 管网压力 */
export type CifrsGasChPipeRepairPageVoPressureClass =
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

/** 管线压力级别 */
export type CifrsGasChPipeRepairDetailVoPressureClass =
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

/** 管线材质 */
export type CifrsGasChPipeRepairDetailVoMaterial =
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

/** 管线材质 */
export type CifrsPipeMnPipelinePageVoPmaterial =
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
export type CifrsPipeMnPipelinePageVoVolclass =
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
export type CifrsPipeMnPipelineDetailVoPmaterial =
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
export type CifrsPipeMnPipelineDetailVoVolclass =
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

/** 防腐材料 */
export type CifrsPipeMnPipelineDetailVoAntiMaterial =
  | "ffcl001"
  | "ffcl002"
  | "ffcl003"
  | "ffcl004"
  | "ffcl005"
  | "ffcl006"
  | "ffcl007"
  | "ffcl008"
  | "ffcl009"
  | "ffcl010"
  | "ffcl011"
  | "ffcl012"
  | "ffcl013"
  | "ffcl014"
  | "ffcl015"
  | "ffcl016"
  | "ffcl017"
  | "ffcl018"
  | "ffcl019"
  | "ffcl020";

/** 防腐等级 */
export type CifrsPipeMnPipelineDetailVoAntiLevl =
  | "ffdj001"
  | "ffdj002"
  | "ffdj003"
  | "ffdj004"
  | "ffdj005"
  | "ffdj006"
  | "ffdj007"
  | "ffdj008"
  | "ffdj009"
  | "ffdj010";

/** accident_type */
export type AccidentPageQueryAccidentType = "fire" | "explosion" | "detonation" | "machinery" | "thirdBuild" | "other";

/** 事故场景 */
export type AccidentPageQueryAccidentScene = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH";

/** 事故等级 */
export type AccidentPageQueryAccidentLevel = "TBZD" | "ZD" | "JD" | "YB";

/** 事故类型：火灾、爆炸、爆燃、机械伤害 */
export type AccidentVoAccidentType = "fire" | "explosion" | "detonation" | "machinery" | "thirdBuild" | "other";

/** 事故场景：户内、管网、场站 */
export type AccidentVoAccidentScene = "OBJ_CZ" | "OBJ_DXKJ" | "OBJ_JMYH";

/** 事故等级：特别重大、重大、较大 */
export type AccidentVoAccidentLevel = "TBZD" | "ZD" | "JD" | "YB";

export type PostEnterpriseCommonPreImportByTypeParamsType =
  | "ENTERPRISE_INFO_IMPORT"
  | "GAS_USER_IMPORT"
  | "PER_QUA_IMPORT"
  | "SEC_CHECK_IMPORT"
  | "GAS_STATION_IMPORT";

/** 风险要素等级 */
export type GetHidangerOrgSummaryParamsLevel = "ZD" | "JD" | "YB";

/** 安全检查形式 */
export type GetHidangerGovCheckPlanEndUserSummaryParamsMode = "DAILY" | "SPECIAL";

/** 燃气管网风险要素类型 */
export type GetHidangerFactorsSummaryParamsType =
  | "GW_SG"
  | "GW_MSBZ"
  | "GW_CY"
  | "GW_ZY"
  | "GW_JJBZ"
  | "GW_LH"
  | "OTHER";

/** 燃气管网风险要素类型 */
export type GetHidangerFactorsPageParamsType = "GW_SG" | "GW_MSBZ" | "GW_CY" | "GW_ZY" | "GW_JJBZ" | "GW_LH" | "OTHER";

export type GetEnterpriseEnterpriseMapParamsScope = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

export type GetEnterpriseCommonTemplateByTypeParamsType =
  | "ENTERPRISE_INFO_IMPORT"
  | "GAS_USER_IMPORT"
  | "PER_QUA_IMPORT"
  | "SEC_CHECK_IMPORT"
  | "GAS_STATION_IMPORT";

/** 隐患来源 */
export type GetBsHidangerGroupSummaryParamsDangerSource = "SYSTEM" | "GOV" | "COMPANY";
