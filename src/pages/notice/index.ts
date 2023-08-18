import { getNotice } from "@/api/notice";
import type {MessageContent} from '@/api/generated/data-contracts';
import { getAllWsMsg } from '@/api/generated/SysNotice';
import type { SysNoticeItem } from "@/api/model/Notice";
let page = ref(1);
let size = ref(10);
let Total = ref(0);
// 
export const notices = ref([] as SysNoticeItem[]);
export const getNoticeFn = async (reset = true) => {
  if (reset) {
    page.value = 1;
  }
  const {success,data ,total} = await getAllWsMsg({type:'MsgRisk,MsgRiskCheck,MsgRiskUpdate,MsgRiskUpdateComplete',page:page.value,size:size.value});
  Total.value = total!;
  if (reset) {
    notices.value.length = 0;
  }
  if(total! > 0) {
    let item = data!.map(d => adapter(d));
    notices.value.push(...item);
  }

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

 const adapter = (raw: MessageContent): SysNoticeItem => {
  return ({
    msgType: raw.type,
    title: raw.title,
    content: raw.content?.content,
    timestampLively:raw['timestampLively']
  });
} 

