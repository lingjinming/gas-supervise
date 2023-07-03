<template>
  <router-tab actPath='pages/user/index' />
  <view class="container">

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


  </view>
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
.container {
  padding-top: 30px;

  .av {
    font-size: 50px;
    text-align: center;
  }
}
</style>
