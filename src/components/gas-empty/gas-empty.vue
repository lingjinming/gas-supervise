<template>
  <view class="gas-empty-container">
    <view class="gas-empty_image">
      <image class="gas-empty__image__img" src="https://img.yzcdn.cn/vant/empty-image-default.png" ></image>
    </view>
    <view class="gas-empty_description">
      {{ description || '暂无数据' }}
    </view>
  </view>
</template>
<script lang="ts" setup>
const props = defineProps<{description?: string}>()

</script>
<style lang="scss" scoped>
.gas-empty-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64rpx 0;

  .gas-empty_image {
    height: 320rpx;
    width: 320rpx;
    .gas-empty__image__img{
      height: 100%;
      width: 100%;
    }
  }

  .gas-empty_description {
    color: #969799;
    font-size: 14px;
    line-height: 20px;
    margin-top: 16px;
    padding: 0 60px;
  }
}
</style>