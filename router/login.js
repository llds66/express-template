const express = require('express')
const router = express.Router()
const loginService = require('../services/login')

// 登录
router.post('/login', loginService.login)
// 注册
router.post('/reg', loginService.reg)


module.exports = router