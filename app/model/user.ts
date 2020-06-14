module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userid: {
      type: STRING(30),
      primaryKey: true,
      allowNull: false
    },
    username: STRING(30),
    password: STRING(100),
    nickname: STRING(10),
    created_at: DATE,
    updated_at: DATE,
  });

  User.associate = function () {
    app.model.User.belongsToMany(app.model.App, { through: app.model.UserAppRelation, sourceKey: 'userid', foreignKey: 'userid', otherKey: 'appid' });
  }

  return User;
};