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

import type {
  AddBulletinQuery,
  BulletinQuery,
  PageResultListBulletinVO,
  ResultBulletinCountVO,
  ResultBulletinDetailVO,
  ResultVoid,
  UpdateBulletinQuery,
} from "./data-contracts";

/**
 * 通知公告控制层 公告信息修改
 *
 * @tags 通知公告控制层
 * @name UpdateBulletin
 * @summary 公告信息修改
 * @request POST:/bulletin/update
 * @response `200` `ResultVoid` OK
 */
export const updateBulletin = (data: UpdateBulletinQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/bulletin/update`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通知公告控制层 新增公告
 *
 * @tags 通知公告控制层
 * @name AddBulletin
 * @summary 新增公告
 * @request POST:/bulletin/add
 * @response `200` `ResultVoid` OK
 */
export const addBulletin = (data: AddBulletinQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/bulletin/add`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通知公告控制层 公告信息列表查询
 *
 * @tags 通知公告控制层
 * @name BulletinPage
 * @summary 公告信息列表查询
 * @request GET:/bulletin
 * @response `200` `PageResultListBulletinVO` OK
 */
export const bulletinPage = (
  query: {
    /** 公告信息查询 */
    bulletinQuery: BulletinQuery;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<PageResultListBulletinVO>(
    {
      url: `gas-supervise/bulletin`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通知公告控制层 公告信息修改
 *
 * @tags 通知公告控制层
 * @name BulletinDetail
 * @summary 公告信息修改
 * @request GET:/bulletin/get/{id}
 * @response `200` `ResultBulletinDetailVO` OK
 */
export const bulletinDetail = (公告id: string, id: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBulletinDetailVO>(
    {
      url: `gas-supervise/bulletin/get/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通知公告控制层 公告信息统计
 *
 * @tags 通知公告控制层
 * @name BulletinCount
 * @summary 公告信息统计
 * @request GET:/bulletin/count
 * @response `200` `ResultBulletinCountVO` OK
 */
export const bulletinCount = (params: PerRequestOptions = {}) => {
  return defHttp.get<ResultBulletinCountVO>(
    {
      url: `gas-supervise/bulletin/count`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 通知公告控制层 删除公告
 *
 * @tags 通知公告控制层
 * @name DelBulletin
 * @summary 删除公告
 * @request DELETE:/bulletin/del/{id}
 * @response `200` `ResultVoid` OK
 */
export const delBulletin = (公告id: string, id: string, params: PerRequestOptions = {}) => {
  return defHttp.delete<ResultVoid>(
    {
      url: `gas-supervise/bulletin/del/${id}`,
    },
    { ...params, isTransformResponse: false },
  );
};
