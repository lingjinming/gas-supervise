<template>
  <view class="top">
    <text>共计{{ state.total }}条隐患</text>
    <text @click="state.showQuery = true">筛选</text>
  </view>
  <scroll-view
    style="height: calc(100% - 100rpx);"
    scroll-y="true"
    class="scroll-Y"
    @scrolltolower="nextpage"
  >
  <!-- 隐患列表 -->
  <view v-if="state.list.length">
    <hidden v-for="item in state.list" :key="item.uid" :info="item"></hidden>
  </view>
  <view v-else>
    <van-empty description="暂无数据"></van-empty>
  </view>
  </scroll-view>

  <!-- 搜索面板 -->
  <van-popup :show="state.showQuery" position="left" custom-style="height: 100%;width: 50%" @close="doQuery">

    <!-- 隐患状态 -->
    <van-radio-group :value="state.query.state" @change="state.query.state = $event.detail" direction="horizontal">
      <van-radio v-for="(item, i) in state.dics.state" :key="i" :name="item.value">
        {{ item.label }}
      </van-radio>
    </van-radio-group>

    <!-- 隐患来源 -->
    <van-radio-group :value="state.query.dangerSource" @change="state.query.dangerSource = $event.detail"
      direction="horizontal">
      <van-radio v-for="(item, i) in state.dics.source" :key="i" :name="item.value">
        {{ item.label }}
      </van-radio>
    </van-radio-group>

    <!-- 隐患级别 -->
    <van-radio-group :value="state.query.level" @change="state.query.level = $event.detail" direction="horizontal">
      <van-radio v-for="(item, i) in state.dics.level" :key="i" :name="item.value">
        {{ item.label }}
      </van-radio>
    </van-radio-group>

    <!-- 隐患类型 -->
    <van-cascader-new dicType="RISK_SUBJECT_TYPE_TREE" label="隐患类别" title="隐患类别" v-model="state.query.dangerType"
      v-model:subjectType="state.query.subjectType" />

    <!-- 确定 -->
    <van-button @click="doQuery">查询</van-button>

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
    state: '',
    dangerSource: '',
    level: '',
    dangerType: '',
    dangerSubType: '',
    order: 'createTime-'
  } as HidangerOrgPageQuery
})

// 下拉到底部 加载下一页
const nextpage = () => {
    if (state.query.page * state.query.size > state.total) {
    // no more data
  } else {
    state.query.page! += 1;
    featchPage();
  }
}

// 关闭查询面板/点击确定 执行查询
const doQuery = () => {
  state.showQuery = false;
  // 重置分页
  state.query.page = 1;
  state.list.length = 0;
  featchPage();
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
const featchPage = async () => {
  const { total, data } = await hidangerPage({ ...state.query });
  state.total = total;
  state.list.push(...data)
}
loadDic();

onMounted(() => featchPage())
</script>
<style lang="scss" scoped>
.top {
  line-height: 100rpx;
}
</style>