const Controller = require('egg').Controller;

class UserController extends Controller {
  async user() {
    const ctx = this.ctx;
    const userId = ctx.params.id || '1';
    const user = await ctx.service.user.find(userId);
    ctx.body = user;
  }
}

module.exports = UserController;