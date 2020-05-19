module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const App = app.model.define('app', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        appid: STRING(30),
        appname: STRING(30),
        des: STRING(150),
        created_at: DATE,
        updated_at: DATE,
    });
    return App;
};