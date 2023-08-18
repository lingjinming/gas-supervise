export interface SysNoticeItem {
  timestampLively?:string;
  string?: number;
  msgType?: string;
  type?: string;
  title?: string;
  content: string;
}
export interface ReadSysNoticeReq {
  recipient: string;
  uId: number;
}
