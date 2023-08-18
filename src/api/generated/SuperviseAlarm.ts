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
  AlarmPageRequest,
  PageResultListAlarmPageVO,
  ResultAlarmSummaryVO,
  ResultListDisposeTraceVO,
  ResultListHistoryAlarmVO,
} from "./data-contracts";

/**
 * 监管端报警管理接口 报警列表
 *
 * @tags 监管端报警管理接口, 报警列表
 * @name AlarmPage
 * @summary 报警列表
 * @request GET:/supervise/alarm
 * @response `200` `PageResultListAlarmPageVO` OK
 */
export const alarmPage = (
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
 * @name AlarmSummary1
 * @summary 报警信息汇总
 * @request GET:/supervise/alarm/summary
 * @response `200` `ResultAlarmSummaryVO` OK
 */
export const alarmSummary1 = (
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
 * @name AlarmHistorySummary
 * @summary 历史报警信息汇总
 * @request GET:/supervise/alarm/summary/history
 * @response `200` `ResultAlarmSummaryVO` OK
 */
export const alarmHistorySummary = (
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
 * 监管端报警管理接口 历史报警列表
 *
 * @tags 监管端报警管理接口, 历史报警列表
 * @name AlarmHistoryPage
 * @summary 历史报警列表
 * @request GET:/supervise/alarm/history
 * @response `200` `PageResultListAlarmPageVO` OK
 */
export const alarmHistoryPage = (
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
 * @name AlarmHistoryRecord
 * @summary 历史报警记录
 * @request GET:/supervise/alarm/history/record/{code}
 * @response `200` `ResultListHistoryAlarmVO` OK
 */
export const alarmHistoryRecord = (code: string, params: PerRequestOptions = {}) => {
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
 * @name AlarmDispose
 * @summary 设备报警、预警处置流程
 * @request GET:/supervise/alarm/dispose/{alarmId}
 * @response `200` `ResultListDisposeTraceVO` OK
 */
export const alarmDispose = (alarmId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListDisposeTraceVO>(
    {
      url: `gas-supervise/supervise/alarm/dispose/${alarmId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
