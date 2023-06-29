<template>
  <view class="container">
    <van-cell-group>
      <van-field
        :value="reportForm.remark"
        @change="reportForm.remark = $event.detail"
        label="隐患描述"
        type="textarea"
        fixed
        autosize
        placeholder="请输入"
        maxlength="200"
      />
      <van-field label="位置" is-link>
        <input
           slot="input"
           style="width: 100%;"
          :value="reportForm.address"
          placeholder="请选择"
          @click="chooseLocation"
        />
      </van-field>


      <!-- <van-field
        :value="districtName"
        :innerValue="districtName"
        label="所属区域"
        fixed
        autosize
        placeholder="请点选位置"
      /> -->

      <van-picker-new
        dicType="org"
        :label="isOrg ? '责任企业' : '上报企业'"
        :title="isOrg ? '责任企业' : '上报企业'"
        v-model="reportForm.orgId"
      />
      <van-picker-new
        v-if="isOrg"
        dicType="planCode"
        label="关联检查计划"
        title="关联检查计划"
        v-model="reportForm.planCode"
        :orgId="reportForm.orgId"
      />

      <van-picker-new
        dicType="RISK_DANGER_LEVEL"
        label="隐患等级"
        title="隐患等级"
        v-model="reportForm.level"
      />

      <van-cascader-new
        dicType="RISK_SUBJECT_TYPE_TREE"
        label="隐患类别"
        title="隐患类别"
        v-model="reportForm.dangerType"
        v-model:subjectType="reportForm.subjectType"
      />

      <van-field
        label="检查日期"
        disabled
        :value="reportForm.checkDate"
      >
      </van-field>
    </van-cell-group>
    <view class="uploader-box">
      <text>上传照片</text>
      <van-uploader
        multiple
        :max-count="3"
        accept="image"
        :file-list="fileList"
        @delete="delImg"
        @after-read="uploadImg"
      >
      
      <van-button icon="photo" type="primary">最多3张</van-button>
    </van-uploader>
    </view>

    <van-button type="primary" size="large" round plain @click="submit"
      >确定</van-button
    >
  </view>
</template>
<script setup lang="ts">
import { reactive, ref , type Ref} from "vue";
import { addHidden, type req_addHidden } from "../../api/hidden";
import { formatDate } from "@/utils";
import { getDistrictId } from '@/utils/qqMapUtil'
import { minDate,maxDate} from "@/hooks";
const isOrg: boolean = uni.getStorageSync("USER_INFO")['organizationVO']["orgType"] != 1;

onShow(() => {
  isOrg &&
    uni.setNavigationBarTitle({
      title: "安全检查下发",
    });
});

let checkDatePopupIsShow = ref(false);
const districtName = ref('')
let reportForm: req_addHidden = ref({
  isOrg: isOrg,
  remark: "",
  address: "",
  orgId: "",
  level: "",
  checkDate: formatDate(minDate),
  planCode: "",
  subjectType: "",
  dangerType: "",
  fileIds: [],
  longitude: "",
  latitude: "",
  districtId: "",
});
// reportForm.value.checkDate =
let fileList: any = ref([]);
const delImg = (event) => {
  fileList.value.splice(event.detail.index, 1);
};
const uploadImg = async (event) => {
  let SERVER_CONFIG = uni.getStorageSync("SERVER_CONFIG");
  let { file } = event.detail;
  // console.log(file);
  file.map((item) => {
    item = Object.assign(item, {
      url: file.tempFilePath,
      status: "uploading",
      message: "上传中",
    });
  });
  fileList.value = file;
  const uploadTasks = file.map((item) => {
    return new Promise((resolve) => {
      uni.uploadFile({
        url: "https://aiot.citysafety.com/gasguard/gasguard-service-system-app/file/upload",
        filePath: item.tempFilePath,
        name: "file",
        header: {
          "x-api-region": SERVER_CONFIG.name,
          Authorization:
            "Bearer " + uni.getStorageSync("TOKEN_INFO")["access_token"],
        },
        success(res) {
          item.status = "done";
          resolve(JSON.parse(res.data));
        },
      });
    });
  });
  Promise.all(uploadTasks).then((data) => {
    data.map((item, i) => {
      file[i] = Object.assign(file[i], item.data);
    });
    fileList.value = JSON.parse(JSON.stringify(file));
  });
};

const submit = async () => {
  if (fileList.value.length) {
    reportForm.value.fileIds = [];
    fileList.value.forEach((file) => {
      reportForm.value.fileIds.push(file.objectName);
    });
  }
  let data = await addHidden(reportForm.value);
  data.success &&
    setTimeout(() => {
      uni.navigateBack();
    }, 1500);
};

const chooseLocation = () => {
  uni.authorize({
    scope: "scope.userLocation",
    success() {
      uni.chooseLocation({
        success: function (res) {
          reportForm.value.address = res.name + res.name;
          reportForm.value.longitude = res.longitude;
          reportForm.value.latitude = res.latitude;
          console.log(res);

          getDistrictId(res.latitude,res.longitude).then(data => {
            console.log(data);

            reportForm.value.districtId = data.code;
            districtName.value = data.name;
          })
        },
        fail: function (res) {
          console.log(res);

        }
      });
    },
  });
};
</script>
<style lang="scss" scoped>
.top {
  line-height: 100rpx;
}
.uploader-box {
  display: flex;
  gap: 88rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
}
</style>
