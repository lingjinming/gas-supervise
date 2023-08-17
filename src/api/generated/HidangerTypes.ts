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

import type { ResultListDictionaryItem } from "./data-contracts";

/**
 * @description 获取隐患类型下拉选
 *
 * @tags hidanger-controller
 * @name DangerTypes
 * @summary 隐患类型
 * @request GET:/hidanger/types
 * @response `200` `ResultListDictionaryItem` OK
 */
export const dangerTypes = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListDictionaryItem>(
    {
      url: `gas-supervise/hidanger/types`,
    },
    { ...params, isTransformResponse: false },
  );
};
