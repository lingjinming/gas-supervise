<template>
  <van-tabs :active="activeTab" @change="onChangeTab">
    <van-tab title="计划详情">
      <view v-for="( val,key) in detail.check" :key="key">
        <text class="label">{{ key }}</text>
        <text>{{ val.val }}</text>
      </view>
    </van-tab>
    <van-tab title="隐患整改单">
      <van-field label="整改单位" :value="detail._targetOrgId" />
      <van-field label="联系电话" :value="detail.targetOrgPhone" />
      <van-field label="地址" :value="detail.targetOrgAddr" />
      <van-field label="整改完成期限" :value="detail.endDate" />
      <van-field label="整改单发布时间" :value="detail.startDate" />
      <van-field label="发布单位" :value="detail._masterOrgId" />

      <hidden v-for="(item, i) in detail.handleOrders" :key="i" :info="item" />
    </van-tab>
  </van-tabs>

  <view class="addAudit-box">
    <van-button
      custom-style="border-color:#a7a7a7;border-radius:10rpx"
      color="#a7a7a7"
      plain
      size="large"
      icon="plus"
      type="default"
      @click="addAudit"
      >创建整改单</van-button
    >
  </view>
</template>
<script setup lang="ts">
import { checkPlanDetail, hidangerOrder } from "@/api/hidden";
import { userStore } from "@/state";

const store = userStore();
const isOrg: boolean = store.isOrgUser;

const addAudit = () => {
  let keys = [
    "targetOrgMasterSignatures",
    "expertSignatures1",
    "expertSignatures2",
  ];
  keys.forEach((key) => uni.removeStorageSync(key));
  uni.navigateTo({
    url: "/pages/hidden/index?audit=true",
  });
};
onLoad((options) => {
  getDetail(options!.uid);
});

let detail = reactive({
 check :{
  '计划名称':{
    prop:'title',
    val:''
  },
  '计划时间':{
    prop:'startDate',
    val:''
  },
  '检查类型':{
    prop:'_type',
    val:''
  },
  '检查企业':{
    prop:'_targetOrgId',
    val:''
  },
  '企业负责人':{
    prop:'targetOrgOwner',
    val:''
  },
  '负责人电话':{
    prop:'targetOrgPhone',
    val:''
  },
  '参与人':{
    prop:'checkers',
    val:''
  },
  '计划创建时间':{
    prop:'startDate',
    val:''
  }
}
});


  

const getDetail = async (id: string) => {
  try {
    let data = await checkPlanDetail(id);
    Object.values(detail.check).forEach(value => {
      value.val = data[value.prop]
    })

  } finally {
  }
};
let activeTab = ref("计划详情");
const onChangeTab = ({ name }) => {
  activeTab.value = name;
};
</script>
<style lang="scss" scoped>
.top {
  @include flex-between;
  height: 80rpx;
  padding: 0 40rpx;
}
.addAudit-box {
  background: #fff;
  height: 160rpx;
  padding: 30rpx 20rpx;
  position: fixed;
  width: calc(100% - 40rpx);
  bottom: 0;
}
</style>
