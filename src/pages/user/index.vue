<template>
  <RouterTab actPath='pages/user/index' />
  <view class="user-container">
    <!-- <image class="bg_img" src="/static/img/bg.png"></image> -->
    <view class="user">
      <view class="av">
        <image  src="/static/img/avt.png" mode="aspectFill"></image>
      </view>
      <view class="info">
        <view class="name">
          {{ form.name }}
          <view class="company">
            {{ form.department }}
          </view>
        </view>
        <view class="phone">
          {{ form.phone }}
        </view>
      </view>
      <!-- <view class="arrow">
        <van-icon name="arrow" />
      </view> -->
    </view>
    <!-- <view class="functions">
      <view class="function-item">
        <view class="icon">
          <van-icon name="bulb-o" />
        </view>
        <view  class="info">
          <view class="intro">使用介绍</view>
          <view class="desc">去了解产品功能</view>
        </view>
        <view class="arrow">
          <van-icon name="arrow" />
        </view>
      </view>
      <view class="function-item">
        <view class="icon">
          <van-icon name="info-o" />
        </view>
        <view  class="info">
          <view class="intro">版本</view>
          <view class="desc">V1.0.0版本说明</view>
        </view>
        <view class="arrow">
          <van-icon name="arrow" />
        </view>
      </view>
    </view> -->
    <button @click="logout" class="logout-btn">
      退出账号
    </button>

  </view>
 
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { userStore } from "@/state";
import { onShow } from "@dcloudio/uni-app";
import RouterTab from '../index/components/router-tab.vue'

const store = userStore();

const form = reactive({
  name: '',
  department: '',
  gender: '',
  birthday: '--',
  email: '',
  phone: '',
  contactAddress: '',
  wechat: '暂无',
  landline: '暂无'
});
// see jira SMYFRJ2022005-3316

onShow(() => {
  const userInfo = store.userInfo;
  if (userInfo) {
    form.name = userInfo.name || '--';
    form.department = userInfo.organizationVO?.fullName || '--';
    form.gender = userInfo.gender == 'xb002' ? '男' : '女';
    form.phone = userInfo.phoneNumber;
    form.contactAddress = userInfo.contactAddress || '--'
  }
  console.log(userInfo)
})




const logout = () => {
  store.clearCache();
  uni.navigateTo({
    url: `/pages/login/index`
  })
}

</script>

<style lang="scss" scoped>

.logout-btn {
  height: 88rpx;
  padding-top: 10rpx;
  margin-top: 43rpx;
  font-size: 32rpx;
  font-family: PingFang SC;
  font-weight: 500;
  color: #222222;
  line-height: 70rpx;
}

.user-container {
  background-image: url('/static/img/bg.png');
  padding: 136rpx 30rpx;
  position: relative;
  .bg_img {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 750rpx;
    height: 534rpx;
  }

  .arrow {
        flex: 1;
        text-align: right;
      }
  .user {
    margin-top: 5vh;
    display: flex;
    align-items: center;
    width: 100%;
    .av {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      .name {
        display: flex;
        font-size: 32rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #222222;
        line-height: 70rpx;
        align-items: center;
        .company {
          max-width: 250rpx;
          overflow: hidden;
          word-break: break-all;
          white-space: nowrap;
          margin-left: 20rpx;
          height: 36rpx;
          line-height: 36rpx;
          text-align: center;
          font-family: Microsoft YaHei;
          color: #FFF2D3;
          font-size: 24rpx;
          background: linear-gradient(90deg, #533837 0%, #2C1B1B 100%);
          border-radius: 6rpx;
        }
      }
      .phone {
        font-size: 30rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #4B5B6C;
      }
    }
  }
  .functions {
    height: 300rpx;
    width: 100%;
    margin-top: 50rpx;

    .function-item {
      height: 149rpx;
      background: #FFFFFF;
      border-radius: 10rpx;
      margin-bottom: 20rpx;
      display: flex;
      align-items: center;
      padding: 0 40rpx;

      .icon {
        font-size: 60rpx;
        flex-basis: 100rpx;
      }
      
      .info {
        .intro {
          font-size: 28rpx;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #222222;
          margin-bottom: 14rpx;
        }
        .desc {
          font-size: 26rpx;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #989898;
          line-height: 42rpx;
        }
      }
    }
  }
}
</style>
