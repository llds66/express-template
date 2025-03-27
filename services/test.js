const db = require("../db");

/**
 * 获取用户信息
 * @returns {object} req.auth - 用户信息
 */
exports.getUser = async (req, res) => {
  try {
    const selectUser = "SELECT * FROM user WHERE id = ?";
    const [user] = await db.query(selectUser, [req.auth.userId]);
    if (user.length === 0) {
      return res.cc("用户不存在", 1);
    }
    // 删除密码
    delete user[0].password;
    return res.cc("获取用户信息成功", 0, user);
  } catch (error) {
    res.cc(error.message);
  }
};

/**
 * 获取全部Test
 */
exports.getTest = async (req, res) => {
  try {
    const [test] = await db.query("SELECT * FROM table_1"); // 返回结果数组，第一个元素是结果集
    res.cc("获取Test成功", 0, test);
  } catch (error) {
    res.cc(error.message);
  }
};

/**
 * 新增Test
 * @param {object} req.body - 新增的Test数据
 */
exports.addTest = async (req, res) => {
  const { name, age } = req.body;
  const insertRow = "INSERT INTO table_1 SET ?";
  try {
    const [result] = await db.query(insertRow, { name, age });
    if (result.affectedRows !== 1) {
      return res.cc("新增Test失败", 1);
    }
    return res.cc("新增Test成功", 0);
  } catch (error) {
    res.cc(error.message);
  }
};

/**
 * 更新Test
 * @param {object} req.body - 更新的Test数据
 */
exports.updateTest = async (req, res) => {
  const { id, name, age } = req.body;
  const selectTest = "SELECT * FROM table_1 WHERE id = ?";
  const insertRow = "UPDATE table_1 SET ? WHERE id = ?";
  try {
    const [test] = await db.query(selectTest, [id]);
    if (test.length === 0) {
      return res.cc("该Test不存在", 1);
    }

    const [result] = await db.query(insertRow, [{ name, age }, id]);
    if (result.affectedRows !== 1) {
      return res.cc("更新Test失败", 1);
    }
    return res.cc("更新Test成功", 0);
  } catch (error) {
    res.cc(error.message);
  }
};

/**
 * 删除Test
 * @param {object} req.query.id - 删除的Test id
 */
exports.deleteTest = async (req, res) => {
  const { id } = req.query;
  const deleteTest = "DELETE FROM table_1 WHERE id = ?";
  try {
    const [result] = await db.query(deleteTest, [id]);
    if (result.affectedRows !== 1) {
      return res.cc("删除Test失败", 1);
    }
    return res.cc("删除Test成功", 0);
  } catch (error) {
    res.cc(error.message);
  }
};

/**
 * 单文件上传
 * @param {object} req.file - 上传的文件
 */
exports.singleUpload = async (req, res) => {
  const addFile = "INSERT INTO table_2 SET ?";
  try {
    // console.log(req.file.filename);
    // console.log(req.body.other);
    const [result] = await db.query(addFile, { image: req.file.filename });
    if (result.affectedRows !== 1) {
      return res.cc("上传失败", 1);
    }
    return res.cc("上传成功", 0);
  } catch (error) {
    res.cc(error.message);
  }
};

/**
 * 多文件上传
 * @param {object} req.file - 上传的文件
 */
exports.multipleUpload = async (req, res) => {
  const addFile = "INSERT INTO table_3 SET ?";

  try {
    // console.log(req.files); // 多文件上传 注意是files，是个数组
    // console.log(req.body.other);
    const [result] = await db.query(addFile, {
      avatar: req.files["avatar"][0].filename,
      image: req.files["image"][0].filename,
    });
    if (result.affectedRows !== 1) {
      return res.cc("上传失败", 1);
    }
    return res.cc("上传成功", 0);
  } catch (error) {
    res.cc(error.message);
  }
};
