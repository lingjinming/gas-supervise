<template>
  <router-tab actPath='pages/user/index' />
  <view class="container">
    
    <van-cell-group>
      <view class="av">
        <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
      </view>

      <van-field :value="form.name" label="姓名" fixed autosize disabled />

      <van-field :value="form.department" label="单位" fixed autosize disabled />
      
      <van-field :value="form.gender" label="性别" fixed autosize disabled />

      <van-field :value="form.birthday" label="生日" fixed autosize disabled />

      <van-field :value="form.email" label="邮箱" fixed autosize disabled />

      <van-field :value="form.phone" label="手机" fixed autosize disabled />

      <van-field :value="form.wechat" label="微信" fixed autosize disabled />

      <van-field :value="form.contactAddress" label="联系地址" fixed autosize disabled />
    </van-cell-group>


  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

const userInfo = uni.getStorageSync('USER_INFO');
  
  if(userInfo) {
    form.value.name = userInfo.name || '--';
    form.value.department = userInfo.organizationVO?.fullName || '--';
    form.value.gender = userInfo.gender == 'xb002' ? '男' : '女';
    form.value.phone = userInfo.phoneNumber;
    form.value.contactAddress = userInfo.contactAddress || '--'
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