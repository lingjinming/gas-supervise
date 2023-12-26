type ResponseType = Promise<{success?: boolean,message?: string, data?: any}>

export const useLoading  = async (response: ResponseType,callback?: (data ?: any) => void) => {
  let startTime = new Date().getTime();
  let isFailed = false;
  uni.showLoading({ title: '请稍后...' });
  let result = null;
  try{
    const { success ,message,data} = await response;
    result = data
    if(!success)  {
      isFailed = true;
      uni.hideLoading();
      uni.showToast({
        icon: 'fail',
        title: message
      })
    }
  }finally{
    !isFailed && closeLoading(startTime,callback,result);
  }
}


const closeLoading = (startTime: number,callback ?: (data ?: any) => void,data ?: any) => {
  let costTime = new Date().getTime() - startTime;
  let restTime = 800 - costTime;
  if (restTime > 150) {
    setTimeout(() => {
      uni.hideLoading();
      callback&&callback(data);
    }, restTime);
  } else {
    uni.hideLoading();
    callback&&callback();
  }
}