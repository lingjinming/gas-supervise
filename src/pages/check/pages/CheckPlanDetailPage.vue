<template>
  <van-tabs swipeable animated sticky :active="activeTab" @change="onChangeTab">
    <van-tab name="计划详情" title="计划详情">
      <view class="tab-detail-wrap">
        <view
          class="tab-detail-box"
          v-for="(val, key) in detail.check"
          :key="key"
        >
          <text class="label">{{ key }}:</text>
          <text>{{ val.val }}</text>
        </view>
      </view>
      <view class="opts" v-if="isGovUser">
        <van-button
          @click="goCreateHandleOrder"
          custom-style="background-color:#006CFF;color:#fff;border-radius:10rpx"
          color="#a7a7a7"
          plain
          size="large"
          type="default"
          >创建整改单</van-button
        >
    </view>
    </van-tab>
    <van-tab name="隐患整改单" title="隐患整改单">
      <template v-if="detail.handleOrders?.length">
        <view
        class="tab-detail-wrap"
        v-for="(order, i) in detail.handleOrders"
        :key="i"
      >
        <view class="tab-detail-tit">整改单信息</view>

        <view class="tab-detail-box">
          <text class="label">整改单位:</text>
          <text>{{ (order as any)._targetOrgId }}</text>
        </view>
        <view class="tab-detail-box">
          <text class="label">联系电话:</text>
          <text>{{ order.targetOrgPhone }}</text>
        </view>
        <view class="tab-detail-box">
          <text class="label">地址:</text>
          <text>{{ order.targetOrgAddr }}</text>
        </view>
        <view class="tab-detail-box">
          <text class="label">整改完成期限:</text>
          <text>{{ order.deadline }}</text>
        </view>
        <view class="tab-detail-box">
          <text class="label">整改单发布时间:</text>
          <text>{{ order.orderDate }}</text>
        </view>
        <view class="tab-detail-box">
          <text class="label">发布单位:</text>
          <text>{{ (order as any)._masterOrgId }}</text>
        </view>
        <view class="tab-detail-box">
          <text class="label">企业负责人签字:</text>
          <view class="img-box">
            <gas-attach
              :disabledPreview="true"
              v-if="order?.targetOrgMasterSign?.length"
              :id="order.targetOrgMasterSign[0]"
          /></view>
        </view>
        <view class="tab-detail-box">
          <text class="label">检查人签字签字:</text>
          <view class="img-box">
            <gas-attach
              :disabledPreview="true"
              v-if="order?.expertSign?.length > 0"
              :id="order.expertSign[0]"
            />
            <gas-attach
              :disabledPreview="true"
              v-if="order?.expertSign?.length > 1"
              :id="order.expertSign[1]"
            />
          </view>
        </view>
      </view>
      </template>
      <template v-else>
        <van-empty  description="暂无关联整改单"></van-empty>
      </template>
      
    </van-tab>
  </van-tabs>
  
</template>
<script setup lang="ts">
import { userStore } from "@/state";
// hidanger/gov/check-plan/${id}
import { getHidangerGovCheckPlanById } from '@/api/gen/GasSuperviseApi'
import type {HidangerHandleOrderDTO} from '@/api/gen/data-contracts'

const store = userStore();
const isGovUser = store.isGovUser;


onLoad((options) => {
  detail.planCode = options!.planCode;
  getDetail(options!.uid);
});

let detail = reactive({
  check: {
    计划名称: {
      prop: "title",
      val: "",
    },
    计划时间: {
      prop: "startDate",
      val: "",
    },
    检查类型: {
      prop: "_type",
      val: "",
    },
    检查企业: {
      prop: "_targetOrgId",
      val: "",
    },
    企业负责人: {
      prop: "targetOrgOwner",
      val: "",
    },
    负责人电话: {
      prop: "targetOrgPhone",
      val: "",
    },
    参与人: {
      prop: "checkers",
      val: "",
    },
    计划创建时间: {
      prop: "startDate",
      val: "",
    },
  },
  order: {
    整改单位: {
      prop: "_targetOrgId",
      val: "",
    },
    联系电话: {
      prop: "targetOrgPhone",
      val: "",
    },
    地址: {
      prop: "targetOrgAddr",
      val: "",
    },
    整改完成期限: {
      prop: "endDate",
      val: "",
    },
    整改单发布时间: {
      prop: "startDate",
      val: "",
    },
    发布单位: {
      prop: "_masterOrgId",
      val: "",
    },
  },
  handleOrders: <HidangerHandleOrderDTO[]>[],
  planCode: "",
});

const getDetail = async (id: string) => {
  try {
    let { data } = await getHidangerGovCheckPlanById(id);
    Object.values(detail.check).forEach((value) => {
    value.val = data&&data[value.prop];
    });
    Object.values(detail.order).forEach((value) => {
      value.val = data&&data[value.prop];
    });
    if(data&&data.handleOrders) {
      detail.handleOrders = data&&data.handleOrders;
    }
  } finally {
  }
};
let activeTab = ref("计划详情");
const onChangeTab = ({ name }) => {
  activeTab.value = name;
};

const goCreateHandleOrder = () => {
  uni.navigateTo({
    url:'/pages/check/pages/HandleOrderCreatePage?planCode='+detail.planCode,
  })
  
}
</script>
<style lang="scss" scoped>
.top {
  @include flex-between;
  height: 80rpx;
  padding: 0 40rpx;
}
.addAudit-box {
  background: #fff;
  height: 140rpx;
  padding: 30rpx 20rpx;
  position: fixed;
  width: calc(100% - 40rpx);
  bottom: 0;
}
.opts {
  height: 160rpx;
  padding: 30rpx 20rpx;
}
</style>
