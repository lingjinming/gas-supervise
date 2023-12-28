<template>
  <view class="uploader-box">
    <text class="label">{{ label }}</text>
    <!-- 文件上传 -->
    <template v-if="accept === 'file'">
      <van-uploader
        accept="file"
        @after-read="upload"
      >
        <van-button icon="description" custom-style="height: 60rpx;">选择文件</van-button>
        <view v-for="f in fileList" :key="f.name" class="file-list">
          <view class="fiel-preview">
            <view class="file-del">
              <van-icon name="cross" size="20px" color="#000"></van-icon>
            </view>
            {{ f.name }}
          </view>
        </view>
      </van-uploader>
    </template>
    <!-- 图片上传 -->
    <template v-else>
      <van-uploader
        multiple
        :max-count="3"
        accept="image"
        :file-list="fileList"
        @delete="delImg"
        @after-read="upload"
      >
        <view class="btn">
          <van-icon name="plus" size="50px" color="#efefef"></van-icon>
        </view>
      </van-uploader>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { uploadFile } from "@/hooks";
import type {ResultFileUpdateResponseDTO} from '@/api/gen/data-contracts'
interface File{  
  id?:string,
  status?: 'uploading'|'down',
  type: 'image' | 'media' | 'file'; 
  name: string; 
  size: number; 
  time: number; 
  url: string;
  tempFilePath: string;
  thumb: string;
}
const emits = defineEmits(["update:modelValue"]);
const props = withDefaults(defineProps<{
  modelValue: string[],
  label?: string,
  accept?: 'image' | 'media' | 'file',
  // 反显时候的文件列表
  reshow: {id: string,name:string}[]
}>(),{
  label: '上传照片(最多3张)',
  accept: 'image',
  // @ts-ignore
  reshow: []
})
const fileList = ref<File[]>([]);
watch(fileList,(newFils) => {
  let newFileIds = newFils.filter(f => f.id).map(f => f.id);
  emits("update:modelValue", newFileIds);
})

onMounted(() => {
  fileList.value = props?.modelValue?.map(f => {
    return {
      // @ts-ignore
      id: f.id,
      // @ts-ignore
      name: f.name,
      status: 'down',
      type: props.accept,
      size: 0,
      time: 0,
      url: '',
      tempFilePath: '',
      thumb: ''
    }
  })
})

// 需要反显出来附件

const delImg = (event) => {
  // let temp = JSON.parse(JSON.stringify(fileList.value));
  // temp.splice(event.detail.index, 1);
  // fileIds.value.splice(event.detail.index, 1);

  // fileList.value = temp;
  // console.log(fileList.value);
};





const upload = async (event: {detail: {file: File[] | File}}) => {

  let { file } = event.detail;
  file = Array.isArray(file) ? file : [file]

  fileList.value.push(...file);
  fileList.value = [...fileList.value]

  const uploadTasks = file.map((item) => {
    item.status = 'uploading'
    return new Promise<ResultFileUpdateResponseDTO>((resolve,reject) => {
      uploadFile(item,resolve)
    });
  });
  await Promise.all(uploadTasks);
  fileList.value = [...fileList.value]

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
  .file-list {
    display: flex;
    padding: 10rpx 0;
    .fiel-preview {
      height: 45rpx;
      padding-left: 10rpx;
      padding-right: 40rpx;
      border: 1rpx solid #efefef;
      position: relative;

      .file-del {
        // 绝对定位在右上角
        position: absolute;
        top: 0;
        right: 15rpx;
        width: 20rpx;
        height: 20rpx;
      }
    }
  }
  
  .label {
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
