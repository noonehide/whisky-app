import { Controller, Context } from 'egg';
import * as shortid from 'shortid'

export default class UserController extends Controller {
  public async test(ctx: Context) {
    const res = ctx.helper.verifyToken(ctx, '11')
    if (res) {
      this.ctx.body = this.ctx.state.user;
    }
  }

  public async register() {
    const { username, password } = this.ctx.request.body;
    this.ctx.model.User.create({ username, password, nickname: 'admin', userid: shortid.generate() });
  }

  public async login(ctx: Context) {
    const { username, password } = this.ctx.request.body;
    // 从数据库中查询
    if (username && password) {
      try {
        const token = await this.ctx.service.user.createToken({
          username,
          password
        });
        ctx.body = JSON.stringify({
          code: 0,
          data: { access_token: token }
        });
      } catch (err) {
        ctx.state = 401;
      }
    }
  }
}