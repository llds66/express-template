const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/') // 设置文件存储路径
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + path.extname(file.originalname)) // 使用唯一文件名
    }
})

// 创建 multer 实例
// 处理form-data类型的文件上传
const upload = multer({storage: storage})
module.exports = upload