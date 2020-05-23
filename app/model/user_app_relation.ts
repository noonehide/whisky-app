module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const UserAppRelation = app.model.define('user_app_relation', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userid: STRING(30),
    appid: STRING(30),
    created_at: DATE,
    updated_at: DATE,
  }, {
    // 如果为 true 则表的名称和 model 相同，即 user_app_relation
    // 为 false MySQL创建的表名称会是复数 user_app_relations
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true
  });
  return UserAppRelation;
};