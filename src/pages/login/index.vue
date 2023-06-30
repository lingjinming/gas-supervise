<template>
  <view>
    <image class="login-background" src="@/static/img/login_bg.png"></image>

    <div class="login-box">
      <text class="page-title">燃气安全监管</text>


      <van-cell-group>

      <van-picker-new
          :is-link="false"
          dicType="SERVER_CONFIG"
          label="地区"
          title="服务器"
          v-model="serverValue"
      />
        <van-field
            :value="loginForm.username"
            @change="loginForm.username = $event.detail"
            clearable
            label="账号"
            placeholder="请输入账号"
            maxlength="20"
        />
        <van-field
            :value="loginForm.password"
            @change="loginForm.password = $event.detail"
            clearable
            type="password"
            label="密码"
            placeholder="请输入密码"
            :border="false"
            maxlength="20"
        />
      </van-cell-group>
      <van-button  type="primary" color="#006CFF" size="large" @click="login">登 录</van-button>
    </div>
  </view>
</template>
<script setup lang="ts">
import {getToken, getUserInfo, type req_token} from "@/api/uaa";
import {ref, type Ref} from "vue";
import { userStore } from "@/state";

const store = userStore();
if(store.isLogin) {
  console.log('已经登录了');

  uni.switchTab({
      url: "/pages/index/index",
    });
}


let loginForm: Ref<req_token> = ref({
  grant_type: "password",
  scope: "all",
  username: "system",
  password: "Gsafety@2022",
});
let serverValue = ref(null);
let serverList = store.getServerList;

const login = async () => {
  if (!serverValue.value) {
    uni.showToast({
      icon:'error',
      title:'请先选择地区'
    });
    return;
  }

  if (!loginForm.value.username) {
    uni.showToast({
      icon:'error',
      title:'请输入账号'
    });
    return;
  }

  if (!loginForm.value.password) {
    uni.showToast({
      icon:'error',
      title:'请输入密码'
    });
    return;
  }

  changeServe()

  uni.showLoading({title:'登录中'})
  let TOKEN_INFO = await getToken(loginForm.value);
  store.setToken(TOKEN_INFO);

  if (!store.isLogin) {
    uni.showToast({
      icon:'error',
      title:'账号或密码错误'
    });
    return;
  }
  let USER_INFO = (await getUserInfo())["data"];

  if (USER_INFO) {
    store.setUserInfo(USER_INFO);
    uni.switchTab({
      url: "/pages/index/index",
    });
  } else {
    uni.showToast({
      icon:'error',
      title:'请重新登录'
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
</style>
