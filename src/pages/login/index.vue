<template>
  <view class="login-box">

    <van-picker-new
        dicType="SERVER_CONFIG"
        label="服务器"
        title="服务器"
        v-model="serverValue"
      />


    <van-cell-group>
      <van-field
        :value="loginForm.username"
        @change="loginForm.username = $event.detail"
        label="用户名"
        placeholder="请输入用户名"
      />
      <van-field
        :value="loginForm.password"
        @change="loginForm.password = $event.detail"
        label="密码"
        placeholder="请输入密码"
        :border="false"
      />
    </van-cell-group>
    <van-button type="primary" size="large" @click="login">login</van-button>
  </view>
</template>
<script setup lang="ts">
import { getConfig, getToken, getUserInfo, type req_token } from "@/api/uaa";
import { onMounted, reactive, ref, type Ref } from "vue";

let loginForm: Ref<req_token> = ref({
  grant_type: "password",
  scope: "all",
  username: "system",
  password: "Gsafety@2022",
});
let serverValue = ref("test");
let serverList = uni.getStorageSync("SERVER_LIST");
const login = async () => {
  changeServe()

  uni.showLoading({
    title: "登录中...",
  });
  let TOKEN_INFO = await getToken(loginForm.value);
  uni.setStorageSync("TOKEN_INFO", TOKEN_INFO);

  if (!TOKEN_INFO) {
    uni.showToast({
      icon: "error",
      title: "请重新登录",
    });
    uni.hideLoading();
    return;
  }
  let USER_INFO = (await getUserInfo())["data"];

  uni.hideLoading();
  if (USER_INFO) {
    uni.setStorageSync("USER_INFO", USER_INFO);
    uni.switchTab({
      url: "/pages/index/index",
    });
  }else{
    uni.showToast({
      icon: "error",
      title: "请重新登录",
    });
  }
};

const changeServe = () => {
  let auth = serverList.filter((item) => item.region == serverValue.value)[0][
    "auth_header"
  ];
  uni.setStorageSync("SERVER_CONFIG", {
    name: serverValue.value,
    auth,
  });
};
</script>

<style lang="scss" scoped>
.login-box {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 300rpx;
  gap: 40rpx;
  padding: 40rpx;
  @include flex-column;
}
</style>
