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

import type { HidangerImportDTO, ResultVoid } from "./data-contracts";

/**
 * 隐患导入 导入隐患
 *
 * @tags 隐患导入
 * @name DoImportHidanger
 * @summary 导入隐患
 * @request POST:/hidanger/import
 * @response `200` `ResultVoid` OK
 */
export const doImportHidanger = (data: HidangerImportDTO, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/hidanger/import`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
