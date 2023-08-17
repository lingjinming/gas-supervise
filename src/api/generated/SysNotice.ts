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

import type { PageResultListMessageContent, ResultMapStringListMessageContent } from "./data-contracts";

/**
 * message-endpoint
 *
 * @tags message-endpoint
 * @name GetAllWsMsg
 * @request GET:/notice/ws-page
 * @response `200` `PageResultListMessageContent` OK
 */
export const getAllWsMsg = (
  query: {
    /** @format int32 */
    page: number;
    /** @format int32 */
    size: number;
    type: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListMessageContent>(
    {
      url: `gas-supervise/notice/ws-page`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * message-endpoint
 *
 * @tags message-endpoint
 * @name GetAllUnreadMsg
 * @request GET:/notice/unread-list
 * @response `200` `ResultMapStringListMessageContent` OK
 */
export const getAllUnreadMsg = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultMapStringListMessageContent>(
    {
      url: `gas-supervise/notice/unread-list`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * message-endpoint
 *
 * @tags message-endpoint
 * @name GetAllSmsMsg
 * @request GET:/notice/sms-list
 * @response `200` `ResultMapStringListMessageContent` OK
 */
export const getAllSmsMsg = (
  query: {
    bizId: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<ResultMapStringListMessageContent>(
    {
      url: `gas-supervise/notice/sms-list`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * message-endpoint
 *
 * @tags message-endpoint
 * @name GetAllReadMsg
 * @request GET:/notice/read-list
 * @response `200` `ResultMapStringListMessageContent` OK
 */
export const getAllReadMsg = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultMapStringListMessageContent>(
    {
      url: `gas-supervise/notice/read-list`,
    },
    { ...params, isTransformResponse: false },
  );
};
