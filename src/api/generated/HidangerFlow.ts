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

import type { ResultHidnagerFlowVO } from "./data-contracts";

/**
 * 隐患管理 隐患处置流程
 *
 * @tags 隐患管理
 * @name HidangerFlow
 * @summary 隐患处置流程
 * @request GET:/hidanger/flow/{uid}
 * @response `200` `ResultHidnagerFlowVO` OK
 */
export const hidangerFlow = (uid: number, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultHidnagerFlowVO>(
    {
      url: `gas-supervise/hidanger/flow/${uid}`,
    },
    { ...params, isTransformResponse: false },
  );
};
