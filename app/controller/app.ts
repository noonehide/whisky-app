import { Controller, Context } from 'egg';
import * as shortid from 'shortid'

export default class AppController extends Controller {

  public async list(ctx: Context) {
    await ctx.render('blog.js', { url: ctx.url });
  }
}