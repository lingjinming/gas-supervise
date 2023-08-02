export const minDate = new Date().getTime()
export const tomorrowDate = new Date().getTime() + 24 * 60 * 60 * 1000
export const maxDate = new Date(2099, 10, 1).getTime()
export const formatDate = (value:number) => {
  let date = new Date(value);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
};

/**
 * 时间戳 转 yyyy-MM-dd HH:mm:ss
 * @param timestamp 时间戳
 * @returns  时间字符串
 */
export function timestampToDateTimeString(timestamp: number) {
  const dateObj = new Date(timestamp);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const seconds = String(dateObj.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


export const getUrl = (url) => {
  var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
  var result = parse_url.exec(url);
  let urlObj = {}
  var names = ["url","scheme","slash","host","port","path","query","hash"];
  for(var i=0; i <names.length;i++){
      urlObj[names[i]] = result[i]
  }
  return urlObj
};
