<template>
  <view class="uploader-box">
    <text>{{ label }}</text>
    <van-uploader
      multiple
      :max-count="3"
      accept="image"
      :file-list="fileList"
      @delete="delImg"
      @after-read="uploadImg"
    >
      <view class="btn">
        <van-icon name="plus" size="50px" color="#efefef"></van-icon>
      </view>
    </van-uploader>
  </view>
</template>
<script lang="ts" setup>
import { uploadFile } from "@/hooks";
import { userStore } from "@/state";

const store = userStore();
let fileList: any = ref([]);
let fileIds = ref([]);
const emits = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<{
  label?: string,
}>(),{
  label: '上传照片(最多3张)',
})

const delImg = (event) => {
  let temp = JSON.parse(JSON.stringify(fileList.value));
  temp.splice(event.detail.index, 1);
  fileIds.value.splice(event.detail.index, 1);

  fileList.value = temp;
  console.log(fileList.value);
};


const uploadImg = async (event) => {



  let { file } = event.detail;

  fileList.value = fileList.value.concat(file);
  console.log('fileList.value-->',fileList.value)

  const uploadTasks = file.map((item,i) => {
    item.status = 'uploading'
    return new Promise((resolve,reject) => {
      uploadFile(item,resolve)
    });
  });

  Promise.all(uploadTasks).then((data) => {
    debugger
    data.map((item, i) => {
      file[i] = Object.assign(file[i], item.data);
      fileIds.value.push(item.data.objectName);
    });
    fileList.value = JSON.parse(JSON.stringify(fileList.value))
    emits("update:modelValue", fileIds.value);
  });
};
</script>

<style lang="scss" scoped>
.uploader-box {
  display: flex;
  gap: 20rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  background: #fff;
  flex-direction: column;
  text {
    @include label;
  }
  .btn {
    width: 200rpx;
    height: 200rpx;
    background: #f6f6f6;
    border: 2rpx solid #efefef;
    @include flex-center;
  }
}
</style>
