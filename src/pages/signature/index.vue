<template>
  <view class="page-content">
    <view class="form">
      <view class="form-content">
        <canvas
          class="form-content__canvas"
          canvas-id="canvas_sign"
          @touchstart="touchstart"
          @touchmove="touchmove"
          @touchend="touchend"
          disable-scroll="true"
        ></canvas>
      </view>

      <view class="form-footer">
        <button class="form-footer__reset" @click="autographClick(1)">
          重置
        </button>
        <button class="form-footer__save" @click="autographClick(2)">
          提交
        </button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { uploadFile } from "@/hooks";
import { getCurrentInstance } from 'vue'

let canvasCtx = uni.createCanvasContext("canvas_sign", this); //创建绘图对象; //绘图图像
let points = ref([]); //路径点集合
let hasSign = ref(false); //是否签过字
let isInit = ref(false);
let key = ""; //
let eventChannel = null;
onLoad((options) => {
  key = options?.key;
  const _this = getCurrentInstance();
  // @ts-ignore
  eventChannel = _this!.ctx.getOpenerEventChannel();
});
//设置画笔样式
canvasCtx.lineWidth = 6;
// 设置线条的端点样式
canvasCtx.lineCap = "round";
// 设置线条的交点样式
canvasCtx.lineJoin = "round";

const touchstart = (e) => {
  if (!isInit.value) {
    isInit.value = true;
    autographClick(1);
  }
  let startX = e.changedTouches[0].x;
  let startY = e.changedTouches[0].y;
  let startPoint = {
    X: startX,
    Y: startY,
  };
  points.value.push(startPoint);
  //每次触摸开始，开启新的路径
  canvasCtx.beginPath();
};
const touchmove = (e) => {
  let moveX = e.changedTouches[0].x;
  let moveY = e.changedTouches[0].y;
  let movePoint = {
    X: moveX,
    Y: moveY,
  };
  points.value.push(movePoint); //存点
  let len = points.value.length;
  if (len >= 2) {
    draw(); //绘制路径
  }
};
const touchend = () => {
  points.value = [];
  canvasCtx.draw(true);
};

const draw = () => {
  let point1 = points.value[0];
  let point2 = points.value[1];
  points.value.shift();
  canvasCtx.moveTo(point1.X, point1.Y);
  canvasCtx.lineTo(point2.X, point2.Y);
  canvasCtx.stroke();
  canvasCtx.draw(true);
  hasSign.value = true;
};
const autographClick = (type) => {
  // 底部按钮点击操作
  if (type === 1) {
    //清空画布
    hasSign.value = false;
    uni.getSystemInfo({
      success: function (res) {
        let canvas = uni.createSelectorQuery().select(".form-content__canvas");
        canvas.boundingClientRect().exec(function (data) {
          console.log("canvas", data);
          console.log("canvas wh:" + data[0].width + "X" + data[0].height);
          let canvasw = Math.ceil(data[0].width);
          let canvash = Math.ceil(data[0].height);
          canvasCtx.fillStyle = "#fff";
          canvasCtx.fillRect(0, 0, canvasw, canvash);
          canvasCtx.draw(true);
        });
      },
    });
  } else {
    if (!hasSign.value) {
      uni.showToast({
        title: "签名不能为空",
        icon: "none",
        duration: 2000,
      });
      return;
    }
    uni.getSystemInfo({
      success: function (res) {
        let canvas = uni.createSelectorQuery().select(".form-content__canvas");
        canvas.boundingClientRect().exec(function (data) {
          console.log("canvas saveSign:", data[0].width + "X" + data[0].height);
          let canvasw = Math.ceil(data[0].width);
          let canvash = Math.ceil(data[0].height);
          uni.canvasToTempFilePath({
            destWidth: canvasw,
            destHeight: canvash,
            fileType: "png",
            canvasId: "canvas_sign",
            success: function (res) {
              let path = res.tempFilePath;
              uploadFile(res, ({ data }) => {
                sendBack(data);
              });
            },
            fail: (err) => {
              // http://tmp/2LVQyvzddk2R820a9009dff43323d8e7fc9ef7a8d076.jpg
              console.log("图片导出失败：", err);
            },
          });
        });
      },
    });
  }
};

const sendBack = (data) => {
  // @ts-ignore
  eventChannel?.emit && eventChannel.emit("onSignature",{key: key,data});
  eventChannel = null;
  uni.navigateBack();
}
</script>
<style lang="scss" scoped>
/*
	* 横屏后的适配方案
	* @param $rpx为需要转换的字号
	* @参考 https://blog.csdn.net/sdfsfsdscd/article/details/91375066
	**/
@function tovmin($rpx) {
  @return #{$rpx * 100 / 750}vmin;
}

.page-content {
  width: 100vw;
  height: 100vh;

  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .form-content {
      width: 100%;
      height: 100%;

      &__canvas {
        height: calc(
          100vh - tovmin(20) - tovmin(120) - constant(safe-area-inset-bottom)
        );
        height: calc(
          100vh - tovmin(20) - tovmin(120) - env(safe-area-inset-bottom)
        );
        width: 100vw;
      }
    }

    .form-footer {
      padding-top: tovmin(20);
      height: calc(tovmin(120) + constant(safe-area-inset-bottom));
      height: calc(tovmin(120) + env(safe-area-inset-bottom));
      width: 100%;

      display: flex;
      flex-direction: row;

      background: #ffffff;
      box-shadow: 0 tovmin(4) tovmin(20) tovmin(2) rgba(183, 183, 183, 0.2);

      button {
        width: 20vw;

        height: tovmin(88);
        line-height: tovmin(88);
        border-radius: tovmin(48);
        text-align: center;
        font-size: tovmin(36);
        font-weight: bold;
      }

      button::after {
        border: none;
      }

      &__reset {
        color: #008afe;
        border: tovmin(1) solid #008afe;
      }

      &__save {
        background-image: linear-gradient(135deg, #1bc5ff 0%, #008afe 100%);
      }

      &__preview {
        color: #008afe;
        border: tovmin(1) solid #008afe;
      }
    }
  }
}
</style>
