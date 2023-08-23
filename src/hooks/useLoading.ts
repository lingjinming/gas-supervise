type ResponseType = Promise<{success: boolean,message: string, data: any}>

export const useLoading  = async (response: ResponseType,callback?: () => void) => {
  let startTime = new Date().getTime();
  let isFailed = false;
  uni.showLoading({ title: '请稍后...' });
  console.log(isFailed)
  try{
    const { success ,message} = await response;
    if(!success)  {
      isFailed = true;
      uni.hideLoading();
      uni.showToast({
        icon: 'fail',
        title: message
      })
    }
  }finally{
    console.log(isFailed)
    !isFailed && closeLoading(startTime,callback);
  }
}


const closeLoading = (startTime: number,callback ?: () => void) => {
  let costTime = new Date().getTime() - startTime;
  let restTime = 800 - costTime;
  if (restTime > 150) {
    setTimeout(() => {
      uni.hideLoading();
      callback&&callback();
    }, restTime);
  } else {
    uni.hideLoading();
    callback&&callback();
  }
}