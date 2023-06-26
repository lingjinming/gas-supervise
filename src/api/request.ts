const BASE_URL = "https://aiot.citysafety.com/gasguard/";

export const request = (option: {
  url: string;
  method: string;
  data?: any;
  header?: any;
}) => {
  let TOKEN = uni.getStorageSync("TOKEN_INFO")["access_token"];
  let SERVER_CONFIG = uni.getStorageSync("SERVER_CONFIG");
  let header = {};
  if (SERVER_CONFIG) {
    header = Object.assign(header, {
      "x-api-region": SERVER_CONFIG.name,
      Authorization: SERVER_CONFIG.auth,
      "content-type": "application/x-www-form-urlencoded",
    });
  }
  if (TOKEN) {
    header = Object.assign(header, {
      Authorization: "Bearer " + TOKEN,
      "content-type": "application/json",
    });
  }
  if (option.header) {
    header = Object.assign(header, option.header);
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + option.url,
      method: option.method,
      header,
      data: option.data,
      success(res) {
        // console.log('success',res)

        resolve(res.data);
      },
      fail(err) {
        // console.log('fail',err)

        reject(err);
      },
    });
  });
};
