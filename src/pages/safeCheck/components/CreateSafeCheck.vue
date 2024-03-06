<template>
  <scroll-view
      style="height: calc(100vh - 310rpx);"
      scroll-y="true"
      class="scroll-Y"
    >
  <view class="check-container">
    <view class="item" v-for="(item,index) in items" :key="index">
      <view class="item-title">
        {{ item.checkItem }}
      </view>
      <view class="list-container">
        <view class="sub-item" v-for="(sub,si) in item.list" :key="si">
          <view class="sub-item-title">{{ sub.checkContent }}</view>
          <!-- 是否有隐患 -->
          <view class="option">
            <uni-data-checkbox v-model="sub.checkResult" :localdata="options" ></uni-data-checkbox>
          </view>
          <view class="dangers" v-if="sub.checkResult === 'HIDANGER'">
            <view class="sub-item-title required">隐患描述</view>
            <view style="margin: 0rpx 30rpx;">
              <uni-easyinput  type="textarea" v-model="sub.dangerRemark" placeholder="请输入" maxlength="300"/>
            </view>
            <gas-uploader v-model="sub.dangerImgs" label="上传照片" class="upload" required/>
            <gas-cascader
              dicType="ENTERPRISE_USER"
              label="整改责任人"
              title="整改责任人"
              required
              v-model="sub.rectifierPersonId"
              @selectFinish="(path) => onSelectedUser(sub,path)"
            />
            <gas-picker required  :options="deadlinOptions" label="整改期限"  title="整改期限" v-model="sub.deadlineDays" />
          </view>
        </view>
      </view>
    </view>
  </view>
</scroll-view>
<view class="opts">
    <view class="button cancel" @click="goback">上一步</view>
    <view class="button confirm" @click="confirm">{{ target?.type === 'THIRD' ? '下一步' : '检查完成' }}</view>
  </view>
</template>
<script setup lang="ts">
import type {SafeCheckTaskCreateDTO,CheckTaskItem} from '@/api/gen/data-contracts'
import { getSafeCheckTopicByUid } from '@/api/gen/GasSuperviseApi';
import { userStore } from '@/state';


const store = userStore();
const emit = defineEmits<{
  (e: 'complate', form: SafeCheckTaskCreateDTO): void,
  (e: 'goback'): void
}>()
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
type CheckTaskItemI = CheckTaskItem & {checkContent:string}
type ItemType = {
  checkItem: string,
  list: CheckTaskItemI[]
}
const items = ref<ItemType[]>([])
watch(() => props.topic, topic => {
  if(topic) {
    getSafeCheckTopicByUid(topic as any).then(res => {
      items.value = res.data.items.map(raw => {
        const userId = store.userInfo?.userId;
        const username = store.userInfo?.name;
        const category = {
          checkItem: raw.checkItem,
          list: raw.list.map(({uid,checkContent}) => {
            let it: CheckTaskItemI = { 
              topicItemId: (uid as any), 
              checkResult: 'PASS',
              checkContent: checkContent,
              rectifierPersonId: userId+"",
              rectifierPerson: username,
              dangerImgs: [],
              dangerRemark: '',
              deadlineDays: 7
            };
            return it;
          })
        } 
        return category;
      });
      if(!items.value.length) {
        uni.showModal({
          showCancel: false,
          title:'提示',
          content:'该检查主题没有配置任何检查项',
          confirmText:'知道了',
        })
      }
    })
  }
})


const onSelectedUser = (item: CheckTaskItemI,userPath: GasOption[]) => {
  const last = userPath[userPath.length - 1];
  item.rectifierPerson = last.label
}

const goback = () => {
  emit('goback')
}
const confirm = () => {
  // 检查所有整改状态为隐患的项是否都填写了隐患描述
  for(let category of items.value) {
    if(!category.list.every(validate)) {
      return;
    }
  }
  // 保存
  const checkItems = items.value.flatMap(e => e.list).map(item => {
    // @ts-ignore
    const dangerImgs = item?.dangerImgs?.map(e => e.id);
    return ({...item,dangerImgs});
  });
  const task :SafeCheckTaskCreateDTO = {...toRaw(props.target!),checkItems};
  emit('complate',task)
}

const validate = (item: ItemType['list'][0]) =>  {
  if(item.checkResult === 'HIDANGER') {
    if(!item.dangerRemark) {
      uni.showToast({ title: '请填写隐患描述', icon: 'none' })
      return false;
    }
    if(!item.dangerImgs || item.dangerImgs.length === 0) {
      uni.showToast({ title: '请上传隐患照片', icon: 'none' })
      return false;
    } 
    if(!item.rectifierPersonId) {
      uni.showToast({ title: '请选择整改责任人', icon: 'none' })
      return false;
    }
    if(!item.deadlineDays) {
      uni.showToast({ title: '请选择整改期限', icon: 'none' })
      return false;
    }
  }
  return true;

}
</script>
<style lang="scss" scoped>
.check-container {
  margin-top: 20rpx;
  .item {
    background-color: #fff;
    .item-title {
      font-size: 28rpx;
      font-weight: 500;
      color: #222222;
      background: linear-gradient(to bottom, transparent 50%, #E1EEFF 50%);
      display: inline-block;
      margin-left: 30rpx;
    }
    .list-container {
      margin-bottom: 20rpx;
      .sub-item {
        .sub-item-title {
          padding: 0rpx 30rpx;
          height: 60rpx;
          line-height: 60rpx;
        }
        .required {
          &::before {
            content: '*';
            color: $uni-color-error;
          }
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
  }
  
}
.opts {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120rpx;
  background-color: #fff;
  padding: 30rpx;
  display: flex;
  justify-content:space-between;
  .button {
    width: 333rpx;
    height: 88rpx;
    border-radius: 10rpx;

    font-size: 32rpx;
    font-weight: 500;
    color: #222222;
    line-height: 88rpx;
    text-align: center;
    
  }
  .button.cancel {
    color: #006CFF;
    background: #E8F1FF;
    border-radius: 10rpx;
  }
  .button.confirm {
    background: #006CFF;
    border-radius: 10rpx;
    color: #fff;
  }
}
</style>