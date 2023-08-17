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
  HidangerFactorsSummaryPageQuery,
  PageResultListHidangerFactorsSummaryPageVO,
  ResultBoolean,
  ResultHidangerFactorsSummaryVO,
  ResultRiskFactorDetailVO,
  ResultString,
  ResultVoid,
  RiskComputedCallbackDTO,
  RiskIdsReqDTO,
  TypePageParamsType,
  TypeSummaryParamsType,
} from "./data-contracts";

/**
 * 风险要素辨识 风险转为隐患
 *
 * @tags 风险要素辨识
 * @name Risk2HiDanger
 * @summary 风险转为隐患
 * @request POST:/hidanger/factors/dangers
 * @response `200` `ResultVoid` OK
 */
export const risk2HiDanger = (data: RiskIdsReqDTO, params: PerRequestOptions = {}) => {
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
 * @name ParseCvsFile
 * @summary 燃气管网风险解析风险评估cvs文件
 * @request POST:/hidanger/factors/callback/parse
 * @response `200` `ResultBoolean` OK
 */
export const parseCvsFile = (data: RiskComputedCallbackDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultBoolean>(
    {
      url: `gas-supervise/hidanger/factors/callback/parse`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 风险要素辨识 风险要素类型汇总-统计
 *
 * @tags 风险要素辨识
 * @name TypeSummary
 * @summary 风险要素类型汇总-统计
 * @request GET:/hidanger/factors/summary
 * @response `200` `ResultHidangerFactorsSummaryVO` OK
 */
export const typeSummary = (
  query: {
    /** 燃气管网风险要素类型 */
    type: TypeSummaryParamsType;
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
 * @name TypePage
 * @summary 风险要素类型汇总-分页查询
 * @request GET:/hidanger/factors/page
 * @response `200` `PageResultListHidangerFactorsSummaryPageVO` OK
 */
export const typePage = (
  query: {
    /** 燃气管网风险要素类型 */
    type: TypePageParamsType;
    query: HidangerFactorsSummaryPageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListHidangerFactorsSummaryPageVO>(
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
 * @name OverviewSummary
 * @summary 风险要素汇总-统计
 * @request GET:/hidanger/factors/overview/summary
 * @response `200` `ResultHidangerFactorsSummaryVO` OK
 */
export const overviewSummary = (params: PerRequestOptions = {}) => {
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
 * @name SummaryPage
 * @summary 风险要素汇总-分页查询
 * @request GET:/hidanger/factors/overview/page
 * @response `200` `PageResultListHidangerFactorsSummaryPageVO` OK
 */
export const summaryPage = (
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
 * @name DownloadCvsFile
 * @summary 初始化风险要素辨识
 * @request GET:/hidanger/factors/init
 * @response `200` `ResultString` OK
 */
export const downloadCvsFile = (
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
 * @description 防止数据自动同步失败的补救接口
 *
 * @tags 管网风险
 * @name InternalMethod
 * @summary 备用接口,线上数据修复
 * @request GET:/hidanger/factors/init/retry
 * @response `200` `ResultString` OK
 */
export const internalMethod = (
  query: {
    type: string;
    fileName: string;
    date: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultString>(
    {
      url: `gas-supervise/hidanger/factors/init/retry`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 风险要素辨识 风险要素详情
 *
 * @tags 风险要素辨识
 * @name FactorDetail
 * @summary 风险要素详情
 * @request GET:/hidanger/factors/detail/{uid}
 * @response `200` `ResultRiskFactorDetailVO` OK
 */
export const factorDetail = (uid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultRiskFactorDetailVO>(
    {
      url: `gas-supervise/hidanger/factors/detail/${uid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
