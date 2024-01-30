export const useEventChannel = () => {
  // 应该在 onLoad 或者 onMounted 里面调用
  const instance = getCurrentInstance();
  // @ts-ignore
  const eventChannel: UniApp.EventChannel = instance!.ctx?.getOpenerEventChannel();
  if(!eventChannel) {
    throw new Error("useEventChannel should be called in onLoad or onMounted");
  }
  return eventChannel;
}