<template>
  <scroll-view style="height: 100%;padding-bottom: 100rpx;" scroll-y="true" class="scroll-Y container">

    <van-skeleton title avatar row="3" :loading="data.loading" v-for="(node, i) in data.detail.flow" :key="i">
      <view class="detail-box" :data-stage="node.stage">
        <view class="tit">
          <view class="top">
            <view>
              <van-tag v-if="node.stage === 'PUSH'" :type="getTagType()">
                {{ data.detail._level }}
              </van-tag>
              <text style="margin-left: 10rpx;" class="fs16">{{ node.title }}</text>
            </view>
            <text class="fs12">{{ node.stageTime }}</text>
          </view>
          <view class="header">
            <view class="img-box">
              <image style="width: 50rpx;height: 50rpx;" src="../../static/img/header.png" mode="scaleToFill" />
              {{ node.operator + (node.stage === 'PUSH' ? '(发布人)' : '') }}
            </view>
              <van-icon color="" name="comment-o" @click="showLeaderComment(node.stage, node.stageId)"
                v-if="store.isGovUser"/>

          </view>
        </view>
        <view class="con">
          <view class="remark">{{ node?.content?.remark }}</view>
          <view class="region-imgBox" v-if="node?.content?.picIds">
            <region-img v-for="img in node?.content?.picIds" :key="img" region="test" :id="img" />
          </view>
          <template v-if="node.stage == 'PUSH'">
            <view>隐患类型: {{ node.content._subjectType + node.content._dangerType }}</view>
            <view>整改单位: {{ node.content.handleOrg }}</view>
            <view>详细地址: {{ node.content.address }}</view>
          </template>

        <!-- 节点上的评论 -->
        <view class="commentList" v-if="node.commentList">
          <view v-for="(comment, index) in node.commentList" :key="index">
            <view class="img-box">
              <image style="width: 30rpx;height: 30rpx;" src="../../static/img/header.png" mode="scaleToFill" />
              {{comment.leaderOrgName }} 
              <text style="color: #333;font-weight: 600;">{{ comment.leaderName }}</text>:
              {{ comment.leaderComment }}
            </view>
          </view>
        </view>
        </view>

      </view>
    </van-skeleton>
  </scroll-view>
  <!-- 领导评论弹窗 -->
  <van-popup :show="data.showComment" position="bottom" custom-style="height: 40%;" @close="closeComment">
    <view class="comment">
      <view class="title">领导批示</view>
      <view class="input">
        <textarea v-model="data.commentBody.comment">

        </textarea>
      </view>
      <view class="btns">
        <button type="default" @click="closeComment">取消</button>
        <button @click="submitLeaderComment">确认</button>
      </view>
    </view>
  </van-popup>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { userStore } from "@/state";
import { getHidangerFlow ,createLeaderComment} from "../../api/hidden";
import type { Flow,LeaderCommentCreate,Stage} from '@/api/model/HidangerFlow'

const store = userStore();

const data = reactive({
  uid: '',
  detail: <Flow>{
    state: '',
    dangerId: undefined,
    level: undefined,
    _level: undefined,
    flow: [],
  },
  loading: false,
  showComment: false,
  commentBody: <LeaderCommentCreate|any>{
    comment: undefined,
  }
})

let loading = ref(true);

const getTagType = () => {
  if (data.detail.level === 'ZD') {
    return 'danger';
  }
  if (data.detail.level === 'JD') {
    return 'warning'
  }
  return 'primary'
}


onLoad((options) => {
  getDetail(options!.uid);
});

// 点击展示领导批示
const showLeaderComment = (stage: Stage, stageId: string) => {
  data.commentBody.stageId = stageId;
  data.commentBody.stage = stage;
  data.commentBody.dangerId = data.detail.dangerId!;
  data.showComment = true;
}
// 点击关闭领导评论
const closeComment = () => {
  data.showComment = false;
  data.commentBody = {}
}
// 提交领导评论
const submitLeaderComment = async () => {
  console.log(data.commentBody);
  try{
    loading.value = true;
    await createLeaderComment(data.commentBody);
    closeComment();
    // 重新拉取流程详情
    await getDetail(data.uid);

  }finally {
    loading.value = false;
  }
}

const getDetail = async (id: string) => {
  try {
    loading.value = true;
    data.uid = id;

    const { level, _level, dangerId, flow,state } = (await getHidangerFlow(id)).data;
    data.detail._level = _level;
    data.detail.state = state;
    data.detail.level = level;
    data.detail.flow = flow;
    data.detail.dangerId = dangerId;
  } finally {
    loading.value = false;
  }


};
</script>
<style lang="scss" scoped>

.detail-box {
  position: relative;
  padding: 40rpx 40rpx 0rpx 80rpx;

  &[data-stage='PUSH'],
  &[data-stage='HANDLE'],
  &[data-stage='AUDIT']{
    &::before,&::after{
      content: '';
      position: absolute;
    }
    &::after{
      top: 50rpx;

      left: 30rpx;
      width: 20rpx;
      height: 20rpx;
      border-radius: 50%;
    }
    &::before{
      top: 80rpx;
      left: 38rpx;
      height: calc(100% - 50rpx);
    }
  }
  &[data-stage='PUSH']{
    &::before{
      border: 2rpx solid rgba($color: $uni-color-error, $alpha: .8);
    }
     &::after{
      background:rgba($color: $uni-color-error, $alpha: .8);
    }
  }
  &[data-stage='HANDLE']{
    &::before{
      border: 2rpx dashed rgba($color: $uni-color-primary, $alpha: .8);
    }
    &::after{
      background: rgba($color: $uni-color-primary, $alpha: .8);
    }
  }
  &[data-stage='AUDIT']{
    &::before{
      border: 2rpx dashed rgba($color: $uni-color-success, $alpha: .8);
      height: calc(100% - 150rpx);
    }
    &::after{
      background: rgba($color: $uni-color-success, $alpha: .8);
    }
  }
  .tit {
    margin-bottom: 20rpx;
  }

  .header {
    @include flex-between;
    gap: 20rpx;
    margin: 20rpx 0;

    button {}
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
.commentList{
  padding: 20rpx;
}
.img-box{
  @include flex-center;
  image{
    margin-right: 15rpx;
  }
}
</style>
