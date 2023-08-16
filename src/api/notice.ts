import { defHttp } from "@/utils/http";
import type { ReadSysNoticeReq, SysNoticeItem } from "./model/Notice";
import { userStore } from "@/state";
import type { BasePageReq } from "./model/BaseModel";

/**
 * 获取当前登录用户的消息提醒
 */
export const getNotice = (data:BasePageReq) => {
  const store = userStore();
  const userId = store.userInfo?.userId;
  return defHttp.get<SysNoticeItem[]>({
    url: `gas-supervise/urge/get/allMsg/page?recipient=${userId}`,
    data,
  },{
    isTransformResponse:false
  });
};

/**
 * 删除该消息
 */
export const readNotice = (data:ReadSysNoticeReq) => {
  return defHttp.get<SysNoticeItem[]>({
    url: `gas-supervise/urge/read`,
    data,
  });
};