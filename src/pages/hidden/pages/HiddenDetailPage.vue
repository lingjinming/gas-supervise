<template>
  <scroll-view style="height: 95vh" scroll-y="true" class="scroll-Y container">
    <view
      :loading="data.loading"
      v-for="(node, i) in data.detail.flow"
      :key="i"
    >
      <view class="detail-box" :data-stage="node.stage">
        <!-- 标题 -->
        <view class="tit">
          <view class="top">
            <view>
              <uni-tag v-if="node.stage === 'PUSH'" :text="data.detail._level" :type="getTagType()"/>
              <text style="margin-left: 10rpx; font-weight: 400" class="fs16">{{
                node.title
              }}</text>
            </view>
            <text class="fs12">{{ formatTime(node.stageTime) }}</text>
          </view>
          <!-- 操作人 -->
          <view class="header">
            <view class="img-box">
              <image
                class="img-box_img"
                style="width: 50rpx; height: 50rpx"
                src="/static/img/header.png"
                mode="scaleToFill"
              />
              {{ node.operator + (node.stage === "PUSH" ? "(发布人)" : "") }}
            </view>
            <uni-icons
              color="lightblue"
              size="30"
              type="chatboxes-filled"
              @click="showLeaderComment(node.stage, node.stageId)"
              v-if="store.isGovUser"
            />
          </view>
        </view>
        <!-- 内容 -->
        <view class="con">
          <view v-if="node.stage == 'HANDLE'" class="tag">处置跟进</view>
          <view v-if="node.stage === 'PUSH'" class="remark">{{
            node?.content?.remark
          }}</view>
          <view class="region-imgBox" v-if="node?.picIds">
            <gas-attach
              v-for="img in node?.picIds"
              :key="img.id"
              :id="img.id"
            />
          </view>
          <view class="region-imgBox" v-if="node?.fileIds">
            <gas-attach
              v-for="file in node?.fileIds"
              :key="file.id"
              :id="file.id"
              :fileName='file.name'
            />
          </view>
          <!-- 隐患推送 -->
          <template v-if="node.stage == 'PUSH'">
            <template v-if="data.detail.dangerSource === 'GOV'">
              <view>关联整改单: {{ node?.content?.orderCode }}</view>
              <view>关联检查计划: {{ node?.content?.planCode }}</view>
            </template>
            <view
              >隐患类型:
              {{ node.content._subjectType + node.content._dangerType }}</view
            >
            <view>隐患场景: {{ node.content._subjectType }}</view>
            <view>整改单位: {{ node.content.handleOrg }}</view>
            <view>详细地址: {{ node.content.address }}</view>
          </template>
          <!-- 隐患派单 -->
          <template v-if="node.stage == 'DISPATCH'">
            <view>派单说明: {{ node.content.dispatchRemark || "暂无" }}</view>
            <view>对接人: {{ node.content.receiverName }}</view>
            <view>所属部门: {{ node.content.receiverOrgName }}</view>
            <view>联系方式: {{ node.content.receiverPhone }}</view>
          </template>
          <!-- 隐患接收 -->
          <template v-if="node.stage == 'RECEIVE'">
            <view>接收时间: {{ node.stageTime }}</view>
          </template>
          <!-- 隐患整改 -->
          <template v-if="node.stage == 'HANDLE'">
            <view>是否和隐患描述一致: {{ node.content._sameWithRemark }}</view>
            <view>整改进度: {{ node.content._handleResult }}</view>
            <view>整改描述: {{ node.content.handleRemark }}</view>
          </template>
          <!-- 隐患结单 -->
          <template v-if="node.stage == 'STATEMENT'">
            <view>情况说明: {{ node.content.remark }}</view>
          </template>
          <!-- 隐患审核 -->
          <template v-if="node.stage == 'AUDIT' && node.title === '隐患驳回'">
            <view>驳回原因: {{ node.content.remark }}</view>
          </template>
          <template v-if="node.stage == 'AUDIT' && node.title === '隐患消除'">
            <view>备注: {{ node.content.remark }}</view>
          </template>
          <!-- 节点上的评论 -->
          <view class="commentList" v-if="node.commentList">
            <template v-for="(comment, index) in node.commentList" :key="index">
              <view class="img-box">
                <image
                  style="width: 30rpx; height: 30rpx"
                  src="/static/img/header.png"
                  mode="scaleToFill"
                />
                {{ comment.leaderOrgName }}
                <view style="word-break: break-all; display: inline">
                  <text style="color: #333; font-weight: 600">
                    {{ comment.leaderName }}:
                  </text>
                  {{ comment.leaderComment }}
                </view>
              </view>
            </template>
          </view>
        </view>
      </view>
    </view>
    <view class="bottom"></view>
  </scroll-view>
  
  <view class="opt-btn" v-if="canHandle">
    
    <button class="danger-btn" plain="true" icon="exchange" @click="goToHandle(false)"  >
      <uni-icons type="right"></uni-icons>  整改跟进
    </button>
    <button class="danger-btn" plain="true" icon="passed" @click="goToHandle(true)">
      <uni-icons type="checkmarkempty"></uni-icons> 整改完成
    </button>
  </view>
  <!-- 领导评论弹窗 -->
  <uni-popup ref="inputDialog" type="dialog">
			<uni-popup-dialog 
        ref="inputClose"
        v-if="makeUniAppHappy"
        mode="input" 
        title="领导批示"
				placeholder="请输入内容" 
        @confirm="submitLeaderComment">
      </uni-popup-dialog>
  </uni-popup>
</template>
<script setup lang="ts">
import {  reactive } from "vue";
import { userStore } from "@/state";
import { EventType } from "@/enums/eventType";


import {getHidangerFlowByUid,postHidangerGovLeaderComment} from '@/api/gen/GasSuperviseApi'
import type {HidnagerFlowVO,HidangerFlowDtoStage,LeaderCommentCreateDTO} from '@/api/gen/data-contracts'
import { useLoading } from "@/hooks/useLoading";

// @see https://github.com/dcloudio/uni-ui/issues/457
const makeUniAppHappy = ref(false)
const store = userStore();
const data = reactive({
  uid: 0,
  detail: <HidnagerFlowVO>{
 
  },
  loading: false,
  showComment: false,
  commentBody: <LeaderCommentCreateDTO | any>{
    comment: '',
  },
});
const inputDialog = ref();

// 是否可以处置隐患
const canHandle = computed(() => (store.userInfo?.userId === data.detail.receiverId) && data.detail.state === 'WAIT_HANDLE');

const getTagType = () => {
  if (data.detail.level === "ZD") {
    return "error";
  }
  if (data.detail.level === "JD") {
    return "warning";
  }
  return "primary";
};

onLoad((options) => {
  data.uid = options?.uid;
  if(data.uid) {
    getDetail();
    uni.$on(EventType.DANGER_DETAIL_REFRESH, getDetail);
  }
});
onUnload(() => {
  uni.$off(EventType.DANGER_DETAIL_REFRESH, getDetail);
});



// 去整改
const goToHandle = (isComplete: boolean) => {
  //@ts-ignore
  let checkDate = data.detail.flow[0].content.checkDate;
  uni.navigateTo({
    url: `/pages/hidden/pages/HiddenReformPage?uid=${data.uid}&isComplete=${isComplete}&checkDate=${checkDate}`,
  });
};



// 点击展示领导批示
const showLeaderComment = (stage: HidangerFlowDtoStage|undefined, stageId: string|undefined) => {
  data.commentBody.stageId = stageId;
  data.commentBody.stage = stage;
  data.commentBody.dangerId = data.detail.dangerId!;
  makeUniAppHappy.value = true;
  nextTick(() => {
    inputDialog.value?.open()
  })
};
// 点击关闭领导评论
const closeComment = () => {
  inputDialog.value?.close()
  data.commentBody = {comment:''};
};
// 提交领导评论
const submitLeaderComment = async (value?: string) => {
  if(!value) {
    return;
  }
  let com = {...data.commentBody,comment: value}
  const response = postHidangerGovLeaderComment(com);
  useLoading(response,() => {
    closeComment();
    // 重新拉取流程详情
     getDetail();
  })
};

const getDetail = async () => {
  data.loading = true;
  try{
    const result = await getHidangerFlowByUid(data.uid);
    if(result.data) {
      const { level, _level, dangerId, flow, state, dangerSource ,receiverId} = result.data ;
      data.detail._level = _level;
      data.detail.state = state;
      data.detail.level = level;
      data.detail.flow = flow;
      data.detail.dangerId = dangerId;
      data.detail.dangerSource = dangerSource;
      data.detail.receiverId = receiverId;
    }
  }finally{
    data.loading = false;
  }
  
};

/**
 * 将 2023-07-25 16:58:26 去掉秒 转为 2023-07-25 16:58
 * @param time 2023-07-25 16:58:26
 */
const formatTime = (time: string|undefined) => {
  // 字符串截取,去掉最后三位
  return time?time.slice(0, 16) : '';
};
</script>
<style lang="scss" scoped>
.opt-btn {
  position: absolute;
  display: flex;
  justify-content: space-around;
  bottom: 0rpx;
  left: 0;
  width: 100%;
  padding-bottom: 30rpx;
  background-color: #fff;
  .danger-btn {
    width: 45%;
    height: 88rpx;
    border-radius: 10rpx;
    border: 1rpx solid #ccc;
  }
}
.bottom {
  height: 150rpx;
  width: 100%;
}
.detail-box {
  word-break: break-all;
  position: relative;
  padding: 40rpx 40rpx 0rpx 80rpx;

  &[data-stage="PUSH"],
  &[data-stage="DISPATCH"],
  &[data-stage="RECEIVE"],
  &[data-stage="STATEMENT"],
  &[data-stage="HANDLE"],
  &[data-stage="AUDIT"] {
    &::before,
    &::after {
      content: "";
      position: absolute;
    }
    &::after {
      top: 50rpx;

      left: 30rpx;
      width: 20rpx;
      height: 20rpx;
      border-radius: 50%;
    }
    &::before {
      top: 80rpx;
      left: 38rpx;
      height: calc(100% - 50rpx);
    }
  }
  &[data-stage="PUSH"] {
    &::before {
      border: 2rpx solid rgba($color: $uni-color-error, $alpha: 0.8);
    }
    &::after {
      background: rgba($color: $uni-color-error, $alpha: 0.8);
    }
  }
  &[data-stage="DISPATCH"] {
    &::before {
      border: 2rpx dashed rgba($color: $uni-color-primary, $alpha: 0.8);
    }
    &::after {
      background: rgba($color: $uni-color-primary, $alpha: 0.8);
    }
  }
  &[data-stage="RECEIVE"] {
    &::before {
      border: 2rpx dashed rgba($color: $uni-color-primary, $alpha: 0.8);
    }
    &::after {
      background: rgba($color: $uni-color-primary, $alpha: 0.8);
    }
  }
  &[data-stage="HANDLE"] {
    &::before {
      border: 2rpx dashed rgba($color: $uni-color-primary, $alpha: 0.8);
    }
    &::after {
      background: rgba($color: $uni-color-primary, $alpha: 0.8);
    }
  }
  &[data-stage="STATEMENT"] {
    &::before {
      border: 2rpx dashed rgba($color: $uni-color-primary, $alpha: 0.8);
    }
    &::after {
      background: rgba($color: $uni-color-primary, $alpha: 0.8);
    }
  }

  &[data-stage="AUDIT"] {
    &::before {
      border: 2rpx dashed rgba($color: $uni-color-success, $alpha: 0.8);
      height: calc(100% - 150rpx);
    }
    &::after {
      background: rgba($color: $uni-color-success, $alpha: 0.8);
    }
  }
  .tit {
    margin-bottom: 20rpx;
  }

  .header {
    @include flex-between;
    gap: 20rpx;
    margin: 20rpx 0;

   
  }

  .top {
    @include flex-between;
  }

  .con {
    background: $uni-bg-color;
    padding: 20rpx;

    view {
      color: #4b5b6c;
      line-height: 50rpx;
    }

    .tag{
      display: flex;
      justify-content: flex-end;
      line-height: 60rpx;
      color: $uni-color-primary;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        right: 120rpx;
        top: 24rpx;
        width: 10rpx;
        height: 10rpx;
        border-radius: 50%;
        background: $uni-color-primary;
      }
    }
  }
}

.remark {
  color: $uni-text-color !important;
  font-weight: 600;
}

.region-imgBox {
  overflow-x: auto;
  @include flex-between;
}

.comment {
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
.commentList {
  padding: 20rpx;
}
.img-box {
  .img-box_img {
    position: relative;
    top: 5rpx;
  }
}
</style>
