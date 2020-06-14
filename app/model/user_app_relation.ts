module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const UserAppRelation = app.model.define('user_app_relation', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userid: {
      type: STRING(30),
      primaryKey: true,
      allowNull: false
    },
    appid: {
      type: STRING(30),
      primaryKey: true,
      allowNull: false
    },
    created_at: DATE,
    updated_at: DATE,
  }, {
    freezeTableName: true
  });

  // tslint:disable-next-line: no-empty
  UserAppRelation.associate = function () {
  }

  return UserAppRelation;
};