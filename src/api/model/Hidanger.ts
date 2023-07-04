/**
 * 隐患创建请求
 */
export type HidangerCreateReq = {
  subjectType: string;
  dangerType: string;
  orgId: string;
  checkDate: string;
  longitude: string | number;
  latitude: string | number;
  address: string;
  remark: string;
  fileIds: string[];
  level: string;
  planCode: string;
  districtId: string;
};

/**
 * 隐患整改请求
 */
export interface HidangerHandleReq {
  handleDate: string;
  handleContent: string;
  fileIds: string[];
  picIds: string[];
}