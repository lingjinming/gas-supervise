"use strict";
const api_request = require("./request.js");
const addHidden = (data) => {
  return api_request.request({
    url: data.isOrg ? "gasguard-service-risk-app/hidanger/org" : "gasguard-service-risk-app/hidanger/gov",
    method: "post",
    data
  });
};
exports.addHidden = addHidden;
