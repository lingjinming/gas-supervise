<template>
  <view class="top-info">
    <!-- 第一行时间 -->
    <view class="info-line">
      <image class="image-bg" src="/static/img/third_build_time.png"/>
      <view class="info-time">
        <view class="time-item">
          <view class="title">
            施工开始时间
          </view>
          <view class="time">
            {{ state.info.planTimeStart }}
          </view>
        </view>
        <view class="time-item line"></view>
        <view class="time-item">
          <view class="title">
            施工结束时间
          </view>
          <view class="time">
            {{ state.info.planTimeEnd }}
          </view>
        </view>
      </view>
    </view>
    <!-- 第二行信息 -->
    <view class="info-line gray">
      <view class="info-item">
        <view class="info">{{ state.info._buildType }}</view>
        <view class="title">施工类型 </view>
      </view>
      <view class="info-item">
        <view :class="['info',isOk(state.info.buildState) ? 'success':'']">{{ state.info._buildState }}</view>
        <view class="title">施工状态 </view>
      </view>
      <view class="info-item">
        <view :class="['info',isOk(state.info.reportState) ? 'success':'']"> {{ state.info._reportState }}</view>
        <view class="title">交底状态</view>
      </view>
    </view>
    <view class="info-line gray">
      <view class="info-item">
        <view :class="['info',isOk(state.info.guardState) ? 'success':'']"> {{ state.info?._guardState }}</view>
        <view class="title">看护状态 </view>
      </view>
      <view class="info-item">
        <view class="info">{{ state.info?._orgId }}</view>
        <view class="title">所属单位 </view>
      </view>
    </view>
  </view>
  <view class="tabs">
    <van-tabs    :active="activeTab" @change="onChangeTab">
      <scroll-view style="height: 650rpx" scroll-y="true" class="scroll-Y container">
        <van-tab title="看护记录">
          <van-empty v-if="!state.info.guardList?.length" description="暂无数据"></van-empty>
          <view v-else>
            <view class="flow-node" v-for="item in state.info.guardList" :key="item.uid">
              <view class="operator">
                <view class="avatar"></view>
                <view class="name">{{ item.guarderName }}</view>
              </view>
              <view class="time">
                {{ item.guardTime.substring(0, 16) }}
              </view>
              <view class="content">
                <view class="remark">
                  {{ item.remark }}
                </view>
                <view class="imgs">
                  <region-img  v-for="img in item?.picIds" :key="img.id"  :id="img.id" />
                </view>
              </view>
            </view>
          </view>
        
        </van-tab>
        <van-tab title="资料详情">
          <!-- 第三方施工信息 -->
          <view class="info-form">
            <view class="title">第三方施工信息</view>
            <view class="form-item">
              <view class="label">上报时间</view>
              <view class="value">{{ state.info.createTime }}</view>
            </view>
            <view class="form-item">
              <view class="label">所属企业</view>
              <view class="value">{{ state.info._orgId }}</view>
            </view>
            <view class="form-item">
              <view class="label">所属区域</view>
              <view class="value">{{ state.info._districtId }}</view>
            </view>
            <view class="form-item">
              <view class="label">施工地点</view>
              <view class="value">{{ state.info.constructionAddress }}</view>
            </view>
            <view class="form-item">
              <view class="label">交底状态</view>
              <view class="value">{{ state.info._reportState }}</view>
            </view>
            <view class="form-item">
              <view class="label">看护状态</view>
              <view class="value">{{ state.info._guardState }}</view>
            </view>
            <view class="form-item">
              <view class="label">施工时间</view>
              <view class="value">{{ `${state.info.planTimeStart} - ${state.info.planTimeEnd}` }}</view>
            </view>
            <view class="form-item">
              <view class="label">施工类型</view>
              <view class="value">{{ state.info._buildType }}</view>
            </view>
          </view>
          <!-- 相关方信息 -->
          <view class="info-form">
            <view class="title">相关方信息</view>
            <view class="form-item">
              <view class="label">交底人员</view>
              <view class="value">{{ state.info.reporterName }}</view>
            </view>
            <view class="form-item">
              <view class="label">联系电话</view>
              <view class="value">{{ state.info.reporterPhone }}</view>
            </view>
            <view class="form-item">
              <view class="label">建设单位</view>
              <view class="value">{{ state.info.buildUnitName }}</view>
            </view>
            <view class="form-item">
              <view class="label">联系电话</view>
              <view class="value">{{ state.info.buildUnitContactPhone }}</view>
            </view>
            <view class="form-item">
              <view class="label">监理单位</view>
              <view class="value">{{ state.info.supUnitName }}</view>
            </view>
            <view class="form-item">
              <view class="label">联系电话</view>
              <view class="value">{{ state.info.supUnitContactPhone }}</view>
            </view>

          </view>
          <!-- 交底图片 -->
          <view class="info-form">
            <view class="title">交底图片</view>
            <view class="info-images">
              <template v-if="state.info.reportPicIds?.length">
              <region-img  v-for="img in state.info.reportPicIds" :key="img.id"  :id="img.id" />
              </template>
              <template v-else>
                <view>未上传</view>
              </template>
            </view>
          </view>
          <!-- 管网保护方案图片 -->
          <view class="info-form">
            <view class="title">管网保护方案图片</view>
            <view class="info-images">
              <template v-if="state.info.schemaPicIds?.length">
              <region-img  v-for="img in state.info.schemaPicIds" :key="img.id"  :id="img.id" />
              </template>
              <template v-else>
                <view>未上传</view>
              </template>
            </view>
          </view>
          <!-- 管网保护协议照片 -->
          <view class="info-form">
            <view class="title">管网保护协议图片(施工方签字照片)</view>
            <view class="info-images">
              <template v-if="state.info.protocolPicIds?.length">
              <region-img  v-for="img in state.info.protocolPicIds" :key="img.id"  :id="img.id" />
              </template>
              <template v-else>
                <view>未上传</view>
              </template>
            </view>
          </view>
        </van-tab>
      </scroll-view>
    </van-tabs>
  </view>
  <!-- 底部操作按钮 -->
  <view class="bottom-buttons">
    <view @click="goReport"> <van-icon name="upgrade" /> 上传交底</view>
    <view @click="goGuard"> <van-icon name="add-o" /> 新增看护</view>
    <view @click="goFinish"  v-if="state.info.buildState !== 'COMPLETED'"> <van-icon name="passed" />施工完成</view>
    <view @click="goEdit" v-if="state.info.buildState !== 'COMPLETED'"><van-icon name="edit" />修改</view>
  </view>
</template>
<script setup lang="ts">
import { ref ,reactive} from 'vue';
import { detail ,complete} from '@/api/generated/ThirdBuild';
import type {ThirdBuildDetailVO} from '@/api/generated/data-contracts'
import { userStore } from '@/state';
import {EventType} from '@/enums/eventType'

const store = userStore()
const region = store.auth.activeServer?.region

const state = reactive({
  uid: null,
  info: <ThirdBuildDetailVO> {
    
  }
})

onLoad((options) => {
  state.uid = options!.uid
  getDetail(options!.uid);
});
uni.$on(EventType.THIRD_BUILD_REFRESH,function(data){
  if(state.uid) {
    getDetail(state.uid)
  }
})

let activeTab = ref(0);
const onChangeTab = ({ name }) => {
  activeTab.value = name;
};

const getDetail = async (uid: string) => {
  const { data } = await detail(uid);
  state.info = data;
}
// 跳转到编辑页面
const goEdit = () => {
  // 已完成的不给修改
  if(state.info.buildState === 'COMPLETED') {
    uni.showToast({
      icon: 'error',
      title: '施工已完成!'
    })
  } else {
    uni.navigateTo({
      url: '/pages/thirdBuild/pages/thirdBuildFormPage?uid='+state.info.uid
    })
  }
  
}
// 跳转到交底页面
const goReport = () => {
  uni.navigateTo({
    url: '/pages/thirdBuild/pages/thirdBuildReportFormPage?uid='+state.info.uid
  })
}
// 跳转到看护页面
const goGuard = () => {
  uni.navigateTo({
    url: '/pages/thirdBuild/pages/thirdBuildGuardFormPage?uid='+state.info.uid
  })
}
// 施工完成
const goFinish = () => {
  uni.showModal({
    title: '提示',
    content: '确定施工完成?',
    success: function (res) {
      if (res.confirm) {
        complete({ids: [state.info.uid]}).then(() => {
          getDetail(state.info.uid)
        })
      } 
    }
  });

}
const isOk = (value: string) => {
  return 'REPORTED,GUARDED,COMPLETED'.includes(value)
}

</script>
<style lang="scss" scoped>
.top-info {
  background: #fff;
  border-radius: 4rpx;
  padding: 24rpx;
  margin-bottom: 21rpx;
  box-shadow: $uni-box-shadow;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .info-line.gray {
    background: #F8F8F8;
  } 
  & .info-line:not(:last-child) {
    margin-bottom: 25rpx;
  }
  .info-line {
    position: relative;
    width: 100%;
    height: 142rpx;
    display: flex;
    align-items: center;
    padding: 0 30rpx;
    z-index: 0;
    
    .image-bg {
      position: absolute;
      z-index: -1;
      left: 0;
      right: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
    .info-time {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      .time-item {
        .title {
          font-size: 24rpx;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #E7F5FF;
          line-height: 26rpx;
          margin-bottom: 17rpx;
        }
        .time {
          font-size: 30rpx;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 26rpx;
        }
      }
      .time-item.line{
        position: relative;
        width: 188rpx;
        height: 2rpx;
        background: transparent; 

        &:before,
        &:after {
          content: "";
          position: absolute;
          width: 9rpx;
          height: 9rpx;
          border-radius: 50%;
          top: -4rpx; 
        }

        &:before {
          left: -5rpx;
          background: #006CFF;
        }

        &:after {
          right: -5rpx;
          background: #C8D2EC;
        }
        background-image: repeating-linear-gradient(90deg,  #C8D2EC, #C8D2EC 5rpx, transparent 5rpx, transparent 10rpx);
      }
    }

    & .info-item:not(:last-child) {
      border-right: 1rpx solid #ccc;
    }
    .info-item {
      width: 30%;
      margin: 5px; 
      box-sizing: border-box;
      text-align: center;
      .title {
        font-size: 26rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #4B5B6C;
        line-height: 26rpx;
      }
      .info {
        font-size: 26rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #222222;
        line-height: 26rpx;
        margin-bottom: 22rpx;
        &.success {
          font-size: 26rpx;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #01C14A;
          line-height: 26rpx;
        }
      }
    }
  }
  
}
.tabs {
  background-color: #fff;
  .container {
    border-top: 1rpx solid #ccc;
    padding-top: 30rpx;
  }
  & .flow-node:last-child {
    margin-bottom: 60rpx;
  }
  .flow-node {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    margin: 0 28rpx;
    padding-left: 28rpx;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -3rpx; /* 控制虚线的位置 */
      width: 1rpx; /* 虚线的宽度 */
      height: 100%; /* 虚线的高度 */
      border-left: 1rpx dashed gray; /* 使用虚线样式 */
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: -10rpx; /* 圆点的位置 */
      width: 16rpx; /* 圆点的直径 */
      height: 16rpx; /* 圆点的直径 */
      border-radius: 50%; /* 使圆点变成圆形 */
      background-color: #006CFF; /* 圆点的背景色 */
    }

    .operator {
      margin: 15rpx 0;
    }
    .time {
      font-size: 24rpx;
      margin: 15rpx 0;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #989898;
    }
    .content {
      width: calc(100% - 28rpx);
      background: #F8F8F8;
      padding: 28rpx;
      .remark {
        margin-bottom: 28rpx;
        // 换行
        white-space: pre-line;
        word-break: break-all;
        word-wrap: break-word;

      }

      .imgs {
        overflow-x: auto;
        @include flex-between;
      }
    }
  }
  .info-form {
    margin: 0 28rpx;
    padding-bottom: 20rpx;
    border-bottom: 1rpx solid #ccc;
    margin-bottom: 28rpx;
    .title {
      font-size: 24rpx;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #222222;
      margin-bottom: 24rpx;
      background: linear-gradient(to bottom, transparent 50%, #E1EEFF 50%);
      display: inline-block;
    }
    .form-item {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 24rpx;
      .label {
        flex-basis: 191rpx;
        font-size: 26rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #4B5B6C;
        line-height: 26rpx;
      }
      .value {
        font-size: 26rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #222222;
        line-height: 26rpx;
      }
    }
    .info-images {
      display: flex;
    }
  }
}
.bottom-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 168rpx;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #fff;
  border-top: 1rpx solid #ccc;
  view {
    text-align: center;
    flex: 1;
    border-right: 1rpx solid #ccc;
    van-icon {
      margin-right: 10rpx;
    }
  }

  view:last-child {
    border-right: none;
  }
}
</style>