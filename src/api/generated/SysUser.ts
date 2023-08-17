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
  ResultDistrictVO,
  ResultListMenuVO,
  ResultListOrganizationVO,
  ResultListUserInfoVO,
  ResultUserInfoVO,
} from "./data-contracts";

/**
 * 通讯录 根据组织机构ID获取用户
 *
 * @tags 通讯录
 * @name GetUserByOrgId
 * @summary 根据组织机构ID获取用户
 * @request GET:/user/{orgId}
 * @response `200` `ResultListUserInfoVO` OK
 */
export const getUserByOrgId = (orgId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListUserInfoVO>(
    {
      url: `gas-supervise/user/${orgId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用户菜单 根据用户获取菜单
 *
 * @tags 用户菜单
 * @name GetUserMenu
 * @summary 根据用户获取菜单
 * @request GET:/user/user_menu
 * @response `200` `ResultListMenuVO` OK
 */
export const getUserMenu = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListMenuVO>(
    {
      url: `gas-supervise/user/user_menu`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 组织机构 根据管理区域获取企业组织机构
 *
 * @tags 组织机构
 * @name GetAllEnterpriseOrg
 * @summary 根据管理区域获取企业组织机构
 * @request GET:/user/org/enterprise
 * @response `200` `ResultListOrganizationVO` OK
 */
export const getAllEnterpriseOrg = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListOrganizationVO>(
    {
      url: `gas-supervise/user/org/enterprise`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用户管理 获取当前登录用户信息
 *
 * @tags 用户管理
 * @name GetAllDistrict
 * @summary 获取当前登录用户信息
 * @request GET:/user/me
 * @response `200` `ResultUserInfoVO` OK
 */
export const getAllDistrict = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultUserInfoVO>(
    {
      url: `gas-supervise/user/me`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用户管理 获取当前登录用户所属的组织结构数据
 *
 * @tags 用户管理
 * @name GetOrgByCurrentUser
 * @summary 获取当前登录用户所属的组织结构数据
 * @request GET:/user/me/org
 * @response `200` `ResultListOrganizationVO` OK
 */
export const getOrgByCurrentUser = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListOrganizationVO>(
    {
      url: `gas-supervise/user/me/org`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 用户管理 获取当前登录用户所属的行政区划数据
 *
 * @tags 用户管理
 * @name GetDistrictByCurrentUser
 * @summary 获取当前登录用户所属的行政区划数据
 * @request GET:/user/me/district
 * @response `200` `ResultDistrictVO` OK
 */
export const getDistrictByCurrentUser = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultDistrictVO>(
    {
      url: `gas-supervise/user/me/district`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通讯录 根据分组编码获取通讯录数据
 *
 * @tags 通讯录
 * @name GetUserBook
 * @summary 根据分组编码获取通讯录数据
 * @request GET:/user/book
 * @response `200` `ResultListUserInfoVO` OK
 */
export const getUserBook = (
  query: {
    code: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListUserInfoVO>(
    {
      url: `gas-supervise/user/book`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通讯录 根据分组编码和组织编码获取通讯录数据
 *
 * @tags 通讯录
 * @name GetUserBook1
 * @summary 根据分组编码和组织编码获取通讯录数据
 * @request GET:/user/book-org
 * @response `200` `ResultListUserInfoVO` OK
 */
export const getUserBook1 = (
  query: {
    code: string;
    orgId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListUserInfoVO>(
    {
      url: `gas-supervise/user/book-org`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
