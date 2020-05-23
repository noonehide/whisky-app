import { Controller, Context } from 'egg';
import * as shortid from 'shortid'

export default class AppController extends Controller {

  public async list(ctx: Context) {
    // 拿到userid,
    const userid = this.ctx.state.user.userid
    // 到relation表查出所有的appid
    // 拿appid查出app信息
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
      this.ctx.helper.error(ctx, '已存在该app!')
    }
  }
}