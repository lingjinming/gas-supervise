<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { getConfig } from "./api/uaa";
onLaunch(async () => {
  uni.setStorageSync("SERVER_LIST",(await getConfig())["regions"])
});
onShow(() => {
  // console.log("App Show");
});
onHide(() => {
  // console.log("App Hide");
});
</script>
<style lang="scss">
page{
  position: relative;
  width: 100vw;
  background: $uni-bg-color;
  font-size: 28rpx;
  height: 100vh;
  overflow: hidden;
}
.container{
  background: #fff;
  height: 100%;
}
::v-deep .van-swipe-cell{
  background: #fff;
  margin-bottom: 20rpx;
}
</style>
