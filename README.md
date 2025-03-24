## Express-template 开发模板

## 配置 - config/common.js
```javascript
module.exports = {
  // 数据库配置
  dbConfig: {
    host: "", // 数据库地址
    user: "", // 数据库登录用户
    password: "", // 数据库登录密码
    database: "", // 数据库名称
    waitForConnections: true, // 当没有可用连接时，是否等待连接可用
    connectionLimit: 10, // 连接池的最大连接数
  },

  // jwt认证配置
  jwtConfig: {
    secret: "", // 加密和解密 Token 的秘钥
    algorithms: ["HS256"], // 加密方式
  },
  expiresIn: "8h", // Token 过期时间
};
```
### 依赖

```json
"dependencies": {
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "express": "^4.21.2",
    "express-jwt": "^8.5.1",
    "joi": "^17.13.3",
    "jsonwebtoken": "^9.0.2",
    "mysql2": "^3.14.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
```
