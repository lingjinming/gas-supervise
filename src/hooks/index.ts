import { userStore } from "@/state";
import type { ResultFileUpdateResponseDTO } from "@/api/gen/data-contracts";

export const minDate = new Date().getTime();
export const tomorrowDate = new Date().getTime() + 24 * 60 * 60 * 1000;
export const maxDate = new Date(2099, 10, 1).getTime();

export const showToast = (flag: boolean = true, msg?:string,callback?: Function) => {
  uni.showToast({
    icon: flag ? "success" : "none",
    title: msg ? msg : "操作成功",
  });

  flag && uni.$emit("refresh");
  setTimeout(() => {
    callback && callback();
  }, 1500);
};

export const uploadFile = (item, cb) => {
  const store = userStore();
  const server = store.auth.activeServer;
  const token = store.auth.token;
  const baseUrl = server?.BASE_URL;
  uni.uploadFile({
    url: baseUrl+"/file/upload",
    filePath: item.tempFilePath,
    name: "file",
    header: {
      Authorization: "Bearer " + token?.access_token,
    },
    success(res) {
      const result = JSON.parse(res.data)
      item.status = "done";
      item.id = result.data.objectName;
      // @ts-ignore
      cb(result);
    },
    fail(err) {
      uni.showToast({
        icon: "none",
        title: "上传失败,请重新上传",
      });
    },
  });
};


export const uploadfileAsync = (file: {tempFilePath: string,name?:string}) => 
  new Promise<ResultFileUpdateResponseDTO>((resolve, reject) => {
    const store = userStore();
    const server = store.auth.activeServer;
    const baseUrl = server?.BASE_URL;
    const token = store.auth.token;
    // name uriEncode
    const filename = file.name ? `?filename=${encodeURIComponent(file.name)}` : "";
    uni.uploadFile({
      url: baseUrl+"file/upload"+filename,
      filePath: file.tempFilePath,
      name: "file",
      header: {
        Authorization: "Bearer " + token?.access_token,
      },
      success(res) {
        try{
          const result = JSON.parse(res.data)
          resolve(result);
        } catch(err) {
          reject(res);
        }
      },
      fail(err) {
        reject(err);
      },
    });
  });