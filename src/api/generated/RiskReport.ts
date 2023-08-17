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

import type { ResultRiskDangerStatisticsOfWordVO } from "./data-contracts";

/**
 * 统计隐患总数 统计隐患总数,用于Word文档生成
 *
 * @tags 统计隐患总数
 * @name RiskDangerStatisticsOfWord
 * @summary 统计隐患总数,用于Word文档生成
 * @request GET:/risk/report/word
 * @response `200` `ResultRiskDangerStatisticsOfWordVO` OK
 */
export const riskDangerStatisticsOfWord = (
  query: {
    reportMonth: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultRiskDangerStatisticsOfWordVO>(
    {
      url: `gas-supervise/risk/report/word`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
