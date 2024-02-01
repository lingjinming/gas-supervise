import type { MessageContent } from "@/api/gen/data-contracts";
import { useTable } from '@/hooks/useTable';
import { getNoticeWsPage } from "@/api/gen/GasSuperviseApi";

import type { SysNoticeItem } from "@/api/model/Notice";

export const useNoticeRepository = (showToast = true) => {
  const query = reactive({
    page: 1,
    size: 10,
    type: 'MsgRisk,MsgRiskCheck,MsgRiskUpdate,MsgRiskDispatch,MsgRiskUpdateComplete',
    desc: true
  })
  const {
    total,
    list,
    search,
    reset,
    nextPage,
    triggered,
    onRefreshPulling,
    onRefresh,
    loading
  } = useTable<MessageContent>(query,getNoticeWsPage,{showToast});


  return {total,list,search,reset,nextPage,triggered,onRefreshPulling,onRefresh,loading}
};




const adapter = (raw: MessageContent): SysNoticeItem => {
  return {
    msgType: raw.type,
    title: raw.title,
    content: raw.content?.content,
    timestampLively: raw["timestampLively"],
  };
};
