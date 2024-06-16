<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { userStore } from "@/state/index";

onLaunch(async () => {
  console.log("onLaunch...");
  const store = userStore();
  // 从缓存中恢复数据到pinia
  store.restoreStore();
  // 重新加载服务器配置
  await store.loadServers();
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
  // overflow: hidden;
}

.container {
  background: #fff;
  height: 100%;
  overflow: auto;
}

button[type=default]{
  background-color:$uni-color-primary;  // 这里我使用的是自定义的主题色，也可以直接换成十六进制的颜色，如：#000000
  color: #fff;
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
.hover {
  transition: all 0.3s;
  transform: scale(1.1);
}

.label {
  @include label;
}
.state {
  color: $uni-color-success;
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: -26rpx;
    content: " ";
    height: 16rpx;
    width: 16rpx;
    border-radius: 10rpx;
  }
  &.handled {
    color: $uni-color-success;

    &::before {
      background-color: $uni-color-success;
    }
  }

  &.wait-handle {
    color: $uni-color-warning;

    &::before {
      background-color: $uni-color-warning;
    }

    &-red {
      color: $uni-color-error;

      &::before {
        background-color: $uni-color-error;
      }
    }
  }
}

.right {
  height: 100%;
  @include flex-between;
  width: 320rpx;
  view {
    @include flex-center;
    width: 50%;
    height: 100%;
    color: #fff;
  }
  .done {
    background: $uni-color-primary;
  }
  .del {
    background: $uni-color-error;
  }
}

// 详情
.tab-detail-wrap {
  margin-bottom: 30rpx;
  padding: 20rpx 30rpx;
  background: #fff;
  .tab-detail-tit {
    color: #222222;
    height: 40rpx;
    line-height: 40rpx;
    font-weight: 600;
  }
  
  .tab-detail-box {
    min-height: 80rpx;
    line-height: 40rpx;
    display: flex;
    align-items: center;
    .label {
      width: 200rpx;
      color: #4b5b6c;
      font-weight: 600;
    }
  }
  .img-box {
    display: flex;
    ::v-deep .image {
      flex: 1;
    }
  }
  ::v-deep .hidden-box {
    margin: 0 0 30rpx 0;
  }
}
</style>
