<template>
  <!-- 操作步骤 -->
  <view class="step-box">
    <van-icon name="arrow" custom-style="position:absolute;left:50%;transform:translateX(-50%)" />
    <view  :class="[data.currentStep === 0 ? 'act' : '']">选择需要整改的隐患</view>
    <view  :class="[data.currentStep === 1 ? 'act' : '']">填写整改单信息</view>
  </view>
  <!-- 选择隐患/填报整改单 -->
  <view class="handle-order-container">
    <swiper class="swiper" 
      :disable-touch="true" 
      :touchable="false"
      :circular="false" 
      :indicator-dots="false" 
      :autoplay="false"
      :current="data.currentStep" 
      @change="changeStep($event.detail.current)">
      <!-- 隐患列表 -->
      <swiper-item @touchmove.stop="stopTouchMove">
        <scroll-view style="height: 85%" scroll-y="true" class="scroll-Y">
          <template v-if="list.length" v-for="item in list" :key="item.uid">
            <view @click.capture.stop="chooseUid(item)">
              <HiddenPageItem :info="item">
                <van-icon :color="item.planCode === data.planCode || data.planCode === ''
                    ? '#006CFF'
                    : 'gray'
                  " size="36rpx" custom-style="margin-right:20rpx;top:4rpx"
                  :name="data.uids.includes(item.uid!) ? 'passed' : 'circle'" />
              </HiddenPageItem>
            </view>
          </template>
          <van-empty v-else description="暂无需要处理的隐患"></van-empty>
        </scroll-view>
        <button style="margin: 0 30rpx;" type="default" size="large" @click="changeStep(1)">下一步 </button>
      </swiper-item>
      <!-- 整改单信息填报 -->
      <swiper-item @touchmove.stop="stopTouchMove">
        <scroll-view style="height: 85%" scroll-y="true" class="scroll-Y">
          <view class="tab-detail-wrap">
            <view class="tab-detail-box">
              <text class="label">整改单位</text>
              <text>{{ data.orgName }}</text>
            </view>
            <view class="tab-detail-box">
              <text class="label">联系电话</text>
              <text>{{ data.phone }}</text>
            </view>
            <view class="tab-detail-box">
              <text class="label">地址</text>
              <text>{{ data.address }}</text>
            </view>

            <van-field required is-link label="整改期限" @click-input="showDatePopup('deadline')">
              <input :value="data.order.deadline" slot="input" disabled style="width: 100%" placeholder="请选择" />
            </van-field>
            <van-field required is-link label="发送时间" @click-input="showDatePopup('orderDate')">
              <input :value="data.order.orderDate" slot="input" disabled style="width: 100%" placeholder="请选择" />
            </van-field>

            <view class="signature-box" @click="navigatoSignature('targetOrgMasterSignatures')">
              <van-field title-width="100%" :border="false" required label="企业负责人" readonly />
              <gas-attach :disabledPreview="true" v-if="data.targetOrgMasterSignatures"
                :id="data.targetOrgMasterSignatures" />
              <view class="image" v-else>请手写签名</view>
            </view>
            <view class="signature-box" @click="navigatoSignature('expertSignatures1')">
              <van-field title-width="100%" :border="false" required label="检查人1(专家)" readonly />
              <gas-attach :disabledPreview="true" v-if="data.expertSignatures1" :id="data.expertSignatures1" />
              <view class="image" v-else>请手写签名</view>
            </view>
            <view class="signature-box" @click="navigatoSignature('expertSignatures2')">
              <van-field title-width="100%" :border="false" required label="检查人2(专家)" readonly />
              <gas-attach :disabledPreview="true" v-if="data.expertSignatures2" :id="data.expertSignatures2" />
              <view class="image" v-else>请手写签名</view>
            </view>
          </view>

          <!-- <view class="signature-box" @click="navigatoSignature('targetOrgMasterSignatures')">
            <van-field title-width="100%" :border="false" required label="企业负责人" readonly />
            <gas-attach :disabledPreview="true" v-if="data.targetOrgMasterSignatures"
              :id="data.targetOrgMasterSignatures" />
            <view class="image" v-else>请手写签名</view>
          </view>
          <view class="signature-box" @click="navigatoSignature('expertSignatures1')">
            <van-field title-width="100%" :border="false" required label="检查人1(专家)" readonly />
            <gas-attach :disabledPreview="true" v-if="data.expertSignatures1"
              :id="data.expertSignatures1" />
            <view class="image" v-else>请手写签名</view>
          </view>
          <view class="signature-box" @click="navigatoSignature('expertSignatures2')">
            <van-field title-width="100%" :border="false" required label="检查人2(专家)" readonly />
            <gas-attach :disabledPreview="true" v-if="data.expertSignatures2"
              :id="data.expertSignatures2" />
            <view class="image" v-else>请手写签名</view>
          </view> -->
        </scroll-view>
        <button style="margin: 0 30rpx;" type="default" size="large" @click="save">保存 </button>
      </swiper-item>
    </swiper>
    <!-- 日历 -->
    <van-calendar :show="data.handleDatePopupIsShow" @close="data.handleDatePopupIsShow = false" @confirm="chooseDate" />
  </view>
</template>
<script lang="ts" setup>
import HiddenPageItem from "@/pages/hidden/components/HiddenPageItem.vue";
import { reactive, computed } from "vue";

import { useTable } from "@/hooks/useTable";
import { formatDate } from "@/utils";
import { useLoading } from "@/hooks/useLoading";
import {getHidangerGovCheckPlanOrgInfo,getHidangerGovPage,postHidangerGovHandleOrder} from '@/api/gen/GasSuperviseApi'
import type {HidangerOrgPageVO,HidangerOrgPageQuery,HiDangerSendHandleOrderDTO} from '@/api/gen/data-contracts'

const data = reactive({
  currentStep: 0,
  handleDatePopupIsShow: false,
  planCode: "",
  uids: <string[]>[],
  targetOrgMasterSignatures: "",
  expertSignatures1: "",
  expertSignatures2: "",
  orgName: "",
  phone: "",
  address: "",
  order: <HiDangerSendHandleOrderDTO>{
    targetOrgMasterSignatures: <string[]>[],
    expertSignatures: <string[]>[],
    dangerIds: <number[]>[],
    orderDate: "",
    deadline: "",
    expertOpinion: "",
  },
  query: <HidangerOrgPageQuery>{
    planCode: "",
    paging: false,
  },
});

const stopTouchMove = () => false;
const hasSing = computed(
  () =>
    data.targetOrgMasterSignatures &&
    data.expertSignatures1 &&
    data.expertSignatures2
);
const { total, list, search } = useTable<HidangerOrgPageVO>(data.query, getHidangerGovPage, {
  showToast: true,
});

onLoad((param) => {
  data.query.planCode = param!.planCode;
  search();
});
let dateKey = ref("");
const chooseDate = (e) => {
  data.handleDatePopupIsShow = false;
  data.order[dateKey.value] = formatDate(e.detail);
};
const showDatePopup = (key) => {
  console.log(key);
  data.handleDatePopupIsShow = true;
  dateKey.value = key;
};
const changeStep = (step: number) => {
  // 判断是否选择隐患
  if (!data.uids.length) {
    uni.showToast({
      icon: "none",
      title: "请选择要整改的隐患!",
    });
    return;
  }
  const result = getHidangerGovCheckPlanOrgInfo({ planCode: data.planCode });
  useLoading(result, (result: any) => {
    data.currentStep = step;
    data.address = result.targetOrgAddr;
    data.orgName = result._targetOrgId;
    data.phone = result.targetOrgPhone;
  });
};

const chooseUid = (item: HidangerOrgPageVO) => {
  if (!data.planCode || data.planCode === item.planCode) {
    data.planCode = item.planCode!;
    if (data.uids.includes(item.uid!)) {
      data.uids.splice(data.uids.indexOf(item.uid!), 1);
      data.planCode = "";
    } else {
      data.uids.push(item.uid!);
    }
  } else {
    uni.showToast({
      icon: "none",
      title: "只能选择同一个检查计划下的隐患!",
    });
  }
};
const navigatoSignature = (key) => {
  uni.navigateTo({
    url: `/pages/check/pages/signature?key=${key}`,
    events: {
      onSignature: (result) => {
        data[key] = result.data.objectName;
      },
    },
  });
};

const save = () => {
  // 判断是否选择隐患
  if (!data.uids.length) {
    uni.showToast({
      icon: "none",
      title: "请选择要整改的隐患!",
    });
    return;
  }
  // 判断是否签字
  if (!hasSing) {
    uni.showToast({
      icon: "none",
      title: "请手写签字!",
    });
    return;
  }
  // 组织数据
  // @ts-ignore
  data.order.expertSignatures.push(
    data.expertSignatures1,
    data.expertSignatures2
    );
  // @ts-ignore
  data.order.targetOrgMasterSignatures.push(data.targetOrgMasterSignatures);
  // @ts-ignore
  data.order.dangerIds.push(...data.uids);

  const result = postHidangerGovHandleOrder(data.order);
  useLoading(result, () => {
    uni.redirectTo({
      url: "/pages/check/index",
    });
  });
};
</script>
<style lang="scss" scoped>
.step-box {
  height: 96rpx;
  margin-bottom: 20rpx;
  position: relative;
  display: flex;
  align-items: center;
  line-height: 100rpx;
  background: #fff;
  gap: 85rpx;

  .act {
    color: $uni-color-primary;
  }
}

.handle-order-container {
  height: calc(100% - 120rpx);
  overflow: hidden;

  .swiper {
    height: 100%;
  }
}

.signature-box {
  position: relative;
  height: 400rpx;

  &::after {
    position: absolute;
    content: "";
    left: 30rpx;
    right: 30rpx;
    bottom: 0;
    height: 2rpx;
    border-bottom: 1rpx solid $uni-border-color;
  }

  &:last-child {
    &::after {
      display: none;
    }
  }

  ::v-deep .image,
  image {
    margin: 0 30rpx;
    width: calc(100% - 60rpx);
    height: calc(100% - 100rpx);
  }

  ::v-deep .image {
    @include flex-center;
    background: #fbf8f3;
    color: #a7a7a7;
    filter: blur(1px);
  }
}

.tab-detail-wrap {
  height: 100%;
  overflow-y: auto;

  .label {
    font-size: 24rpx;
    padding-left: 34rpx;
  }
}
</style>
