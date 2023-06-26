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
  min-height: 100vh;
  background: $uni-bg-color;
  font-size: 28rpx;
}
</style>
