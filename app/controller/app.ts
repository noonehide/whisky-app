import { Controller, Context } from 'egg';
import * as shortid from 'shortid'

export default class AppController extends Controller {

  public async list(ctx: Context) {
    // 拿到userid,
    const userid = this.ctx.state.user.userid
    const { appname } = this.ctx.query;
    const result = await this.ctx.model.User.findOne({
      where: { userid },
      include: [
        {
          model: this.ctx.model.App,
          where: { appname }
        },
      ]
    });
    if (result) {
      this.ctx.helper.success(ctx, result)
    } else {
      this.ctx.helper.error(ctx, '没有此app名称')
    }
  }

  public async create(ctx: Context) {
    // 获取userid
    const userid = this.ctx.state.user.userid
    // 获取appname
    const { appname, des } = this.ctx.request.body;
    // 生成appid
    const appid = shortid.generate()
    // 存入表app
    try {
      await this.ctx.model.App.create({ appname, des, appid });
      // 存入表app_user_relation
      await this.ctx.model.UserAppRelation.create({ appid, userid });
      this.ctx.helper.success(ctx)
    } catch (error) {
      console.log('create error', error)
      this.ctx.helper.error(ctx, '已存在该app!')
    }
  }
}