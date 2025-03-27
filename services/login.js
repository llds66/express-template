const db = require("../db");
const jwt = require("jsonwebtoken");
const {
  expiresIn,
  jwtConfig: { secret, algorithms },
} = require("../config/common");
const { hashPassword, comparePassword } = require("../utils/bcrypt");
/**
 * 登录
 * @param {string} req.body.account
 * @param {string} req.body.password
 */
exports.login = async (req, res) => {
  const { account, password } = req.body;
  const selectUser = "SELECT * FROM user WHERE account = ?";
  try {
    const [userResult] = await db.query(selectUser, [account]);
    if (userResult.length === 0) {
      return res.cc("用户不存在", 1);
    }
    // 密码校验
    const isBoolean = await comparePassword(password, userResult[0].password);
    if (!isBoolean) {
      return res.cc("密码错误", 1);
    }
    // 生成token
    const token = jwt.sign(
      { userId: userResult[0].id, account: userResult[0].account },
      secret,
      { expiresIn, algorithm: algorithms[0] }
    );
    res.cc("登录成功", 0, { token: `Bearer ${token}` });
  } catch (error) {
    return res.cc(error);
  }
};

/**
 * 注册
 * @param {string} req.body.account
 * @param {string} req.body.password
 */
exports.reg = async (req, res) => {
  const { account, password } = req.body;
  const selectUser = "SELECT * FROM user WHERE account = ?";
  const insertUser = "INSERT INTO user (account, password) VALUES (?, ?)";
  try {
    const [userResult] = await db.query(selectUser, [account]);
    if (userResult.length !== 0) {
      return res.cc("用户已存在", 1);
    }
    //加密
    const hash_password = await hashPassword(password);
    const [insertUserResult] = await db.query(insertUser, [
      account,
      hash_password,
    ]);
    if (insertUserResult.affectedRows !== 1) {
      return res.cc("注册失败", 1);
    }
    res.cc("注册成功", 0);
  } catch (error) {
    return res.cc(error);
  }
};
