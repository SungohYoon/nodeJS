module.exports = {
  tuserList: `SELECT * FROM t_users`,
  tuserInsert: `INSERT INTO t_users SET ?`,
  tuserUpdate: `UPDATE t_users SET ? WHERE user_id = ?`,
  tuserDelete: `DELETE FROM t_users WHERE user_id = ?`,
  tuserInfo: `SELECT * FROM t_users WHERE user_id = ?`,
};
