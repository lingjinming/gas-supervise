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
