import {
  onMounted,
  getCurrentInstance
} from 'vue';

export const useEventChannel = () => {
  // 应该在 onLoad 或者 onMounted 里面调用
  const instance = getCurrentInstance();
  console.log(instance)
  // @ts-ignore
  let ctx  = instance?.ctx || instance?.proxy;
  const eventChannel: UniApp.EventChannel = ctx?.getOpenerEventChannel();
  if(!eventChannel) {
    throw new Error("useEventChannel should be called in onLoad or onMounted");
  }
  return eventChannel;
}