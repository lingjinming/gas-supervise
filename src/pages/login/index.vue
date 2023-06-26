<template>
  <view class="login-box">
    <van-radio-group :value="serverValue" @change="changeServe">
      <van-radio v-for="(item, i) in serverList" :key="i" :name="item.region">{{
        item.remark
      }}</van-radio>
    </van-radio-group>
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
        placeholder="请输入手机号"
        error-message="手机号格式错误"
        :border="false"
      />
    </van-cell-group>
    <van-button type="primary" size="large" @click="login">login</van-button>
  </view>
</template>
<script setup lang="ts">
import { getConfig, getToken, getUserInfo, type req_token } from "@/api/uaa";
import { onMounted, reactive, ref ,type Ref} from "vue";

let loginForm: Ref<req_token> = ref({
  grant_type: "password",
  scope: "all",
  username: "system",
  password: "Gsafety@2022",
});
let serverValue = ref("");
let serverList = uni.getStorageSync("SERVER_LIST");
const login = async () => {
  uni.setStorageSync("TOKEN_INFO", await getToken(loginForm.value));
  console.log((await getUserInfo())['data'])
  uni.setStorageSync('USER_INFO',(await getUserInfo())['data'])
  uni.switchTab({
    url: "/pages/index/index",
  });
};

const changeServe = (e) => {
  serverValue.value = e.detail;
  let auth = serverList.filter((item) => item.region == e.detail)[0][
    "auth_header"
  ];
  uni.setStorageSync("SERVER_CONFIG", {
    name: e.detail,
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
}
</style>
