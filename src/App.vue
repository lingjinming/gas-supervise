<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { getConfig } from "./api/uaa";
onLaunch(async () => {
  let SERVER_LIST = (await getConfig())["regions"]
  SERVER_LIST.forEach(item => {
    item.label = item.remark
    item.value = item.region
  })
  uni.setStorageSync("SERVER_LIST",SERVER_LIST)
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
  width:692rpx;
  border-radius: 6px;
  background: #fff;
  margin:0 auto;
  margin-top: 20rpx;
}
</style>
