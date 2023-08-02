import { userStore } from "@/state";

const store = userStore();
const server = store.auth.activeServer;
// 当前激活的服务器
const token = store.auth.token;

export const minDate = new Date().getTime();
export const tomorrowDate = new Date().getTime() + 24 * 60 * 60 * 1000;
export const maxDate = new Date(2099, 10, 1).getTime();

export const showToast = (flag: boolean = true, callback?: Function) => {
  uni.showToast({
    icon: flag ? "success" : "error",
    title: flag ? "操作成功" : "操作失败",
  });

  flag && uni.$emit("refresh");

  callback && callback();
};

export const uploadFile = (item,cb) => {
  uni.uploadFile({
    url: "https://aiot.citysafety.com/gasguard/gasguard-service-system-app/file/upload",
    filePath: item.tempFilePath,
    name: "file",
    header: {
      "x-api-region": server?.region,
      Authorization: "Bearer " + token?.access_token,
    },
    success(res) {
      item.status = "done";
      cb(JSON.parse(res.data));
    },
    fail(err) {
      uni.showToast({
        icon: "none",
        title: "上传失败,请重新上传",
      });
    },
  });
};
