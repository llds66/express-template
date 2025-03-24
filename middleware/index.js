const express = require("express");

// 跨域
const cors = require("cors");

/**
 * 格式化响应
 * code: 0 成功，1 异常，2 身份验证失败
 */
const cc = (req, res, next) => {
  // code 默认值为 400，表示失败的情况
  res.cc = function (err, code = 1, data) {
    const datas = {
      code,
      message: err instanceof Error ? err.message : err,
      data,
    };
    if (!data) delete datas.data;
    if (code === 0 || code === 1 || code === 2) res.send(datas);
    else res.status(code).send(datas);
  };
  next();
};

// Token中间件
const { expressjwt } = require("express-jwt");
const { jwtConfig } = require("../config/common");

module.exports = [
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
  cc,
    expressjwt(jwtConfig).unless({
      path: [
        "/common/login",
        "/common/reg",
      ],
    }),
];
