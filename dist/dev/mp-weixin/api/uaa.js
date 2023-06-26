"use strict";
const api_request = require("./request.js");
const getConfig = () => {
  return api_request.request({
    url: "config.json",
    method: "GET"
  });
};
const getToken = (data) => {
  return api_request.request({
    url: "apilogin/oauth/token",
    method: "post",
    data
  });
};
exports.getConfig = getConfig;
exports.getToken = getToken;
