<template>
  <uni-swipe-action>
    <uni-swipe-action-item>
      <view class="hidden-box" @click.stop="showFlow(info.uid as string)">
        <view class="tit">
          <view>
            <slot></slot>
            <uni-tag size="small" :text="info._level" :type="getTagType(info.level!)"/>
            <text class="name">{{
              info._subjectType + "-" + info._dangerType
            }}</text>
          </view>
          <text class="ago">{{ info.ago }}</text>
        </view>
        <view class="con" >
          <text>{{ info.remark || "暂无描述" }}</text>
        </view>
        <view class="addr" >
          <uni-icons type="location" size="16"></uni-icons>
          {{ info.address }}
        </view>

        <view class="bottom">
          <view>
            <uni-icons type="person" size="16"></uni-icons>
            由<text class="publisher">{{ info.checkBy }}</text
            >发布
          </view>
          <template v-if="'HANDLED,WAIT_AUDIT'.includes(info.state!)">
            <view class="state handled"> {{ info._state }} </view>
          </template>
          <template v-else>
            <view class="state wait-handle"> 待整改 </view>
          </template>
        </view>
      </view>
      <template #right>
        <view class="right"  v-if="showOptions">
          <view class="opt done" @click="showAuditForm(true)">消除</view>
          <view class="opt del" @click="showAuditForm(false)">驳回</view>
        </view>
      </template>
    </uni-swipe-action-item>
  </uni-swipe-action>

</template>
<script setup lang="ts">
import { reactive } from "vue";
import { userStore } from "@/state";
import { EventType } from "@/enums/eventType";
import {putHidangerGovAudit} from '@/api/gen/GasSuperviseApi'
import type {Risk2DangerDTO} from '@/api/gen/data-contracts'


const props = defineProps({
  info: {
    type: Object,
    default: {
      uid: "",
    },
  }
});
const store = userStore();
const isOrg: boolean = store.isOrgUser;
const data = reactive({
  loading: false,
  isPass: false,
  audit: <Risk2DangerDTO>{
    auditRemark: "",
    auditResult: "PASS",
    riskIds: [] as number[],
  },
});
/**
 * 非企业用户&&待审核状态
 */
const showOptions = computed(() => {
  return !isOrg && props.info.state === "WAIT_AUDIT";
})



// 展示审核弹窗
const showAuditForm = (isPass: boolean) => {
  const title = isPass ? "确认消除该隐患?" : "请输入驳回原因";
  data.isPass = isPass;
  uni.showModal({
    title: title,
    editable: !isPass,
    placeholderText: "驳回原因",
    success: (res) => {
      data.audit.auditRemark = res.content;
      if (res.confirm) {
        submitAudit();
      }
    },
  });
};

// 提交审核记录
const submitAudit = async () => {
  const request = data.audit;
  request.auditResult = data.isPass ? "PASS" : "NOT_PASS";
  request.riskIds = [props.info.uid!];

  await putHidangerGovAudit(request);
  // 让列表刷新
  uni.$emit(EventType.DANGER_PAGE_REFRESH);
};

setTimeout(() => {
  data.loading = false;
}, 500);

// 查看流程
const showFlow = (uid: string) => {
  uni.navigateTo({
    url: `/pages/hidden/pages/HiddenDetailPage?uid=${uid}`,
  });
};

const getTagType = (level: string) => {
  if (level === "ZD") {
    return "error";
  }
  if (level === "JD") {
    return "warning";
  }
  return "primary";
};
</script>

<style lang="scss" scoped>
.hidden-box {
  margin: 0 0rpx 30rpx;
  background: #fff;
  border-radius: 4rpx;
  padding: 30rpx;
  box-shadow: $uni-box-shadow;
  .tit {
    margin-bottom: 25rpx;
    @include flex-between;

    .name {
      margin-left: 13rpx;
      font-size: 30rpx;
      font-family: Microsoft YaHei;
      font-weight: 600;
      color: #222222;
    }

    .ago {
      color: #989898;
    }
  }

  .con {
    color: #222222;
    margin-bottom: 20rpx;

    .name {
      color: $uni-color-primary;
    }
  }

  .addr {
    color: #4b5b6c;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 23rpx;
  }

  .bottom {
    @include flex-between;

    .publisher {
      font-weight: 600;
      margin: 0 10rpx;
    }

    .gohandle {
      width: 144rpx;
      height: 62rpx;
      line-height: 62rpx;
      border: 1rpx solid $uni-color-primary;
      border-radius: 31rpx;
      margin-right: 0;
      font-size: 26rpx;
      color: $uni-color-primary;
      font-weight: 500;
    }
  }
}

.right {
  height: calc(100% - 30rpx);
  @include flex-between;
  width: 320rpx;
  padding-bottom: 30rpx;
  .opt {
    @include flex-center;
    width: 50%;
    height: 100%;
    color: #fff;
  }
  .done {
    background: $uni-color-success;
  }
  .del {
    background: $uni-color-error;
  }
}
</style>
