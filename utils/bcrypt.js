const bcrypt = require("bcrypt");
const saltRounds = 10;

/**
 * 加密密码
 * @param {string} 需要被加密的密码
 * @returns {string} - 加密后的密码
 */
exports.hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error(error);
    throw new Error("Error hashing password");
  }
};

/**
 * 校验密码
 * @param {string} password - 需要验证的密码
 * @param {string} hashedPassword - 加密后的密码
 * @returns {boolean} - 密码是否匹配
 */
exports.comparePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error(error);
    throw new Error("Error comparing password");
  }
}
