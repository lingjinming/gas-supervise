<template>
  <view class="detail-container">
    <view class="item" v-for="({label,value,prop,isFile,isImg}) in list" :key="prop">
      <slot :name="prop" >
        <template v-if="isFile">
            <view class="item-label">{{ label }}</view>
            <view  class="item-value file">
              <view class="file-line" v-for="(img,index) in (value as any)" :key="img.id">
                <region-img :key="index" :id="img.id" :fileId="img.id" :fileName="img.name" />
              </view>
            </view>
          </template>
          
          <view v-else-if="isImg" class="img-list">
            <view class="item-label">{{ label }}</view>
            <view class="image" v-for="(img,index) in (value as any)" :key="img.id">
              <region-img :key="index" :id="img.id"  :fileName="img.name" />
            </view>
          </view>
          <template v-else>
            <view class="item-label">{{ label }}</view>
            <view class="item-value" v-if="!$slots[prop+'Value']">
              {{ value }}
            </view>
          </template>
      </slot>
      <slot :name="[prop+'Value']" ></slot>
    </view>
  </view>
</template>
<script lang="ts" setup>
import {computed} from 'vue'
interface Field {
  label: string;
  prop: string;
  getValue?: (record) => any;
  isFile?: boolean;
  isImg?: boolean;
}
const props = defineProps<{
  fields: Field[];
  record: any;
}>()
const list = computed(() => {
  let record = props.record || {};
 
  return props.fields.map(({label,prop,getValue,isFile,isImg}) => {
    let fieldItem = { prop, label ,isFile,isImg} as any
    if(isFile||isImg) {
      fieldItem['value'] = record[prop]
    } else {
      fieldItem['value'] = getValue ? getValue(record) : record[prop]
    }
    return fieldItem
  })
})


</script>
<style lang="scss" scoped>
.detail-container {
  margin-top: 20rpx;
  margin-bottom: 30rpx;
  padding: 20rpx 30rpx;
  background: #fff;

  .item {
    min-height: 80rpx;
    display: flex;
    align-items: center;

    .item-label {
      width: 30%;
      color: #4b5b6c;
      font-weight: 600;
      font-size: 26rpx;
      font-weight: 400;
      color: #4B5B6C;
      line-height: 26rpx;
    }
    .item-value {
      width: 70%;
      // 超出换行,最多两行,超出显示省略号
      overflow: hidden;
      //text-overflow: ellipsis;
      word-break: break-all;
      white-space: normal;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      font-size: 26rpx;
      font-weight: 400;
      color: #222222;
      line-height: 26rpx;
    }
    .img-list {
      display: flex;
      flex-wrap: wrap;
    }
    .img-list .item-label{
      width: 100%;
      margin-top: 15rpx;
      margin-bottom: 20rpx;
    }

    .item-value.file {
      display: flex;
      flex-wrap: wrap;

      .file-line {
        width: 100%;
      }
    }
    
  }

}
</style>