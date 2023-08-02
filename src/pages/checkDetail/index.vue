<template>
  <van-tabs :active="activeTab" @change="onChangeTab">
    <van-tab title="计划详情">
      <van-field required label="计划名称" :value="state.detail.title" />
      <van-field required label="计划时间" :value="state.detail.startDate" />
      <van-field required label="检查类型" :value="state.detail._type" />
      <van-field required label="检查企业" :value="state.detail._targetOrgId" />
      <van-field
        required
        label="企业负责人"
        :value="state.detail.targetOrgOwner"
      />
      <van-field
        required
        label="负责人电话"
        :value="state.detail.targetOrgPhone"
      />
      <van-field required label="参与人" :value="state.detail.checkers" />
      <van-field
        required
        label="计划创建时间"
        :value="state.detail.startDate"
      />
    </van-tab>
    <van-tab title="隐患整改单">
      <van-field required label="整改单位" :value="state.detail._targetOrgId" />
      <van-field
        required
        label="联系电话"
        :value="state.detail.targetOrgPhone"
      />
      <van-field required label="地址" :value="state.detail.targetOrgAddr" />
      <van-field required label="整改完成期限" :value="state.detail.endDate" />
      <van-field
        required
        label="整改单发布时间"
        :value="state.detail.startDate"
      />
      <van-field required label="发布单位" :value="state.detail._masterOrgId" />

      <hidden
        v-for="(item, i) in state.detail.handleOrders"
        :key="i"
        :info="item"
      />
    </van-tab>
  </van-tabs>

  <view class="addAudit-box">
    <van-button
      custom-style="border-color:#a7a7a7;border-radius:10rpx"
      color="#a7a7a7"
      plain
      size="large"
      icon="plus"
      type="default"
      @click="addAudit"
      >创建整改单</van-button
    >
  </view>
</template>
<script setup lang="ts">
import { checkPlanDetail, hidangerOrder } from "@/api/hidden";
import { userStore } from "@/state";

const store = userStore();
const isOrg: boolean = store.isOrgUser;

const addAudit = () => {
  uni.navigateTo({
    url: "/pages/hidden/index?audit=true",
  });
};
onLoad((options) => {
  getDetail(options!.uid);
});

let state = reactive({
  detail: {
    checkers: "",
    code: "",
    endDate: "",
    handleOrders: [],
    startDate: "",
    targetOrgAddr: "",
    targetOrgOwner: "",
    targetOrgPhone: "",
    title: "",
    _handleState: "",
    _masterOrgId: "",
    _targetOrgId: "",
    _type: "",
  },
});
const getDetail = async (id: string) => {
  try {
    let data = await checkPlanDetail(id);
    state.detail = Object.assign({}, state.detail, data);
    console.log(state.detail);
  } finally {
  }
};
let activeTab = ref("计划详情");
const onChangeTab = ({ name }) => {
  activeTab.value = name;
};
</script>
<style lang="scss" scoped>
.top {
  @include flex-between;
  height: 80rpx;
  padding: 0 40rpx;
}
.addAudit-box {
  background: #fff;
  height: 160rpx;
  padding: 30rpx 20rpx;
  position: fixed;
  width: calc(100% - 40rpx);
  bottom: 0;
}
</style>
