<template>
  <view class="top">
    <template v-if="isAudit">
      <view class="step-box">
        <view
          @click="changeStep(step)"
          v-for="(step, i) in steps"
          :key="i"
          :class="{ act: currentSteps.includes(step) }"
          >{{ step }}</view
        >
      </view>
    </template>
    <template v-else>
      <text
        >共计<text class="total">{{ total }}</text
        >条隐患</text
      >
      <view @click="state.showQuery = true" class="search">
        筛选<van-icon name="arrow-down" />
      </view>
    </template>
  </view>
  <swiper
    class="swiper"
    :circular="false"
    :indicator-dots="false"
    :autoplay="false"
    :current="stepsLength - 1"
    @change="handleSwiperChange"
  >
    <swiper-item>
      <!-- 隐患列表 -->
      <scroll-view
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
      </scroll-view>
    </swiper-item>
    <swiper-item v-if="isAudit" style="overflow-y: auto;height: calc(100% - 60rpx);  background: #fff;
">
      <van-cell-group>
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
            :value="reportForm.handleDate"
            slot="input"
            disabled
            style="width: 100%"
            placeholder="请选择"
          />
        </van-field>

        <view class="signature-box" @click="navigatoSignature('charge')">
          <van-field
            title-width="100%"
            :border="false"
            required
            label="企业负责人"
            readonly
          />

          <region-img
            :disabledPreview="true"
            v-if="state.charge.objectName"
            region="test"
            :id="state.charge.objectName"
          />
          <image v-else src="../../static/img/bg.png" mode="scaleToFill" />
        </view>
        <view class="signature-box" @click="navigatoSignature('charge1')">
          <van-field
            title-width="100%"
            :border="false"
            required
            label="检查人1（专家）"
            readonly
          />

          <region-img
            :disabledPreview="true"
            v-if="state.charge.objectName"
            region="test"
            :id="state.charge.objectName"
          />
          <image v-else src="../../static/img/bg.png" mode="scaleToFill" />
        </view>
        <view class="signature-box" @click="navigatoSignature('charge2')">
          <van-field
            title-width="100%"
            :border="false"
            required
            label="检查人2（专家）"
            readonly
          />
          <region-img
            :disabledPreview="true"
            v-if="state.charge.objectName"
            region="test"
            :id="state.charge.objectName"
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
        >确定</van-button
      >
      </van-cell-group>
      
    </swiper-item>
  </swiper>
  <!-- 日历 -->
  <van-calendar
    :show="handleDatePopupIsShow"
    @close="handleDatePopupIsShow = false"
    @confirm="chooseDate"
  />
  <!-- 搜索面板 -->
  <van-popup
    v-if="!isAudit"
    :show="state.showQuery"
    position="top"
    custom-style="padding: 30rpx"
    @close="cancel"
  >
    <!-- 隐患类型 -->
    <van-cascader-new
      dicType="RISK_SUBJECT_TYPE_TREE"
      label="隐患类别"
      title="隐患类别"
      v-model="state.query.dangerType"
      v-model:subjectType="state.query.subjectType"
    />
    <!-- 所属企业(政府用户可见) -->
    <van-picker-new
      v-if="!isOrg"
      dicType="org"
      label="所属企业"
      title="上报企业"
      v-model="state.query.orgId"
    />
    <!-- 隐患状态 -->
    <check-group
      useAll
      v-model="state.query.state"
      title="隐患状态"
      :options="[
        { label: '待整改', value: 'WAIT_HANDLE' },
        { label: '已整改', value: 'WAIT_AUDIT,HANDLED' },
      ]"
    >
    </check-group>
    <!-- 隐患来源 -->
    <check-group
      useAll
      v-model="state.query.dangerSource"
      title="隐患来源"
      :options="state.dics.source"
    ></check-group>
    <!-- 隐患级别 -->
    <check-group
      useAll
      v-model="state.query.level"
      title="隐患级别"
      :options="state.dics.level"
    ></check-group>

    <!-- 确定 -->
    <view class="bottom">
      <button plain="true" @click="cancel" class="btn cancel">取消</button>
      <button plain="true" @click="doQuery" class="btn query">查询</button>
    </view>
  </van-popup>
</template>

<script setup lang="ts">
import type {
  HidangerPgaeVO,
  HidangerOrgPageQuery,
} from "@/api/model/HidangerPage";
import type { DicItem } from "@/api/model/SysDictionary";

import { hidangerPage } from "@/api/hidden";
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
  dics: {
    state: [] as DicItem[],
    source: [] as DicItem[],
    level: [] as DicItem[],
    subject: [] as DicItem[],
  },
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

  charge: {
    objectName: "",
  },
});

let reportForm = ref({
  handleDate: "",
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

uni.$on(EventType.DANGER_PAGE_REFRESH, () => {
  search();
});

const chooseDate = (e) => {
  handleDatePopupIsShow.value = false;
  reportForm.value.handleDate = formatDate(e.detail);
};
// 进入签字页面
const navigatoSignature = (key) => {
  uni.navigateTo({
    url: `/pages/signature/index?key=${key}`,
  });
};

const steps = ["选择需要整改的隐患", "填写整改单信息"];
let currentSteps = ref(["选择需要整改的隐患"]);
const stepsLength = computed(() => currentSteps.value.length);

const changeStep = (step: string) => {
  if (step == currentSteps.value[0]) {
    // 第一步
    currentSteps.value = [currentSteps.value[0]];
  } else {
    // 第二步
    !currentSteps.value.includes(step) && currentSteps.value.push(step);
  }
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

// 加载所需字典
const loadDic = async () => {
  const res = await getDictList(
    "RISK_DANGER_STATUS!DANGER,RISK_DANGER_LEVEL,RISK_SUBJECT_TYPE,RISK_DANGER_SOURCE"
  );
  state.dics.state = res["RISK_DANGER_STATUS!DANGER"];
  state.dics.source = res.RISK_DANGER_SOURCE;
  state.dics.level = res.RISK_DANGER_LEVEL;
  state.dics.subject = res.RISK_SUBJECT_TYPE;
};
// 默认隐患列表 反之为创建整改单
const isAudit = ref(false);
onLoad((params) => {
  loadDic();
  search();
  isAudit.value = params?.audit;

  isAudit.value &&
    uni.setNavigationBarTitle({
      title: "创建整改单",
    });

  console.log("hidden onLoad");
});
onShow(() => {
  console.log("hidden onShow");
  uni.getStorage({
    key: "charge",
    success({ data }) {
      console.log(data);
      state.charge.objectName = data.objectName;
    },
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
