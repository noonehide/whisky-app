import { Controller, Context } from 'egg';

export default class BlogController extends Controller {
  public async home(ctx: Context) {
    await ctx.render('blog.js', { url: ctx.url });
  }
}