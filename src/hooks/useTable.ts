import type { BasePageReq, BasePageResponse } from "@/api/model/BaseModel";
import { reactive, shallowRef, triggerRef, watch } from "vue";

type ApiType<T> = (params: any) => Promise<BasePageResponse<T>>

type TableOptions = {
  minTime?: number,
  autoFetch?: boolean,
  showToast?: boolean,
}

/**
 * 封装分页
 * @param params 查询参数
 * @param fun    分页接口
 * @param options 配置参数
 */
export const useTable = <T>(params: BasePageReq, fun: ApiType<T>, options?: TableOptions): any => {
  const defaultOptions = Object.assign({ minTime: 600, autoFetch: false, showToast: true }, options || {})

  const page = params.page || 1;
  const size = params.size || 10;
  // we keep the original params
  const initParm = { ...toRaw(params) };

  const loading = ref(false);
  // 下拉刷新
  const triggered = ref(false);
  // 优化一下子
  const list = shallowRef<T[]>([]);
  const total = ref(0)

  const state = reactive({
    page: {
      page: page,
      size: size,
    },
    searchParam: params
  });


  // 是否展示加载动画?
  if (defaultOptions.showToast) {
    watch(loading, (newValue) => {
      if (newValue) {
        uni.showLoading({
          title: '加载中...',
          // 刷新的时候立正站好,别乱动
          mask: true,
        });
      } else {
        uni.hideLoading();
      }
    })
  }



  const isError = ref(false)

  const fetchPage = async () => {
    const params = margeParam();
    const startTime = new Date().getTime();

    try {
      isError.value = false;
      loading.value = true;

      const { total: totalList, data } = await fun(params);
      total.value = totalList;
      return data;
    } catch (err) {
      isError.value = true;
      throw err;
    } finally {
      if (!isError.value) {
        const diff = new Date().getTime() - startTime;
        const restTime = defaultOptions.minTime - diff;
        if (restTime > 10) {
          setTimeout(() => {
            loading.value = false;
          }, restTime)
        } else {
          loading.value = false;
        }

      }

    }
  }

  /**
   * 重置查询
   */
  const reset = () => {
    // 恢复到初始查询参数
    Object.assign(state.searchParam, initParm);
    search();
  }


  const nextPage = async () => {
    if (state.page.page * state.page.size > total.value) {
      uni.showToast({
        icon: 'none',
        title: '没有更多数据了',
        // 刷新的时候立正站好,别乱动
        mask: true,
        duration: 1000,
      });
      return;
    }
    state.page.page += 1;
    const data = await fetchPage();
    // app 直接追加
    list.value = [...list.value, ...data];
    // 强制触发刷新
    triggerRef(list);
  }

  const search = async () => {
    // 重置页码
    state.page.page = 1;
    // 重置列表
    list.value = await fetchPage();
  }


  const margeParam = () => {
    return {
      ...initParm,
      ...toRaw(state.searchParam),
      page: state.page.page,
      size: state.page.size,
    };
  }

  const onRefreshPulling = () => {
    triggered.value = true;
  }

  const onRefresh = async () => {
    search();
    triggered.value = false

  }

  return {
    total,
    list,
    loading,
    nextPage,
    search,
    reset,
    triggered,
    onRefreshPulling,
    onRefresh
  }

}