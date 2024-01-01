<template>
  <view class="uploader-box">
    <text class="label">{{ label }}</text>
    <!-- 文件上传 -->
    <template v-if="accept === 'file'">
      <van-uploader accept="file" @after-read="upload" >
        <van-button icon="description" custom-style="height: 60rpx;">选择文件</van-button>
      </van-uploader>
      <view v-for="(f,index) in fileList" :key="f.name" class="file-list">
        <view class="fiel-preview">
          <view class="file-del" @click="deleteFile({detail:{index,file:f}})">
            <van-icon name="cross" size="20px" color="#000"></van-icon>
          </view>
          {{ f.name }}
        </view>
      </view>
    </template>
    <!-- 图片上传 -->
    <template v-else>
      <van-uploader
        multiple
        :max-count="3"
        accept="image"
        :file-list="fileList"
        @delete="deleteFile"
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
import { uploadFile ,uploadfileAsync} from "@/hooks";
import { downloadFile} from "@/api/img";
import { getFileExt,isImageFile } from '@/utils'
import type {ResultFileUpdateResponseDTO,FileObj} from '@/api/gen/data-contracts'
interface File{  
  id?:string,
  status?: 'uploading'|'down' | 'failed',
  type: 'image' | 'media' | 'file'; 
  name: string; 
  size: number; 
  time: number; 
  url: string;
  tempFilePath: string;
  // 图片附件时
  thumb: string;
}
const emits = defineEmits(["update:modelValue"]);
const props = withDefaults(defineProps<{
  modelValue: string[] | FileObj[],
  label?: string,
  accept?: 'image' | 'media' | 'file',
  types: string[]
}>(),{
  label: '上传照片(最多3张)',
  accept: 'image',
  // @ts-ignore
  types: ['jpg', 'jpeg', 'png', 'gif']
})
const fileList = ref<File[]>([]);
watch(fileList,(newFils) => {
  let newFileIds = newFils.filter(f => f.id).map(({id,name,url}) => ({id,name,url}));
  emits("update:modelValue", newFileIds);
})


onMounted(() => {
  let reshowPromiseList:Promise<void>[] = []
  // @ts-ignore
  fileList.value = props?.modelValue?.map(({id,name,url}) => {
    let item =  {  id, name, status: 'uploading', type: props.accept, size: 0,  time: 0, url: '',tempFilePath: '', thumb: ''}
    // 对图片要反显出来
    if(isImageFile(id) && !url) {
      reshowPromiseList.push(downloadFile(id).then((tempPath) => {
        item.url = tempPath;
        item.tempFilePath = tempPath;
        item.thumb = tempPath;
        item.status = 'down';
      }))
    } else {
      item.url = url;
      item.tempFilePath = url;
      item.thumb = url;
      item.status = 'down';
    }
    return item;
  }) || []
  Promise.all(reshowPromiseList).then(() => {
    fileList.value = [...fileList.value]
  })
})

const deleteFile = (event: {detail: {index:number,file: File}}) => {
  fileList.value = fileList.value.filter((_,i) => i !== event.detail.index)
};


const upload = async (event: {detail: {file: File[] | File}}) => {
  let { file } = event.detail;
  if(!Array.isArray(file)) {
    file['tempFilePath'] = file.url;
    file = [file]
  }
  // 按照types校验文件类型
  for(let f of file) {
    if(!validateFile(f)) {
      uni.showToast({ icon: 'none', title: `文件类型不支持,支持的文件类型有:${props.types.join(',')}` })
      return;
    }
  }
  fileList.value.push(...file);
  fileList.value = [...fileList.value]

  const uploadTasks = file.map((item) => {
    item.status = 'uploading'
    return uploadfileAsync(item)
      .then(response => {
        item.status = 'down';
        item.id = response.data.objectName;
      }).catch(e => {
        item.status = 'failed';
      })
  });
  // show uploading
  uni.showLoading({ title:'上传中...' });
  Promise.all(uploadTasks).finally(() => {
    uni.hideLoading();
    fileList.value = [...fileList.value]
  })
};

const validateFile = (file: File): boolean => {
  if(!file) return false;
  if(!props.types?.length) return true;
  const ext = getFileExt(file.name);
  if(!ext) return false;
  return props.types.includes(ext)
}

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
