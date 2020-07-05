import { Controller, Context } from 'egg';
import * as shortid from 'shortid'
import Sequelize from 'sequelize'
import { json } from 'co-body'

export default class EventController extends Controller {

    public async create(ctx: Context) {
        // eventData
        const eventData = await json(ctx.req);
        console.log('xxxxqeury', eventData)
        this.ctx.helper.success(ctx, {})
    }
}