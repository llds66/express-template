const bcrypt = require("bcryptjs");
const saltRounds = 10;

/**
 * 加密密码
 * @param {string} password - 需要被加密的密码
 * @returns {Promise<string>} - 加密后的密码
 */
exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
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
 * @returns {Promise<boolean>} - 密码是否匹配
 */
exports.comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error(error);
    throw new Error("Error comparing password");
  }
};
