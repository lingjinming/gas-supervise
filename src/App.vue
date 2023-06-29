<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { getConfig } from "./api/uaa";
onLaunch(async () => {
  let SERVER_LIST = (await getConfig())["regions"];
  SERVER_LIST.forEach((item) => {
    item.label = item.remark;
    item.value = item.region;
  });
  uni.setStorageSync("SERVER_LIST", SERVER_LIST);
});
onShow(() => {
  // console.log("App Show");
});
onHide(() => {
  // console.log("App Hide");
});
</script>
<style lang="scss">
page {
  position: relative;
  width: 100vw;
  background: $uni-bg-color;
  font-size: 28rpx;
  height: 100vh;
  overflow: hidden;
}
.container {
  background: #fff;
  height: 100%;
  overflow: auto;
}
::v-deep .van-swipe-cell {
  border-radius: 6px;
  margin:0 auto;
}
.van-field__label{
  font-size: 24rpx;
    color: $uni-text-color;
    font-weight: 600;
}
.fs {
  &-12 {
    font-size: 24rpx;
    color: $uni-text-color-placeholder;
  }
  &-16 {
    font-size: 24rpx;
    color: $uni-text-color;
    font-weight: 600;
  }
}

::v-deep .van-skeleton__content{
  border-radius: 6px;
  margin:0 auto;
}

</style>
