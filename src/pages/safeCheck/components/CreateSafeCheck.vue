<template>
  <view class="check-container">
    <view v-for="(item,index) in items" :key="index">
      <view class="title">{{ item.checkItem }}</view>
      <view class="category">
        <view class="sub-item" v-for="(sub,si) in item.list" :key="si">
          <view class="sub-item-title">{{ sub.checkContent }}</view>
          <view class="option">
            <uni-data-checkbox v-model="sub.checkResult" :localdata="options" ></uni-data-checkbox>
          </view>
          <view class="dangers" v-if="sub.checkResult === 'HIDANGER'">
            <view class="sub-item-title">隐患描述</view>
            <view style="margin: 0rpx 30rpx;">
              <uni-easyinput  type="textarea" v-model="sub.dangerRemark" placeholder="请输入" maxlength="300"/>
            </view>
            <van-uploader-new v-model="sub.dangerImgs" label="上传照片" class="upload"/>
            <van-cascader-new
              dicType="ENTERPRISE_USER"
              label="整改责任人"
              title="整改责任人"
              v-model="sub.rectifierPersonId"
            />
            <van-picker-new required  :options="deadlinOptions" label="整改期限"  title="整改期限" v-model="sub.rectifierPersonId" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import type {SafeCheckTaskCreateDTO,SafeCheckTopicDetailVO,SafeCheckItemCreateDTO} from '@/api/gen/data-contracts'
import { getSafeCheckTopicByUid } from '@/api/gen/GasSuperviseApi';
import { upload } from '@/api/uaa';
type ItemType = {
  checkItem: string,
  list: {
    topicItemId: string,
    checkContent: string,
    checkResult: string,
    dangerRemark?: string,
    dangerImgs?: string[],
    rectifierPersonId?: string,
    rectifierPerson?: string,
    rectifierAdvise?: string,
    deadlineDays?: number
  }[]
}

const props = defineProps({
  topic: {
    type: String
  },
  target: {
    type: Object as PropType<SafeCheckTaskCreateDTO>
  }
})
const options = ref<GasOption[]>([
  {
    text: '合格',
    value: 'PASS'
  },
  {
    text: '存在隐患',
    value: 'HIDANGER'
  }
]);
const deadlinOptions = ref<GasOption[]>([
  {
    text: '7日',
    value: 7
  },
  {
    text: '15日',
    value: 15
  },
  {
    text: '30日',
    value: 30
  },
  {
    text: '60日',
    value: 60
  }
])
const items = ref<ItemType[]>([])
watch(() => props.topic, topic => {
  if(topic) {
    getSafeCheckTopicByUid(topic).then(res => {
      items.value = res.data.items.map(raw => {
        const obj = {
          checkItem: raw.checkItem,
          list: raw.list.map(e => ({topicItemId: e.uid+'', checkResult: 'PASS',checkContent:e.checkContent}))
        }
        return obj;
      })
    })
  }
})

</script>
<style lang="scss" scoped>
.check-container {
  margin-top: 20rpx;

  .category {
    
    background-color: #fff;
    margin-bottom: 20rpx;

    .sub-item {
      .sub-item-title {
        padding: 0rpx 30rpx;
        height: 60rpx;
        line-height: 60rpx;
      }
      .option {
        padding: 0rpx 30rpx;
        padding-bottom: 20rpx;
      }
      .option:not(:last-child) {
        border-bottom: 1rpx solid #E0E0E0;
      }
      .dangers {
        .upload {
          margin-left: -20rpx;
        }
      }
    }
  }
  .title {
      background-color: #fff;
      padding: 0rpx 30rpx;
      height: 90rpx;
      line-height: 90rpx;
      font-size: 28rpx;
      font-weight: 400;
      color: #222222;
      border-bottom: 1rpx solid #E0E0E0;
    }
}
</style>