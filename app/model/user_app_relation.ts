module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const UserAppRelation = app.model.define('user_app_relation', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      userid: STRING(30),
      appid: STRING(30),
      created_at: DATE,
      updated_at: DATE,
    });

    return UserAppRelation;
  };