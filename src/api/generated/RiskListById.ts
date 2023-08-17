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

import type { ResultListRiskExportVO } from "./data-contracts";

/**
 * 周边隐患列表 根据隐患编号查询隐患列表
 *
 * @tags 周边隐患列表
 * @name ExportRisk
 * @summary 根据隐患编号查询隐患列表
 * @request GET:/risk/listById
 * @response `200` `ResultListRiskExportVO` OK
 */
export const exportRisk = (
  query: {
    dangerIds: string[];
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultListRiskExportVO>(
    {
      url: `gas-supervise/risk/listById`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
