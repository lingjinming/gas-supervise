<template>
  <van-tabs swipeable animated sticky :active="activeTab" @change="onChangeTab">
    <van-tab name="全部" title="全部">
      <PageList state="ALL" :mine="mine"></PageList>
    </van-tab>
    <van-tab name="未整改" title="未整改">
      <PageList state="UN_HANDLED" :mine="mine"></PageList>
    </van-tab>
    <van-tab name="已整改" title="已整改">
      <PageList state="HANDLED" :mine="mine"></PageList>
    </van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import PageList from './components/PageList.vue' 
// 隐患整改待办，只展示自己的
const mine = ref(false)

onLoad((params) => {
  mine.value = Boolean(params?.mine);
  if(mine.value) {
    uni.setNavigationBarTitle({
      title: '隐患整改反馈'
    })
  }
})



let activeTab = ref("全部");
const onChangeTab = ({ name }) => {
  activeTab.value = name;
};


</script>
<style lang="scss" scoped>
.top {
  margin: 0 40rpx;
  line-height: 100rpx;
  position: relative;

  .total {
    font-weight: 700;
    padding: 0 8rpx;
  }

  .search {
    position: absolute;
    top: 0rpx;
    bottom: 0rpx;
    right: 0rpx;
    margin: auto;
    width: 129rpx;
    height: 52rpx;
    background-color: #fff;
    text-align: center;
    border-radius: 26rpx;
    line-height: 50rpx;
  }
}

.step-box {
  position: relative;
  display: flex;
  align-items: center;
  line-height: 100rpx;
  background: #fff;
  gap: 85rpx;

  .act {
    color: $uni-color-primary;
  }
}

.bottom {
  @include flex-between;
  margin-top: 20rpx;

  .btn {
    border: 0px;
    width: 333rpx;
    height: 88rpx;
    line-height: 88rpx;
    border-radius: 10px;
  }

  .btn.cancel {
    background: #e8f1ff;
    color: $uni-color-primary;
  }

  .btn.query {
    background: $uni-color-primary;
    color: #fff;
  }
}

.remark {
  width: 100%;
  padding: 20rpx 30rpx;
}</style>
