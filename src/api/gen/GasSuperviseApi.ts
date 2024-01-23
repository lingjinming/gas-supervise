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

import { defHttp } from "@/utils/http";
import type { PerRequestOptions } from "@/utils/http/typing";

import type {
  AccidentPageQuery,
  ActivitiesPageQuery,
  AddAccidentQuery,
  AddBaseDataRequest,
  AddBulletinQuery,
  AddCoordinateMatterQuery,
  AddEmresDrillRequest,
  AddEmresPlanRequest,
  AddGasUserQuery,
  AddOldPipeBuildQuery,
  AddPerQualificationsQuery,
  AddSuperviseMatterQuery,
  AddSuperviseRisk,
  AlarmPageRequest,
  AnalysBaseMnCaseDTO,
  AnalysBaseMnKnowledgeDTO,
  AroundRiskQuery,
  BaseDataRequest,
  BsHidangerPageQuery,
  BulletinQuery,
  BulletinSendMsgDTO,
  CasePageQuery,
  CifrsGasChPipeRepairPageQuery,
  CifrsPipeMnPipelinePageQuery,
  CifrsPipeMnPipepointPageQuery,
  ConferenceCreateRequest,
  CoordinateMatterFeedbackQuery,
  CoordinateMatterQuery,
  DataMessage,
  DeviceMapRequest,
  DeviceRequest,
  EmerVehicleInfoDTO,
  EmresDrillRequest,
  EmresMnExpertDTO,
  EmresMnExpertPageQuery,
  EmresMnMateriDTO,
  EmresMnMateriPageQuery,
  EmresMnReteamDTO,
  EmresMnReteamNearQuery,
  EmresMnReteamPageQuery,
  EmresMnRetmanDTO,
  EmresMnRetmanPageQuery,
  EmresPlanRequest,
  EnterpriseBatchImportDTO,
  EnterpriseCreateDTO,
  EnterpriseInfoPageQuery,
  EstimateSuperviseRisk,
  GasStationImportDTO,
  GasStationQuery,
  GasSupplyDTO,
  GasSupplyQuery,
  GetBsHidangerGroupSummaryParamsDangerSource,
  GetEnterpriseEnterpriseMapParamsScope,
  GetHidangerFactorsPageParamsType,
  GetHidangerFactorsSummaryParamsType,
  GetHidangerGovCheckPlanEndUserSummaryParamsMode,
  GetHidangerOrgSummaryParamsLevel,
  GovDeptCreateDTO,
  GovDeptUserCreateDTO,
  HiDangerCheckPageQuery,
  HiDangerCheckPlanCreateDTO,
  HiDangerCheckPlanUpdateDTO,
  HidangerCreateDTO,
  HidangerDictionaryUpdateDTO,
  HidangerDispatchDTO,
  HidangerDoUrgeDTO,
  HidangerFactorsSummaryPageQuery,
  HidangerImportDTO,
  HidangerOrgPageQuery,
  HiDangerSendHandleOrderDTO,
  HidangerStatementDTO,
  IDsRequestDTO,
  ImportGasUserQuery,
  ImportPerQualificationsQuery,
  IndoorAlarmQuery,
  JsonNode,
  KnowledgePageQuery,
  LeaderCommentCreateDTO,
  LinePatrolDTO,
  LinePatrolQuery,
  MonitorCurveQuery,
  MonitorRequest,
  OrgHidangerHandleDTO,
  PageGasUserQuery,
  PageOldPipeBuildQuery,
  PageRequest,
  PageResultListAccidentVO,
  PageResultListAlarmPageVO,
  PageResultListAnalysBaseMnCasePageVO,
  PageResultListAnalysBaseMnKnowledgePageVO,
  PageResultListBsHidangerDTO,
  PageResultListBsHidangerPageVO,
  PageResultListBulletinVO,
  PageResultListCifrsGasChPipeRepairPageVO,
  PageResultListCifrsPipeMnPipelinePageVO,
  PageResultListCifrsPipeMnPipepointPageVO,
  PageResultListDetailGasUserVO,
  PageResultListDevicePageVO,
  PageResultListEmerVehicleInfoVO,
  PageResultListEmresDrillVO,
  PageResultListEmresMnExpertPageVO,
  PageResultListEmresMnMateriPageVO,
  PageResultListEmresMnReteamPageVO,
  PageResultListEmresMnRetmanPageVO,
  PageResultListEmresPlanVO,
  PageResultListEnterpriseInfoPageVO,
  PageResultListGasStationPageVO,
  PageResultListGasSupplyPageVO,
  PageResultListGovDeptPageVO,
  PageResultListGovDeptUserPageVO,
  PageResultListHiDangerCheckPageVO,
  PageResultListHidangerFactorsPageVO,
  PageResultListHidangerFactorsSummaryPageVO,
  PageResultListHidangerOrgPageVO,
  PageResultListLinePatrolPageVO,
  PageResultListMessageContent,
  PageResultListMonitorPageVO,
  PageResultListOldPipeBuildVO,
  PageResultListPerCertificatePageVO,
  PageResultListSafeCheckTargetDTO,
  PageResultListSafeCheckTaskPageVO,
  PageResultListSafeCheckTopicPageVO,
  PageResultListScoringPageVO,
  PageResultListSecCheckThreeYearsUnCheckPageDTO,
  PageResultListSecurityCheckPageVO,
  PageResultListSecurityCheckRecPageVO,
  PageResultListSuperviseActivitiesPageVO,
  PageResultListSuperviseNotifyRulePageVO,
  PageResultListSysNotifyTemplatePageVO,
  PageResultListThirdBuildPageVO,
  PageResultListVehicleInfoVO,
  PageResultListWarnPageVO,
  ParamQuery,
  PerCertificatePageQuery,
  PerimeterSearchRequest,
  ProjectRiskDangerRequest,
  ResultAccessDataVO,
  ResultAccidentStatisticsVO,
  ResultAccidentSummaryVO,
  ResultAccidentVO,
  ResultAlarmCountTrendVO,
  ResultAlarmSummaryVO,
  ResultAllOnlineRateVO,
  ResultAnalysBaseMnCaseBaseVO,
  ResultAnalysBaseMnCaseDetailVO,
  ResultAnalysBaseMnKnowledgeDetailVO,
  ResultBaseBotOverallVO,
  ResultBaseDataVO,
  ResultBaseEntOverallVO,
  ResultBaseGasSupplyVO,
  ResultBaseLngOverallVO,
  ResultBaseNgOverallVO,
  ResultBaseOverallVO,
  ResultBasePipeOverallVO,
  ResultBaseSpecDevVO,
  ResultBaseStnOverallVO,
  ResultBasicScreenUserCountVO,
  ResultBoolean,
  ResultBottleInfoVO,
  ResultBsHidangerHandleSummaryVO,
  ResultBsOldPipeConfigDTO,
  ResultBsPipeGasCheckSummaryVO,
  ResultBsPipeGasHidangerSummaryVO,
  ResultBulletinCountVO,
  ResultBulletinDetailVO,
  ResultCheckPlanEndUserSummaryVO,
  ResultCheckPlanInfoVO,
  ResultCifrsGasChPipeRepairDetailVO,
  ResultCifrsPipeMnPipelineDetailVO,
  ResultCifrsPipeMnPipepointDetailVO,
  ResultCifrsPipeStatisticsVO,
  ResultClientAlarmCountVO,
  ResultClientDeviceRateVO,
  ResultComSupLgEnterpriseVO,
  ResultComSupSafeCheckVO,
  ResultComSupSubjectTypeVO,
  ResultCoordinateMatterFeedbackVO,
  ResultCreateConferenceDTO,
  ResultDangerDetailVO,
  ResultDetailGasUserVO,
  ResultDeviceMapVO,
  ResultDeviceSummaryVO,
  ResultDistrictVO,
  ResultEmerVehicleInfoVO,
  ResultEmresDrillSummaryVO,
  ResultEmresDrillVO,
  ResultEmresMnExpertDetailVO,
  ResultEmresMnMateriDetailVO,
  ResultEmresMnReteamBaseVO,
  ResultEmresMnReteamDetailVO,
  ResultEmresMnRetmanDetailVO,
  ResultEmresPlanSummaryVO,
  ResultEmresPlanVO,
  ResultEndUserHidangerSummary,
  ResultEndUserSecCheckSummaryVO,
  ResultEnterpriseDetailVO,
  ResultEnterpriseDevResInfoVO,
  ResultEnterpriseInfoImportVO,
  ResultEnterpriseScoringViewVO,
  ResultEnterpriseSummaryVO,
  ResultExcelImportValidationVO,
  ResultFileUpdateResponseDTO,
  ResultGasStationSumVO,
  ResultGasSupplySumVO,
  ResultGasUserCountVO,
  ResultHidangerCheckPlanDetailVO,
  ResultHiDangerCheckPlanSummaryVO,
  ResultHidangerFactorsSummaryVO,
  ResultHidangerImportVO,
  ResultHidangerUrgePreviewVO,
  ResultHidnagerFlowVO,
  ResultHomePageWarnSummaryVO,
  ResultInspectionPatrolVO,
  ResultInstallAlarmCountVO,
  ResultLinePatrolSumVO,
  ResultListAlarmAnalysisVO,
  ResultListAlarmObjTypeSummaryVO,
  ResultListAlarmPageVO,
  ResultListAlarmStatisticalVO,
  ResultListAlarmSumVO,
  ResultListAroundRiskDTO,
  ResultListBottleMapInfoVO,
  ResultListBsEnterpriseHidangerHandleDTO,
  ResultListBsHidangerCountDTO,
  ResultListBsHidangerCountItemDTO,
  ResultListBsHidangerHandleItemDTO,
  ResultListCheckPlanRelDangerVO,
  ResultListCheckTaskCountVO,
  ResultListCifrsPipeMnPipecodeDTO,
  ResultListCifrsPipeMnPipelineVO,
  ResultListCifrsPipeMnPipepointPageVO,
  ResultListCifrsPipeSectionVO,
  ResultListComSupLgEnterpriseDTO,
  ResultListCoordinate,
  ResultListCoordinateMatterVO,
  ResultListDataOverviewVO,
  ResultListDeviceStateSummaryVO,
  ResultListDictionaryItem,
  ResultListDisposeTraceVO,
  ResultListDistrictVO,
  ResultListEmresMnExpertDetailVO,
  ResultListEmresMnMateriBaseVO,
  ResultListEmresMnMateriExportVO,
  ResultListEmresMnReteamDownVO,
  ResultListEmresMnReteamExportVO,
  ResultListEmresMnReteamNearVO,
  ResultListEmresMnRetmanBaseVO,
  ResultListEmresMnRetmanExportVO,
  ResultListEmresMnWhouseDownVO,
  ResultListEnterpriseMapInfoVO,
  ResultListHiDangerCheckPlanSelectionsDTO,
  ResultListHidangerDictionaryVO,
  ResultListHidangerGisVO,
  ResultListHidangerUrgeHisVO,
  ResultListHistoryAlarmVO,
  ResultListHomePageDataAccessVO,
  ResultListHomePageEnterpriseVO,
  ResultListInstallAlarmVO,
  ResultListLngAlarmTrendVO,
  ResultListLngEntAlarmStatVO,
  ResultListMapObjectObject,
  ResultListMapStringString,
  ResultListMenuVO,
  ResultListMinioResp,
  ResultListMonitorDeviceSumVO,
  ResultListMonitorSummaryVO,
  ResultListObject,
  ResultListOrganizationVO,
  ResultListOrgDeviceRateVO,
  ResultListOverallItemVO,
  ResultListProjectRiskDangerVO,
  ResultListRiskExportVO,
  ResultListRiskStatisticsVO,
  ResultListScoringAreaRankVO,
  ResultListScoringEnterpriseRankVO,
  ResultListScoringPageVO,
  ResultListScreenGasDataMapVO,
  ResultListStationMapInfoVO,
  ResultListSuperviseMatterVO,
  ResultListSuperviseRiskEstimateRecordVO,
  ResultListSuperviseRiskPageVO,
  ResultListTreeVo,
  ResultListUserInfoVO,
  ResultListVehicleMapInfoVO,
  ResultListWarnSummaryVO,
  ResultListWarnTotalVO,
  ResultListYearSupplyVO,
  ResultLngAlarmPageSumVO,
  ResultLngAlarmStatVO,
  ResultLngDeviceStatDTO,
  ResultLngFlowAlarmStatVO,
  ResultLngFlowStatVO,
  ResultMapIntegerListCheckTaskCountVO,
  ResultMapStringListDictionaryItem,
  ResultMapStringListListMapStringString,
  ResultMapStringListMessageContent,
  ResultMapStringListScreenAlarmSummaryLineChartVO,
  ResultMapStringListScreenGasDataMapVO,
  ResultMapStringLong,
  ResultMonitorCurveVO,
  ResultMonitorStatisticalVO,
  ResultObject,
  ResultOldPipeBuildStatVO,
  ResultOldPipeBuildSummaryVO,
  ResultOldPipeBuildVO,
  ResultOrgHidangerTypeSummaryDTO,
  ResultPcAlarmSummaryVO,
  ResultPerCertificateCountVO,
  ResultPerCertificateDetailVO,
  ResultPerimeterSearchVO,
  ResultPipeGasWarnTotalVO,
  ResultPipelineIndexStatisticsDTO,
  ResultPipelineOverviewVO,
  ResultProtagDetailVO,
  ResultQualificationsErrorVO,
  ResultRiskDangerStatisticsOfWordVO,
  ResultRiskFactorDetailVO,
  ResultSafeCheckTaskDetailVO,
  ResultSafeCheckTopicDetailVO,
  ResultScoringBadCntVO,
  ResultScoringDeductionStatVO,
  ResultScoringDetailVO,
  ResultScoringIndustryStatVO,
  ResultScreenAlarmSummaryVO,
  ResultScreenDeviceOnlineSummaryVO,
  ResultScreenDeviceSummaryVO,
  ResultScreenEmresCountVO,
  ResultScreenMonitorCoverageVO,
  ResultScreenWarnCurrentVO,
  ResultScreenWarnHistoryVO,
  ResultScreenWarnSummaryVO,
  ResultSecCheckSummaryVO,
  ResultSecurityCheckSumVO,
  ResultStationInfoDTO,
  ResultString,
  ResultSuperviseActivitiesPageVO,
  ResultSuperviseObjDetailVO,
  ResultSysNotifyTemplateDetailVO,
  ResultThirdBuildDetailVO,
  ResultThirdBuildHandleFlowVO,
  ResultThirdBuildSummaryVO,
  ResultUserInfoVO,
  ResultVehicleDataVO,
  ResultVehicleInfoVO,
  ResultVoid,
  ResultWarnDisposeVO,
  ResultWarnScreenSummaryVO,
  ResultWarnStatisticalVO,
  ResultWeatherInfo,
  Risk2DangerDTO,
  RiskComputedCallbackDTO,
  RiskIdsReqDTO,
  RiskStatisticsQuery,
  SafeCheckCopyDTO,
  SafeCheckItemCreateDTO,
  SafeCheckTaskCreateDTO,
  SafeCheckTaskPageQuery,
  SafeCheckTopicCreateDTO,
  SafeCheckTopicPageQuery,
  ScoringPageQuery,
  SecCheckImportDTO,
  SecurityCheckDTO,
  SecurityCheckQuery,
  SecurityCheckRecQuery,
  StatisticalRequest,
  SuperviseActivitiesCreateDTO,
  SuperviseDeptUserPageQuery,
  SuperviseMatterQuery,
  SuperviseRiskQuery,
  SysNotifyRuleDTO,
  SysNotifyTemplateDTO,
  SysNotifyTemplatePageQuery,
  ThirdBuildBatchImportDTO,
  ThirdBuildCreateDTO,
  ThirdBuildGuardCreateDTO,
  ThirdBuildPageQuery,
  ThirdBuildReportCreateDTO,
  ThirdBuildUpdateDTO,
  Type车辆信息,
  UpdateAccidentQuery,
  UpdateBulletinQuery,
  UpdateGasUserQuery,
  UpdateOldPipeBuildQuery,
  UpdatePerQualificationsQuery,
  UpdateSuperviseMatterQuery,
  UpdateSuperviseRisk,
  VehiclePageQuery,
  WarnPageRequest,
} from "./data-contracts";

/**
 * vehicle-controller 查询运输车辆详情
 *
 * @tags vehicle-controller
 * @name GetVehicleById
 * @summary 查询运输车辆详情
 * @request GET:/vehicle/{id}
 * @response `200` `ResultVehicleInfoVO` OK
 */
export const getVehicleById = (id: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultVehicleInfoVO>(
    {
      url: `gas-supervise/vehicle/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * vehicle-controller 修改运输车辆
 *
 * @tags vehicle-controller
 * @name PutVehicleById
 * @summary 修改运输车辆
 * @request PUT:/vehicle/{id}
 * @response `200` `ResultVoid` OK
 */
export const putVehicleById = (id: number, data: Type车辆信息, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/vehicle/${id}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * vehicle-controller 删除运输车辆
 *
 * @tags vehicle-controller
 * @name DeleteVehicleById
 * @summary 删除运输车辆
 * @request DELETE:/vehicle/{id}
 * @response `200` `ResultVoid` OK
 */
export const deleteVehicleById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/vehicle/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * vehicle-controller 查询应急车辆详情
 *
 * @tags vehicle-controller
 * @name GetVehicleEmerById
 * @summary 查询应急车辆详情
 * @request GET:/vehicle/emer/{id}
 * @response `200` `ResultEmerVehicleInfoVO` OK
 */
export const getVehicleEmerById = (id: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultEmerVehicleInfoVO>(
    {
      url: `gas-supervise/vehicle/emer/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * vehicle-controller 修改应急车辆
 *
 * @tags vehicle-controller
 * @name PutVehicleEmerById
 * @summary 修改应急车辆
 * @request PUT:/vehicle/emer/{id}
 * @response `200` `ResultVoid` OK
 */
export const putVehicleEmerById = (id: number, data: EmerVehicleInfoDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/vehicle/emer/${id}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * vehicle-controller 删除应急车辆
 *
 * @tags vehicle-controller
 * @name DeleteVehicleEmerById
 * @summary 删除应急车辆
 * @request DELETE:/vehicle/emer/{id}
 * @response `200` `ResultVoid` OK
 */
export const deleteVehicleEmerById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/vehicle/emer/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 详情
 *
 * @tags 三方施工管理
 * @name GetThirdBuildById
 * @summary 详情
 * @request GET:/third/build/{id}
 * @response `200` `ResultThirdBuildDetailVO` OK
 */
export const getThirdBuildById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultThirdBuildDetailVO>(
    {
      url: `gas-supervise/third/build/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 编辑
 *
 * @tags 三方施工管理
 * @name PutThirdBuildById
 * @summary 编辑
 * @request PUT:/third/build/{id}
 * @response `200` `ResultVoid` OK
 */
export const putThirdBuildById = (id: string, data: ThirdBuildUpdateDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/third/build/${id}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 施工完工
 *
 * @tags 三方施工管理
 * @name PutThirdBuildComplete
 * @summary 施工完工
 * @request PUT:/third/build/complete
 * @response `200` `ResultVoid` OK
 */
export const putThirdBuildComplete = (data: IDsRequestDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/third/build/complete`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * system-notify-controller
 *
 * @tags system-notify-controller
 * @name GetSysNotifyTemplateByUid
 * @request GET:/sys/notify/template/{uid}
 * @response `200` `ResultSysNotifyTemplateDetailVO` OK
 */
export const getSysNotifyTemplateByUid = (uid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultSysNotifyTemplateDetailVO>(
    {
      url: `gas-supervise/sys/notify/template/${uid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * system-notify-controller
 *
 * @tags system-notify-controller
 * @name PutSysNotifyTemplateByUid
 * @request PUT:/sys/notify/template/{uid}
 * @response `200` `ResultVoid` OK
 */
export const putSysNotifyTemplateByUid = (uid: number, data: SysNotifyTemplateDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/sys/notify/template/${uid}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * system-notify-controller
 *
 * @tags system-notify-controller
 * @name PutSysNotifyRuleByUid
 * @request PUT:/sys/notify/rule/{uid}
 * @response `200` `ResultVoid` OK
 */
export const putSysNotifyRuleByUid = (uid: number, data: SysNotifyRuleDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/sys/notify/rule/${uid}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 获取安全检查主题详情,包含检查项目
 *
 * @tags 安全检查
 * @name GetSafeCheckTopicByUid
 * @summary 获取安全检查主题详情
 * @request GET:/safe-check/topic/{uid}
 * @response `200` `ResultSafeCheckTopicDetailVO` OK
 */
export const getSafeCheckTopicByUid = (uid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultSafeCheckTopicDetailVO>(
    {
      url: `gas-supervise/safe-check/topic/${uid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 根据主题的uid,更新检查主题,不可更新内置
 *
 * @tags 安全检查
 * @name PutSafeCheckTopicByUid
 * @summary 更新安全检查主题
 * @request PUT:/safe-check/topic/{uid}
 * @response `200` `ResultVoid` OK
 */
export const putSafeCheckTopicByUid = (uid: number, data: SafeCheckTopicCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/safe-check/topic/${uid}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 根据检查项uid,更新主题下的安全检查项目
 *
 * @tags 安全检查
 * @name PutSafeCheckTopicItemByTid
 * @summary 更新安全检查-检查项目
 * @request PUT:/safe-check/topic/{tid}/item
 * @response `200` `ResultVoid` OK
 */
export const putSafeCheckTopicItemByTid = (
  tid: number,
  data: SafeCheckItemCreateDTO,
  params: PerRequestOptions = {},
) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/safe-check/topic/${tid}/item`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 根据主题的uid,创建主题下的安全检查项目,成功后返回详情
 *
 * @tags 安全检查
 * @name PostSafeCheckTopicItemByTid
 * @summary 创建安全检查-检查项目
 * @request POST:/safe-check/topic/{tid}/item
 * @response `200` `ResultVoid` OK
 */
export const postSafeCheckTopicItemByTid = (
  tid: number,
  data: SafeCheckItemCreateDTO,
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/safe-check/topic/${tid}/item`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业人员资质证照信息管理接口 修改企业人员资质证照信息
 *
 * @tags 企业人员资质证照信息管理接口, 修改企业人员资质证照信息
 * @name PutPerQualificationsUpdate
 * @summary 修改企业人员资质证照信息
 * @request PUT:/per/qualifications/update
 * @response `200` `ResultVoid` OK
 */
export const putPerQualificationsUpdate = (data: UpdatePerQualificationsQuery, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/per/qualifications/update`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业隐患管理 编辑隐患
 *
 * @tags 企业隐患管理
 * @name PutHidangerOrgByUid
 * @summary 编辑隐患
 * @request PUT:/hidanger/org/{uid}
 * @response `200` `ResultVoid` OK
 */
export const putHidangerOrgByUid = (uid: number, data: HidangerCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/hidanger/org/${uid}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业隐患管理 隐患结单
 *
 * @tags 企业隐患管理
 * @name PutHidangerOrgStatementByUid
 * @summary 隐患结单
 * @request PUT:/hidanger/org/statement/{uid}
 * @response `200` `ResultVoid` OK
 */
export const putHidangerOrgStatementByUid = (
  uid: number,
  data: HidangerStatementDTO,
  params: PerRequestOptions = {},
) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/hidanger/org/statement/${uid}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业隐患管理 隐患整改
 *
 * @tags 企业隐患管理
 * @name PutHidangerOrgHandleByUid
 * @summary 隐患整改
 * @request PUT:/hidanger/org/handle/{uid}
 * @response `200` `ResultVoid` OK
 */
export const putHidangerOrgHandleByUid = (uid: number, data: OrgHidangerHandleDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/hidanger/org/handle/${uid}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业隐患管理 隐患消除
 *
 * @tags 企业隐患管理
 * @name PutHidangerOrgComplete
 * @summary 隐患消除
 * @request PUT:/hidanger/org/complete
 * @response `200` `ResultVoid` OK
 */
export const putHidangerOrgComplete = (data: RiskIdsReqDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/hidanger/org/complete`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管单位隐患管理 编辑隐患
 *
 * @tags 监管单位隐患管理
 * @name PutHidangerGovByUid
 * @summary 编辑隐患
 * @request PUT:/hidanger/gov/{uid}
 * @response `200` `ResultVoid` OK
 */
export const putHidangerGovByUid = (uid: number, data: HidangerCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/${uid}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查计划 安全检查计划-详情
 *
 * @tags 安全检查计划
 * @name GetHidangerGovCheckPlanById
 * @summary 安全检查计划-详情
 * @request GET:/hidanger/gov/check-plan/{id}
 * @response `200` `ResultHidangerCheckPlanDetailVO` OK
 */
export const getHidangerGovCheckPlanById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultHidangerCheckPlanDetailVO>(
    {
      url: `gas-supervise/hidanger/gov/check-plan/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查计划 安全检查计划-更新
 *
 * @tags 安全检查计划
 * @name PutHidangerGovCheckPlanById
 * @summary 安全检查计划-更新
 * @request PUT:/hidanger/gov/check-plan/{id}
 * @response `200` `ResultVoid` OK
 */
export const putHidangerGovCheckPlanById = (
  id: string,
  data: HiDangerCheckPlanUpdateDTO,
  params: PerRequestOptions = {},
) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/check-plan/${id}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管单位隐患管理 隐患审核
 *
 * @tags 监管单位隐患管理
 * @name PutHidangerGovAudit
 * @summary 隐患审核
 * @request PUT:/hidanger/gov/audit
 * @response `200` `ResultVoid` OK
 */
export const putHidangerGovAudit = (data: Risk2DangerDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/audit`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 隐患字典管理 更新单个隐患字典
 *
 * @tags 隐患字典管理
 * @name PutHidangerDictionaryUpdate
 * @summary 更新单个隐患字典
 * @request PUT:/hidanger/dictionary/update
 * @response `200` `ResultVoid` OK
 */
export const putHidangerDictionaryUpdate = (data: HidangerDictionaryUpdateDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/hidanger/dictionary/update`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 政府职能部门管理 更新部门用户
 *
 * @tags 政府职能部门管理
 * @name PutGovDeptUser
 * @summary 更新部门用户
 * @request PUT:/gov/dept/user
 * @response `200` `ResultVoid` OK
 */
export const putGovDeptUser = (data: GovDeptUserCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/gov/dept/user`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 政府职能部门管理 新增部门用户
 *
 * @tags 政府职能部门管理
 * @name PostGovDeptUser
 * @summary 新增部门用户
 * @request POST:/gov/dept/user
 * @response `200` `ResultVoid` OK
 */
export const postGovDeptUser = (data: GovDeptUserCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/gov/dept/user`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 修改用气用户信息 修改用气用户信息
 *
 * @tags 修改用气用户信息, 用气用户信息管理接口
 * @name PutGasUsersUpdate
 * @summary 修改用气用户信息
 * @request PUT:/gas/users/update
 * @response `200` `ResultVoid` OK
 */
export const putGasUsersUpdate = (data: UpdateGasUserQuery, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/gas/users/update`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 日保供信息管理 编辑供气量信息
 *
 * @tags 日保供信息管理
 * @name PutGasSupplyById
 * @summary 编辑供气量信息
 * @request PUT:/gas/supply/{id}
 * @response `200` `ResultVoid` OK
 */
export const putGasSupplyById = (id: number, data: GasSupplyDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/gas/supply/${id}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 日保供信息管理 删除供气量信息
 *
 * @tags 日保供信息管理
 * @name DeleteGasSupplyById
 * @summary 删除供气量信息
 * @request DELETE:/gas/supply/{id}
 * @response `200` `ResultVoid` OK
 */
export const deleteGasSupplyById = (id: number, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/gas/supply/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业巡线管理 编辑企业巡线计划
 *
 * @tags 企业巡线管理
 * @name PutEnterprisePatrolById
 * @summary 编辑企业巡线计划
 * @request PUT:/enterprise/patrol/{id}
 * @response `200` `ResultVoid` OK
 */
export const putEnterprisePatrolById = (id: number, data: LinePatrolDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/enterprise/patrol/${id}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 查看企业详情
 *
 * @tags 企业信息管理
 * @name GetEnterpriseInfoById
 * @summary 查看企业详情
 * @request GET:/enterprise/info/{id}
 * @response `200` `ResultEnterpriseDetailVO` OK
 */
export const getEnterpriseInfoById = (id: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultEnterpriseDetailVO>(
    {
      url: `gas-supervise/enterprise/info/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 编辑企业
 *
 * @tags 企业信息管理
 * @name PutEnterpriseInfoById
 * @summary 编辑企业
 * @request PUT:/enterprise/info/{id}
 * @response `200` `ResultVoid` OK
 */
export const putEnterpriseInfoById = (id: number, data: EnterpriseCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/enterprise/info/${id}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业安检管理 编辑企业安检计划
 *
 * @tags 企业安检管理
 * @name PutEnterpriseCheckById
 * @summary 编辑企业安检计划
 * @request PUT:/enterprise/check/{id}
 * @response `200` `ResultVoid` OK
 */
export const putEnterpriseCheckById = (id: number, data: SecurityCheckDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/enterprise/check/${id}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * vehicle-controller 新增运输车辆
 *
 * @tags vehicle-controller
 * @name PostVehicle
 * @summary 新增运输车辆
 * @request POST:/vehicle
 * @response `200` `ResultVoid` OK
 */
export const postVehicle = (data: Type车辆信息, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/vehicle`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * vehicle-controller 新增应急车辆
 *
 * @tags vehicle-controller
 * @name PostVehicleEmer
 * @summary 新增应急车辆
 * @request POST:/vehicle/emer
 * @response `200` `ResultVoid` OK
 */
export const postVehicleEmer = (data: EmerVehicleInfoDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/vehicle/emer`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 创建
 *
 * @tags 三方施工管理
 * @name PostThirdBuild
 * @summary 创建
 * @request POST:/third/build
 * @response `200` `ResultString` OK
 */
export const postThirdBuild = (data: ThirdBuildCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultString>(
    {
      url: `gas-supervise/third/build`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 上传交底文件
 *
 * @tags 三方施工管理
 * @name PostThirdBuildReportByThirdBuildId
 * @summary 上传交底文件
 * @request POST:/third/build/{thirdBuildId}/report
 * @response `200` `ResultVoid` OK
 */
export const postThirdBuildReportByThirdBuildId = (
  thirdBuildId: string,
  data: ThirdBuildReportCreateDTO,
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/third/build/${thirdBuildId}/report`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 上传看护记录
 *
 * @tags 三方施工管理
 * @name PostThirdBuildGuardByThirdBuildId
 * @summary 上传看护记录
 * @request POST:/third/build/{thirdBuildId}/guard
 * @response `200` `ResultVoid` OK
 */
export const postThirdBuildGuardByThirdBuildId = (
  thirdBuildId: string,
  data: ThirdBuildGuardCreateDTO,
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/third/build/${thirdBuildId}/guard`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 批量导入 预导入数据检查
 *
 * @tags 批量导入
 * @name PostThirdBuildPreImport
 * @summary 预导入数据检查
 * @request POST:/third/build/pre-import
 * @response `200` `ResultExcelImportValidationVO` OK
 */
export const postThirdBuildPreImport = (data: FormData, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultExcelImportValidationVO>(
    {
      url: `gas-supervise/third/build/pre-import`,
      data: data,
      header: { "Content-Type": "multipart/form-data" },
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 批量导入
 *
 * @tags 三方施工管理
 * @name PostThirdBuildImport
 * @summary 批量导入
 * @request POST:/third/build/import
 * @response `200` `ResultVoid` OK
 */
export const postThirdBuildImport = (data: ThirdBuildBatchImportDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/third/build/import`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端预警管理接口 创建视频会议
 *
 * @tags 监管端预警管理接口, 创建视频会议
 * @name PostSuperviseWarnCreateConference
 * @summary 创建视频会议
 * @request POST:/supervise/warn/create/conference
 * @response `200` `ResultCreateConferenceDTO` OK
 */
export const postSuperviseWarnCreateConference = (data: ConferenceCreateRequest, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultCreateConferenceDTO>(
    {
      url: `gas-supervise/supervise/warn/create/conference`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业风险更新 企业风险更新
 *
 * @tags 企业风险更新, 企业风险上报控制层
 * @name PostSuperviseRiskUpdate
 * @summary 企业风险更新
 * @request POST:/supervise/risk/update
 * @response `200` `ResultVoid` OK
 */
export const postSuperviseRiskUpdate = (data: UpdateSuperviseRisk, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/supervise/risk/update`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业风险评估 企业风险评估
 *
 * @tags 企业风险评估, 企业风险上报控制层
 * @name PostSuperviseRiskEstimate
 * @summary 企业风险评估
 * @request POST:/supervise/risk/estimate
 * @response `200` `ResultVoid` OK
 */
export const postSuperviseRiskEstimate = (data: EstimateSuperviseRisk, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/supervise/risk/estimate`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 新增企业风险 新增企业风险
 *
 * @tags 新增企业风险, 企业风险上报控制层
 * @name PostSuperviseRiskAdd
 * @summary 新增企业风险
 * @request POST:/supervise/risk/add
 * @response `200` `ResultVoid` OK
 */
export const postSuperviseRiskAdd = (data: AddSuperviseRisk, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/supervise/risk/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 更新重点督办 更新重点督办
 *
 * @tags 更新重点督办, 重点督办接口
 * @name PostSuperviseMatterUpdate
 * @summary 更新重点督办
 * @request POST:/supervise/matter/update
 * @response `200` `ResultVoid` OK
 */
export const postSuperviseMatterUpdate = (data: UpdateSuperviseMatterQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/supervise/matter/update`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 重点督办接口 新增重点督办事件
 *
 * @tags 重点督办接口, 新增重点督办事件
 * @name PostSuperviseMatterAdd
 * @summary 新增重点督办事件
 * @request POST:/supervise/matter/add
 * @response `200` `ResultVoid` OK
 */
export const postSuperviseMatterAdd = (data: AddSuperviseMatterQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/supervise/matter/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查 创建安全检查主题
 *
 * @tags 安全检查
 * @name PostSafeCheckTopic
 * @summary 创建安全检查主题
 * @request POST:/safe-check/topic
 * @response `200` `ResultVoid` OK
 */
export const postSafeCheckTopic = (data: SafeCheckTopicCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/safe-check/topic`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 复制内置安全检查主题检查项到指定检查主题下,成功后返回该主题详情
 *
 * @tags 安全检查
 * @name PostSafeCheckTopicCopyTopic
 * @summary 复制安全检查主题
 * @request POST:/safe-check/topic/copy-topic
 * @response `200` `ResultSafeCheckTopicDetailVO` OK
 */
export const postSafeCheckTopicCopyTopic = (data: SafeCheckCopyDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultSafeCheckTopicDetailVO>(
    {
      url: `gas-supervise/safe-check/topic/copy-topic`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查 创建安全检查
 *
 * @tags 安全检查
 * @name PostSafeCheckTask
 * @summary 创建安全检查
 * @request POST:/safe-check/task
 * @response `200` `ResultVoid` OK
 */
export const postSafeCheckTask = (data: SafeCheckTaskCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/safe-check/task`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 范围内隐患列表 根据范围查询隐患列表
 *
 * @tags 范围内隐患列表
 * @name PostRiskRange
 * @summary 根据范围查询隐患列表
 * @request POST:/risk/range
 * @response `200` `ResultListProjectRiskDangerVO` OK
 */
export const postRiskRange = (data: ProjectRiskDangerRequest, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultListProjectRiskDangerVO>(
    {
      url: `gas-supervise/risk/range`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业人员资质证照信息管理接口 批量导入
 *
 * @tags 企业人员资质证照信息管理接口, 企业人员资质证照信息导入
 * @name PostPerQualificationsImport
 * @summary 批量导入
 * @request POST:/per/qualifications/import
 * @response `200` `ResultVoid` OK
 */
export const postPerQualificationsImport = (data: ImportPerQualificationsQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/per/qualifications/import`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业人员资质证照信息管理接口 新增企业人员资质证照信息
 *
 * @tags 企业人员资质证照信息管理接口, 新增企业人员资质证照信息
 * @name PostPerQualificationsAdd
 * @summary 新增企业人员资质证照信息
 * @request POST:/per/qualifications/add
 * @response `200` `ResultVoid` OK
 */
export const postPerQualificationsAdd = (data: AddPerQualificationsQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/per/qualifications/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description serialNumber不存在则新增数据,已存在则更新数据
 *
 * @tags 监管平台数据接入网关
 * @name PostOpenData
 * @summary 保存数据
 * @request POST:/open/data
 * @response `200` `ResultVoid` OK
 */
export const postOpenData = (data: DataMessage, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/open/data`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description AIoT数据存储
 *
 * @tags 监管平台数据接入网关
 * @name PostOpenDataAiot
 * @summary AIoT数据存储
 * @request POST:/open/data/aiot
 * @response `200` `ResultVoid` OK
 */
export const postOpenDataAiot = (data: IndoorAlarmQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/open/data/aiot`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 更新老旧管网进度 更新老旧管网进度
 *
 * @tags 更新老旧管网进度, 老旧管网改造接口
 * @name PostOldPipeUpdateSpeed
 * @summary 更新老旧管网进度
 * @request POST:/old/pipe/update/speed
 * @response `200` `ResultVoid` OK
 */
export const postOldPipeUpdateSpeed = (data: UpdateOldPipeBuildQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/old/pipe/update/speed`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 老旧管网改造新增 老旧管网改造新增
 *
 * @tags 老旧管网改造新增, 老旧管网改造接口
 * @name PostOldPipeAdd
 * @summary 老旧管网改造新增
 * @request POST:/old/pipe/add
 * @response `200` `ResultVoid` OK
 */
export const postOldPipeAdd = (data: AddOldPipeBuildQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/old/pipe/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 应急演练管理接口 应急演练上报
 *
 * @tags 应急演练管理接口, 应急演练上报
 * @name PostMeresDrillUpload
 * @summary 应急演练上报
 * @request POST:/meres/drill/upload
 * @response `200` `ResultVoid` OK
 */
export const postMeresDrillUpload = (data: AddEmresDrillRequest, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/meres/drill/upload`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 修改应急演练 修改应急演练
 *
 * @tags 修改应急演练, 应急演练管理接口
 * @name PostMeresDrillUpdate
 * @summary 修改应急演练
 * @request POST:/meres/drill/update
 * @response `200` `ResultVoid` OK
 */
export const postMeresDrillUpdate = (data: AddEmresDrillRequest, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/meres/drill/update`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 应急演练新增 应急演练新增
 *
 * @tags 应急演练新增, 应急演练管理接口
 * @name PostMeresDrillAdd
 * @summary 应急演练新增
 * @request POST:/meres/drill/add
 * @response `200` `ResultVoid` OK
 */
export const postMeresDrillAdd = (data: AddEmresDrillRequest, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/meres/drill/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 隐患催办 催办预览
 *
 * @tags 隐患催办
 * @name PostHidangerUrgePreview
 * @summary 催办预览
 * @request POST:/hidanger/urge/preview
 * @response `200` `ResultHidangerUrgePreviewVO` OK
 */
export const postHidangerUrgePreview = (data: HidangerDoUrgeDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultHidangerUrgePreviewVO>(
    {
      url: `gas-supervise/hidanger/urge/preview`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 隐患催办 催办
 *
 * @tags 隐患催办
 * @name PostHidangerUrgeDoUrge
 * @summary 催办
 * @request POST:/hidanger/urge/do-urge
 * @response `200` `ResultVoid` OK
 */
export const postHidangerUrgeDoUrge = (data: HidangerDoUrgeDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/urge/do-urge`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 隐患导入 预导入模板数据解析
 *
 * @tags 隐患导入
 * @name PostHidangerPreImport
 * @summary 预导入模板数据解析
 * @request POST:/hidanger/pre-import
 * @response `200` `ResultHidangerImportVO` OK
 */
export const postHidangerPreImport = (
  query: {
    /** @format binary */
    file: FormData;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultHidangerImportVO>(
    {
      url: `gas-supervise/hidanger/pre-import`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业隐患管理 新增隐患
 *
 * @tags 企业隐患管理
 * @name PostHidangerOrg
 * @summary 新增隐患
 * @request POST:/hidanger/org
 * @response `200` `ResultVoid` OK
 */
export const postHidangerOrg = (data: HidangerCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/org`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业隐患管理 隐患派单
 *
 * @tags 企业隐患管理
 * @name PostHidangerOrgDispatch
 * @summary 隐患派单
 * @request POST:/hidanger/org/dispatch
 * @response `200` `ResultVoid` OK
 */
export const postHidangerOrgDispatch = (data: HidangerDispatchDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/org/dispatch`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 隐患导入 导入隐患
 *
 * @tags 隐患导入
 * @name PostHidangerImport
 * @summary 导入隐患
 * @request POST:/hidanger/import
 * @response `200` `ResultVoid` OK
 */
export const postHidangerImport = (data: HidangerImportDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/import`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管单位隐患管理 新增隐患
 *
 * @tags 监管单位隐患管理
 * @name PostHidangerGov
 * @summary 新增隐患
 * @request POST:/hidanger/gov
 * @response `200` `ResultVoid` OK
 */
export const postHidangerGov = (data: HidangerCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管单位隐患管理 隐患催办
 *
 * @tags 监管单位隐患管理
 * @name PostHidangerGovUrge
 * @summary 隐患催办
 * @request POST:/hidanger/gov/urge
 * @response `200` `ResultVoid` OK
 */
export const postHidangerGovUrge = (data: RiskIdsReqDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/urge`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管单位隐患管理 挂牌督办
 *
 * @tags 监管单位隐患管理
 * @name PostHidangerGovSupervise
 * @summary 挂牌督办
 * @request POST:/hidanger/gov/supervise
 * @response `200` `ResultVoid` OK
 */
export const postHidangerGovSupervise = (data: RiskIdsReqDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/supervise`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管单位隐患管理 上报省平台
 *
 * @tags 监管单位隐患管理
 * @name PostHidangerGovReport
 * @summary 上报省平台
 * @request POST:/hidanger/gov/report
 * @response `200` `ResultVoid` OK
 */
export const postHidangerGovReport = (data: RiskIdsReqDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/report`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 领导批示 创建领导批示
 *
 * @tags 领导批示
 * @name PostHidangerGovLeaderComment
 * @summary 创建领导批示
 * @request POST:/hidanger/gov/leader-comment
 * @response `200` `ResultVoid` OK
 */
export const postHidangerGovLeaderComment = (data: LeaderCommentCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/leader-comment`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管单位隐患管理 发送整改单
 *
 * @tags 监管单位隐患管理
 * @name PostHidangerGovHandleOrder
 * @summary 发送整改单
 * @request POST:/hidanger/gov/handle-order
 * @response `200` `ResultVoid` OK
 */
export const postHidangerGovHandleOrder = (data: HiDangerSendHandleOrderDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/handle-order`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查计划 安全检查计划-创建
 *
 * @tags 安全检查计划
 * @name PostHidangerGovCheckPlan
 * @summary 安全检查计划-创建
 * @request POST:/hidanger/gov/check-plan
 * @response `200` `ResultVoid` OK
 */
export const postHidangerGovCheckPlan = (data: HiDangerCheckPlanCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/check-plan`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查计划 安全检查计划-标记已完成
 *
 * @tags 安全检查计划
 * @name PostHidangerGovCheckPlanFinishById
 * @summary 安全检查计划-标记已完成
 * @request POST:/hidanger/gov/check-plan/finish/{id}
 * @response `200` `ResultVoid` OK
 */
export const postHidangerGovCheckPlanFinishById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/check-plan/finish/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 风险要素辨识 风险转为隐患
 *
 * @tags 风险要素辨识
 * @name PostHidangerFactorsDangers
 * @summary 风险转为隐患
 * @request POST:/hidanger/factors/dangers
 * @response `200` `ResultVoid` OK
 */
export const postHidangerFactorsDangers = (data: RiskIdsReqDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/factors/dangers`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 解析风险评估cvs文件
 *
 * @tags 管网风险
 * @name PostHidangerFactorsCallbackParse
 * @summary 燃气管网风险解析风险评估cvs文件
 * @request POST:/hidanger/factors/callback/parse
 * @response `200` `ResultBoolean` OK
 */
export const postHidangerFactorsCallbackParse = (data: RiskComputedCallbackDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/hidanger/factors/callback/parse`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 导入知识库信息接口
 *
 * @tags 知识库管理接口, 导入知识库信息
 * @name PostGuideKnowledgeImport
 * @summary 导入知识库信息
 * @request POST:/guide/knowledge/import
 * @response `200` `ResultBoolean` OK
 */
export const postGuideKnowledgeImport = (
  query: {
    /** @format binary */
    file: FormData;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/guide/knowledge/import`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 编辑知识库接口
 *
 * @tags 编辑知识库, 知识库管理接口
 * @name PostGuideKnowledgeEdit
 * @summary 编辑知识库
 * @request POST:/guide/knowledge/edit
 * @response `200` `ResultBoolean` OK
 */
export const postGuideKnowledgeEdit = (data: AnalysBaseMnKnowledgeDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/guide/knowledge/edit`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 添加知识库接口
 *
 * @tags 知识库管理接口, 添加知识库
 * @name PostGuideKnowledgeCreate
 * @summary 添加知识库
 * @request POST:/guide/knowledge/create
 * @response `200` `ResultBoolean` OK
 */
export const postGuideKnowledgeCreate = (data: AnalysBaseMnKnowledgeDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/guide/knowledge/create`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 批量删除知识库接口
 *
 * @tags 知识库管理接口, 批量删除
 * @name PostGuideKnowledgeBatchDel
 * @summary 批量删除
 * @request POST:/guide/knowledge/batch/del
 * @response `200` `ResultBoolean` OK
 */
export const postGuideKnowledgeBatchDel = (
  query: {
    ids: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/guide/knowledge/batch/del`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 导入案例库信息接口
 *
 * @tags 案例库管理接口, 导入案例库信息
 * @name PostGuideCaseImport
 * @summary 导入案例库信息
 * @request POST:/guide/case/import
 * @response `200` `ResultBoolean` OK
 */
export const postGuideCaseImport = (
  query: {
    /** @format binary */
    file: FormData;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/guide/case/import`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 编辑案例库接口
 *
 * @tags 编辑案例库, 案例库管理接口
 * @name PostGuideCaseEdit
 * @summary 编辑案例库
 * @request POST:/guide/case/edit
 * @response `200` `ResultBoolean` OK
 */
export const postGuideCaseEdit = (data: AnalysBaseMnCaseDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/guide/case/edit`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 添加案例库接口
 *
 * @tags 添加案例库, 案例库管理接口
 * @name PostGuideCaseCreate
 * @summary 添加案例库
 * @request POST:/guide/case/create
 * @response `200` `ResultBoolean` OK
 */
export const postGuideCaseCreate = (data: AnalysBaseMnCaseDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/guide/case/create`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 批量删除案例库接口
 *
 * @tags 案例库管理接口, 批量删除
 * @name PostGuideCaseBatchDel
 * @summary 批量删除
 * @request POST:/guide/case/batch/del
 * @response `200` `ResultBoolean` OK
 */
export const postGuideCaseBatchDel = (
  query: {
    ids: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/guide/case/batch/del`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 创建活动记录
 *
 * @tags 安全教育
 * @name PostGuideActivities
 * @summary 创建活动记录
 * @request POST:/guide/activities
 * @response `200` `ResultVoid` OK
 */
export const postGuideActivities = (data: SuperviseActivitiesCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/guide/activities`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 政府职能部门管理 新增部门
 *
 * @tags 政府职能部门管理
 * @name PostGovDept
 * @summary 新增部门
 * @request POST:/gov/dept
 * @response `200` `ResultVoid` OK
 */
export const postGovDept = (data: GovDeptCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/gov/dept`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用气用户信息管理接口 批量导入
 *
 * @tags 用气用户信息管理接口, 用气用户信息导入
 * @name PostGasUsersImport
 * @summary 批量导入
 * @request POST:/gas/users/import
 * @response `200` `ResultVoid` OK
 */
export const postGasUsersImport = (data: ImportGasUserQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/gas/users/import`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用气用户信息管理接口 新增用气用户信息
 *
 * @tags 用气用户信息管理接口, 新增用气用户信息
 * @name PostGasUsersAdd
 * @summary 新增用气用户信息
 * @request POST:/gas/users/add
 * @response `200` `ResultVoid` OK
 */
export const postGasUsersAdd = (data: AddGasUserQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/gas/users/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 日保供信息管理 创建供气量信息
 *
 * @tags 日保供信息管理
 * @name PostGasSupply
 * @summary 创建供气量信息
 * @request POST:/gas/supply
 * @response `200` `ResultVoid` OK
 */
export const postGasSupply = (data: GasSupplyDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/gas/supply`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业场站信息管理 场站预导入数据检查
 *
 * @tags 企业场站信息管理
 * @name PostGasStationPreImport
 * @summary 场站预导入数据检查
 * @request POST:/gas/station/pre-import
 * @response `200` `ResultExcelImportValidationVO` OK
 */
export const postGasStationPreImport = (data: FormData, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultExcelImportValidationVO>(
    {
      url: `gas-supervise/gas/station/pre-import`,
      data: data,
      header: { "Content-Type": "multipart/form-data" },
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业场站信息管理 批量导入场站信息
 *
 * @tags 企业场站信息管理
 * @name PostGasStationImport
 * @summary 批量导入场站信息
 * @request POST:/gas/station/import
 * @response `200` `ResultVoid` OK
 */
export const postGasStationImport = (data: GasStationImportDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/gas/station/import`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 上传文件,并返回文件id
 *
 * @tags 附件管理
 * @name PostFileUpload
 * @summary 文件上传
 * @request POST:/file/upload
 * @response `200` `ResultFileUpdateResponseDTO` OK
 */
export const postFileUpload = (
  data: {
    /** @format binary */
    file?: FormData;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultFileUpdateResponseDTO>(
    {
      url: `gas-supervise/file/upload`,
      data: data,
      header: { "Content-Type": "multipart/form-data" },
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业巡线管理 创建企业巡线计划
 *
 * @tags 企业巡线管理
 * @name PostEnterprisePatrol
 * @summary 创建企业巡线计划
 * @request POST:/enterprise/patrol
 * @response `200` `ResultVoid` OK
 */
export const postEnterprisePatrol = (data: LinePatrolDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/patrol`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业巡线管理 更新企业巡线计划进度
 *
 * @tags 企业巡线管理
 * @name PostEnterprisePatrolProcessById
 * @summary 更新企业巡线计划进度
 * @request POST:/enterprise/patrol/{id}/process
 * @deprecated
 * @response `200` `ResultVoid` OK
 */
export const postEnterprisePatrolProcessById = (
  id: number,
  query: {
    /** @format double */
    rate: number;
    fileId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/patrol/${id}/process`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业巡线管理 更新巡检计划挂牌督办
 *
 * @tags 企业巡线管理
 * @name PostEnterprisePatrolSupervise
 * @summary 更新巡检计划挂牌督办
 * @request POST:/enterprise/patrol/supervise
 * @response `200` `ResultVoid` OK
 */
export const postEnterprisePatrolSupervise = (
  query: {
    ids: Array<string> | string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/patrol/supervise`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 创建企业
 *
 * @tags 企业信息管理
 * @name PostEnterpriseInfo
 * @summary 创建企业
 * @request POST:/enterprise/info
 * @response `200` `ResultVoid` OK
 */
export const postEnterpriseInfo = (data: EnterpriseCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/info`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 批量导入
 *
 * @tags 企业信息管理
 * @name PostEnterpriseInfoImport
 * @summary 批量导入
 * @request POST:/enterprise/info/import
 * @response `200` `ResultVoid` OK
 */
export const postEnterpriseInfoImport = (data: EnterpriseBatchImportDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/info/import`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业协调事件反馈 企业协调事件反馈
 *
 * @tags 企业协调事件反馈, 企业协调事件接口
 * @name PostEnterpriseCoordinateFeedback
 * @summary 企业协调事件反馈
 * @request POST:/enterprise/coordinate/feedback
 * @response `200` `ResultVoid` OK
 */
export const postEnterpriseCoordinateFeedback = (
  data: CoordinateMatterFeedbackQuery,
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/coordinate/feedback`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 新增企业协调事件 新增企业协调事件
 *
 * @tags 新增企业协调事件, 企业协调事件接口
 * @name PostEnterpriseCoordinateAdd
 * @summary 新增企业协调事件
 * @request POST:/enterprise/coordinate/add
 * @response `200` `ResultVoid` OK
 */
export const postEnterpriseCoordinateAdd = (data: AddCoordinateMatterQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/coordinate/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 批量导入 预导入数据检查
 *
 * @tags 批量导入
 * @name PostEnterpriseCommonPreImportByType
 * @summary 预导入数据检查
 * @request POST:/enterprise/common/pre-import/{type}
 * @response `200` `ResultEnterpriseInfoImportVO` OK
 */
export const postEnterpriseCommonPreImportByType = (
  type: "ENTERPRISE_INFO_IMPORT" | "GAS_USER_IMPORT" | "PER_QUA_IMPORT" | "SEC_CHECK_IMPORT" | "GAS_STATION_IMPORT",
  data: FormData,
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultEnterpriseInfoImportVO>(
    {
      url: `gas-supervise/enterprise/common/pre-import/${type}`,
      data: data,
      header: { "Content-Type": "multipart/form-data" },
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 获取草稿
 *
 * @tags 企业信息管理
 * @name GetEnterpriseCommonDraftByType
 * @summary 获取草稿
 * @request GET:/enterprise/common/draft/{type}
 * @response `200` `ResultString` OK
 */
export const getEnterpriseCommonDraftByType = (type: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultString>(
    {
      url: `gas-supervise/enterprise/common/draft/${type}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 保存草稿
 *
 * @tags 企业信息管理
 * @name PostEnterpriseCommonDraftByType
 * @summary 保存草稿
 * @request POST:/enterprise/common/draft/{type}
 * @response `200` `ResultVoid` OK
 */
export const postEnterpriseCommonDraftByType = (type: string, data: JsonNode, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/common/draft/${type}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业安检管理 创建企业安检计划
 *
 * @tags 企业安检管理
 * @name PostEnterpriseCheck
 * @summary 创建企业安检计划
 * @request POST:/enterprise/check
 * @response `200` `ResultVoid` OK
 */
export const postEnterpriseCheck = (data: SecurityCheckDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/check`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业安检管理 安检记录预导入数据检查
 *
 * @tags 企业安检管理
 * @name PostEnterpriseCheckPreImport
 * @summary 安检记录预导入数据检查
 * @request POST:/enterprise/check/pre-import
 * @response `200` `ResultExcelImportValidationVO` OK
 */
export const postEnterpriseCheckPreImport = (data: FormData, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultExcelImportValidationVO>(
    {
      url: `gas-supervise/enterprise/check/pre-import`,
      data: data,
      header: { "Content-Type": "multipart/form-data" },
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业安检管理 批量导入安检记录
 *
 * @tags 企业安检管理
 * @name PostEnterpriseCheckImport
 * @summary 批量导入安检记录
 * @request POST:/enterprise/check/import
 * @response `200` `ResultVoid` OK
 */
export const postEnterpriseCheckImport = (data: SecCheckImportDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/check/import`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业基础底数修改 企业基础底数修改
 *
 * @tags 企业基础底数修改, 企业基础底数
 * @name PostEnterpriseBaseDataUpdate
 * @summary 企业基础底数修改
 * @request POST:/enterprise/base/data/update
 * @response `200` `ResultVoid` OK
 */
export const postEnterpriseBaseDataUpdate = (data: Array<AddBaseDataRequest>, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/base/data/update`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业基础底数 企业基础底数新增
 *
 * @tags 企业基础底数, 企业基础底数新增
 * @name PostEnterpriseBaseDataAdd
 * @summary 企业基础底数新增
 * @request POST:/enterprise/base/data/add
 * @response `200` `ResultVoid` OK
 */
export const postEnterpriseBaseDataAdd = (data: Array<AddBaseDataRequest>, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/base/data/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 应急预案修改 应急预案修改
 *
 * @tags 应急预案修改, 应急预案管理管理接口
 * @name PostEmresPlanUpdate
 * @summary 应急预案修改
 * @request POST:/emres/plan/update
 * @response `200` `ResultVoid` OK
 */
export const postEmresPlanUpdate = (data: AddEmresPlanRequest, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/emres/plan/update`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 应急预案管理管理接口 应急预案新增
 *
 * @tags 应急预案管理管理接口, 应急预案新增
 * @name PostEmresPlanAdd
 * @summary 应急预案新增
 * @request POST:/emres/plan/add
 * @response `200` `ResultVoid` OK
 */
export const postEmresPlanAdd = (data: AddEmresPlanRequest, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/emres/plan/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通知公告控制层 公告信息修改
 *
 * @tags 通知公告控制层
 * @name PostBulletinUpdate
 * @summary 公告信息修改
 * @request POST:/bulletin/update
 * @response `200` `ResultVoid` OK
 */
export const postBulletinUpdate = (data: UpdateBulletinQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/bulletin/update`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通知公告控制层 发送短信提醒
 *
 * @tags 通知公告控制层
 * @name PostBulletinMsg
 * @summary 发送短信提醒
 * @request POST:/bulletin/msg
 * @response `200` `ResultVoid` OK
 */
export const postBulletinMsg = (data: Array<BulletinSendMsgDTO>, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/bulletin/msg`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通知公告控制层 新增公告
 *
 * @tags 通知公告控制层
 * @name PostBulletinAdd
 * @summary 新增公告
 * @request POST:/bulletin/add
 * @response `200` `ResultVoid` OK
 */
export const postBulletinAdd = (data: AddBulletinQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/bulletin/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 修改救援人员
 *
 * @tags 救援人员管理接口, 基础信息管理-救援人员管理
 * @name PostBasicRetmanEdit
 * @summary 救援人员修改
 * @request POST:/basic/retman/edit
 * @response `200` `ResultBoolean` OK
 */
export const postBasicRetmanEdit = (data: EmresMnRetmanDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/retman/edit`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 新增救援人员数据
 *
 * @tags 救援人员管理接口, 基础信息管理-救援人员管理
 * @name PostBasicRetmanCreate
 * @summary 救援人员新增
 * @request POST:/basic/retman/create
 * @response `200` `ResultBoolean` OK
 */
export const postBasicRetmanCreate = (data: EmresMnRetmanDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/retman/create`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 批量删除救援人员数据
 *
 * @tags 救援人员管理接口, 基础信息管理-救援人员管理
 * @name PostBasicRetmanBatchDel
 * @summary 救援人员批量删除
 * @request POST:/basic/retman/batchDel
 * @response `200` `ResultBoolean` OK
 */
export const postBasicRetmanBatchDel = (
  query: {
    cmKids: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/retman/batchDel`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 修改救援队伍
 *
 * @tags 基础信息管理-救援队伍管理, 救援队伍管理接口
 * @name PostBasicReteamEdit
 * @summary 救援队伍修改
 * @request POST:/basic/reteam/edit
 * @response `200` `ResultBoolean` OK
 */
export const postBasicReteamEdit = (data: EmresMnReteamDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/reteam/edit`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 新增救援队伍数据
 *
 * @tags 基础信息管理-救援队伍管理, 救援队伍管理接口
 * @name PostBasicReteamCreate
 * @summary 救援队伍新增
 * @request POST:/basic/reteam/create
 * @response `200` `ResultBoolean` OK
 */
export const postBasicReteamCreate = (data: EmresMnReteamDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/reteam/create`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 批量删除救援队伍数据
 *
 * @tags 基础信息管理-救援队伍管理, 救援队伍管理接口
 * @name PostBasicReteamBatchDel
 * @summary 救援队伍批量删除
 * @request POST:/basic/reteam/batchDel
 * @response `200` `ResultBoolean` OK
 */
export const postBasicReteamBatchDel = (
  query: {
    cmKids: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/reteam/batchDel`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 管点信息列表查询
 *
 * @tags 燃气管网信息接口, 管点信息列表
 * @name PostBasicPipePipepointList
 * @summary 管点信息列表
 * @request POST:/basic/pipe/pipepoint/list
 * @response `200` `ResultListCifrsPipeMnPipepointPageVO` OK
 */
export const postBasicPipePipepointList = (data: ParamQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultListCifrsPipeMnPipepointPageVO>(
    {
      url: `gas-supervise/basic/pipe/pipepoint/list`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 断面分析查询
 *
 * @tags 断面分析, 燃气管网信息接口
 * @name PostBasicPipePipelineSection
 * @summary 断面分析
 * @request POST:/basic/pipe/pipeline/section
 * @response `200` `ResultListCifrsPipeSectionVO` OK
 */
export const postBasicPipePipelineSection = (
  query: {
    lineString: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultListCifrsPipeSectionVO>(
    {
      url: `gas-supervise/basic/pipe/pipeline/section`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 管线信息集合查询
 *
 * @tags 燃气管网信息接口, 管线信息集合
 * @name PostBasicPipePipelineList
 * @summary 管线信息集合
 * @request POST:/basic/pipe/pipeline/list
 * @response `200` `ResultListCifrsPipeMnPipelineVO` OK
 */
export const postBasicPipePipelineList = (data: ParamQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultListCifrsPipeMnPipelineVO>(
    {
      url: `gas-supervise/basic/pipe/pipeline/list`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 批量设置监测对象接口
 *
 * @tags 批量设置监测对象, 燃气管网信息接口
 * @name PostBasicPipeBatchMonitorno
 * @summary 批量设置监测对象
 * @request POST:/basic/pipe/batch/monitorno
 * @response `200` `ResultBoolean` OK
 */
export const postBasicPipeBatchMonitorno = (
  query: {
    cmKids: string;
    monitorno: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/pipe/batch/monitorno`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 批量设置监测对象接口
 *
 * @tags 批量设置监测对象, 燃气管网信息接口
 * @name PostBasicPipeBatchExport
 * @summary 批量设置监测对象
 * @request POST:/basic/pipe/batch/export
 * @response `200` `ResultBoolean` OK
 */
export const postBasicPipeBatchExport = (
  query: {
    /** @format binary */
    file: FormData;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/pipe/batch/export`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 修改救援物资
 *
 * @tags 基础信息管理-救援物资管理, 救援物资管理接口
 * @name PostBasicMateriEdit
 * @summary 救援物资修改
 * @request POST:/basic/materi/edit
 * @response `200` `ResultBoolean` OK
 */
export const postBasicMateriEdit = (data: EmresMnMateriDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/materi/edit`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 新增救援物资数据
 *
 * @tags 基础信息管理-救援物资管理, 救援物资管理接口
 * @name PostBasicMateriCreate
 * @summary 救援物资新增
 * @request POST:/basic/materi/create
 * @response `200` `ResultBoolean` OK
 */
export const postBasicMateriCreate = (data: EmresMnMateriDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/materi/create`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 批量删除救援物资数据
 *
 * @tags 基础信息管理-救援物资管理, 救援物资管理接口
 * @name PostBasicMateriBatchDel
 * @summary 救援物资批量删除
 * @request POST:/basic/materi/batchDel
 * @response `200` `ResultBoolean` OK
 */
export const postBasicMateriBatchDel = (
  query: {
    cmKids: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/materi/batchDel`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 编辑专家信息接口
 *
 * @tags  编辑专家信息, 专家信息接口
 * @name PostBasicExpertEdit
 * @summary  编辑专家信息
 * @request POST:/basic/expert/edit
 * @response `200` `ResultBoolean` OK
 */
export const postBasicExpertEdit = (data: EmresMnExpertDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/expert/edit`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 新增专家信息接口
 *
 * @tags 新增专家信息, 专家信息接口
 * @name PostBasicExpertCreate
 * @summary 新增专家信息
 * @request POST:/basic/expert/create
 * @response `200` `ResultBoolean` OK
 */
export const postBasicExpertCreate = (data: EmresMnExpertDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/expert/create`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 批量删除专家信息接口
 *
 * @tags 批量删除专家信息, 专家信息接口
 * @name PostBasicExpertBatchDel
 * @summary 批量删除专家信息
 * @request POST:/basic/expert/batch/del
 * @response `200` `ResultBoolean` OK
 */
export const postBasicExpertBatchDel = (
  query: {
    cmKids: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/basic/expert/batch/del`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 事故事件修改 事故事件修改
 *
 * @tags 事故事件修改, 事故事件管理接口
 * @name PostAccidentUpdate
 * @summary 事故事件修改
 * @request POST:/accident/update
 * @response `200` `ResultVoid` OK
 */
export const postAccidentUpdate = (data: UpdateAccidentQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/accident/update`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 事故事件新增 事故事件新增
 *
 * @tags 事故事件新增, 事故事件管理接口
 * @name PostAccidentAdd
 * @summary 事故事件新增
 * @request POST:/accident/add
 * @response `200` `ResultVoid` OK
 */
export const postAccidentAdd = (data: AddAccidentQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/accident/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * weather-controller
 *
 * @tags weather-controller
 * @name GetWeatherReal
 * @request GET:/weather/real
 * @response `200` `ResultWeatherInfo` OK
 */
export const getWeatherReal = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultWeatherInfo>(
    {
      url: `gas-supervise/weather/real`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * vehicle-controller 查询运输车辆列表
 *
 * @tags vehicle-controller
 * @name GetVehicleList
 * @summary 查询运输车辆列表
 * @request GET:/vehicle/list
 * @response `200` `PageResultListVehicleInfoVO` OK
 */
export const getVehicleList = (
  query: {
    query: VehiclePageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListVehicleInfoVO>(
    {
      url: `gas-supervise/vehicle/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * vehicle-controller 查询应急车辆列表
 *
 * @tags vehicle-controller
 * @name GetVehicleEmerList
 * @summary 查询应急车辆列表
 * @request GET:/vehicle/emer/list
 * @response `200` `PageResultListEmerVehicleInfoVO` OK
 */
export const getVehicleEmerList = (
  query: {
    query: VehiclePageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListEmerVehicleInfoVO>(
    {
      url: `gas-supervise/vehicle/emer/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通讯录 根据组织机构ID获取用户
 *
 * @tags 通讯录
 * @name GetUserByOrgId
 * @summary 根据组织机构ID获取用户
 * @request GET:/user/{orgId}
 * @response `200` `ResultListUserInfoVO` OK
 */
export const getUserByOrgId = (orgId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListUserInfoVO>(
    {
      url: `gas-supervise/user/${orgId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用户菜单 根据用户获取菜单
 *
 * @tags 用户菜单
 * @name GetUserUserMenu
 * @summary 根据用户获取菜单
 * @request GET:/user/user_menu
 * @response `200` `ResultListMenuVO` OK
 */
export const getUserUserMenu = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListMenuVO>(
    {
      url: `gas-supervise/user/user_menu`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构 根据管理区域获取企业组织机构
 *
 * @tags 组织机构
 * @name GetUserOrgEnterprise
 * @summary 根据管理区域获取企业组织机构
 * @request GET:/user/org/enterprise
 * @response `200` `ResultListOrganizationVO` OK
 */
export const getUserOrgEnterprise = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListOrganizationVO>(
    {
      url: `gas-supervise/user/org/enterprise`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用户管理 获取当前登录用户信息
 *
 * @tags 用户管理
 * @name GetUserMe
 * @summary 获取当前登录用户信息
 * @request GET:/user/me
 * @response `200` `ResultUserInfoVO` OK
 */
export const getUserMe = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultUserInfoVO>(
    {
      url: `gas-supervise/user/me`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用户管理 获取当前登录用户所属的组织结构数据
 *
 * @tags 用户管理
 * @name GetUserMeOrg
 * @summary 获取当前登录用户所属的组织结构数据
 * @request GET:/user/me/org
 * @response `200` `ResultListOrganizationVO` OK
 */
export const getUserMeOrg = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListOrganizationVO>(
    {
      url: `gas-supervise/user/me/org`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用户管理 获取当前登录用户所属的行政区划数据
 *
 * @tags 用户管理
 * @name GetUserMeDistrict
 * @summary 获取当前登录用户所属的行政区划数据
 * @request GET:/user/me/district
 * @response `200` `ResultDistrictVO` OK
 */
export const getUserMeDistrict = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultDistrictVO>(
    {
      url: `gas-supervise/user/me/district`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通讯录 根据分组编码获取通讯录数据
 *
 * @tags 通讯录
 * @name GetUserBook
 * @summary 根据分组编码获取通讯录数据
 * @request GET:/user/book
 * @response `200` `ResultListUserInfoVO` OK
 */
export const getUserBook = (
  query: {
    code: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListUserInfoVO>(
    {
      url: `gas-supervise/user/book`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通讯录 根据分组编码和组织编码获取通讯录数据
 *
 * @tags 通讯录
 * @name GetUserBookOrg
 * @summary 根据分组编码和组织编码获取通讯录数据
 * @request GET:/user/book-org
 * @response `200` `ResultListUserInfoVO` OK
 */
export const getUserBookOrg = (
  query: {
    code: string;
    orgId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListUserInfoVO>(
    {
      url: `gas-supervise/user/book-org`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 处置流程
 *
 * @tags 三方施工管理
 * @name GetThirdBuildFlowById
 * @summary 处置流程
 * @request GET:/third/build/{id}/flow
 * @response `200` `ResultThirdBuildHandleFlowVO` OK
 */
export const getThirdBuildFlowById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultThirdBuildHandleFlowVO>(
    {
      url: `gas-supervise/third/build/${id}/flow`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 下载excel模板
 *
 * @tags third-build-controller
 * @name GetThirdBuildTemplate
 * @summary 三方施工管理
 * @request GET:/third/build/template
 * @response `200` `void` OK
 */
export const getThirdBuildTemplate = (params: PerRequestOptions = {}) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/third/build/template`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 数量统计
 *
 * @tags 三方施工管理
 * @name GetThirdBuildSummary
 * @summary 数量统计
 * @request GET:/third/build/summary
 * @response `200` `ResultThirdBuildSummaryVO` OK
 */
export const getThirdBuildSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultThirdBuildSummaryVO>(
    {
      url: `gas-supervise/third/build/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 分页
 *
 * @tags 三方施工管理
 * @name GetThirdBuildPage
 * @summary 分页
 * @request GET:/third/build/page
 * @response `200` `PageResultListThirdBuildPageVO` OK
 */
export const getThirdBuildPage = (
  query: {
    query: ThirdBuildPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListThirdBuildPageVO>(
    {
      url: `gas-supervise/third/build/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * system-notify-controller
 *
 * @tags system-notify-controller
 * @name GetSysNotifyTemplatePage
 * @request GET:/sys/notify/template/page
 * @response `200` `PageResultListSysNotifyTemplatePageVO` OK
 */
export const getSysNotifyTemplatePage = (
  query: {
    query: SysNotifyTemplatePageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListSysNotifyTemplatePageVO>(
    {
      url: `gas-supervise/sys/notify/template/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * system-notify-controller
 *
 * @tags system-notify-controller
 * @name GetSysNotifyRulePage
 * @request GET:/sys/notify/rule/page
 * @response `200` `PageResultListSuperviseNotifyRulePageVO` OK
 */
export const getSysNotifyRulePage = (
  query: {
    query: PageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListSuperviseNotifyRulePageVO>(
    {
      url: `gas-supervise/sys/notify/rule/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端预警管理接口 预警列表
 *
 * @tags 监管端预警管理接口, 预警列表
 * @name GetSuperviseWarn
 * @summary 预警列表
 * @request GET:/supervise/warn
 * @response `200` `PageResultListWarnPageVO` OK
 */
export const getSuperviseWarn = (
  query: {
    /** 监管预警信息分页查询请求 */
    request: WarnPageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListWarnPageVO>(
    {
      url: `gas-supervise/supervise/warn`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 预警信息汇总 预警信息汇总
 *
 * @tags 预警信息汇总, 监管端预警管理接口
 * @name GetSuperviseWarnSummary
 * @summary 预警信息汇总
 * @request GET:/supervise/warn/summary
 * @response `200` `ResultListWarnSummaryVO` OK
 */
export const getSuperviseWarnSummary = (
  query: {
    /** 监管预警信息分页查询请求 */
    request: WarnPageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListWarnSummaryVO>(
    {
      url: `gas-supervise/supervise/warn/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端预警管理接口 历史预警信息汇总
 *
 * @tags 监管端预警管理接口, 历史预警信息汇总
 * @name GetSuperviseWarnSummaryHistory
 * @summary 历史预警信息汇总
 * @request GET:/supervise/warn/summary/history
 * @response `200` `ResultListWarnSummaryVO` OK
 */
export const getSuperviseWarnSummaryHistory = (
  query: {
    /** 监管预警信息分页查询请求 */
    request: WarnPageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListWarnSummaryVO>(
    {
      url: `gas-supervise/supervise/warn/summary/history`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端预警管理接口 历史预警列表
 *
 * @tags 监管端预警管理接口, 历史预警列表
 * @name GetSuperviseWarnHistory
 * @summary 历史预警列表
 * @request GET:/supervise/warn/history
 * @response `200` `PageResultListWarnPageVO` OK
 */
export const getSuperviseWarnHistory = (
  query: {
    /** 监管预警信息分页查询请求 */
    request: WarnPageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListWarnPageVO>(
    {
      url: `gas-supervise/supervise/warn/history`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 预警统计分析-预警类型统计 预警统计分析-预警类型统计
 *
 * @tags 预警统计分析-预警类型统计, 监管统计接口
 * @name GetSuperviseStatisticalWarnTypeSummary
 * @summary 预警统计分析-预警类型统计
 * @request GET:/supervise/statistical/warn/type/summary
 * @response `200` `ResultListWarnTotalVO` OK
 */
export const getSuperviseStatisticalWarnTypeSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListWarnTotalVO>(
    {
      url: `gas-supervise/supervise/statistical/warn/type/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 预警统计分析-历史预警排名-按类型 预警统计分析-历史预警排名-按类型
 *
 * @tags 预警统计分析-历史预警排名-按类型, 监管统计接口
 * @name GetSuperviseStatisticalWarnTypeSort
 * @summary 预警统计分析-历史预警排名-按类型
 * @request GET:/supervise/statistical/warn/type/sort
 * @response `200` `ResultListWarnTotalVO` OK
 */
export const getSuperviseStatisticalWarnTypeSort = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListWarnTotalVO>(
    {
      url: `gas-supervise/supervise/statistical/warn/type/sort`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 预警统计分析-历史预警分析-预警类型 预警统计分析-历史预警分析-预警类型
 *
 * @tags 预警统计分析-历史预警分析-预警类型, 监管统计接口
 * @name GetSuperviseStatisticalWarnTypeRate
 * @summary 预警统计分析-历史预警分析-预警类型
 * @request GET:/supervise/statistical/warn/type/rate
 * @response `200` `ResultListWarnTotalVO` OK
 */
export const getSuperviseStatisticalWarnTypeRate = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListWarnTotalVO>(
    {
      url: `gas-supervise/supervise/statistical/warn/type/rate`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管统计接口 预警统计分析-历史预警分析-预警来源
 *
 * @tags 监管统计接口, 预警统计分析-历史预警分析-预警来源
 * @name GetSuperviseStatisticalWarnSourceRate
 * @summary 预警统计分析-历史预警分析-预警来源
 * @request GET:/supervise/statistical/warn/source/rate
 * @response `200` `ResultListWarnTotalVO` OK
 */
export const getSuperviseStatisticalWarnSourceRate = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListWarnTotalVO>(
    {
      url: `gas-supervise/supervise/statistical/warn/source/rate`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 预警统计分析-历史预警排名-按企业 预警统计分析-历史预警排名-按企业
 *
 * @tags 预警统计分析-历史预警排名-按企业, 监管统计接口
 * @name GetSuperviseStatisticalWarnOrgSummary
 * @summary 预警统计分析-历史预警排名-按企业
 * @request GET:/supervise/statistical/warn/org/summary
 * @response `200` `ResultListWarnTotalVO` OK
 */
export const getSuperviseStatisticalWarnOrgSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListWarnTotalVO>(
    {
      url: `gas-supervise/supervise/statistical/warn/org/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 预警统计分析-历史预警分析-预警等级 预警统计分析-历史预警分析-预警等级
 *
 * @tags 预警统计分析-历史预警分析-预警等级, 监管统计接口
 * @name GetSuperviseStatisticalWarnLevelRate
 * @summary 预警统计分析-历史预警分析-预警等级
 * @request GET:/supervise/statistical/warn/level/rate
 * @response `200` `ResultListWarnTotalVO` OK
 */
export const getSuperviseStatisticalWarnLevelRate = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListWarnTotalVO>(
    {
      url: `gas-supervise/supervise/statistical/warn/level/rate`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 预警统计分析-处置中预警 预警统计分析-处置中预警
 *
 * @tags 预警统计分析-处置中预警, 监管统计接口
 * @name GetSuperviseStatisticalWarnDisposeSummary
 * @summary 预警统计分析-处置中预警
 * @request GET:/supervise/statistical/warn/dispose/summary
 * @response `200` `ResultWarnDisposeVO` OK
 */
export const getSuperviseStatisticalWarnDisposeSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultWarnDisposeVO>(
    {
      url: `gas-supervise/supervise/statistical/warn/dispose/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监测预警大屏-预警统计 监测预警大屏-预警统计
 *
 * @tags 监测预警大屏-预警统计, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalScreenWarnSummary
 * @summary 监测预警大屏-预警统计
 * @request GET:/supervise/statistical/screen/warn/summary
 * @response `200` `ResultWarnScreenSummaryVO` OK
 */
export const getSuperviseStatisticalScreenWarnSummary = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultWarnScreenSummaryVO>(
    {
      url: `gas-supervise/supervise/statistical/screen/warn/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 管道气、监测预警统计接口 监测预警大屏-预警事件
 *
 * @tags 管道气、监测预警统计接口, 监测预警大屏-预警事件
 * @name GetSuperviseStatisticalScreenWarnEvent
 * @summary 监测预警大屏-预警事件
 * @request GET:/supervise/statistical/screen/warn/event
 * @response `200` `ResultWarnStatisticalVO` OK
 */
export const getSuperviseStatisticalScreenWarnEvent = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultWarnStatisticalVO>(
    {
      url: `gas-supervise/supervise/statistical/screen/warn/event`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 管道气大屏-资质证照异常 管道气大屏-资质证照异常
 *
 * @tags 管道气大屏-资质证照异常, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalScreenQualificationsError
 * @summary 管道气大屏-资质证照异常
 * @request GET:/supervise/statistical/screen/qualifications/error
 * @response `200` `ResultQualificationsErrorVO` OK
 */
export const getSuperviseStatisticalScreenQualificationsError = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultQualificationsErrorVO>(
    {
      url: `gas-supervise/supervise/statistical/screen/qualifications/error`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 管道气大屏-预警事件 管道气大屏-预警事件
 *
 * @tags 管道气大屏-预警事件, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalScreenPipelineWarn
 * @summary 管道气大屏-预警事件
 * @request GET:/supervise/statistical/screen/pipeline/warn
 * @response `200` `ResultPipeGasWarnTotalVO` OK
 */
export const getSuperviseStatisticalScreenPipelineWarn = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultPipeGasWarnTotalVO>(
    {
      url: `gas-supervise/supervise/statistical/screen/pipeline/warn`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 管道气大屏-行业概览 管道气大屏-行业概览
 *
 * @tags 管道气大屏-行业概览, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalScreenPipelineOverview
 * @summary 管道气大屏-行业概览
 * @request GET:/supervise/statistical/screen/pipeline/overview
 * @response `200` `ResultPipelineOverviewVO` OK
 */
export const getSuperviseStatisticalScreenPipelineOverview = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultPipelineOverviewVO>(
    {
      url: `gas-supervise/supervise/statistical/screen/pipeline/overview`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 管道气大屏-巡查巡检 管道气大屏-巡查巡检
 *
 * @tags 管道气大屏-巡查巡检, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalScreenPipelineInspectionPatrol
 * @summary 管道气大屏-巡查巡检
 * @request GET:/supervise/statistical/screen/pipeline/inspection/patrol
 * @response `200` `ResultInspectionPatrolVO` OK
 */
export const getSuperviseStatisticalScreenPipelineInspectionPatrol = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultInspectionPatrolVO>(
    {
      url: `gas-supervise/supervise/statistical/screen/pipeline/inspection/patrol`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 管道气大屏-监测设备 管道气大屏-监测设备
 *
 * @tags 管道气大屏-监测设备, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalScreenPipelineDevice
 * @summary 管道气大屏-监测设备
 * @request GET:/supervise/statistical/screen/pipeline/device
 * @response `200` `ResultListAlarmStatisticalVO` OK
 */
export const getSuperviseStatisticalScreenPipelineDevice = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListAlarmStatisticalVO>(
    {
      url: `gas-supervise/supervise/statistical/screen/pipeline/device`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监测预警大屏-监测概览 监测预警大屏-监测概览
 *
 * @tags 监测预警大屏-监测概览, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalScreenMonitorOverview
 * @summary 监测预警大屏-监测概览
 * @request GET:/supervise/statistical/screen/monitor/overview
 * @response `200` `ResultMonitorStatisticalVO` OK
 */
export const getSuperviseStatisticalScreenMonitorOverview = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultMonitorStatisticalVO>(
    {
      url: `gas-supervise/supervise/statistical/screen/monitor/overview`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 管道气、监测预警统计接口 基础数据-应急资源
 *
 * @tags 管道气、监测预警统计接口, 基础数据-应急资源
 * @name GetSuperviseStatisticalScreenEmresCount
 * @summary 基础数据-应急资源
 * @request GET:/supervise/statistical/screen/emres/count
 * @response `200` `ResultScreenEmresCountVO` OK
 */
export const getSuperviseStatisticalScreenEmresCount = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultScreenEmresCountVO>(
    {
      url: `gas-supervise/supervise/statistical/screen/emres/count`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监测预警大屏-运行概况 监测预警大屏-运行概况
 *
 * @tags 监测预警大屏-运行概况, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalScreenAlarmOverview
 * @summary 监测预警大屏-运行概况
 * @request GET:/supervise/statistical/screen/alarm/overview
 * @response `200` `ResultListAlarmStatisticalVO` OK
 */
export const getSuperviseStatisticalScreenAlarmOverview = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListAlarmStatisticalVO>(
    {
      url: `gas-supervise/supervise/statistical/screen/alarm/overview`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 管道气、监测预警统计接口 管道气综合监管-资质证照异常
 *
 * @tags 管道气、监测预警统计接口, 管道气综合监管-资质证照异常
 * @name GetSuperviseStatisticalPcQualificationsError
 * @summary 管道气综合监管-资质证照异常
 * @request GET:/supervise/statistical/pc/qualifications/error
 * @response `200` `ResultListHomePageEnterpriseVO` OK
 */
export const getSuperviseStatisticalPcQualificationsError = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListHomePageEnterpriseVO>(
    {
      url: `gas-supervise/supervise/statistical/pc/qualifications/error`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 终端用户综合监管-报警器安装管理 终端用户综合监管-报警器安装管理
 *
 * @tags 终端用户综合监管-报警器安装管理, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalPcInstallAlarm
 * @summary 终端用户综合监管-报警器安装管理
 * @request GET:/supervise/statistical/pc/install/alarm
 * @response `200` `ResultListInstallAlarmVO` OK
 */
export const getSuperviseStatisticalPcInstallAlarm = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListInstallAlarmVO>(
    {
      url: `gas-supervise/supervise/statistical/pc/install/alarm`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 管道气、监测预警统计接口 终端用户综合监管-报警安装汇总
 *
 * @tags 管道气、监测预警统计接口, 终端用户综合监管-报警安装汇总
 * @name GetSuperviseStatisticalPcInstallAlarmCount
 * @summary 终端用户综合监管-报警安装汇总
 * @request GET:/supervise/statistical/pc/install/alarm/count
 * @response `200` `ResultInstallAlarmCountVO` OK
 */
export const getSuperviseStatisticalPcInstallAlarmCount = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultInstallAlarmCountVO>(
    {
      url: `gas-supervise/supervise/statistical/pc/install/alarm/count`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 终端用户-监测报警-统计分析-报警分析 终端用户-监测报警-统计分析-报警分析
 *
 * @tags 终端用户-监测报警-统计分析-报警分析, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalPcClientDeviceRate
 * @summary 终端用户-监测报警-统计分析-报警分析
 * @request GET:/supervise/statistical/pc/client/device/rate
 * @response `200` `ResultClientDeviceRateVO` OK
 */
export const getSuperviseStatisticalPcClientDeviceRate = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultClientDeviceRateVO>(
    {
      url: `gas-supervise/supervise/statistical/pc/client/device/rate`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 终端用户-监测报警-统计分析-报警趋势 终端用户-监测报警-统计分析-报警趋势
 *
 * @tags 终端用户-监测报警-统计分析-报警趋势, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalPcClientAlarmTrace
 * @summary 终端用户-监测报警-统计分析-报警趋势
 * @request GET:/supervise/statistical/pc/client/alarm/trace
 * @response `200` `ResultMapStringListScreenAlarmSummaryLineChartVO` OK
 */
export const getSuperviseStatisticalPcClientAlarmTrace = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultMapStringListScreenAlarmSummaryLineChartVO>(
    {
      url: `gas-supervise/supervise/statistical/pc/client/alarm/trace`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 终端用户-监测报警-统计分析-报警级别排名 终端用户-监测报警-统计分析-报警级别排名
 *
 * @tags 终端用户-监测报警-统计分析-报警级别排名, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalPcClientAlarmLevel
 * @summary 终端用户-监测报警-统计分析-报警级别排名
 * @request GET:/supervise/statistical/pc/client/alarm/level
 * @response `200` `ResultListAlarmSumVO` OK
 */
export const getSuperviseStatisticalPcClientAlarmLevel = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListAlarmSumVO>(
    {
      url: `gas-supervise/supervise/statistical/pc/client/alarm/level`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 终端用户-监测报警-统计分析-报警区域排名 终端用户-监测报警-统计分析-报警区域排名
 *
 * @tags 终端用户-监测报警-统计分析-报警区域排名, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalPcClientAlarmDistrict
 * @summary 终端用户-监测报警-统计分析-报警区域排名
 * @request GET:/supervise/statistical/pc/client/alarm/district
 * @response `200` `ResultListAlarmSumVO` OK
 */
export const getSuperviseStatisticalPcClientAlarmDistrict = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListAlarmSumVO>(
    {
      url: `gas-supervise/supervise/statistical/pc/client/alarm/district`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 管道气、监测预警统计接口 终端用户-监测报警-统计分析-报警数量
 *
 * @tags 管道气、监测预警统计接口, 终端用户-监测报警-统计分析-报警数量
 * @name GetSuperviseStatisticalPcClientAlarmCount
 * @summary 终端用户-监测报警-统计分析-报警数量
 * @request GET:/supervise/statistical/pc/client/alarm/count
 * @response `200` `ResultClientAlarmCountVO` OK
 */
export const getSuperviseStatisticalPcClientAlarmCount = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultClientAlarmCountVO>(
    {
      url: `gas-supervise/supervise/statistical/pc/client/alarm/count`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 终端用户综合监管-重点清单-确认燃气泄漏汇总 终端用户综合监管-重点清单-确认燃气泄漏汇总
 *
 * @tags 终端用户综合监管-重点清单-确认燃气泄漏汇总, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalPcAlarmSummary
 * @summary 终端用户综合监管-重点清单-确认燃气泄漏汇总
 * @request GET:/supervise/statistical/pc/alarm/summary
 * @response `200` `ResultPcAlarmSummaryVO` OK
 */
export const getSuperviseStatisticalPcAlarmSummary = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultPcAlarmSummaryVO>(
    {
      url: `gas-supervise/supervise/statistical/pc/alarm/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 管道气、监测预警统计接口 终端用户综合监管-重点清单-确认燃气泄漏
 *
 * @tags 管道气、监测预警统计接口, 终端用户综合监管-重点清单-确认燃气泄漏
 * @name GetSuperviseStatisticalPcAlarmList
 * @summary 终端用户综合监管-重点清单-确认燃气泄漏
 * @request GET:/supervise/statistical/pc/alarm/list
 * @response `200` `ResultListAlarmPageVO` OK
 */
export const getSuperviseStatisticalPcAlarmList = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListAlarmPageVO>(
    {
      url: `gas-supervise/supervise/statistical/pc/alarm/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管统计接口 设备场所在线率
 *
 * @tags 监管统计接口, 设备场所在线率
 * @name GetSuperviseStatisticalMonitorTypeOnlineRate
 * @summary 设备场所在线率
 * @request GET:/supervise/statistical/monitor/type/online/rate
 * @response `200` `ResultListDeviceStateSummaryVO` OK
 */
export const getSuperviseStatisticalMonitorTypeOnlineRate = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListDeviceStateSummaryVO>(
    {
      url: `gas-supervise/supervise/statistical/monitor/type/online/rate`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 接入监测设备汇总 接入监测设备汇总
 *
 * @tags 接入监测设备汇总, 监管统计接口
 * @name GetSuperviseStatisticalMonitorDeviceSummary
 * @summary 接入监测设备汇总
 * @request GET:/supervise/statistical/monitor/device/summary
 * @response `200` `ResultListMonitorDeviceSumVO` OK
 */
export const getSuperviseStatisticalMonitorDeviceSummary = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListMonitorDeviceSumVO>(
    {
      url: `gas-supervise/supervise/statistical/monitor/device/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监测设备接入来源在线率 监测设备接入来源在线率
 *
 * @tags 监测设备接入来源在线率, 监管统计接口
 * @name GetSuperviseStatisticalMonitorDeviceSource
 * @summary 监测设备接入来源在线率
 * @request GET:/supervise/statistical/monitor/device/source
 * @response `200` `ResultListDeviceStateSummaryVO` OK
 */
export const getSuperviseStatisticalMonitorDeviceSource = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListDeviceStateSummaryVO>(
    {
      url: `gas-supervise/supervise/statistical/monitor/device/source`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管统计接口 企业监测设备在线率排名
 *
 * @tags 监管统计接口, 企业监测设备在线率排名
 * @name GetSuperviseStatisticalMonitorDeviceSort
 * @summary 企业监测设备在线率排名
 * @request GET:/supervise/statistical/monitor/device/sort
 * @response `200` `ResultListOrgDeviceRateVO` OK
 */
export const getSuperviseStatisticalMonitorDeviceSort = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListOrgDeviceRateVO>(
    {
      url: `gas-supervise/supervise/statistical/monitor/device/sort`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管统计接口 监测设备类别在线率
 *
 * @tags 监管统计接口, 监测设备类别在线率
 * @name GetSuperviseStatisticalMonitorDeviceIndex
 * @summary 监测设备类别在线率
 * @request GET:/supervise/statistical/monitor/device/index
 * @response `200` `ResultListDeviceStateSummaryVO` OK
 */
export const getSuperviseStatisticalMonitorDeviceIndex = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListDeviceStateSummaryVO>(
    {
      url: `gas-supervise/supervise/statistical/monitor/device/index`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 设备总的在线率 设备总的在线率
 *
 * @tags 设备总的在线率, 监管统计接口
 * @name GetSuperviseStatisticalMonitorAllOnlineRate
 * @summary 设备总的在线率
 * @request GET:/supervise/statistical/monitor/all/online/rate
 * @response `200` `ResultAllOnlineRateVO` OK
 */
export const getSuperviseStatisticalMonitorAllOnlineRate = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultAllOnlineRateVO>(
    {
      url: `gas-supervise/supervise/statistical/monitor/all/online/rate`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 系统首页大屏-监测预警 系统首页大屏-监测预警
 *
 * @tags 系统首页大屏-监测预警, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalHomePageWarnSummary
 * @summary 系统首页大屏-监测预警
 * @request GET:/supervise/statistical/homePage/warn/summary
 * @response `200` `ResultHomePageWarnSummaryVO` OK
 */
export const getSuperviseStatisticalHomePageWarnSummary = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultHomePageWarnSummaryVO>(
    {
      url: `gas-supervise/supervise/statistical/homePage/warn/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 系统首页大屏-企业经营 系统首页大屏-企业经营
 *
 * @tags 系统首页大屏-企业经营, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalHomePageEnterprise
 * @summary 系统首页大屏-企业经营
 * @request GET:/supervise/statistical/homePage/enterprise
 * @response `200` `ResultListHomePageEnterpriseVO` OK
 */
export const getSuperviseStatisticalHomePageEnterprise = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListHomePageEnterpriseVO>(
    {
      url: `gas-supervise/supervise/statistical/homePage/enterprise`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 系统首页大屏-数据接入 系统首页大屏-数据接入
 *
 * @tags 系统首页大屏-数据接入, 管道气、监测预警统计接口
 * @name GetSuperviseStatisticalHomePageDataAccess
 * @summary 系统首页大屏-数据接入
 * @request GET:/supervise/statistical/homePage/data/access
 * @response `200` `ResultListHomePageDataAccessVO` OK
 */
export const getSuperviseStatisticalHomePageDataAccess = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListHomePageDataAccessVO>(
    {
      url: `gas-supervise/supervise/statistical/homePage/data/access`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 近一年的监测成效，报警和预警数量统计以及按月份的趋势统计
 *
 * @tags 监管统计接口
 * @name GetSuperviseStatisticalAlarmYear
 * @summary 近一年的监测成效
 * @request GET:/supervise/statistical/alarm/year
 * @response `200` `ResultAlarmCountTrendVO` OK
 */
export const getSuperviseStatisticalAlarmYear = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultAlarmCountTrendVO>(
    {
      url: `gas-supervise/supervise/statistical/alarm/year`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管统计接口 报警数量统计
 *
 * @tags 监管统计接口, 报警数量统计
 * @name GetSuperviseStatisticalAlarmObjTypeSummary
 * @summary 报警数量统计
 * @request GET:/supervise/statistical/alarm/objType/summary
 * @response `200` `ResultListAlarmObjTypeSummaryVO` OK
 */
export const getSuperviseStatisticalAlarmObjTypeSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListAlarmObjTypeSummaryVO>(
    {
      url: `gas-supervise/supervise/statistical/alarm/objType/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 历史报警分析-报警类型 历史报警分析-报警类型
 *
 * @tags 历史报警分析-报警类型, 监管统计接口
 * @name GetSuperviseStatisticalAlarmHistoryType
 * @summary 历史报警分析-报警类型
 * @request GET:/supervise/statistical/alarm/history/type
 * @response `200` `ResultListAlarmSumVO` OK
 */
export const getSuperviseStatisticalAlarmHistoryType = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListAlarmSumVO>(
    {
      url: `gas-supervise/supervise/statistical/alarm/history/type`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 历史报警分析-报警场所 历史报警分析-报警场所
 *
 * @tags 历史报警分析-报警场所, 监管统计接口
 * @name GetSuperviseStatisticalAlarmHistorySummary
 * @summary 历史报警分析-报警场所
 * @request GET:/supervise/statistical/alarm/history/summary
 * @response `200` `ResultListAlarmSumVO` OK
 */
export const getSuperviseStatisticalAlarmHistorySummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListAlarmSumVO>(
    {
      url: `gas-supervise/supervise/statistical/alarm/history/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管统计接口 历史报警分析-报警来源
 *
 * @tags 监管统计接口, 历史报警分析-报警来源
 * @name GetSuperviseStatisticalAlarmHistorySource
 * @summary 历史报警分析-报警来源
 * @request GET:/supervise/statistical/alarm/history/source
 * @response `200` `ResultListAlarmSumVO` OK
 */
export const getSuperviseStatisticalAlarmHistorySource = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListAlarmSumVO>(
    {
      url: `gas-supervise/supervise/statistical/alarm/history/source`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 当前报警类型 当前报警类型
 *
 * @tags 当前报警类型, 监管统计接口
 * @name GetSuperviseStatisticalAlarmCureType
 * @summary 当前报警类型
 * @request GET:/supervise/statistical/alarm/cure/type
 * @response `200` `ResultListAlarmSumVO` OK
 */
export const getSuperviseStatisticalAlarmCureType = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListAlarmSumVO>(
    {
      url: `gas-supervise/supervise/statistical/alarm/cure/type`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 当前报警场所统计 当前报警场所统计
 *
 * @tags 当前报警场所统计, 监管统计接口
 * @name GetSuperviseStatisticalAlarmCureSummary
 * @summary 当前报警场所统计
 * @request GET:/supervise/statistical/alarm/cure/summary
 * @response `200` `ResultListAlarmSumVO` OK
 */
export const getSuperviseStatisticalAlarmCureSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListAlarmSumVO>(
    {
      url: `gas-supervise/supervise/statistical/alarm/cure/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监测报警管理-报警分析报表 监测报警管理-报警分析报表
 *
 * @tags 监测报警管理-报警分析报表, 监管统计接口
 * @name GetSuperviseStatisticalAlarmAnalysisSummary
 * @summary 监测报警管理-报警分析报表
 * @request GET:/supervise/statistical/alarm/analysis/summary
 * @response `200` `ResultListAlarmAnalysisVO` OK
 */
export const getSuperviseStatisticalAlarmAnalysisSummary = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListAlarmAnalysisVO>(
    {
      url: `gas-supervise/supervise/statistical/alarm/analysis/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-监测预警接口-监测预警-累计分析 大屏-监测预警接口-监测预警-累计分析
 *
 * @tags 大屏-监测预警接口-监测预警-累计分析, 大屏-监测预警接口
 * @name GetSuperviseScreenWarnSummary
 * @summary 大屏-监测预警接口-监测预警-累计分析
 * @request GET:/supervise/screen/warn/summary
 * @response `200` `ResultScreenWarnSummaryVO` OK
 */
export const getSuperviseScreenWarnSummary = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultScreenWarnSummaryVO>(
    {
      url: `gas-supervise/supervise/screen/warn/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-监测预警接口 大屏-监测预警接口-监测预警-历史预警
 *
 * @tags 大屏-监测预警接口, 大屏-监测预警接口-监测预警-历史预警
 * @name GetSuperviseScreenWarnHistory
 * @summary 大屏-监测预警接口-监测预警-历史预警
 * @request GET:/supervise/screen/warn/history
 * @response `200` `ResultScreenWarnHistoryVO` OK
 */
export const getSuperviseScreenWarnHistory = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultScreenWarnHistoryVO>(
    {
      url: `gas-supervise/supervise/screen/warn/history`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-监测预警接口 大屏-监测预警接口-监测预警-当前预警
 *
 * @tags 大屏-监测预警接口, 大屏-监测预警接口-监测预警-当前预警
 * @name GetSuperviseScreenWarnCurrent
 * @summary 大屏-监测预警接口-监测预警-当前预警
 * @request GET:/supervise/screen/warn/current
 * @response `200` `ResultScreenWarnCurrentVO` OK
 */
export const getSuperviseScreenWarnCurrent = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultScreenWarnCurrentVO>(
    {
      url: `gas-supervise/supervise/screen/warn/current`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-燃气底数-企业用户用气类型 大屏-燃气底数-企业用户用气类型
 *
 * @tags 大屏-燃气底数-企业用户用气类型, 大屏-燃气底数
 * @name GetSuperviseScreenUserOrg
 * @summary 大屏-燃气底数-企业用户用气类型
 * @request GET:/supervise/screen/user/org
 * @response `200` `ResultMapStringListScreenGasDataMapVO` OK
 */
export const getSuperviseScreenUserOrg = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultMapStringListScreenGasDataMapVO>(
    {
      url: `gas-supervise/supervise/screen/user/org`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-监测预警接口 大屏-监测预警接口-监测运行-第三方设备在线率
 *
 * @tags 大屏-监测预警接口, 大屏-监测预警接口-监测运行-第三方设备在线率
 * @name GetSuperviseScreenThirdDeviceRate
 * @summary 大屏-监测预警接口-监测运行-第三方设备在线率
 * @request GET:/supervise/screen/third/device/rate
 * @response `200` `ResultScreenDeviceOnlineSummaryVO` OK
 */
export const getSuperviseScreenThirdDeviceRate = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultScreenDeviceOnlineSummaryVO>(
    {
      url: `gas-supervise/supervise/screen/third/device/rate`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-燃气底数 大屏-燃气底数-天然气场站归属
 *
 * @tags 大屏-燃气底数, 大屏-燃气底数-天然气场站归属
 * @name GetSuperviseScreenStationOrg
 * @summary 大屏-燃气底数-天然气场站归属
 * @request GET:/supervise/screen/station/org
 * @response `200` `ResultListScreenGasDataMapVO` OK
 */
export const getSuperviseScreenStationOrg = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListScreenGasDataMapVO>(
    {
      url: `gas-supervise/supervise/screen/station/org`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-监测预警接口-监测覆盖 大屏-监测预警接口-监测覆盖
 *
 * @tags 大屏-监测预警接口-监测覆盖, 大屏-监测预警接口
 * @name GetSuperviseScreenMonitorCoverage
 * @summary 大屏-监测预警接口-监测覆盖
 * @request GET:/supervise/screen/monitor/coverage
 * @response `200` `ResultScreenMonitorCoverageVO` OK
 */
export const getSuperviseScreenMonitorCoverage = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultScreenMonitorCoverageVO>(
    {
      url: `gas-supervise/supervise/screen/monitor/coverage`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-燃气底数 大屏-燃气底数-地图
 *
 * @tags 大屏-燃气底数, 大屏-燃气底数-地图
 * @name GetSuperviseScreenMapDataByCode
 * @summary 大屏-燃气底数-地图
 * @request GET:/supervise/screen/map/data/{code}
 * @response `200` `ResultMapStringListScreenGasDataMapVO` OK
 */
export const getSuperviseScreenMapDataByCode = (code: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultMapStringListScreenGasDataMapVO>(
    {
      url: `gas-supervise/supervise/screen/map/data/${code}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-监测预警接口 大屏-监测预警接口-液化气监测概览
 *
 * @tags 大屏-监测预警接口
 * @name GetSuperviseScreenLngDeviceSummary
 * @summary 大屏-监测预警接口-液化气监测概览
 * @request GET:/supervise/screen/lng/device/summary
 * @response `200` `ResultLngDeviceStatDTO` OK
 */
export const getSuperviseScreenLngDeviceSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultLngDeviceStatDTO>(
    {
      url: `gas-supervise/supervise/screen/lng/device/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-监测预警接口-监测运行-生命线设备在线率 大屏-监测预警接口-监测运行-生命线设备在线率
 *
 * @tags 大屏-监测预警接口-监测运行-生命线设备在线率, 大屏-监测预警接口
 * @name GetSuperviseScreenLifelineDeviceRate
 * @summary 大屏-监测预警接口-监测运行-生命线设备在线率
 * @request GET:/supervise/screen/lifeline/device/rate
 * @response `200` `ResultScreenDeviceOnlineSummaryVO` OK
 */
export const getSuperviseScreenLifelineDeviceRate = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultScreenDeviceOnlineSummaryVO>(
    {
      url: `gas-supervise/supervise/screen/lifeline/device/rate`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-燃气底数 大屏-燃气底数-天然气管网归属
 *
 * @tags 大屏-燃气底数, 大屏-燃气底数-天然气管网归属
 * @name GetSuperviseScreenGasLineOrg
 * @summary 大屏-燃气底数-天然气管网归属
 * @request GET:/supervise/screen/gas/line/org
 * @response `200` `ResultListScreenGasDataMapVO` OK
 */
export const getSuperviseScreenGasLineOrg = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListScreenGasDataMapVO>(
    {
      url: `gas-supervise/supervise/screen/gas/line/org`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-监测预警接口-监测概览 大屏-监测预警接口-监测概览
 *
 * @tags 大屏-监测预警接口-监测概览, 大屏-监测预警接口
 * @name GetSuperviseScreenDeviceSummary
 * @summary 大屏-监测预警接口-监测概览
 * @request GET:/supervise/screen/device/summary
 * @response `200` `ResultScreenDeviceSummaryVO` OK
 */
export const getSuperviseScreenDeviceSummary = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultScreenDeviceSummaryVO>(
    {
      url: `gas-supervise/supervise/screen/device/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-燃气底数 大屏-燃气底数-供气总量
 *
 * @tags 大屏-燃气底数, 大屏-燃气底数-供气总量
 * @name GetSuperviseScreenDataSupply
 * @summary 大屏-燃气底数-供气总量
 * @request GET:/supervise/screen/data/supply
 * @response `200` `ResultListYearSupplyVO` OK
 */
export const getSuperviseScreenDataSupply = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListYearSupplyVO>(
    {
      url: `gas-supervise/supervise/screen/data/supply`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-燃气底数 燃气底数-燃气企业-燃气底数总览
 *
 * @tags 大屏-燃气底数, 燃气底数-燃气企业-燃气底数总览
 * @name GetSuperviseScreenDataOverview
 * @summary 燃气底数-燃气企业-燃气底数总览
 * @request GET:/supervise/screen/data/overview
 * @response `200` `ResultListDataOverviewVO` OK
 */
export const getSuperviseScreenDataOverview = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListDataOverviewVO>(
    {
      url: `gas-supervise/supervise/screen/data/overview`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 燃气底数-燃气企业-运输车辆 燃气底数-燃气企业-运输车辆
 *
 * @tags 燃气底数-燃气企业-运输车辆, 大屏-燃气底数
 * @name GetSuperviseScreenDataOverviewVehicle
 * @summary 燃气底数-燃气企业-运输车辆
 * @request GET:/supervise/screen/data/overview/vehicle
 * @response `200` `ResultVehicleDataVO` OK
 */
export const getSuperviseScreenDataOverviewVehicle = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultVehicleDataVO>(
    {
      url: `gas-supervise/supervise/screen/data/overview/vehicle`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 燃气底数-底数总览-燃气场站 燃气底数-底数总览-燃气场站
 *
 * @tags 燃气底数-底数总览-燃气场站, 大屏-燃气底数
 * @name GetSuperviseScreenDataOverviewStation
 * @summary 燃气底数-底数总览-燃气场站
 * @request GET:/supervise/screen/data/overview/station
 * @response `200` `ResultAccessDataVO` OK
 */
export const getSuperviseScreenDataOverviewStation = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultAccessDataVO>(
    {
      url: `gas-supervise/supervise/screen/data/overview/station`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-燃气底数 燃气底数-底数总览-燃气管网
 *
 * @tags 大屏-燃气底数, 燃气底数-底数总览-燃气管网
 * @name GetSuperviseScreenDataOverviewPipeline
 * @summary 燃气底数-底数总览-燃气管网
 * @request GET:/supervise/screen/data/overview/pipeline
 * @response `200` `ResultAccessDataVO` OK
 */
export const getSuperviseScreenDataOverviewPipeline = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultAccessDataVO>(
    {
      url: `gas-supervise/supervise/screen/data/overview/pipeline`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-燃气底数 燃气底数-燃气企业-从业人员
 *
 * @tags 大屏-燃气底数, 燃气底数-燃气企业-从业人员
 * @name GetSuperviseScreenDataOverviewPerson
 * @summary 燃气底数-燃气企业-从业人员
 * @request GET:/supervise/screen/data/overview/person
 * @response `200` `ResultAccessDataVO` OK
 */
export const getSuperviseScreenDataOverviewPerson = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultAccessDataVO>(
    {
      url: `gas-supervise/supervise/screen/data/overview/person`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 燃气底数-燃气企业-用气用户 燃气底数-燃气企业-用气用户
 *
 * @tags 燃气底数-燃气企业-用气用户, 大屏-燃气底数
 * @name GetSuperviseScreenDataOverviewGasUser
 * @summary 燃气底数-燃气企业-用气用户
 * @request GET:/supervise/screen/data/overview/gas/user
 * @response `200` `ResultGasUserCountVO` OK
 */
export const getSuperviseScreenDataOverviewGasUser = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultGasUserCountVO>(
    {
      url: `gas-supervise/supervise/screen/data/overview/gas/user`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 燃气底数-列表信息 燃气底数-列表信息
 *
 * @tags 燃气底数-列表信息, 大屏-燃气底数
 * @name GetSuperviseScreenDataOverviewDetail
 * @summary 燃气底数-列表信息
 * @request GET:/supervise/screen/data/overview/detail
 * @response `200` `ResultBaseDataVO` OK
 */
export const getSuperviseScreenDataOverviewDetail = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultBaseDataVO>(
    {
      url: `gas-supervise/supervise/screen/data/overview/detail`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 燃气底数-底数总览-液化气瓶 燃气底数-底数总览-液化气瓶
 *
 * @tags 燃气底数-底数总览-液化气瓶, 大屏-燃气底数
 * @name GetSuperviseScreenDataOverviewBottle
 * @summary 燃气底数-底数总览-液化气瓶
 * @request GET:/supervise/screen/data/overview/bottle
 * @response `200` `ResultAccessDataVO` OK
 */
export const getSuperviseScreenDataOverviewBottle = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultAccessDataVO>(
    {
      url: `gas-supervise/supervise/screen/data/overview/bottle`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-燃气底数 大屏-燃气底数-危险源与防护目标
 *
 * @tags 大屏-燃气底数, 大屏-燃气底数-危险源与防护目标
 * @name GetSuperviseScreenDataDangerAndProtag
 * @summary 大屏-燃气底数-危险源与防护目标
 * @request GET:/supervise/screen/data/danger_and_protag
 * @response `200` `ResultMapStringLong` OK
 */
export const getSuperviseScreenDataDangerAndProtag = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultMapStringLong>(
    {
      url: `gas-supervise/supervise/screen/data/danger_and_protag`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-监测预警接口-监测运行-累计报警 大屏-监测预警接口-监测运行-累计报警
 *
 * @tags 大屏-监测预警接口-监测运行-累计报警, 大屏-监测预警接口
 * @name GetSuperviseScreenAlarmSummary
 * @summary 大屏-监测预警接口-监测运行-累计报警
 * @request GET:/supervise/screen/alarm/summary
 * @response `200` `ResultScreenAlarmSummaryVO` OK
 */
export const getSuperviseScreenAlarmSummary = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultScreenAlarmSummaryVO>(
    {
      url: `gas-supervise/supervise/screen/alarm/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业风险列表查询 企业风险列表查询
 *
 * @tags 企业风险列表查询, 企业风险上报控制层
 * @name GetSuperviseRiskList
 * @summary 企业风险列表查询
 * @request GET:/supervise/risk/list
 * @response `200` `ResultListSuperviseRiskPageVO` OK
 */
export const getSuperviseRiskList = (
  query: {
    /** 企业风险VO */
    query: SuperviseRiskQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListSuperviseRiskPageVO>(
    {
      url: `gas-supervise/supervise/risk/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业风险评估记录 企业风险评估记录
 *
 * @tags 企业风险评估记录, 企业风险上报控制层
 * @name GetSuperviseRiskEstimateById
 * @summary 企业风险评估记录
 * @request GET:/supervise/risk/estimate/{id}
 * @response `200` `ResultListSuperviseRiskEstimateRecordVO` OK
 */
export const getSuperviseRiskEstimateById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListSuperviseRiskEstimateRecordVO>(
    {
      url: `gas-supervise/supervise/risk/estimate/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口 实时监测列表
 *
 * @tags 监管端报警管理接口, 实时监测列表
 * @name GetSuperviseMonitor
 * @summary 实时监测列表
 * @request GET:/supervise/monitor
 * @response `200` `PageResultListMonitorPageVO` OK
 */
export const getSuperviseMonitor = (
  query: {
    /** 监测查询分页请求 */
    request: MonitorRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListMonitorPageVO>(
    {
      url: `gas-supervise/supervise/monitor`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口 实时监测汇总
 *
 * @tags 监管端报警管理接口, 实时监测汇总
 * @name GetSuperviseMonitorSummary
 * @summary 实时监测汇总
 * @request GET:/supervise/monitor/summary
 * @response `200` `ResultListMonitorSummaryVO` OK
 */
export const getSuperviseMonitorSummary = (
  query: {
    /** 监测查询分页请求 */
    request: MonitorRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListMonitorSummaryVO>(
    {
      url: `gas-supervise/supervise/monitor/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口 场站的监测状态列表
 *
 * @tags 监管端报警管理接口
 * @name GetSuperviseMonitorStationByStationId
 * @summary 场站的监测状态列表
 * @request GET:/supervise/monitor/station/{stationId}
 * @response `200` `PageResultListMonitorPageVO` OK
 */
export const getSuperviseMonitorStationByStationId = (stationId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<PageResultListMonitorPageVO>(
    {
      url: `gas-supervise/supervise/monitor/station/${stationId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口 周边搜索
 *
 * @tags 监管端报警管理接口, 周边搜索
 * @name GetSuperviseMonitorPerimeter
 * @summary 周边搜索
 * @request GET:/supervise/monitor/perimeter
 * @response `200` `ResultPerimeterSearchVO` OK
 */
export const getSuperviseMonitorPerimeter = (
  query: {
    /** 搜索周边地理信息请求 */
    searchRequest: PerimeterSearchRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultPerimeterSearchVO>(
    {
      url: `gas-supervise/supervise/monitor/perimeter`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口 实时监测列表GIS撒点
 *
 * @tags 监管端报警管理接口, 实时监测列表GIS撒点
 * @name GetSuperviseMonitorMap
 * @summary 实时监测列表GIS撒点
 * @request GET:/supervise/monitor/map
 * @response `200` `ResultDeviceMapVO` OK
 */
export const getSuperviseMonitorMap = (
  query: {
    /** 实时监测列表GIS撒点请求 */
    request: DeviceMapRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultDeviceMapVO>(
    {
      url: `gas-supervise/supervise/monitor/map`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口 初始化场站信息
 *
 * @tags 监管端报警管理接口, 初始化场站信息
 * @name GetSuperviseMonitorInitStation
 * @summary 初始化场站信息
 * @request GET:/supervise/monitor/init/station
 * @response `200` `ResultVoid` OK
 */
export const getSuperviseMonitorInitStation = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultVoid>(
    {
      url: `gas-supervise/supervise/monitor/init/station`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口 初始化AIoT设备监测信息
 *
 * @tags 监管端报警管理接口, 初始化AIoT设备监测信息
 * @name GetSuperviseMonitorInitAiot
 * @summary 初始化AIoT设备监测信息
 * @request GET:/supervise/monitor/init/aiot
 * @response `200` `ResultVoid` OK
 */
export const getSuperviseMonitorInitAiot = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultVoid>(
    {
      url: `gas-supervise/supervise/monitor/init/aiot`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 设备报警详情 设备报警详情
 *
 * @tags 设备报警详情, 监管端报警管理接口
 * @name GetSuperviseMonitorDeviceDetailByEqptId
 * @summary 设备报警详情
 * @request GET:/supervise/monitor/device/detail/{eqptId}
 * @response `200` `ResultSuperviseObjDetailVO` OK
 */
export const getSuperviseMonitorDeviceDetailByEqptId = (eqptId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultSuperviseObjDetailVO>(
    {
      url: `gas-supervise/supervise/monitor/device/detail/${eqptId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口 设备监测曲线
 *
 * @tags 监管端报警管理接口, 设备监测曲线
 * @name GetSuperviseMonitorCurve
 * @summary 设备监测曲线
 * @request GET:/supervise/monitor/curve
 * @response `200` `ResultMonitorCurveVO` OK
 */
export const getSuperviseMonitorCurve = (
  query: {
    /** 设备监测曲线 */
    query: MonitorCurveQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultMonitorCurveVO>(
    {
      url: `gas-supervise/supervise/monitor/curve`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 重点督办列表查询 重点督办列表查询
 *
 * @tags 重点督办列表查询, 重点督办接口
 * @name GetSuperviseMatterList
 * @summary 重点督办列表查询
 * @request GET:/supervise/matter/list
 * @response `200` `ResultListSuperviseMatterVO` OK
 */
export const getSuperviseMatterList = (
  query: {
    /** 重点督办事项查询 */
    query: SuperviseMatterQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListSuperviseMatterVO>(
    {
      url: `gas-supervise/supervise/matter/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 获取所有政府类组织机构 获取所有政府类组织机构
 *
 * @tags 获取所有政府类组织机构, 重点督办接口
 * @name GetSuperviseMatterGetGovTree
 * @summary 获取所有政府类组织机构
 * @request GET:/supervise/matter/get/gov/tree
 * @response `200` `ResultListOrganizationVO` OK
 */
export const getSuperviseMatterGetGovTree = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListOrganizationVO>(
    {
      url: `gas-supervise/supervise/matter/get/gov/tree`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 液化气系统接入接口 获取液化气系统token
 *
 * @tags 液化气系统接入接口, 获取液化气系统token
 * @name GetSuperviseLiquefiedGasToken
 * @summary 获取液化气系统token
 * @request GET:/supervise/liquefied/gas/token
 * @response `200` `ResultString` OK
 */
export const getSuperviseLiquefiedGasToken = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultString>(
    {
      url: `gas-supervise/supervise/liquefied/gas/token`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端设备管理接口 监测设备列表
 *
 * @tags 监管端设备管理接口, 监测设备列表
 * @name GetSuperviseDevice
 * @summary 监测设备列表
 * @request GET:/supervise/device
 * @response `200` `PageResultListDevicePageVO` OK
 */
export const getSuperviseDevice = (
  query: {
    /** 监测设备查询请求 */
    query: DeviceRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListDevicePageVO>(
    {
      url: `gas-supervise/supervise/device`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监测设备汇总 监测设备汇总
 *
 * @tags 监测设备汇总, 监管端设备管理接口
 * @name GetSuperviseDeviceSummary
 * @summary 监测设备汇总
 * @request GET:/supervise/device/summary
 * @response `200` `ResultDeviceSummaryVO` OK
 */
export const getSuperviseDeviceSummary = (
  query: {
    /** 监测设备查询请求 */
    query: DeviceRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultDeviceSummaryVO>(
    {
      url: `gas-supervise/supervise/device/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口 报警列表
 *
 * @tags 监管端报警管理接口, 报警列表
 * @name GetSuperviseAlarm
 * @summary 报警列表
 * @request GET:/supervise/alarm
 * @response `200` `PageResultListAlarmPageVO` OK
 */
export const getSuperviseAlarm = (
  query: {
    /** 监管报警信息分页查询请求 */
    request: AlarmPageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListAlarmPageVO>(
    {
      url: `gas-supervise/supervise/alarm`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 报警信息汇总 报警信息汇总
 *
 * @tags 报警信息汇总, 监管端报警管理接口
 * @name GetSuperviseAlarmSummary
 * @summary 报警信息汇总
 * @request GET:/supervise/alarm/summary
 * @response `200` `ResultAlarmSummaryVO` OK
 */
export const getSuperviseAlarmSummary = (
  query: {
    /** 监管报警信息分页查询请求 */
    request: AlarmPageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultAlarmSummaryVO>(
    {
      url: `gas-supervise/supervise/alarm/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口 历史报警信息汇总
 *
 * @tags 监管端报警管理接口, 历史报警信息汇总
 * @name GetSuperviseAlarmSummaryHistory
 * @summary 历史报警信息汇总
 * @request GET:/supervise/alarm/summary/history
 * @response `200` `ResultAlarmSummaryVO` OK
 */
export const getSuperviseAlarmSummaryHistory = (
  query: {
    /** 监管报警信息分页查询请求 */
    request: AlarmPageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultAlarmSummaryVO>(
    {
      url: `gas-supervise/supervise/alarm/summary/history`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口
 *
 * @tags 监管端报警管理接口
 * @name GetSuperviseAlarmInitAiotAlarm
 * @request GET:/supervise/alarm/init/aiot/alarm
 * @response `200` `ResultVoid` OK
 */
export const getSuperviseAlarmInitAiotAlarm = (
  query: {
    codes: Array<string> | string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultVoid>(
    {
      url: `gas-supervise/supervise/alarm/init/aiot/alarm`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口 历史报警列表
 *
 * @tags 监管端报警管理接口, 历史报警列表
 * @name GetSuperviseAlarmHistory
 * @summary 历史报警列表
 * @request GET:/supervise/alarm/history
 * @response `200` `PageResultListAlarmPageVO` OK
 */
export const getSuperviseAlarmHistory = (
  query: {
    /** 监管报警信息分页查询请求 */
    request: AlarmPageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListAlarmPageVO>(
    {
      url: `gas-supervise/supervise/alarm/history`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口 历史报警记录
 *
 * @tags 监管端报警管理接口, 历史报警记录
 * @name GetSuperviseAlarmHistoryRecordByCode
 * @summary 历史报警记录
 * @request GET:/supervise/alarm/history/record/{code}
 * @response `200` `ResultListHistoryAlarmVO` OK
 */
export const getSuperviseAlarmHistoryRecordByCode = (code: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListHistoryAlarmVO>(
    {
      url: `gas-supervise/supervise/alarm/history/record/${code}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管端报警管理接口 设备报警、预警处置流程
 *
 * @tags 监管端报警管理接口, 设备报警、预警处置流程
 * @name GetSuperviseAlarmDisposeByAlarmId
 * @summary 设备报警、预警处置流程
 * @request GET:/supervise/alarm/dispose/{alarmId}
 * @response `200` `ResultListDisposeTraceVO` OK
 */
export const getSuperviseAlarmDisposeByAlarmId = (alarmId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListDisposeTraceVO>(
    {
      url: `gas-supervise/supervise/alarm/dispose/${alarmId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查执行分析控制层 检查企业类型
 *
 * @tags 安全检查执行分析控制层, 检查企业类型
 * @name GetSafeCheckStatisticsType
 * @summary 检查企业类型
 * @request GET:/safe/check/statistics/type
 * @response `200` `ResultMapIntegerListCheckTaskCountVO` OK
 */
export const getSafeCheckStatisticsType = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultMapIntegerListCheckTaskCountVO>(
    {
      url: `gas-supervise/safe/check/statistics/type`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 检查不合格企业占比 检查不合格企业占比
 *
 * @tags 检查不合格企业占比, 安全检查执行分析控制层
 * @name GetSafeCheckStatisticsNoPass
 * @summary 检查不合格企业占比
 * @request GET:/safe/check/statistics/no/pass
 * @response `200` `ResultMapIntegerListCheckTaskCountVO` OK
 */
export const getSafeCheckStatisticsNoPass = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultMapIntegerListCheckTaskCountVO>(
    {
      url: `gas-supervise/safe/check/statistics/no/pass`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查执行分析控制层 查处隐患类型
 *
 * @tags 安全检查执行分析控制层, 查处隐患类型
 * @name GetSafeCheckStatisticsDangerType
 * @summary 查处隐患类型
 * @request GET:/safe/check/statistics/danger/type
 * @response `200` `ResultMapIntegerListCheckTaskCountVO` OK
 */
export const getSafeCheckStatisticsDangerType = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultMapIntegerListCheckTaskCountVO>(
    {
      url: `gas-supervise/safe/check/statistics/danger/type`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查统计-安全检查任务 安全检查统计-安全检查任务
 *
 * @tags 安全检查统计-安全检查任务, 安全检查执行分析控制层
 * @name GetSafeCheckStatisticsCnt
 * @summary 安全检查统计-安全检查任务
 * @request GET:/safe/check/statistics/cnt
 * @response `200` `ResultListCheckTaskCountVO` OK
 */
export const getSafeCheckStatisticsCnt = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListCheckTaskCountVO>(
    {
      url: `gas-supervise/safe/check/statistics/cnt`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查统计-各区域检查次数 安全检查统计-各区域检查次数
 *
 * @tags 安全检查统计-各区域检查次数, 安全检查执行分析控制层
 * @name GetSafeCheckStatisticsArea
 * @summary 安全检查统计-各区域检查次数
 * @request GET:/safe/check/statistics/area
 * @response `200` `ResultListCheckTaskCountVO` OK
 */
export const getSafeCheckStatisticsArea = (
  query: {
    /** 监管统计请求 */
    query: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListCheckTaskCountVO>(
    {
      url: `gas-supervise/safe/check/statistics/area`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查 检查主题管理分页
 *
 * @tags 安全检查
 * @name GetSafeCheckTopicPage
 * @summary 检查主题管理分页
 * @request GET:/safe-check/topic/page
 * @response `200` `PageResultListSafeCheckTopicPageVO` OK
 */
export const getSafeCheckTopicPage = (
  query: {
    query: SafeCheckTopicPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListSafeCheckTopicPageVO>(
    {
      url: `gas-supervise/safe-check/topic/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查 安全检查记录详情
 *
 * @tags 安全检查
 * @name GetSafeCheckTaskByUid
 * @summary 安全检查记录详情
 * @request GET:/safe-check/task/{uid}
 * @response `200` `ResultSafeCheckTaskDetailVO` OK
 */
export const getSafeCheckTaskByUid = (uid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultSafeCheckTaskDetailVO>(
    {
      url: `gas-supervise/safe-check/task/${uid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查 检查记录分页
 *
 * @tags 安全检查
 * @name GetSafeCheckTaskPage
 * @summary 检查记录分页
 * @request GET:/safe-check/task/page
 * @response `200` `PageResultListSafeCheckTaskPageVO` OK
 */
export const getSafeCheckTaskPage = (
  query: {
    query: SafeCheckTaskPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListSafeCheckTaskPageVO>(
    {
      url: `gas-supervise/safe-check/task/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 新增安全检查时,筛选历史检查对象,方便快速创建检查任务
 *
 * @tags 安全检查
 * @name GetSafeCheckTargetPage
 * @summary 选择检查对象分页
 * @request GET:/safe-check/target/page
 * @response `200` `PageResultListSafeCheckTargetDTO` OK
 */
export const getSafeCheckTargetPage = (
  query: {
    query: PageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListSafeCheckTargetDTO>(
    {
      url: `gas-supervise/safe-check/target/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 统计隐患总数 统计隐患总数,用于Word文档生成
 *
 * @tags 统计隐患总数
 * @name GetRiskReportWord
 * @summary 统计隐患总数,用于Word文档生成
 * @request GET:/risk/report/word
 * @response `200` `ResultRiskDangerStatisticsOfWordVO` OK
 */
export const getRiskReportWord = (
  query: {
    reportMonth: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultRiskDangerStatisticsOfWordVO>(
    {
      url: `gas-supervise/risk/report/word`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 周边隐患列表 根据隐患编号查询隐患列表
 *
 * @tags 周边隐患列表
 * @name GetRiskListById
 * @summary 根据隐患编号查询隐患列表
 * @request GET:/risk/listById
 * @response `200` `ResultListRiskExportVO` OK
 */
export const getRiskListById = (
  query: {
    dangerIds: Array<string> | string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListRiskExportVO>(
    {
      url: `gas-supervise/risk/listById`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 防护目标详情接口
 *
 * @tags 防护目标详情
 * @name GetProtagByPortectid
 * @summary 防护目标详情
 * @request GET:/protag/{portectid}
 * @response `200` `ResultProtagDetailVO` OK
 */
export const getProtagByPortectid = (portectid: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultProtagDetailVO>(
    {
      url: `gas-supervise/protag/${portectid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业人员资质证照信息管理接口 企业人员资质证照信息管理查询
 *
 * @tags 企业人员资质证照信息管理接口, 企业人员资质证照信息管理查询
 * @name GetPerQualifications
 * @summary 企业人员资质证照信息管理查询
 * @request GET:/per/qualifications
 * @response `200` `PageResultListPerCertificatePageVO` OK
 */
export const getPerQualifications = (
  query: {
    /** 企业人员资质证照分页查询 */
    request: PerCertificatePageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListPerCertificatePageVO>(
    {
      url: `gas-supervise/per/qualifications`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业人员资质证照信息管理接口 企业人员资质证照信息详情
 *
 * @tags 企业人员资质证照信息管理接口, 企业人员资质证照信息详情
 * @name GetPerQualificationsDetailByCode
 * @summary 企业人员资质证照信息详情
 * @request GET:/per/qualifications/detail/{code}
 * @response `200` `ResultPerCertificateDetailVO` OK
 */
export const getPerQualificationsDetailByCode = (code: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultPerCertificateDetailVO>(
    {
      url: `gas-supervise/per/qualifications/detail/${code}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业人员资质证照信息管理接口 企业人员资质证照信息汇总
 *
 * @tags 企业人员资质证照信息管理接口, 企业人员资质证照信息汇总
 * @name GetPerQualificationsCount
 * @summary 企业人员资质证照信息汇总
 * @request GET:/per/qualifications/count
 * @response `200` `ResultPerCertificateCountVO` OK
 */
export const getPerQualificationsCount = (
  query: {
    /** 企业人员资质证照分页查询 */
    request: PerCertificatePageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultPerCertificateCountVO>(
    {
      url: `gas-supervise/per/qualifications/count`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name GetOrgSimpleWithUser
 * @summary 获取所有组织机构和用户信息
 * @request GET:/org/simple-with-user
 * @response `200` `ResultListTreeVo` OK
 */
export const getOrgSimpleWithUser = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListTreeVo>(
    {
      url: `gas-supervise/org/simple-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构信息
 *
 * @tags 组织机构管理
 * @name GetOrgAll
 * @summary 获取所有组织机构信息
 * @request GET:/org/all
 * @response `200` `ResultListOrganizationVO` OK
 */
export const getOrgAll = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name GetOrgAllWithUser
 * @summary 获取所有组织机构和用户信息
 * @request GET:/org/all-with-user
 * @response `200` `ResultListOrganizationVO` OK
 */
export const getOrgAllWithUser = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 302重定向到minio中的文件预览地址
 *
 * @tags 附件管理
 * @name GetOpenPreviewByFileId
 * @summary 文件预览
 * @request GET:/open/preview/{fileId}
 * @response `200` `void` OK
 */
export const getOpenPreviewByFileId = (fileId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/open/preview/${fileId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 返回minio的文件地址
 *
 * @tags 附件管理
 * @name GetOpenImageviewByFileId
 * @summary 图片预览地址
 * @request GET:/open/imageview/{fileId}
 * @response `200` `void` OK
 */
export const getOpenImageviewByFileId = (fileId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/open/imageview/${fileId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * hidanger-new-controller
 *
 * @tags hidanger-new-controller
 * @name GetOpenHidangerUrge
 * @request GET:/open/hidanger/urge
 * @response `200` `void` OK
 */
export const getOpenHidangerUrge = (
  query: {
    /** @format int64 */
    tid: number;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/open/hidanger/urge`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 返回minio的文件预览地址
 *
 * @tags 附件管理
 * @name GetOpenFileByFileId
 * @summary 获取文件预览地址
 * @request GET:/open/file/{fileId}
 * @response `200` `ResultString` OK
 */
export const getOpenFileByFileId = (fileId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultString>(
    {
      url: `gas-supervise/open/file/${fileId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 附件管理 文件下载
 *
 * @tags 附件管理
 * @name GetOpenDownloadWithName
 * @summary 文件下载
 * @request GET:/open/downloadWithName
 * @response `200` `void` OK
 */
export const getOpenDownloadWithName = (
  query: {
    /** 文件编号 */
    文件编号: string;
    /** 文件名称 */
    文件名称: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/open/downloadWithName`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 附件管理 文件下载
 *
 * @tags 附件管理
 * @name GetOpenDownloadByFileId
 * @summary 文件下载
 * @request GET:/open/download/{fileId}
 * @response `200` `void` OK
 */
export const getOpenDownloadByFileId = (fileId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/open/download/${fileId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 老旧管网改造列表 老旧管网改造列表
 *
 * @tags 老旧管网改造列表, 老旧管网改造接口
 * @name GetOldPipe
 * @summary 老旧管网改造列表
 * @request GET:/old/pipe
 * @response `200` `PageResultListOldPipeBuildVO` OK
 */
export const getOldPipe = (
  query: {
    /** 老旧管网改造列表查询请求 */
    query: PageOldPipeBuildQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListOldPipeBuildVO>(
    {
      url: `gas-supervise/old/pipe`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 老旧管网改造接口 设置挂牌督办
 *
 * @tags 老旧管网改造接口, 设置挂牌督办
 * @name GetOldPipeSupervisionById
 * @summary 设置挂牌督办
 * @request GET:/old/pipe/supervision/{id}
 * @response `200` `ResultVoid` OK
 */
export const getOldPipeSupervisionById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultVoid>(
    {
      url: `gas-supervise/old/pipe/supervision/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 老旧管网改造接口 老旧管网改造汇总
 *
 * @tags 老旧管网改造接口, 老旧管网改造汇总
 * @name GetOldPipeSummary
 * @summary 老旧管网改造汇总
 * @request GET:/old/pipe/summary
 * @response `200` `ResultOldPipeBuildSummaryVO` OK
 */
export const getOldPipeSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultOldPipeBuildSummaryVO>(
    {
      url: `gas-supervise/old/pipe/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 老旧管网改造接口 老旧管网改造统计
 *
 * @tags 老旧管网改造接口, 老旧管网改造统计
 * @name GetOldPipeStat
 * @summary 老旧管网改造统计
 * @request GET:/old/pipe/stat
 * @response `200` `ResultOldPipeBuildStatVO` OK
 */
export const getOldPipeStat = (
  query: {
    /** @format int32 */
    year: number;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultOldPipeBuildStatVO>(
    {
      url: `gas-supervise/old/pipe/stat`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 老旧管网改造接口 老旧管网改造详情
 *
 * @tags 老旧管网改造接口, 老旧管网改造详情
 * @name GetOldPipeDetailById
 * @summary 老旧管网改造详情
 * @request GET:/old/pipe/detail/{id}
 * @response `200` `ResultOldPipeBuildVO` OK
 */
export const getOldPipeDetailById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultOldPipeBuildVO>(
    {
      url: `gas-supervise/old/pipe/detail/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * message-endpoint
 *
 * @tags message-endpoint
 * @name GetNoticeWsPage
 * @request GET:/notice/ws-page
 * @response `200` `PageResultListMessageContent` OK
 */
export const getNoticeWsPage = (
  query: {
    /** @format int32 */
    page: number;
    /** @format int32 */
    size: number;
    type: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListMessageContent>(
    {
      url: `gas-supervise/notice/ws-page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * message-endpoint
 *
 * @tags message-endpoint
 * @name GetNoticeUnreadList
 * @request GET:/notice/unread-list
 * @response `200` `ResultMapStringListMessageContent` OK
 */
export const getNoticeUnreadList = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultMapStringListMessageContent>(
    {
      url: `gas-supervise/notice/unread-list`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * message-endpoint
 *
 * @tags message-endpoint
 * @name GetNoticeSmsList
 * @request GET:/notice/sms-list
 * @response `200` `ResultMapStringListMessageContent` OK
 */
export const getNoticeSmsList = (
  query: {
    bizId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultMapStringListMessageContent>(
    {
      url: `gas-supervise/notice/sms-list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * message-endpoint
 *
 * @tags message-endpoint
 * @name GetNoticeReadList
 * @request GET:/notice/read-list
 * @response `200` `ResultMapStringListMessageContent` OK
 */
export const getNoticeReadList = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultMapStringListMessageContent>(
    {
      url: `gas-supervise/notice/read-list`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 应急演练列表 应急演练列表
 *
 * @tags 应急演练列表, 应急演练管理接口
 * @name GetMeresDrill
 * @summary 应急演练列表
 * @request GET:/meres/drill
 * @response `200` `PageResultListEmresDrillVO` OK
 */
export const getMeresDrill = (
  query: {
    /** 应急演练分页查询请求 */
    query: EmresDrillRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListEmresDrillVO>(
    {
      url: `gas-supervise/meres/drill`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 应急演练管理接口 应急演练汇总
 *
 * @tags 应急演练管理接口, 应急演练汇总
 * @name GetMeresDrillSummary
 * @summary 应急演练汇总
 * @request GET:/meres/drill/summary
 * @response `200` `ResultEmresDrillSummaryVO` OK
 */
export const getMeresDrillSummary = (
  query: {
    /** 应急演练分页查询请求 */
    query: EmresDrillRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultEmresDrillSummaryVO>(
    {
      url: `gas-supervise/meres/drill/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 应急演练详情 应急演练详情
 *
 * @tags 应急演练详情, 应急演练管理接口
 * @name GetMeresDrillDetailByDrillId
 * @summary 应急演练详情
 * @request GET:/meres/drill/detail/{drillId}
 * @response `200` `ResultEmresDrillVO` OK
 */
export const getMeresDrillDetailByDrillId = (drillId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultEmresDrillVO>(
    {
      url: `gas-supervise/meres/drill/detail/${drillId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 液化气异常与流程监管 气瓶流转信息统计
 *
 * @tags 液化气异常与流程监管
 * @name GetLngFlowStat
 * @summary 气瓶流转信息统计
 * @request GET:/lng/flow/stat
 * @response `200` `ResultLngFlowStatVO` OK
 */
export const getLngFlowStat = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultLngFlowStatVO>(
    {
      url: `gas-supervise/lng/flow/stat`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 液化气异常与流程监管 气瓶流转异常统计
 *
 * @tags 液化气异常与流程监管
 * @name GetLngFlowAlarmStat
 * @summary 气瓶流转异常统计
 * @request GET:/lng/flow/alarm/stat
 * @response `200` `ResultLngFlowAlarmStatVO` OK
 */
export const getLngFlowAlarmStat = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultLngFlowAlarmStatVO>(
    {
      url: `gas-supervise/lng/flow/alarm/stat`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 液化气异常与流程监管 气瓶异常统计
 *
 * @tags 液化气异常与流程监管
 * @name GetLngAlarmStat
 * @summary 气瓶异常统计
 * @request GET:/lng/alarm/stat
 * @response `200` `ResultLngAlarmStatVO` OK
 */
export const getLngAlarmStat = (
  query: {
    /** @format int32 */
    months: number;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultLngAlarmStatVO>(
    {
      url: `gas-supervise/lng/alarm/stat`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 液化气异常与流程监管 气瓶异常类型排名
 *
 * @tags 液化气异常与流程监管
 * @name GetLngAlarmStatType
 * @summary 气瓶异常类型排名
 * @request GET:/lng/alarm/stat/type
 * @response `200` `ResultListOverallItemVO` OK
 */
export const getLngAlarmStatType = (
  query: {
    /** @format int32 */
    period: number;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListOverallItemVO>(
    {
      url: `gas-supervise/lng/alarm/stat/type`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 液化气异常与流程监管 气瓶异常趋势
 *
 * @tags 液化气异常与流程监管
 * @name GetLngAlarmStatTrend
 * @summary 气瓶异常趋势
 * @request GET:/lng/alarm/stat/trend
 * @response `200` `ResultListLngAlarmTrendVO` OK
 */
export const getLngAlarmStatTrend = (
  query: {
    /** @format int32 */
    period: number;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListLngAlarmTrendVO>(
    {
      url: `gas-supervise/lng/alarm/stat/trend`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 液化气异常与流程监管 气瓶企业异常排名
 *
 * @tags 液化气异常与流程监管
 * @name GetLngAlarmStatEnt
 * @summary 气瓶企业异常排名
 * @request GET:/lng/alarm/stat/ent
 * @response `200` `ResultListLngEntAlarmStatVO` OK
 */
export const getLngAlarmStatEnt = (
  query: {
    /** @format int32 */
    period: number;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListLngEntAlarmStatVO>(
    {
      url: `gas-supervise/lng/alarm/stat/ent`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 液化气异常与流程监管 气瓶异常分析列表
 *
 * @tags 液化气异常与流程监管
 * @name GetLngAlarmList
 * @summary 气瓶异常分析列表
 * @request GET:/lng/alarm/list
 * @response `200` `ResultLngAlarmPageSumVO` OK
 */
export const getLngAlarmList = (
  query: {
    /** @format int32 */
    type: number;
    /** @format int32 */
    page: number;
    /** @format int32 */
    size: number;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultLngAlarmPageSumVO>(
    {
      url: `gas-supervise/lng/alarm/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 隐患催办 催办历史记录
 *
 * @tags 隐患催办
 * @name GetHidangerUrgeHisByDangerId
 * @summary 催办历史记录
 * @request GET:/hidanger/{dangerId}/urge/his
 * @response `200` `ResultListHidangerUrgeHisVO` OK
 */
export const getHidangerUrgeHisByDangerId = (dangerId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListHidangerUrgeHisVO>(
    {
      url: `gas-supervise/hidanger/${dangerId}/urge/his`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 获取隐患类型下拉选
 *
 * @tags hidanger-controller
 * @name GetHidangerTypes
 * @summary 隐患类型
 * @request GET:/hidanger/types
 * @response `200` `ResultListDictionaryItem` OK
 */
export const getHidangerTypes = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListDictionaryItem>(
    {
      url: `gas-supervise/hidanger/types`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 下载隐患导入模板
 *
 * @tags hidanger-controller
 * @name GetHidangerTemplate
 * @summary 隐患导入
 * @request GET:/hidanger/template
 * @response `200` `void` OK
 */
export const getHidangerTemplate = (params: PerRequestOptions = {}) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/hidanger/template`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 风险隐患-隐患管理-隐患统计 隐患整改单汇总
 *
 * @tags 风险隐患-隐患管理-隐患统计, 隐患整改单汇总
 * @name GetHidangerSummaryUpdate
 * @summary 隐患整改单汇总
 * @request GET:/hidanger/summary/update
 * @response `200` `ResultListRiskStatisticsVO` OK
 */
export const getHidangerSummaryUpdate = (
  query: {
    /** 隐患统计视图请求 */
    query: RiskStatisticsQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListRiskStatisticsVO>(
    {
      url: `gas-supervise/hidanger/summary/update`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 风险隐患-隐患管理-隐患统计 隐患来源汇总
 *
 * @tags 风险隐患-隐患管理-隐患统计, 隐患来源汇总
 * @name GetHidangerSummarySource
 * @summary 隐患来源汇总
 * @request GET:/hidanger/summary/source
 * @response `200` `ResultListRiskStatisticsVO` OK
 */
export const getHidangerSummarySource = (
  query: {
    /** 隐患统计视图请求 */
    query: RiskStatisticsQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListRiskStatisticsVO>(
    {
      url: `gas-supervise/hidanger/summary/source`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 风险隐患-隐患管理-隐患统计 隐患排查汇总
 *
 * @tags 风险隐患-隐患管理-隐患统计, 隐患排查汇总
 * @name GetHidangerSummaryScreening
 * @summary 隐患排查汇总
 * @request GET:/hidanger/summary/screening
 * @response `200` `ResultListRiskStatisticsVO` OK
 */
export const getHidangerSummaryScreening = (
  query: {
    /** 隐患统计视图请求 */
    query: RiskStatisticsQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListRiskStatisticsVO>(
    {
      url: `gas-supervise/hidanger/summary/screening`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 风险隐患-隐患管理-隐患统计 隐患级别汇总
 *
 * @tags 风险隐患-隐患管理-隐患统计, 隐患级别汇总
 * @name GetHidangerSummaryLevel
 * @summary 隐患级别汇总
 * @request GET:/hidanger/summary/level
 * @response `200` `ResultListRiskStatisticsVO` OK
 */
export const getHidangerSummaryLevel = (
  query: {
    /** 隐患统计视图请求 */
    query: RiskStatisticsQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListRiskStatisticsVO>(
    {
      url: `gas-supervise/hidanger/summary/level`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 隐患级别趋势汇总 隐患级别趋势汇总
 *
 * @tags 隐患级别趋势汇总, 风险隐患-隐患管理-隐患统计
 * @name GetHidangerSummaryLevelTrend
 * @summary 隐患级别趋势汇总
 * @request GET:/hidanger/summary/level/trend
 * @response `200` `ResultListRiskStatisticsVO` OK
 */
export const getHidangerSummaryLevelTrend = (
  query: {
    /** 隐患统计视图请求 */
    query: RiskStatisticsQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListRiskStatisticsVO>(
    {
      url: `gas-supervise/hidanger/summary/level/trend`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业隐患管理 隐患统计
 *
 * @tags 企业隐患管理
 * @name GetHidangerOrgSummary
 * @summary 隐患统计
 * @request GET:/hidanger/org/summary
 * @response `200` `ResultOrgHidangerTypeSummaryDTO` OK
 */
export const getHidangerOrgSummary = (
  query?: {
    endUser?: boolean;
    /** 风险要素等级 */
    level?: GetHidangerOrgSummaryParamsLevel;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultOrgHidangerTypeSummaryDTO>(
    {
      url: `gas-supervise/hidanger/org/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业隐患管理 隐患分页/导出
 *
 * @tags 企业隐患管理
 * @name GetHidangerOrgPage
 * @summary 隐患分页/导出
 * @request GET:/hidanger/org/page
 * @response `200` `PageResultListHidangerOrgPageVO` OK
 */
export const getHidangerOrgPage = (
  query: {
    query: HidangerOrgPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListHidangerOrgPageVO>(
    {
      url: `gas-supervise/hidanger/org/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 隐患治理 隐患分页
 *
 * @tags 隐患治理
 * @name GetHidangerNewPage
 * @summary 隐患分页
 * @request GET:/hidanger/new/page
 * @response `200` `PageResultListBsHidangerPageVO` OK
 */
export const getHidangerNewPage = (
  query: {
    query: BsHidangerPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListBsHidangerPageVO>(
    {
      url: `gas-supervise/hidanger/new/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管单位隐患管理 隐患统计
 *
 * @tags 监管单位隐患管理
 * @name GetHidangerGovSummary
 * @summary 隐患统计
 * @request GET:/hidanger/gov/summary
 * @response `200` `ResultOrgHidangerTypeSummaryDTO` OK
 */
export const getHidangerGovSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultOrgHidangerTypeSummaryDTO>(
    {
      url: `gas-supervise/hidanger/gov/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管单位隐患管理 隐患分页/导出
 *
 * @tags 监管单位隐患管理
 * @name GetHidangerGovPage
 * @summary 隐患分页/导出
 * @request GET:/hidanger/gov/page
 * @response `200` `PageResultListHidangerOrgPageVO` OK
 */
export const getHidangerGovPage = (
  query: {
    query: HidangerOrgPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListHidangerOrgPageVO>(
    {
      url: `gas-supervise/hidanger/gov/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 整改单导出 批量导出整改单
 *
 * @tags 整改单导出
 * @name GetHidangerGovHandleOrderExport
 * @summary 批量导出整改单
 * @request GET:/hidanger/gov/handle-order/export
 * @response `200` `FormData` OK
 */
export const getHidangerGovHandleOrderExport = (
  query: {
    ids: Array<number> | number;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<FormData>(
    {
      url: `gas-supervise/hidanger/gov/handle-order/export`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查计划 安全检查计划关联的未发送过整改单的隐患列表
 *
 * @tags 安全检查计划
 * @name GetHidangerGovCheckPlanRelDangersByPlanCode
 * @summary 安全检查计划关联的未发送过整改单的隐患列表
 * @request GET:/hidanger/gov/check-plan/{planCode}/rel-dangers
 * @response `200` `ResultListCheckPlanRelDangerVO` OK
 */
export const getHidangerGovCheckPlanRelDangersByPlanCode = (planCode: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListCheckPlanRelDangerVO>(
    {
      url: `gas-supervise/hidanger/gov/check-plan/${planCode}/rel-dangers`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查计划 安全检查计划-统计
 *
 * @tags 安全检查计划
 * @name GetHidangerGovCheckPlanSummary
 * @summary 安全检查计划-统计
 * @request GET:/hidanger/gov/check-plan/summary
 * @response `200` `ResultHiDangerCheckPlanSummaryVO` OK
 */
export const getHidangerGovCheckPlanSummary = (
  query?: {
    type?: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultHiDangerCheckPlanSummaryVO>(
    {
      url: `gas-supervise/hidanger/gov/check-plan/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 政府创建隐患的时候选择对应企业,关联出企业的检查计划
 *
 * @tags 安全检查计划
 * @name GetHidangerGovCheckPlanSelections
 * @summary 安全检查计划-下拉选项
 * @request GET:/hidanger/gov/check-plan/selections
 * @response `200` `ResultListHiDangerCheckPlanSelectionsDTO` OK
 */
export const getHidangerGovCheckPlanSelections = (
  query: {
    targetOrgId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListHiDangerCheckPlanSelectionsDTO>(
    {
      url: `gas-supervise/hidanger/gov/check-plan/selections`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查计划 安全检查计划-分页
 *
 * @tags 安全检查计划
 * @name GetHidangerGovCheckPlanPage
 * @summary 安全检查计划-分页
 * @request GET:/hidanger/gov/check-plan/page
 * @response `200` `PageResultListHiDangerCheckPageVO` OK
 */
export const getHidangerGovCheckPlanPage = (
  query: {
    /** 安全检查分页查询 */
    query: HiDangerCheckPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListHiDangerCheckPageVO>(
    {
      url: `gas-supervise/hidanger/gov/check-plan/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查计划 检查计划关联的企业信息
 *
 * @tags 安全检查计划
 * @name GetHidangerGovCheckPlanOrgInfo
 * @summary 检查计划关联的企业信息
 * @request GET:/hidanger/gov/check-plan/org/info
 * @response `200` `ResultCheckPlanInfoVO` OK
 */
export const getHidangerGovCheckPlanOrgInfo = (
  query: {
    planCode: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultCheckPlanInfoVO>(
    {
      url: `gas-supervise/hidanger/gov/check-plan/org/info`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查计划 终端用户-统计
 *
 * @tags 安全检查计划
 * @name GetHidangerGovCheckPlanEndUserSummary
 * @summary 终端用户-统计
 * @request GET:/hidanger/gov/check-plan/end-user/summary
 * @response `200` `ResultCheckPlanEndUserSummaryVO` OK
 */
export const getHidangerGovCheckPlanEndUserSummary = (
  query: {
    /** 安全检查形式 */
    mode: GetHidangerGovCheckPlanEndUserSummaryParamsMode;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultCheckPlanEndUserSummaryVO>(
    {
      url: `gas-supervise/hidanger/gov/check-plan/end-user/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 全部隐患撒点
 *
 * @tags hidanger-controller
 * @name GetHidangerGisMap
 * @summary GIS图层
 * @request GET:/hidanger/gis/map
 * @response `200` `ResultListHidangerGisVO` OK
 */
export const getHidangerGisMap = (
  query: {
    l1: string;
    l2: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListHidangerGisVO>(
    {
      url: `gas-supervise/hidanger/gis/map`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 隐患管理 隐患处置流程
 *
 * @tags 隐患管理
 * @name GetHidangerFlowByUid
 * @summary 隐患处置流程
 * @request GET:/hidanger/flow/{uid}
 * @response `200` `ResultHidnagerFlowVO` OK
 */
export const getHidangerFlowByUid = (uid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultHidnagerFlowVO>(
    {
      url: `gas-supervise/hidanger/flow/${uid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 风险要素辨识 风险要素类型汇总-统计
 *
 * @tags 风险要素辨识
 * @name GetHidangerFactorsSummary
 * @summary 风险要素类型汇总-统计
 * @request GET:/hidanger/factors/summary
 * @response `200` `ResultHidangerFactorsSummaryVO` OK
 */
export const getHidangerFactorsSummary = (
  query: {
    /** 燃气管网风险要素类型 */
    type: GetHidangerFactorsSummaryParamsType;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultHidangerFactorsSummaryVO>(
    {
      url: `gas-supervise/hidanger/factors/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 风险要素辨识 风险要素类型汇总-分页查询
 *
 * @tags 风险要素辨识
 * @name GetHidangerFactorsPage
 * @summary 风险要素类型汇总-分页查询
 * @request GET:/hidanger/factors/page
 * @response `200` `PageResultListHidangerFactorsPageVO` OK
 */
export const getHidangerFactorsPage = (
  query: {
    /** 燃气管网风险要素类型 */
    type: GetHidangerFactorsPageParamsType;
    query: HidangerFactorsSummaryPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListHidangerFactorsPageVO>(
    {
      url: `gas-supervise/hidanger/factors/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 风险要素辨识 风险要素汇总-统计
 *
 * @tags 风险要素辨识
 * @name GetHidangerFactorsOverviewSummary
 * @summary 风险要素汇总-统计
 * @request GET:/hidanger/factors/overview/summary
 * @response `200` `ResultHidangerFactorsSummaryVO` OK
 */
export const getHidangerFactorsOverviewSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultHidangerFactorsSummaryVO>(
    {
      url: `gas-supervise/hidanger/factors/overview/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 风险要素辨识 风险要素汇总-分页查询
 *
 * @tags 风险要素辨识
 * @name GetHidangerFactorsOverviewPage
 * @summary 风险要素汇总-分页查询
 * @request GET:/hidanger/factors/overview/page
 * @response `200` `PageResultListHidangerFactorsSummaryPageVO` OK
 */
export const getHidangerFactorsOverviewPage = (
  query: {
    query: HidangerFactorsSummaryPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListHidangerFactorsSummaryPageVO>(
    {
      url: `gas-supervise/hidanger/factors/overview/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 请求模型服务,获取风险要素辨识数据
 *
 * @tags 风险要素辨识
 * @name GetHidangerFactorsInit
 * @summary 初始化风险要素辨识
 * @request GET:/hidanger/factors/init
 * @response `200` `ResultString` OK
 */
export const getHidangerFactorsInit = (
  query?: {
    url?: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultString>(
    {
      url: `gas-supervise/hidanger/factors/init`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 风险要素辨识 风险要素详情
 *
 * @tags 风险要素辨识
 * @name GetHidangerFactorsDetailByUid
 * @summary 风险要素详情
 * @request GET:/hidanger/factors/detail/{uid}
 * @response `200` `ResultRiskFactorDetailVO` OK
 */
export const getHidangerFactorsDetailByUid = (uid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultRiskFactorDetailVO>(
    {
      url: `gas-supervise/hidanger/factors/detail/${uid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 隐患字典管理 隐患字典列表
 *
 * @tags 隐患字典管理
 * @name GetHidangerDictionaryList
 * @summary 隐患字典列表
 * @request GET:/hidanger/dictionary/list
 * @response `200` `ResultListHidangerDictionaryVO` OK
 */
export const getHidangerDictionaryList = (
  query: {
    keyword: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListHidangerDictionaryVO>(
    {
      url: `gas-supervise/hidanger/dictionary/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 隐患管理 风险要素详情/隐患详情
 *
 * @tags 隐患管理
 * @name GetHidangerDetailByUid
 * @summary 风险要素详情/隐患详情
 * @request GET:/hidanger/detail/{uid}
 * @response `200` `ResultObject` OK
 */
export const getHidangerDetailByUid = (uid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultObject>(
    {
      url: `gas-supervise/hidanger/detail/${uid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 知识库分页查询
 *
 * @tags 知识库管理接口, 知识库列表
 * @name GetGuideKnowledgePage
 * @summary 知识库列表
 * @request GET:/guide/knowledge/page
 * @response `200` `PageResultListAnalysBaseMnKnowledgePageVO` OK
 */
export const getGuideKnowledgePage = (
  query: {
    query: KnowledgePageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListAnalysBaseMnKnowledgePageVO>(
    {
      url: `gas-supervise/guide/knowledge/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 知识库详情接口
 *
 * @tags 知识库管理接口, 知识库详情
 * @name GetGuideKnowledgeDetailById
 * @summary 知识库详情
 * @request GET:/guide/knowledge/detail/{id}
 * @response `200` `ResultAnalysBaseMnKnowledgeDetailVO` OK
 */
export const getGuideKnowledgeDetailById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultAnalysBaseMnKnowledgeDetailVO>(
    {
      url: `gas-supervise/guide/knowledge/detail/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 案例库分页查询
 *
 * @tags 案例库列表, 案例库管理接口
 * @name GetGuideCasePage
 * @summary 案例库列表
 * @request GET:/guide/case/page
 * @response `200` `PageResultListAnalysBaseMnCasePageVO` OK
 */
export const getGuideCasePage = (
  query: {
    query: CasePageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListAnalysBaseMnCasePageVO>(
    {
      url: `gas-supervise/guide/case/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 案例库详情接口
 *
 * @tags 案例库详情, 案例库管理接口
 * @name GetGuideCaseDetailById
 * @summary 案例库详情
 * @request GET:/guide/case/detail/{id}
 * @response `200` `ResultAnalysBaseMnCaseDetailVO` OK
 */
export const getGuideCaseDetailById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultAnalysBaseMnCaseDetailVO>(
    {
      url: `gas-supervise/guide/case/detail/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 案例库基础信息接口
 *
 * @tags 案例库基础信息, 案例库管理接口
 * @name GetGuideCaseBaseDetailById
 * @summary 案例库基础信息
 * @request GET:/guide/case/base/detail/{id}
 * @response `200` `ResultAnalysBaseMnCaseBaseVO` OK
 */
export const getGuideCaseBaseDetailById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultAnalysBaseMnCaseBaseVO>(
    {
      url: `gas-supervise/guide/case/base/detail/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 安全教育详情
 *
 * @tags 安全教育
 * @name GetGuideActivitiesByUid
 * @summary 安全教育分页
 * @request GET:/guide/activities/{uid}
 * @response `200` `ResultSuperviseActivitiesPageVO` OK
 */
export const getGuideActivitiesByUid = (uid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultSuperviseActivitiesPageVO>(
    {
      url: `gas-supervise/guide/activities/${uid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 安全教育分页
 *
 * @tags 安全教育
 * @name GetGuideActivitiesPage
 * @summary 安全教育分页
 * @request GET:/guide/activities/page
 * @response `200` `PageResultListSuperviseActivitiesPageVO` OK
 */
export const getGuideActivitiesPage = (
  query: {
    query: ActivitiesPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListSuperviseActivitiesPageVO>(
    {
      url: `gas-supervise/guide/activities/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 政府职能部门管理 部门用户分页查询
 *
 * @tags 政府职能部门管理
 * @name GetGovDeptUserPage
 * @summary 部门用户分页查询
 * @request GET:/gov/dept/user/page
 * @response `200` `PageResultListGovDeptUserPageVO` OK
 */
export const getGovDeptUserPage = (
  query: {
    query: SuperviseDeptUserPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListGovDeptUserPageVO>(
    {
      url: `gas-supervise/gov/dept/user/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 政府职能部门管理 部门分页查询
 *
 * @tags 政府职能部门管理
 * @name GetGovDeptPage
 * @summary 部门分页查询
 * @request GET:/gov/dept/page
 * @response `200` `PageResultListGovDeptPageVO` OK
 */
export const getGovDeptPage = (
  query: {
    query: PageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListGovDeptPageVO>(
    {
      url: `gas-supervise/gov/dept/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用气用户信息管理接口 用气用户查询列表
 *
 * @tags 用气用户信息管理接口, 用气用户查询列表
 * @name GetGasUsers
 * @summary 用气用户查询列表
 * @request GET:/gas/users
 * @response `200` `PageResultListDetailGasUserVO` OK
 */
export const getGasUsers = (
  query: {
    /** 用气用户分页查询 */
    request: PageGasUserQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListDetailGasUserVO>(
    {
      url: `gas-supervise/gas/users`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用气用户详情 用气用户详情
 *
 * @tags 用气用户详情, 用气用户信息管理接口
 * @name GetGasUsersDetailByCode
 * @summary 用气用户详情
 * @request GET:/gas/users/detail/{code}
 * @response `200` `ResultDetailGasUserVO` OK
 */
export const getGasUsersDetailByCode = (code: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultDetailGasUserVO>(
    {
      url: `gas-supervise/gas/users/detail/${code}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用气用户信息汇总 用气用户信息汇总
 *
 * @tags 用气用户信息汇总, 用气用户信息管理接口
 * @name GetGasUsersCount
 * @summary 用气用户信息汇总
 * @request GET:/gas/users/count
 * @response `200` `ResultGasUserCountVO` OK
 */
export const getGasUsersCount = (
  query: {
    /** 用气用户分页查询 */
    query: PageGasUserQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultGasUserCountVO>(
    {
      url: `gas-supervise/gas/users/count`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用气用户信息管理接口 基础数据大屏-用气用户
 *
 * @tags 用气用户信息管理接口, 基础数据大屏-用气用户
 * @name GetGasUsersBasicScreenCount
 * @summary 基础数据大屏-用气用户
 * @request GET:/gas/users/basic/screen/count
 * @response `200` `ResultBasicScreenUserCountVO` OK
 */
export const getGasUsersBasicScreenCount = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBasicScreenUserCountVO>(
    {
      url: `gas-supervise/gas/users/basic/screen/count`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 日保供信息管理 供气量信息统计
 *
 * @tags 日保供信息管理
 * @name GetGasSupplySum
 * @summary 供气量信息统计
 * @request GET:/gas/supply/sum
 * @response `200` `ResultGasSupplySumVO` OK
 */
export const getGasSupplySum = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultGasSupplySumVO>(
    {
      url: `gas-supervise/gas/supply/sum`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 日保供信息管理 分页/导出供气量信息列表
 *
 * @tags 日保供信息管理
 * @name GetGasSupplyList
 * @summary 分页/导出供气量信息列表
 * @request GET:/gas/supply/list
 * @response `200` `PageResultListGasSupplyPageVO` OK
 */
export const getGasSupplyList = (
  query: {
    query: GasSupplyQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListGasSupplyPageVO>(
    {
      url: `gas-supervise/gas/supply/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业场站信息管理 场站信息统计
 *
 * @tags 企业场站信息管理
 * @name GetGasStationSum
 * @summary 场站信息统计
 * @request GET:/gas/station/sum
 * @response `200` `ResultGasStationSumVO` OK
 */
export const getGasStationSum = (
  query: {
    query: GasStationQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultGasStationSumVO>(
    {
      url: `gas-supervise/gas/station/sum`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业场站信息管理 分页/导出场站信息列表
 *
 * @tags 企业场站信息管理
 * @name GetGasStationList
 * @summary 分页/导出场站信息列表
 * @request GET:/gas/station/list
 * @response `200` `PageResultListGasStationPageVO` OK
 */
export const getGasStationList = (
  query: {
    query: GasStationQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListGasStationPageVO>(
    {
      url: `gas-supervise/gas/station/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * base-info-controller 运输车辆信息
 *
 * @tags base-info-controller
 * @name GetEnterpriseVehicleByVehicleId
 * @summary 运输车辆信息
 * @request GET:/enterprise/vehicle/{vehicleId}
 * @response `200` `ResultVehicleInfoVO` OK
 */
export const getEnterpriseVehicleByVehicleId = (vehicleId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultVehicleInfoVO>(
    {
      url: `gas-supervise/enterprise/vehicle/${vehicleId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * base-info-controller 运输车辆GIS撒点
 *
 * @tags base-info-controller
 * @name GetEnterpriseVehicleMap
 * @summary 运输车辆GIS撒点
 * @request GET:/enterprise/vehicle-map
 * @response `200` `ResultListVehicleMapInfoVO` OK
 */
export const getEnterpriseVehicleMap = (
  query: {
    enterpriseId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListVehicleMapInfoVO>(
    {
      url: `gas-supervise/enterprise/vehicle-map`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * base-info-controller
 *
 * @tags base-info-controller
 * @name GetEnterpriseVehicleMapFalse
 * @request GET:/enterprise/vehicle-map-false
 * @deprecated
 * @response `200` `ResultListVehicleMapInfoVO` OK
 */
export const getEnterpriseVehicleMapFalse = (
  query: {
    enterpriseId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListVehicleMapInfoVO>(
    {
      url: `gas-supervise/enterprise/vehicle-map-false`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * base-info-controller 运输车辆GIS撒点
 *
 * @tags base-info-controller
 * @name GetEnterpriseVehicleGps
 * @summary 运输车辆GIS撒点
 * @request GET:/enterprise/vehicle-gps
 * @response `200` `ResultListMapStringString` OK
 */
export const getEnterpriseVehicleGps = (
  query: {
    vehicleId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListMapStringString>(
    {
      url: `gas-supervise/enterprise/vehicle-gps`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * base-info-controller 运输车辆GIS撒点
 *
 * @tags base-info-controller
 * @name GetEnterpriseVehicleGpsFalse
 * @summary 运输车辆GIS撒点
 * @request GET:/enterprise/vehicle-gps-false
 * @deprecated
 * @response `200` `ResultListMapObjectObject` OK
 */
export const getEnterpriseVehicleGpsFalse = (
  query: {
    vehicleId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListMapObjectObject>(
    {
      url: `gas-supervise/enterprise/vehicle-gps-false`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * base-info-controller 燃气场站信息
 *
 * @tags base-info-controller
 * @name GetEnterpriseStationByStationId
 * @summary 燃气场站信息
 * @request GET:/enterprise/station/{stationId}
 * @response `200` `ResultStationInfoDTO` OK
 */
export const getEnterpriseStationByStationId = (stationId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultStationInfoDTO>(
    {
      url: `gas-supervise/enterprise/station/${stationId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * base-info-controller 燃气场站GIS撒点
 *
 * @tags base-info-controller
 * @name GetEnterpriseStationMap
 * @summary 燃气场站GIS撒点
 * @request GET:/enterprise/station-map
 * @response `200` `ResultListStationMapInfoVO` OK
 */
export const getEnterpriseStationMap = (
  query: {
    enterpriseId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListStationMapInfoVO>(
    {
      url: `gas-supervise/enterprise/station-map`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * base-info-controller 天然气场站GIS撒点
 *
 * @tags base-info-controller
 * @name GetEnterpriseStationMapNg
 * @summary 天然气场站GIS撒点
 * @request GET:/enterprise/station-map-ng
 * @response `200` `ResultListStationMapInfoVO` OK
 */
export const getEnterpriseStationMapNg = (
  query: {
    enterpriseId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListStationMapInfoVO>(
    {
      url: `gas-supervise/enterprise/station-map-ng`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * base-info-controller 液化气场站GIS撒点
 *
 * @tags base-info-controller
 * @name GetEnterpriseStationMapLng
 * @summary 液化气场站GIS撒点
 * @request GET:/enterprise/station-map-lng
 * @response `200` `ResultListStationMapInfoVO` OK
 */
export const getEnterpriseStationMapLng = (
  query: {
    enterpriseId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListStationMapInfoVO>(
    {
      url: `gas-supervise/enterprise/station-map-lng`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * enterprise-scoring-controller 考核评价结果详情
 *
 * @tags enterprise-scoring-controller
 * @name GetEnterpriseScoringById
 * @summary 考核评价结果详情
 * @request GET:/enterprise/scoring/{id}
 * @response `200` `ResultScoringDetailVO` OK
 */
export const getEnterpriseScoringById = (id: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultScoringDetailVO>(
    {
      url: `gas-supervise/enterprise/scoring/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-安全监管 考核评价-评分排名
 *
 * @tags 大屏-安全监管
 * @name GetEnterpriseScoringRank
 * @summary 考核评价-评分排名
 * @request GET:/enterprise/scoring/rank
 * @response `200` `ResultEnterpriseScoringViewVO` OK
 */
export const getEnterpriseScoringRank = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultEnterpriseScoringViewVO>(
    {
      url: `gas-supervise/enterprise/scoring/rank`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * enterprise-scoring-controller 企业考核排名
 *
 * @tags enterprise-scoring-controller
 * @name GetEnterpriseScoringRankEnt
 * @summary 企业考核排名
 * @request GET:/enterprise/scoring/rank/ent
 * @response `200` `ResultListScoringEnterpriseRankVO` OK
 */
export const getEnterpriseScoringRankEnt = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListScoringEnterpriseRankVO>(
    {
      url: `gas-supervise/enterprise/scoring/rank/ent`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * enterprise-scoring-controller 区域考核排名
 *
 * @tags enterprise-scoring-controller
 * @name GetEnterpriseScoringRankArea
 * @summary 区域考核排名
 * @request GET:/enterprise/scoring/rank/area
 * @response `200` `ResultListScoringAreaRankVO` OK
 */
export const getEnterpriseScoringRankArea = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListScoringAreaRankVO>(
    {
      url: `gas-supervise/enterprise/scoring/rank/area`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * enterprise-scoring-controller 考核评价结果列表
 *
 * @tags enterprise-scoring-controller
 * @name GetEnterpriseScoringList
 * @summary 考核评价结果列表
 * @request GET:/enterprise/scoring/list
 * @response `200` `PageResultListScoringPageVO` OK
 */
export const getEnterpriseScoringList = (
  query: {
    /** 考核评价结果分页查询 */
    query: ScoringPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListScoringPageVO>(
    {
      url: `gas-supervise/enterprise/scoring/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * enterprise-scoring-controller 燃气行业综合评价分析
 *
 * @tags enterprise-scoring-controller
 * @name GetEnterpriseScoringIndustry
 * @summary 燃气行业综合评价分析
 * @request GET:/enterprise/scoring/industry
 * @response `200` `ResultScoringIndustryStatVO` OK
 */
export const getEnterpriseScoringIndustry = (
  query: {
    scoringCycle: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultScoringIndustryStatVO>(
    {
      url: `gas-supervise/enterprise/scoring/industry`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * enterprise-scoring-controller 行业考核报告列表
 *
 * @tags enterprise-scoring-controller
 * @name GetEnterpriseScoringIndustryReport
 * @summary 行业考核报告列表
 * @request GET:/enterprise/scoring/industry/report
 * @response `200` `ResultListScoringPageVO` OK
 */
export const getEnterpriseScoringIndustryReport = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListScoringPageVO>(
    {
      url: `gas-supervise/enterprise/scoring/industry/report`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * enterprise-scoring-controller 考核报表生成
 *
 * @tags enterprise-scoring-controller
 * @name GetEnterpriseScoringGen
 * @summary 考核报表生成
 * @request GET:/enterprise/scoring/gen
 * @response `200` `ResultListMinioResp` OK
 */
export const getEnterpriseScoringGen = (
  query: {
    cycle: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListMinioResp>(
    {
      url: `gas-supervise/enterprise/scoring/gen`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * enterprise-scoring-controller 考核异常分析
 *
 * @tags enterprise-scoring-controller
 * @name GetEnterpriseScoringDeduction
 * @summary 考核异常分析
 * @request GET:/enterprise/scoring/deduction
 * @response `200` `ResultScoringDeductionStatVO` OK
 */
export const getEnterpriseScoringDeduction = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultScoringDeductionStatVO>(
    {
      url: `gas-supervise/enterprise/scoring/deduction`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * enterprise-scoring-controller 近一年突出问题企业
 *
 * @tags enterprise-scoring-controller
 * @name GetEnterpriseScoringBad
 * @summary 近一年突出问题企业
 * @request GET:/enterprise/scoring/bad
 * @response `200` `ResultScoringBadCntVO` OK
 */
export const getEnterpriseScoringBad = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultScoringBadCntVO>(
    {
      url: `gas-supervise/enterprise/scoring/bad`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业巡线管理 查询巡线轨迹
 *
 * @tags 企业巡线管理
 * @name GetEnterprisePatrolTraceById
 * @summary 查询巡线轨迹
 * @request GET:/enterprise/patrol/{id}/trace
 * @response `200` `ResultListCoordinate` OK
 */
export const getEnterprisePatrolTraceById = (id: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListCoordinate>(
    {
      url: `gas-supervise/enterprise/patrol/${id}/trace`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业巡线管理 企业巡线统计
 *
 * @tags 企业巡线管理
 * @name GetEnterprisePatrolSum
 * @summary 企业巡线统计
 * @request GET:/enterprise/patrol/sum
 * @response `200` `ResultLinePatrolSumVO` OK
 */
export const getEnterprisePatrolSum = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultLinePatrolSumVO>(
    {
      url: `gas-supervise/enterprise/patrol/sum`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业巡线管理 分页/导出企业巡线列表
 *
 * @tags 企业巡线管理
 * @name GetEnterprisePatrolList
 * @summary 分页/导出企业巡线列表
 * @request GET:/enterprise/patrol/list
 * @response `200` `PageResultListLinePatrolPageVO` OK
 */
export const getEnterprisePatrolList = (
  query: {
    query: LinePatrolQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListLinePatrolPageVO>(
    {
      url: `gas-supervise/enterprise/patrol/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 企业信息统计
 *
 * @tags 企业信息管理
 * @name GetEnterpriseInfoSummary
 * @summary 企业信息统计
 * @request GET:/enterprise/info/summary
 * @response `200` `ResultEnterpriseSummaryVO` OK
 */
export const getEnterpriseInfoSummary = (
  query?: {
    pipeline?: boolean;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultEnterpriseSummaryVO>(
    {
      url: `gas-supervise/enterprise/info/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息组织机构同步 企业信息组织机构同步至工作台,刷新缓存
 *
 * @tags 企业信息组织机构同步
 * @name GetEnterpriseInfoRefresh
 * @summary 企业信息组织机构同步至工作台,刷新缓存
 * @request GET:/enterprise/info/refresh
 * @response `200` `ResultVoid` OK
 */
export const getEnterpriseInfoRefresh = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultVoid>(
    {
      url: `gas-supervise/enterprise/info/refresh`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 分页/导出企业列表
 *
 * @tags 企业信息管理
 * @name GetEnterpriseInfoPage
 * @summary 分页/导出企业列表
 * @request GET:/enterprise/info/page
 * @response `200` `PageResultListEnterpriseInfoPageVO` OK
 */
export const getEnterpriseInfoPage = (
  query: {
    query: EnterpriseInfoPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListEnterpriseInfoPageVO>(
    {
      url: `gas-supervise/enterprise/info/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * base-info-controller 燃气企业GIS撒点
 *
 * @tags base-info-controller
 * @name GetEnterpriseEnterpriseMap
 * @summary 燃气企业GIS撒点
 * @request GET:/enterprise/enterprise-map
 * @response `200` `ResultListEnterpriseMapInfoVO` OK
 */
export const getEnterpriseEnterpriseMap = (
  query: {
    scope: GetEnterpriseEnterpriseMapParamsScope;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListEnterpriseMapInfoVO>(
    {
      url: `gas-supervise/enterprise/enterprise-map`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * base-info-controller 企业相关的设施和应急资源统计
 *
 * @tags base-info-controller
 * @name GetEnterpriseDevRes
 * @summary 企业相关的设施和应急资源统计
 * @request GET:/enterprise/dev-res
 * @response `200` `ResultEnterpriseDevResInfoVO` OK
 */
export const getEnterpriseDevRes = (
  query: {
    enterpriseId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultEnterpriseDevResInfoVO>(
    {
      url: `gas-supervise/enterprise/dev-res`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业协调事件接口 企业协调事件列表查询
 *
 * @tags 企业协调事件接口, 企业协调事件列表查询
 * @name GetEnterpriseCoordinatePage
 * @summary 企业协调事件列表查询
 * @request GET:/enterprise/coordinate/page
 * @response `200` `ResultListCoordinateMatterVO` OK
 */
export const getEnterpriseCoordinatePage = (
  query: {
    /** 企业协调事项查询 */
    query: CoordinateMatterQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListCoordinateMatterVO>(
    {
      url: `gas-supervise/enterprise/coordinate/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业协调事件反馈记录 企业协调事件反馈记录
 *
 * @tags 企业协调事件反馈记录, 企业协调事件接口
 * @name GetEnterpriseCoordinateFeedbackById
 * @summary 企业协调事件反馈记录
 * @request GET:/enterprise/coordinate/feedback/{id}
 * @response `200` `ResultCoordinateMatterFeedbackVO` OK
 */
export const getEnterpriseCoordinateFeedbackById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultCoordinateMatterFeedbackVO>(
    {
      url: `gas-supervise/enterprise/coordinate/feedback/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 导出模板 按模板类型下载模板
 *
 * @tags 导出模板
 * @name GetEnterpriseCommonTemplateByType
 * @summary 按模板类型下载模板
 * @request GET:/enterprise/common/template/{type}
 * @response `200` `void` OK
 */
export const getEnterpriseCommonTemplateByType = (
  type: "ENTERPRISE_INFO_IMPORT" | "GAS_USER_IMPORT" | "PER_QUA_IMPORT" | "SEC_CHECK_IMPORT" | "GAS_STATION_IMPORT",
  params: PerRequestOptions = {},
) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/enterprise/common/template/${type}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 获取企业下拉选
 *
 * @tags 企业信息管理
 * @name GetEnterpriseCommonSelection
 * @summary 获取企业下拉选
 * @request GET:/enterprise/common/selection
 * @response `200` `ResultListDictionaryItem` OK
 */
export const getEnterpriseCommonSelection = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListDictionaryItem>(
    {
      url: `gas-supervise/enterprise/common/selection`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业安检管理 企业安检记录统计
 *
 * @tags 企业安检管理
 * @name GetEnterpriseCheckSumById
 * @summary 企业安检记录统计
 * @request GET:/enterprise/check/{id}/sum
 * @response `200` `ResultSecurityCheckSumVO` OK
 */
export const getEnterpriseCheckSumById = (id: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultSecurityCheckSumVO>(
    {
      url: `gas-supervise/enterprise/check/${id}/sum`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业安检管理 分页/导出企业安检记录列表
 *
 * @tags 企业安检管理
 * @name GetEnterpriseCheckRecList
 * @summary 分页/导出企业安检记录列表
 * @request GET:/enterprise/check/rec-list
 * @response `200` `PageResultListSecurityCheckRecPageVO` OK
 */
export const getEnterpriseCheckRecList = (
  query: {
    query: SecurityCheckRecQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListSecurityCheckRecPageVO>(
    {
      url: `gas-supervise/enterprise/check/rec-list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业安检管理 分页/导出企业安检列表
 *
 * @tags 企业安检管理
 * @name GetEnterpriseCheckList
 * @summary 分页/导出企业安检列表
 * @request GET:/enterprise/check/list
 * @response `200` `PageResultListSecurityCheckPageVO` OK
 */
export const getEnterpriseCheckList = (
  query: {
    query: SecurityCheckQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListSecurityCheckPageVO>(
    {
      url: `gas-supervise/enterprise/check/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业安检管理 汇总统计
 *
 * @tags 企业安检管理
 * @name GetEnterpriseCheckEndUserSummary
 * @summary 汇总统计
 * @request GET:/enterprise/check/end-user/summary
 * @response `200` `ResultSecCheckSummaryVO` OK
 */
export const getEnterpriseCheckEndUserSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultSecCheckSummaryVO>(
    {
      url: `gas-supervise/enterprise/check/end-user/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业安检管理 统计表格
 *
 * @tags 企业安检管理
 * @name GetEnterpriseCheckEndUserStatisticalTable
 * @summary 统计表格
 * @request GET:/enterprise/check/end-user/statistical/table
 * @response `200` `ResultEndUserSecCheckSummaryVO` OK
 */
export const getEnterpriseCheckEndUserStatisticalTable = (
  query: {
    /** @format int32 */
    planYear: number;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultEndUserSecCheckSummaryVO>(
    {
      url: `gas-supervise/enterprise/check/end-user/statistical/table`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业安检管理 三年未检用户分页
 *
 * @tags 企业安检管理
 * @name GetEnterpriseCheckEndUserPage
 * @summary 三年未检用户分页
 * @request GET:/enterprise/check/end-user/page
 * @response `200` `PageResultListSecCheckThreeYearsUnCheckPageDTO` OK
 */
export const getEnterpriseCheckEndUserPage = (
  query: {
    request: PageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListSecCheckThreeYearsUnCheckPageDTO>(
    {
      url: `gas-supervise/enterprise/check/end-user/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * base-info-controller 液化气瓶详情
 *
 * @tags base-info-controller
 * @name GetEnterpriseBottleByBottleId
 * @summary 液化气瓶详情
 * @request GET:/enterprise/bottle/{bottleId}
 * @response `200` `ResultBottleInfoVO` OK
 */
export const getEnterpriseBottleByBottleId = (bottleId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBottleInfoVO>(
    {
      url: `gas-supervise/enterprise/bottle/${bottleId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * base-info-controller 液化气瓶GIS撒点
 *
 * @tags base-info-controller
 * @name GetEnterpriseBottleMap
 * @summary 液化气瓶GIS撒点
 * @request GET:/enterprise/bottle-map
 * @response `200` `ResultListBottleMapInfoVO` OK
 */
export const getEnterpriseBottleMap = (
  query: {
    enterpriseId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListBottleMapInfoVO>(
    {
      url: `gas-supervise/enterprise/bottle-map`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业基础底数查询 企业基础底数查询
 *
 * @tags 企业基础底数查询, 企业基础底数
 * @name GetEnterpriseBaseData
 * @summary 企业基础底数查询
 * @request GET:/enterprise/base/data
 * @response `200` `ResultMapStringListListMapStringString` OK
 */
export const getEnterpriseBaseData = (
  query: {
    /** 燃气企业底数请求 */
    query: BaseDataRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultMapStringListListMapStringString>(
    {
      url: `gas-supervise/enterprise/base/data`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 应急预案列表 应急预案列表
 *
 * @tags 应急预案列表, 应急预案管理管理接口
 * @name GetEmresPlan
 * @summary 应急预案列表
 * @request GET:/emres/plan
 * @response `200` `PageResultListEmresPlanVO` OK
 */
export const getEmresPlan = (
  query: {
    /** 应急预案分页查询请求 */
    query: EmresPlanRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListEmresPlanVO>(
    {
      url: `gas-supervise/emres/plan`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 应急预案汇总 应急预案汇总
 *
 * @tags 应急预案汇总, 应急预案管理管理接口
 * @name GetEmresPlanSummary
 * @summary 应急预案汇总
 * @request GET:/emres/plan/summary
 * @response `200` `ResultEmresPlanSummaryVO` OK
 */
export const getEmresPlanSummary = (
  query: {
    /** 应急预案分页查询请求 */
    query: EmresPlanRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultEmresPlanSummaryVO>(
    {
      url: `gas-supervise/emres/plan/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 应急预案管理管理接口 应急预案详情
 *
 * @tags 应急预案管理管理接口, 应急预案详情
 * @name GetEmresPlanDetailByPlanId
 * @summary 应急预案详情
 * @request GET:/emres/plan/detail/{planId}
 * @response `200` `ResultEmresPlanVO` OK
 */
export const getEmresPlanDetailByPlanId = (planId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultEmresPlanVO>(
    {
      url: `gas-supervise/emres/plan/detail/${planId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 行政区划 获取行政区列表，如果未传code，则返回省级行政区划列表，否则返回对应的子行政区划列表
 *
 * @tags 行政区划
 * @name GetDistrictList
 * @summary 获取行政区列表，如果未传code，则返回省级行政区划列表，否则返回对应的子行政区划列表
 * @request GET:/district/list
 * @response `200` `ResultListDistrictVO` OK
 */
export const getDistrictList = (
  query?: {
    code?: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListDistrictVO>(
    {
      url: `gas-supervise/district/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 行政区划 获取全国行政区划数据
 *
 * @tags 行政区划
 * @name GetDistrictAll
 * @summary 获取全国行政区划数据
 * @request GET:/district/all
 * @response `200` `ResultListDistrictVO` OK
 */
export const getDistrictAll = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListDistrictVO>(
    {
      url: `gas-supervise/district/all`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 数据字典 获取单个数据字典
 *
 * @tags 数据字典
 * @name GetDictionary
 * @summary 获取单个数据字典
 * @request GET:/dictionary
 * @response `200` `ResultListDictionaryItem` OK
 */
export const getDictionary = (
  query: {
    type: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListDictionaryItem>(
    {
      url: `gas-supervise/dictionary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 数据字典 同时获取多个数据字典
 *
 * @tags 数据字典
 * @name GetDictionaryList
 * @summary 同时获取多个数据字典
 * @request GET:/dictionary/list
 * @response `200` `ResultMapStringListDictionaryItem` OK
 */
export const getDictionaryList = (
  query: {
    types: Array<string> | string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultMapStringListDictionaryItem>(
    {
      url: `gas-supervise/dictionary/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 危险源详情查询
 *
 * @tags 危险源详情
 * @name GetDangerByDangerCode
 * @summary 危险源详情
 * @request GET:/danger/{dangerCode}
 * @response `200` `ResultDangerDetailVO` OK
 */
export const getDangerByDangerCode = (dangerCode: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultDangerDetailVO>(
    {
      url: `gas-supervise/danger/${dangerCode}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 管道气综合监管-隐患治理(本年)
 *
 * @tags 管道气综合监管
 * @name GetComSuperviseHidangerPipeGasSummary
 * @summary 隐患治理(本年)
 * @request GET:/com-supervise/hidanger/pipe-gas/summary
 * @response `200` `ResultBsPipeGasHidangerSummaryVO` OK
 */
export const getComSuperviseHidangerPipeGasSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBsPipeGasHidangerSummaryVO>(
    {
      url: `gas-supervise/com-supervise/hidanger/pipe-gas/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 管道气综合监管-安全检查
 *
 * @tags 管道气综合监管
 * @name GetComSuperviseHidangerPipeGasSafeCheck
 * @summary 安全检查
 * @request GET:/com-supervise/hidanger/pipe-gas/safe-check
 * @response `200` `ResultComSupSafeCheckVO` OK
 */
export const getComSuperviseHidangerPipeGasSafeCheck = (
  query?: {
    /** @format int32 */
    cycle?: number;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultComSupSafeCheckVO>(
    {
      url: `gas-supervise/com-supervise/hidanger/pipe-gas/safe-check`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 管道气综合监管-企业隐患处置排名
 *
 * @tags 管道气综合监管
 * @name GetComSuperviseHidangerPipeGasRank
 * @summary 企业隐患处置排名
 * @request GET:/com-supervise/hidanger/pipe-gas/rank
 * @response `200` `ResultListBsEnterpriseHidangerHandleDTO` OK
 */
export const getComSuperviseHidangerPipeGasRank = (
  query?: {
    /** @format int32 */
    cycle?: number;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListBsEnterpriseHidangerHandleDTO>(
    {
      url: `gas-supervise/com-supervise/hidanger/pipe-gas/rank`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 管道气综合监管-未整改隐患
 *
 * @tags 管道气综合监管
 * @name GetComSuperviseHidangerPipeGasPage
 * @summary 未整改隐患
 * @request GET:/com-supervise/hidanger/pipe-gas/page
 * @response `200` `PageResultListHidangerOrgPageVO` OK
 */
export const getComSuperviseHidangerPipeGasPage = (
  query: {
    query: HidangerOrgPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListHidangerOrgPageVO>(
    {
      url: `gas-supervise/com-supervise/hidanger/pipe-gas/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 液化气综合监管-隐患整改
 *
 * @tags 液化气综合监管
 * @name GetComSuperviseHidangerLgHandle
 * @summary 隐患整改
 * @request GET:/com-supervise/hidanger/lg/handle
 * @response `200` `ResultComSupLgEnterpriseVO` OK
 */
export const getComSuperviseHidangerLgHandle = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultComSupLgEnterpriseVO>(
    {
      url: `gas-supervise/com-supervise/hidanger/lg/handle`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 液化气综合监管-企业隐患
 *
 * @tags 液化气综合监管
 * @name GetComSuperviseHidangerLgEnterprise
 * @summary 企业隐患
 * @request GET:/com-supervise/hidanger/lg/enterprise
 * @response `200` `ResultListComSupLgEnterpriseDTO` OK
 */
export const getComSuperviseHidangerLgEnterprise = (
  query?: {
    state?: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListComSupLgEnterpriseDTO>(
    {
      url: `gas-supervise/com-supervise/hidanger/lg/enterprise`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 液化气综合监管-隐患排查
 *
 * @tags 液化气综合监管
 * @name GetComSuperviseHidangerLgCheck
 * @summary 隐患排查
 * @request GET:/com-supervise/hidanger/lg/check
 * @response `200` `ResultComSupSubjectTypeVO` OK
 */
export const getComSuperviseHidangerLgCheck = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultComSupSubjectTypeVO>(
    {
      url: `gas-supervise/com-supervise/hidanger/lg/check`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 终端用户综合监管-隐患管理-隐患概览
 *
 * @tags 终端用户监管
 * @name GetComSuperviseHidangerEndUerTable
 * @summary 终端用户综合监管-隐患管理-隐患概览
 * @request GET:/com-supervise/hidanger/end-uer/table
 * @response `200` `ResultListObject` OK
 */
export const getComSuperviseHidangerEndUerTable = (
  query: {
    /**
     * 统计年份
     * @format int32
     */
    year?: number;
    /** 统计类型:ORG/DISTRICT */
    type: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListObject>(
    {
      url: `gas-supervise/com-supervise/hidanger/end-uer/table`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 终端用户综合监管-隐患排查治理
 *
 * @tags 终端用户综合监管
 * @name GetComSuperviseHidangerEndUerSummary
 * @summary 隐患排查治理
 * @request GET:/com-supervise/hidanger/end-uer/summary
 * @response `200` `ResultEndUserHidangerSummary` OK
 */
export const getComSuperviseHidangerEndUerSummary = (
  query?: {
    /**
     * 隐患趋势统计周期,默认6个月
     * @format int32
     */
    trendCycle?: number;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultEndUserHidangerSummary>(
    {
      url: `gas-supervise/com-supervise/hidanger/end-uer/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 终端用户综合监管-重点清单-隐患分页
 *
 * @tags 终端用户综合监管
 * @name GetComSuperviseHidangerEndUerPage
 * @summary 重点清单-隐患分页
 * @request GET:/com-supervise/hidanger/end-uer/page
 * @response `200` `PageResultListHidangerOrgPageVO` OK
 */
export const getComSuperviseHidangerEndUerPage = (
  query: {
    query: HidangerOrgPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListHidangerOrgPageVO>(
    {
      url: `gas-supervise/com-supervise/hidanger/end-uer/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通知公告控制层 公告信息列表查询
 *
 * @tags 通知公告控制层
 * @name GetBulletin
 * @summary 公告信息列表查询
 * @request GET:/bulletin
 * @response `200` `PageResultListBulletinVO` OK
 */
export const getBulletin = (
  query: {
    /** 公告信息查询 */
    bulletinQuery: BulletinQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListBulletinVO>(
    {
      url: `gas-supervise/bulletin`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通知公告控制层 公告信息修改
 *
 * @tags 通知公告控制层
 * @name GetBulletinGetById
 * @summary 公告信息修改
 * @request GET:/bulletin/get/{id}
 * @response `200` `ResultBulletinDetailVO` OK
 */
export const getBulletinGetById = (公告id: string, id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBulletinDetailVO>(
    {
      url: `gas-supervise/bulletin/get/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通知公告控制层 公告信息统计
 *
 * @tags 通知公告控制层
 * @name GetBulletinCount
 * @summary 公告信息统计
 * @request GET:/bulletin/count
 * @response `200` `ResultBulletinCountVO` OK
 */
export const getBulletinCount = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBulletinCountVO>(
    {
      url: `gas-supervise/bulletin/count`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 基础数据统计概览 总体情况统计
 *
 * @tags 基础数据统计概览
 * @name GetBsStat
 * @summary 总体情况统计
 * @request GET:/bs/stat
 * @response `200` `ResultBaseOverallVO` OK
 */
export const getBsStat = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBaseOverallVO>(
    {
      url: `gas-supervise/bs/stat`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 基础数据统计概览 管道气行业概览
 *
 * @tags 基础数据统计概览
 * @name GetBsStatNg
 * @summary 管道气行业概览
 * @request GET:/bs/stat/ng
 * @response `200` `ResultBaseNgOverallVO` OK
 */
export const getBsStatNg = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBaseNgOverallVO>(
    {
      url: `gas-supervise/bs/stat/ng`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 基础数据统计概览 天然气供气信息统计
 *
 * @tags 基础数据统计概览
 * @name GetBsStatNgSupl
 * @summary 天然气供气信息统计
 * @request GET:/bs/stat/ng/supl
 * @response `200` `ResultBaseGasSupplyVO` OK
 */
export const getBsStatNgSupl = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBaseGasSupplyVO>(
    {
      url: `gas-supervise/bs/stat/ng/supl`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 基础数据统计概览 天然气场站统计
 *
 * @tags 基础数据统计概览
 * @name GetBsStatNgStn
 * @summary 天然气场站统计
 * @request GET:/bs/stat/ng/stn
 * @response `200` `ResultBaseStnOverallVO` OK
 */
export const getBsStatNgStn = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultBaseStnOverallVO>(
    {
      url: `gas-supervise/bs/stat/ng/stn`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 基础数据统计概览 天然气管网统计
 *
 * @tags 基础数据统计概览
 * @name GetBsStatNgPipe
 * @summary 天然气管网统计
 * @request GET:/bs/stat/ng/pipe
 * @response `200` `ResultBasePipeOverallVO` OK
 */
export const getBsStatNgPipe = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBasePipeOverallVO>(
    {
      url: `gas-supervise/bs/stat/ng/pipe`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 基础数据统计概览 管道气经营企业
 *
 * @tags 基础数据统计概览
 * @name GetBsStatNgEnt
 * @summary 管道气经营企业
 * @request GET:/bs/stat/ng/ent
 * @response `200` `ResultBaseEntOverallVO` OK
 */
export const getBsStatNgEnt = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBaseEntOverallVO>(
    {
      url: `gas-supervise/bs/stat/ng/ent`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 基础数据统计概览 天然气特种设备统计
 *
 * @tags 基础数据统计概览
 * @name GetBsStatNgDev
 * @summary 天然气特种设备统计
 * @request GET:/bs/stat/ng/dev
 * @response `200` `ResultBaseSpecDevVO` OK
 */
export const getBsStatNgDev = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultBaseSpecDevVO>(
    {
      url: `gas-supervise/bs/stat/ng/dev`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 基础数据统计概览 液化气行业概览
 *
 * @tags 基础数据统计概览
 * @name GetBsStatLng
 * @summary 液化气行业概览
 * @request GET:/bs/stat/lng
 * @response `200` `ResultBaseLngOverallVO` OK
 */
export const getBsStatLng = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBaseLngOverallVO>(
    {
      url: `gas-supervise/bs/stat/lng`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 基础数据统计概览 液化气供气信息统计
 *
 * @tags 基础数据统计概览
 * @name GetBsStatLngSupl
 * @summary 液化气供气信息统计
 * @request GET:/bs/stat/lng/supl
 * @response `200` `ResultBaseGasSupplyVO` OK
 */
export const getBsStatLngSupl = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBaseGasSupplyVO>(
    {
      url: `gas-supervise/bs/stat/lng/supl`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 基础数据统计概览 液化气场站统计
 *
 * @tags 基础数据统计概览
 * @name GetBsStatLngStn
 * @summary 液化气场站统计
 * @request GET:/bs/stat/lng/stn
 * @response `200` `ResultBaseStnOverallVO` OK
 */
export const getBsStatLngStn = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultBaseStnOverallVO>(
    {
      url: `gas-supervise/bs/stat/lng/stn`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 基础数据统计概览 液化气经营企业
 *
 * @tags 基础数据统计概览
 * @name GetBsStatLngEnt
 * @summary 液化气经营企业
 * @request GET:/bs/stat/lng/ent
 * @response `200` `ResultBaseEntOverallVO` OK
 */
export const getBsStatLngEnt = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBaseEntOverallVO>(
    {
      url: `gas-supervise/bs/stat/lng/ent`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 基础数据统计概览 液化气钢瓶统计
 *
 * @tags 基础数据统计概览
 * @name GetBsStatLngBot
 * @summary 液化气钢瓶统计
 * @request GET:/bs/stat/lng/bot
 * @response `200` `ResultBaseBotOverallVO` OK
 */
export const getBsStatLngBot = (
  query: {
    /** 监管统计请求 */
    request: StatisticalRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultBaseBotOverallVO>(
    {
      url: `gas-supervise/bs/stat/lng/bot`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-安全监管 隐患分页
 *
 * @tags 大屏-安全监管
 * @name GetBsHidangerPage
 * @summary 隐患分页
 * @request GET:/bs/hidanger/page
 * @response `200` `PageResultListBsHidangerDTO` OK
 */
export const getBsHidangerPage = (
  query: {
    query: BsHidangerPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListBsHidangerDTO>(
    {
      url: `gas-supervise/bs/hidanger/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-安全监管 隐患治理-老旧管网改造
 *
 * @tags 大屏-安全监管
 * @name GetBsHidangerOldPipe
 * @summary 隐患治理-老旧管网改造
 * @request GET:/bs/hidanger/old-pipe
 * @response `200` `ResultBsOldPipeConfigDTO` OK
 */
export const getBsHidangerOldPipe = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBsOldPipeConfigDTO>(
    {
      url: `gas-supervise/bs/hidanger/old-pipe`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-安全监管 隐患治理-治理成效-企业隐患整改
 *
 * @tags 大屏-安全监管
 * @name GetBsHidangerHandleSummaryTarget
 * @summary 隐患治理-治理成效-企业隐患整改
 * @request GET:/bs/hidanger/handle-summary/target
 * @response `200` `ResultListBsHidangerCountItemDTO` OK
 */
export const getBsHidangerHandleSummaryTarget = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListBsHidangerCountItemDTO>(
    {
      url: `gas-supervise/bs/hidanger/handle-summary/target`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-安全监管 隐患治理-治理成效-查处事项
 *
 * @tags 大屏-安全监管
 * @name GetBsHidangerHandleSummaryTargetPage
 * @summary 隐患治理-治理成效-查处事项
 * @request GET:/bs/hidanger/handle-summary/target/page
 * @response `200` `ResultListBsHidangerHandleItemDTO` OK
 */
export const getBsHidangerHandleSummaryTargetPage = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListBsHidangerHandleItemDTO>(
    {
      url: `gas-supervise/bs/hidanger/handle-summary/target/page`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-安全监管 隐患治理-整改概览
 *
 * @tags 大屏-安全监管
 * @name GetBsHidangerHandleSummaryL1
 * @summary 隐患治理-整改概览
 * @request GET:/bs/hidanger/handle-summary/l1
 * @response `200` `ResultBsHidangerHandleSummaryVO` OK
 */
export const getBsHidangerHandleSummaryL1 = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBsHidangerHandleSummaryVO>(
    {
      url: `gas-supervise/bs/hidanger/handle-summary/l1`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-安全监管 隐患统计
 *
 * @tags 大屏-安全监管
 * @name GetBsHidangerGroupSummary
 * @summary 隐患统计
 * @request GET:/bs/hidanger/group-summary
 * @response `200` `ResultListBsHidangerCountDTO` OK
 */
export const getBsHidangerGroupSummary = (
  query: {
    /** 隐患来源 */
    dangerSource: GetBsHidangerGroupSummaryParamsDangerSource;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListBsHidangerCountDTO>(
    {
      url: `gas-supervise/bs/hidanger/group-summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 大屏-安全监管 隐患详情
 *
 * @tags 大屏-安全监管
 * @name GetBsHidangerDetailByUid
 * @summary 隐患详情
 * @request GET:/bs/hidanger/detail/{uid}
 * @response `200` `ResultObject` OK
 */
export const getBsHidangerDetailByUid = (uid: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultObject>(
    {
      url: `gas-supervise/bs/hidanger/detail/${uid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 管道气监管 巡查巡检
 *
 * @tags 管道气监管
 * @name GetBigScreenHidangerPipeGasInspection
 * @summary 巡查巡检
 * @request GET:/big-screen/hidanger/pipe-gas/inspection
 * @response `200` `ResultBsPipeGasCheckSummaryVO` OK
 */
export const getBigScreenHidangerPipeGasInspection = (
  query?: {
    /** @format int32 */
    cycle?: number;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultBsPipeGasCheckSummaryVO>(
    {
      url: `gas-supervise/big-screen/hidanger/pipe-gas/inspection`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 分页查询救援人员数据
 *
 * @tags 救援人员管理接口, 基础信息管理-救援人员管理
 * @name GetBasicRetmanPage
 * @summary 救援人员分页
 * @request GET:/basic/retman/page
 * @response `200` `PageResultListEmresMnRetmanPageVO` OK
 */
export const getBasicRetmanPage = (
  query: {
    /** 救援人员分页查询条件 */
    query: EmresMnRetmanPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListEmresMnRetmanPageVO>(
    {
      url: `gas-supervise/basic/retman/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 导出救援人员数据
 *
 * @tags 救援人员管理接口, 基础信息管理-救援人员管理
 * @name GetBasicRetmanExport
 * @summary 救援人员导出
 * @request GET:/basic/retman/export
 * @response `200` `ResultListEmresMnRetmanExportVO` OK
 */
export const getBasicRetmanExport = (
  query: {
    /** 救援人员分页查询条件 */
    query: EmresMnRetmanPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListEmresMnRetmanExportVO>(
    {
      url: `gas-supervise/basic/retman/export`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 查询单个救援人员数据
 *
 * @tags 救援人员管理接口, 基础信息管理-救援人员管理
 * @name GetBasicRetmanDetailByCmKid
 * @summary 救援人员详情
 * @request GET:/basic/retman/detail/{cmKid}
 * @response `200` `ResultEmresMnRetmanDetailVO` OK
 */
export const getBasicRetmanDetailByCmKid = (cmKid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultEmresMnRetmanDetailVO>(
    {
      url: `gas-supervise/basic/retman/detail/${cmKid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 分页查询救援队伍数据
 *
 * @tags 基础信息管理-救援队伍管理, 救援队伍管理接口
 * @name GetBasicReteamPage
 * @summary 救援队伍分页
 * @request GET:/basic/reteam/page
 * @response `200` `PageResultListEmresMnReteamPageVO` OK
 */
export const getBasicReteamPage = (
  query: {
    /** 救援队伍分页查询条件 */
    query: EmresMnReteamPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListEmresMnReteamPageVO>(
    {
      url: `gas-supervise/basic/reteam/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 查询最近的五个队伍
 *
 * @tags 基础信息管理-救援队伍管理, 救援队伍管理接口
 * @name GetBasicReteamNear
 * @summary 最近的五个队伍
 * @request GET:/basic/reteam/near
 * @response `200` `ResultListEmresMnReteamNearVO` OK
 */
export const getBasicReteamNear = (
  query: {
    /** 附近救援队伍 */
    query: EmresMnReteamNearQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListEmresMnReteamNearVO>(
    {
      url: `gas-supervise/basic/reteam/near`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 导出救援队伍数据
 *
 * @tags 基础信息管理-救援队伍管理, 救援队伍管理接口
 * @name GetBasicReteamExport
 * @summary 救援队伍导出
 * @request GET:/basic/reteam/export
 * @response `200` `ResultListEmresMnReteamExportVO` OK
 */
export const getBasicReteamExport = (
  query: {
    /** 救援队伍分页查询条件 */
    query: EmresMnReteamPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListEmresMnReteamExportVO>(
    {
      url: `gas-supervise/basic/reteam/export`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 查询所在队伍列表
 *
 * @tags 基础信息管理-救援队伍管理, 救援队伍管理接口
 * @name GetBasicReteamDownListByOrgid
 * @summary 查询所在队伍列表
 * @request GET:/basic/reteam/down/list/{orgid}
 * @response `200` `ResultListEmresMnReteamDownVO` OK
 */
export const getBasicReteamDownListByOrgid = (orgid: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListEmresMnReteamDownVO>(
    {
      url: `gas-supervise/basic/reteam/down/list/${orgid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 查询单个救援队伍数据
 *
 * @tags 基础信息管理-救援队伍管理, 救援队伍管理接口
 * @name GetBasicReteamDetailByCmKid
 * @summary 救援队伍详情
 * @request GET:/basic/reteam/detail/{cmKid}
 * @response `200` `ResultEmresMnReteamDetailVO` OK
 */
export const getBasicReteamDetailByCmKid = (cmKid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultEmresMnReteamDetailVO>(
    {
      url: `gas-supervise/basic/reteam/detail/${cmKid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 队伍人员信息列表
 *
 * @tags 基础信息管理-救援队伍管理, 救援队伍管理接口
 * @name GetBasicReteamBasePersonsByCmKid
 * @summary 队伍人员信息列表
 * @request GET:/basic/reteam/base/persons/{cmKid}
 * @response `200` `ResultListEmresMnRetmanBaseVO` OK
 */
export const getBasicReteamBasePersonsByCmKid = (cmKid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListEmresMnRetmanBaseVO>(
    {
      url: `gas-supervise/basic/reteam/base/persons/${cmKid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 物资装备信息列表
 *
 * @tags 基础信息管理-救援队伍管理, 救援队伍管理接口
 * @name GetBasicReteamBaseMaterisByCmKid
 * @summary 物资装备信息列表
 * @request GET:/basic/reteam/base/materis/{cmKid}
 * @response `200` `ResultListEmresMnMateriBaseVO` OK
 */
export const getBasicReteamBaseMaterisByCmKid = (cmKid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListEmresMnMateriBaseVO>(
    {
      url: `gas-supervise/basic/reteam/base/materis/${cmKid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 队伍基本信息
 *
 * @tags 基础信息管理-救援队伍管理, 救援队伍管理接口
 * @name GetBasicReteamBaseDetailByCmKid
 * @summary 队伍基本信息
 * @request GET:/basic/reteam/base/detail/{cmKid}
 * @response `200` `ResultEmresMnReteamBaseVO` OK
 */
export const getBasicReteamBaseDetailByCmKid = (cmKid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultEmresMnReteamBaseVO>(
    {
      url: `gas-supervise/basic/reteam/base/detail/${cmKid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 维修记录列表查询
 *
 * @tags 维修记录列表, 燃气管网信息接口
 * @name GetBasicPipeRepairPage
 * @summary 维修记录列表
 * @request GET:/basic/pipe/repair/page
 * @response `200` `PageResultListCifrsGasChPipeRepairPageVO` OK
 */
export const getBasicPipeRepairPage = (
  query: {
    /** 管网维修记录列表分页查询条件 */
    query: CifrsGasChPipeRepairPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListCifrsGasChPipeRepairPageVO>(
    {
      url: `gas-supervise/basic/pipe/repair/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 维修记录详情接口
 *
 * @tags 维修记录详情, 燃气管网信息接口
 * @name GetBasicPipeRepairDetailByCmKid
 * @summary 维修记录详情
 * @request GET:/basic/pipe/repair/detail/{cmKid}
 * @response `200` `ResultCifrsGasChPipeRepairDetailVO` OK
 */
export const getBasicPipeRepairDetailByCmKid = (cmKid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultCifrsGasChPipeRepairDetailVO>(
    {
      url: `gas-supervise/basic/pipe/repair/detail/${cmKid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 管点特征点字典查询
 *
 * @tags 管点类型字典, 燃气管网信息接口
 * @name GetBasicPipePipepointType
 * @summary 管点类型字典
 * @request GET:/basic/pipe/pipepoint/type
 * @response `200` `ResultListCifrsPipeMnPipecodeDTO` OK
 */
export const getBasicPipePipepointType = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListCifrsPipeMnPipecodeDTO>(
    {
      url: `gas-supervise/basic/pipe/pipepoint/type`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 管点信息列表查询
 *
 * @tags 燃气管网信息接口, 管点信息列表
 * @name GetBasicPipePipepointPage
 * @summary 管点信息列表
 * @request GET:/basic/pipe/pipepoint/page
 * @response `200` `PageResultListCifrsPipeMnPipepointPageVO` OK
 */
export const getBasicPipePipepointPage = (
  query: {
    /** 管点信息列表分页查询条件 */
    query: CifrsPipeMnPipepointPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListCifrsPipeMnPipepointPageVO>(
    {
      url: `gas-supervise/basic/pipe/pipepoint/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 管点详情接口
 *
 * @tags 燃气管网信息接口, 管点详情
 * @name GetBasicPipePipepointDetailByCmKid
 * @summary 管点详情
 * @request GET:/basic/pipe/pipepoint/detail/{cmKid}
 * @response `200` `ResultCifrsPipeMnPipepointDetailVO` OK
 */
export const getBasicPipePipepointDetailByCmKid = (cmKid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultCifrsPipeMnPipepointDetailVO>(
    {
      url: `gas-supervise/basic/pipe/pipepoint/detail/${cmKid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 管网统计查询
 *
 * @tags 管网统计, 燃气管网信息接口
 * @name GetBasicPipePipelineStatistics
 * @summary 管网统计
 * @request GET:/basic/pipe/pipeline/statistics
 * @response `200` `ResultCifrsPipeStatisticsVO` OK
 */
export const getBasicPipePipelineStatistics = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultCifrsPipeStatisticsVO>(
    {
      url: `gas-supervise/basic/pipe/pipeline/statistics`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 管线信息列表查询
 *
 * @tags 管线信息列表, 燃气管网信息接口
 * @name GetBasicPipePipelinePage
 * @summary 管线信息列表
 * @request GET:/basic/pipe/pipeline/page
 * @response `200` `PageResultListCifrsPipeMnPipelinePageVO` OK
 */
export const getBasicPipePipelinePage = (
  query: {
    /** 管线信息列表分页查询条件 */
    query: CifrsPipeMnPipelinePageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListCifrsPipeMnPipelinePageVO>(
    {
      url: `gas-supervise/basic/pipe/pipeline/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 管线详情接口
 *
 * @tags 管线详情, 燃气管网信息接口
 * @name GetBasicPipePipelineDetail
 * @summary 管线详情
 * @request GET:/basic/pipe/pipeline/detail
 * @response `200` `ResultCifrsPipeMnPipelineDetailVO` OK
 */
export const getBasicPipePipelineDetail = (
  query: {
    /** @format int64 */
    cmKid: number;
    guid: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultCifrsPipeMnPipelineDetailVO>(
    {
      url: `gas-supervise/basic/pipe/pipeline/detail`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 管网统计查询
 *
 * @tags 管网统计, 燃气管网信息接口
 * @name GetBasicPipeIndexStatistics
 * @summary 管网统计
 * @request GET:/basic/pipe/index/statistics
 * @response `200` `ResultPipelineIndexStatisticsDTO` OK
 */
export const getBasicPipeIndexStatistics = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultPipelineIndexStatisticsDTO>(
    {
      url: `gas-supervise/basic/pipe/index/statistics`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 分页查询救援物资数据
 *
 * @tags 基础信息管理-救援物资管理, 救援物资管理接口
 * @name GetBasicMateriPage
 * @summary 救援物资分页
 * @request GET:/basic/materi/page
 * @response `200` `PageResultListEmresMnMateriPageVO` OK
 */
export const getBasicMateriPage = (
  query: {
    /** 救援物资分页查询条件 */
    query: EmresMnMateriPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListEmresMnMateriPageVO>(
    {
      url: `gas-supervise/basic/materi/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 导出救援物资数据
 *
 * @tags 基础信息管理-救援物资管理, 救援物资管理接口
 * @name GetBasicMateriExport
 * @summary 救援物资导出
 * @request GET:/basic/materi/export
 * @response `200` `ResultListEmresMnMateriExportVO` OK
 */
export const getBasicMateriExport = (
  query: {
    /** 救援物资分页查询条件 */
    query: EmresMnMateriPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListEmresMnMateriExportVO>(
    {
      url: `gas-supervise/basic/materi/export`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 查询单个救援物资数据
 *
 * @tags 基础信息管理-救援物资管理, 救援物资管理接口
 * @name GetBasicMateriDetailByCmKid
 * @summary 救援物资详情
 * @request GET:/basic/materi/detail/{cmKid}
 * @response `200` `ResultEmresMnMateriDetailVO` OK
 */
export const getBasicMateriDetailByCmKid = (cmKid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultEmresMnMateriDetailVO>(
    {
      url: `gas-supervise/basic/materi/detail/${cmKid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 物资基本信息
 *
 * @tags 基础信息管理-救援物资管理, 救援物资管理接口
 * @name GetBasicMateriBaseListByMaterhouseCode
 * @summary 物资基本信息
 * @request GET:/basic/materi/base/list/{materhouseCode}
 * @response `200` `ResultListEmresMnMateriBaseVO` OK
 */
export const getBasicMateriBaseListByMaterhouseCode = (materhouseCode: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListEmresMnMateriBaseVO>(
    {
      url: `gas-supervise/basic/materi/base/list/${materhouseCode}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 专家信息列表查询
 *
 * @tags 专家信息列表, 专家信息接口
 * @name GetBasicExpertPage
 * @summary 专家信息列表
 * @request GET:/basic/expert/page
 * @response `200` `PageResultListEmresMnExpertPageVO` OK
 */
export const getBasicExpertPage = (
  query: {
    /** 专家信息分页查询条件 */
    query: EmresMnExpertPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListEmresMnExpertPageVO>(
    {
      url: `gas-supervise/basic/expert/page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 导出专家信息接口
 *
 * @tags 导出专家信息, 专家信息接口
 * @name GetBasicExpertExport
 * @summary 导出专家信息
 * @request GET:/basic/expert/export
 * @response `200` `ResultListEmresMnExpertDetailVO` OK
 */
export const getBasicExpertExport = (
  query: {
    /** 专家信息分页查询条件 */
    query: EmresMnExpertPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListEmresMnExpertDetailVO>(
    {
      url: `gas-supervise/basic/expert/export`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 专家信息详情查询
 *
 * @tags 专家信息详情, 专家信息接口
 * @name GetBasicExpertDetailByCmKid
 * @summary 专家信息详情
 * @request GET:/basic/expert/detail/{cmKid}
 * @response `200` `ResultEmresMnExpertDetailVO` OK
 */
export const getBasicExpertDetailByCmKid = (cmKid: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultEmresMnExpertDetailVO>(
    {
      url: `gas-supervise/basic/expert/detail/${cmKid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 查询物资储备库列表
 *
 * @tags 物资储备库管理接口, 基础信息管理-物资储备库管理
 * @name GetBasicEmresWhouseDownListByMaterhouseCode
 * @summary 查询物资储备库列表
 * @request GET:/basic/emres/whouse/down/list/{materhouseCode}
 * @response `200` `ResultListEmresMnWhouseDownVO` OK
 */
export const getBasicEmresWhouseDownListByMaterhouseCode = (materhouseCode: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListEmresMnWhouseDownVO>(
    {
      url: `gas-supervise/basic/emres/whouse/down/list/${materhouseCode}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 范围内隐患列表 根据范围查询隐患列表
 *
 * @tags 范围内隐患列表
 * @name GetAroundRisk
 * @summary 根据范围查询隐患列表
 * @request GET:/around/risk
 * @response `200` `ResultListAroundRiskDTO` OK
 */
export const getAroundRisk = (
  query: {
    query: AroundRiskQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListAroundRiskDTO>(
    {
      url: `gas-supervise/around/risk`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 事故事件列表 事故事件列表
 *
 * @tags 事故事件列表, 事故事件管理接口
 * @name GetAccident
 * @summary 事故事件列表
 * @request GET:/accident
 * @response `200` `PageResultListAccidentVO` OK
 */
export const getAccident = (
  query: {
    /** 事故事件查询 */
    query: AccidentPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListAccidentVO>(
    {
      url: `gas-supervise/accident`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 设置挂牌督办 设置挂牌督办
 *
 * @tags 设置挂牌督办, 事故事件管理接口
 * @name GetAccidentSupervisionById
 * @summary 设置挂牌督办
 * @request GET:/accident/supervision/{id}
 * @response `200` `ResultVoid` OK
 */
export const getAccidentSupervisionById = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultVoid>(
    {
      url: `gas-supervise/accident/supervision/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 事故事件汇总 事故事件汇总
 *
 * @tags 事故事件汇总, 事故事件管理接口
 * @name GetAccidentSummary
 * @summary 事故事件汇总
 * @request GET:/accident/summary
 * @response `200` `ResultAccidentSummaryVO` OK
 */
export const getAccidentSummary = (
  query: {
    /** 事故事件查询 */
    query: AccidentPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultAccidentSummaryVO>(
    {
      url: `gas-supervise/accident/summary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 事故事件统计 事故事件统计
 *
 * @tags 事故事件统计, 事故事件管理接口
 * @name GetAccidentStatistics
 * @summary 事故事件统计
 * @request GET:/accident/statistics
 * @response `200` `ResultAccidentStatisticsVO` OK
 */
export const getAccidentStatistics = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultAccidentStatisticsVO>(
    {
      url: `gas-supervise/accident/statistics`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 事故事件详情 事故事件详情
 *
 * @tags 事故事件详情, 事故事件管理接口
 * @name GetAccidentDetailByAccidentId
 * @summary 事故事件详情
 * @request GET:/accident/detail/{accidentId}
 * @response `200` `ResultAccidentVO` OK
 */
export const getAccidentDetailByAccidentId = (accidentId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultAccidentVO>(
    {
      url: `gas-supervise/accident/detail/${accidentId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 删除安全检查主题及其下的检查项目,不可恢复,不可删除内置,可传入多个uid,逗号拼接
 *
 * @tags 安全检查
 * @name DeleteSafeCheckTopicByTid
 * @summary 删除安全检查主题
 * @request DELETE:/safe-check/topic/{tid}
 * @response `200` `ResultVoid` OK
 */
export const deleteSafeCheckTopicByTid = (tid: Array<number> | number, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/safe-check/topic/${tid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 根据检查项uid,删除主题下的安全检查项目,不可恢复
 *
 * @tags 安全检查
 * @name DeleteSafeCheckTopicItemByCheckItemId
 * @summary 删除安全检查-检查项目
 * @request DELETE:/safe-check/topic/item/{checkItemId}
 * @response `200` `ResultVoid` OK
 */
export const deleteSafeCheckTopicItemByCheckItemId = (checkItemId: number, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/safe-check/topic/item/${checkItemId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业人员资质证照信息管理接口 删除企业人员资质证照信息
 *
 * @tags 企业人员资质证照信息管理接口, 删除企业人员资质证照信息
 * @name DeletePerQualificationsDelByCode
 * @summary 删除企业人员资质证照信息
 * @request DELETE:/per/qualifications/del/{code}
 * @response `200` `ResultVoid` OK
 */
export const deletePerQualificationsDelByCode = (code: string, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/per/qualifications/del/${code}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 安全检查计划 安全检查计划-删除
 *
 * @tags 安全检查计划
 * @name DeleteHidangerGovCheckPlanByIds
 * @summary 安全检查计划-删除
 * @request DELETE:/hidanger/gov/check-plan/{ids}
 * @response `200` `ResultVoid` OK
 */
export const deleteHidangerGovCheckPlanByIds = (ids: Array<number> | number, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/check-plan/${ids}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 删除活动记录
 *
 * @tags 安全教育
 * @name DeleteGuideActivitiesByIds
 * @summary 删除活动记录
 * @request DELETE:/guide/activities/{ids}
 * @response `200` `ResultVoid` OK
 */
export const deleteGuideActivitiesByIds = (ids: Array<number> | number, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/guide/activities/${ids}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 政府职能部门管理 根据id删除部门
 *
 * @tags 政府职能部门管理
 * @name DeleteGovDeptById
 * @summary 根据id删除部门
 * @request DELETE:/gov/dept/{id}
 * @response `200` `ResultVoid` OK
 */
export const deleteGovDeptById = (id: number, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/gov/dept/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 政府职能部门管理 删除部门用户
 *
 * @tags 政府职能部门管理
 * @name DeleteGovDeptUserById
 * @summary 删除部门用户
 * @request DELETE:/gov/dept/user/{id}
 * @response `200` `ResultVoid` OK
 */
export const deleteGovDeptUserById = (id: Array<number> | number, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/gov/dept/user/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 删除用气用户信息 删除用气用户信息
 *
 * @tags 删除用气用户信息, 用气用户信息管理接口
 * @name DeleteGasUsersDelByCode
 * @summary 删除用气用户信息
 * @request DELETE:/gas/users/del/{code}
 * @response `200` `ResultVoid` OK
 */
export const deleteGasUsersDelByCode = (code: string, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/gas/users/del/${code}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业场站信息管理 删除场站信息
 *
 * @tags 企业场站信息管理
 * @name DeleteGasStationById
 * @summary 删除场站信息
 * @request DELETE:/gas/station/{id}
 * @response `200` `ResultVoid` OK
 */
export const deleteGasStationById = (id: number, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/gas/station/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 删除企业
 *
 * @tags 企业信息管理
 * @name DeleteEnterpriseInfoByIds
 * @summary 删除企业
 * @request DELETE:/enterprise/info/{ids}
 * @response `200` `ResultVoid` OK
 */
export const deleteEnterpriseInfoByIds = (ids: Array<string> | string, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/enterprise/info/${ids}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 删除草稿
 *
 * @tags 企业信息管理
 * @name DeleteEnterpriseCommonDraftDelByType
 * @summary 删除草稿
 * @request DELETE:/enterprise/common/draft/del/{type}
 * @response `200` `ResultVoid` OK
 */
export const deleteEnterpriseCommonDraftDelByType = (type: string, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/enterprise/common/draft/del/${type}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业基础底数 企业基础底数删除
 *
 * @tags 企业基础底数, 企业基础底数删除
 * @name DeleteEnterpriseBaseDataDelete
 * @summary 企业基础底数删除
 * @request DELETE:/enterprise/base/data/delete
 * @response `200` `ResultVoid` OK
 */
export const deleteEnterpriseBaseDataDelete = (
  query: {
    ids: Array<string> | string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/enterprise/base/data/delete`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通知公告控制层 删除公告
 *
 * @tags 通知公告控制层
 * @name DeleteBulletinDelById
 * @summary 删除公告
 * @request DELETE:/bulletin/del/{id}
 * @response `200` `ResultVoid` OK
 */
export const deleteBulletinDelById = (公告id: string, id: string, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/bulletin/del/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
