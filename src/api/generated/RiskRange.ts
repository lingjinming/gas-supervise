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

import type { ProjectRiskDangerRequest, ResultListProjectRiskDangerVO } from "./data-contracts";

/**
 * 范围内隐患列表 根据范围查询隐患列表
 *
 * @tags 范围内隐患列表
 * @name RiskDanger
 * @summary 根据范围查询隐患列表
 * @request POST:/risk/range
 * @response `200` `ResultListProjectRiskDangerVO` OK
 */
export const riskDanger = (data: ProjectRiskDangerRequest, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultListProjectRiskDangerVO>(
    {
      url: `gas-supervise/risk/range`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
