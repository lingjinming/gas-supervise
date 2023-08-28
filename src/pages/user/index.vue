<template>
  <router-tab actPath='pages/user/index' />
  <view class="user-container">
    <image class="bg_img" src="./static/img/bg.png"></image>
    <view class="user">
      <view class="av">
        <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
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
      <view class="arrow">
        <van-icon name="arrow" />
      </view>
    </view>
    <view class="functions">
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
    </view>
    <button @click="" class="logout-btn">
      退出账号
    </button>

  </view>
  <!-- <view class="container">

    <van-cell-group>
      <view class="av">
        <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
      </view>

      <van-field :innerValue="form.name" label="姓名" fixed autosize disabled />

      <van-field :innerValue="form.department" label="单位" fixed autosize disabled />

      <van-field :innerValue="form.gender" label="性别" fixed autosize disabled />

      <van-field :innerValue="form.birthday" label="生日" fixed autosize disabled />

      <van-field :innerValue="form.email" label="邮箱" fixed autosize disabled />

      <van-field :innerValue="form.phone" label="手机" fixed autosize disabled />

      <van-field :innerValue="form.wechat" label="微信" fixed autosize disabled />

      <van-field :innerValue="form.contactAddress" label="联系地址" fixed autosize disabled />

      <van-button custom-style="margin:40rpx;width:calc(100% - 80rpx)" type="primary" size="large" color="#006CFF" @click="logout"
      >退出</van-button
    >
    </van-cell-group>


  </view> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userStore } from "@/state";
import { onShow } from "@dcloudio/uni-app";

const store = userStore();

const form = ref({
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


onShow(() => {
  const userInfo = store.userInfo;
  if (userInfo) {
    form.value.name = userInfo.name || '--';
    form.value.department = userInfo.organizationVO?.fullName || '--';
    form.value.gender = userInfo.gender == 'xb002' ? '男' : '女';
    form.value.phone = userInfo.phoneNumber;
    form.value.contactAddress = userInfo.contactAddress || '--'
  }
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
  padding: 136rpx 30rpx;
  position: relative;
  .bg_img {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 750rpx;
    height: 534rpx;
    z-index: -999;
  }

  .arrow {
        flex: 1;
        text-align: right;
      }
  .user {
    display: flex;
    align-items: center;
    width: 100%;
    .av {
      margin-top: 15rpx;
      font-size: 100rpx;
      line-height: 100rpx;
      margin-right: 30rpx;
    }
    .info {
      .name {
        display: flex;
        font-size: 36rpx;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #222222;
        line-height: 70rpx;
        align-items: center;
        .company {
          margin-left: 20rpx;
          padding: 0 20rpx;
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
