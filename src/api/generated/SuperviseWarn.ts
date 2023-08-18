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

import type { PageResultListWarnPageVO, ResultWarnSummaryVO, WarnPageRequest } from "./data-contracts";

/**
 * 监管端预警管理接口 预警列表
 *
 * @tags 监管端预警管理接口, 预警列表
 * @name WarnPage
 * @summary 预警列表
 * @request GET:/supervise/warn
 * @response `200` `PageResultListWarnPageVO` OK
 */
export const warnPage = (
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
 * @name WarnSummary
 * @summary 预警信息汇总
 * @request GET:/supervise/warn/summary
 * @response `200` `ResultWarnSummaryVO` OK
 */
export const warnSummary = (
  query: {
    /** 监管预警信息分页查询请求 */
    request: WarnPageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultWarnSummaryVO>(
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
 * @name WarnHistorySummary
 * @summary 历史预警信息汇总
 * @request GET:/supervise/warn/summary/history
 * @response `200` `ResultWarnSummaryVO` OK
 */
export const warnHistorySummary = (
  query: {
    /** 监管预警信息分页查询请求 */
    request: WarnPageRequest;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultWarnSummaryVO>(
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
 * @name WarnHistoryPage
 * @summary 历史预警列表
 * @request GET:/supervise/warn/history
 * @response `200` `PageResultListWarnPageVO` OK
 */
export const warnHistoryPage = (
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
