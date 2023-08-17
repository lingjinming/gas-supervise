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
  JsonNode,
  ResultEnterpriseInfoImportVO,
  ResultListDictionaryItem,
  ResultString,
  ResultVoid,
} from "./data-contracts";

/**
 * 批量导入 预导入数据检查
 *
 * @tags 批量导入
 * @name ImportEnterprise
 * @summary 预导入数据检查
 * @request POST:/enterprise/common/pre-import/{type}
 * @response `200` `ResultEnterpriseInfoImportVO` OK
 */
export const importEnterprise = (
  type: "ENTERPRISE_INFO_IMPORT" | "GAS_USER_IMPORT" | "PER_QUA_IMPORT",
  data: FormData,
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultEnterpriseInfoImportVO>(
    {
      url: `gas-supervise/enterprise/common/pre-import/${type}`,
      data: data,
      header: { "Content-Type": "multipart/form-data" },
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 获取草稿
 *
 * @tags 企业信息管理
 * @name GetDraftByType
 * @summary 获取草稿
 * @request GET:/enterprise/common/draft/{type}
 * @response `200` `ResultString` OK
 */
export const getDraftByType = (type: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultString>(
    {
      url: `gas-supervise/enterprise/common/draft/${type}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 保存草稿
 *
 * @tags 企业信息管理
 * @name DelDraft
 * @summary 保存草稿
 * @request POST:/enterprise/common/draft/{type}
 * @response `200` `ResultVoid` OK
 */
export const delDraft = (type: string, data: JsonNode, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/enterprise/common/draft/${type}`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 导出模板 按模板类型下载模板
 *
 * @tags 导出模板
 * @name DownloadTemplate
 * @summary 按模板类型下载模板
 * @request GET:/enterprise/common/template/{type}
 * @response `200` `void` OK
 */
export const downloadTemplate = (
  type: "ENTERPRISE_INFO_IMPORT" | "GAS_USER_IMPORT" | "PER_QUA_IMPORT",
  params: PerRequestOptions = {},
) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/enterprise/common/template/${type}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 获取企业下拉选
 *
 * @tags 企业信息管理
 * @name GetEnterpriseSelection
 * @summary 获取企业下拉选
 * @request GET:/enterprise/common/selection
 * @response `200` `ResultListDictionaryItem` OK
 */
export const getEnterpriseSelection = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListDictionaryItem>(
    {
      url: `gas-supervise/enterprise/common/selection`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业信息管理 删除草稿
 *
 * @tags 企业信息管理
 * @name DelDraft1
 * @summary 删除草稿
 * @request DELETE:/enterprise/common/draft/del/{type}
 * @response `200` `ResultVoid` OK
 */
export const delDraft1 = (type: string, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/enterprise/common/draft/del/${type}`,
    },
    { ...params, isTransformResponse: false },
  );
};
