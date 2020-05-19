'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('user_app_relation', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      appid: STRING(30),
      userid: STRING(30),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('user-app-relation');
  },
};
