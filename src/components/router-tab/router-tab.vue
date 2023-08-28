<template>
  <view
    class="route-wrap"
    :style="{ background: globalStyle.navigationBarBackgroundColor }"
  >
    <view
      class="tab"
      v-for="route in tabBar.list"
      :key="route.pagePath"
      :class="{ act: route.pagePath == actPath }"
      @click="switchTab(route)"
      >
        <view class="routeItem"><image
          :src="route.pagePath == actPath ? route.selectedIconPath : route.iconPath"
          class="mainBtn"
        /></view>
        <view class="routeItem"><text>{{ route.text }}</text></view> 
      </view
    >
    <view hover-class="hover"	 class="midBtn" @click="show = true">
      <image src="/static/img/icon_add.png" class="photo"></image>
    </view>
  </view>

  <van-action-sheet
    :show="show"
    :actions="functions"
    cancel-text="取消"
    @click-overlay="cancel"
    @close="cancel"
    @cancel="cancel"
    @select="onSelect"
  />
</template>

<script setup lang="ts">
import { ref ,computed} from "vue";
import { tabBar, globalStyle } from "../../pages.json";
import { userStore } from "@/state";
const store =  userStore()

const show = ref(false)
let  props = defineProps({
  actPath:{
    type:String
  }
});
let actions = [
      {
        name: '创建检查计划',
        url:'/pages/addCheck/index',
        optType: ['gov']
      },
      {
        name: '第三方施工上报',
        optType: ['gov','org'],
        url: '/pages/thirdBuild/pages/thirdBuildFormPage'
      },
      {
        name: '安全检查下发',
        optType: ['gov'],
        url: '/pages/hiddenReport/index'
      },
      {
        name: '隐患上报',
        optType: ['org'],
        url: '/pages/hiddenReport/index'
      },
      {
        name: '创建整改单',
        optType: ['gov'],
        url: '/pages/handleOrder/index'
      }
    ]
const functions = computed(() => {
  return actions.filter(act => act.optType.includes(store.isGovUser?'gov':'org'))
})
let switchTab = (route: any) => {
  uni.switchTab({
    url:`/${route.pagePath}`
  })
};


const cancel = () => {
  show.value = false;
}
const onSelect = (v) => {
  const url = v.detail.url;
  uni.navigateTo({url})
}
</script>

<style lang="scss" scoped>
.route-wrap {
  position: fixed;
  background-color: #ffffff;
  bottom: 0;
  left: 0;
  right: 0;
  height: $router-tab-height;
  padding-top: 20rpx;
  line-height: $router-tab-height;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 1px $uni-bg-color;
  .tab{
    flex: 1;
    height: 100%;
    text-align: center;
  }
  .routeItem{
    height: 42rpx;
    line-height: 42rpx;
  }
  .act{
    color: $uni-color-primary;
  }
  .mainBtn{
    width: 42rpx;
    height: 42rpx;
    line-height: 42rpx;
  }
  .midBtn{
    position: absolute;
    z-index: 999;
    left: 50%;
    top: -10rpx;
    transform: translateX(-50%);
  }
  .photo{
    width: 125rpx;
    height: 133rpx;
  }

}
</style>
