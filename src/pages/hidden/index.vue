<template>
  <view class="top">
    <text>共计<text class="total">{{ state.total }}</text>条隐患</text>
    <view @click="state.showQuery = true" class="search">
      筛选<van-icon name="arrow-down" />
    </view>
  </view>
  <scroll-view style="height: calc(100% - 100rpx);" scroll-y="true" class="scroll-Y" @scrolltolower="nextPage">
    <!-- 隐患列表 -->
    <view v-if="state.list.length">
      <hidden v-for="item in state.list" :key="item.uid" :info="item"></hidden>
    </view>
    <view v-else>
      <van-empty description="暂无数据"></van-empty>
    </view>
  </scroll-view>

  <!-- 搜索面板 -->
  <van-popup :show="state.showQuery" position="top" custom-style="height: 70%;width: 100%;border-radius: 10rpx;padding: 29rpx" @close="cancel">
    <check-group useAll v-model="state.query.state" title="隐患状态" :options="[{label: '待整改',value:'WAIT_HANDLE'},{label: '已整改',value:'WAIT_AUDIT,HANDLED'}]"></check-group> 
    <check-group useAll v-model="state.query.dangerSource" title="隐患来源" :options="state.dics.source"></check-group>
    <check-group useAll v-model="state.query.level" title="隐患级别" :options="state.dics.level"></check-group>

    <!-- 隐患类型 -->
    <van-cascader-new dicType="RISK_SUBJECT_TYPE_TREE" label="隐患类别" title="隐患类别" v-model="state.query.dangerType"
      v-model:subjectType="state.query.subjectType" />

    <!-- 确定 -->
    <view class="bottom">
      <button  plain="true" @click="cancel" class="btn cancel">取消</button>
      <button  plain="true" @click="doQuery" class="btn query">查询</button>
    </view>

  </van-popup>
</template>
<script setup lang="ts">
import { hidangerPage, type HidangerPgaeVO, type HidangerOrgPageQuery } from '@/api/hidden';
import { reactive, ref } from 'vue';
import { getDictList, type DicItem } from '@/api/dic';


let isOrg: boolean = uni.getStorageSync("USER_INFO")["orgType"] != 1;
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
    //dangerSource: [],
    //level: [],
    dangerType: '',
    dangerSubType: ''
  } as HidangerOrgPageQuery
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
  // 重置分页
  state.query.page = 1;
  state.list.length = 0;
  fetchPage();
}

// 加载所需字典
const loadDic = async () => {
  const res = await getDictList('RISK_DANGER_STATUS!DANGER,RISK_DANGER_LEVEL,RISK_SUBJECT_TYPE,RISK_DANGER_SOURCE');
  state.dics.state = res.data['RISK_DANGER_STATUS!DANGER'];
  state.dics.source = res.data.RISK_DANGER_SOURCE;
  state.dics.level = res.data?.RISK_DANGER_LEVEL;
  state.dics.subject = res.data?.RISK_SUBJECT_TYPE;

}
// 分页查询
const fetchPage = async () => {
  const { total, data } = await hidangerPage({ ...state.query });
  state.total = total;
  state.list.push(...data)
}

onMounted(() => {
  loadDic();
  fetchPage();
})
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