module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const App = app.model.define('apps', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        appid: {
            type: STRING(30),
            primaryKey: true,
            allowNull: false
        },
        appname: STRING(30),
        des: STRING(150),
        created_at: DATE,
        updated_at: DATE,
    });

    App.associate = function () {
        app.model.App.belongsToMany(app.model.User, { through: app.model.UserAppRelation, sourceKey: 'appid', foreignKey: 'appid', otherKey: 'userid' });
    }
    return App;
};