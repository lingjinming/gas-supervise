<template>
  <view class="tab_box" :class="{ isColumn: isColumn }">
    <view v-if="tit" class="tit">{{ tit }}</view>
    <view class="tab_item_box">
      <view
        v-for="tab in tabs"
        :key="tab.label"
        :class="[
          'tab_item flex_center_row',
          { cur: tab.label == currentLabel },
        ]"
        @click="changeType(tab)"
      >
        {{ tab.label }}
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const emits = defineEmits(["update:modelValue","change"]);
const props = defineProps({
  isColumn: {
    type: Boolean,
    default: false,
  },
  tit: {
    type: String,
  },
  tabs: {
    type: Object,
    default() {
      return [
        {
          label: "类型1",
          value: 1,
        },
        {
          label: "类型2",
          value: 2,
        },
      ];
    },
  },
});
let currentLabel = ref(props.tabs[0]["label"]);
const changeType = (item) => {
  currentLabel.value = item.label;
  emits("update:modelValue", item.value);
  emits("change", item);
};
</script>

<style lang="scss" scoped>
.tab_box {
  .tit {
    color: #999;
    height: 40rpx;
    line-height: 40rpx;
    margin-bottom: 15rpx;
  }

  .tab_item_box {
    display: flex;
    flex-wrap: wrap;

    .tab_item {
      position: relative;
      width: 194rpx;
      height: 72rpx;
      border-radius: 10rpx;
      color: #999;
      background: #f5f6fa;
      margin-right: 20rpx;

      &:nth-child(3n) {
        margin-right: 0;
      }

      image {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 40rpx;
        height: 36rpx;
      }
    }

    .cur {
      color: $uni-color-primary;
      background: #e9f1fb;
    }
  }
}

.isColumn {
  .tit {
    text-align: center;
    margin: 50rpx 0;
  }

  .tab_item_box {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .tab_item {
      margin-right: 0;
      margin-bottom: 40rpx;
    }
  }
}
</style>
