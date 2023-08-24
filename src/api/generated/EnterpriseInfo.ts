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
  EnterpriseBatchImportDTO,
  EnterpriseCreateDTO,
  EnterpriseInfoPageQuery,
  PageResultListEnterpriseInfoPageVO,
  ResultEnterpriseDetailVO,
  ResultEnterpriseSummaryVO,
  ResultVoid,
} from "./data-contracts";

/**
 * 企业信息管理 查看企业详情
 *
 * @tags 企业信息管理
 * @name GetEnterpriseInfo
 * @summary 查看企业详情
 * @request GET:/enterprise/info/{id}
 * @response `200` `ResultEnterpriseDetailVO` OK
 */
export const getEnterpriseInfo = (id: number, params: PerRequestOptions = {}) => {
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
 * @name UpdateEnterpriseInfo
 * @summary 编辑企业
 * @request PUT:/enterprise/info/{id}
 * @response `200` `ResultVoid` OK
 */
export const updateEnterpriseInfo = (id: number, data: EnterpriseCreateDTO, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/enterprise/info/${id}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 创建企业
 *
 * @tags 企业信息管理
 * @name CreateEnterpriseInfo
 * @summary 创建企业
 * @request POST:/enterprise/info
 * @response `200` `ResultVoid` OK
 */
export const createEnterpriseInfo = (data: EnterpriseCreateDTO, params: PerRequestOptions = {}) => {
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
 * @name BatchImportEnterpriseInfo
 * @summary 批量导入
 * @request POST:/enterprise/info/import
 * @response `200` `ResultVoid` OK
 */
export const batchImportEnterpriseInfo = (data: EnterpriseBatchImportDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/info/import`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 企业信息统计
 *
 * @tags 企业信息管理
 * @name EnterpriseSummary
 * @summary 企业信息统计
 * @request GET:/enterprise/info/summary
 * @response `200` `ResultEnterpriseSummaryVO` OK
 */
export const enterpriseSummary = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultEnterpriseSummaryVO>(
    {
      url: `gas-supervise/enterprise/info/summary`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 分页/导出企业列表
 *
 * @tags 企业信息管理
 * @name EnterpriseInfoPage
 * @summary 分页/导出企业列表
 * @request GET:/enterprise/info/page
 * @response `200` `PageResultListEnterpriseInfoPageVO` OK
 */
export const enterpriseInfoPage = (
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
 * 企业信息管理 删除企业
 *
 * @tags 企业信息管理
 * @name DeleteEnterpriseInfo
 * @summary 删除企业
 * @request DELETE:/enterprise/info/{ids}
 * @response `200` `ResultVoid` OK
 */
export const deleteEnterpriseInfo = (ids: string[], params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/enterprise/info/${ids}`,
    },
    { ...params, isTransformResponse: false },
  );
};
