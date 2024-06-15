<template>
  <view class="uploader-box">
    <text class="label" :class="{required}">{{ label }}</text>
    <!-- 文件上传 -->
    <template v-if="accept === 'file'">
      <uni-file-picker 
        :auto-upload="false" 
        v-model="fileList" 
        file-extname="doc,docx,pdf"
        limit="5"
        @select="uniUpload"
        @fail="onFail"
        file-mediatype="all" 
        title="最多选择5个文件"></uni-file-picker>
    </template>
    <!-- 图片上传 -->
    <template v-else>
      <uni-file-picker 
        limit="3" 
        v-model="fileList" 
        file-mediatype="image" 
        @select="uniUpload"
        ></uni-file-picker>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { uploadfileAsync} from "@/hooks";
import { getFileExt } from '@/utils'
import  type { LocalFile,FileObj ,AcceptType} from './index'
import {adapterFile} from './index'

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    required: false,
    type: Array as PropType<FileObj[]>,
  },
  // 是否必填
  required: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: '上传照片(最多3张)'
  },
  // 上传文件类型
  accept: {
    type: String as PropType<AcceptType>,
    default: 'image'
  },
  // 支持的文件扩展类型
  types: {
    type: Array as PropType<string[]>,
    default: () => ['jpg', 'jpeg', 'png', 'gif']
  }
})

const fileList = computed({
  get() {
    let values = props.modelValue||[];
    let [file,tasks] = adapterFile(values,props.accept);
    if(tasks.length) {
      Promise.all(tasks).finally(() => {
        fileList.value = [...file]
      })
    }
    return file;
  },
  set(newFile) {
    let newFileIds = newFile.filter(f => f.id).map(({id,name,url}) => ({id,name,url}));
    emits("update:modelValue", newFileIds);
  }
})


const uniUpload = (data) => {
  let files = data.tempFiles;
  if(!files.length) {
    uni.showToast({ icon: 'none', title: `文件类型不支持` });
    return;
  }
  const uploadTasks = files.map(async (item) => {
    let req = { tempFilePath: item.path, name: item.name};
    const response = await uploadfileAsync(req);
    item.id = response.data.objectName;
    fileList.value.push(item);
  })
  // show uploading
  uni.showLoading({ title:'上传中...' });
  Promise.all(uploadTasks).finally(() => {
    uni.hideLoading();
    fileList.value = [...fileList.value]
  })
}

const onFail = (e) => {
  console.log(e)
}

const deleteFile = (event: {detail: {index:number,file: LocalFile}}) => {
  fileList.value = fileList.value.filter((_,i) => i !== event.detail.index)
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
    flex-wrap: wrap;
    .fiel-preview {
      width: 100%;
      min-height: 45rpx;
      padding-left: 10rpx;
      padding-right: 40rpx;
      border: 1rpx solid #efefef;
      position: relative;
      // 文本超出的时候换行
      word-break: break-all;
      white-space: normal;
      line-height: 45rpx;
      color: $uni-color-primary;
      // 每行的文字底部添加下划线
      text-decoration: underline;

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
  .required {
    &::before {
      content: '*';
      color: $uni-color-error;
    }
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
