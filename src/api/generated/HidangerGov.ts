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
  HiDangerCheckPageQuery,
  HiDangerCheckPlanCreateDTO,
  HiDangerCheckPlanUpdateDTO,
  HidangerCreateDTO,
  HidangerOrgPageQuery,
  HiDangerSendHandleOrderDTO,
  LeaderCommentCreateDTO,
  PageResultListHiDangerCheckPageVO,
  PageResultListHidangerOrgPageVO,
  ResultHidangerCheckPlanDetailVO,
  ResultHiDangerCheckPlanSummaryVO,
  ResultListCheckPlanRelDangerVO,
  ResultListHiDangerCheckPlanSelectionsDTO,
  ResultOrgHidangerTypeSummaryDTO,
  ResultVoid,
  Risk2DangerDTO,
  RiskIdsReqDTO,
} from "./data-contracts";

/**
 * 监管单位隐患管理 编辑隐患
 *
 * @tags 监管单位隐患管理
 * @name UpdateHidanger1
 * @summary 编辑隐患
 * @request PUT:/hidanger/gov/{uid}
 * @response `200` `ResultVoid` OK
 */
export const updateHidanger1 = (uid: number, data: HidangerCreateDTO, params: PerRequestOptions = {}) => {
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
 * @name CheckPlanDetail
 * @summary 安全检查计划-详情
 * @request GET:/hidanger/gov/check-plan/{id}
 * @response `200` `ResultHidangerCheckPlanDetailVO` OK
 */
export const checkPlanDetail = (id: number, params: PerRequestOptions = {}) => {
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
 * @name UpdateCheckPlan
 * @summary 安全检查计划-更新
 * @request PUT:/hidanger/gov/check-plan/{id}
 * @response `200` `ResultVoid` OK
 */
export const updateCheckPlan = (id: number, data: HiDangerCheckPlanUpdateDTO, params: PerRequestOptions = {}) => {
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
 * @name DeleteData
 * @summary 隐患审核
 * @request PUT:/hidanger/gov/audit
 * @response `200` `ResultVoid` OK
 */
export const deleteData = (data: Risk2DangerDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/audit`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管单位隐患管理 新增隐患
 *
 * @tags 监管单位隐患管理
 * @name CreateHidanger1
 * @summary 新增隐患
 * @request POST:/hidanger/gov
 * @response `200` `ResultVoid` OK
 */
export const createHidanger1 = (data: HidangerCreateDTO, params: PerRequestOptions = {}) => {
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
 * @name Urge
 * @summary 隐患催办
 * @request POST:/hidanger/gov/urge
 * @response `200` `ResultVoid` OK
 */
export const urge = (data: RiskIdsReqDTO, params: PerRequestOptions = {}) => {
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
 * @name Supervise
 * @summary 挂牌督办
 * @request POST:/hidanger/gov/supervise
 * @response `200` `ResultVoid` OK
 */
export const supervise = (data: RiskIdsReqDTO, params: PerRequestOptions = {}) => {
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
 * @name Push
 * @summary 上报省平台
 * @request POST:/hidanger/gov/report
 * @response `200` `ResultVoid` OK
 */
export const push = (data: Risk2DangerDTO, params: PerRequestOptions = {}) => {
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
 * @name LeaderComment
 * @summary 创建领导批示
 * @request POST:/hidanger/gov/leader-comment
 * @response `200` `ResultVoid` OK
 */
export const leaderComment = (data: LeaderCommentCreateDTO, params: PerRequestOptions = {}) => {
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
 * @name SendHandleOrder
 * @summary 发送整改单
 * @request POST:/hidanger/gov/handle-order
 * @response `200` `ResultVoid` OK
 */
export const sendHandleOrder = (data: HiDangerSendHandleOrderDTO, params: PerRequestOptions = {}) => {
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
 * @name CheckPlanCreate
 * @summary 安全检查计划-创建
 * @request POST:/hidanger/gov/check-plan
 * @response `200` `ResultVoid` OK
 */
export const checkPlanCreate = (data: HiDangerCheckPlanCreateDTO, params: PerRequestOptions = {}) => {
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
 * @name FinishCheckPlan
 * @summary 安全检查计划-标记已完成
 * @request POST:/hidanger/gov/check-plan/finish/{id}
 * @response `200` `ResultVoid` OK
 */
export const finishCheckPlan = (id: number, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/check-plan/finish/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 监管单位隐患管理 隐患统计
 *
 * @tags 监管单位隐患管理
 * @name Summary1
 * @summary 隐患统计
 * @request GET:/hidanger/gov/summary
 * @response `200` `ResultOrgHidangerTypeSummaryDTO` OK
 */
export const summary1 = (params: PerRequestOptions = {}) => {
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
 * @name Page1
 * @summary 隐患分页/导出
 * @request GET:/hidanger/gov/page
 * @response `200` `PageResultListHidangerOrgPageVO` OK
 */
export const page1 = (
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
 * @name HandleOrderExport
 * @summary 批量导出整改单
 * @request GET:/hidanger/gov/handle-order/export
 * @response `200` `FormData` OK
 */
export const handleOrderExport = (
  query: {
    ids: number[];
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
 * @name CheckPlanRelDangers
 * @summary 安全检查计划关联的未发送过整改单的隐患列表
 * @request GET:/hidanger/gov/check-plan/{planCode}/rel-dangers
 * @response `200` `ResultListCheckPlanRelDangerVO` OK
 */
export const checkPlanRelDangers = (planCode: string, params: PerRequestOptions = {}) => {
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
 * @name PlanSummary
 * @summary 安全检查计划-统计
 * @request GET:/hidanger/gov/check-plan/summary
 * @response `200` `ResultHiDangerCheckPlanSummaryVO` OK
 */
export const planSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultHiDangerCheckPlanSummaryVO>(
    {
      url: `gas-supervise/hidanger/gov/check-plan/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 政府创建隐患的时候选择对应企业,关联出企业的检查计划
 *
 * @tags 安全检查计划
 * @name CheckPlanSelections
 * @summary 安全检查计划-下拉选项
 * @request GET:/hidanger/gov/check-plan/selections
 * @response `200` `ResultListHiDangerCheckPlanSelectionsDTO` OK
 */
export const checkPlanSelections = (
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
 * @name CheckPlanPage
 * @summary 安全检查计划-分页
 * @request GET:/hidanger/gov/check-plan/page
 * @response `200` `PageResultListHiDangerCheckPageVO` OK
 */
export const checkPlanPage = (
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
 * 安全检查计划 安全检查计划-删除
 *
 * @tags 安全检查计划
 * @name DeleteCheckPlan
 * @summary 安全检查计划-删除
 * @request DELETE:/hidanger/gov/check-plan/{ids}
 * @response `200` `ResultVoid` OK
 */
export const deleteCheckPlan = (ids: number[], params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/hidanger/gov/check-plan/${ids}`,
    },
    { ...params, isTransformResponse: false },
  );
};
