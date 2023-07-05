import { getNotice } from "@/api/notice";
import type { SysNoticeItem } from "@/api/model/Notice";
let page = ref(1);
let size = ref(10);
let Total = ref(0);

export const notices = ref([] as SysNoticeItem[]);
export const getNoticeFn = async (reset = true) => {
  if (reset) {
    page.value = 1;
  }

  const { data, total } = await getNotice({
    page: page.value,
  });
  Total.value = total;

  if (reset) {
    notices.value.length = 0;
  }
  notices.value.push(...data);
  console.log(notices.value)

  uni.stopPullDownRefresh();

};

// 下拉到底部 加载下一页
export const nextPage = () => {
  if (page.value * size.value > Total.value) {
    // no more data
  } else {
    page.value! += 1;
    getNoticeFn(false);

  }
};
