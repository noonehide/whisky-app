import { Controller, Context } from 'egg';
import * as shortid from 'shortid'
import Sequelize from 'sequelize'

export default class AppController extends Controller {

  public async list(ctx: Context) {
    // 拿到userid,
    const userid = this.ctx.state.user.userid
    const { appname } = this.ctx.query;

    const whereParams: any = {}
    if (appname) {
      whereParams.appname = { [Sequelize.Op.like]: `%${appname}%` }
    }


    const result = await this.ctx.model.User.findOne({
      where: { userid },
      include: [
        {
          required: false,
          model: this.ctx.model.App,
          where: whereParams
        },
      ]
    });
    if (result) {
      this.ctx.helper.success(ctx, result)
    } else {
      this.ctx.helper.success(ctx, [])
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