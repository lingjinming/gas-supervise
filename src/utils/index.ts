export const formatDate = (value:number) => {
  let date = new Date(value);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
};

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
