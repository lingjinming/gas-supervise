type ResponseType<T = any> = Promise<{success: boolean,message: string, data: T}>

export const useLoading  = async <T = any>(response: ResponseType<T>,callback?: (data ?: T) => void) => {
  let startTime = new Date().getTime();
  let isFailed = false;
  uni.showLoading({ icon: 'none',title: '请稍后...' });
  let result: T | undefined = undefined ;
  try{
    const { success ,message,data} = await response;
    result = data
    if(!success)  {
      isFailed = true;
      uni.hideLoading();
      uni.showToast({
        icon: 'none',
        duration: 3000,
        title: message
      })
    }
  }finally{
    !isFailed && closeLoading(startTime,callback,result);
  }
}


const closeLoading = <T = any>(startTime: number,callback ?: (data ?: T) => void,data ?: T) => {
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