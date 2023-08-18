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
  DataMessage,
  IndoorAlarmQuery,
  ResultFileUpdateResponseDTO,
  ResultString,
  ResultVoid,
} from "./data-contracts";

/**
 * @description serialNumber不存在则新增数据,已存在则更新数据
 *
 * @tags 监管平台数据接入网关
 * @name Post
 * @summary 保存数据
 * @request POST:/open/data
 * @response `200` `ResultVoid` OK
 */
export const post = (data: DataMessage, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/open/data`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description AIoT数据存储
 *
 * @tags 监管平台数据接入网关
 * @name AiotPost
 * @summary AIoT数据存储
 * @request POST:/open/data/aiot
 * @response `200` `ResultVoid` OK
 */
export const aiotPost = (data: IndoorAlarmQuery, params: PerRequestOptions = {}) => {
  return defHttp.post<ResultVoid>(
    {
      url: `gas-supervise/open/data/aiot`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 上传文件,并返回文件id
 *
 * @tags 附件管理
 * @name UploadFile
 * @summary 文件上传
 * @request POST:/file/upload
 * @response `200` `ResultFileUpdateResponseDTO` OK
 */
export const uploadFile = (
  data: {
    /** @format binary */
    file: FormData;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.post<ResultFileUpdateResponseDTO>(
    {
      url: `gas-supervise/file/upload`,
      data: data,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 302重定向到minio中的文件预览地址
 *
 * @tags 附件管理
 * @name Preview
 * @summary 文件预览
 * @request GET:/open/preview/{fileId}
 * @response `200` `void` OK
 */
export const preview = (fileId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/open/preview/${fileId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 返回minio的文件地址
 *
 * @tags 附件管理
 * @name Imageview
 * @summary 图片预览地址
 * @request GET:/open/imageview/{fileId}
 * @response `200` `void` OK
 */
export const imageview = (fileId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/open/imageview/${fileId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * @description 返回minio的文件预览地址
 *
 * @tags 附件管理
 * @name GetFile
 * @summary 获取文件预览地址
 * @request GET:/open/file/{fileId}
 * @response `200` `ResultString` OK
 */
export const getFile = (fileId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<ResultString>(
    {
      url: `gas-supervise/open/file/${fileId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 附件管理 文件下载
 *
 * @tags 附件管理
 * @name DownloadWithName
 * @summary 文件下载
 * @request GET:/open/downloadWithName
 * @response `200` `void` OK
 */
export const downloadWithName = (
  query: {
    /** 文件编号 */
    文件编号: string;
    /** 文件名称 */
    文件名称: string;
  },
  params: PerRequestOptions = {},
) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/open/downloadWithName`,
      data: query,
    },
    { ...params, isTransformResponse: false },
  );
};
/**
 * 附件管理 文件下载
 *
 * @tags 附件管理
 * @name Download
 * @summary 文件下载
 * @request GET:/open/download/{fileId}
 * @response `200` `void` OK
 */
export const download = (fileId: string, params: PerRequestOptions = {}) => {
  return defHttp.get<void>(
    {
      url: `gas-supervise/open/download/${fileId}`,
    },
    { ...params, isTransformResponse: false },
  );
};
