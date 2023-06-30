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
