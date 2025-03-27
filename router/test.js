const express = require("express");
const router = express.Router();
const testService = require("../services/test");
const upload = require("../utils/multer");
// 用户信息
router.get("/user", testService.getUser);

// 查
router.get("/test", testService.getTest);
// 增
router.post("/test", testService.addTest);
// 改
router.put("/test", testService.updateTest);
// 删
router.delete("/test", testService.deleteTest);

// 文件上传
// req.file 是 `avatar` 文件的信息,其他form-data数据保存在req.body中
// 单文件上传
router.post("/singleUpload", upload.single("image"), testService.singleUpload);
// 多文件上传
router.post(
  "/multipleUpload",
  upload.fields([{ name: "image" }, { name: "avatar" }]),
  testService.multipleUpload
);

module.exports = router;
