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
  IDsRequestDTO,
  PageResultListThirdBuildPageVO,
  ResultExcelImportValidationVO,
  ResultString,
  ResultThirdBuildDetailVO,
  ResultThirdBuildHandleFlowVO,
  ResultThirdBuildSummaryVO,
  ResultVoid,
  ThirdBuildBatchImportDTO,
  ThirdBuildCreateDTO,
  ThirdBuildGuardCreateDTO,
  ThirdBuildPageQuery,
  ThirdBuildReportCreateDTO,
  ThirdBuildUpdateDTO,
} from "./data-contracts";

/**
 * 三方施工管理 查看三方施工记录详情
 *
 * @tags 三方施工管理
 * @name Detail
 * @summary 查看三方施工记录详情
 * @request GET:/third/build/{id}
 * @response `200` `ResultThirdBuildDetailVO` OK
 */
export const detail = (id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultThirdBuildDetailVO>(
    {
      url: `gas-supervise/third/build/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 更新三方施工记录
 *
 * @tags 三方施工管理
 * @name UpdateThirdBuildInfo
 * @summary 更新三方施工记录
 * @request PUT:/third/build/{id}
 * @response `200` `ResultVoid` OK
 */
export const updateThirdBuildInfo = (id: string, data: ThirdBuildUpdateDTO, params: PerRequestOptions = {}) => {
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
 * @name Complete
 * @summary 施工完工
 * @request PUT:/third/build/complete
 * @response `200` `ResultVoid` OK
 */
export const complete = (data: IDsRequestDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/third/build/complete`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 创建三方施工记录
 *
 * @tags 三方施工管理
 * @name CheckThirdBuildInfo
 * @summary 创建三方施工记录
 * @request POST:/third/build
 * @response `200` `ResultString` OK
 */
export const checkThirdBuildInfo = (data: ThirdBuildCreateDTO, params: PerRequestOptions = {}) => {
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
 * @name CreateThirdBuildReport
 * @summary 上传交底文件
 * @request POST:/third/build/{thirdBuildId}/report
 * @response `200` `ResultVoid` OK
 */
export const createThirdBuildReport = (
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
 * @name CreateThirdBuildGuard
 * @summary 上传看护记录
 * @request POST:/third/build/{thirdBuildId}/guard
 * @response `200` `ResultVoid` OK
 */
export const createThirdBuildGuard = (
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
 * @name ThirdBuildImportCheck
 * @summary 预导入数据检查
 * @request POST:/third/build/pre-import
 * @response `200` `ResultExcelImportValidationVO` OK
 */
export const thirdBuildImportCheck = (data: FormData, params: PerRequestOptions = {}) => {
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
 * @name BatchImport
 * @summary 批量导入
 * @request POST:/third/build/import
 * @response `200` `ResultVoid` OK
 */
export const batchImport = (data: ThirdBuildBatchImportDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/third/build/import`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 处置流程
 *
 * @tags 三方施工管理
 * @name HandleFlow
 * @summary 处置流程
 * @request GET:/third/build/{id}/flow
 * @response `200` `ResultThirdBuildHandleFlowVO` OK
 */
export const handleFlow = (id: string, params: PerRequestOptions = {}) => {
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
 * @name ExportPointHistoryData
 * @summary 三方施工管理
 * @request GET:/third/build/template
 * @response `200` `void` OK
 */
export const exportPointHistoryData = (params: PerRequestOptions = {}) => {
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
 * @name Summary
 * @summary 数量统计
 * @request GET:/third/build/summary
 * @response `200` `ResultThirdBuildSummaryVO` OK
 */
export const summary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultThirdBuildSummaryVO>(
    {
      url: `gas-supervise/third/build/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 三方施工管理 分页查询三方施工记录
 *
 * @tags 三方施工管理
 * @name PageQuery
 * @summary 分页查询三方施工记录
 * @request GET:/third/build/page
 * @response `200` `PageResultListThirdBuildPageVO` OK
 */
export const pageQuery = (
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
