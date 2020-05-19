module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userid: STRING(30),
    username: STRING(30),
    password: STRING(100),
    nickname: STRING(10),
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};