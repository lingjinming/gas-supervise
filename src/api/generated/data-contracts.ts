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
}

export interface ResultVoid {
  code?: string;
  data?: object;
  message?: string;
  success?: boolean;
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
  startEndTime: string[];
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
  positionQuery?: PerPositionQuery[];
  /** 人员资格证信息列表 */
  certificateQuery?: PerCertificateQuery[];
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
  fileIds?: string[];
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
  fileIds?: string[];
  /** 现场照片 */
  picIds?: string[];
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
  handleDate: Date;
  /**
   * 整改情况说明
   * @minLength 0
   * @maxLength 200
   */
  handleContent: string;
  /** 整改图片 */
  picIds?: string[];
  /** 相关附件 */
  fileIds?: string[];
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
  title?: string;
  /** 安全检查计划ID */
  checkers?: string;
}

export interface Risk2DangerDTO {
  /** 风险要素审核结果 */
  auditResult: Risk2DangerDtoAuditResult;
  /** 附件id */
  fileIds?: string[];
  /**
   * 隐患id
   * @maxItems 2147483647
   * @minItems 1
   * @uniqueItems true
   */
  riskIds: number[];
  /** 审核内容 */
  auditRemark?: string;
}

/** 修改用气用户信息 */
export interface UpdateGasUserQuery {
  /** 用户名称 */
  name: string;
  /** 行政区划id */
  districtId: string;
  /** 用户类型 */
  userType: UpdateGasUserQueryUserType;
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
  businessArea: string[];
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
  masterName: string;
  /**
   * 企业负责人手机号
   * @minLength 11
   * @maxLength 11
   */
  masterPhone: string;
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
  licenseImgs?: string[];
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
  permitsImgs?: string[];
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
  /** 拥有的管线长度,km */
  pipelineLengthKm: number;
  /**
   * 拥有的液化气瓶数量
   * @format int32
   */
  gasBottleCount: number;
  /**
   * 特种设备列表
   * @maxItems 2147483647
   * @minItems 1
   */
  specialEquips: SpecialEquipDTO[];
  /**
   * 企业安全负责人列表
   * @maxItems 2147483647
   * @minItems 1
   */
  csos: EnterpriseCsoDTO[];
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
  /** 看护记录描述 */
  remark?: string;
  /**
   * 看护记录图片
   * @maxItems 3
   * @minItems 0
   */
  picIds?: string[];
  /**
   * 看护时间
   * @format date-time
   */
  guardTime?: Date;
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
  reportPicIds?: string[];
  /**
   * 管网保护方案照片
   * @maxItems 3
   * @minItems 0
   */
  schemaPicIds?: string[];
  /**
   * 管网保护协议照片
   * @maxItems 3
   * @minItems 0
   */
  protocolPicIds?: string[];
  /**
   * 交底相关附件id
   * @maxItems 5
   * @minItems 0
   */
  fileIds?: string[];
  /**
   * 交底时间,默认当前时间
   * @format date-time
   */
  reportTime?: Date;
}

export interface ResultString {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
}

export interface ExcelImportValidationVO {
  hasBadData?: boolean;
  badData?: string[];
  goodData?: object[];
}

export interface ResultExcelImportValidationVO {
  code?: string;
  data?: ExcelImportValidationVO;
  message?: string;
  success?: boolean;
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
  realBuildTimeEndValid?: boolean;
  realBuildTimeStartValid?: boolean;
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
  selectIds?: object[];
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
  selectIdsAsLong?: number[];
  /** @uniqueItems true */
  districtIdAsSet?: string[];
  districtIdAsList?: string[];
  /** @uniqueItems true */
  selectIdsAsString?: string[];
}

/** 研判分析-隐患分析列表 */
export interface ProjectRiskDangerVO {
  /** 隐患编号 */
  id?: string;
  /** 描述 */
  remark?: string;
  /** 风险要素主体 */
  subjectType?: string;
  /** 风险要素类型 */
  dangerType?: string;
  /** 风险要素子类型 */
  dangerSubtype?: string;
  /** 所属区域id */
  districtId?: string;
  /** 所属机构id */
  orgId?: string;
  /** 具体位置 */
  address?: string;
  /**
   * 经度
   * @format double
   */
  longitude?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number;
  /** 主体编号 */
  subjectId?: string;
  /** 推送人 */
  pushBy?: string;
  /**
   * 推送时间
   * @format date-time
   */
  pushTime?: Date;
  /** 整改建议 */
  measure?: string;
  /** 风险要素状态 */
  state?: ProjectRiskDangerVoState;
  /** 风险要素等级 */
  level?: ProjectRiskDangerVoLevel;
}

export interface ResultListProjectRiskDangerVO {
  code?: string;
  data?: ProjectRiskDangerVO[];
  message?: string;
  success?: boolean;
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
  items?: EnterprisePerQuaImportDTO[];
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
  positionQuery?: PerPositionQuery[];
  /** 人员资格证信息列表 */
  certificateQuery?: PerCertificateQuery[];
}

export interface HidangerImportVO {
  hasBadData?: boolean;
  badData?: string[];
  goodData?: HidangerCreateDTO[];
}

export interface ResultHidangerImportVO {
  code?: string;
  data?: HidangerImportVO;
  message?: string;
  success?: boolean;
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
  fileIds?: string[];
  /** 现场照片 */
  imgIds?: string[];
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
  items: HidangerCreateDTO[];
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
  fileIds?: string[];
}

export interface HiDangerSendHandleOrderDTO {
  /** 企业负责人签名 */
  targetOrgMasterSignatures?: string[];
  /** 专家签名 */
  expertSignatures?: string[];
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
  msgUserIds?: string[];
  expertSignaturesStr?: string;
  targetOrgMasterSignaturesStr?: string;
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
  checkers?: string;
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
  code?: string;
  data?: boolean;
  message?: string;
  success?: boolean;
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
  comContactInfo: string;
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
  items?: GasUserImportDTO[];
}

/** 新增用气用户信息 */
export interface AddGasUserQuery {
  /** 用户名称 */
  name: string;
  /** 行政区划id */
  districtId: string;
  /** 用户类型 */
  userType: AddGasUserQueryUserType;
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

export interface FileUpdateResponseDTO {
  fileName?: string;
  objectName?: string;
  previewUrl?: string;
  bucketName?: string;
  /** @format double */
  fileMbSize?: number;
}

export interface ResultFileUpdateResponseDTO {
  code?: string;
  data?: FileUpdateResponseDTO;
  message?: string;
  success?: boolean;
}

export interface EnterpriseBatchImportDTO {
  items?: EnterpriseImportDTO[];
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
  employeeCount: number;
  /**
   * 拥有的窨井数量
   * @format int32
   */
  wellsCount: number;
  /** 拥有的管线长度,km */
  pipelineLengthKm: number;
  /**
   * 拥有的液化气瓶数量
   * @format int32
   */
  gasBottleCount: number;
  /**
   * 拥有的场站数量
   * @format int32
   */
  stationCount: number;
  /** 特种设备类型 */
  specialEquipType: EnterpriseImportDtoSpecialEquipType;
  /**
   * 特种设备数量
   * @format int32
   */
  specialEquipmentCount: number;
  /**
   * 安全负责人姓名
   * @minLength 0
   * @maxLength 5
   */
  csoName: string;
  /**
   * 职位
   * @minLength 0
   * @maxLength 20
   */
  csoJobTitle: string;
  /**
   * 联系方式
   * @minLength 11
   * @maxLength 11
   */
  csoPhone: string;
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
  hasBadData?: boolean;
  badData?: string[];
  goodData?: object[];
}

export interface ResultEnterpriseInfoImportVO {
  code?: string;
  data?: EnterpriseInfoImportVO;
  message?: string;
  success?: boolean;
}

export type JsonNode = object;

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
  publishTime: Date;
  /** 附件id */
  fileId?: string;
  /**
   * 公告ID
   * @format int64
   */
  uid: number;
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
  publishTime: Date;
  /** 附件id */
  fileId?: string;
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
  stackTrace?: {
    classLoaderName?: string;
    moduleName?: string;
    moduleVersion?: string;
    methodName?: string;
    fileName?: string;
    /** @format int32 */
    lineNumber?: number;
    className?: string;
    nativeMethod?: boolean;
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
  timestamp?: Date;
  error?: Error;
}

export interface OrganizationVO {
  id?: string;
  parentOrg?: string;
  fullName?: string;
  name?: string;
  shortName?: string;
  districtCode?: string;
  /** @format int32 */
  sort?: number;
  unifiedSocialCreditIdentifie?: string;
  fax?: string;
  orgType?: string;
  orgCode?: string;
  tel?: string;
  children?: OrganizationVO[];
}

export interface ResultListUserInfoVO {
  code?: string;
  data?: UserInfoVO[];
  message?: string;
  success?: boolean;
}

export interface UserInfoVO {
  userId?: string;
  /** @format int32 */
  pbfRanking?: number;
  pbfDescription?: string;
  pbfIsReserved?: boolean;
  /** @format int32 */
  pbfReversion?: number;
  /** @format int32 */
  pbfStatus?: number;
  avatar?: string;
  attachmentPreviewUrl?: string;
  email?: string;
  nickName?: string;
  phoneNumber?: string;
  userName?: string;
  name?: string;
  organizationId?: string;
  /** @format int32 */
  sort?: number;
  idcard?: string;
  gender?: string;
  officeNumber?: string;
  job?: string;
  contactAddress?: string;
  organizationFullName?: string;
  organizationShortName?: string;
  organizationVO?: OrganizationVO;
  partOrganizationVOs?: OrganizationVO[];
  partTimeOrganization?: string;
  dataSpecific?: string;
  dataRegional?: string;
  permissionDistrictCode?: string;
  districtObjType?: string;
  permissionSystemDistrictName?: string;
  permissionEnable?: boolean;
  permissionParentDistrictCode?: string;
  permissionParentDistrictName?: string;
  /** @format int32 */
  districtObjLevel?: number;
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
  id?: string;
  parentMenu?: string;
  parentMenuName?: string;
  menuName?: string;
  menuCode?: string;
  menuUrl?: string;
  menuIcon?: string;
  menuDisabled?: boolean;
  menuPopup?: boolean;
  menuHide?: boolean;
  /** @format int32 */
  sort?: number;
  applicationsId?: string;
  buttonChildren?: MenuButtonVO[];
}

export interface ResultListMenuVO {
  code?: string;
  data?: MenuVO[];
  message?: string;
  success?: boolean;
}

export interface ResultListOrganizationVO {
  code?: string;
  data?: OrganizationVO[];
  message?: string;
  success?: boolean;
}

export interface ResultUserInfoVO {
  code?: string;
  data?: UserInfoVO;
  message?: string;
  success?: boolean;
}

export interface DistrictVO {
  /** @format int64 */
  cmKid?: number;
  /** @format int64 */
  parentId?: number;
  parentName?: string;
  parentCode?: string;
  /** @format int32 */
  objLevel?: number;
  name?: string;
  /** @format int32 */
  code?: number;
  objX?: number;
  objY?: number;
  children?: DistrictVO[];
  note1?: string;
  note2?: string;
  note3?: string;
  objType?: string;
}

export interface ResultDistrictVO {
  code?: string;
  data?: DistrictVO;
  message?: string;
  success?: boolean;
}

export interface ResultThirdBuildDetailVO {
  code?: string;
  data?: ThirdBuildDetailVO;
  message?: string;
  success?: boolean;
}

export interface RiskThirdGuardItemDTO {
  uid?: string;
  /** 看护记录描述 */
  remark?: string;
  /** 看护记录图片,逗号分割,最多三张 */
  picIds?: string[];
  /**
   * 看护时间
   * @format date-time
   */
  guardTime?: Date;
  /** 看护人员姓名 */
  guarderName?: string;
}

export interface ThirdBuildDetailVO {
  guardList?: RiskThirdGuardItemDTO[];
  uid?: string;
  /** 施工类型 */
  buildType?: string;
  /** 交底状态 */
  reportState?: ThirdBuildDetailVoReportState;
  /** 看护状态 */
  guardState?: ThirdBuildDetailVoGuardState;
  /** 所属单位 */
  orgId?: string;
  /**
   * 计划施工开始时间
   * @format date
   */
  planTimeStart?: string;
  /**
   * 计划施结束工时间
   * @format date
   */
  planTimeEnd?: string;
  /** 第三方施工状态 */
  buildState?: ThirdBuildDetailVoBuildState;
  /**
   * 上报时间
   * @format date-time
   */
  createTime?: Date;
  /** 所属区域 */
  districtId?: string;
  /** 施工位置 */
  constructionAddress?: string;
  /** 经度 */
  longitude?: number;
  /** 纬度 */
  latitude?: number;
  /**
   * 实际施工开始时间
   * @format date-time
   */
  realBuildTimeStart?: Date;
  /**
   * 实际施工结束时间
   * @format date-time
   */
  realBuildTimeEnd?: Date;
  /** 交底人姓名 */
  reporterName?: string;
  /** 交底人手机号 */
  reporterPhone?: string;
  /** 建设单位名称 */
  buildUnitName?: string;
  /** 建设单位联系人姓名 */
  buildUnitContactName?: string;
  /** 建设单位联系电话 */
  buildUnitContactPhone?: string;
  /** 监理单位名称 */
  supUnitName?: string;
  /** 监理单位联系人 */
  supUnitContactName?: string;
  /** 监理单位联系人手机号 */
  supUnitContactPhone?: string;
  /** 交底照片id,逗号分隔,最多三张 */
  reportPicIds?: string[];
  /** 管网保护方案照片,逗号分隔,最多三张 */
  schemaPicIds?: string[];
  /** 管网保护协议照片,逗号分隔,最多三张 */
  protocolPicIds?: string[];
}

export interface ResultThirdBuildHandleFlowVO {
  code?: string;
  data?: ThirdBuildHandleFlowVO;
  message?: string;
  success?: boolean;
}

export interface ThirdBuildHandleFlowVO {
  flows?: ThirdBuildHandleItemDTO[];
}

export interface ThirdBuildHandleItemDTO {
  /** 标题 */
  title?: string;
  /**
   * 阶段时间
   * @format date-time
   */
  stageTime?: Date;
  /** 操作人 */
  operator?: string;
  /** 交底照片id */
  reportPicIds?: string[];
  /** 管网保护方案照片 */
  schemaPicIds?: string[];
  /** 管网保护协议照片 */
  protocolPicIds?: string[];
  /** 交底相关附件id */
  fileIds?: string[];
  /** 看护记录描述 */
  remark?: string;
  /**
   * 看护记录图片
   * @maxItems 3
   * @minItems 0
   */
  picIds?: string[];
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
  selectIds?: object[];
  paging?: boolean;
  buildType?: string[];
  orgIds?: string[];
  districtIds?: string[];
  /** @format date-time */
  startTime?: Date;
  /** @format date-time */
  endTime?: Date;
  buildStates?: ThirdBuildPageQueryBuildStates[];
  reportStates?: ThirdBuildPageQueryReportStates[];
  guardStates?: ThirdBuildPageQueryGuardStates[];
  /** @uniqueItems true */
  selectIdsAsLong?: number[];
  /** @uniqueItems true */
  districtIdAsSet?: string[];
  districtIdAsList?: string[];
  /** @uniqueItems true */
  selectIdsAsString?: string[];
}

export interface PageResultListThirdBuildPageVO {
  code?: string;
  data?: ThirdBuildPageVO[];
  message?: string;
  /** @format int64 */
  total?: number;
  success?: boolean;
}

export interface ThirdBuildPageVO {
  /** 施工id */
  uid?: string;
  /** 施工类型 */
  buildType?: string;
  /** 第三方施工状态 */
  buildState?: ThirdBuildPageVoBuildState;
  /** 交底状态 */
  reportState?: ThirdBuildPageVoReportState;
  /** 看护状态 */
  guardState?: ThirdBuildPageVoGuardState;
  /** 所属单位 */
  orgId?: string;
  /** 所属区域 */
  districtId?: string;
  /** 施工位置 */
  constructionAddress?: string;
  /**
   * 计划施工开始时间
   * @format date
   */
  planTimeStart?: string;
  /**
   * 计划施结束工时间
   * @format date
   */
  planTimeEnd?: string;
  latitude?: number;
  longitude?: number;
  buildUnitName?: string;
  buildUnitContactPhone?: string;
  supUnitName?: string;
  supUnitContactPhone?: string;
}

export interface ResultRiskDangerStatisticsOfWordVO {
  code?: string;
  data?: RiskDangerStatisticsOfWordVO;
  message?: string;
  success?: boolean;
}

export interface RiskDangerStatisticsOfWordVO {
  /**
   * 隐患总数
   * @format int64
   */
  risk_total?: number;
  /**
   * 上期遗留隐患
   * @format int64
   */
  last_risk_total?: number;
  /**
   * 本期新增隐患
   * @format int64
   */
  add_risk_total?: number;
  /**
   * 本期治理隐患
   * @format int64
   */
  deal_risk_total?: number;
  /**
   * 重大隐患
   * @format int64
   */
  major_risk_total?: number;
  /**
   * 较大隐患
   * @format int64
   */
  more_risk_total?: number;
  /**
   * 一般隐患
   * @format int64
   */
  commonly_risk_total?: number;
  /** 高风险管道公里 */
  read_level_total?: string;
  /** 高风险管道公里占比 */
  read_level_total_per?: string;
}

export interface ResultListRiskExportVO {
  code?: string;
  data?: RiskExportVO[];
  message?: string;
  success?: boolean;
}

/** 隐患数据导出 */
export interface RiskExportVO {
  /** 隐患主键 */
  uid?: string;
  /** 隐患编号 */
  dangerId?: string;
  /** 风险要素主体 */
  subjectType?: string;
  /** 风险要素类型 */
  dangerType?: string;
  /** 风险要素子类型 */
  dangerSubtype?: string;
  /** 隐患主体编号 */
  subjectId?: string;
  /** 权属单位 */
  orgId?: string;
  /** 所属区域 */
  districtId?: string;
  /** 具体位置 */
  address?: string;
  /** 风险要素等级 */
  level?: RiskExportVoLevel;
  /** 排查人员 */
  checkBy?: string;
  /** 排查人员联系电话 */
  checkPhone?: string;
  /**
   * 排查时间
   * @format date
   */
  checkDate?: string;
  /**
   * 整改期限
   * @format date
   */
  deadline?: string;
  /** 风险要素状态 */
  state?: RiskExportVoState;
  /** 隐患来源 */
  dangerSource?: RiskExportVoDangerSource;
  /** 整改责任人 */
  director?: string;
  /** 整改责任人电话 */
  directorPhone?: string;
  /** 整改措施 */
  measure?: string;
  /**
   * 计划整改时间
   * @format date
   * @pattern yyyy-MM-dd
   */
  planTime?: string;
  /** 排查单位 */
  checkDept?: string;
  /** 描述 */
  remark?: string;
  /** 是否密集场所 */
  isDense?: boolean;
  /** 推送人 */
  pushBy?: string;
  /**
   * 推送时间
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  pushTime?: Date;
  /**
   * 更新时间
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  updateTime?: Date;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
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
  selectIds?: object[];
  paging?: boolean;
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
  enterpriseId?: number[];
  /** 是否过期 */
  isExpiration?: PerCertificatePageQueryIsExpiration;
  /** 当前岗位 */
  currentPosition?: PerCertificatePageQueryCurrentPosition;
  /** 人员编号 */
  code?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: number[];
  /** @uniqueItems true */
  districtIdAsSet?: string[];
  districtIdAsList?: string[];
  /** @uniqueItems true */
  selectIdsAsString?: string[];
}

export interface PageResultListPerCertificatePageVO {
  code?: string;
  data?: PerCertificatePageVO[];
  message?: string;
  /** @format int64 */
  total?: number;
  success?: boolean;
}

/** 企业人员资质证照分页查询 */
export interface PerCertificatePageVO {
  /** 企业人员岗位信息ID */
  uid?: string;
  /** 人员名称 */
  name?: string;
  /** 人员编号 */
  code?: string;
  /** 所属企业 */
  enterpriseId?: string;
  /** 所属企业 */
  enterpriseName?: string;
  /** 经营范围(类别) */
  businessScope?: PerCertificatePageVoBusinessScope[];
  /** 身份证号码 */
  idNo?: string;
  /** 性别 */
  gender?: PerCertificatePageVoGender;
  /**
   * 出生年月
   * @format date
   */
  birthday?: string;
  /** 当前岗位 */
  currentPosition?: PerCertificatePageVoCurrentPosition;
  /** 是否在岗 */
  isWorking?: PerCertificatePageVoIsWorking;
  /** 从业资格证编号 */
  proQuaNo?: string;
  /** 联系方式 */
  contactInfo?: string;
  /** 是否过期 */
  isExpiration?: PerCertificatePageVoIsExpiration;
  /** 过期时间 */
  expirationDate?: string;
  /** 通过年份 */
  effectiveDate?: string;
}

/** 企业人员资质证照信息详情 */
export interface PerCertificateDetailVO {
  /** 企业人员岗位信息ID */
  uid?: string;
  /** 人员名称 */
  name?: string;
  /** 人员编号 */
  code?: string;
  /** 所属企业 */
  enterpriseId?: string;
  /** 所属企业 */
  enterpriseName?: string;
  /** 经营范围(类别) */
  businessScope?: PerCertificateDetailVoBusinessScope[];
  /** 身份证号码 */
  idNo?: string;
  /** 性别 */
  gender?: PerCertificateDetailVoGender;
  /**
   * 出生年月
   * @format date
   */
  birthday?: string;
  /** 当前岗位 */
  currentPosition?: PerCertificateDetailVoCurrentPosition;
  /** 是否在岗 */
  isWorking?: PerCertificateDetailVoIsWorking;
  /** 从业资格证编号 */
  proQuaNo?: string;
  /** 联系方式 */
  contactInfo?: string;
  /** 是否过期 */
  isExpiration?: PerCertificateDetailVoIsExpiration;
  /** 过期时间 */
  expirationDate?: string;
  /** 通过年份 */
  effectiveDate?: string;
  /** 附件 */
  files?: string;
  /** 人员岗位信息列表 */
  positionQuery?: PerPositionQuery[];
  /** 人员资格证信息列表 */
  certificateQuery?: PerCertificateQuery[];
}

export interface ResultPerCertificateDetailVO {
  code?: string;
  /** 企业人员资质证照信息详情 */
  data?: PerCertificateDetailVO;
  message?: string;
  success?: boolean;
}

/** 企业人员资质证照信息汇总 */
export interface PerCertificateCountVO {
  /**
   * 企业员工总数
   * @format int64
   */
  perTotal?: number;
  /**
   * 企业负责人
   * @format int64
   */
  qyfzrCnt?: number;
  /**
   * 安全管理人员
   * @format int64
   */
  aqglryCnt?: number;
  /**
   * 燃气输配场站工
   * @format int64
   */
  rqspczgCnt?: number;
  /**
   * 液化石油气库站工
   * @format int64
   */
  yhsyqkzgCnt?: number;
  /**
   * 压缩天然气场站工
   * @format int64
   */
  ystrqzgCnt?: number;
  /**
   * 液化天然气储运工
   * @format int64
   */
  yhtrqcygCnt?: number;
  /**
   * 汽车加气站操作工
   * @format int64
   */
  qcjqzczgCnt?: number;
  /**
   * 燃气管网工
   * @format int64
   */
  rqgwgCnt?: number;
  /**
   * 燃气用户安装检修工
   * @format int64
   */
  rqyhazjxgCnt?: number;
  /**
   * 瓶装燃气送气工
   * @format int64
   */
  pzrqsqgCnt?: number;
  /**
   * 在岗人员
   * @format int64
   */
  onDutyCnt?: number;
  /**
   * 离职人员
   * @format int64
   */
  departCnt?: number;
}

export interface ResultPerCertificateCountVO {
  code?: string;
  /** 企业人员资质证照信息汇总 */
  data?: PerCertificateCountVO;
  message?: string;
  success?: boolean;
}

export interface MessageContent {
  /** @format int64 */
  id?: number;
  bizId?: string;
  title?: string;
  /** @format date-time */
  timestamp?: Date;
  type?: string;
  content?: Record<string, any>;
  properties?: Record<string, any>;
  read?: boolean;
}

export interface PageResultListMessageContent {
  code?: string;
  data?: MessageContent[];
  message?: string;
  /** @format int64 */
  total?: number;
  success?: boolean;
}

export interface ResultMapStringListMessageContent {
  code?: string;
  data?: Record<string, any>;
  message?: string;
  success?: boolean;
}

export interface DictionaryItem {
  pid?: string;
  id?: string;
  label?: string;
  value?: string;
  /** @format int32 */
  order?: number;
  desc?: string;
  hasChildren?: boolean;
  notes1?: string;
  notes2?: string;
  systemFlag?: string;
  text?: string;
}

export interface ResultListDictionaryItem {
  code?: string;
  data?: DictionaryItem[];
  message?: string;
  success?: boolean;
}

/** 隐患统计视图请求 */
export interface RiskStatisticsQuery {
  /** 是否根据所属企业汇总 */
  isGroupByOrg?: boolean;
  /** 隐患第一级类型 */
  subjectType?: string[];
  /** 隐患级别 */
  level?: string[];
  /** 日期类型 */
  dateType?: string;
  /** 日期详情 */
  dateDetail?: string;
  /** 所属组织机构id */
  orgId?: string[];
  /** 行政区划id */
  districtId?: string[];
}

export interface ResultListRiskStatisticsVO {
  code?: string;
  data?: RiskStatisticsVO[];
  message?: string;
  success?: boolean;
}

/** 隐患统计视图返回 */
export interface RiskStatisticsVO {
  /** 隐患第一级类型 */
  subjectType?: string;
  /** 所属组织机构 */
  orgId?: string;
  /** 风险要素等级 */
  level?: RiskStatisticsVoLevel;
  /** 风险要素状态 */
  state?: RiskStatisticsVoState;
  /** 隐患来源 */
  dangerSource?: RiskStatisticsVoDangerSource;
  /** 日期详情 */
  dateDetail?: string;
  /** @format int64 */
  ctotal?: number;
}

/** 组织机构各维度隐患统计 */
export interface OrgHidangerTypeSummaryDTO {
  /**
   * 总数
   * @format int32
   */
  total?: number;
  /**
   * 待整改
   * @format int32
   */
  waitHandle?: number;
  /**
   * 待消除
   * @format int32
   */
  waitAudit?: number;
  /**
   * 重大隐患个数
   * @format int32
   */
  zd?: number;
  /**
   * 督办个数
   * @format int32
   */
  db?: number;
  /**
   * 企业上报个数
   * @format int32
   */
  org?: number;
  /**
   * 政府检查个数
   * @format int32
   */
  gov?: number;
  /**
   * 系统辨识个数
   * @format int32
   */
  sys?: number;
}

export interface ResultOrgHidangerTypeSummaryDTO {
  code?: string;
  /** 组织机构各维度隐患统计 */
  data?: OrgHidangerTypeSummaryDTO;
  message?: string;
  success?: boolean;
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
  selectIds?: object[];
  paging?: boolean;
  /** 检查计划编号.小程序创建隐患整改单时专用.其他请勿使用 */
  planCode?: string;
  /** 隐患主体 */
  subjectType?: string;
  /** 风险要素类别 */
  dangerType?: string;
  /** 风险要素子类别 */
  dangerSubType?: string;
  /** 隐患级别 */
  level?: HidangerOrgPageQueryLevel[];
  /** 隐患状态 */
  state?: HidangerOrgPageQueryState[];
  /** 隐患来源 */
  dangerSource?: HidangerOrgPageQueryDangerSource[];
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
  dangerTypeStr?: string;
  dangerSubTypeStr?: string;
  subjectTypeStr?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: number[];
  /** @uniqueItems true */
  districtIdAsSet?: string[];
  districtIdAsList?: string[];
  /** @uniqueItems true */
  selectIdsAsString?: string[];
}

/** 企业隐患管理-分页 */
export interface HidangerOrgPageVO {
  /** 数据主键 */
  uid?: string;
  /** 隐患主体类型 */
  subjectType?: string;
  /** 隐患类别 */
  dangerType?: string;
  /** 风险要素子类型 */
  dangerSubtype?: string;
  /** 风险要素等级 */
  level?: HidangerOrgPageVoLevel;
  /** 隐患描述 */
  remark?: string;
  /** 风险要素状态 */
  state?: HidangerOrgPageVoState;
  /** 隐患来源 */
  dangerSource?: HidangerOrgPageVoDangerSource;
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
  /** 排查人 */
  checkBy?: string;
  /** @format date-time */
  pushTime?: Date;
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
  ago?: string;
}

export interface PageResultListHidangerOrgPageVO {
  code?: string;
  data?: HidangerOrgPageVO[];
  message?: string;
  /** @format int64 */
  total?: number;
  success?: boolean;
}

/** 企业隐患管理-分页 */
export interface CheckPlanRelDangerVO {
  /** 数据主键 */
  uid?: string;
  /** 隐患主体类型 */
  subjectType?: string;
  /** 隐患类别 */
  dangerType?: string;
  /** 风险要素子类型 */
  dangerSubtype?: string;
  /** 风险要素等级 */
  level?: CheckPlanRelDangerVoLevel;
  /** 隐患描述 */
  remark?: string;
  /** 风险要素状态 */
  state?: CheckPlanRelDangerVoState;
  /** 隐患来源 */
  dangerSource?: CheckPlanRelDangerVoDangerSource;
  /**
   * 排查日期
   * @format date
   */
  checkDate?: string;
  /** 排查人 */
  checkBy?: string;
  /** 地址 */
  address?: string;
  /**
   * 经度
   * @format double
   */
  longitude?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number;
  /** 行政区划 */
  districtId?: string;
  /** 组织机构 */
  orgId?: string;
}

export interface ResultListCheckPlanRelDangerVO {
  code?: string;
  data?: CheckPlanRelDangerVO[];
  message?: string;
  success?: boolean;
}

export interface HidangerCheckPlanDetailVO {
  /** 安全检查计划UID */
  uid?: string;
  /** 安全检查计划类型 */
  type?: HidangerCheckPlanDetailVoType;
  /** 标题 */
  title?: string;
  /** 安全检查编号 */
  code?: string;
  /**
   * 计划时间开始
   * @format date
   */
  startDate?: string;
  /**
   * 计划时间结束
   * @format date
   */
  endDate?: string;
  /** 目标检查企业 */
  targetOrgId?: string;
  /** 目标检查企业负责人 */
  targetOrgOwner?: string;
  /** 目标检查企业联系方式 */
  targetOrgPhone?: string;
  /** 目标检查企业地址 */
  targetOrgAddr?: string;
  /** 主管部门 */
  masterOrgId?: string;
  /** 检查人员 */
  checkers?: string;
  /** 安全检查计划状态 */
  handleState?: HidangerCheckPlanDetailVoHandleState;
  /** 整改单列表 */
  handleOrders?: HidangerHandleOrderDTO[];
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
  targetOrgMasterSign?: string[];
  /** 专家签名 */
  expertSign?: string[];
}

export interface ResultHidangerCheckPlanDetailVO {
  code?: string;
  data?: HidangerCheckPlanDetailVO;
  message?: string;
  success?: boolean;
}

export interface HiDangerCheckPlanSummaryVO {
  list?: HiDangerPlanSummaryItemDTO[];
}

export interface HiDangerPlanSummaryItemDTO {
  /** 安全检查计划类型 */
  type?: HiDangerPlanSummaryItemDtoType;
  /** @format int32 */
  count?: number;
}

export interface ResultHiDangerCheckPlanSummaryVO {
  code?: string;
  data?: HiDangerCheckPlanSummaryVO;
  message?: string;
  success?: boolean;
}

export interface HiDangerCheckPlanSelectionsDTO {
  /** 安全检查计划编号 */
  value?: string;
  /** 安全检查计划ID */
  label?: string;
}

export interface ResultListHiDangerCheckPlanSelectionsDTO {
  code?: string;
  data?: HiDangerCheckPlanSelectionsDTO[];
  message?: string;
  success?: boolean;
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
  selectIds?: object[];
  paging?: boolean;
  /** 安全检查计划类型 */
  type?: HiDangerCheckPageQueryType;
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
  /** @uniqueItems true */
  orgIds?: string[];
  queryOrder?: string;
  /** @uniqueItems true */
  selectIdsAsLong?: number[];
  /** @uniqueItems true */
  districtIdAsSet?: string[];
  districtIdAsList?: string[];
  /** @uniqueItems true */
  selectIdsAsString?: string[];
}

/** 安全检查-分页VO */
export interface HiDangerCheckPageVO {
  /** 数据主键 */
  uid?: string;
  /** 安全检查计划类型 */
  type?: HiDangerCheckPageVoType;
  /** 检查编号 */
  planCode?: string;
  /** 检查标题 */
  title?: string;
  /**
   * 开始日期
   * @format date
   */
  startDate?: string;
  /**
   * 结束日期
   * @format date
   */
  endDate?: string;
  /** 抽查企业 */
  masterOrgId?: string;
  /** 安全检查计划状态 */
  handleState?: HiDangerCheckPageVoHandleState;
  /** 检查小组 */
  checkers?: string;
  /** 计划创建人 */
  planCreator?: string;
}

export interface PageResultListHiDangerCheckPageVO {
  code?: string;
  data?: HiDangerCheckPageVO[];
  message?: string;
  /** @format int64 */
  total?: number;
  success?: boolean;
}

export interface HidangerGisVO {
  /** 数据主键 */
  uid?: string;
  /** 隐患主体类型 */
  subjectType?: string;
  /** 隐患类别 */
  dangerType?: string;
  /** 风险要素子类型 */
  dangerSubtype?: string;
  /** 风险要素等级 */
  level?: HidangerGisVoLevel;
  /** 经度 */
  longitude?: number;
  /** 纬度 */
  latitude?: number;
}

export interface ResultListHidangerGisVO {
  code?: string;
  data?: HidangerGisVO[];
  message?: string;
  success?: boolean;
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
  stageTime?: Date;
  /** 操作人 */
  operator?: string;
  /** 操作人所属组织id */
  operatorOrgId?: string;
  /** 操作人所属组织名称 */
  operatorOrgName?: string;
  /** 图片id列表 */
  picIds?: string[];
  /** 附件id列表 */
  fileIds?: string[];
  /** 评论列表 */
  commentList?: LeaderCommentDTO[];
  content?: object;
}

export interface HidnagerFlowVO {
  dangerId?: string;
  /** 隐患来源 */
  dangerSource?: HidnagerFlowVoDangerSource;
  /** 风险要素等级 */
  level?: HidnagerFlowVoLevel;
  /** 风险要素状态 */
  state?: HidnagerFlowVoState;
  flow?: HidangerFlowDTO[];
}

/** 评论列表 */
export interface LeaderCommentDTO {
  uid?: string;
  fid?: string;
  /** @format date-time */
  commentTime?: Date;
  leaderName?: string;
  leaderOrgName?: string;
  leaderComment?: string;
  children?: LeaderCommentDTO[];
}

export interface ResultHidnagerFlowVO {
  code?: string;
  data?: HidnagerFlowVO;
  message?: string;
  success?: boolean;
}

/** 风险要素-汇总vo */
export interface HidangerFactorsSummaryVO {
  /** 汇总统计列表 */
  list?: SummaryItem[];
}

export interface ResultHidangerFactorsSummaryVO {
  code?: string;
  /** 风险要素-汇总vo */
  data?: HidangerFactorsSummaryVO;
  message?: string;
  success?: boolean;
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
  selectIds?: object[];
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
  years?: string[];
  /** 压力级别 */
  pressureLevels?: HidangerFactorsSummaryPageQueryPressureLevels[];
  materialStr?: string;
  dangerTypeStr?: string;
  dangerSubTypeStr?: string;
  pressureLevelCodes?: string[];
  /** @uniqueItems true */
  selectIdsAsLong?: number[];
  /** @uniqueItems true */
  districtIdAsSet?: string[];
  districtIdAsList?: string[];
  /** @uniqueItems true */
  selectIdsAsString?: string[];
}

/** 风险要素-分页 */
export interface HidangerFactorsSummaryPageVO {
  /** 数据主键 */
  uid?: string;
  /** 管道id */
  pipelineId?: string;
  /** 行政区划 */
  districtId?: string;
  /** 组织机构 */
  orgId?: string;
  /** 地址 */
  address?: string;
  /** 风险要素等级 */
  level?: HidangerFactorsSummaryPageVoLevel;
  /** 燃气管网风险要素类型 */
  dangerType?: HidangerFactorsSummaryPageVoDangerType;
  /** 风险要素子类型 */
  dangerSubtype?: HidangerFactorsSummaryPageVoDangerSubtype;
  /** 管道材质 */
  material?: HidangerFactorsSummaryPageVoMaterial;
  /**
   * 管道服役年限
   * @format int32
   */
  years?: number;
  /** 压力级别 */
  pressureLevel?: HidangerFactorsSummaryPageVoPressureLevel;
  /**
   * 管道长度
   * @format double
   */
  length?: number;
  /** 经度 */
  longitude?: number;
  /** 纬度 */
  latitude?: number;
  /** 实际值 */
  realValue?: string;
  /** 标准值 */
  standardValue?: string;
}

export interface PageResultListHidangerFactorsSummaryPageVO {
  code?: string;
  data?: HidangerFactorsSummaryPageVO[];
  message?: string;
  /** @format int64 */
  total?: number;
  success?: boolean;
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
  dimension?: string[];
  /** 评估依据 */
  specifications?: Specifications[];
  /**
   * 管控措施编码列表
   * @uniqueItems true
   */
  measures?: string[];
  /** 实际数据 */
  readData?: string;
  /** 关联的管线 */
  relPipes?: GisRelPipInfo[];
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
  /**
   * 物探时间
   * @format date
   */
  sdate?: string;
  /** @format date */
  ddate?: string;
  sdepth?: number;
  edepth?: number;
}

export interface ResultRiskFactorDetailVO {
  code?: string;
  /** 风险隐患详情 */
  data?: RiskFactorDetailVO;
  message?: string;
  success?: boolean;
}

/** 隐患基础信息 */
export interface RiskDetailInfo {
  /** 标题 */
  title?: string;
  /** 风险要素状态 */
  state?: RiskDetailInfoState;
  是否挂牌督办?: string;
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
  riskInfo?: RiskDetailInfo;
  /** 关联管线详情 */
  pipeInfo?: PipelineInfo;
  /** 关联管线详情 */
  otherPipeInfo?: PipelineInfo;
  /** 评估依据 */
  specifications?: Specifications[];
  /** 风险评估矩阵 */
  riskTable?: number[][];
  /** 维度描述 */
  leak?: DimensionDetail;
  /** 维度描述 */
  severity?: DimensionDetail;
  /** 维度描述 */
  risk?: DimensionDetail;
  /** 后果影响因素 */
  norms?: Record<string, any>;
  /** 当前管控措施 */
  currentMeasures?: string;
  /** 管线关联的设备编号 */
  relDeviceCodes?: string[];
  /** 管控建议列表 */
  measures?: Record<string, any>;
  /** 周边环境(200米) */
  aroundEnv?: VicinalinfoDto;
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
  protagList?: ObjectExtDto[];
  /** 危险源列表 */
  dangerList?: ObjectExtDto[];
  /** 缓冲面 */
  geom?: string;
}

export interface ResultObject {
  code?: string;
  data?: object;
  message?: string;
  success?: boolean;
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
  selectIds?: object[];
  paging?: boolean;
  /** 用户类型 */
  userType?: PageGasUserQueryUserType[];
  /** 用气类型 */
  useType?: PageGasUserQueryUseType[];
  /** @uniqueItems true */
  selectIdsAsLong?: number[];
  /** @uniqueItems true */
  districtIdAsSet?: string[];
  districtIdAsList?: string[];
  /** @uniqueItems true */
  selectIdsAsString?: string[];
}

/** 修改用气用户信息 */
export interface DetailGasUserVO {
  /** 用户名称 */
  name: string;
  /** 行政区划id */
  districtId: string;
  /** 用户类型 */
  userType: DetailGasUserVoUserType;
  /** 用气类型 */
  useType: DetailGasUserVoUseType;
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
  /** 用户ID */
  uid?: string;
  /** 用户编号 */
  code?: string;
}

export interface PageResultListDetailGasUserVO {
  code?: string;
  data?: DetailGasUserVO[];
  message?: string;
  /** @format int64 */
  total?: number;
  success?: boolean;
}

export interface ResultDetailGasUserVO {
  code?: string;
  /** 修改用气用户信息 */
  data?: DetailGasUserVO;
  message?: string;
  success?: boolean;
}

/** 企业人员资质证照信息汇总 */
export interface GasUserCountVO {
  /**
   * 用气用户总数
   * @format int64
   */
  userTotal?: number;
  /**
   * 天然气用户
   * @format int64
   */
  trqCnt?: number;
  /**
   * 液化气用户
   * @format int64
   */
  yhqCnt?: number;
  /**
   * 居民天然气用户
   * @format int64
   */
  jmtrqCnt?: number;
  /**
   * 居民液化气用户
   * @format int64
   */
  jmyhqCnt?: number;
  /**
   * 工业天然气用户
   * @format int64
   */
  gytrqCnt?: number;
  /**
   * 工业液化气用户
   * @format int64
   */
  gyyhqCnt?: number;
  /**
   * 商业天然气用户
   * @format int64
   */
  sytrqCnt?: number;
  /**
   * 商业液化气用户
   * @format int64
   */
  syyhqCnt?: number;
}

export interface ResultGasUserCountVO {
  code?: string;
  /** 企业人员资质证照信息汇总 */
  data?: GasUserCountVO;
  message?: string;
  success?: boolean;
}

export interface EnterpriseDetailVO {
  /** 企业名称 */
  name?: string;
  /** 所属区域 */
  belongArea?: string;
  /** 经营区域 */
  businessArea?: string[];
  /** 企业地址 */
  address?: string;
  /** 经营范围(类别) */
  businessScope?: EnterpriseDetailVoBusinessScope[];
  /** 企业负责人姓名 */
  masterName?: string;
  /** 企业负责人手机号 */
  masterPhone?: string;
  /** 营业执照编号 */
  licenseNumber?: string;
  /**
   * 营业执照有效期
   * @format date
   */
  licenseExpiryDate?: string;
  /** 营业执照照片 */
  licenseImgs?: string[];
  /** 经营许可证编号 */
  permitsNumber?: string;
  /**
   * 经营许可证有效期
   * @format date
   */
  permitsExpiryDate?: string;
  /** 经营许可证照片 */
  permitsImgs?: string[];
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
  /**
   * 拥有的液化气瓶数量
   * @format int32
   */
  gasBottleCount?: number;
  /** 拥有的管线长度,km */
  pipelineLengthKm?: number;
  /** 特种设备列表 */
  specialEquips?: SpecialEquipDTO[];
  /** 企业安全负责人列表 */
  csos?: EnterpriseCsoDTO[];
}

export interface ResultEnterpriseDetailVO {
  code?: string;
  data?: EnterpriseDetailVO;
  message?: string;
  success?: boolean;
}

export interface EnterpriseSummaryVO {
  /**
   * 企业总数
   * @format int32
   */
  total?: number;
  /**
   * 管道气经营企业数量
   * @format int32
   */
  pipelineGas?: number;
  /**
   * 液化气经营企业数量
   * @format int32
   */
  liquefiedGas?: number;
  /**
   * 汽车加气站企业数量
   * @format int32
   */
  carGas?: number;
  /** 拥有的燃气管网长度,km */
  totalPipelineLength?: number;
  /**
   * 拥有的燃气场站
   * @format int32
   */
  stationTotal?: number;
  /**
   * 拥有的液化气瓶
   * @format int32
   */
  liquefiedTotal?: number;
  /**
   * 拥有的特种设备
   * @format int32
   */
  specialEquipTotal?: number;
}

export interface ResultEnterpriseSummaryVO {
  code?: string;
  data?: EnterpriseSummaryVO;
  message?: string;
  success?: boolean;
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
  selectIds?: object[];
  paging?: boolean;
  /** 经营区域 */
  businessArea?: string[];
  /** 经营类别 */
  businessScope?: EnterpriseInfoPageQueryBusinessScope[];
  /** @uniqueItems true */
  selectIdsAsLong?: number[];
  /** @uniqueItems true */
  districtIdAsSet?: string[];
  districtIdAsList?: string[];
  /** @uniqueItems true */
  selectIdsAsString?: string[];
}

export interface EnterpriseInfoPageVO {
  /** 主键 */
  uid?: string;
  /** 企业名称 */
  name?: string;
  /** 所属区域 */
  belongArea?: string;
  /** 经营区域 */
  businessArea?: string[];
  /** 地址 */
  address?: string;
  /** 经营范围 */
  businessScope?: EnterpriseInfoPageVoBusinessScope[];
  /** 企业负责人姓名 */
  masterName?: string;
  /** 企业负责人手机号 */
  masterPhone?: string;
  /** 营业执照编号 */
  licenseNumber?: string;
  /**
   * 营业执照有效期
   * @format date
   */
  licenseExpiryDate?: string;
  /** 经营许可证编号 */
  permitsNumber?: string;
  /**
   * 经营许可证有效期
   * @format date
   */
  permitsExpiryDate?: string;
  /** 所属区域 */
  districtId?: string;
  /**
   * 员工数量
   * @format int32
   */
  employeeCount?: number;
  /**
   * 特种设备数量
   * @format int32
   */
  specialEquipmentCount?: number;
}

export interface PageResultListEnterpriseInfoPageVO {
  code?: string;
  data?: EnterpriseInfoPageVO[];
  message?: string;
  /** @format int64 */
  total?: number;
  success?: boolean;
}

export interface ResultListDistrictVO {
  code?: string;
  data?: DistrictVO[];
  message?: string;
  success?: boolean;
}

export interface ResultMapStringListDictionaryItem {
  code?: string;
  data?: Record<string, any>;
  message?: string;
  success?: boolean;
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
  selectIds?: object[];
  paging?: boolean;
  /** @uniqueItems true */
  districtIds?: string[];
  /** 公告标题 */
  bulletinTitle?: string;
  /** 公告类型 */
  bulletinType?: BulletinQueryBulletinType[];
  /**
   * 发布时间开始
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  startTime?: Date;
  /**
   * 发布时间结束
   * @format date-time
   * @pattern yyyy-MM-dd HH:mm:ss
   */
  endTime?: Date;
  /** @uniqueItems true */
  selectIdsAsLong?: number[];
  /** @uniqueItems true */
  districtIdAsSet?: string[];
  districtIdAsList?: string[];
  /** @uniqueItems true */
  selectIdsAsString?: string[];
}

/** 公告信息VO */
export interface BulletinVO {
  /** id */
  uid?: string;
  /** 公告类型 */
  bulletinType?: BulletinVoBulletinType;
  /** 公告标题 */
  bulletinTitle?: string;
  /** 公告正文 */
  bulletinText?: string;
  /**
   * 发布时间
   * @format date-time
   */
  publishTime?: Date;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: Date;
  /** 创建人 */
  createBy?: string;
  /**
   * 最后更新时间
   * @format date-time
   */
  lastUpdateTime?: Date;
  /** 更新人 */
  lastUpdateBy?: string;
  /**
   * 通知日期
   * @format date
   */
  noticeTime?: string;
  /** 主管单位 */
  managerBy?: string;
  /** 通知公司 */
  noticeCompany?: string;
  fileId?: string;
}

export interface PageResultListBulletinVO {
  code?: string;
  data?: BulletinVO[];
  message?: string;
  /** @format int64 */
  total?: number;
  success?: boolean;
}

/** 公告信息VO */
export interface BulletinDetailVO {
  /**
   * id
   * @format int64
   */
  uid?: number;
  /** 公告类型 */
  bulletinType?: BulletinDetailVoBulletinType;
  /** 公告标题 */
  bulletinTitle?: string;
  /** 公告正文 */
  bulletinText?: string;
  /**
   * 发布时间
   * @format date-time
   */
  publishTime?: Date;
  /**
   * 创建时间
   * @format date-time
   */
  createTime?: Date;
  /** 创建人 */
  createBy?: string;
  /**
   * 最后更新时间
   * @format date-time
   */
  lastUpdateTime?: Date;
  /** 更新人 */
  lastUpdateBy?: string;
  /** 主管单位 */
  managerBy?: string;
  fileId?: string;
}

export interface ResultBulletinDetailVO {
  code?: string;
  /** 公告信息VO */
  data?: BulletinDetailVO;
  message?: string;
  success?: boolean;
}

/** 公告信息统计 */
export interface BulletinCountVO {
  /**
   * 公告总数
   * @format int32
   */
  total?: number;
  /**
   * 法律法规
   * @format int32
   */
  lrCnt?: number;
  /**
   * 政策文件
   * @format int32
   */
  pdCnt?: number;
  /**
   * 通知公告
   * @format int32
   */
  naCnt?: number;
}

export interface ResultBulletinCountVO {
  code?: string;
  /** 公告信息统计 */
  data?: BulletinCountVO;
  message?: string;
  success?: boolean;
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
  /** 标题 */
  title?: string;
  /** 地址 */
  address?: string;
  /**
   * 距离
   * @format int32
   */
  distance?: number;
}

export interface ResultListAroundRiskDTO {
  code?: string;
  data?: AroundRiskDTO[];
  message?: string;
  success?: boolean;
}

export interface ResultListTreeVo {
  code?: string;
  data?: TreeVo[];
  message?: string;
  success?: boolean;
}

export interface TreeVo {
  id?: string;
  label?: string;
  children?: TreeVo[];
}

/** 第三方施工状态 */
export type ThirdBuildUpdateDtoBuildState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

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

/** 风险要素审核结果 */
export type Risk2DangerDtoAuditResult = "PASS" | "NOT_PASS";

/** 用户类型 */
export type UpdateGasUserQueryUserType = "RESIDENT" | "INDUSTRY" | "BUSINESS";

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

/** 用户类型 */
export type GasUserImportDtoUserType = "RESIDENT" | "INDUSTRY" | "BUSINESS";

/** 用气类型 */
export type GasUserImportDtoUseType = "GAS" | "LIQUEFIED_GAS";

/** 用户类型 */
export type AddGasUserQueryUserType = "RESIDENT" | "INDUSTRY" | "BUSINESS";

/** 用气类型 */
export type AddGasUserQueryUseType = "GAS" | "LIQUEFIED_GAS";

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

/** 公告类型 */
export type UpdateBulletinQueryBulletinType = "NOTICE_LR" | "NOTICE_PD" | "NOTICE_NA";

/** 公告类型 */
export type AddBulletinQueryBulletinType = "NOTICE_LR" | "NOTICE_PD" | "NOTICE_NA";

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

/** 第三方施工状态 */
export type ThirdBuildPageVoBuildState = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

/** 交底状态 */
export type ThirdBuildPageVoReportState = "REPORTED" | "UNREPORTED";

/** 看护状态 */
export type ThirdBuildPageVoGuardState = "GUARDED" | "UNGUARDED";

/** 风险要素等级 */
export type RiskExportVoLevel = "ZD" | "JD" | "YB";

/** 风险要素状态 */
export type RiskExportVoState = "DRAFT" | "WAIT_HANDLE" | "WAIT_AUDIT" | "HANDLED";

/** 隐患来源 */
export type RiskExportVoDangerSource = "SYSTEM" | "GOV" | "COMPANY";

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

/** 用户类型 */
export type PageGasUserQueryUserType = "RESIDENT" | "INDUSTRY" | "BUSINESS";

/** 用气类型 */
export type PageGasUserQueryUseType = "GAS" | "LIQUEFIED_GAS";

/** 用户类型 */
export type DetailGasUserVoUserType = "RESIDENT" | "INDUSTRY" | "BUSINESS";

/** 用气类型 */
export type DetailGasUserVoUseType = "GAS" | "LIQUEFIED_GAS";

/** 经营范围(类别) */
export type EnterpriseDetailVoBusinessScope = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 经营类别 */
export type EnterpriseInfoPageQueryBusinessScope = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 经营范围 */
export type EnterpriseInfoPageVoBusinessScope = "PIPELINE_GAS" | "LIQUEFIED_GAS" | "CAR_GAS";

/** 公告类型 */
export type BulletinQueryBulletinType = "NOTICE_LR" | "NOTICE_PD" | "NOTICE_NA";

/** 公告类型 */
export type BulletinVoBulletinType = "NOTICE_LR" | "NOTICE_PD" | "NOTICE_NA";

/** 公告类型 */
export type BulletinDetailVoBulletinType = "NOTICE_LR" | "NOTICE_PD" | "NOTICE_NA";

export type ImportEnterpriseParamsType = "ENTERPRISE_INFO_IMPORT" | "GAS_USER_IMPORT" | "PER_QUA_IMPORT";

/** 燃气管网风险要素类型 */
export type TypeSummaryParamsType = "GW_SG" | "GW_MSBZ" | "GW_CY" | "GW_ZY" | "GW_JJBZ" | "GW_LH" | "OTHER";

/** 燃气管网风险要素类型 */
export type TypePageParamsType = "GW_SG" | "GW_MSBZ" | "GW_CY" | "GW_ZY" | "GW_JJBZ" | "GW_LH" | "OTHER";

export type DownloadTemplateParamsType = "ENTERPRISE_INFO_IMPORT" | "GAS_USER_IMPORT" | "PER_QUA_IMPORT";
