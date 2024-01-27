import type { BasePageReq, BasePageResponse } from "@/api/model/BaseModel";
import { reactive, shallowRef, triggerRef, watch } from "vue";



export type ApiType<T> = (params: any) => Promise<BasePageResponse<T>>;

type TableOptions = {
  minTime?: number;
  autoFetch?: boolean;
  showToast?: boolean;
};

type UseTableReturnType<T> = {
  /**
   * 是否没有数据
   */
  noData: Ref<boolean>;
  /**
   * 是否正在加载中
   */
  loading: Ref<boolean>;
  /**
   * 用于下拉刷新
   */
  triggered: Ref<boolean>;
  /**
   * 数据总数
   */
  total: Ref<number>;
  /**
   * 数据
   */
  list: Ref<T[]>;
  /**
   * 下一页
   */
  nextPage: () => Promise<void>;
  /**
   * 查询,用于用户点击查询按钮;
   * 重置到第一页
   */
  search: () => Promise<void>;
  /**
   * 重置查询条件,并且重新查询
   * @returns
   */
  reset: () => void;
  /**
   * 用于下拉刷新
   */
  onRefreshPulling: () => void;
  /**
   * 用于下拉刷新
   */
  onRefresh: () => Promise<void>;
};

/**
 * 封装分页
 * @param params 查询参数
 * @param fun    分页接口
 * @param options 配置参数
 */
export const useTable = <T>(
  params: BasePageReq,
  fun: ApiType<T>,
  options?: TableOptions
): UseTableReturnType<T> => {
  const defaultOptions = Object.assign(
    { minTime: 300, autoFetch: false, showToast: true },
    options || {}
  );

  const page = params.page || 1;
  const size = params.size || 10;
  // we keep the original params
  const initParm = { ...toRaw(params) };

  const noData = ref(false);
  const loading = ref(false);
  // 下拉刷新
  const triggered = ref(false);
  // 优化一下子
  const list = shallowRef<T[]>([]);
  const total = ref(0);

  const state = reactive({
    page: {
      page: page,
      size: size,
    },
    searchParam: params,
  });

  // 是否展示加载动画?
  if (defaultOptions.showToast) {
    watch(loading, (newValue) => {
      if (newValue) {
        uni.showLoading({
          title: "加载中...",
          // 刷新的时候立正站好,别乱动
          mask: true,
        });
      } else {
        uni.hideLoading();
      }
    });
  }

  const isError = ref(false);

  const fetchPage = async () => {
    const params = margeParam();
    const startTime = new Date().getTime();

    try {
      isError.value = false;
      loading.value = true;

      const { total: totalList, data } = await fun(params);
      total.value = totalList||0;

      noData.value = Boolean(!totalList);
      
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
          }, restTime);
        } else {
          loading.value = false;
        }
      } else {
        loading.value = false;
      }
    }
  };

  /**
   * 重置查询
   */
  const reset = () => {
    // 恢复到初始查询参数
    Object.assign(state.searchParam, initParm);
    search();
  };

  const nextPage = async () => {
    if (state.page.page * state.page.size > total.value) {
      // uni.showToast({
      //   icon: "none",
      //   title: "没有更多数据了",
      //   mask: true,
      //   duration: 1000,
      // });
      return;
    }
    state.page.page += 1;
    const data = await fetchPage();
    if(data) {
      // app 直接追加
      list.value = [...list.value, ...data];
      // 强制触发刷新
      //triggerRef(list);
    }
  };

  const search = async () => {
    // 重置页码
    state.page.page = 1;
    // 重置列表
    list.value = await fetchPage()||[];
  };

  const margeParam = () => {
    return {
      ...initParm,
      ...toRaw(state.searchParam),
      page: state.page.page,
      size: state.page.size,
    };
  };

  const onRefreshPulling = () => {
    triggered.value = true;
  };

  const onRefresh = async () => {
    search();
    triggered.value = false;
  };

  return {
    noData,
    total,
    list,
    loading,
    nextPage,
    search,
    reset,
    triggered,
    onRefreshPulling,
    onRefresh,
  };
};
