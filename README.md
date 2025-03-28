<blockquote align="center">
<p><br><strong>express-template 模板</strong><br><a href="https://apifox.com/apidoc/shared-0b3d30a8-c14b-450a-a4d2-d2567da3a7c6"><strong>Apifox -></strong></a></p>
</blockquote>

## 一、功能

+ 登录
+ 注册
+ 增、删、改、查
+ 单文件上传
+ 多文件上传

## 二、开发

### 1.拉取项目

```bash
git clone git@github.com:llds66/express-template.git
```

### 2.新建配置文件
```javascript
// config/common.js 文件
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

### 3.启动

```bash
# 安装依赖
npm install
```



```bash
# 启动
npm run dev
```
