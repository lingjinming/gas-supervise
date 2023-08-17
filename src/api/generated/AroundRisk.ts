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

import type { AroundRiskQuery, ResultListAroundRiskDTO } from "./data-contracts";

/**
 * 范围内隐患列表 根据范围查询隐患列表
 *
 * @tags 范围内隐患列表
 * @name AroundRisk
 * @summary 根据范围查询隐患列表
 * @request GET:/around/risk
 * @response `200` `ResultListAroundRiskDTO` OK
 */
export const aroundRisk = (
  query: {
    query: AroundRiskQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListAroundRiskDTO>(
    {
      url: `gas-supervise/around/risk`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
