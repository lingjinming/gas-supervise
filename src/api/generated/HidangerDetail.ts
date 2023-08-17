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

import type { ResultObject } from "./data-contracts";

/**
 * 隐患管理 风险要素详情/隐患详情
 *
 * @tags 隐患管理
 * @name RiskDangerFactorsDetail
 * @summary 风险要素详情/隐患详情
 * @request GET:/hidanger/detail/{uid}
 * @response `200` `ResultObject` OK
 */
export const riskDangerFactorsDetail = (uid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultObject>(
    {
      url: `gas-supervise/hidanger/detail/${uid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
