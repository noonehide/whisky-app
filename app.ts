module.exports = app => {

    app.passport.verify(async (ctx, user) => {
        // 查找数据库，并验证密码是否正确

        const User = ctx.model.User;
        const foundUser = await User.findOne({ username: user.username });
        if (!foundUser) { return false; }
        return foundUser;

        return user;
    });

    // 序列化与反序列化，序列化存储到session中只保存用户id
    app.passport.serializeUser(async (ctx, user) => {
        // return pick(user, ['id', 'name', 'username', 'email']);
        return user;
    });

    app.passport.deserializeUser(async (ctx, user) => {
        return user;
    });
}