<template>
  <view>
    <image class="login-background" src="@/static/img/个人中心bg.png"></image>

    <div class="login-box">
      <text class="page-title">燃气安全监管</text>

      <van-picker-new
          dicType="SERVER_CONFIG"
          label="地区"
          title="服务器"
          v-model="serverValue"
      />

      <van-cell-group>
        <van-field
            :value="loginForm.username"
            @change="loginForm.username = $event.detail"
            clearable
            label="账号"
            placeholder="请输入账号"
        />
        <van-field
            :value="loginForm.password"
            @change="loginForm.password = $event.detail"
            clearable
            type="password"
            label="密码"
            placeholder="请输入密码"
            :border="false"
        />
      </van-cell-group>
      <van-button class="login-btn" type="primary" color="#006CFF" size="large" @click="login">登 录</van-button>
    </div>
    <van-toast id="van-toast"/>
  </view>
</template>
<script setup lang="ts">
import {getToken, getUserInfo, type req_token} from "@/api/uaa";
import {ref, type Ref} from "vue";
import Toast from "@/wxcomponents/vant/toast/toast";

let loginForm: Ref<req_token> = ref({
  grant_type: "password",
  scope: "all",
  username: "system",
  password: "Gsafety@2022",
});
let serverValue = ref(null);
let serverList = uni.getStorageSync("SERVER_LIST");
const login = async () => {
  if (!serverValue.value) {
    Toast.fail('请先选择地区');
    return;
  }

  if (!loginForm.value.username) {
    Toast.fail('请输入账号');
    return;
  }

  if (!loginForm.value.password) {
    Toast.fail('请输入密码');
    return;
  }

  changeServe()

  Toast.loading({
    message: '登录中...',
    forbidClick: true,
  });
  let TOKEN_INFO = await getToken(loginForm.value);
  uni.setStorageSync("TOKEN_INFO", TOKEN_INFO);

  if (!uni.getStorageSync("TOKEN_INFO")["access_token"]) {
    Toast('用户名或密码错误');
    return;
  }
  let USER_INFO = (await getUserInfo())["data"];

  if (USER_INFO) {
    uni.setStorageSync("USER_INFO", USER_INFO);
    uni.switchTab({
      url: "/pages/index/index",
    });
  } else {
    Toast.fail('请重新登录');
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
  bottom: 30%;
  gap: 40rpx;
  padding: 40rpx;
  @include flex-column;
}

.login-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.page-title {
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  font-size: 36px;
  text-transform: uppercase;
  padding-bottom: 100rpx;
}

.login-btn {
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
