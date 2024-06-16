<template>
<view class="gas_field_container" @click="clickField">
  <!-- 自己实现 -->
    <view class="gas-cell_title">
      <view class="gas-field_label" :class="{required}">{{props.label}}</view>
    </view>
    <view class="gas-field">
      <slot name="input">
        <template v-if="type === 'datetime'">
          <view class="gas-field_datetime">
            <uni-datetime-picker type="datetime" v-model="modelValue" >
              {{ modelValue ||  placeholder }}
            </uni-datetime-picker>
          </view>
        </template>
        <template v-else-if="type === 'daterange'">
          <view class="gas-field_daterange" @click="openCalendar">
            {{ datarange }}
          </view>
          <uni-calendar 
            ref="calendar"
            style=" --window-bottom: 0px;"
            class="calendar"
            :insert="false"
            :range="true" @confirm="confirmCalendar"/>
        </template>
        <template v-else-if="type !=='textarea'">
          <view class="gas-field_input" :class="{readonly}">
            <input
              :type="type"
              :class="{disabled: disabled}"
              :value="modelValue"
              @input="inputChange"
              :placeholder="placeholder"
              :readonly="readonly"
              :required="required"
              :disabled="disabled||readonly"
            />
            
          </view>
        </template>
        <template v-else>
          <view class="gas-field_textarea">
            <textarea
              :class="{disabled: disabled}"
              :value="modelValue"
              @input="inputChange"
              :placeholder="placeholder"
              :readonly="readonly"
              :required="required"
              :disabled="disabled"
              :maxlength="maxlength"
            ></textarea>
          </view>
          </template>
          
      </slot>
    </view>
    <template v-if="rightIcon">
      <view class="gas-cell_right" @click="handlelCickRightIcon">
        <uni-icons  :type="rightIcon" size="18" color="#c8c9cc"></uni-icons>
      </view>
    </template>
    

</view>
</template>
<script lang="ts" setup>
import {gasFieldProps} from './index'
const emits = defineEmits(["update:modelValue","click","change","click-right-icon"]);

const props = defineProps(gasFieldProps);

const modelValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emits("update:modelValue", val);
  }
})

const datarange = computed(() => {
  let date = modelValue.value;
  if(Array.isArray(date) && date.length === 2){
    return `${date[0]} - ${date[1]}`;
  }
  return props.placeholder || '--';
})

const handlelCickRightIcon = () => {
  emits("click-right-icon");
}

const calendar = ref(null);
const openCalendar = () => {
  uni.hideKeyboard();
  // @ts-ignore
  calendar.value?.open();
}
const confirmCalendar = (e) => {
  // 坑爹
  let dateList = e.range.data;
  let start =  e.fulldate;
  let end =  e.fulldate;
  if(dateList.length >= 2) {
    start = dateList[0];
    end = dateList[dateList.length - 1];
  }
  // @ts-ignore
  modelValue.value = [start,end];
}

const inputChange = (event) => {
  modelValue.value = event.detail.value;
}

const clickField = (e) => {
  emits("click", e);
}

</script>
<style lang="scss" scoped>
.gas_field_container {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background-color: #fff;
  padding: 20rpx 32rpx;
  line-height: 48rpx;
  box-sizing: border-box;
  &::after {
    border-bottom: 1rpx solid #ebedf0;
    bottom: 0;
    box-sizing: border-box;
    content: " ";
    left: 16rpx;
    pointer-events: none;
    position: absolute;
    right: 16rpx;
    transform: scaleY(.5);
    transform-origin: center;
    border-bottom-width: 1rpx;
    border-bottom-style: solid;
    border-bottom-color: rgb(235, 237, 240);
  }
  .gas-cell_title {
    max-width: 6.2em;
    min-width: 6.2em;
    flex: 1;
    

    .gas-field_label{
      font-size: 24rpx;
      font-weight: 600;
      height: 100%;
      color: #646566;
      display: flex;
      align-items: center;
      &.disabled {
        color: #c8c9cc;
      }
      &.required{
        &::before {
          color: #ee0a24;
          content: "*";
          font-size: 14px;
          left: 8px;
          position: absolute;
        }
        
      }
    }
  }
  .gas-field {
    flex: 1;
  }

  .gas-field > .disabled {
    color: #c8c9cc;
  }
  .gas-field .readonly{
    color: #c8c9cc;
  }

  .gas-field .gas-field_textarea {
    height: 250rpx;
    width: calc(100% - 30rpx);
    background: $uni-text-color-grey;
    border-radius: 10rpx;
    padding: 20rpx;
  }
  .gas-field .gas-field_datetime{
    min-height: 50rpx;
  }
  .gas-field .gas-field_daterange {
    --window-bottom: 0px;
  }
  .gas-cell_right {
    text-align: right;
  }
}
</style>