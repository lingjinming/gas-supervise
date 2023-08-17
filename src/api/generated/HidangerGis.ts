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

import type { ResultListHidangerGisVO } from "./data-contracts";

/**
 * @description 全部隐患撒点
 *
 * @tags hidanger-controller
 * @name HidangerGisMap
 * @summary GIS图层
 * @request GET:/hidanger/gis/map
 * @response `200` `ResultListHidangerGisVO` OK
 */
export const hidangerGisMap = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultListHidangerGisVO>(
    {
      url: `gas-supervise/hidanger/gis/map`,
    },
    { ...params, isTransformResponse: false },
  );
};
