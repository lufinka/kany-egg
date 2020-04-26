const Controller = require('egg').Controller;

class todoController extends Controller {
  async add() {
    const ctx = this.ctx;
    const params = ctx.request.body
    const status = await ctx.service.todo.add(params);
    ctx.body = status;
  }
  async query() {
    const ctx = this.ctx;
    const params = ctx.query
    const data = await ctx.service.todo.query(Object.assign({}, params));
    ctx.body = data;
  }
  async switchStatus() {
    const ctx = this.ctx;
    const params = ctx.request.body
    const status = await ctx.service.todo.switchStatus(Object.assign({}, params));
    ctx.body = status;
  }
}

module.exports = todoController;