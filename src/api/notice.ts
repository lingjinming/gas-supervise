import { defHttp } from "@/utils/http";
import type { SysNoticeItem } from "./model/Notice";
import { userStore } from "@/state";

/**
 * 获取当前登录用户的消息提醒
 */
export const getNotice = () => {
  const store = userStore();
  const userId = store.userInfo?.userId;
  return defHttp.get<SysNoticeItem[]>({
    url: `gasguard-service-system-app/urge/get/allMsg/page?recipient=${userId}`,
  });
};