<template>
  <view class="top">
    <view class="step-box">
      <view
        @click="changeStep(step)"
        v-for="(step, i) in steps"
        :key="i"
        :class="{ act: currentSteps.includes(step) }"
        >{{ step }}</view
      >
    </view>
  </view>
  <swiper
    class="swiper"
    :autoplay="false"
    :current="currentSteps.length - 1"
    @change="handleSwiperChange"
  >
    <swiper-item  style="overflow-y: auto; height: calc(100% - 60rpx); background: #fff">
      <view>wwwww</view>
      <!-- 隐患列表 -->
      <!-- <scroll-view
        style="height: calc(100% - 100rpx)"
        scroll-y="true"
        class="scroll-Y"
        @scrolltolower="nextPage"
        refresher-enabled
        :refresher-triggered="triggered"
        @refresherpulling="onRefreshPulling"
        @refresherrefresh="onRefresh"
      >
        <template v-if="total">
          <hidden v-for="(item, i) in list" :key="i" :info="item"></hidden>
        </template>
        <van-empty v-else description="暂无数据"></van-empty>
      </scroll-view> -->
    </swiper-item>
    <swiper-item
      style="overflow-y: auto; height: calc(100% - 60rpx); background: #fff"
    >
      <van-field required label="整改单位" value="" />
      <van-field required label="联系电话" value="" />
      <van-field required label="地址" value="" />
      <van-field
        required
        is-link
        label="完成日期"
        @click-input="handleDatePopupIsShow = true"
      >
        <input
          :value="state.order.deadline"
          slot="input"
          disabled
          style="width: 100%"
          placeholder="请选择"
        />
      </van-field>

      <view
        class="signature-box"
        @click="navigatoSignature('targetOrgMasterSignatures')"
      >
        <van-field
          title-width="100%"
          :border="false"
          required
          label="企业负责人"
          readonly
        />

        <region-img
          :disabledPreview="true"
          v-if="state.targetOrgMasterSignatures.objectName"
          region="test"
          :id="state.targetOrgMasterSignatures.objectName"
        />
        <image v-else src="../../static/img/bg.png" mode="scaleToFill" />
      </view>
      <view
        class="signature-box"
        @click="navigatoSignature('expertSignatures1')"
      >
        <van-field
          title-width="100%"
          :border="false"
          required
          label="检查人1（专家）"
          readonly
        />

        <region-img
          :disabledPreview="true"
          v-if="state.expertSignatures1.objectName"
          region="test"
          :id="state.expertSignatures1.objectName"
        />
        <image v-else src="../../static/img/bg.png" mode="scaleToFill" />
      </view>
      <view
        class="signature-box"
        @click="navigatoSignature('expertSignatures2')"
      >
        <van-field
          title-width="100%"
          :border="false"
          required
          label="检查人2（专家）"
          readonly
        />
        <region-img
          :disabledPreview="true"
          v-if="state.expertSignatures2.objectName"
          region="test"
          :id="state.expertSignatures2.objectName"
        />
        <image v-else src="../../static/img/bg.png" mode="scaleToFill" />
      </view>

      <van-button
        custom-style="margin:40rpx 40rpx 150rpx;width:calc(100% - 80rpx)"
        :loading="loading"
        loading-text="请稍后..."
        type="primary"
        size="large"
        color="#006CFF"
        @click="submit"
        >确定</van-button
      >
    </swiper-item>
  </swiper>
  <!-- 日历 -->
  <van-calendar
    :show="handleDatePopupIsShow"
    @close="handleDatePopupIsShow = false"
    @confirm="chooseDate"
  />
</template>

<script setup lang="ts">
import type {
  HidangerPgaeVO,
  HidangerOrgPageQuery,
} from "@/api/model/HidangerPage";
import type { DicItem } from "@/api/model/SysDictionary";

import { hidangerOrder, hidangerPage } from "@/api/hidden";
import { reactive } from "vue";
import { getDictList } from "@/api/dic";
import { userStore } from "@/state";
import { EventType } from "@/enums/eventType";
import { useTable } from "@/hooks/useTable";
import { formatDate } from "@/utils";

const store = userStore();

const isOrg: boolean = store.isOrgUser;

const state = reactive({
  showQuery: false,
  query: <HidangerOrgPageQuery>{
    page: 1,
    size: 10,
    state: [],
    orgId: "",
    dangerSource: [],
    level: [],
    dangerType: "",
    dangerSubType: "",
  },
  order: {
    dangerIds: [],
    orderDate: "",
    deadline: "",
    expertSignatures: [],
    targetOrgMasterSignatures: [],
    expertOpinion: "",
    msgUserIds: "",
  },
  targetOrgMasterSignatures: {
    objectName: "",
  },
  expertSignatures1: {
    objectName: "",
  },
  expertSignatures2: {
    objectName: "",
  },
});

let loading = ref(false);
let handleDatePopupIsShow = ref(false);

const {
  total,
  list,
  search,
  nextPage,
  triggered,
  onRefreshPulling,
  onRefresh,
} = useTable<HidangerPgaeVO>(state.query, hidangerPage, { showToast: true });

const submit = async () => {
  state.order.targetOrgMasterSignatures = [
    state.targetOrgMasterSignatures.objectName,
  ];
  state.order.expertSignatures = [
    state.expertSignatures1.objectName,
    state.expertSignatures2.objectName,
  ];
  await hidangerOrder(state.order);
};
const chooseDate = (e) => {
  handleDatePopupIsShow.value = false;
  state.order.deadline = formatDate(e.detail);
};
// 进入签字页面
const navigatoSignature = (key) => {
  uni.navigateTo({
    url: `/pages/signature/index?key=${key}`,
  });
};

const steps = ["选择需要整改的隐患", "填写整改单信息"];
let currentSteps = ref(["选择需要整改的隐患"]);

const changeStep = (step: string) => {
  if (step == currentSteps.value[0]) {
    // 第一步
    currentSteps.value = [currentSteps.value[0]];
  } else {
    // 第二步
    !currentSteps.value.includes(step) && currentSteps.value.push(step);
  }
  console.log("currentSteps", currentSteps.value);
};

const handleSwiperChange = (e) => {
  changeStep(steps[e.detail.current]);
};

const cancel = () => {
  state.showQuery = false;
};

// 关闭查询面板/点击确定 执行查询
const doQuery = async () => {
  state.showQuery = false;
  search();
};

// 默认隐患列表 反之为创建整改单
const isAudit = ref(false);
onLoad((params) => {
  console.log("params", params);
  isAudit.value = params?.audit;
  isAudit.value &&
    uni.setNavigationBarTitle({
      title: "创建整改单",
    });
  isAudit.value && changeStep(steps[0]);
  console.log("isAudit", isAudit.value);

  search();

  console.log("hidden onLoad");
});
onShow(() => {
  console.log("hidden onShow");
  let keys = [
    "targetOrgMasterSignatures",
    "expertSignatures1",
    "expertSignatures2",
  ];
  keys.forEach((key) => {
    uni.getStorage({
      key,
      success({ data }) {
        if (data.objectName) {
          state[key].objectName = data.objectName;
        }
      },
    });
  });
});
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

  .step-box {
    @include flex-center;
    .act {
      color: $uni-color-primary;
    }
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
    background: #e8f1ff;
    color: $uni-color-primary;
  }

  .btn.query {
    background: $uni-color-primary;
    color: #fff;
  }
}
.swiper {
  height: 100%;
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
  ::v-deep .image,
  image {
    margin: 0 30rpx;
    width: calc(100% - 60rpx);
    height: calc(100% - 100rpx);
  }
}
</style>
