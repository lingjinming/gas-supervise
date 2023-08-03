/**
 * 隐患创建请求
 */
export type HidangerCreateReq = {
  subjectType: string;
  dangerType: string;
  dangerSubtype: string;
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


export interface HidangerHandleReq {
  sameWithRemark: 'SAME'| 'NOT_SAME' | 'NOT_SURE';
  handleState: 'HANDLING' | 'HANDLED'
  handleDate: string;
  handleContent: string;
  fileIds: string[];
  picIds: string[];
}