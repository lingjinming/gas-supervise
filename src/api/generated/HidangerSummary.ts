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

import type { ResultListRiskStatisticsVO, RiskStatisticsQuery } from "./data-contracts";

/**
 * 风险隐患-隐患管理-隐患统计 隐患整改单汇总
 *
 * @tags 风险隐患-隐患管理-隐患统计, 隐患整改单汇总
 * @name RiskUpdate
 * @summary 隐患整改单汇总
 * @request GET:/hidanger/summary/update
 * @response `200` `ResultListRiskStatisticsVO` OK
 */
export const riskUpdate = (
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
 * @name RiskSource
 * @summary 隐患来源汇总
 * @request GET:/hidanger/summary/source
 * @response `200` `ResultListRiskStatisticsVO` OK
 */
export const riskSource = (
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
 * @name RiskScreening
 * @summary 隐患排查汇总
 * @request GET:/hidanger/summary/screening
 * @response `200` `ResultListRiskStatisticsVO` OK
 */
export const riskScreening = (
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
 * @name RiskLevel
 * @summary 隐患级别汇总
 * @request GET:/hidanger/summary/level
 * @response `200` `ResultListRiskStatisticsVO` OK
 */
export const riskLevel = (
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
 * @name RiskLevelTrend
 * @summary 隐患级别趋势汇总
 * @request GET:/hidanger/summary/level/trend
 * @response `200` `ResultListRiskStatisticsVO` OK
 */
export const riskLevelTrend = (
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
