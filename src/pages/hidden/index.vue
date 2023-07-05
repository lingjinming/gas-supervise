<template>
  <view class="top">
    <text>共计<text class="total">{{ state.total }}</text>条隐患</text>
    <view @click="state.showQuery = true" class="search">
      筛选<van-icon name="arrow-down" />
    </view>
  </view>
  <!-- 隐患列表 -->
  <template v-if="state.total">
    <hidden v-for="(item, i) in state.list" :key="i" :info="item"></hidden>
  </template>
  <van-empty v-else description="暂无数据"></van-empty>

  <!-- 搜索面板 -->
  <van-popup :show="state.showQuery" position="top" custom-style="padding: 30rpx" @close="cancel">
    <!-- 隐患类型 -->
    <van-cascader-new 
      dicType="RISK_SUBJECT_TYPE_TREE" 
      label="隐患类别" 
      title="隐患类别" 
      v-model="state.query.dangerType"
      v-model:subjectType="state.query.subjectType" />
    <!-- 所属企业(政府用户可见) -->
    <van-picker-new
        v-if="!isOrg"
        dicType="org"
        label="所属企业"
        title="上报企业"
        v-model="state.query.orgId"
    />
    <!-- 隐患状态 -->
    <check-group useAll v-model="state.query.state" title="隐患状态"
      :options="[{ label: '待整改', value: 'WAIT_HANDLE' }, { label: '已整改', value: 'WAIT_AUDIT,HANDLED' }]">
    </check-group>
    <!-- 隐患来源 -->
    <check-group useAll v-model="state.query.dangerSource" title="隐患来源" :options="state.dics.source"></check-group>
    <!-- 隐患级别 -->
    <check-group useAll v-model="state.query.level" title="隐患级别" :options="state.dics.level"></check-group>
    

    <!-- 确定 -->
    <view class="bottom">
      <button plain="true" @click="cancel" class="btn cancel">取消</button>
      <button plain="true" @click="doQuery" class="btn query">查询</button>
    </view>

  </van-popup>
</template>


<script setup lang="ts">
import type { HidangerPgaeVO,HidangerOrgPageQuery } from '@/api/model/HidangerPage'
import type { DicItem } from "@/api/model/SysDictionary";

import { hidangerPage } from '@/api/hidden';
import { reactive } from 'vue';
import { getDictList } from '@/api/dic';
import { userStore } from "@/state";
import { EventType } from '@/enums/eventType'

const store = userStore();

const isOrg: boolean = store.isOrgUser;

const state = reactive({
  showQuery: false,
  total: 0,
  list: [] as HidangerPgaeVO[],
  dics: {
    state: [] as DicItem[],
    source: [] as DicItem[],
    level: [] as DicItem[],
    subject: [] as DicItem[]
  },
  query: {
    isOrg,
    page: 1,
    size: 10,
    state: [],
    orgId: '',
    dangerSource: [],
    level: [],
    dangerType: '',
    dangerSubType: ''
  } as HidangerOrgPageQuery
})

uni.$on(EventType.DANGER_PAGE_REFRESH,() => {
  doQuery();
})

// 下拉到底部 加载下一页
const nextPage = () => {
  if (state.query.page * state.query.size > state.total) {
    // no more data
  } else {
    state.query.page! += 1;
    fetchPage();
  }
}

const cancel = () => {
  state.showQuery = false;
}

// 关闭查询面板/点击确定 执行查询
const doQuery = () => {
  state.showQuery = false;
  fetchPage(true);
}

// 加载所需字典
const loadDic = async () => {
  const res = await getDictList('RISK_DANGER_STATUS!DANGER,RISK_DANGER_LEVEL,RISK_SUBJECT_TYPE,RISK_DANGER_SOURCE');
  state.dics.state = res['RISK_DANGER_STATUS!DANGER'];
  state.dics.source = res.RISK_DANGER_SOURCE;
  state.dics.level = res.RISK_DANGER_LEVEL;
  state.dics.subject = res.RISK_SUBJECT_TYPE;

}
// 分页查询
const fetchPage = async (reset?: boolean) => {
  uni.showToast({
    icon: 'loading',
    title: '加载中...'
  })
  try {
    if(reset) {
      state.query.page = 1;
    }
    const { total, data } = await hidangerPage({ ...state.query });
    state.total = total;
    if(reset) {
      state.list.length = 0;
    }
    state.list.push(...data)
  }finally {
    uni.hideToast();
    uni.stopPullDownRefresh();
  }
  
}
onLoad(() => {
  loadDic();
  fetchPage();
})

onPullDownRefresh(() =>  fetchPage())
onReachBottom(() => nextPage())
</script>
<style lang="scss" scoped>
.top {
  margin: 0 40rpx;
  line-height: 100rpx;
  position: relative;

  .total {
    font-weight: 700;
    padding: 0 8rpx;
  }

  .search {
    position: absolute;
    top: 0rpx;
    bottom: 0rpx;
    right: 0rpx;
    margin: auto;
    width: 129rpx;
    height: 52rpx;
    background-color: #fff;
    text-align: center;
    border-radius: 26rpx;
    line-height: 50rpx;
  }
}

.bottom {
  @include flex-between;
  margin-top: 20rpx;

  .btn {
    border: 0px;
    width: 333rpx;
    height: 88rpx;
    line-height: 88rpx;
    border-radius: 10px;
  }

  .btn.cancel {
    background: #E8F1FF;
    color: $uni-color-primary;

  }

  .btn.query {
    background: $uni-color-primary;
    color: #fff;
  }
}
</style>
