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
  ResultAllOnlineRateVO,
  ResultListAlarmObjTypeSummaryVO,
  ResultListAlarmSumVO,
  ResultListDeviceStateSummaryVO,
  ResultListMonitorDeviceSumVO,
  ResultListOrgDeviceRateVO,
  StatisticalRequest,
} from "./data-contracts";

/**
 * 监管统计接口 设备场所在线率
 *
 * @tags 监管统计接口, 设备场所在线率
 * @name ObjTypeOnlineRate
 * @summary 设备场所在线率
 * @request GET:/supervise/statistical/monitor/type/online/rate
 * @response `200` `ResultListDeviceStateSummaryVO` OK
 */
export const objTypeOnlineRate = (
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
 * @name MonitorDeviceSummary
 * @summary 接入监测设备汇总
 * @request GET:/supervise/statistical/monitor/device/summary
 * @response `200` `ResultListMonitorDeviceSumVO` OK
 */
export const monitorDeviceSummary = (
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
 * @name DeviceSource
 * @summary 监测设备接入来源在线率
 * @request GET:/supervise/statistical/monitor/device/source
 * @response `200` `ResultListDeviceStateSummaryVO` OK
 */
export const deviceSource = (params: PerRequestOptions = {}) => {
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
 * @name DeviceSort
 * @summary 企业监测设备在线率排名
 * @request GET:/supervise/statistical/monitor/device/sort
 * @response `200` `ResultListOrgDeviceRateVO` OK
 */
export const deviceSort = (params: PerRequestOptions = {}) => {
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
 * @name DeviceIndex
 * @summary 监测设备类别在线率
 * @request GET:/supervise/statistical/monitor/device/index
 * @response `200` `ResultListDeviceStateSummaryVO` OK
 */
export const deviceIndex = (params: PerRequestOptions = {}) => {
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
 * @name AllOnlineRate
 * @summary 设备总的在线率
 * @request GET:/supervise/statistical/monitor/all/online/rate
 * @response `200` `ResultAllOnlineRateVO` OK
 */
export const allOnlineRate = (
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
 * 监管统计接口 报警数量统计
 *
 * @tags 监管统计接口, 报警数量统计
 * @name AlarmSummary
 * @summary 报警数量统计
 * @request GET:/supervise/statistical/alarm/objType/summary
 * @response `200` `ResultListAlarmObjTypeSummaryVO` OK
 */
export const alarmSummary = (params: PerRequestOptions = {}) => {
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
 * @name HistoryAlarmTypeSummary
 * @summary 历史报警分析-报警类型
 * @request GET:/supervise/statistical/alarm/history/type
 * @response `200` `ResultListAlarmSumVO` OK
 */
export const historyAlarmTypeSummary = (params: PerRequestOptions = {}) => {
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
 * @name HistoryAlarmSummary
 * @summary 历史报警分析-报警场所
 * @request GET:/supervise/statistical/alarm/history/summary
 * @response `200` `ResultListAlarmSumVO` OK
 */
export const historyAlarmSummary = (params: PerRequestOptions = {}) => {
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
 * @name HistoryAlarmSourceSummary
 * @summary 历史报警分析-报警来源
 * @request GET:/supervise/statistical/alarm/history/source
 * @response `200` `ResultListAlarmSumVO` OK
 */
export const historyAlarmSourceSummary = (params: PerRequestOptions = {}) => {
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
 * @name CureAlarmTypeSummary
 * @summary 当前报警类型
 * @request GET:/supervise/statistical/alarm/cure/type
 * @response `200` `ResultListAlarmSumVO` OK
 */
export const cureAlarmTypeSummary = (params: PerRequestOptions = {}) => {
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
 * @name CureAlarmSummary
 * @summary 当前报警场所统计
 * @request GET:/supervise/statistical/alarm/cure/summary
 * @response `200` `ResultListAlarmSumVO` OK
 */
export const cureAlarmSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListAlarmSumVO>(
    {
      url: `gas-supervise/supervise/statistical/alarm/cure/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
