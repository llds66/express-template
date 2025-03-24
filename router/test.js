const express = require('express')
const router = express.Router()
const testService = require('../services/test')

// 用户信息
router.get('/user',testService.getUser)
// 查
router.get('/test',testService.getTest)
// 增
router.post('/test',testService.addTest)
// 改
router.put('/test',testService.updateTest)
// 删
router.delete('/test',testService.deleteTest)

module.exports = router