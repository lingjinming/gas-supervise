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
  MonitorCurveQuery,
  MonitorRequest,
  PageResultListMonitorPageVO,
  PerimeterSearchRequest,
  ResultListMonitorSummaryVO,
  ResultMonitorCurveVO,
  ResultPerimeterSearchVO,
  ResultSuperviseObjDetailVO,
  ResultVoid,
} from "./data-contracts";

/**
 * 监管端报警管理接口 实时监测列表
 *
 * @tags 监管端报警管理接口, 实时监测列表
 * @name MonitorPage
 * @summary 实时监测列表
 * @request GET:/supervise/monitor
 * @response `200` `PageResultListMonitorPageVO` OK
 */
export const monitorPage = (
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
 * @name MonitorSummary
 * @summary 实时监测汇总
 * @request GET:/supervise/monitor/summary
 * @response `200` `ResultListMonitorSummaryVO` OK
 */
export const monitorSummary = (
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
 * 监管端报警管理接口 周边搜索
 *
 * @tags 监管端报警管理接口, 周边搜索
 * @name PerimeterSearch
 * @summary 周边搜索
 * @request GET:/supervise/monitor/perimeter
 * @response `200` `ResultPerimeterSearchVO` OK
 */
export const perimeterSearch = (
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
 * 监管端报警管理接口 初始化AIoT设备
 *
 * @tags 监管端报警管理接口, 初始化AIoT设备
 * @name InitAiot
 * @summary 初始化AIoT设备
 * @request GET:/supervise/monitor/init/aiot
 * @response `200` `ResultVoid` OK
 */
export const initAiot = (params: PerRequestOptions = {}) => {
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
 * @name DeviceDetail
 * @summary 设备报警详情
 * @request GET:/supervise/monitor/device/detail/{eqptId}
 * @response `200` `ResultSuperviseObjDetailVO` OK
 */
export const deviceDetail = (eqptId: string, params: PerRequestOptions = {}) => {
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
 * @name MonitorCurve
 * @summary 设备监测曲线
 * @request GET:/supervise/monitor/curve
 * @response `200` `ResultMonitorCurveVO` OK
 */
export const monitorCurve = (
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
