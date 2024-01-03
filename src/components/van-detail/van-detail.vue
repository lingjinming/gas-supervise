<template>
  <view class="detail-container">
    <view class="item" v-for="({label,value,prop,isFile}) in list" :key="prop">
      <slot :name="prop" class="item"></slot>
      <template v-if="!$slots[prop]">
        <template>
          <view class="item-label">{{ label }}</view>
          <view :class="['item-value',isFile?'file':'']" v-if="isFile">
            <view class="file-line" v-for="img in (value as any)" :key="img.id">
              <region-img :key="img.id" :fileId="img.id" :fileName="img.name" />
            </view>
          </view>
          <view class="item-value" v-else>{{ value }}</view>
        </template>
      </template>
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
}
const props = defineProps<{
  fields: Field[];
  record: any;
}>()
const list = computed(() => {
  let record = props.record || {};
 
  return props.fields.map(({label,prop,getValue,isFile}) => {
    let fieldItem = { prop, label ,isFile} as any
    if(isFile) {
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
    line-height: 40rpx;
    display: flex;
    align-items: center;
    border-bottom: 1rpx dashed #ccc;

    .item-label {
      width: 30%;
      color: #4b5b6c;
      font-weight: 600;
    }

    .item-value.file {
      display: flex;
      flex-wrap: wrap;

      .file-line {
        width: 100%;
      }
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
    }
  }

}
</style>