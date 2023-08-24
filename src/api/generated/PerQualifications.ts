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
  AddPerQualificationsQuery,
  ImportPerQualificationsQuery,
  PageResultListPerCertificatePageVO,
  PerCertificatePageQuery,
  ResultPerCertificateCountVO,
  ResultPerCertificateDetailVO,
  ResultVoid,
  UpdatePerQualificationsQuery,
} from "./data-contracts";

/**
 * 企业人员资质证照信息管理接口 修改企业人员资质证照信息
 *
 * @tags 企业人员资质证照信息管理接口, 修改企业人员资质证照信息
 * @name UpdatePerQualifications
 * @summary 修改企业人员资质证照信息
 * @request PUT:/per/qualifications/update
 * @response `200` `ResultVoid` OK
 */
export const updatePerQualifications = (data: UpdatePerQualificationsQuery, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/per/qualifications/update`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业人员资质证照信息管理接口 批量导入
 *
 * @tags 企业人员资质证照信息管理接口, 企业人员资质证照信息导入
 * @name BatchImportPerQualifications
 * @summary 批量导入
 * @request POST:/per/qualifications/import
 * @response `200` `ResultVoid` OK
 */
export const batchImportPerQualifications = (data: ImportPerQualificationsQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/per/qualifications/import`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业人员资质证照信息管理接口 新增企业人员资质证照信息
 *
 * @tags 企业人员资质证照信息管理接口, 新增企业人员资质证照信息
 * @name AddPerQualifications
 * @summary 新增企业人员资质证照信息
 * @request POST:/per/qualifications/add
 * @response `200` `ResultVoid` OK
 */
export const addPerQualifications = (data: AddPerQualificationsQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/per/qualifications/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业人员资质证照信息管理接口 企业人员资质证照信息管理查询
 *
 * @tags 企业人员资质证照信息管理接口, 企业人员资质证照信息管理查询
 * @name PagePerQualifications
 * @summary 企业人员资质证照信息管理查询
 * @request GET:/per/qualifications
 * @response `200` `PageResultListPerCertificatePageVO` OK
 */
export const pagePerQualifications = (
  query: {
    /** 企业人员资质证照分页查询 */
    request: PerCertificatePageQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListPerCertificatePageVO>(
    {
      url: `gas-supervise/per/qualifications`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业人员资质证照信息管理接口 企业人员资质证照信息详情
 *
 * @tags 企业人员资质证照信息管理接口, 企业人员资质证照信息详情
 * @name PerQualificationsDetail
 * @summary 企业人员资质证照信息详情
 * @request GET:/per/qualifications/detail/{code}
 * @response `200` `ResultPerCertificateDetailVO` OK
 */
export const perQualificationsDetail = (code: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultPerCertificateDetailVO>(
    {
      url: `gas-supervise/per/qualifications/detail/${code}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业人员资质证照信息管理接口 企业人员资质证照信息汇总
 *
 * @tags 企业人员资质证照信息管理接口, 企业人员资质证照信息汇总
 * @name PerCertificateCount
 * @summary 企业人员资质证照信息汇总
 * @request GET:/per/qualifications/count
 * @response `200` `ResultPerCertificateCountVO` OK
 */
export const perCertificateCount = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultPerCertificateCountVO>(
    {
      url: `gas-supervise/per/qualifications/count`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 企业人员资质证照信息管理接口 删除企业人员资质证照信息
 *
 * @tags 企业人员资质证照信息管理接口, 删除企业人员资质证照信息
 * @name DelPerQualifications
 * @summary 删除企业人员资质证照信息
 * @request DELETE:/per/qualifications/del/{code}
 * @response `200` `ResultVoid` OK
 */
export const delPerQualifications = (code: string, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/per/qualifications/del/${code}`,
    },
    { ...params, isTransformResponse: false },
  );
};
