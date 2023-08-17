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
  HidangerCreateDTO,
  HidangerDispatchDTO,
  HidangerOrgPageQuery,
  HidangerStatementDTO,
  OrgHidangerHandleDTO,
  PageResultListHidangerOrgPageVO,
  ResultOrgHidangerTypeSummaryDTO,
  ResultVoid,
  RiskIdsReqDTO,
} from "./data-contracts";

/**
 * 企业隐患管理 编辑隐患
 *
 * @tags 企业隐患管理
 * @name UpdateHidanger
 * @summary 编辑隐患
 * @request PUT:/hidanger/org/{uid}
 * @response `200` `ResultVoid` OK
 */
export const updateHidanger = (uid: number, data: HidangerCreateDTO, params: PerRequestOptions = {}) => {
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
 * @name Statement
 * @summary 隐患结单
 * @request PUT:/hidanger/org/statement/{uid}
 * @response `200` `ResultVoid` OK
 */
export const statement = (uid: number, data: HidangerStatementDTO, params: PerRequestOptions = {}) => {
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
 * @name Handle
 * @summary 隐患整改
 * @request PUT:/hidanger/org/handle/{uid}
 * @response `200` `ResultVoid` OK
 */
export const handle = (uid: number, data: OrgHidangerHandleDTO, params: PerRequestOptions = {}) => {
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
 * @name Complete1
 * @summary 隐患消除
 * @request PUT:/hidanger/org/complete
 * @response `200` `ResultVoid` OK
 */
export const complete1 = (data: RiskIdsReqDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/hidanger/org/complete`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业隐患管理 新增隐患
 *
 * @tags 企业隐患管理
 * @name CreateHidanger
 * @summary 新增隐患
 * @request POST:/hidanger/org
 * @response `200` `ResultVoid` OK
 */
export const createHidanger = (data: HidangerCreateDTO, params: PerRequestOptions = {}) => {
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
 * @name Dispatch
 * @summary 隐患派单
 * @request POST:/hidanger/org/dispatch
 * @response `200` `ResultVoid` OK
 */
export const dispatch = (data: HidangerDispatchDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/org/dispatch`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业隐患管理 隐患统计
 *
 * @tags 企业隐患管理
 * @name Summary
 * @summary 隐患统计
 * @request GET:/hidanger/org/summary
 * @response `200` `ResultOrgHidangerTypeSummaryDTO` OK
 */
export const summary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultOrgHidangerTypeSummaryDTO>(
    {
      url: `gas-supervise/hidanger/org/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业隐患管理 隐患分页/导出
 *
 * @tags 企业隐患管理
 * @name Page
 * @summary 隐患分页/导出
 * @request GET:/hidanger/org/page
 * @response `200` `PageResultListHidangerOrgPageVO` OK
 */
export const page = (
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
