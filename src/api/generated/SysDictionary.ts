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
  ResultListDictionaryItem,
  ResultListDistrictVO,
  ResultMapStringListDictionaryItem,
} from "./data-contracts";

/**
 * 行政区划 获取行政区列表，如果未传code，则返回省级行政区划列表，否则返回对应的子行政区划列表
 *
 * @tags 行政区划
 * @name GetDistrict
 * @summary 获取行政区列表，如果未传code，则返回省级行政区划列表，否则返回对应的子行政区划列表
 * @request GET:/district/list
 * @response `200` `ResultListDistrictVO` OK
 */
export const getDistrict = (
  query?: {
    code: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListDistrictVO>(
    {
      url: `gas-supervise/district/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 行政区划 获取全国行政区划数据
 *
 * @tags 行政区划
 * @name GetAllDistrict1
 * @summary 获取全国行政区划数据
 * @request GET:/district/all
 * @response `200` `ResultListDistrictVO` OK
 */
export const getAllDistrict1 = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListDistrictVO>(
    {
      url: `gas-supervise/district/all`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 数据字典 获取单个数据字典
 *
 * @tags 数据字典
 * @name GetDictionary
 * @summary 获取单个数据字典
 * @request GET:/dictionary
 * @response `200` `ResultListDictionaryItem` OK
 */
export const getDictionary = (
  query: {
    type: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListDictionaryItem>(
    {
      url: `gas-supervise/dictionary`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 数据字典 同时获取多个数据字典
 *
 * @tags 数据字典
 * @name GetDictionaries
 * @summary 同时获取多个数据字典
 * @request GET:/dictionary/list
 * @response `200` `ResultMapStringListDictionaryItem` OK
 */
export const getDictionaries = (
  query: {
    types: string[];
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultMapStringListDictionaryItem>(
    {
      url: `gas-supervise/dictionary/list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
