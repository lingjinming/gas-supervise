export const formatDate = (value) => {
  let date = new Date(value);
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
};

export const getUrl =(str) => {
    str = str.slice(str.indexOf("?") + 1);  //结果：ie=utf-8&f=3&rsv_bp=0
  var arr = str.split("&");  //结果： ["ie=utf-8", "f=3", "rsv_bp=0"]
  var obj = {};
  for(var i = 0; i < arr.length; i++) {
    var newArr = arr[i].split("="); //结果：["ie", "utf-8"]，["f", "3"]，["rsv_bp", "0"]
    obj[newArr[0]] = newArr[1];
  }
  return obj;
}
