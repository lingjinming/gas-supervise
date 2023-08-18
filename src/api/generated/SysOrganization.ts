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

import type { ResultListOrganizationVO, ResultListTreeVo } from "./data-contracts";

/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name SimpleWithUser
 * @summary 获取所有组织机构和用户信息
 * @request GET:/org/simple-with-user
 * @response `200` `ResultListTreeVo` OK
 */
export const simpleWithUser = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListTreeVo>(
    {
      url: `gas-supervise/org/simple-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name SimpleWithUser2
 * @summary 获取所有组织机构和用户信息
 * @request PUT:/org/simple-with-user
 * @response `200` `ResultListTreeVo` OK
 */
export const simpleWithUser2 = (params: PerRequestOptions = {}) => {
  return defHttp.put<ResultListTreeVo>(
    {
      url: `gas-supervise/org/simple-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name SimpleWithUser1
 * @summary 获取所有组织机构和用户信息
 * @request POST:/org/simple-with-user
 * @response `200` `ResultListTreeVo` OK
 */
export const simpleWithUser1 = (params: PerRequestOptions = {}) => {
  return defHttp.post<ResultListTreeVo>(
    {
      url: `gas-supervise/org/simple-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name SimpleWithUser6
 * @summary 获取所有组织机构和用户信息
 * @request DELETE:/org/simple-with-user
 * @response `200` `ResultListTreeVo` OK
 */
export const simpleWithUser6 = (params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultListTreeVo>(
    {
      url: `gas-supervise/org/simple-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name SimpleWithUser3
 * @summary 获取所有组织机构和用户信息
 * @request OPTIONS:/org/simple-with-user
 * @response `200` `ResultListTreeVo` OK
 */
export const simpleWithUser3 = (params: PerRequestOptions = {}) => {
  return defHttp.options<ResultListTreeVo>(
    {
      url: `gas-supervise/org/simple-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name SimpleWithUser5
 * @summary 获取所有组织机构和用户信息
 * @request HEAD:/org/simple-with-user
 * @response `200` `ResultListTreeVo` OK
 */
export const simpleWithUser5 = (params: PerRequestOptions = {}) => {
  return defHttp.head<ResultListTreeVo>(
    {
      url: `gas-supervise/org/simple-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name SimpleWithUser4
 * @summary 获取所有组织机构和用户信息
 * @request PATCH:/org/simple-with-user
 * @response `200` `ResultListTreeVo` OK
 */
export const simpleWithUser4 = (params: PerRequestOptions = {}) => {
  return defHttp.patch<ResultListTreeVo>(
    {
      url: `gas-supervise/org/simple-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构信息
 *
 * @tags 组织机构管理
 * @name All
 * @summary 获取所有组织机构信息
 * @request GET:/org/all
 * @response `200` `ResultListOrganizationVO` OK
 */
export const all = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构信息
 *
 * @tags 组织机构管理
 * @name All2
 * @summary 获取所有组织机构信息
 * @request PUT:/org/all
 * @response `200` `ResultListOrganizationVO` OK
 */
export const all2 = (params: PerRequestOptions = {}) => {
  return defHttp.put<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构信息
 *
 * @tags 组织机构管理
 * @name All1
 * @summary 获取所有组织机构信息
 * @request POST:/org/all
 * @response `200` `ResultListOrganizationVO` OK
 */
export const all1 = (params: PerRequestOptions = {}) => {
  return defHttp.post<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构信息
 *
 * @tags 组织机构管理
 * @name All6
 * @summary 获取所有组织机构信息
 * @request DELETE:/org/all
 * @response `200` `ResultListOrganizationVO` OK
 */
export const all6 = (params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构信息
 *
 * @tags 组织机构管理
 * @name All3
 * @summary 获取所有组织机构信息
 * @request OPTIONS:/org/all
 * @response `200` `ResultListOrganizationVO` OK
 */
export const all3 = (params: PerRequestOptions = {}) => {
  return defHttp.options<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构信息
 *
 * @tags 组织机构管理
 * @name All5
 * @summary 获取所有组织机构信息
 * @request HEAD:/org/all
 * @response `200` `ResultListOrganizationVO` OK
 */
export const all5 = (params: PerRequestOptions = {}) => {
  return defHttp.head<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构信息
 *
 * @tags 组织机构管理
 * @name All4
 * @summary 获取所有组织机构信息
 * @request PATCH:/org/all
 * @response `200` `ResultListOrganizationVO` OK
 */
export const all4 = (params: PerRequestOptions = {}) => {
  return defHttp.patch<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name AllWithUser
 * @summary 获取所有组织机构和用户信息
 * @request GET:/org/all-with-user
 * @response `200` `ResultListOrganizationVO` OK
 */
export const allWithUser = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name AllWithUser2
 * @summary 获取所有组织机构和用户信息
 * @request PUT:/org/all-with-user
 * @response `200` `ResultListOrganizationVO` OK
 */
export const allWithUser2 = (params: PerRequestOptions = {}) => {
  return defHttp.put<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name AllWithUser1
 * @summary 获取所有组织机构和用户信息
 * @request POST:/org/all-with-user
 * @response `200` `ResultListOrganizationVO` OK
 */
export const allWithUser1 = (params: PerRequestOptions = {}) => {
  return defHttp.post<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name AllWithUser6
 * @summary 获取所有组织机构和用户信息
 * @request DELETE:/org/all-with-user
 * @response `200` `ResultListOrganizationVO` OK
 */
export const allWithUser6 = (params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name AllWithUser3
 * @summary 获取所有组织机构和用户信息
 * @request OPTIONS:/org/all-with-user
 * @response `200` `ResultListOrganizationVO` OK
 */
export const allWithUser3 = (params: PerRequestOptions = {}) => {
  return defHttp.options<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name AllWithUser5
 * @summary 获取所有组织机构和用户信息
 * @request HEAD:/org/all-with-user
 * @response `200` `ResultListOrganizationVO` OK
 */
export const allWithUser5 = (params: PerRequestOptions = {}) => {
  return defHttp.head<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构管理 获取所有组织机构和用户信息
 *
 * @tags 组织机构管理
 * @name AllWithUser4
 * @summary 获取所有组织机构和用户信息
 * @request PATCH:/org/all-with-user
 * @response `200` `ResultListOrganizationVO` OK
 */
export const allWithUser4 = (params: PerRequestOptions = {}) => {
  return defHttp.patch<ResultListOrganizationVO>(
    {
      url: `gas-supervise/org/all-with-user`,
    },
    { ...params, isTransformResponse: false },
  );
};
