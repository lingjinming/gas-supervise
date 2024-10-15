<template>
  <view>
    <image class="login-background" src="@/static/img/login_bg.png"></image>

    <div class="login-box">
      <text class="page-title">燃气安全监管</text>
       <!--  <gas-picker
          :is-link="false"
          dicType="SERVER_CONFIG"
          label="地区"
          title="服务器"
          v-model="serverValue"
        /> -->
        <gas-field
          v-model="loginForm.username"
          label="账号"
          placeholder="请输入账号"
        />
        <gas-field
          v-model="loginForm.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
      <button style="width:100%;margin-top: 30rpx;" type="default" size="large" @click="login" >登 录</button >
    </div>
  </view>
</template>
<script setup lang="ts">
import { getToken, getUserInfo } from "@/api/uaa";
import type { OAuth2LoginReq } from "@/api/model/UserAuth";
import { ref, type Ref } from "vue";
import { userStore } from "@/state";

const store = userStore();
if (store.isLogin) {
  uni.switchTab({
    url: "/pages/index/index",
  });
}

let loginForm: Ref<OAuth2LoginReq> = ref({
  grant_type: "password",
  scope: "all",
  username: "",
  password: "",
});
let serverValue = ref('');

const login = async () => {
  // if (!serverValue.value) {
  //   uni.showToast({
  //     icon: "error",
  //     title: "请先选择地区",
  //   });
  //   return;
  // }

  if (!loginForm.value.username) {
    uni.showToast({
      icon: "none",
      title: "账号/密码不能为空",
    });
    return;
  }

  if (!loginForm.value.password) {
    uni.showToast({
      icon: "none",
      title: "账号/密码不能为空",
    });
    return;
  }

  changeServe();

  uni.showLoading({ title: "登录中" });
  try {
    let TOKEN_INFO = await getToken(loginForm.value);
    store.setToken(TOKEN_INFO);
  } catch (err) {
    uni.showToast({
      icon: "none",
      title: "您输入的账号或密码有误",
    });
    return;
  }finally{
    uni.hideLoading();
  } 

  let USER_INFO = await getUserInfo();

  if (USER_INFO) {
    store.setUserInfo(USER_INFO);
    uni.switchTab({
      url: "/pages/index/index",
    });
  } else {
    uni.showToast({
      icon: "error",
      title: "请重新登录",
    });
  }
};

const changeServe = () => {
  let server = store.getServer(serverValue.value!);
  store.setServer(server);
};
</script>

<style lang="scss" scoped>
.login-box {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30%;
  
  padding: 40rpx;
  @include flex-column;
}

.login-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  
}

.page-title {
  text-align: center;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 36px;
  text-transform: uppercase;
  padding-bottom: 100rpx;
}
</style>
