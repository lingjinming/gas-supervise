<template>
  <van-tabs :active="activeTab" @change="onChangeTab">
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
    </van-tab>
    <van-tab name="隐患整改单" title="隐患整改单">
      <view
        class="tab-detail-wrap"
        v-for="(order, i) in detail.handleOrders"
        :key="i"
      >
        <view class="tab-detail-tit">整改单信息</view>

        <view class="tab-detail-box">
          <text class="label">整改单位:</text>
          <text>{{ order._targetOrgId }}</text>
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
          <text>{{ order._masterOrgId }}</text>
        </view>
        <view class="tab-detail-box">
          <text class="label">企业负责人签字:</text>
          <view class="img-box">
            <region-img
              :disabledPreview="true"
              v-if="order.targetOrgMasterSign.length"
              region="test"
              :id="order.targetOrgMasterSign[0]"
          /></view>
        </view>
        <view class="tab-detail-box">
          <text class="label">检查人签字签字:</text>
          <view class="img-box">
            <region-img
              :disabledPreview="true"
              v-if="order.expertSign.length"
              region="test"
              :id="order.expertSign[0]"
            />
            <region-img
              :disabledPreview="true"
              v-if="order.expertSign.length"
              region="test"
              :id="order.expertSign[0]"
            />
          </view>
        </view>
      </view>
      <!-- <view style="margin-top: 40rpx">
          <view class="tab-detail-tit">整改隐患信息</view>
          <hidden
            v-for="(item, i) in detail.handleOrders"
            :key="i"
            :info="item"
          />
        </view> -->
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
  let keys = [
    "targetOrgMasterSignatures",
    "expertSignatures1",
    "expertSignatures2",
  ];
  keys.forEach((key) => uni.removeStorageSync(key));
  uni.navigateTo({
    url: `/pages/hidden/index?audit=true
    &_targetOrgId=${detail.order["整改单位"]["val"]}
    &targetOrgPhone=${detail.order["联系电话"]["val"]}
    &targetOrgAddr=${detail.order["地址"]["val"]}
    &planCode=${detail.planCode}
    `,
  });
};
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
  handleOrders: [],
  planCode: "",
});

const getDetail = async (id: string) => {
  try {
    let data = await checkPlanDetail(id);
    Object.values(detail.check).forEach((value) => {
      value.val = data[value.prop];
    });
    Object.values(detail.order).forEach((value) => {
      value.val = data[value.prop];
    });
    detail.handleOrders = data["handleOrders"];
  } finally {
  }
};
let activeTab = ref("计划详情");
const onChangeTab = ({ name }) => {
  if (!detail.handleOrders.length) {
    uni.showToast({
      icon: "none",
      title: "暂无数据",
    });
  } else {
    activeTab.value = name;
  }
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
  height: 140rpx;
  padding: 30rpx 20rpx;
  position: fixed;
  width: calc(100% - 40rpx);
  bottom: 0;
}
</style>
