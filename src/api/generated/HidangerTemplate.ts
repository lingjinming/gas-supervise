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

/**
 * @description 下载隐患导入模板
 *
 * @tags hidanger-controller
 * @name ExportPointHistoryData1
 * @summary 隐患导入
 * @request GET:/hidanger/template
 * @response `200` `void` OK
 */
export const exportPointHistoryData1 = (params: PerRequestOptions = {}) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/hidanger/template`,
    },
    { ...params, isTransformResponse: false },
  );
};
