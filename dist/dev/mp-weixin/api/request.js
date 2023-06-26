"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "https://aiot.citysafety.com/gasguard/";
const request = (option) => {
  let TOKEN = common_vendor.index.getStorageSync("TOKEN_INFO")["access_token"];
  let SERVER_CONFIG = common_vendor.index.getStorageSync("SERVER_CONFIG");
  let header = {};
  if (SERVER_CONFIG) {
    header = Object.assign(header, {
      "x-api-region": SERVER_CONFIG.name,
      Authorization: SERVER_CONFIG.auth,
      "content-type": "application/x-www-form-urlencoded"
    });
  }
  if (TOKEN) {
    header = Object.assign(header, {
      Authorization: "Bearer " + TOKEN,
      "content-type": "application/json"
    });
  }
  if (option.header) {
    header = Object.assign(header, option.header);
  }
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASE_URL + option.url,
      method: option.method,
      header,
      data: option.data,
      success(res) {
        resolve(res.data);
      },
      fail(err) {
        reject(err);
      }
    });
  });
};
exports.request = request;
