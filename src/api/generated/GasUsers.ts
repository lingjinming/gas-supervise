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
  AddGasUserQuery,
  ImportGasUserQuery,
  PageGasUserQuery,
  PageResultListDetailGasUserVO,
  ResultDetailGasUserVO,
  ResultGasUserCountVO,
  ResultVoid,
  UpdateGasUserQuery,
} from "./data-contracts";

/**
 * 修改用气用户信息 修改用气用户信息
 *
 * @tags 修改用气用户信息, 用气用户信息管理接口
 * @name UpdateGasUser
 * @summary 修改用气用户信息
 * @request PUT:/gas/users/update
 * @response `200` `ResultVoid` OK
 */
export const updateGasUser = (data: UpdateGasUserQuery, params: PerRequestOptions = {}) => {
  return defHttp.put<ResultVoid>(
    {
      url: `gas-supervise/gas/users/update`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用气用户信息管理接口 批量导入
 *
 * @tags 用气用户信息管理接口, 用气用户信息导入
 * @name BatchImportGasUser
 * @summary 批量导入
 * @request POST:/gas/users/import
 * @response `200` `ResultVoid` OK
 */
export const batchImportGasUser = (data: ImportGasUserQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/gas/users/import`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用气用户信息管理接口 新增用气用户信息
 *
 * @tags 用气用户信息管理接口, 新增用气用户信息
 * @name AddGasUser
 * @summary 新增用气用户信息
 * @request POST:/gas/users/add
 * @response `200` `ResultVoid` OK
 */
export const addGasUser = (data: AddGasUserQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/gas/users/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用气用户信息管理接口 用气用户查询列表
 *
 * @tags 用气用户信息管理接口, 用气用户查询列表
 * @name PageGasUser
 * @summary 用气用户查询列表
 * @request GET:/gas/users
 * @response `200` `PageResultListDetailGasUserVO` OK
 */
export const pageGasUser = (
  query: {
    /** 用气用户分页查询 */
    request: PageGasUserQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListDetailGasUserVO>(
    {
      url: `gas-supervise/gas/users`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用气用户详情 用气用户详情
 *
 * @tags 用气用户详情, 用气用户信息管理接口
 * @name GasUserDetail
 * @summary 用气用户详情
 * @request GET:/gas/users/detail/{code}
 * @response `200` `ResultDetailGasUserVO` OK
 */
export const gasUserDetail = (code: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultDetailGasUserVO>(
    {
      url: `gas-supervise/gas/users/detail/${code}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用气用户信息汇总 用气用户信息汇总
 *
 * @tags 用气用户信息汇总, 用气用户信息管理接口
 * @name GasUserCount
 * @summary 用气用户信息汇总
 * @request GET:/gas/users/count
 * @response `200` `ResultGasUserCountVO` OK
 */
export const gasUserCount = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultGasUserCountVO>(
    {
      url: `gas-supervise/gas/users/count`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 删除用气用户信息 删除用气用户信息
 *
 * @tags 删除用气用户信息, 用气用户信息管理接口
 * @name DelGasUser
 * @summary 删除用气用户信息
 * @request DELETE:/gas/users/del/{code}
 * @response `200` `ResultVoid` OK
 */
export const delGasUser = (code: string, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/gas/users/del/${code}`,
    },
    { ...params, isTransformResponse: false },
  );
};
