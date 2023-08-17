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

import type { ResultHidangerImportVO } from "./data-contracts";

/**
 * 隐患导入 预导入模板数据解析
 *
 * @tags 隐患导入
 * @name BatchImportHidanger
 * @summary 预导入模板数据解析
 * @request POST:/hidanger/pre-import
 * @response `200` `ResultHidangerImportVO` OK
 */
export const batchImportHidanger = (
  query: {
    /** @format binary */
    file: FormData;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultHidangerImportVO>(
    {
      url: `gas-supervise/hidanger/pre-import`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
