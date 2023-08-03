<template>
  <van-swipe-cell
    :right-width="info.state === 'WAIT_AUDIT' && !isOrg ? 160 : 0"
  >
    <van-skeleton title avatar row="2" :loading="data.loading">
      <view class="hidden-box">
        <view class="tit" @click="chooseUid(info.uid)">
          <view>
            <van-icon
              v-if="showCheck"
              color="red"
              :name="uids.includes(info.uid) ? 'passed' : 'circle'"
            />
            <van-tag :type="getTagType(info.level!)">
              {{ info._level }}
            </van-tag>
            <text class="name">{{
              info._subjectType + "-" + info._dangerType
            }}</text>
          </view>
          <text class="ago">{{ info.ago }}</text>
        </view>
        <view class="con" @click.stop="showFlow(info.uid as string)">
          <text>{{ info.remark || "暂无描述" }}</text>
        </view>
        <view class="addr" @click.stop="showFlow(info.uid as string)">
          <van-icon name="location" />
          {{ info.address }}
        </view>

        <view class="bottom">
          <view>
            <van-icon name="user-o" :size="18" />
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
    </van-skeleton>
    <view slot="right" class="right">
      <view class="done" @click="showAuditForm(true)">消除</view>
      <view class="del" @click="showAuditForm(false)">驳回</view>
    </view>
  </van-swipe-cell>
</template>
<script setup lang="ts">
import type { HidangerPgaeVO } from "@/api/model/HidangerPage";
import type { PropType } from "vue";
import { reactive } from "vue";
import { userStore } from "@/state";
import { hidangerAudit } from "@/api/hidden";
import type { AuditCreateReq } from "@/api/model/HidangerAudit";
import { EventType } from "@/enums/eventType";
const emits = defineEmits(["chooseUid"]);
const props = defineProps({
  info: {
    type: Object as PropType<HidangerPgaeVO>,
    default: {
      uid: "",
    },
  },
  uids: {
    default: [],
  },
  showCheck: {
    type: Boolean,
    default: false,
  },
});
const store = userStore();
const isOrg: boolean = store.isOrgUser;
uni.request;
const data = reactive({
  loading: false,
  isPass: false,
  audit: <AuditCreateReq>{
    auditRemark: "",
    auditResult: "PASS",
    riskIds: [] as string[],
  },
});

const chooseUid = (uid) => {
  emits("chooseUid", uid);
};

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
  console.log(request);

  await hidangerAudit(request);
  // 让列表刷新
  uni.$emit(EventType.DANGER_PAGE_REFRESH);
};

setTimeout(() => {
  data.loading = false;
}, 500);

// 查看流程
const showFlow = (uid: string) => {
  uni.navigateTo({
    url: `/pages/hiddenDetail/index?uid=${uid}`,
  });
};

const getTagType = (level: string) => {
  if (level === "ZD") {
    return "danger";
  }
  if (level === "JD") {
    return "warning";
  }
  return "primary";
};
</script>

<style lang="scss" scoped>
.hidden-box {
  margin: 0 30rpx 30rpx;
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
  height: 100%;
  @include flex-between;
  width: 320rpx;
  view {
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

.audit {
  .title {
    text-align: center;
    font-weight: 700;
    font-size: 35rpx;
  }
  .input {
    border: 1rpx solid #ccc;
    height: 65%;
    margin: 20rpx;
  }
  .btns {
    @include flex-between;
    button {
      border: 0px;
      width: 333rpx;
      height: 88rpx;
      line-height: 88rpx;
      border-radius: 10px;
    }
  }
}
</style>
